let slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = ` ${index*100}% `
    }
)
let goprev =()=>{
    counter--
    slideimage()
}
let gonext =()=>{
    counter++
    slideimage()
}
let slideimage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transfrom = `translateX(-${counter*100}%)`
        }
    )
}
