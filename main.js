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
		
		for(var i = 0, j = rideLocation.length; i<j; i++){ //for loop cycles through rideLocation array and assigns the value of each index to the new select element
			var makeOption = document.createElement('option');
			var optText = rideLocation[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		};
		selectLi.appendChild(makeSelect);

	};
	function getSelectedRadio(){//function determines if radio button is checked
		var radios = document.forms[0].type;
		for(var i = 0; i < radios.length; i++){
			if(radios[i].checked){
				typeValue = radios[i].value;
			};
		};
	};

	function saveData(){ //function will add form data to local storage
		getSelectedRadio();
		var id = Math.floor(Math.random() * 132145433);
		var storageItem = {};
			storageItem.ride = ["Ride Name", $("rname").value];
			storageItem.park = ["Park", $("locations").value];
			storageItem.type = ["Ride Type", typeValue];
			storageItem.rating = ["Rating", $("rating").value];
			storageItem.date = ["Date Ridden", $("date").value];
			storageItem.comments = ["Comments", $("comments").value];
		
		//local storage can only accept strings! below converts above object to string and saves it
		localStorage.setItem(id, JSON.stringify(storageItem));
		alert("Rating Saved, Ride On!");
	};


	//Default Variables
	var rideLocation = ["--Choose a Park--", "Cedar Point", "King's Island","Kennywood","Hersheypark"];
	var typeValue;
	makeCategory();

	//The below variales set link and submit button click events
//	var displayLink = $('displayLink');
//	displayLink.addEventListener("click", getData);
//	var clearLink = $("clear");
//	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", saveData);
});