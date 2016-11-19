function ListController(){
    var vm = this;

    vm.list = {
      name: 'Todo List',
      tasks: [
        {
          id: 1,
          name: 'Take out trash',
          complete: false
        },
        {
          id: 2,
          name: 'Clean the room',
          complete: false
        },
        {
          id: 3,
          name: 'Cook dinner',
          complete: false
        },
        {
          id: 4,
          name: 'Wash dishes',
          complete: true
        }
      ]
    }



}

angular
  .module('todoApp')
  .controller('ListController', ListController);
