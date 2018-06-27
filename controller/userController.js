app.controller('userController', function($scope,userService) {
  $scope.loginData = {
    email: "",
    password: ""
  };

  $scope.user = {
    name: "",
    email: "",
    password: "",
    mobile: ""
  };

  $scope.forgot = {
    email: ""
  }

  $scope.login = function() {
    console.log(angular.toJson($scope.loginData));
    userService.login($scope.loginData);
  };

  $scope.registerForm = function() {
    console.log(angular.toJson($scope.user));
    userService.register($scope.user);
  };

  $scope.forgotPassword = function() {
    console.log($scope.forgot);
  }
});
