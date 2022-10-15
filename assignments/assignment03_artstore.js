
//loops until there is input for tax_rate and shipping_threshhold
let tr;
do{
    tr = prompt('Enter tax rate (0.10)');
}while(tr == "" || tr == null);
const tax_rate = tr;

let st;
do{
    st = prompt('Enter tax rate (0.10)');
}while(st == "" || st == null);
const shipping_threshold = st;



/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

   /* here is the array used for project 1 */

const cart = [
    {
          product: {
                title: "Portrait of Marten Soolmans",
                filename: "105070.jpg",
                price: 75.0
          },
          quantity: 3
    },
    {
          product: {
                title: "View of Houses in Delft",
                filename: "106060.jpg",
                price: 125.0
          },
          quantity: 1
    },
    {
          product: {
                title: "Woman Reading a Letter",
                filename: "106050.jpg",
                price: 100.0
          },
          quantity: 2
    },      
];

calculateNumbers();

function calculateTotal(quantity, price){
    let total = quantity * price;
    return total;
}

function calculateNumbers(){
    //Find subTotal
    let subTotal = 0;
    for(let i = 0; i < cart.length; i++){
        subTotal += calculateTotal(cart[i].quantity, cart[i].product.price);
    }

    //Find tax
    let tax = subTotal * tax_rate;

    //Find grandTotal
    let grandTotal = subTotal + tax;
}
