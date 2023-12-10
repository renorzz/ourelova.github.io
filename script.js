const wrapper = document.querySelector(".wrapper");
const question = document.querySelector("question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", ( ) => {
    question.innerHTML = "Aaaaa, aku juga sayang sama kamu!!";
    gif.src =
        "https://i.pinimg.com/originals/e2/70/15/e270151a693e5624c5e824565c06db4d.gif";
});

noBtn.addEventListener("mouseover", ( ) => {
    const noBtnrect = noBtn.getBoundingClientRect( );
    const maxX = window.innerWidth - noBtnrect.width;
    const maxY = window.innerHeight - noBtnrect.height;

    const randomX = Math.floor(Math.random( ) * maxX);
    const randomY = Math.floor(Math.random( ) * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});