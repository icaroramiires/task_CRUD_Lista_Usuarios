angular
    .module('app')
    .controller('UsuarioController', UsuarioController);

    function UsuarioController($filter) {
        let vm = this;
        id = 0;
        vm.perfis = ["Administrador", "Padrão"];

        vm.usuario = {};
        vm.usuarios = [{
            id: 0,
            dataRegistro: "2015-03-24",
            nome: "Leurimar da Silva Lins",
            email: "leurimar.lins@gmail.com",
            perfil: "Administrador",
            status: "Ativo",
            telefone: "(83) 98827-2291"
        }];
        vm.cadastrar = cadastrar;
        vm.save = save;
        vm.alterar = alterar;
        vm.listar = listar;
        vm.deletar = deletar;

        function cadastrar(usuario) {
            usuario.id = ++id;
            usuario.status = 'Pendente';
            vm.usuarios.push(angular.copy(usuario));
            vm.usuario = {};
        };

        function save(usuario) {
            if(usuario.id == undefined) {
                cadastrar(usuario);
            } else {
                alterar(usuario);
            }
        };

        function alterar(usuario) {
            vm.usuarios.filter(function(item){
                if(usuario.id === item.id) {
                    item = angular.copy(usuario);
                }
            });
        }
        function listar() {
            return vm.usuarios;
        };

        function deletar(usuario) {
            let index = vm.usuarios.indexOf(usuario);
            vm.usuarios.splice(index, 1);
        };
    };
