function getVals(){
    let parent = this.parentNode;
    let slides = parent.querySelectorAll(".range-input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);

    if(slide1 > slide2){
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }

    let displayElement = document.getElementById("range-values");
    // innerHTML property allows javascript code to manipulate a website being displayed
    displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
}

window.onload = function () {
    let sliderSections = document.getElementById("range-slider");
    let sliders = sliderSections.querySelectorAll(".range-input");

    sliders.forEach((slide)=>{
        if(slide.type === "range"){
            // change value method
            slide.oninput = getVals;
            // Initial Value
            slide.oninput();
        }
    });
};