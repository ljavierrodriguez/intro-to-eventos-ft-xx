/* 
// Objeto Principal del DOM
document

// Obtener Elementos del DOM
getElementById
getElementsByClassName
getElementsByTagName
getElementsByName

querySelector
querySelectorAll

// Crear Elementos del DOM

createElement
createTextNode

*/
window.onload = function () {
    //alert("Totalmente Cargado....");

    /* 
    ondblclick="alert('Haciendo Click');" 
    onmousemove="alert('Sobre el Boton')"
    onmouseout="alert('Saliendo del boton')" 
    */
    let accordion = document.querySelector('.accordion');
    let btn = document.querySelector('#btnClick');
    btn.addEventListener('click', crearItemAccordion);

    function crearItemAccordion(){
        let item = document.createElement('div');
        let itemHeader = document.createElement('h2');
        let itemButton = document.createElement('button');
        let itemCollapse = document.createElement('div');
        let itemCollapseBody = document.createElement('div');

        item.classList.add('accordion-item');
        itemHeader.classList.add('accordion-header');
        
        itemButton.setAttribute("class", "accordion-button collapsed")
        itemButton.setAttribute("type", "button")
        itemButton.setAttribute("data-bs-toggle", "collapse")
        itemButton.setAttribute("data-bs-target", "#collapse1")
        itemButton.setAttribute("aria-expanded", "false")
        itemButton.setAttribute("aria-controls", "collapse1")
        itemButton.appendChild(document.createTextNode("Texto"))

        itemCollapse.setAttribute("id", "collapse1")
        itemCollapse.setAttribute("class", "accordion-collapse collapse")
        itemCollapse.setAttribute("data-bs-parent", "#accordionExample")

        itemCollapseBody.classList.add('accordion-body');
        itemCollapseBody.innerHTML = "Hola Mundo";

        itemHeader.appendChild(itemButton);
        itemCollapse.appendChild(itemCollapseBody);
        item.appendChild(itemHeader);
        item.appendChild(itemCollapse)
        accordion.appendChild(item);
        
    }

    /* 
    // forma 1
    function nombreFuncion(){

    } 
    btn.addEventListener('', nombreFuncion);
    
    // forma 2
    btn.addEventListener('', function(){})
    
    // forma 3
    btn.addEventListener('', () => {})
    
    */
    /* btn.addEventListener('click', (evento) => {
        console.log(evento);
    })

    btn.addEventListener('mouseover', (evento) => {
        console.log(evento);
    })

    let linkGoogle = document.querySelector('.btn-danger');

    linkGoogle.addEventListener('click', (evento) => {
        evento.preventDefault();
        console.log(evento)   
        deshabilitarBoton(evento); 

    })

    function deshabilitarBoton(evt){
        evt.target.classList.add('disabled');
    } */

    let ul = document.querySelector('ul');

    let list = document.querySelectorAll('li');

    list.forEach((li) => {
        let btn = li.querySelector('button');
        btn.addEventListener('click', () => {
            alert('hola');
        })
    })



    let li = document.createElement('li');
    let span = document.createElement('span');
    let btn2 = document.createElement('button');

    span.innerHTML = 3;
    btn2.innerHTML = 'show'
    btn2.addEventListener('click', () => {
        alert('hola');
    })

    li.appendChild(span);
    li.appendChild(btn2);

    ul.appendChild(li);




    let form = document.querySelector('form');

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
    })




}