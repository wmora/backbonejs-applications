var Todo = Backbone.Model.extend({
	//If you want any default values
	defaults: {
		title: '',
		completed: false
	}

	//The initialize method is called when a new instance of a model is created.
	//Its use is optional, but it is good practice to implement it
	initialize.function() {
		console.log('This model has been initialized');
		//Any and all of the attributes in Backbone model can have listeners
		//bound to them which detect when their values change. Listeners are
		//added inside initialize:
		//Generic change:
		this.on('change', function() {
			console.log("Hey! something changed!");
		});
		//Specific change:
		this.on('change:title', function(){
			console.log('The title attribute of this instance has changed');
		});
	}

	//Here is a basic example for validation:
	validate: function(attributes){
		if(attributes.title === undefined) {
			return 'A title must be set for your todo item';
		}
	}

});

//We can then create our own concrete instance of a Todo model
//with no values at all:
var todo1 = new Todo();
console.log(todo1);
//Getters and setters are implemented by default so these work:
console.log(todo1.get('title'));
console.log(todo1.get('completed'));
console.log(todo1.set('title', 'This is the new title of this Todo object'));
//Or you could also set a map of attributes with Model.set()
todo1.set({
	title:'We are updating both attributes at once',
	completed: true
});


var todo2 = new Todo({
	title:'Check attributes property of both model instances in the console',
	completed: true
});

//If you need to read or clone all of a model's data attributes use its toJSON method.
//It returns a copy of the attributes of an object.
console.log(todo2.toJSON());

var todo3 = new Todo();
todo3.set('completed', false); //validation returns error message