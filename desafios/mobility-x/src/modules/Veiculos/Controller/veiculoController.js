import VeiculoModel from "../Model/veiculoModel.js";
import { isValidVehicleYear, isValidPrice } from "../../../utils/validators.js";

export default class VeiculosController{

    static async register(req,res){
        try {
            
        const {brand, model, year, price } = req.body;
        
        if(!brand || !model || !year || !price ){
            return res.status(400).json({msg: "Campos brand, model, year e price são obrigatórios"})
        }

        const yearValidation = isValidVehicleYear(year);
        if (!yearValidation.valid) {
            return res.status(400).json({msg: yearValidation.message})
        }

        const priceValidation = isValidPrice(price);
        if (!priceValidation.valid) {
            return res.status(400).json({msg: priceValidation.message})
        }

        const veiculo = await VeiculoModel.criar({
            brand,
            model,
            year: parseInt(year),
            price: parseFloat(price)
        });
        return res.status(201).json(veiculo)
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao registrar veículo", erro: error.message });
        }
    }

    static async listar(req,res){
        try {
            const veiculos = await VeiculoModel.listar();
            return res.json(veiculos)
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao listar veículos", erro: error.message });            
        }
    }

    static async listarDisponiveis(req,res){
        try {
            const veiculos = await VeiculoModel.listarDisponiveis();
            return res.json(veiculos)
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao listar veículos", erro: error.message });            
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const veiculo = await VeiculoModel.buscarPorId(id);
            
            if (!veiculo) {
                return res.status(404).json({ msg: "Veículo não encontrado" });
            }
            
            return res.json(veiculo);
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao buscar veículo", erro: error.message });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { brand, model, year, price, status } = req.body;

            if (!brand || !model || !year || !price) {
                return res.status(400).json({ msg: "Campos brand, model, year e price são obrigatórios" });
            }

            const yearValidation = isValidVehicleYear(year);
            if (!yearValidation.valid) {
                return res.status(400).json({msg: yearValidation.message})
            }

            const priceValidation = isValidPrice(price);
            if (!priceValidation.valid) {
                return res.status(400).json({msg: priceValidation.message})
            }

            if (status && !['disponivel', 'reservado', 'vendido'].includes(status)) {
                return res.status(400).json({ msg: "Status inválido. Use: disponivel, reservado ou vendido" });
            }

            const veiculo = await VeiculoModel.atualizar(id, {
                brand,
                model,
                year: parseInt(year),
                price: parseFloat(price),
                status
            });

            if (!veiculo) {
                return res.status(404).json({ msg: "Veículo não encontrado" });
            }

            return res.json({ msg: "Veículo atualizado com sucesso", veiculo });
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao atualizar veículo", erro: error.message });
        }
    }

    static async remover(req, res) {
        try {
            const { id } = req.params;
            
            const veiculo = await VeiculoModel.buscarPorId(id);
            if (!veiculo) {
                return res.status(404).json({ msg: "Veículo não encontrado" });
            }

            if (veiculo.status === 'vendido') {
                return res.status(400).json({ msg: "Não é possível remover um veículo vendido" });
            }

            await VeiculoModel.remover(id);
            return res.status(204).send();
        
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao remover veículo", erro: error.message });            
        }
    }
}