(function(){
    const imagesSlider = [...document.querySelectorAll('.slider__img')];
    const prevBtn = document.querySelector('#prev')
    const nextBtn = document.querySelector('#next')
    
    nextBtn.addEventListener('click', ()=>{
        changePosition(1);
    });

    prevBtn.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentImage = document.querySelector('.slider__img--show').dataset.id;
        value = Number(currentImage);
        value+= add;
        console.log(value)


        imagesSlider[Number(currentImage)-1].classList.remove('slider__img--show');
        if(value === imagesSlider.length+1 || value === 0){
            value = value === 0 ? imagesSlider.length  : 1;
        }

        imagesSlider[value-1].classList.add('slider__img--show');

    }

})();