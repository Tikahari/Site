console.log('contact.html')

$(document).ready(function() {
        console.log('document ready')
            $("#reused_form").submit(function(e) {
                console.log('form submitted')
                e.preventDefault();
                $.ajax({
                  type: "get",
                  url: "/email",
                  data: $("#reused_form").serialize(),
                  contentType: "application/x-www-form-urlencoded",
                  success: function (data) { //success 
                    console.log('success')
                    alert('I look forward to your contact')
		    document.getElementById("reused_form").reset();
                  },
                  error: function (jqxhr, status, exception) {
                    console.log('failure', status, jqxhr, exception)
                    alert('I look forward to your contact')
		    document.getElementById("reused_form").reset();
                    // alert('Something went wrong. Did you fill out all the fields?')
                 }
             });
             document.getElementById("reused_form").reset(); 

        });
    });
