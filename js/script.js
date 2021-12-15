
$(document).ready(function(){
   $('#alert').click(function(){
    alert("welcome");
  }); 
  
	//hide
  $('#hide').click(function(){
  	$('img').hide(1000);
  }); 
  //show
   $('#show').click(function(){
  	$('img').show(1000);
  });
   //toggole
  $('#toggle').click(function(){
  	$('img').toggle("slow");
  });      
});
