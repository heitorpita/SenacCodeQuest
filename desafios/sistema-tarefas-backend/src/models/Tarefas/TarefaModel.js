import { tarefa } from "../../data/Tarefas/TarefaBanco.js";


export default class TarefaModel {

	static listar() {
		return tarefa;

	}

	static buscarPorId(id){
		return tarefa.find(t => t.id === id);
	}

	static criar(tarefas) {
		tarefa.push(tarefas);
		return tarefas;
	}


	static atualizar(id, novosDados){
		const index = tarefas.findIndex(u => u.id === parseInt(id))
		if(index === -1 ){
			return null;
		}
		tarefa[index] = {...tarefa[index], ...novosDados};
		return tarefa[index]
	}

	static deletar(id){
		const index = tarefas.findIndex(u => u.id === parseInt(id));
		if (index === -1) {
			return false;
		}
		tarefa.splice(index, 1);
		return true;


	}



}
