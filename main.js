var app = angular.module('TodoApp', []);

app.controller("TodoCtrl", function($scope){
  $scope.title = "Welcome to Your Todo App";

  $scope.todos = [
    {name:"mow the lawn", complete : "incomplete"},
    {name: "code with angular", complete : "complete"},
    {name: "try and sleep", complete : "incomplete"},
    {name: "take up basket weaving", complete : "incomplete"}
  ];

  $scope.killTodo = function(todo){
    var todoIndex = $scope.todos.indexOf(todo);
    console.log("todoIndex", todoIndex);
    if (todoIndex >= 0) {
      $scope.todos.splice(todoIndex, 1);
    }
  };
//angular is smart enough that this doesn't need to be in the controller:
  // $scope.searchText = "";

});


app.controller("PastaCtrl", function($scope){
  $scope.pasta = "I love carbs";
  $scope.foods = "";
});