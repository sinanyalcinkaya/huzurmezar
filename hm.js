
window.HM = {};
window.HM.Change_Image = function(comp){
    document.getElementById("File_Input").click();
}

window.elamet = function(data){
    alert(data);
};

window.onload = function(){
    document.getElementById('File_Input').onchange = function (evt) {
        var tgt = evt.target || window.event.srcElement;
        var  files = tgt.files;
        
        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = () => showImage(fr);
            fr.readAsDataURL(files[0]);
        }
    }
};

// var canvas = document.createElement("canvas");
// var ctx = canvas.getContext("2d");
// var imageData;

function showImage(fileReader) {
    var img = document.getElementById("myImage");
    img.onload = () => getImageData(img);
    img.src = fileReader.result;
}

function getImageData(img) {

    window.HM.Comp.Set_Image(img);
    
    // ctx.drawImage(img, 0, 0);
    // imageData = ctx.getImageData(0, 0, img.width, img.height).data;
    // console.log("image data:", imageData);
}


