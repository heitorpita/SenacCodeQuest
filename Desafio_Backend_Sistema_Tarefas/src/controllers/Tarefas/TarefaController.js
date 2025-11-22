import TarefaModel from "../../models/Tarefas/TarefaModel.js";

export default class TarefaController{

    static listar(req, res){
        try {
            const userId = req.usuario.id
            const tasks = TarefaModel.listar();
            if (!tasks) {
                res.status(400).json({msg: "Erro ao listar Tasks"});
                    return;
            }
            res.status(200).json(tasks)

        } catch (error) {
            res.status(500).json({msg: "Erro ao listar Tasks", erro: error.message})
        }
    }

    static buscarPorId(req, res){
        try {
            
        const id = parseInt(req.params.id);
        const task = TarefaModel.buscarPorId(id)

        if (!task) {
            return res.status(404).json({msg: "Task nao encontrada"})
        }
        return res.status(200).json(task);
        } catch (error) {
            return res.status(500).json({msg: "Erro ao buscar task por ID", erro: error.message})
        }
    }

        static async criar(req, res) {
        try {
        const { title, description, status } = req.body;

        if (!title) {
            return res.status(400).json({ erro: "O campo 'title' é obrigatório." });
        }

        const novaTask = TarefaModel.criar({
            title,
            description,
            status,
        });

        res.status(201).json({ msg: "Task criada com sucesso!", novaTask });
        } catch (error) {
        res.status(500).json({ msg: "Erro ao criar task", erro: error.message });
        }
    }

      static atualizar(req, res) {
    try {
      const id = parseInt(req.params.id);
      const { title, description, status } = req.body;

      const taskAtualizada = TarefaModel.atualizar(id, { title, description, status });
      if (!taskAtualizada) {
        return res.status(404).json({ msg: "Task não encontrada." });
      }

      return res.status(200).json({
        msg: "Task atualizada com sucesso!",
        task: taskAtualizada
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao atualizar task",
        erro: error.message
      });
    }
  }
    static deletar(req, res) {
    try {
      const id = parseInt(req.params.id);
      const deletou = TarefaModel.deletar(id);

      if (!deletou) {
        return res.status(404).json({ msg: "Task não encontrada." });
      }

      return res.status(200).json({ msg: "Task deletada com sucesso!" });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao deletar task",
        erro: error.message
      });
    }}

}