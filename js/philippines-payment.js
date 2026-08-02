/* =====================================
 菲律宾支付解决方案页面 JS
 Technology Landing Page Interaction
===================================== */



/*
=====================================
1. Header 滚动效果
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
                "0 5px 30px rgba(0,0,0,.25)";


        } else {


            header.style.background =
                "rgba(5,20,50,.75)";


            header.style.boxShadow =
                "none";


        }


    });







/*
=====================================
2. 页面滚动进入动画
=====================================
*/


const animateItems =
    document.querySelectorAll(

        ".box,"
        +
        ".grid4 div,"
        +
        ".flow div,"
        +
        ".api-list span,"
        +
        ".industry span,"
        +
        ".steps span"

    );



animateItems.forEach(item => {


    item.classList.add(
        "scroll-hidden"
    );


});





const observer =
    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    entry.target.classList.add(
                        "scroll-show"
                    );


                    observer.unobserve(
                        entry.target
                    );


                }


            });


        },

        {

            threshold: 0.15

        }

    );





animateItems.forEach(item => {


    observer.observe(item);


});








/*
=====================================
3. 动态添加动画CSS
=====================================
*/


const animationStyle =
    document.createElement("style");



animationStyle.innerHTML = `



.scroll-hidden{


opacity:0;


transform:
translateY(50px);


transition:
all .8s ease;


}



.scroll-show{


opacity:1;


transform:
translateY(0);


}



`;



document.head.appendChild(
    animationStyle
);









/*
=====================================
4. 卡片延迟动画
=====================================
*/


const cards =
    document.querySelectorAll(
        ".box"
    );



cards.forEach(
    (card, index) => {


        card.style.transitionDelay =
            (index * 0.1) + "s";


    });








/*
=====================================
5. 按钮点击反馈
=====================================
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
=====================================
6. 平滑滚动
=====================================
*/


document
    .querySelectorAll(
        "a[href^='#']"
    )
    .forEach(anchor => {


        anchor.addEventListener(
            "click",
            function (e) {


                e.preventDefault();


                let target =
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
7. 数字统计动画(预留)
可用于：
交易量
商户数量
接口数量
=====================================
*/


function numberAnimation(
    element,
    target
) {


    let current = 0;


    let speed =
        Math.ceil(
            target / 80
        );



    let timer =
        setInterval(() => {


            current += speed;



            if (current >= target) {


                current = target;


                clearInterval(timer);


            }



            element.innerHTML =
                current + "+";



        }, 30);



}






/*
=====================================
8. 页面加载完成效果
=====================================
*/


window.addEventListener(
    "load",
    () => {


        document.body.style.opacity = "1";


    });
