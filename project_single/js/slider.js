$(document).ready(function(){
  $('.slider_inner').slick({
  	nextArrow: '<button type="button" class=" slick-next">next project</button>',
    prevArrow: '<button type="button" class=" slick-prev">previous project</button>',
    infinite: false
  });
});
$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.menu_wrap').toggleClass('active');
	});
});