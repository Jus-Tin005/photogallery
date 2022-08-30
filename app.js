var getImages = document.querySelectorAll(".img"), // NodeList
    getModel  = document.querySelector(".model"),
    getModelImage = document.querySelector(".model-img"),
    getCaption = document.querySelector(".caption"),
    getBtnClose = document.querySelector(".btn-close");


for(var x =0; x < getImages.length;x++){
        getImages[x].addEventListener('click',function(){
                showNow(this);
        })
}

function showNow(element) {

        // console.log(element);
        // console.log(element.src);
        // console.log(element.alt);

        getModel.style.display = "block";
        getModelImage.src = element.src;
        getCaption.textContent = element.alt;

}

// method 1
getBtnClose.addEventListener('click',function(){
        getModel.style.display = "none";
});

// method 2
// getBtnClose.onclick = function(){
        // getModel.style.display = "none";
// }



// method 1

window.onclick = function(e){
        if(e.target === getModel){
                getModel.style.display = 'none';
        }
}

// method 2
// document.addEventListener('click',function(e){
// console.log(e.target);
        // if(e.target === getModel){
                // getModel.style.display = 'none';
        // }
// })