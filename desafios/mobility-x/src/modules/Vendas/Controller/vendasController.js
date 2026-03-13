import VendasModel from '../Model/vendasModel.js';
import ClienteModel from '../../Cliente/Model/clienteModel.js';
import AuditoriaModel from '../../Auditoria/Model/auditoriaModel.js';
import { isValidPrice } from '../../../utils/validators.js';

export default class VendasController {

    static async register(req, res) {
        try {
            const { vehicle_id, client_id, final_price, payment_method, notes } = req.body;
            const user = req.user;

            if (!vehicle_id) {
                return res.status(400).json({ msg: "ID do veículo é obrigatório" });
            }

            if (!final_price) {
                return res.status(400).json({ msg: "Valor final é obrigatório" });
            }

            const priceValidation = isValidPrice(final_price);
            if (!priceValidation.valid) {
                return res.status(400).json({ msg: priceValidation.message });
            }

            let effectiveClientId = client_id;

            if (user.role === 'cliente') {
                const clienteVinculado = await ClienteModel.buscarPorUsuarioId(user.id);
                
                if (!clienteVinculado) {
                    return res.status(400).json({ 
                        msg: "Usuário cliente não possui cadastro de cliente vinculado" 
                    });
                }

                effectiveClientId = clienteVinculado.id;

                if (client_id && client_id !== effectiveClientId) {
                    return res.status(403).json({ 
                        msg: "Você não pode realizar compras em nome de outro cliente" 
                    });
                }
            } else {
                if (!client_id) {
                    return res.status(400).json({ msg: "ID do cliente é obrigatório" });
                }
            }

            const novaVenda = await VendasModel.criar({
                vehicleId: vehicle_id,
                clientId: effectiveClientId,
                sellerId: user.id,
                finalPrice: final_price,
                paymentMethod: payment_method,
                notes: notes
            });

            await AuditoriaModel.registrar({
                userId: user.id,
                action: 'criar_venda',
                resource: 'sales',
                resourceId: novaVenda.id,
                payload: {
                    vehicle_id,
                    client_id: effectiveClientId,
                    final_price,
                    payment_method
                }
            });

            return res.status(201).json({
                msg: "Venda criada com sucesso. Veículo reservado.",
                venda: novaVenda
            });

        } catch (error) {
            return res.status(400).json({
                msg: error.message || "Erro ao criar venda"
            });
        }
    }

    static async concluir(req, res) {
        try {
            const { id } = req.params;
            const { payment_method } = req.body;
            const user = req.user;

            const vendaExistente = await VendasModel.buscarPorId(id);
            if (!vendaExistente) {
                return res.status(404).json({ msg: "Venda não encontrada" });
            }

            if (user.role === 'cliente') {
                const clienteVinculado = await ClienteModel.buscarPorUsuarioId(user.id);
                if (!clienteVinculado || vendaExistente.client_id !== clienteVinculado.id) {
                    return res.status(403).json({ msg: "Você não tem permissão para concluir esta venda" });
                }
            }

            if (user.role === 'seller' && vendaExistente.seller_id !== user.id) {
                return res.status(403).json({ msg: "Você não tem permissão para concluir vendas de outros vendedores" });
            }

            const vendaConcluida = await VendasModel.concluir(id, payment_method);

            await AuditoriaModel.registrar({
                userId: user.id,
                action: 'concluir_venda',
                resource: 'sales',
                resourceId: parseInt(id),
                payload: {
                    payment_method,
                    status_anterior: 'em_andamento',
                    status_novo: 'concluida'
                }
            });

            return res.status(200).json({
                msg: "Venda concluída com sucesso. Veículo marcado como vendido.",
                venda: vendaConcluida
            });

        } catch (error) {
            return res.status(400).json({
                msg: error.message || "Erro ao concluir venda"
            });
        }
    }

    static async cancelar(req, res) {
        try {
            const { id } = req.params;
            const { motivo } = req.body;
            const user = req.user;

            const vendaExistente = await VendasModel.buscarPorId(id);
            if (!vendaExistente) {
                return res.status(404).json({ msg: "Venda não encontrada" });
            }

            if (user.role === 'cliente') {
                const clienteVinculado = await ClienteModel.buscarPorUsuarioId(user.id);
                if (!clienteVinculado || vendaExistente.client_id !== clienteVinculado.id) {
                    return res.status(403).json({ msg: "Você não tem permissão para cancelar esta venda" });
                }
            }

            if (user.role === 'seller' && vendaExistente.seller_id !== user.id) {
                return res.status(403).json({ msg: "Você não tem permissão para cancelar vendas de outros vendedores" });
            }

            if (!motivo && user.role !== 'admin') {
                return res.status(400).json({ msg: "Motivo do cancelamento é obrigatório" });
            }

            const vendaCancelada = await VendasModel.cancelar(id, motivo);

            await AuditoriaModel.registrar({
                userId: user.id,
                action: 'cancelar_venda',
                resource: 'sales',
                resourceId: parseInt(id),
                payload: {
                    motivo,
                    status_anterior: vendaExistente.status,
                    status_novo: 'cancelada'
                }
            });

            return res.status(200).json({
                msg: "Venda cancelada. Veículo liberado para novas vendas.",
                venda: vendaCancelada
            });

        } catch (error) {
            return res.status(400).json({
                msg: error.message || "Erro ao cancelar venda"
            });
        }
    }

    static async listar(req, res) {
        try {
            const user = req.user;
            let vendas;

            if (user.role === 'admin') {
                vendas = await VendasModel.listar();
            } else if (user.role === 'cliente') {
                const clienteVinculado = await ClienteModel.buscarPorUsuarioId(user.id);
                if (!clienteVinculado) {
                    return res.json([]);
                }
                vendas = await VendasModel.listarPorCliente(clienteVinculado.id);
            } else {
                vendas = await VendasModel.listar();
            }

            return res.json(vendas);
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao listar vendas",
                erro: error.message
            });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const user = req.user;

            const venda = await VendasModel.buscarPorId(id);

            if (!venda) {
                return res.status(404).json({ msg: "Venda não encontrada" });
            }

            if (user.role === 'cliente') {
                const clienteVinculado = await ClienteModel.buscarPorUsuarioId(user.id);
                if (!clienteVinculado || venda.client_id !== clienteVinculado.id) {
                    return res.status(403).json({ msg: "Você não tem permissão para ver esta venda" });
                }
            }

            return res.json(venda);
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao buscar venda",
                erro: error.message
            });
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;
            const user = req.user;

            const vendaRemovida = await VendasModel.remover(id);

            await AuditoriaModel.registrar({
                userId: user.id,
                action: 'remover_venda',
                resource: 'sales',
                resourceId: parseInt(id),
                payload: { removido_por: user.email }
            });

            return res.status(200).json({
                msg: "Venda removida com sucesso",
                venda: vendaRemovida
            });
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao deletar venda",
                erro: error.message
            });
        }
    }
}

