let panels = document.querySelectorAll(".panel")
console.log(panels)

panels.forEach(element => {
    console.log(element);
    element.onclick=toggleOpen});


function toggleOpen (){
    this.classList.toggle("open")
}





