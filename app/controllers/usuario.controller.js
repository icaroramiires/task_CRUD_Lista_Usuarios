angular
    .module('app')
    .controller('UsuarioController', UsuarioController);

    function UsuarioController(toastr) {
        let vm = this;
        vm.perfis = ["Administrador", "Padrão"];
        vm.perfilInicial = vm.perfis[1];

        vm.usuarios = [{
            id: 0,
            dataRegistro: new Date("2015-03-24"),
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
        vm.carregarUsuario = carregarUsuario;

        let id = 0;
        function cadastrar(usuario) {
            usuario.id = ++id;
            usuario.perfil = vm.perfilInicial;
            usuario.status = 'Pendente';
            vm.usuarios.push(angular.copy(usuario));
            toastr.success('Usuário salvo com sucesso com sucesso', 'Sucesso');
            vm.usuario = {};
        };

        function save(usuario) {
            if(usuario.id == undefined) {
                cadastrar(usuario);
            } else {
                alterar(usuario);
            }
        };

        function carregarUsuario(usuario) {
            vm.usuario = angular.copy(usuario);
        };

        function alterar(usuario) {
            vm.usuarios.filter(function(item){
                if(usuario.id === item.id) {
                    item = angular.copy(usuario);
                    toastr.success('Usuário atualizado com sucesso', 'Sucesso');
                }
            });
        }
        function listar() {
            return vm.usuarios;
        };

        function deletar(usuario) {
            let index = vm.usuarios.indexOf(usuario);
            vm.usuarios.splice(index, 1);
             toastr.success('Usuário removido com sucesso', 'Sucesso');
        };
    };
