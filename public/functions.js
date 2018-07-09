
$(function(){
    $("#nav-icon").on("click", function(){
        $("nav ul:last-of-type").css({"width" : "300px"});
      
    
    });
    $("#close").on("click", function(){
        $("nav ul:last-of-type").css({"width" : ""});
     
    
    });
});