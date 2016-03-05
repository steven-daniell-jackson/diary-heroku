app.directive('archivework', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      customInvoiceData : '='
    }, 
    templateUrl: 'app/views/partials/archivePanel.html',
     link: function(scope, element, attrs) {
    // here is the problem, data is really undefined
    // console.log(scope.customInvoiceData);
}
  }; 
});