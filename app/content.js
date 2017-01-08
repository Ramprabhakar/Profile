/**
 * Created by rramp on 1/2/2017.
 */

  	var accessToken = 'EAACEdEose0cBAL5I6bXkE8YHMqlU5k6MVao16esZAoUKUumDrDOhEGtYcqYxB1ov2F5iUZAkvsUN5MTpMGQcHSQ9UOqV1QwVBMuoZAxOVAZCV7lzRJiM7TqlyiZCcL5yh3ZAMpa32ooV6Lw59Tf1DHjZCgpZAQBqDkXDPpWzQzdJVQZDZD',
   	    secretKey = 'e1889f27213590b0d956ca1d815ab572',
        id = '726440980853837';

app.controller('facebookFeed', ['$http','$scope', function($http,$scope) {

    $http.get('https://graph.facebook.com/' + id + '/feed?access_token=' + accessToken)
        .success(function (data) {
            $scope.picture = data.data[0].picture;
            $('.feed').fadeIn();
            $scope.isEmpty = function (obj) {
                for (var i in obj) if (obj.hasOwnProperty(i)) return false;
                return true;
            };
        }).error(function () {
                 $scope.items = [{
                         "message": "Opps! There was a problem loading the feed!",
                 }];
                 $('.feed').fadeIn();
         });
}]);




//     $scope.message = "Click on the hyper link to view the students list.";
// });

