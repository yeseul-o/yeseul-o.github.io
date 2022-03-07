$(document).ready(function() {
// alert("Have you done all assignmnets?");

// $("#gn").draggable();
$("#content").hide();
$("#content2").hide();
$("#content3").hide();


$("#headbar").click(function(){
$("#content").show();
});

$("#content").click(function(){
$("#content2").show();
});

$("#content2").click(function(){
$("#content3").show();
});

$("#pill").hover(function(){
$("#backtoindex").append("zzzzzzzz");
$("#backtoindex").css("color","pink");
});

})
