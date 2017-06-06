var text = 'The sum is';
function addIt(numA, numB){
	var total = numA + numB;
	console.log(total + total);
}

function multiply(numA, numB) {
	var total = numA * numB;
	return total;

}
console.log(multiply(29, 4));
addIt(8,8);
addIt(10,10);
console.log(text);

var myClass = 'You are all great!';
var kurt = {
	arms: 2,
	bigNose: true,
	hairColor: 'brown',
	slogan: function(what){
		console.log(what + ' is awesome');
	}


}
kurt.slogan('JavaScript');
kurt.hairColor = 'brown';
console.log(kurt.hairColor);
console.log(myClass);
