// ===============================
// 菲律宾支付系统首页 JS
// ===============================



/*
=================================
Banner 三图自动轮播
=================================
*/


const slides = document.querySelectorAll(".slide");


let currentSlide = 0;


let timer;



function showSlide(index) {


    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    slides[index].classList.add("active");


}



function nextSlide() {


    currentSlide++;


    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }


    showSlide(currentSlide);


}




function startSlider() {


    timer = setInterval(() => {


        nextSlide();


    }, 5000);


}




function stopSlider() {


    clearInterval(timer);

}




const banner = document.querySelector(".banner");



if (banner) {


    startSlider();


    banner.addEventListener(
        "mouseenter",
        stopSlider
    );


    banner.addEventListener(
        "mouseleave",
        startSlider
    );


}









/*
=================================
导航栏滚动效果
=================================
*/


const header =
    document.querySelector(".header");



window.addEventListener(
    "scroll",
    () => {


        if (window.scrollY > 80) {


            header.style.background =
                "rgba(3,15,40,.95)";


            header.style.boxShadow =
                "0 5px 30px rgba(0,0,0,.25)";


        } else {


            header.style.background =
                "rgba(4,18,45,.75)";


            header.style.boxShadow =
                "none";


        }


    });









/*
=================================
滚动进入动画
=================================
*/


const observer =
    new IntersectionObserver(

        (entries) => {


            entries.forEach(item => {


                if (item.isIntersecting) {


                    item.target.classList.add(
                        "show"
                    );


                }


            });


        },

        {

            threshold: 0.15

        }

    );





const animateElements =
    document.querySelectorAll(
        ".card,"
        + ".solution div,"
        + ".payment-grid div,"
        + ".feature-box span,"
        + ".news div,"
        + ".process span"
    );



animateElements.forEach(el => {


    el.classList.add(
        "hidden"
    );


    observer.observe(el);


});









/*
=================================
添加动画CSS
=================================
*/


const style =
    document.createElement("style");



style.innerHTML = `


.hidden{

opacity:0;

transform:
translateY(40px);

transition:
all .8s ease;

}



.show{

opacity:1;

transform:
translateY(0);

}


`;



document.head.appendChild(style);









/*
=================================
导航锚点平滑滚动
=================================
*/


document
    .querySelectorAll("a[href^='#']")
    .forEach(link => {


        link.addEventListener(
            "click",
            function (e) {


                e.preventDefault();



                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );



                if (target) {


                    target.scrollIntoView({

                        behavior: "smooth"

                    });


                }


            });


    });









/*
=================================
按钮点击效果
=================================
*/


const buttons =
    document.querySelectorAll(
        "button,.nav-btn"
    );



buttons.forEach(btn => {


    btn.addEventListener(
        "click",
        () => {


            btn.style.transform =
                "scale(.95)";


            setTimeout(() => {


                btn.style.transform =
                    "scale(1)";


            }, 150);


        });


});

