(function($) {


    $('#sidebarCollapse').on('click', function () {
   $('#sidebar').toggleClass('active');
   });
   
})(jQuery);

$("button[data-color='red']").click(function(){
    $(".square").css("backgroundColor","red");
});

$("button[data-color='green']").one("click",function(){
    $(".square").css("backgroundColor","green");
});

$("button[data-color='blue']").on("click",function(){
    $(".square").css("backgroundColor","blue");
});

$("button[data-color='yellow']").on("click",function(){
    $(".square").css("backgroundColor","yellow");
    $("button[data-color='blue']").off("click");
    $("button[data-color='red']").off("click");
});

$("#register-form input").wrap("<div class='form-group'></div>");
$("input:not([type='checkbox'],[type='submit'])").addClass("form-control");

$(this).addClass("form-control-label");
let next = $(this).next();
$(this).prependTo(next);

let checkContainer = $("input[type='checkbox']").parent();

$("input[type='submit']").addClass("btn btn-primary");
$("input[type='submit']").parent().addClass("text-right");

