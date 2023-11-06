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