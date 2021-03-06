(function($) {
    $(document).ready(function() {
       console.log("Ready to submit");


        // Get the modal
        var modal = document.getElementById('registrationModal');

        // Get the button that opens the modal
        var btn = document.getElementById("registrationButton");

        // Get the button that opens the modal
        var btn_lg = document.getElementById("registrationButtonLG");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
            //modal.style.display = "block";


            $(modal).fadeIn();
        }

        btn_lg.onclick = function() {
            //modal.style.display = "block";
            $(modal).fadeIn();
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            $(modal).fadeOut();
            //modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                //modal.style.display = "none";
                $(modal).fadeOut();
            }
        }


        // $('#submit-form').on('click', function(e) {
        //     e.preventDefault();
        //     register();
        //
        // })

        $('#gform').submit(function(e){
            e.preventDefault();



            swal("Are you registering from within the European Union?", {
                buttons: {
                    gdpr: "Yes",
                    nongdpr: "No",
                    cancel: true,
                },
            }).then((value) => {
                switch (value) {

                case "gdpr":
                    register("EU");
                    break;
                case "nongdpr":
                    register("US");
                    break;
                default:
                    $(modal).fadeOut();
                    break;
                }
            });


            // EU - https://script.google.com/macros/s/AKfycbwmjYe6PNQgT8rPjQGRaRhjMS5TYbIU9WLn5oLJ/exec
            // US - https://script.google.com/macros/s/AKfycbz6VNJ7Y8sWlcoOiTG2nl2Hd35IgvVy79VWcG_k/exec


        });


    });
})(jQuery);


function register(data)
{
    var modal = document.getElementById('registrationModal');
    if(data=="EU")
    {
        $.ajax({
            url:'https://script.google.com/macros/s/AKfycbwmjYe6PNQgT8rPjQGRaRhjMS5TYbIU9WLn5oLJ/exec',
            type:'POST',
            data:$('#gform').serialize(),
            success:function(){
                swal("Thank you!", "We'll keep you posted on the upcoming registrations", "success");
                $("input.form-control").val("");
                $(modal).fadeOut();
            }
        });

    }
    else if(data=="US")
    {
        $.ajax({
            url:'https://script.google.com/macros/s/AKfycbz6VNJ7Y8sWlcoOiTG2nl2Hd35IgvVy79VWcG_k/exec',
            type:'POST',
            data:$('#gform').serialize(),
            success:function(){
                swal("Thank you!", "We'll keep you posted on the upcoming registrations", "success");
                $("input.form-control").val("");
                $(modal).fadeOut();
            }
        });
    }


}

