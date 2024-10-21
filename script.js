const quantElement= document.getElementById(`quantity`);
 function inc()
 {
    let quantity= parseInt(quantElement.innerText);
    quantElement.innerText= ++quantity;
 }
 function dec()
 {
    let quantity=parseInt(quantElement.innerText);
    if(quantity > 1)
    quantElement.innerText= --quantity;
 }