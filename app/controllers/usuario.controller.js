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


    let id = 0;
    vm.cadastrar = cadastrar;

    function cadastrar(usuario) {
        usuario.id = ++id;
        usuario.perfil = vm.perfilInicial;
        usuario.status = 'Pendente';
        vm.usuarios.push(angular.copy(usuario));
        toastr.success('Usuário salvo com sucesso com sucesso', 'Sucesso');
        vm.usuario = {};
    };

    vm.save = save;

    function save(usuario) {
        if (usuario.id == undefined) {
            cadastrar(usuario);
        } else {
            alterar(usuario);
        }
    };

    vm.alterar = alterar;

    function alterar(usuario) {
        vm.usuarios.filter(function(item) {
            if (usuario.id === item.id) {
                item = angular.copy(usuario);
                toastr.success('Usuário atualizado com sucesso', 'Sucesso');
            }
        });
    };

    vm.listar = listar;

    function listar() {
        return vm.usuarios;
    };

    vm.deletar = deletar;

    function deletar(usuario) {
        let index = vm.usuarios.indexOf(usuario);
        vm.usuarios.splice(index, 1);
        toastr.success('Usuário removido com sucesso', 'Sucesso');
    };
};
