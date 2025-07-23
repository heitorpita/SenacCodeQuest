const {UsuarioPadrao} = require('./UsuarioPadrao')
const {UsuarioAdmin} = require('./UsuarioAdmin')

let usuariocomum01 = new UsuarioPadrao("Maria", "Maria@gamail.com")

console.log(usuariocomum01.acessarSistema());
console.log(usuariocomum01.verPerfil());

let admin = new UsuarioAdmin("Pedro", "Pedro@gmail.com")

console.log(admin.acessarSistema());
console.log(admin.excluirUsuario());

