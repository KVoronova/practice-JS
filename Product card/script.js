let productImg = document.getElementById('productImg');
let btn = document.getElementsByClassName('btn');

const images = [
    "img/fujiphilm-unsplash.jpg",
    "img/fujiphilm-2-unsplash.jpg",
    "img/fujiphilm-3-unsplash.png"
];

function handleClick(index) {
    productImg.src = images[index];

    Array.from(btn).forEach(btn => btn.classList.remove("active"));

    btn[index].classList.add("active");
};

Array.from(btn).forEach((btn, index) => {
    btn.addEventListener('click', () => handleClick(index));
});



//FIRST VERS

// btn[0].onclick = function(){
//     productImg.src = "img/fujiphilm-unsplash.jpg";

//     for(bt of btn) {
//         bt.classList.remove("active");
//     }
//     this.classList.add("active");
// }
// btn[1].onclick = function(){
//     productImg.src = "img/fujiphilm-2-unsplash.jpg";

//     for(bt of btn) {
//         bt.classList.remove("active");
//     }
//     this.classList.add("active");
// }
// btn[2].onclick = function(){
//     productImg.src = "img/fujiphilm-3-unsplash.png";

//     for(bt of btn) {
//         bt.classList.remove("active");
//     }
//     this.classList.add("active");
// }