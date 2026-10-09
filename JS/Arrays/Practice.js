// Q2

let productPrice = [250,645,300,900,50];

for(let i = 0; i<productPrice.length;i++){
    productPrice[i] -= productPrice[i] * 10 / 100;
}
console.log(productPrice);