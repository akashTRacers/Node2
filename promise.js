	var fs = require("fs");
	let readfile1 = function() 
	{
  				return new Promise(function(resolve, reject){
  					
  					fs.readFile('abc.txt', function (err, data) {
					//console.log(data.toString());
					resolve(data.toString());
				});
  			});		
 	
 	};


let readfile2 = function(message) 
	{
  				return new Promise(function(resolve, reject){
  					
  					fs.readFile('pqr.txt', function (err, data) {
					//console.log(data.toString());
					resolve(message+ data.toString());
				});
  			});		
 	
 	};

let readfile3 = function(message) 
	{
  				return new Promise(function(resolve, reject){
  					
  					fs.readFile('xyz.txt', function (err, data) {
					//console.log(data.toString());
					resolve(message+ data.toString());
				});
  			});		
 	
 	};




readfile1().then(function(result){
	return readfile2(result);
}).then(function(result){
	return readfile3(result);
}).then(function(result){
	console.log('*****' + result);
})