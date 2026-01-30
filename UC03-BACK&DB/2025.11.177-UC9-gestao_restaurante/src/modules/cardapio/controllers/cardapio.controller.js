import CardapioModel from "../models/cardapio.model.js";

export default class CardapioController {

    static async listar(req, res) {
        try {
            const itens = await CardapioModel.listar();
            return res.status(200).json(itens);
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao listar itens do cardápio", details: error.message });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const item = await CardapioModel.buscarPorId(id);
            if (!item) {
                return res.status(404).json({ erro: "Item do cardápio não encontrado" });
            }
            return res.status(200).json(item);
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao buscar item do cardápio", details: error.message });
        }
    }

    static async criar(req, res) {
        try {
            const { nome, descricao, preco, porcao, categoria } = req.body;

            if (!nome || !preco) {
                return res.status(400).json({ erro: "Nome e preço são obrigatórios" });
            }

            const item = await CardapioModel.criar({ nome, descricao, preco, porcao, categoria });
            return res.status(201).json(item);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const dados = req.body;
            const item = await CardapioModel.atualizar(id, dados);
            return res.status(200).json(item);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;
            await CardapioModel.deletar(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}