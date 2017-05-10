var bubbleSort = function(array) {
    for(var i = array.length-1; i>=0; i--) {
        for(var j = 0; j<array.length; j++){
            if(array[j-1]>array[j]){
                var temp = array[j-1];
                array[j-1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}