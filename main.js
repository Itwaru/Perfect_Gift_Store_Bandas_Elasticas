let actual = window.pageYOffset;

window.onscroll=()=> {
    let desplazamiento = window.pageYOffset;
    (actual >=desplazamiento)
    ?document.getElementById('nav').style.top = '0px'
    :document.getElementById('nav').style.top = '-80px'
    actual=desplazamiento;
}






