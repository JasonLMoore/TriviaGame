
//answers[0] always = true
var question1 = {
    'question': 'In what year did the Kansas City Kings play there first game',
    'answers': ['1972','1945','1957','1975']
}

var question2 = {
    'question': 'The Kings franchise has never called which city "home"?',
    'answers': ['Buffalo','Rochester','Cincinatti','Sacramento']
}

var question3 = {
    'question': 'What other nickname have the Kings organization opperated under?',
    'answers': ['Royals','Monarchs','Jazz','Blues']
}

var question4 = {
    'question': 'Which former Kings player has not been inducted into the NBA Hall of Fame?',
    'answers': ['Larry Drew','Oscar Robertson','Jo-Jo White','Nate Archibald']
    //Bonus Trivia: Oscar Robertson never wore a Kansas City jersey but was a member of the team when they were the Cincinatti Royals
}

var question5 = {
    'question': 'Which former Kansas Jayhawk has never played for the Kings?',
    'answers': ['Paul Pierce','Jo-Jo White','Frank Mason III','Ben McLemore']
}

var question6 = {
    'question': "From 1972-1985, which arena was never used for a King's home game?",
    'answers': ['Sprint Center','Municipal Auditorium ','Omaha Civic Auditorium','Kemper Arena']
}

var question7 = {
    'question': 'How many playoff apperances did the Kings have while they were in Kansas City?',
    'answers': ['5','3','7','10']
}

var question8 = {
    'question': 'Which Kings play won "Rookie of the Year"?',
    'answers': ['Phil Ford','Nate Archibald','Sam Lacey','Reggie King']
}

var question9 = {
    'question': 'The Kings won the most games which season?',
    'answers': ['78-79','73-74','79-80','81-82']
}

var question10 = {
    'question': 'What year did the Kansas City-Omaha Kings become the Kansas City Kings?',
    'answers': ['1975','1972','1980','1984']
}

var questionArr = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

$("#quizStart").click(function() {
    start();
    displayQuestion();
    $("#quizStart").hide();
});
    

function reset() {
    time = 30;
    $("#questionTimer").text("00:30");
}

var qArrN = 0;
function displayQuestion() {
    $("#questionZone").text(questionArr[qArrN].question);
    $("#answerBtn1").text((questionArr[qArrN].answers[0]))
    $("#answerBtn2").text((questionArr[qArrN].answers[1]))
    $("#answerBtn3").text((questionArr[qArrN].answers[2]))
    $("#answerBtn4").text((questionArr[qArrN].answers[3]))
    if (qArrN == 10) {
        stop();
        $(".ul").hide();
        $("#questionZone").text("Correct: " + correct + " Incorrect: " + incorrect);
    };
}



var intervalId
var time = 30;
var clockRunning = false;

function start() {
    if (!clockRunning) {
        $("#questionTimer").text("00:30")
        intervalId = setInterval(countDown, 1000);
        clockRunning = true;
    }
}
    
function stop() {
    
    
    clearInterval(intervalId);
    clockRunning = false;
}

var countDown = function() {
    time--;
    var converted = timeConverter(time);
    $("#questionTimer").text(converted);
    console.log(time);
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    return minutes + ":" + seconds;
}

var correct = 0;
var incorrect = 0;

if(time == 0) {
    incorrect++;
    qArrN++;
    displayQuestion();
    reset();
    console.log("incorrect", incorrect);
    console.log("qArrn", qArrN);
    console.log("correct", correct);
};

$("#answerBtn1").click(function() {
    correct++;
    qArrN++;
    displayQuestion();
    reset();
    console.log("incorrect", incorrect);
    console.log("qArrn", qArrN);
    console.log("correct", correct);
});

$("#answerBtn2").click(function() {
    incorrect++;
    qArrN++;
    displayQuestion();
    reset();
    console.log("incorrect", incorrect);
    console.log("qArrn", qArrN);
    console.log("correct", correct);
});

$("#answerBtn3").click(function() {
    incorrect++;
    qArrN++;
    displayQuestion();
    reset();
    console.log("incorrect", incorrect);
    console.log("qArrn", qArrN);
    console.log("correct", correct);
});

$("#answerBtn4").click(function() {
    incorrect++;
    qArrN++;
    displayQuestion();
    reset();
    console.log("incorrect", incorrect);
    console.log("qArrn", qArrN);
    console.log("correct", correct);
});












