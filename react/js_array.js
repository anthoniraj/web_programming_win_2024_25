let numbers = [10,11,34,9,84,90]
for (number of numbers){
    if(number % 2 == 0){
        console.log(number);
    }
}

console.log(numbers.filter(number=>number%2==0));

console.log(
    numbers.map(number => number * 2)
);

console.log(
    numbers.filter(number => number % 2 == 0).map(e=>e*2)
);

console.log(
    numbers.reduce((sum, number)=> sum+number, 10)
);

