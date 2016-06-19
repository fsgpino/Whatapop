
angular
    .module("whatapop")
    .filter("stringLimiter", function(){
        return function(string, limit){
            if (string.length > limit) {
                var stringLimited = string.substr(0,limit);
                return stringLimited.substr(0,stringLimited.lastIndexOf(" "))+"...";
            } else {
                return string;
            }
        }
    });
