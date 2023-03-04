console.log("This is a custm module");

function sum(arr){
    let sum = 0;

    arr.forEach(element => {
        sum+=element;
    });

    return sum;
}

module.exports = sum;
