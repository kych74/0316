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
		id:'unknown',
		pw:'unknown',
		name:'guest',
		tel: 'NA'
	},
	
	initialize: function(){
		alert( this.get('id'));
	},
	
	setPw: function( newpw ){
		this.set( {pw:newpw});
	},
	
	display: function( ){
		
		alert( this.get('id') +":" + this.get('pw') +':' + this.get('name'));
	}
	
});



var person = new Person({ id: "user01", pw: 'user01', name:'홍길동'});


person.setPw('pw01');

person.display();



