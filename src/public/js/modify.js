

let btnmodify = document.getElementById("btnModify")




btnmodify.addEventListener("click",async()=>{
   const { value: category } = await Swal.fire({
        title: 'Select field validation',
        input: 'select',
        inputOptions: {
          'Categorys': {
            admin :`Admin`,
            premium :`Premium`,
            user :`User`
          }
        },
        inputPlaceholder: 'Select a category',
        showCancelButton: true
    
      })

      await fetch(`localhost:${8080}/user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({category})
      }).catch(err => console.error)
      
} )