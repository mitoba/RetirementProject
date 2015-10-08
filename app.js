//Starting functions. Will refactor to make things private and move into a Service or Controller.

//Locations dictionary
var locations = {};

//Location object constructor. Will have more parameters and properties in the future.
//Current parameters: name, Cost-of-Living, weather/climate, geography
function Location(name, CoL, weather, geo){
	this.name = name;
	this.CoL = CoL;
	this.weather = weather;
	this.geo = geo;
};

var addLocation = function (name, CoL, weather, geo){
	locations[name] = new Location(name, CoL, weather, geo);
	console.log(locations); //for debugging
	return name; //optional
};

var removeLocation = function (name){
	delete locations[name];
	console.log(locations); //for debugging
};


//Method to manually add properties. Probably won't use it, but have it just in case.
var addProp = function(locationName, prop, value) {
	locations[locationName].prop = value;
	console.log(locations[locationName]); //for debugging
};

//Method to manually remove properties. Probably won't use it, but have it just in case.
var removeProp = function(locationName, prop) {
	delete locations[locationName].prop;
	console.log(locations[locationName]); //for debugging
};
