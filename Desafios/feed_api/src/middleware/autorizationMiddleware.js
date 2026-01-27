// Middleware genérico para verificar perfis permitidos
export function perfispermitidos(perfisPermitidos) {
    let lista = [];
    if (Array.isArray(perfisPermitidos)){
        lista = perfisPermitidos;
    } else {
        lista = [perfisPermitidos];
    }

    return (req, res, next) => {
        const perfil = req.userRole;
        
        if (!perfil) {
            return res.status(401).json({erro: "Usuário não autenticado"});
        }
        
        if (lista.includes(perfil)) {
            return next();
        }
        return res.status(403).json({erro: "Acesso Negado - Você não tem permissão para este serviço"});
    };
}

// Middlewares pré-configurados para diferentes roles
export const autorization = {
    admin: perfispermitidos(["ADMIN"]),
    aluno: perfispermitidos(["ALUNO"]),
    todos: perfispermitidos(["ADMIN", "ALUNO"])
};

export default autorization;