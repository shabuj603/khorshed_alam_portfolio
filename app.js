$(document).ready(function(){

    $(window).scroll(function(){
        if( this.scrollY > 20){           
            $('.navbar').addClass("sticky");           
        }else{
            $('.navbar').removeClass("sticky");           
        }
    });

   $('.menue-btn').click(function(){
       $('.navbar, .menu').toggle("active");
       $('.menue-btn').toggle('.active');

   })
   
});