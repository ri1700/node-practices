module.exports = {
    PI: 3.14,
    min: function() {
        var min = Number.MAX_SAFE_INTEGER;
        for(var i = 0; i < arguments.length; i++) {
            if(arguments[i] < min ) {
                min = arguments[i];
            }
        }
        return min;
    },
    
    max: function() {
        var max = Number.MIN_SAFE_INTEGER;
        for(var i = 0; i < arguments.length; i++) {
            if(arguments[i] > max ) {
                max = arguments[i];
            }
        }
        return max;
    }
}