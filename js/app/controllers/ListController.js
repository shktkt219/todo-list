function ListController(){
    var vm = this;
    var selectedId = -1;

    vm.add = add;
    vm.currentTask = {};

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

    function reset(){
      selectedId = -1;
    }

    function add(){
      vm.currentTask.complete = false;
      vm.list.tasks.push(vm.currentTask);
      vm.currentTask = {};
    }



}

angular
  .module('todoApp')
  .controller('ListController', ListController);
