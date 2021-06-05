const foot=document.querySelectorAll('.pagination .page-item')

foot.forEach(f=()=>{

    

    f.addEventListener('click',()=>{
        console.log(222)
        removeclass()
        f.classList.add('active')
    })
})

function removeclass()
{
    foot.forEach(f=()=>{
        f.classList.remove('active')
    })
}