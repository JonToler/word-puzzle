$(document).ready(function(){
  $("#sentence").submit(function(event){
    debugger;
    var sentence = $('#hideVowel').val();
    var newSentence = sentence.replace(/[aeiou]/gi,'-');
    $("#hideOut").text(newSentence);

    event.preventDefault();
  });

});
