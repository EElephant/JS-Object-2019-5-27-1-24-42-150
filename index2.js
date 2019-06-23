var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
// write your code here...
var sum = Object.keys(fruit)
var price = 0;
for (sum in fruit){
    price += fruit[sum]
}
console.log(price)

