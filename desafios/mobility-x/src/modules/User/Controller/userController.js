import Usuario from "../Model/Usuario.js";
import ClienteModel from "../../Cliente/Model/clienteModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { isValidEmail, isValidPassword, isValidDocument, isValidPhone } from "../../../utils/validators.js";

export default class UsuarioController {

  static async register(req, res) {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ msg: "Nome, email e senha são obrigatórios" });
      }

      if (!isValidEmail(email)) {
        return res.status(400).json({ msg: "Formato de email inválido" });
      }

      const passwordValidation = isValidPassword(password);
      if (!passwordValidation.valid) {
        return res.status(400).json({ msg: passwordValidation.message });
      }

      const validRoles = ['admin', 'seller'];
      if (role && !validRoles.includes(role)) {
        return res.status(400).json({ msg: "Perfil inválido. Use: admin ou seller" });
      }

      const usuarioExistente = await UsuarioModel.buscarComSenhaPorEmail(email);
      if (usuarioExistente) {
        return res.status(409).json({ msg: "Email já cadastrado" });
      }

      const user = await UsuarioModel.criar({
        name,
        email,
        password,
        role: role || 'seller'
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao registrar usuário", erro: error.message });
    }
  }

  static async registerCliente(req, res) {
    try {
      const { name, email, password, document, phone } = req.body;

      if (!name || !email || !password || !document) {
        return res.status(400).json({ 
          msg: "Nome, email, senha e documento são obrigatórios" 
        });
      }

      if (!isValidEmail(email)) {
        return res.status(400).json({ msg: "Formato de email inválido" });
      }

      const passwordValidation = isValidPassword(password);
      if (!passwordValidation.valid) {
        return res.status(400).json({ msg: passwordValidation.message });
      }

      const docValidation = isValidDocument(document);
      if (!docValidation.valid) {
        return res.status(400).json({ msg: docValidation.message });
      }

      if (phone) {
        const phoneValidation = isValidPhone(phone);
        if (!phoneValidation.valid) {
          return res.status(400).json({ msg: phoneValidation.message });
        }
      }

      const resultado = await UsuarioModel.criarUsuarioCliente({
        name,
        email,
        password,
        document,
        phone
      });

      return res.status(201).json({
        msg: "Conta cliente criada com sucesso",
        user: resultado.user,
        client: resultado.client
      });

    } catch (error) {
      return res.status(400).json({ msg: error.message || "Erro ao registrar cliente" });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ msg: "Email e senha são obrigatórios" });
      }

      const user = await UsuarioModel.buscarComSenhaPorEmail(email);

      if (!user) {
        return res.status(401).json({ msg: "Credenciais inválidas" });
      }

      const senhaValida = await bcrypt.compare(password, user.password_hash);

      if (!senhaValida) {
        return res.status(401).json({ msg: "Credenciais inválidas" });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
      );

      let clientData = null;
      if (user.role === 'cliente') {
        clientData = await ClienteModel.buscarPorUsuarioId(user.id);
      }

      return res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        client: clientData
      });
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao realizar login", erro: error.message });
    }
  }

  static async listar(req, res) {
    try {
      const users = await UsuarioModel.listar();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao listar usuários", erro: error.message });
    }
  }

  static async meuPerfil(req, res) {
    try {
      const userId = req.user.id;
      const perfil = await UsuarioModel.buscarPerfilCompleto(userId);

      if (!perfil) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
      }

      return res.json(perfil);
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao buscar perfil", erro: error.message });
    }
  }

  static async atualizarMeuPerfil(req, res) {
    try {
      const userId = req.user.id;
      const { name, email, document, phone } = req.body;

      if (!name) {
        return res.status(400).json({ msg: "Nome é obrigatório" });
      }

      if (email) {
        if (!isValidEmail(email)) {
          return res.status(400).json({ msg: "Formato de email inválido" });
        }

        const existente = await UsuarioModel.buscarComSenhaPorEmail(email);
        if (existente && existente.id !== userId) {
          return res.status(409).json({ msg: "Email já está em uso" });
        }
      }

      const user = await UsuarioModel.atualizar(userId, { 
        name, 
        email: email || req.user.email 
      });

      let client = null;
      if (req.user.role === 'cliente') {
        const clienteExistente = await ClienteModel.buscarPorUsuarioId(userId);
        if (clienteExistente) {
          client = await ClienteModel.atualizar(clienteExistente.id, {
            name,
            document: document || clienteExistente.document,
            email: email || clienteExistente.email,
            phone: phone || clienteExistente.phone
          });
        }
      }

      return res.json({
        msg: "Perfil atualizado com sucesso",
        user,
        client
      });

    } catch (error) {
      return res.status(500).json({ msg: "Erro ao atualizar perfil", erro: error.message });
    }
  }

  static async alterarSenha(req, res) {
    try {
      const userId = req.user.id;
      const { senha_atual, nova_senha } = req.body;

      if (!senha_atual || !nova_senha) {
        return res.status(400).json({ msg: "Senha atual e nova senha são obrigatórias" });
      }

      const passwordValidation = isValidPassword(nova_senha);
      if (!passwordValidation.valid) {
        return res.status(400).json({ msg: passwordValidation.message });
      }

      const user = await UsuarioModel.buscarComSenhaPorEmail(req.user.email);
      const senhaValida = await bcrypt.compare(senha_atual, user.password_hash);

      if (!senhaValida) {
        return res.status(401).json({ msg: "Senha atual incorreta" });
      }

      await UsuarioModel.atualizarSenha(userId, nova_senha);

      return res.json({ msg: "Senha alterada com sucesso" });

    } catch (error) {
      return res.status(500).json({ msg: "Erro ao alterar senha", erro: error.message });
    }
  }

  static async remover(req, res) {
    try {
      const { id } = req.params;

      const usuario = await UsuarioModel.buscarPorId(id);
      if (!usuario) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
      }

      await UsuarioModel.remover(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ msg: "Erro ao remover usuário", erro: error.message });
    }
  }

  static async excluirMinhaConta(req, res) {
    try {
      const userId = req.user.id;

      await UsuarioModel.removerUsuarioCliente(userId);

      return res.json({ msg: "Conta excluída com sucesso" });

    } catch (error) {
      return res.status(400).json({ msg: error.message || "Erro ao excluir conta" });
    }
  }
}
