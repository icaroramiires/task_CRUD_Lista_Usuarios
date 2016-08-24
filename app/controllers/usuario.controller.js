angular
    .module('app')
    .controller('UsuarioController', UsuarioController);

function UsuarioController(toastr) {
    let vm = this;
    vm.perfis = ["Administrador", "Padrão"];
    vm.perfilInicial = vm.perfis[1];
    vm.required = true;
    vm.usuarios = [{
        id: 0,
        dataRegistro: new Date("2015-03-24"),
        nome: "Leurimar da Silva Lins",
        email: "leurimar.lins@gmail.com",
        perfil: "Administrador",
        status: "Ativo",
        telefone: "(83) 98827-2291"
    }, {
        id: 1,
        dataRegistro: new Date("2015-03-24"),
        nome: "Ícaro Ramires",
        email: "icarobsi@hotmail.com",
        perfil: "Padrão",
        status: "Pendente",
        telefone: "(77) 99165-3296"
    }];


    let id = 1;
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
        if (usuario.id === undefined) {
            cadastrar(usuario);
        } else {
            alterar(usuario);
        }
        vm.form = {};
    };

    vm.alterar = alterar;

    function alterar(usuario) {
        let usuarios = vm.usuarios.map((item, id) => {
            if (id === usuario.id) {
                delete(usuario);
                return usuario;
            }
            return item;
        });
        vm.usuarios = usuarios;
        toastr.success('Usuário atualizado com sucesso', 'Sucesso');
    };

    vm.deletar = deletar;

    function deletar(usuario) {
        let index = vm.usuarios.indexOf(usuario);
        vm.usuarios.splice(index, 1);
        toastr.success('Usuário removido com sucesso', 'Sucesso');
    };

    vm.carregar = carregar;

    function carregar(usuario) {
        vm.form = angular.copy(usuario);
    }
};
