/* ======================================
   ABOUT PAGE JAVASCRIPT
   Payment Technology Company
====================================== */



/*
========================================
1. Header滚动效果
========================================
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
                "rgba(5,20,50,.75)";


            header.style.boxShadow =
                "none";


        }


    });







/*
========================================
2. 页面滚动动画
========================================
*/


const elements =
    document.querySelectorAll(

        ".box,"
        +
        ".grid4 div,"
        +
        ".research div,"
        +
        ".numbers div,"
        +
        ".steps span,"
        +
        ".service .grid3 div,"
        +
        ".support span"

    );



elements.forEach(el => {


    el.classList.add(
        "about-hidden"
    );


});







const aboutObserver =
    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    entry.target.classList.add(
                        "about-show"
                    );


                    aboutObserver.unobserve(
                        entry.target
                    );


                }


            });


        },

        {

            threshold: 0.15

        }

    );







elements.forEach(el => {


    aboutObserver.observe(el);


});









/*
========================================
3. 添加动画CSS
========================================
*/


const aboutStyle =
    document.createElement("style");



aboutStyle.innerHTML = `



.about-hidden{


opacity:0;


transform:

translateY(45px);


transition:

all .8s ease;


}



.about-show{


opacity:1;


transform:

translateY(0);


}



`;



document.head.appendChild(
    aboutStyle
);









/*
========================================
4. 数据数字动画
========================================
*/


function countNumber(
    element,
    target,
    suffix
) {


    let number = 0;



    let speed =
        Math.ceil(target / 60);



    let timer =
        setInterval(() => {


            number += speed;



            if (number >= target) {


                number = target;


                clearInterval(timer);


            }



            element.innerHTML =
                number + suffix;



        }, 30);



}








let numberStarted = false;



const numberSection =
    document.querySelector(
        ".numbers"
    );






const numberObserver =
    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting
                    &&
                    !numberStarted) {



                    numberStarted = true;



                    const numbers =
                        document.querySelectorAll(
                            ".numbers strong"
                        );



                    countNumber(
                        numbers[0],
                        6,
                        "+"
                    );



                    countNumber(
                        numbers[1],
                        50,
                        "+"
                    );



                    countNumber(
                        numbers[2],
                        1000,
                        "+"
                    );



                    countNumber(
                        numbers[3],
                        365,
                        ""
                    );



                }



            });


        },

        {

            threshold: .5

        }

    );






if (numberSection) {


    numberObserver.observe(
        numberSection
    );


}









/*
========================================
5. 卡片鼠标效果
========================================
*/


const cards =
    document.querySelectorAll(
        ".box"
    );



cards.forEach(card => {


    card.addEventListener(
        "mouseenter",
        () => {


            card.style.transform =
                "translateY(-12px)";


        }
    );



    card.addEventListener(
        "mouseleave",
        () => {


            card.style.transform =
                "translateY(0)";


        }
    );



});









/*
========================================
6. 按钮点击反馈
========================================
*/


const buttons =
    document.querySelectorAll(
        "button,"
        +
        ".banner-content a"
    );



buttons.forEach(btn => {


    btn.addEventListener(
        "click",
        () => {


            btn.style.transform =
                "scale(.94)";



            setTimeout(() => {


                btn.style.transform =
                    "scale(1)";


            }, 150);



        });


});









/*
========================================
7. 平滑滚动
========================================
*/


document
    .querySelectorAll(
        "a[href^='#']"
    )
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
========================================
8. 页面加载效果
========================================
*/


window.addEventListener(
    "load",
    () => {


        document.body.style.opacity =
            "1";


    });