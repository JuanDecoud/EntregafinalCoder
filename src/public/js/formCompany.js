let div = document.getElementById('divBuques')
let btn = document.getElementById('btnAdd')
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


