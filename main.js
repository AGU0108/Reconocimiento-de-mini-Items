
Webcam.set({
 width: 350,
 height: 350,
 image_format:'png',
 png_quality:90
});


camera=document.getElementById("camera");
Webcam.attach('#camera');



function take_snapshot(){
 Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
 });
}


console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6k-qDoTEb/model.json',modelLoaded)
function modelLoaded(){
    console.log("Modelo cargado");
}


function check(){
    console.log("Checando imagen...")
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResults);
}

function gotResults(error,results){
    if(error){
   console.log(error);
    }else{
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }

}