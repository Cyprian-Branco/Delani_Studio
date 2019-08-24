$(function(){

})
//for toggling 
$(function(){
    $(".panel4").click(function(){
        $(".hide0").slideToggle(100)
        $(".show0").slideToggle(100)
    })
    $(".panel5").click(function(){
        $(".hide1").slideToggle(100)
        $(".show1").slideToggle(100)
    })
    $(".panel6").click(function(){
        $(".hide2").slideToggle(100)
        $(".show2").slideToggle(100)
    })
})
//for hovering
$(function(){
    $(".icon-info").hide()
    $(".icon-img").hover(function(){
        $(this).find(".icon-info").toggle(500)
    })
})
//read contact us
$(function(){
    $(".send").click(function(event){
        event.preventDefault();

        var name = document.getElementById("name").value
        var email = document.getElementById("email").value
        var message = document.getElementById("message").value
    
        if (name.length > 2){
            console.log("Name Valid")
        }else{
            alert("Invalid name")
        }
        if (email.length > 2 && email.includes("@") && email.includes(".")){
            console.log("email valid")
        }else {
            alert("Invalid email")
        }if (message.lenght >2){
            document.getElementById("result").innerText = "Thank you for your message"
        }else {
            document.getElementById("result").innerText = "No message sent"
        }
    })
})
//sending message using mailchimp