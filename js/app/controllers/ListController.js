function ListController(){
    var vm = this;

    vm.add = add;
    vm.currentTask = {};

    vm.tasks = [
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

    // add
    function add(){
      vm.currentTask.done = false;
      vm.tasks.push(vm.currentTask);
      vm.currentTask = {};
    }

    // filter
    vm.filter = {
      done: { done: true },
      remaining: { done: false }
    };

    vm.currentFilter = null;

    vm.changeFilter = function(filter){
      vm.currentFilter = filter;
    };


}

angular
  .module('todoApp')
  .controller('ListController', ListController);
