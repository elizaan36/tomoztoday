// Things I need to do in Angular:
// 1. set controller for events feed
// 2. Pull in data from server
// 3. Differentiate from "Today", "Tomorrow" and everything else
// 4. Create {{}} for Title, Image, Description, Category (manually created), Price, and location
// 5. How to do the map? Google API/ Angular integration?


angular.module('EventsFeed', [ ])

.controller('MainCtrl', [ '$http',function($http){
	var eventsFeed = this;

	eventsFeed.events = [ ];

	$http.get('/events.json').success(function(data){

		eventsFeed.events = data;
	});

// How to differentiate:
// Events.Today
// Events.Tomorrow
// Events.Future

	];
})
;
