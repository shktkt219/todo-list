function ListController(){
    var vm = this;

    vm.add = add;
    vm.currentTask = {};

    vm.list = {
      name: 'Todo List',
      tasks: [
        {
          id: 1,
          name: 'Take out trash',
          done: false
        },
        {
          id: 2,
          name: 'Clean the room',
          done: false
        },
        {
          id: 3,
          name: 'Cook dinner',
          done: false
        },
        {
          id: 4,
          name: 'Wash dishes',
          done: true
        },
        {
          id: 5,
          name: 'Pick up my son from school',
          done: false
        }
      ]
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
