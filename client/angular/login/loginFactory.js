app.factory('loginFactory', function($http){

			var factory = {};

			factory.findUser = function(info, callback){
				info.company = false;
				$http.post('/user/find', info).success(function(output){
					callback(output);
				})
			}

			return factory;
		})
