var gallaryContainer = document.querySelector("#gallaryContainer");
var icons = document.querySelector(".icons");
var bckdrop = document.querySelector(".bckdrop");


var currentImageIndex;
var imgSrc;
// 1) i need to show the offcanfs when i click on the card
gallaryContainer.addEventListener("click", function(e){
    if(e.target.closest(".card").classList.contains("card")){
        bckdrop.classList.replace("d-none", "d-flex");
        currentImageIndex = e.target.closest(".card").querySelector("img").dataset.imgindex;
        imgSrc = e.target.closest(".card").querySelector("img").getAttribute("src");
        bckdrop.querySelector("img").setAttribute("src", imgSrc);
    }
});



// function for go to next image or previous image depend on the direction
function goToImage(direction){
    if(direction == "next"){
        currentImageIndex++;
        if(currentImageIndex > 6){
            currentImageIndex = 1;
        }
    }else{
        currentImageIndex--;
        if(currentImageIndex < 1){
            currentImageIndex = 6;
        }
    }
    imgSrc = `images/img${currentImageIndex}.jpg`;
    bckdrop.querySelector("img").setAttribute("src", imgSrc);
}

// 2) i need to close the offcanfs when i click on the close button
function closeOffCanvas(){
    bckdrop.classList.replace("d-flex", "d-none");
}
// 3) i need to close the offcanfs when i click on the esc key
document.addEventListener("keydown", function(e){
    if(e.key == "Escape"){
        closeOffCanvas();
    }else if(e.key == "ArrowRight"){
        goToImage("next");
    }else if(e.key == "ArrowLeft"){
        goToImage("prev");
    }
})
document.addEventListener("click", function(e){
    if(e.target.classList.contains("bckdrop")){
        closeOffCanvas();
    }
})

icons.addEventListener("click", function(e){
    if(e.target.classList.contains("fa-arrow-right")){
        goToImage("next");
    }else if(e.target.classList.contains("fa-arrow-left")){
        goToImage("prev");
    }else if(e.target.classList.contains("fa-xmark")){
        closeOffCanvas();
    }
})