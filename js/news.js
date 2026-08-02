/* =====================================
   NEWS PAGE JAVASCRIPT
   Philippines Payment News System
===================================== */



/*
=====================================
1. 新闻数据
=====================================
*/


const newsData = [


    {
        title: "菲律宾数字支付市场未来发展趋势分析",
        desc: "分析菲律宾数字支付规模增长以及企业支付基础设施建设方向。",
        link: "news/philippines-payment-1.html",
        img: "picture/news1.png"
    },


    {
        title: "菲律宾移动支付用户增长带来的商业机会",
        desc: "探讨移动互联网发展对菲律宾支付生态的影响。",
        link: "news/philippines-payment-2.html",
        img: "picture/news2.png"
    },


    {
        title: "菲律宾金融科技行业创新方向解析",
        desc: "介绍金融科技如何推动支付服务数字化升级。",
        link: "news/philippines-payment-3.html",
        img: "picture/news3.png"
    },


    {
        title: "菲律宾企业数字化转型中的支付需求",
        desc: "企业如何通过支付技术提升业务效率。",
        link: "news/philippines-payment-4.html",
        img: "picture/news4.png"
    },


    {
        title: "菲律宾跨境贸易推动支付技术升级",
        desc: "跨境业务增长带来的支付系统需求变化。",
        link: "news/philippines-payment-5.html",
        img: "picture/news5.png"
    },


    {
        title: "菲律宾数字钱包生态发展研究",
        desc: "分析数字钱包在菲律宾市场中的应用趋势。",
        link: "news/philippines-payment-6.html",
        img: "picture/news6.png"
    },




    {
        title: "菲律宾支付网关技术架构发展趋势",
        desc: "支付网关如何提升交易处理能力。",
        link: "news/philippines-payment-7.html",
        img: "picture/news7.png"
    },


    {
        title: "菲律宾在线商业增长促进支付系统建设",
        desc: "电子商务发展推动支付基础设施升级。",
        link: "news/philippines-payment-8.html",
        img: "picture/news8.png"
    },


    {
        title: "菲律宾商户管理系统应用价值分析",
        desc: "多商户运营模式对支付平台提出的新要求。",
        link: "news/philippines-payment-9.html",
        img: "picture/news9.png"
    },


    {
        title: "菲律宾支付安全体系建设趋势",
        desc: "数据保护和交易安全成为支付行业重点。",
        link: "news/philippines-payment-10.html",
        img: "picture/news10.png"
    },


    {
        title: "菲律宾API支付接口技术应用分析",
        desc: "开放接口推动企业快速连接支付能力。",
        link: "news/philippines-payment-11.html",
        img: "picture/news11.png"
    },


    {
        title: "菲律宾智能支付系统未来方向",
        desc: "人工智能技术正在改变支付运营模式。",
        link: "news/philippines-payment-12.html",
        img: "picture/news12.png"
    },




    {
        title: "菲律宾数字银行发展对支付行业影响",
        desc: "数字银行推动金融服务模式变化。",
        link: "news/philippines-payment-13.html",
        img: "picture/news13.png"
    },


    {
        title: "菲律宾支付行业数据管理趋势",
        desc: "数据能力成为支付平台竞争的重要因素。",
        link: "news/philippines-payment-14.html",
        img: "picture/news14.png"
    },


    {
        title: "菲律宾本地化支付解决方案需求增长",
        desc: "企业更加关注符合本地市场需求的支付方案。",
        link: "news/philippines-payment-15.html",
        img: "picture/news15.png"
    },


    {
        title: "菲律宾支付平台运营管理模式分析",
        desc: "介绍支付平台长期运营中的管理方向。",
        link: "news/philippines-payment-16.html",
        img: "picture/news16.png"
    },


    {
        title: "菲律宾未来支付基础设施建设方向",
        desc: "未来支付行业将向智能化方向发展。",
        link: "news/philippines-payment-17.html",
        img: "picture/news17.png"
    },


    {
        title: "菲律宾金融数字化时代支付创新",
        desc: "数字技术持续推动菲律宾支付行业变化。",
        link: "news/philippines-payment-18.html",
        img: "picture/news18.png"
    }


];









/*
=====================================
2. 分页设置
=====================================
*/


const pageSize = 6;


let currentPage = 1;


const totalPage =
    Math.ceil(
        newsData.length / pageSize
    );





const newsList =
    document.querySelector(
        "#newsList"
    );



const pagination =
    document.querySelector(
        "#pagination"
    );









/*
=====================================
3. 渲染新闻
=====================================
*/


function renderNews() {


    newsList.innerHTML = "";



    let start =
        (currentPage - 1)
        *
        pageSize;



    let end =
        start + pageSize;



    let currentNews =
        newsData.slice(
            start,
            end
        );





    currentNews.forEach(
        (item) => {



            let card =
                document.createElement(
                    "div"
                );



            card.className =
                "news-card";



            card.innerHTML = `


<div class="news-img">


<img src="${item.img}"
alt="${item.title}">


</div>



<div class="news-content">


<h3>

${item.title}

</h3>



<p>

${item.desc}

</p>



<a href="${item.link}">

阅读全文 →

</a>


</div>


`;



            newsList.appendChild(card);



        }

    );



    addAnimation();



}









/*
=====================================
创建增强分页按钮
=====================================
*/


function createPagination() {


    pagination.innerHTML = "";



    /*
    =========================
    上一页按钮
    =========================
    */


    let prevBtn =
        document.createElement("button");


    prevBtn.innerHTML =
        "‹ 上一页";


    prevBtn.className =
        "page-prev";



    if (currentPage === 1) {

        prevBtn.classList.add(
            "disabled"
        );

        prevBtn.disabled = true;

    }



    prevBtn.onclick = function () {


        if (currentPage > 1) {


            currentPage--;


            renderNews();


            createPagination();


            scrollNewsTop();


        }


    };



    pagination.appendChild(
        prevBtn
    );







    /*
    =========================
    数字分页
    =========================
    */


    for (
        let i = 1;
        i <= totalPage;
        i++
    ) {



        let btn =
            document.createElement(
                "button"
            );



        btn.innerHTML = i;



        btn.className =
            "page-number";



        /*
        当前页
        */


        if (i === currentPage) {


            btn.classList.add(
                "active"
            );


        }



        /*
        SEO辅助
        */


        btn.setAttribute(
            "aria-label",
            "第" + i + "页"
        );



        btn.onclick = function () {


            currentPage = i;



            renderNews();



            createPagination();



            scrollNewsTop();



        };



        pagination.appendChild(
            btn
        );


    }









    /*
    =========================
    下一页按钮
    =========================
    */


    let nextBtn =
        document.createElement(
            "button"
        );



    nextBtn.innerHTML =
        "下一页 ›";



    nextBtn.className =
        "page-next";



    if (currentPage === totalPage) {


        nextBtn.classList.add(
            "disabled"
        );


        nextBtn.disabled = true;


    }




    nextBtn.onclick = function () {



        if (currentPage < totalPage) {


            currentPage++;


            renderNews();


            createPagination();


            scrollNewsTop();


        }


    };



    pagination.appendChild(
        nextBtn
    );





}








/*
=====================================
分页滚动定位
=====================================
*/


function scrollNewsTop() {



    let section =
        document.querySelector(
            ".news-section"
        );



    if (section) {


        window.scrollTo({


            top:
                section.offsetTop - 90,


            behavior:
                "smooth"



        });


    }



}









/*
=====================================
5. 滚动动画
=====================================
*/


function addAnimation() {



    const cards =
        document.querySelectorAll(
            ".news-card"
        );



    cards.forEach(
        (card, index) => {


            card.style.opacity = "0";


            card.style.transform =
                "translateY(40px)";



            setTimeout(() => {


                card.style.transition =
                    "all .6s ease";



                card.style.opacity = "1";


                card.style.transform =
                    "translateY(0)";



            },
                index * 120);



        });


}









/*
=====================================
6. Header滚动效果
=====================================
*/


const header =
    document.querySelector(
        ".header"
    );



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
7. 按钮点击反馈
=====================================
*/


document
    .querySelectorAll(
        "button"
    )
    .forEach(
        btn => {


            btn.addEventListener(
                "click",
                () => {


                    btn.style.transform =
                        "scale(.92)";



                    setTimeout(() => {


                        btn.style.transform =
                            "scale(1)";


                    }, 150);



                });


        });









/*
=====================================
8. 初始化
=====================================
*/


renderNews();


createPagination();