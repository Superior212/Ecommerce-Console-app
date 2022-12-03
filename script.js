let goods = [
  {
    name: "cap",
    price: 20,
  },
  {
    name: "shoe",
    price: 25,
  },
  {
    name: "shirt",
    price: 30,
  },
];
let cartStatus;
let yourCart;
let yourInput;
let myCart = [];
let checkoutArr = [];
let foundCart;
let allCart = [];
let allCartPrice = [];
let cartIndex;

console.log("welcome to console E-commerce");
console.log("Below are our availble goods");
for (let i = 0; i < goods.length; i++) {
  console.log(goods[i].name, `$${goods[i].price}`);
}

let proceedToCart = window.prompt("Do you want to proceed to cart?");

const wantToContinue = () => {
  let stillWantToAddCart = window.prompt("Do you still want to add cart?");
  if (stillWantToAddCart.toLocaleLowerCase() == "yes") {
    addToCart();
  } else {
    let wantToProceedToCheckout = window.prompt(
      "Do you still want to proceed to checkout?"
    );
    if (wantToProceedToCheckout.toLocaleLowerCase() == "yes") {
      let doYouWantToCheckout = window.prompt(
        "Are you sure you want to checkout?"
      );
      if (doYouWantToCheckout.toLocaleLowerCase() == "yes") {
        for (let i = 0; i < checkoutArr.length; i++) {
          goods.every((val)=>{ 
            goods[i].name== checkoutArr[i];
            allCart.push(goods[i]);
            allCartPrice.push((goods[i].price));
          });
        }
        var total = 0;
        for (let i = 0; i < allCartPrice.length; i++) {
          total += Number(allCartPrice[i]);
        }
        console.log('List of product added');
        for (let i = 0; i < allCart.length; i++) {
          cartIndex = i;
          console.log(`${i + 1} ${allCart[cartIndex].name} ${allCart[cartIndex].price}`);
        }
        console.log(`The total price is ${total}`);
      } else {
        console.log(
          "Thanks for choosing us, feel free to check back and order"
        );
      }
    } else {
      console.log("Thanks for choosing us, feel free to check back and order");
    }
  }
};

function addToCart() {
  yourInput = "";
  if (proceedToCart.toLocaleLowerCase() == "yes") {
    yourInput = window
      .prompt(" Fill in the goods you would like to cart!!! ")
      .toLocaleLowerCase();
  }
  for (let i = 0; i < goods.length; i++) {
    myCart.push(goods[i].name);
  }
  let productExist = myCart.indexOf(yourInput);
  if (productExist < 0) {
    console.log(`${yourInput} is not available`);
    wantToContinue();
  } else {
    checkoutArr.push(yourInput);
    console.log(`${yourInput} is available`);
    wantToContinue();
  }
}
addToCart();
