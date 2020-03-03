// $("body").attr('style', 'text-align: center')
$("body").css('text-align', 'center')
$("#title h2").text("New title")
$(".subtitle-box").attr("style", "background-color: red")
$(".subtitle-box .temp").toggle()
$("div.reason").css("border", "dashed brown 5px")

$("#first-list li").css("font-weight", "bold")
$("#first-list li:last-child").css("text-decoration", "underline")

// $("#first-list li:eq(1)").css("text-decoration", "line-through")
$("#first-list li:nth-child(2)").css("text-decoration", "line-through")

$(".second-list").css("font-style", "italic")
$("#list span").css("font-size", "0.5em")

$(".unused-box label:first").remove()
$(".unused-box").append("<p class='second'>Second sentence<p/>")
$(".second").before("<p>First sentence</p>")
// $("<p>First sentence</p>").insertBefore(".unused-box p")
$(".unused-box").attr("class", "used-box")
$(".used-box").click(() => {
    $(".used-box").toggleClass("used-boxed-clicked")
})

$(".button-group #submit-button").mouseenter(() => {
    $(".button-group").append("<div class='hover'>You're ready to click!</div>");
  });
$(".button-group #submit-button").mouseleave(() => {
    $(".hover").remove();
});

let count = $("#first-list li").length + 1
$("#submit-button").click(function() {
    $("#first-list").append(`<li>Reason ${count}</li>`)
    count += 1
    console.log($(this).parent())
})

$(document).ready(() => {
    console.log("This will only be executed after the DOM has parsed")
})

// $(() => {
// This does the same thing
// })