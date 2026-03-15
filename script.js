let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

let product = cart.find(p => p.name === name);

if(product){
product.qty += 1;
}else{
cart.push({name,price,qty:1});
}

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");
}

function displayCart(){

let cartItems=document.getElementById("cartItems");
let grandTotal=0;

cartItems.innerHTML="";

cart.forEach((item,index)=>{

let total=item.price*item.qty;
grandTotal+=total;

cartItems.innerHTML+=`
<tr>
<td>${item.name}</td>
<td>$${item.price}</td>
<td>${item.qty}</td>
<td>$${total}</td>
<td><button onclick="removeItem(${index})">Remove</button></td>
</tr>
`;
});

document.getElementById("grandTotal").innerText="Grand Total: $"+grandTotal;
}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();
}

function searchProduct(){

let input=document.getElementById("search").value.toLowerCase();
let products=document.querySelectorAll(".product");

products.forEach(product=>{

let name=product.querySelector("h3").innerText.toLowerCase();

product.style.display=name.includes(input)?"block":"none";

});

}