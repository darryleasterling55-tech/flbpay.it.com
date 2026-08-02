// Header滚动效果


const header = document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {


        if (window.scrollY > 80) {


            header.style.background =
                "rgba(3,15,40,.95)";


        } else {


            header.style.background =
                "rgba(5,20,50,.8)";


        }


    });





// 页面阅读动画


const sections = document.querySelectorAll(
    ".article-container h2,.article-container p,.feature-box div"
);



const observer =
    new IntersectionObserver(
        (entries) => {


            entries.forEach(
                item => {


                    if (item.isIntersecting) {


                        item.target.style.opacity = 1;


                        item.target.style.transform =
                            "translateY(0)";


                    }


                });


        }
    );



sections.forEach(
    item => {


        item.style.opacity = 0;


        item.style.transform =
            "translateY(40px)";


        item.style.transition =
            "all .8s";


        observer.observe(item);


    });




// CTA按钮


document.querySelector(".cta button")
    .onclick = function () {


        alert(
            "感谢关注菲律宾支付解决方案"
        );


    };