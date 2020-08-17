console.log('contact.html')

$(document).ready(function() {
        console.log('document ready')
            $("#reused_form").submit(function(e) {
                console.log('form submitted')
                e.preventDefault();
                // $.get('/email', {3354: 3254, "dajgfa": 3232})
                $.ajax({
                  type: "get",
                  url: "/email",
                  dataType: "json",
                  data: $("#reused_form").serialize(),
                  contentType: "application/x-www-form-urlencoded",
                  success: function (data) { //success 
                    console.log('success')
                    alert('I look forward to your contact')
                  },
                  error: function (jqxhr, status, exception) { //some sort of error }
                    console.log('failure', status, jqxhr)
                    // alert('Exception:', exception);
                    console.log('exception', exception)
                    alert('I look forward to your contact')
                    // alert('Something went wrong. Did you fill out all the fields?')
                 }
             });
             document.getElementById("reused_form").reset(); 

        });
    });