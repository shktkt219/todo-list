function ToDoController($scope){

  this.todos = [];
  this.newTitle = '';

  this.addTodo = function(){
    this.todos.push({
      title: this.newTitle,
      done: false
    });
    this.newTitle = '';
  };
}

angular
  .module('todoApp')
  .controller('ToDoController', ToDoController)
