let div = document.getElementById('divBuques')
let btn = document.getElementById('btnAdd')
<<<<<<< HEAD
let formCompany = document.getElementById('formCompany')
let btnModal = document.getElementById('btnBuque')
let formContainer = document.getElementById('formContainer')

let arrayBuques = []

const submitData = async(form)=>{

    
    form.append('ships' ,JSON.stringify( arrayBuques))
    


    let objet = {
        name: form.get('name'),
        cuit: form.get('cuit'),
        ships:form.get('ships')
    } 

    
    try {
        let response = await fetch('/company',{
            method : 'POST',
            headers: {"Content-Type": "application/json"},
            body :JSON.stringify( objet)
        })
        
        if(response.ok){

            let alert = document.createElement('div')
            alert.classList.add('alert' ,'alert-success')
            alert.setAttribute('role', 'alert')
            alert.innerText = "Empresa agregada con exito"
            formContainer.appendChild(alert) 
            setTimeout(() => {
               location.replace('/views/addCompany')
            }, 500);
           
        }
     
    } catch (error) {
        console.log(error)
    }
   
}

formCompany.addEventListener('submit' , async(event)=>{
    event.preventDefault()
    let formdata = new FormData(formCompany)
    await submitData(formdata)

})

btnModal.addEventListener('click', ()=>{
    let inputs = document.querySelectorAll('.formBuque')
    let buque = {
        name : inputs[0].value ,
        tuition : inputs[1].value
    }
    arrayBuques.push(buque)
    
    let newelement = document.createElement('p')

    newelement.classList.add('h6' , "shadow" , "shadow-sm" , "p-1" , "rounded")
    newelement.innerText=inputs[0].value
    div.appendChild(newelement)
    
})


=======

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
>>>>>>> 388bfa6f01b1d18e20b5b0912cac9b76c566aebc
