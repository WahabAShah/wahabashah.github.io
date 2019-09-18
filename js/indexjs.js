$( document ).ready(function() {

    $("#aboutme").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#div1").offset().top
        }, 500);
    });

    $("#projects").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#div2").offset().top
        }, 500);
    });


    $("#social").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#div3").offset().top
        }, 500);
    });

    $("#aboutme1").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#div1").offset().top
        }, 500);
    });

    $("#projects1").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#div2").offset().top
        }, 500);
    });


    $("#social1").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#div3").offset().top
        }, 500);
    });


    $(function(){

        $( document ).ready(function() {

            if(window.innerHeight = 801)
            {
                $("#dropdownMenuButton").text("projects");
            }
            else if(window.innerHeight = 1602)
            {
                $("#dropdownMenuButton").text("projects");
            }
        });

        $(".dropdown-menu li a").click(function(){

            $(".btn:first-child").text($(this).text());
            $(".btn:first-child").val($(this).text());

        });

    });



});


