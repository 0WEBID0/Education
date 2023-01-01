$(".box").css({width:'50px',height:'50px' ,borderRadius:'30px' })
$(".hide").css({opacity:'0'})
$(document).ready(function()
{
    $(".box").hide(1200)
    $(".box").show(function(){    $(".box").animate({width:'400px',height:'380px'} ,1500 ,function(){
        $(".hide").animate({opacity:'1'},1000)
    })})
}) 

var form = document.getElementById("form")
var user_email = document.getElementById("1")
var user_pass = document.getElementById("2")
var emaila = ["www.zenap35@gmail.com"]
var pass = ["111"]
var submit = document.getElementById("submit")

function check(){
    if(((form.email.value == emaila[0])&&(form.password.value == pass[0]))){
        return true
    }
    alert("the Email OR Password mistake")
    return false
}


