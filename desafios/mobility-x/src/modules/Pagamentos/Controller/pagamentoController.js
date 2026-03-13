import PagamentoModel from '../Model/pagamentoModel.js';
import VendasModel from '../../Vendas/Model/vendasModel.js';
import ClienteModel from '../../Cliente/Model/clienteModel.js';
import AuditoriaModel from '../../Auditoria/Model/auditoriaModel.js';
import { isValidPrice } from '../../../utils/validators.js';

export default class PagamentoController {

    static async registrar(req, res) {
        try {
            const { sale_id } = req.params;
            const { amount, payment_method } = req.body;
            const user = req.user;

            if (!amount) {
                return res.status(400).json({ msg: "Valor do pagamento é obrigatório" });
            }

            if (!payment_method) {
                return res.status(400).json({ msg: "Método de pagamento é obrigatório" });
            }

            const priceValidation = isValidPrice(amount);
            if (!priceValidation.valid) {
                return res.status(400).json({ msg: priceValidation.message });
            }

            const venda = await VendasModel.buscarPorId(sale_id);
            if (!venda) {
                return res.status(404).json({ msg: "Venda não encontrada" });
            }

            if (venda.status !== 'em_andamento') {
                return res.status(400).json({ 
                    msg: `Não é possível registrar pagamento. Venda está ${venda.status}` 
                });
            }

            if (user.role === 'cliente') {
                const clienteVinculado = await ClienteModel.buscarPorUsuarioId(user.id);
                if (!clienteVinculado || venda.client_id !== clienteVinculado.id) {
                    return res.status(403).json({ 
                        msg: "Você não tem permissão para registrar pagamento nesta venda" 
                    });
                }
            }

            const pagamento = await PagamentoModel.criar({
                saleId: sale_id,
                amount: parseFloat(amount),
                paymentMethod: payment_method
            });

            const totalPago = await PagamentoModel.totalPago(sale_id);
            const faltaPagar = venda.final_price - totalPago;

            await AuditoriaModel.registrar({
                userId: user.id,
                action: 'registrar_pagamento',
                resource: 'payments',
                resourceId: pagamento.id,
                payload: {
                    sale_id,
                    amount,
                    payment_method,
                    total_pago: totalPago
                }
            });

            return res.status(201).json({
                msg: "Pagamento registrado com sucesso",
                pagamento,
                resumo: {
                    valor_venda: venda.final_price,
                    total_pago: totalPago,
                    falta_pagar: faltaPagar > 0 ? faltaPagar : 0,
                    quitado: faltaPagar <= 0
                }
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao registrar pagamento",
                erro: error.message
            });
        }
    }

    static async listarPorVenda(req, res) {
        try {
            const { sale_id } = req.params;
            const user = req.user;

            const venda = await VendasModel.buscarPorId(sale_id);
            if (!venda) {
                return res.status(404).json({ msg: "Venda não encontrada" });
            }

            if (user.role === 'cliente') {
                const clienteVinculado = await ClienteModel.buscarPorUsuarioId(user.id);
                if (!clienteVinculado || venda.client_id !== clienteVinculado.id) {
                    return res.status(403).json({ 
                        msg: "Você não tem permissão para ver os pagamentos desta venda" 
                    });
                }
            }

            const pagamentos = await PagamentoModel.listarPorVenda(sale_id);
            const totalPago = await PagamentoModel.totalPago(sale_id);

            return res.json({
                pagamentos,
                resumo: {
                    valor_venda: venda.final_price,
                    total_pago: totalPago,
                    falta_pagar: venda.final_price - totalPago > 0 ? venda.final_price - totalPago : 0,
                    quitado: totalPago >= venda.final_price
                }
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao listar pagamentos",
                erro: error.message
            });
        }
    }
}
