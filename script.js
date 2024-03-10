function addtocart()
{
    var productname = document.getElementById('pname').innerText;
    var productprice = document.getElementById('pprice').innerText;
    var total = productprice * 2;

 console.log(productname +" "+productprice +" "+total);
 var items ={
    'productname' :productname,
    'productprice' : productprice,
    'total' : total
 }

 var myitems = JSON.parse(localStorage.getItem('items')) || [] 
 myitems.push(items);

 console.log(myitems)
 localStorage.setItem("items", JSON.stringify(myitems))
 

}
