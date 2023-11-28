angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapi-env.eba-ewtx33jv.eu-north-1.elasticbeanstalk.com/';

    return service;
}]);