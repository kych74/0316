/**
 * @author yj
 */
SearchView = Backbone.View.extend({
 	initialize: function(){
 		this.render();
 	},
 	
	render: function(){
		
		var variables = { search_label: "Search Form" };
		
 		var template = _.template( $("#search_template").html(), variables);

		this.$el.html( template );
	},
	
	
	events: {
		
		"click input[type=button]": "doSearch"
		
	},
	
	doSearch: function( event ){
		
		alert( "Search for " + $("#search_input").val() );
		
	}
});

var search_view = new SearchView({ el: $("#search_container") });




Person = Backbone.Model.extend({
	
	defaults: {
		pw:'unknown',
		name:'guest',
		tel: 'NA'
	},
	
	initialize: function(){
		console.log('Person initailized..', this.get('id'));
		this.on("change:pw", function(model){
			var pw = model.get("pw");
			model.display();
		});
	},
	
	setPw: function( newpw ){
		this.set( {pw:newpw});
	},
	
	display: function( ){
		
		alert( this.get('id') +":" + this.get('pw') +':' + this.get('name'));
	}
	
});



// var person = new Person({ id: "user01", pw: 'user01', name:'홍길동'});
// 
// 
// person.setPw('pw01');
// 
// 
// console.log(person.toJSON());




var PersonList = Backbone.Collection.extend({
    model: Person
  });
  

var person1 = new Person({ id: "user01", pw: 'user01', name:'홍길동1'});
var person2 = new Person({ id: "user02", pw: 'user02', name:'홍길동2'});
var person3 = new Person({ id: "user03", pw: 'user03', name:'홍길동3'});
var person4 = new Person({ id: "user04", pw: 'user04', name:'홍길동4'});
 
var personList = new PersonList([person1, person2, person3, person4 ]);
 
console.log(personList);
 

var AppRouter = Backbone.Router.extend({
	routes: {
		"posts/:id": "getPost",
		"*actions": "defaultRoute"
	}
});


var app_router = new AppRouter;

app_router.on('route:getPost', function (id) {
	alert(id); 
});

app_router.on('route:defaultRoute', function (actions) {
	alert('default route action');
});

Backbone.history.start();



console.log(app_router.routes);
///backbone04.html#/posts/user01

