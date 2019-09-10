var correct = 0;
var c=60;
var t;
var intervalId;
var q1=false;
var q2=false;
var q3=false;
var a1;
var a2;
var a3;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  };
  function decrement() {
  
    //  Decrease number by one.
    c--;

    //  Show the number in the #show-number tag.
    var minutes = parseInt( c / 60 ) % 60;
		var seconds = c % 60;
		var result =  (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);            
		$('#time').html(result);


    //  Once number hits zero...
    if (c === 0) {
        q1=true;
        q2=true;
        q3=true;
        clearInterval(intervalId);
        $("#time").html("Questions Correct: " + correct);
    }
  };

  $('#quiz1 input').on('change', function() {
      if(q1===false){
        q1=true;
        a1=parseInt($('input[name=q1]:checked', '#quiz1').val());
        correct+=a1
      } else {
        alert("Only your first pick is recorded")
    }
      
    });
  $('#quiz2 input').on('change', function() {
      if(q2===false && q1===true){
        q2=true;
        a2=parseInt($('input[name=q2]:checked', '#quiz2').val());
        correct+=a2
      } else if (q1===false){
          alert("Deselect your pick and then pick your answers in order.")
      } else {
          alert("Only your first pick is recorded")
      }
      
    });
  $('#quiz3 input').on('change', function() {
      if(q3===false && q2===true){
        q3=true;
        a3=parseInt($('input[name=q3]:checked', '#quiz3').val());
        correct+=a3;
        $("#time").html("Questions Correct: " + correct);
         clearInterval(intervalId);
      } else if (q2===false){
        alert("Deselect your pick and then pick your answers in order.")
    } 
     
    });
      

    run()