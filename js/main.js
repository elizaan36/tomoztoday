
//This is a comment!

console.log('Welcome message. Yay!!');

// name of variable on the left - value on the right
var welcomeMessage = 'Hello everybody. Welcome to Steer!';
var numOfStudents = 13;

console.log(numOfStudents);


// What can JS even do
// - change the html on our page
// - change the css on our page
// - add/remove html or blocks of content

// Selecting something on the page
// This is vanilla JS (not using a library)
// document.getElementById('title').innerHTML = 'welcome';

// using jQuery to make our life easier
// $('#title').text(welcomeMessage);

// jQuery selector
// $('#about') - select something from html by id
// $('.panel') - select something using the tagname
// $('.alert')
// $('section p') - select something using the tagname
// $'input[type="submit"]') - anything that works in CSS 


// select the header of the page. change the html to be an image.
// $('header').html('<img src="http://placehold.it/800x100">');

// change the css of the h2 and h3
// $('h4, h3').css('color', '#D04171');

// When somebody clicks on the header
// $('header') select the element 
// $('header').on(); on() is for listening to user events

// can be helpful to read backwards - click, on, header...
$('header').on('click', function(){
	// inside of here is our list of instructions
	console.log('Clicking on the header!!');

	// change css
	$('h1').css('border-color', '#D04171');

	// change text
	$('h1').text(' Big fan of Javascript ');

});

// Select the button, on click send message to console
// Get the value from our form
// $('.btn-attend').on('click', function(){

	// //var name = 'sam';
	
	// var name = $('.input-name').val();

	// console.log(name + ' is clicking on the button');

	// // remove an element from the html
	// $('form').remove();

	// // add some new html to the page
	// $('.signup').html('<div class="alert"> Thanks for attending ' + name + '</div>');

	// // jQuery built in animations
	// $('.alert').fadeIn(600);

// });

// Home Page
// ---------

// Select the view events button.
// Check it's working using the console
// look at how we can animate to contents


$('.view-events').on('click', function(){
	//list of instructions
	console.log('clicking on the view events button');

	// Use this keyword to relate to whatever just happened -which one did we just click on? this one.
	// $(this).css('background-color', '#D04171');

	// We can use parent(), children(), next(), to navigate around the html
	// $(this).parent().css('background-color', '#53C8D5');

	// move from the button we clock on to the paret  - 
	// $(this).parent().next().fadeToggle();

	$(this).parent().next().slideToggle();

	// we can add and remove classes using jQuery - this allows us to keep our styles in our stylesheet
	$(this).parent().toggleClass('selected');

	// $('.item-body').fadeIn();
});

// use .hide() to hide elements on our page when the website loads
$('.item-body').hide();


// Lightbox JS - Data Attributes

// click on one of the event thumbnails
// lightbox to fade in
// select the data from the html of the corrent event
// fill in the information within the lightbox using the data

// when lightbox is open, click on anything else
// will cause the lightbox to fade out

$('.event').on('click', function(){
	console.log('clicking on event thumb');
	// console.log( this );

	//select data from the html
	var eventName = $(this).data('name');
	var imageName = $(this).data('image');
	var user = $(this).data('user');
	var attendees = $(this).data('attendees');
	var date = $(this).data('date');

	// change one attribute of an html element
	$('.lightbox-inner img').attr('src', 'images/' + imageName + '.jpg');
	$('.lightbox-content h2').text(eventName); 
	$('.lightbox-content .creator').text(user);
	$('.lightbox-content .date').text(date);
	$('.lightbox-content .attendees').text(attendees);


	console.log( eventName );
	console.log( imageName );

	//custom jQuery animation
	$('.lightbox-inner').animate({
		'top': '40%'
		
	})

	$('#lightbox').fadeIn();


});

// click event for fading out lightbox
$('#lightbox').on('click', function(){

	// animate takes 3 options
	// 1. css to animate
	// 2. duration
	// 3. function to run when animation finishes

	$('.lightbox-inner').animate({
		'top': '40%'
	}, 1000, function(){
		console.log('Where am I!!');
		$('.lightbox-inner').css('top', '60%');
	});
		
	$(this).fadeOut(1000);
});



// Getting data with AJAX
// Go to a server, request some information and bring back the response

// var url = 'http://js-steer.herokuapp.com/event/1';

// $.getJSON(url, function(response){
// 	console.log(response);

// 	// Drill down into the response from the API using dot notation. e.g - response.data.name
// 	console.log(response.result);

// 	// check if two things are exactly the same (value and type)
// 	// does the equation resolve true
// 	// 'success' === 'success' - yes do the first blog, else do the second block
// 	if( response.result === 'success') {

// 	var data = response.data;
// 	var ticketsForSale = data.max_count - data.count;
// 	var message = 'There are currently ' + ticketsForSale + ' tickets left';

// 	console.log(message);

// 	} else {

// 		console.log('something went wrong');
// 		console.warn(response.data.message);

// 	}
// });

// When click on btn-attend
// get the data from the input-name
// get the data from input-guests
// store that data in an object
// console.log that data to the console

// $('.btn-attend').on('click', function(){

// 	// make our own Javascript object
// 	var formData = {
// 		name : 'sam',
// 		guests: 5

// 	};
// 	console.log(formData);

// });


// send a message to the console
console.log('is it working?');

// store information

var name = 'sam';

console.log('my name is ' + name);

var favoriteNumber = 7;

var instagramUrl = 'http://instagram.com/api/v1';

// Create a set of instructions that happen when we click

$('.btn-attend').on('click', function(){
	console.log('Is my button actually doing anything??');

	$(this).css('background-color', 'D04171');


var url = 'http://js-steer.herokuapp.com/events/';

// get json from the url
// create a set of instructions with function(){}
// within the set of instructions use console.log to see the response
// drill down into the response with the dot notation e.g. response.data.events

// var events - response.data.events;


$.getJSON(url, function(response){
// 	console.log(response);

// 	console.log(response.result);

// Events is an array of 3 events [Object,Object,Object]
var events = response.data.events;
// access one event using the specific number e.g events[0] to get the first

for(var counter = 0; counder <= 2; counter++){
		// loop over from 0,1,2 and console.log each one
		console.log ( events[counter].attendees );

		// add each event name to the html
		$('.new-events').append('<h2>'+ events[counter].name +'</h2>');

}

}

// if ( response.result === 'success') {

// 	var events = response.data.events;

// } else {

// 	console.log('something went wrong');

// }


// });


// });

// Array - List of Information

// var name = 'sam'; // string
// var favoriteNumber = 7; // integer
// var car = {
// 	doors : 5,
// 	colour: 'blue'

// } // Object - car.doors

// var shoppingList = ['oats', 'onions', 'eggs', 'coffee'];

// console.log("Shopping list -", shoppingList[0]);

// // Loop over information - lots of the same thing with a small amount of code

// // start our counter, keep going while this equation is true
// for(var counter = 0; counter <= 4; counter++){
// 	console.log("The counter is currently at: " + counter);

// 	console.log( shoppingList[counter] );

// }







