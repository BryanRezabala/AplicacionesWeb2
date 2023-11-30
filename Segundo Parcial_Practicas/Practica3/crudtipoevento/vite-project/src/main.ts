import './style.css'




(async ()=>{

  const response = await fetch('http://localhost:3001/api/tipoevento')
  const data = await response.json()
  
  let divTable= `<table>`
  divTable += `<tr><th>Id</th><th>tipo</th><th>Recaudacion</th></tr>`
  data.forEach((tipoevento: ITipoEvento) => {
    divTable += `<tr><td>${tipoevento.id}</td><td>${tipoevento.tipo}</td><td>${tipoevento.recaudacion}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button> </td> </tr>`
  })
  divTable += `</table>`

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable


  const divButton = `<button class="btn btn-primary" >Agregar</button>`
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary')
  btnAgregar?.addEventListener('click', ()=>{
    const divForm = `<form>
    <div class="mb-3">
      <label for="tipo" class="form-label">Tipo</label>
      <input type="text" class="form-control" id="tipo" aria-describedby="tipo">
    </div>
    <div class="mb-3">
      <label for="recaudacion" class="form-label">Recaudacion</label>
      <input type="text" class="form-control" id="recaudacion">
    </div>
    <button type='submit'  class="btn btn-save">Save</button>
    <button type='submit'  class="btn btn-cancel">Cancel</button>
    </form>`
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
    btnSave?.addEventListener('click', async (e)=>{
      e.preventDefault()
      const tipo = document.querySelector<HTMLInputElement>('#tipo')!.value
      const recaudacion = document.querySelector<HTMLInputElement>('#recaudacion')!.value
      const response = await fetch('http://localhost:3001/api/tipoevento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({tipo, recaudacion})
      })
      const data = await response.json()
      console.log(data)
      // reload page
      location.reload()
    })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      console.log(id)
      await fetch(`http://localhost:3001/api/tipoevento/${id}`, {
        method: 'DELETE'
      })
      location.reload()

     })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      const response = await fetch(`http://localhost:3001/api/tipoevento/${id}`)
      const data = await response.json()
      //add button for cancel
      const btnCancel = `<button class="btn btn-cancel">Cancel</button>`
      const divForm = `<form>
      <div class="mb-3">
        <label for="tipo" class="form-label">Tipo</label>
        <input type="text" class="form-control" id="tipo" aria-describedby="tipo" value="${data.tipo}">
      </div>
      <div class="mb-3">
        <label for="recaudacion" class="form-label">Recaudacion</label>
        <input type="text" class="form-control" id="recaudacion" value="${data.recaudacion}">
      </div>
      <button type='submit'  class="btn btn-save">Save</button>
      ${btnCancel}
      </form>`
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
      btnSave?.addEventListener('click', async (e)=>{
        e.preventDefault()
        const tipo = document.querySelector<HTMLInputElement>('#tipo')!.value
        const recaudacion = document.querySelector<HTMLInputElement>('#recaudacion')!.value
        const response = await fetch(`http://localhost:3001/api/tipoevento/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({tipo, recaudacion})
        })
        const data = await response.json()
        console.log(data)
        // reload page
        location.reload()
      })
     })
  })

  
  


})()


