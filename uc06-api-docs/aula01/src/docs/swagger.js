import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = 
    swaggerJSDoc({
        definition: {
            openapi: "3.0.0",
            info:{
                title: "API de Usuarios",
                version: "1.0.0",
                description: "Documentação da API usando Express e MVC"
            },
            servers: [
                {url: `http://localhost:${process.env.PORT}`}
            ]
        },
        apis: ["./src/routes/**/*.js"]
    })