import CursoModel from "../models/CursoModel.js";

export default class CursoController {

    static async criar(req, res) {
        try {
            const { nome, descricao } = req.body;

            if (!nome || !descricao) {
                return res.status(400).json({
                    erro: "Nome e descrição são obrigatórios"
                });
            }

            const curso = await CursoModel.criar(nome, descricao);
            return res.status(201).json(curso);

        } catch (error) {
            return res.status(500).json({
                erro: "Erro ao criar curso",
                detalhe: error.message
            });
        }
    }

    static async listar(req, res) {
        try {
            const cursos = await CursoModel.listar();
            return res.status(200).json(cursos);

        } catch (error) {
            return res.status(500).json({
                erro: "Erro ao listar cursos",
                detalhe: error.message
            });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;

            const curso = await CursoModel.buscarPorId(Number(id));

            if (!curso) {
                return res.status(404).json({
                    erro: "Curso não encontrado"
                });
            }

            return res.status(200).json(curso);

        } catch (error) {
            return res.status(500).json({
                erro: "Erro ao buscar curso",
                detalhe: error.message
            });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;

            const curso = await CursoModel.atualizar(
                Number(id),
                nome,
                descricao
            );

            return res.status(200).json(curso);

        } catch (error) {
            return res.status(500).json({
                erro: "Erro ao atualizar curso",
                detalhe: error.message
            });
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;

            await CursoModel.deletar(Number(id));

            return res.status(204).send();

        } catch (error) {
            return res.status(500).json({
                erro: "Erro ao deletar curso",
                detalhe: error.message
            });
        }
    }
}
