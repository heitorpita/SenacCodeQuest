import MusicaModel from "../models/musicModel.js";

 
export default class MusicaController{

    static listar(req, res){
        try {
            const musicas = MusicaModel.listar();
            if(!musicas){
                res.status(400).json({msg: "Erro ao listas as muúsicas"});
                    return;
            }
            res.status(200).json(musicas);
        } catch (error) {
            res.status(500).json({msg: "erro interno", erro: error.message})
        }
    } 

    static buscarPorId(req, res){
        try {
          const id = req.params.id;
          const musica = MusicaModel.buscarPorId(id);
            if (!musica) {
                res.status(400).json({msg: "Musica Nao encontrada"})
                return;
            }
            res.status(200).json(musica)
        } catch (error) {
            res.status(500).json({msg: "erro ao buscar musica", erro: error.message})
        }
    }

    static buscarPorGenero(req, res){
        try {
            const genero = req.params.genero.toLowerCase();
            const musica = MusicaModel.buscarPorGenero(genero);
            if (musica.length === 0) {
              res.status(400).json({ msg: "Nenhuma musica encontrada!" });
              return
            }
            res.status(200).json(musica);  
        } catch (error) {
            res.status(500).json({msg: "erro interno", erro: error.message})
        }
    }

    static criar(req, res){
        try {
            const { titulo, artista, ano, genero, duracao } = req.body;

            if (!titulo || !artista || !ano || !genero || !duracao) {
                res.status(400).json({ msg: "Preencha todos os requisitos!" });
                return;
              }
            
              const musicas = MusicaModel.listar();

            const anoAtual = new Date().getFullYear();
            if (ano < 1900 || ano > anoAtual) {
            res.status(400).json({ msg: "Ano inválido!" });
            return;
            }

            const existe = musicas.find(
            (m) =>
                m.titulo.toUpperCase() === titulo.toUpperCase() &&
                m.artista.toUpperCase() === artista.toUpperCase()
            );

            if (existe) {
            res.status(400).json({ msg: "Título ou artista já existe!" });
            return;
            }

            const novaMusica = {
            id: musicas.length + 1,
            titulo: titulo,
            artista: artista,
            ano: parseInt(ano),
            genero:genero,
            duracao:duracao,
            };

            MusicaModel.criar(novaMusica);

            res.status(201).json({ msg: "Criado com sucesso!", novaMusica });
        } catch (error) {
            res.status(500).json({ msg: "Erro interno", erro: error.message });
        }
    }
    static atualizar(req, res) {
        try {
          const id = parseInt(req.params.id);
          const { titulo, artista, ano, genero, duracao } = req.body;
      
          if (!titulo || !artista || !ano || !genero || !duracao) {
            res.status(400).json({ msg: "Preencha todos os requisitos!" });
            return;
          }
      
          const musicas = MusicaModel.listar();
      
          const anoAtual = new Date().getFullYear();
          if (ano < 1900 || ano > anoAtual) {
            res.status(400).json({ msg: "Ano inválido!" });
            return;
          }
      
          const existe = musicas.find(
            (m) =>
              m.id !== id &&
              m.titulo.toUpperCase() === titulo.toUpperCase() &&
              m.artista.toUpperCase() === artista.toUpperCase()
          );
      
          if (existe) {
            res.status(400).json({ msg: "Título ou artista já existe!" });
            return;
          }
      
          const atualizar = MusicaModel.atualizar(id, {
            titulo,
            artista,
            ano,
            genero,
            duracao,
          });
      
          res.status(200).json({ msg: "Atualizado!", atualizar });
        } catch (error) {
          res.status(500).json({ msg: "Erro interno", erro: error.message });
        }
      }

      static deletar(req, res) {
        try {
          const id = req.params.id;
          const status = MusicaModel.deletar(id);
          if (!status) {
            res.status(400).json({ msg: "Não encontrado!" });
            return;
          }
          res.status(200).json({ msg: "Musica excluida com sucesso"});
        } catch (error) {
          res.status(500).json({ msg: "Erro interno", erro: error.message });
    
        }
}
}