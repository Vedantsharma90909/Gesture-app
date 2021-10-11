prediction1 = "";
prediction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("camera");

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'/>";
    });
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/K4L09rM6Z/model.json", modelLoaded);

function modelLoaded() {
    console.log("model is loaded")
}

function speak() {
    var Synth = window.speechSynthesis;
    speach_data_1 = "The first prediction is " + prediction1;
    speach_data_2 = "The second prediction is " + prediction2;
    var utterthis = SpeechSynthesisUtterance(speach_data_1 + speach_data_2);
    Synth.speak(utterthis);
}