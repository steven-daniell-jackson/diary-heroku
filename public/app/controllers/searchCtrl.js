// Dependacy added for the Invoice Factory

var app = angular.module('SearchCtrlMod',['invoiceService']);

// Add the Factory name to the controller
app.controller('SearchCtrl', function($scope, Invoice, $routeParams, $window) {

   $scope.User = {};
   $scope.errorMessage = '';


$scope.preloader = true;
   $scope.name = "testsasd222";

$scope.reloadRoute = function() {
  $scope.clientNameFilter = '';
   $window.location.reload();
}

// Access factory and assign the returned data
Invoice.all()
.success(function(data) {
    $scope.invoices = data;
$scope.preloader = false;


})
// If error on database connection. Return error message
.error(function(data) {
    console.log('Error: ' + data);
});


});
