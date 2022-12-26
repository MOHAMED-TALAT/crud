var productName = document.getElementById("pn")
var productPrice = document.getElementById("pp")
var productCatigory = document.getElementById("pc")
var productDes = document.getElementById("pd")


var allpruducts = [];
var mainindex;
var btn = document.getElementById("btn");

if (localStorage.getItem("allpruducts") != null){  // ممكن تكون فاضيه 

  allpruducts = JSON.parse(localStorage.getItem("allpruducts"));   //  لازم احطها بره الفانكشن عشان لو كانت جوه كل مره هيعرف الاراي من جديد ويحذف القديم
  showNewProduct()  // بعد ميجبها من اللوكال ستوريدج يعرضها 

}

function addNewProduct(){

  var product = {
    name: productName.value,
    price:Number( productPrice.value),
    catigory: productCatigory.value,
    description: productDes.value,

  }

  if (btn.innerHTML == "Update") {
    btn.innerHTML = "Add product";
    allpruducts.splice(mainindex, 1, product);
    localStorage.setItem("allpruductss", JSON.stringify(allpruducts))
}
else {
    allpruducts.push(product);
    localStorage.setItem("allpruductss", JSON.stringify(allpruducts));
}


showNewProduct()
clearForm();


}
function clearForm (){
productName.value = ""
productPrice.value = ""
productCatigory.value = ""
productDes.value = ""
}

function showNewProduct(){
var cartona = ""
for(var i = 0 ; i < allpruducts.length ; i++){
cartona = cartona +  `  <tr>
<th> `+ i +`</th>
<th>`+ allpruducts[i].name +`</th>
<th>`+ allpruducts[i].price +`</th>
<th>`+ allpruducts[i].catigory+`</th>
<th>`+ allpruducts[i].description+`</th>
<th> <button  class="btn-warning" onclick = " updateElement( ${ i }) " > update </button></th>
<th> <button  class="btn-danger" onclick = " deleteOpject(${i})"> delete </button></th>
</tr>`

}
document.getElementById("demo").innerHTML = cartona;
}


function deleteOpject(index){
  allpruducts.splice(index , 1)
  localStorage.setItem("allpruducts" , JSON.stringify(allpruducts))  // عشان يحذفها من اللوكال ستوريدج
  showNewProduct();
}


function searshmethod(test){  // test  القيمه الي في الانبوت 
  var cartona = ""
  for( var i = 0 ; i < allpruducts.length ; i++){
    if( allpruducts[i].name.toLowerCase().includes(test ) == true ){
      cartona = cartona +  `  <tr>
      <th> `+ i +`</th>
      <th>`+ allpruducts[i].name +`</th>
      <th>`+ allpruducts[i].price +`</th>
      <th>`+ allpruducts[i].catigory+`</th>
      <th>`+ allpruducts[i].description+`</th>
      <th> <button  class="btn-warning" onclick = " updateElement( ${i } ) " > update </button></th>
      <th> <button  class="btn-danger" onclick="deleteOpject( ${i } )"> delete </button></th>
      </tr>`
      
    }
  }
document.getElementById("demo").innerHTML = cartona;

}


function updateElement(index){
  productName.value = `${allpruducts[index].name}`
  productPrice.value = `${allpruducts[index].price}`
  productCatigory.value = `${allpruducts[index].catigory}`
  productDes.value = `${allpruducts[index].description}`
  document.getElementById("btn").innerHTML = "Update"
  mainindex = index;

}