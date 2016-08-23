angular
    .module('app')
    .controller('UsuarioController', UsuarioController);

    function UsuarioController() {
        let vm = this;
        vm.perfis = ["Administrador", "Padrão"];

        vm.usuarios = [{
            dataRegistro: "22/08/2016",
            nome: "Leurimar da Silva Lins",
            email: "leurimar.lins@gmail.com",
            perfil: "Administrador",
            status: "Ativo",
            telefone: "(83) 98827-2291"
        }];

        vm.cadastrar = cadastrar;
        vm.listar = listar;
        vm.reset = reset;

        function cadastrar(usuario) {
            vm.usuarios.push(usuario);
        };

        function listar() {
            return vm.usuarios;
        };

        function reset() {

        }
    };
