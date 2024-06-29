const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nome=document.querySelector('#nome').value
    const email=document.querySelector('#email').value
    const telefone=document.querySelector('#telefone').value
    const mensaguem=document.querySelector('#mensaguem').value
    console.log(`${nome},${email},${telefone},${mensaguem}`)
})