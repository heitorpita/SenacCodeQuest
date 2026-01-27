import ClienteModel from "../Model/clienteModel.js";
import { isValidEmail, isValidDocument, isValidPhone } from "../../../utils/validators.js";

export default class ClienteController {

    static async register(req, res) {
        try {
            const { name, document, email, phone } = req.body;

            if (!name || !document) {
                return res.status(400).json({ msg: "Nome e documento são obrigatórios" });
            }

            const docValidation = isValidDocument(document);
            if (!docValidation.valid) {
                return res.status(400).json({ msg: docValidation.message });
            }

            if (email && !isValidEmail(email)) {
                return res.status(400).json({ msg: "Formato de email inválido" });
            }

            if (phone) {
                const phoneValidation = isValidPhone(phone);
                if (!phoneValidation.valid) {
                    return res.status(400).json({ msg: phoneValidation.message });
                }
            }

            const documentoExistente = await ClienteModel.verificarDocumentos(document);
            if (documentoExistente) {
                return res.status(409).json({ msg: "Documento já cadastrado" });
            }

            if (email) {
                const emailExistente = await ClienteModel.verificarEmail(email);
                if (emailExistente) {
                    return res.status(409).json({ msg: "Email já cadastrado" });
                }
            }

            const client = await ClienteModel.criar({
                name,
                document,
                email,
                phone
            });

            return res.status(201).json(client);
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao registrar cliente", erro: error.message });
        }
    }

    static async listar(req, res) {
        try {
            const clients = await ClienteModel.listar();
            return res.json(clients);
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao listar clientes", erro: error.message });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const client = await ClienteModel.buscarPorId(id);

            if (!client) {
                return res.status(404).json({ msg: "Cliente não encontrado" });
            }

            return res.json(client);
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao buscar cliente", erro: error.message });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { name, document, email, phone } = req.body;

            if (!name) {
                return res.status(400).json({ msg: "Nome é obrigatório" });
            }

            const clienteExistente = await ClienteModel.buscarPorId(id);
            if (!clienteExistente) {
                return res.status(404).json({ msg: "Cliente não encontrado" });
            }

            if (document && document !== clienteExistente.document) {
                const docValidation = isValidDocument(document);
                if (!docValidation.valid) {
                    return res.status(400).json({ msg: docValidation.message });
                }

                const docExistente = await ClienteModel.verificarDocumentos(document);
                if (docExistente && docExistente.id !== parseInt(id)) {
                    return res.status(409).json({ msg: "Documento já cadastrado para outro cliente" });
                }
            }

            if (email && email !== clienteExistente.email) {
                if (!isValidEmail(email)) {
                    return res.status(400).json({ msg: "Formato de email inválido" });
                }

                const emailExistente = await ClienteModel.verificarEmail(email);
                if (emailExistente && emailExistente.id !== parseInt(id)) {
                    return res.status(409).json({ msg: "Email já cadastrado para outro cliente" });
                }
            }

            const cliente = await ClienteModel.atualizar(id, {
                name,
                document: document || clienteExistente.document,
                email: email ?? clienteExistente.email,
                phone: phone ?? clienteExistente.phone
            });

            return res.json({ msg: "Cliente atualizado com sucesso", cliente });

        } catch (error) {
            return res.status(500).json({ msg: "Erro ao atualizar cliente", erro: error.message });
        }
    }

    static async remover(req, res) {
        try {
            const { id } = req.params;

            const cliente = await ClienteModel.buscarPorId(id);
            if (!cliente) {
                return res.status(404).json({ msg: "Cliente não encontrado" });
            }

            await ClienteModel.remover(id);
            return res.status(204).send();

        } catch (error) {
            return res.status(500).json({ msg: "Erro ao remover cliente", erro: error.message });
        }
    }
}