let div = document.getElementById('divBuques')
let btn = document.getElementById('btnAdd')

let btnModal = document.getElementById('btnBuque')

btnModal.addEventListener('click', ()=>{
    let inputs = document.querySelectorAll('.formBuque')
    inputs.forEach(element => {
        let newelement = document.createElement('input')
        newelement.value=element.value
        newelement.classList.add('w-50' , 'p-0')

        div.appendChild(newelement)
    });
})


/*
<script>
var grocery_list = {}

function addGroceryItem(form) {
  grocery_list[form.item.value] = {category: form.category.value, price: form.price.value};
  return false;
}
</script>

<form onsubmit="return addGroceryItem(this)">
    <input name="item"><br>
    <input name="category"><br>
    <input name="price"><br>
    <input type="submit" value="Add item">
    <input type="button" value="Show list" onclick="console.log(grocery_list)">
</form>

*/