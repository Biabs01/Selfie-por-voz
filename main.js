var SpeechRecognition = window.webkitSpeechRecognition;
var recognotion = new SpeechRecognition();

var Textbox = document.getElementById("textbox").innerHTML;

function start(){
    
    recognotion.start();
}

recognotion.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    speak();
}

function speak() {
    var synth = window.speechSynthesis;
    speakData = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    heigth: 250,
    image_format: 'png',
    png_quality: 90
})