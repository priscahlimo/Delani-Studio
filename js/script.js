$(document).ready(function(){
    var services =[{img:"design-img",infomation:"design-infomation"},{img:"dev-img",infomation:"dev-infomation"},{img:"product-img",infomation:"product-infomation"},]
    
    services.forEach(function(service){
        $("." +service.img).click(function(){
             $("."+service.infomation).show();
             $("."+service.img).hide();
            
        });
        $("."+service.infomation).click(function(){
            $("."+service.img).show();
           $("."+service.infomation).hide();
         });
    })
});



$(document).ready(function(){
    
    var projects =[{name:"first",info:"description1"},{name:"second",info:"description2"},{name:"third",info:"description3"},{name:"fourth",info:"description4"},{name:"fifth",info:"description5"},{name:"sixth",info:"description6"},{name:"seventh",info:"description7"},{name:"eighth",info:"description8"}];
    
    projects.forEach(function(project){
        $("#" +project.name).mouseover(function(){
            $("#"+project.info).show();
        }).mouseout(function(){
            $("#"+project.info).hide();
        });
    })
});




function submitForm(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if(email == null){
        alert("Please enter a valid email")
    }else if(user == null){
        alert("Please enter your name")
    }else if(message == null){
        alert("Please enter your message")
    }else{
        alert( user + " we have received your message. Thank you for reaching out to us.")
    }
}

