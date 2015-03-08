// 1. Set display of logo to appear when nav appears
// 2. Set display of logotype to disappear
// 3. Have background image stay fixed in background and fade out (choose better image)



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


// Little Lunches JS 

// Make sure our code only runs when the page ready - because our scripts are in the head of the html page

// $(document).ready( function(){
	// All of our code goes within here - won't run until the page is ready

	// trigger a CSS transition from JS - by removing a class
	// $('h1').removeClass('pre-animation');

// Screate smooth scrolling navigation
$('nav a').on('click', function(){
	console.log('clicking on navigation link?');

	var href = $(this).attr('href');
	console.log('Clicked on the ' + href + ' link');

	// offset gives us an object so we can use the dot notation
	var distanceFromTop = $(href).offset().top;
	console.log(distanceFromTop);

	var options = {
		scrollTop : distanceFromTop - 100
	};

	$('html, body').animate(options);
	
	// to scroll back to top, create a new button with scrollTop : 0

	// console.log( $(href) );

	// stop the default behaviour
	// return false should be the last thing you write as anything below will be ignored
	return false;
});

	// Create parallax scroll effect on iphone/ipad images
	$(document).on('scroll', function(){
		// this happens every single time you scroll
		console.log('Scrolling');

		var currentScrollPos = $(document).scrollTop();
		// Math is a built in library - Takes number down to solid integer
		var moveImagesBy = Math.floor(currentScrollPos / 14 );

		// console.log('We have scrolled ' + currentScrollPos + 'px');

		// create the parallax scroll effect, but make it slower by dividing into scroll position
		$('.macbook').css('left', moveImagesBy  );
		$('.iphone').css('right', moveImagesBy );

	});

	// Create a fixed navigation when we scroll into the intro section

	$('#today').waypoint( function(direction){
		//these instructions happen whenever we scroll to a section
		console.log('We have reached a section! Direction: ' + direction);

		if(direction === 'down'){
			console.log('yes scrolling down');
			// styled up the class 'fixed' by adding it to the html, once you're happy delete from the html and add dynamically with JS
			$('nav').addClass('fixed');
		} else {
			console.log('nope scrolling up');
			$('nav').removeClass('fixed');

		}
	});

	$('section').waypoint(function(direction){
		// Add active class to correct link within the navigation
		var section = this.element.id;
		console.log(section);

		$('nav a').removeClass('active');
		// add active class to the correct link
		
		$('nav a[href="#' + section + '"]').addClass('active');

		// have an animation when we reach the about section
		$('#' + section).find('.fadeInUp').removeClass('fadeInUp');

	}, { offset : 150 });

	// Get instagram images from the API

	// token works to identify us to instagram, then can block us if we send too many requests.
	// var token = '146e599e084f4a56aee2025d2ade9186';
	// var userid = '1068444443';
	// var getUserPhotosUrl = 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?client_id=' + token + '&callback=?';

	// // API request using $.getJSON -
	// $.getJSON(getUserPhotosUrl, function(response){
	// 	console.log(response);

	// 	var photos = response.data;
	// 	var testPhoto = photos[0].images.standard_resolution.url;
	// 	// console.log( testPhoto );

	// 	for(var i = 0; i < 4; i++){
	// 		$('#instagram').children().eq(i).attr('src', photos[i].images.standard_resolution.url );

	// 		// console.log(photos[i].images.standard_resolution.url);
	// 	}

	// });

	// $('section').eq(2).css('background-color', 'green');


	$('.find-foundrs').on('click', function(){

		var lng = $(this).data('lng');
		var lat = $(this).data('lat');
		var type = 'coffee';
	

	// Search the Foursquare API
	var id = '54HJX1UERJIB3Z4WV44TPM01RQ3AOJXKM1YAHPB3EF3XBSA4';
	var secret = 'P0CTXFBGQHFATQYWHYNHGBY3RST1CTXCPPHGYRIXJW3BYQTU';

	var foursquareUrl = 'https://api.foursquare.com/v2/venues/search?client_id=' + id + '&client_secret=' + secret + '&v=20130815&ll=' + lng + ',' + lat + '&query' + type;

	// .getJSON with foursquareUrl
	$.getJSON(foursquareUrl, function(response){
		// console.log(response);
		var venues = response.response.venues;
		console.log(venues);

		for(var i = 0;i < 9; i++){
			console.log( venues[i].name );

			$('.foursquare-result').eq(i).text(venues[i].name);

		}

		$('#foursquare').slideDown(500);

	});
	
	// stop default button behaviour
	return false;

});

// });








