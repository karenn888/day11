let sliderIndex = 0;
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const sliderImages = document.querySelectorAll('.slider-image');
function changeSlideIndex(number){
    sliderIndex += number;
        if(sliderIndex > sliderImages.length - 1){
            sliderIndex = 0; 
        }
        else if(sliderIndex < 0){
            sliderIndex = sliderImages.length - 1;
        }
    changeSlide();
}

function changeSlide(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
    sliderImages[sliderIndex].style.display = 'block';
}

prevBtn.addEventListener('click', function(){ //function(): trung gian
    changeSlideIndex(-1);
});


nextBtn.addEventListener('click', function(){
    changeSlideIndex(1);
});