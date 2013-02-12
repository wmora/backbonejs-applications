var TodosCollection = Backbone.collection.extend({
	model: Todo,
	localStorage: new Store('todos-backbone')
});

//Some examples working with collections
var myTodo = new Todo({title:'A title', completed: false});

//Pass array of models on collection instantiation
var todos = new TodosCollection([myTodo]);
console.log('Collection size ' + todos.length);

//As collections represent a group of items, we're also able to listen to
//add and remove events for when new models are added or removed from the
//collection
todos.on("add", function(todo){
	console.log("I just added a new task! " + todo.get('title'));
});
//You can also bind events on changes for a particular model in the collection
todos.on("change:title", function(model){
	console.log('A task has been updated! ' + model.get("title"));
});


//You could also use a collection's create method to add an instance
todos.create({title:'Another title', completed:true});
console.log('Collection size ' + todos.length);

//Getting an element is straight-forward
var todo2 = todos.get(2);

//Models, as objects, are passed by reference
console.log(todo2 === myTodo);

//Sometimes you may also want to get a model based on its client id. The client
//id is a property that Backbone automatically assigns models that have not yet
//been saved. You can get a model's client id from its .cid property
var todoCid = todos.get(todo2.cid);

//Collections don't have getters nor setters, but support adding models view .add()
//and removing via .remove()
var a = new Todo({title:'Title A', completed: false}),
	b =	new Todo({title:'Title B', completed: false}),
	c =	new Todo({title:'Title C', completed: false});

var todos = new TodosCollection([a, b, c]);

todos.add([a,b,c]);
todos.remove([b,c]);

