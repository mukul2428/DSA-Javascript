function displayImage(){
    const fileInput = document.getElementById("fileInput");

    const imageElement = document.getElementById("image");

    //get the selected file from input
    const file = fileInput.files[0];
    if(file){
        //create filereader object to read selected file
        const reader = new FileReader();
        //define the event handler when file is loaded
        reader.onload = function(event){
            imageElement.src = event.target.result;
        }

        //reaf the selected file as data url
        reader.readAsDataURL(file);
    }else{
        //if no file selected
        imageElement.src = "";
    }
}