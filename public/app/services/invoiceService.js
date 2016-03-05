angular.module('invoiceService', [])

// Create Invoice Factory object
.factory('Invoice', function($http){

	var invoiceFactory = {};

// Create post factory to post data to api
	invoiceFactory.create = function(invoiceData){

		return	$http.post('/api/new-invoice',invoiceData)
	}

// Create get factory to retrieve data from api
	invoiceFactory.all = function(){
		return	$http.get('/api/invoices');
	}

	return	invoiceFactory;

});
