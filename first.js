$(document).ready(function() {
// alert("Have you done all assignmnets?");

$("#gn").draggable();
  
$("#jerry").draggable();

$("#pill").click(function(){
$("#jerry").hide();
});

$("#pill").hover(function(){
$("#backtoindex").append("zzzzzzzz");
$("#backtoindex").css("color","pink");
});

})
