var selectionSort = function(array) {
    var minIndex, temp;
    for(var i = 0; i < array.length(); i++){
        minIndex = i;
        for(var j = i + 1; j < array.length(); j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        var temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}