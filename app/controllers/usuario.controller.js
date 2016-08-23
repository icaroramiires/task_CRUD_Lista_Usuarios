(function() {
    'user strict';
    angular
        .module('app')
        .controller('UsuarioController', UsuarioController);

    let UsuarioController = function() {
        let vm = this;
        vm.usuarios = [{
            dataCadastro: Date.now(),
            nome: "Leurimar da Silva Lins",
            email: "leurimar.lins@gmail.com",
            perfil: "Administrador",
            status: "Ativo",
            celular: "(83) 98827-2291"
        }];

        vm.cadastrar = function(usuario){
            vm.usuarios.push(usuario);
        };

        vm.listar = function() {
            return vm.usuarios;
        }

        vm.atualizar = function(id, usuario) {
            vm.usuarios.update(id, usuario);
        }

        vm.remove = function() {
            vm.usuarios.remove(id, usuario);
        }
    }
})()
