let ListEs = document.querySelectorAll('.list_btn_clck');

ListEs.forEach(ListE => {
    ListE.addEventListener('click', ()=>{

    ListE.classList.toggle('arrows');

    let height = 0;
    let menu = ListE.nextElementSibling;


    if (menu.clientHeight == 0) {
        height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`

    });

});