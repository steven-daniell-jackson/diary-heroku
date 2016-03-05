// Dependacy added for the Invoice Factory

var app = angular.module('ArchiveCtrlMod',['invoiceService']);

// Add the Factory name to the controller
app.controller('ArchiveCtrl', function($scope, Invoice, $routeParams, $location ) {

   $scope.User = {};
   $scope.errorMessage = '';

   // $scope.name = "testsasd222";.

   $scope.preloader = true;

// Get the page location and strip the year. and month from it
$scope.location = $location.path();
$scope.year = $scope.location.substr(9, 4);
$scope.filterMonth = $scope.location.substr(14);

// debug location
// console.log($scope.year);
// console.log($scope.filterMonth);



// Access factory and assign the returned data
Invoice.all()
.success(function(data) {
    $scope.invoices = data;
    $scope.preloader = false;

// Self activating function to get months
$scope.months = [];

(function () {

// Loop through the invoice JSON object returned from api
	for (x in $scope.invoices) {

// If the year matches the year in the url. Find the months
     if ($scope.invoices[x].yearFilter == $scope.year){
    // Check to see if month already exists

    // console.log($scope.invoices[x])
    if ($scope.months.indexOf($scope.invoices[x].monthFilter) == -1) {

        $scope.months.push($scope.invoices[x].monthFilter);

    }
}





}

})();



})
// If error on database connection. Return error message
.error(function(data) {
    console.log('Error: ' + data);
});


});
