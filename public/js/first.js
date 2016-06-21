var clientApp = angular.module('clientApp',[]);
var model={
    items:[]
};

clientApp.run(function($http){
    $http.get("https://wsexone.herokuapp.com/bestStudents").
    success(function(data){
        model.items.length=0;
        var i=0;
        data.forEach(function(obj){
            console.log(obj);
            model.items.push(obj);
        });
    });
});

clientApp.controller('clientController', function ($scope , $http) {

    $scope.clientModel=model;


    $scope.getStudentById = function() {

        //$scope.msg = "Hello, id >>"+ $scope.studentId;
        $http.get("https://wsexone.herokuapp.com/getStudById/"+ $scope.studentId).
        success(function(data){
            model.items.length=0;
            var i=0;
            data.forEach(function(obj){
                model.items.push(obj);
                console.log(obj);
            });        
        });
    };


   

     $scope.getStudentByYear = function() {
       // $scope.msg = "Hello, year >> "+ $scope.studentYear;
        $http.get("https://wsexone.herokuapp.com/excellentStudentByYear/"+ $scope.studentYear).
        success(function(data){
            model.items.length=0;
            var i=0;
            data.forEach(function(obj){
                model.items.push(obj);
                console.log(obj);
            });        
        });
    };
});