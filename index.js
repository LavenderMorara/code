document.addEventListener('DOMContentLoaded', ()=>{
    let form=document.querySelector('#shoppingForm');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        makeShoppingList(e.target.shoppingItem.value)
        form.reset()
    })
})
function makeShoppingList(shoppingItem){
    let p =document.createElement('p');
    let btn =document.createElement('button');
    btn.textContent='clear';
    btn.addEventListener ('click',clearItem);
    p.textContent=`${shoppingItem}`;
    document.querySelector('#shoppingList').appendChild(p);
    p.appendChild(btn);
}
function clearItem(e){
    e.target.parentNode.remove();
}