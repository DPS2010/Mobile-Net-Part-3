Webcam.set({
    height:300,
    width:300,
    image_format:"jpeg",
    jpeg_quality:90,

    constraints:{
        facingMode:"environment"
    }
})
Webcam.attach("camera")
//Import the model
classifier = ml5.imageClassifier("MobileNet", modelLoaded)
function modelLoaded () {
    console.log("Model Loaded")
}
//Take Snapshot
function capture() {
    Webcam.snap(
        function(img){
            document.getElementById("snapshot").innerHTML = `<img src=${img} id="capturedImage">`
        }
    )
}
function identify() {
    snap = document.getElementById("capturedImage")
    classifier.classify(snap, gotResults)
}
function gotResults(error, result) {
    if (error) {
        console.error(error)
    } else {
        console.log(result)
        document.getElementById("objectResult").innerHTML = result[0].label
    }
}