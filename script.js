const quantElement= document.getElementById(quantity);
 function inc()
 {
    let quantity= parseInt(quantElement.innerText);
    quantElement.innerText= ++quantity;
 }
 function dec()
 {
    let quantity=parseInt(quantElement.innerText);
    quantElement.innerText= --quantity;
 }