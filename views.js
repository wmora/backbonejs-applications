//Don't be confused: these views do not contain any markup for
//an app. These support models by defining the logic for 
//how they should be represented to the user.
//A view's render() function can be bound to a model's change()
//event, allowing the view to always be up to date without
//requiring a full page refresh

//To create a new View, simply extend Backbone.View
var TodoView = new Backbone.View.extend({
	tagName: 'li',

	//Cache the template function for a single item.
	todoTpl: _.template($('#item-template').html()),

	events: {
		'dbclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blu .edit': 'close'
	},

	//Re-render the title of the todo item
	render: function() {
		this.$el.html(this.todoTpl(this.model.toJSON()));
		this.input = this.$('.edit');
		return this;
	},

	edit:function(){
		//executed when todo label is double clicked
	},

	close:function() {
		//executed when todo loses focus
	},

	updateOnEnter: function(e) {
		//executed on each keypress when in todo edit mode,
		//but we'll wait for enter to get in action
	}
});

var todoView = new TodoView();

//logs reference to a DOM element that corresponds to the view instance
console.log(todoView.el);