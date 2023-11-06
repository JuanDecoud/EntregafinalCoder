let div = document.getElementById('divBuques')
let btn = document.getElementById('btnAdd')

let btnModal = document.getElementById('btnBuque')

btnModal.addEventListener('click', ()=>{
    let inputs = document.querySelectorAll('.formBuque')
    inputs.forEach(element => {
        let newelement = document.createElement('input')
        newelement.value=element.value
        div.appendChild(newelement)
    });
})