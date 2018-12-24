$(document).ready(function(){
    $("h1").css("color","red");
    
    $("input").css("margin","10px");

    $("#btn").on("click",function(){
        $("#btn").css("color","red");
    });

    $("#form").submit(function () {
       
     
    });




var fname; //
var lname ;// 
var json = [{}];

function display(){

fname = $("#fname").val();
lname = $("#lname").val();

json.push({"fname":fname,"lname":lname});
console.table([json]);

}


function edited(){
    $("#edit").attr("value", "");
}

});
