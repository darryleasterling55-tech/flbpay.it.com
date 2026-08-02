/* =====================================
   SYSTEM PAGE JAVASCRIPT
   Payment Management System
===================================== */



/*
=====================================
1. Header滚动效果
=====================================
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
                "0 5px 30px rgba(0,0,0,.3)";


        } else {


            header.style.background =
                "rgba(5,20,50,.75)";


            header.style.boxShadow =
                "none";


        }


    });









/*
=====================================
2. 页面滚动出现动画
=====================================
*/


const animateElements =
    document.querySelectorAll(

        ".box,"
        +
        ".grid4 div,"
        +
        ".architecture div,"
        +
        ".analysis span,"
        +
        ".api div,"
        +
        ".advantages span"

    );



animateElements.forEach(
    (item) => {


        item.classList.add(
            "system-hidden"
        );


    });








const systemObserver =
    new IntersectionObserver(

        (entries) => {


            entries.forEach(
                (entry) => {


                    if (entry.isIntersecting) {


                        entry.target.classList.add(
                            "system-show"
                        );



                        systemObserver.unobserve(
                            entry.target
                        );



                    }


                });


        },

        {

            threshold: 0.15

        }

    );







animateElements.forEach(
    (item) => {


        systemObserver.observe(
            item
        );


    });









/*
=====================================
3. 添加动画样式
=====================================
*/


const style =
    document.createElement(
        "style"
    );



style.innerHTML = `


.system-hidden{


opacity:0;


transform:

translateY(45px);


transition:

all .8s ease;


}



.system-show{


opacity:1;


transform:

translateY(0);


}



`;



document.head.appendChild(style);









/*
=====================================
4. 系统架构流程动画
=====================================
*/


const architecture =
    document.querySelectorAll(
        ".architecture div"
    );



architecture.forEach(
    (item, index) => {


        item.style.transitionDelay =
            (index * 0.15) + "s";


    });









/*
=====================================
5. 功能模块依次显示
=====================================
*/


const modules =
    document.querySelectorAll(
        ".grid3 .box"
    );



modules.forEach(
    (module, index) => {


        module.style.transitionDelay =
            (index * 0.12) + "s";


    });









/*
=====================================
6. API标签点击效果
=====================================
*/


const apiItems =
    document.querySelectorAll(
        ".api div"
    );



apiItems.forEach(
    (item) => {


        item.addEventListener(
            "mouseenter",
            () => {


                item.style.transform =
                    "translateY(-8px)";



                item.style.boxShadow =
                    "0 15px 35px rgba(0,120,255,.25)";


            });


        item.addEventListener(
            "mouseleave",
            () => {


                item.style.transform =
                    "translateY(0)";


            });


    });









/*
=====================================
7. 优势标签动画
=====================================
*/


const advantages =
    document.querySelectorAll(
        ".advantages span"
    );



advantages.forEach(
    (item, index) => {


        item.style.transition =
            "all .4s ease";



        item.addEventListener(
            "mouseenter",
            () => {


                item.style.background =
                    "#006cff";


                item.style.color =
                    "#fff";


            });



        item.addEventListener(
            "mouseleave",
            () => {


                item.style.background =
                    "white";


                item.style.color =
                    "#006cff";


            });


    });









/*
=====================================
8. 卡片交互增强
=====================================
*/


const cards =
    document.querySelectorAll(
        ".box"
    );



cards.forEach(
    card => {


        card.addEventListener(
            "mouseenter",
            () => {


                card.style.transform =
                    "translateY(-12px)";


            });




        card.addEventListener(
            "mouseleave",
            () => {


                card.style.transform =
                    "translateY(0)";


            });


    });









/*
=====================================
9. 按钮点击反馈
=====================================
*/


const buttons =
    document.querySelectorAll(
        "button,"
        +
        ".banner-content a"
    );



buttons.forEach(
    button => {


        button.addEventListener(
            "click",
            () => {


                button.style.transform =
                    "scale(.94)";



                setTimeout(
                    () => {


                        button.style.transform =
                            "scale(1)";


                    },
                    150
                );



            });


    });









/*
=====================================
10. 平滑滚动
=====================================
*/


document
    .querySelectorAll(
        "a[href^='#']"
    )
    .forEach(
        link => {


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
=====================================
11. 页面加载效果
=====================================
*/


window.addEventListener(
    "load",
    () => {


        document.body.style.opacity =
            "1";


    });