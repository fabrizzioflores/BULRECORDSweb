const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}

function close(){
    mainMenu.style.top = '-100%';
}


(function(){
    $(document).ready(function(){
        $('.alt-form').click(function(){
            $('.form-content').animate({
                height: "toggle",
                opacity: 'toggle'
            },600);
        });

        let formRegistro = document.getElementsByName('form-input');
        for(let i = 0; i < formRegistro.length; i++){
            formRegistro[i].addEventListener('blur',function(){
                if(this.value.length >= 1){
                    this.nextElementSibling.classList.add('active');
                    this.nextElementSibling.classList.remove('error');
                } else if (this.value.length = ""){
                    this.nextElementSibling.classList.add('error');
                    this.nextElementSibling.classList.remove('active');
                } else{
                    this.nextElementSibling.classList.remove('active');
                }
            })
        }
    })
}())