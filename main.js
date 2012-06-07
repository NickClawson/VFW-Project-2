/*
Author: Nick Clawson
Date: 6/2/2012
VFW 1206 Project: Coaster Rater */

window.addEventListener("DOMContentLoaded", function(){ //This function waits until the DOM is ready to exectute

	function $(x){ //This function will get an element by it's ID and return that element
		var element = document.getElementById(x);
		return element;
	};
	function makeCategory(){ //Creates a select element in HTML form
		var formTag = document.getElementsByTagName("form"); 
		var selectLi = $('select');
		var makeSelect = document.createElement('select');
		
		makeSelect.setAttribute("id", "locations");//sets id attribute of select element to 'location'
		for(var i = 0, j = rideLocation.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = rideLocation[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		};
		selectLi.appendChild(makeSelect);

	};
	var rideLocation = ["--Choose a Park--", "Cedar Point", "King's Island","Kennywood","Hersheypark"];//These are default variables from the drop menu
	makeCategory()

	//The below variales set link and submit button click events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", saveData);
});