// 2번이 좀 더 좋은 방법
exports.PI = 3.14;

exports.min = function(){
    var min = Number.MAX_SAFE_INTEGER;
    for(var i = 0; i < arguments.length; i++){  
        if(arguments[i] < min){
            min = arguments[i];
        }  
    }
    return min;
};

exports.max = function(){
        var max = Number.MIN_SAFE_INTEGER;
            for(var i = 0; i < arguments.length; i++){  
        if(arguments[i] > max){
            max = arguments[i];
        }  
    }
    return max;
};