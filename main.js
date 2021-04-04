$(document).ready(()=>{

    // ===HAMBURGER BUTTON===
    $('.hamburger__bar').on('click',()=>{
        $('.ham__bars:nth-child(1),.ham__bars:nth-child(3),.ham__bars:nth-child(2),.res__header').toggleClass('active')
        console.log();
        if($('.res__header').attr('class')=='res__header active'){
            disableScroll()
        }else{
            enableScroll()
        }
    
    })
    
    $('#btn__message').on('click',()=>{
       $('#_text,#_email,#_gmail,#_message').val(null)
    })

})
function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}



let div=document.createElement("div");
div.id="preloader";
div.className="preloader";
div.innerHTML='<div class="black_wall"></div><div class="loader"></div>';
document.body.insertBefore(div,document.body.firstChild);

window.onload=function(){document.getElementById("preloader").classList.add("off")};

