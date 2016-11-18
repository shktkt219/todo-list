function ToDoController(){

  this.todos = [];
  this.newTitle = '';

  this.addTodo = function(){
    this.todos.push({
      title: this.newTitle,
      done: false
    });
    this.newTitle = '';
  };

  this.filter = {
    done: { done: true },
    remaining: { done: false }
  };

  this.currentFilter = null;

  this.changeFilter = function(filter){
    this.currentFilter = filter;
  };
}

angular
  .module('todoApp')
  .controller('ToDoController', ToDoController);
