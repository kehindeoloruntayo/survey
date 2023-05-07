$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const name1Input = $("input#name1").val();
    const dateInput = $("input#date").val();
    const emailInput = $("input#email").val();
    const numberInput = $("input#number").val();
    const addressInput = $("input#address").val();
    const colorInput = $("input#color").val();
    const bloodSelect = $("select#blood").val();
    const date1Input = $("input#date1").val();
    const timeInput = $("input#time").val();


    $(".name").text(nameInput);
    $(".name1").text(name1Input);
    $(".date").text(dateInput);
    $(".email").text(emailInput);
    $(".number").text(numberInput);
    $(".address").text(addressInput);
    $(".color").text(colorInput);
    $(".blood").text(bloodSelect);
    $(".date1").text(date1Input);
    $(".time").text(timeInput);
  
    $("#survey-summary").show();
    $(".container").hide();
  });
});