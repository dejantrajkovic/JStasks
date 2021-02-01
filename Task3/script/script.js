let input = 376;
let coins = [50, 20 , 10 , 5, 1];
let result = [];
let result2 = [];


function vendingMachine(number) {  
    let i = 1;
    while (i <= number) {
        i++;
    if (number >= coins[0]) {
        x = number - coins[0];
        result.push(coins[0])
        return vendingMachine(x);
    } else if (number >= coins[1]){
        x = number - coins[1];
        result.push(coins[1])
        return vendingMachine(x);
    } else if (number >= coins[2]){
        x = number - coins[2];
        result.push(coins[2])
        return vendingMachine(x);
    } else if (number >= coins[3]){
        x = number - coins[3];
        result.push(coins[3])
        return vendingMachine(x);
    } else if (number >= coins[4]){
        x = number - coins[4];
        result.push(coins[4])
        return vendingMachine(x);
    }
    
}
}

function vendingMachine2(number) {  
    for (let i = 0; i <= number; i++) {   
    if (number >= coins[i]) {
        x = number - coins[i];
        result2.push(coins[i])
        return vendingMachine2(x);
    } 
}
}


vendingMachine(input);
console.log(result);

vendingMachine2(input);
console.log(result2);

