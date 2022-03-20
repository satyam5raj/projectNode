array = [1,2,2,4,3,9,11,14,15]

function sum(array){
    sum = 0;
    for(var i=0; i<array.length; i++){
        sum = sum + array[i]
    }
    return sum;
}

console.log(sum(array))



function evenOdd(array){
    arrayEven = []
    arrayOdd = []
    for(var i = 0; i<array.length; i++){
        // var a = array[i]
        // var b = a % 2
        if (array[i]%2==0) {
            
            arrayEven.push(array[i])
        } else {
            arrayOdd.push(array[i])
        }
    }return arrayOdd;
}
console.log(evenOdd(array))
