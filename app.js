// On va créer l'animation sur le menu burger, il va ajouter la class active pour que le css le prenne en compte
const btnRes=document.querySelector('.btn-responsive-menu');
const list=document.querySelector('.list-nav');
const items= document.querySelectorAll('.item')

btnRes.addEventListener('click',()=>{

    btnRes.classList.toggle('active');
    list.classList.toggle('active-menu');

})
// On ferme le menu lors d'un clic
items.forEach(item=>{
    item.addEventListener('click',()=>{
        btnRes.classList.toggle('active');
        list.classList.toggle('active-menu')
    })
})