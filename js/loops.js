var cities = ['New York', 'Washington D.C', 'Compton', 'Seattle', 'L.A.']
var ul = document.createElement('ul');

for (var x = 0; x < cities.length; x++){
	var li = document.createElement('li');
	li.innerHTML = cities[x]; //creates li's within the variable
	ul.appendChild(li);	
}
document.body.appendChild(ul);