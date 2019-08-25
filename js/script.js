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
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    $(".send").click(function(event){
        if (!name || !email || !message){
            document.getElementById("result").innerText = "Please check your entries"
        }else{
            document.getElementById("result").innerText = "Thank you for your message"
        }
    })
})
//sending message using mailchimp
$(function(){
    $(".form").bind(".send", function(){
        event.preventDefault()
        var name1 = $(".name").value
        var email1 = $(".email").value
        var message1 = $(".message").value
        var url = "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?" + "apikey=81ce4a8ff3d33b570692d4621346bef4-us3"
        "id=665257" + "&email[email]=" + email1 +
        "&merge_vars[NAME]=" + name1 +
        "&merge_vars[NAME]=" + message1 +
        "&send_welcome=false"

        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            success: function(data){
                $(".form").html("Thank you")
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert(errorThrown)
            }
        })
    })
})
