$(document).ready(function(){

var navToggleButton = $('#navigation__botton');
    var navToggleIcon = $('.navigation__toggle .fa');
    var navBlock = $('.navigation__list');
    var navLink = $('.navigation__list a');

    //события по клику на иконку навигации
    navToggleButton.on('click', function(e){
    	e.preventDefault();
    	navBlock.toggleClass('navigation__list--open');
        navButtonToggle()   	
});

    //события по клику на ссылки навигации
    navLink.on('click', function(){        
    	if(navBlock.hasClass('navigation__list--open')){
            navButtonToggle()            
    	}
    	navBlock.removeClass('navigation__list--open');
    })
    //функция анимации иконки
    function navButtonToggle(){
        if (navToggleButton.hasClass("active")) {
            navToggleButton.removeClass("active");
          }else{
            navToggleButton.addClass("active");
          }
    }
});