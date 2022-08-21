
// slider
// background
let backgrounds= [
    "../images/slide1.jpg",
    "../images/slide2.jpg",
    "../images/slide1.jpg"
];
let slider = document.querySelector(".slider");
slider.style.backgroundImage="url("+backgrounds[0]+")";

let slideLeft = document.querySelector(".slider>.fa-angle-left");
let slideRight = document.querySelector(".slider>.fa-angle-right");

// slider.addEventListener('mouseleave', function () {
//     id = setInterval(pos, 1);
//     let position = 0;
//     function pos() {
//         if (position == -70) {
//             clearInterval(id);
//         } else {
//             slideLeft.style.left = position + "px";
//             slideRight.style.right = position + "px";
//             position -= 1;
//         }
//     }
// });

//slideLeft button
slideLeft.addEventListener('click',function(){
    backgrounds.unshift(backgrounds.pop());
    slider.style.backgroundImage="url("+backgrounds[0]+")";

});
//slideRight button
slideRight.addEventListener('click',function(){
    backgrounds.push(backgrounds.shift());
    slider.style.backgroundImage="url("+backgrounds[0]+")";

});
// end slider
// solution

// let cards = document.querySelectorAll(".solution .card");
// for(let i=0 ; i<cards.length ; i++){
//     cards[i].addEventListener('mouseenter', function () {
//         cards[i].style.backgroundColor = "#8430CB";
//         cards[i].style.transition= "1s";
//     });
//     cards[i].addEventListener('mouseleave', function () {
//         cards[i].style.backgroundColor = "#3A1E71";
//         cards[i].style.transition= "1s";

//     });
// }






