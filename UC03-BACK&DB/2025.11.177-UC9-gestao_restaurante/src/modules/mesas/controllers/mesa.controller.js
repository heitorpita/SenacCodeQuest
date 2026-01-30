import MesaModel from "../models/mesa.model.js";

class MesaController {

  static async listar(req, res) {
    try {
      const mesas = await MesaModel.findAll();
      return res.status(200).json(mesas);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao listar mesas", details: error.message });
    }
  }

  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const mesa = await MesaModel.findByPk(id);

      if (!mesa) {
        return res.status(404).json({ erro: "Mesa não encontrada" });
      }

      return res.status(200).json(mesa);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao buscar mesa", details: error.message });
    }
  }

  static async criar(req, res) {
    try {
      const { numero, capacidade, status } = req.body;

      if (!numero) {
        return res.status(400).json({ erro: "Número da mesa é obrigatório" });
      }

      const mesa = await MesaModel.create({ numero, capacidade, status });
      return res.status(201).json(mesa);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;

      const mesa = await MesaModel.findByPk(id);
      if (!mesa) {
        return res.status(404).json({ erro: "Mesa não encontrada" });
      }

      await mesa.update(dados);
      return res.status(200).json(mesa);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      const mesa = await MesaModel.findByPk(id);
      
      if (!mesa) {
        return res.status(404).json({ erro: "Mesa não encontrada" });
      }

      await mesa.destroy();
      return res.status(200).json({msg: "Mesa deletada com sucesso"});
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

export default MesaController;
