$(".box").css({width:'50px',height:'50px' ,borderRadius:'30px' })
$(".hide").css({opacity:'0'})
$(document).ready(function()
{
    $(".box").hide(1200)
    $(".box").show(function(){    $(".box").animate({width:'100%',height:'550px'} ,1500 ,function(){
        $(".hide").animate({opacity:'1'},1000)
    })})
}) 

















/* $(document).ready(function(){
$("").click()
$("").dblclick()
$("").hover()
$("").mouseenter()
$("").mouseleave()
$("").hide(speed ,function(){} )
$("").show()
$("").toggle()
$("").alert()
$("").fadeIn()
$("").fadeOut()
$("").fadeToggle()
$("").fadeTO(speed ,opacity,function(){})
$("").slideDown()
$("").slideUp()
$("").slideToggle()
$("").animate({css} ,speed ,function(){})
$("").stop(clearall , gotoend)
$("").css({})
$("").html()

}) */