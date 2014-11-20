

//define getItemsCount function
//accepts full item data
//returns the length of the items array
// var getItemsCount = function(itemData){
// 	return itemData.items.name;
// };

//output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

//create your answer in this file.
//the above is just provided as a simple example.

/*--------------------~~~Problem One~~~-------------------*/
var getItems = function(data){
	return data.items
}
load products.json
var googleProduct = require("./products.json")

console.log(getItems(googleProduct));



/*--------------------~~~Problem Two~~~---------------------*/
var companyArray = []
var getItemsByBrand = function(array,itemBrand) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].product.brand === itemBrand) {
			companyArray.push(array[i])
		}
	}  
	return companyArray
}

var googleProduct = require("./products.json")

console.log(
	getItemsByBrand(getItems(googleProduct), "Nikon")
	);


/*------------------~~~Problem Three~~~-----------------------*/
// ##3.) getItemsByAuthor(array, author)
// Create a function called `getItemsByAuthor` that
// takes an item array and returns a new array of all items
// by a specified author.
// Test this function by searching for Target, CDW, eBay


var googleProduct = require("./products.json")
var arrayOfAuthors = []
var getItemsByAuthor = function(array, author){
	for (var i = 0; i < array.length, i++;) {
		if (array[i].author.name === author) {
			arrayOfAuthors.push(array[i].author.name)
		}
	}
	return arrayOfAuthors
}



console.log(
	getItemsByAuthor(googleProduct.items, "Ebay")
    );



