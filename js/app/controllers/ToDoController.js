function ToDoController($scope){

  this.todos = [];

  this.addTodo = function(){
    this.todos.push({
      title: Math.random(),
      done: false
    });
  };
}

angular
  .module('todoApp')
  .controller('ToDoController', ToDoController)
