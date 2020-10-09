const tabs = document.querySelector(".tabs");
const tabsTitle = document.querySelectorAll(".tabs-title");
const tabsContent = document.querySelectorAll(".tabs-steps");

tabs.addEventListener("click", function(el) {
  tabsTitle.forEach(item =>
    item.classList.remove("activeService"));
    el.target.classList.add("activeService");

  tabsContent.forEach(item => {
    item.classList[el.target.dataset.title === item.dataset.content ? "add" : "remove"]("activeService");
  });
});

/////////////////////                  Our Amazing Work

const tabsListWork = document.querySelectorAll(".tabs-list");
const tabsWorkAll = document.querySelector(".tabsImg-all");
const workImgLoad = document.querySelector("#workImgLoad");

const allImg = [
  {
    "imgSrc" : "img/webDesign/web-design1.jpg",
    "type" : "webDesign"
  },
  {
    "imgSrc" : "img/webDesign/web-design2.jpg",
    "type" : "webDesign"
  },
  {
    "imgSrc" : "img/webDesign/web-design3.jpg",
    "type" : "webDesign"
  },
  {
    "imgSrc" : "img/webDesign/web-design4.jpg",
    "type" : "webDesign"
  },
  {
    "imgSrc" : "img/webDesign/web-design5.jpg",
    "type" : "webDesign"
  },
  {
    "imgSrc" : "img/webDesign/web-design6.jpg",
    "type" : "webDesign"
  },
  {
    "imgSrc" : "img/webDesign/web-design7.jpg",
    "type" : "webDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design1.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design2.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design3.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design4.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design5.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design6.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design7.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design8.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design9.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design10.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design11.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/graphicDesign/graphic-design12.jpg",
    "type" : "graphicDesign"
  },
  {
    "imgSrc" : "img/landingPage/landing-page1.jpg",
    "type" : "landingPage"
  },
  {
    "imgSrc" : "img/landingPage/landing-page2.jpg",
    "type" : "landingPage"
  },
  {
    "imgSrc" : "img/landingPage/landing-page3.jpg",
    "type" : "landingPage"
  },
  {
    "imgSrc" : "img/landingPage/landing-page4.jpg",
    "type" : "landingPage"
  },
  {
    "imgSrc" : "img/landingPage/landing-page5.jpg",
    "type" : "landingPage"
  },
  {
    "imgSrc" : "img/landingPage/landing-page6.jpg",
    "type" : "landingPage"
  },
  {
    "imgSrc" : "img/landingPage/landing-page7.jpg",
    "type" : "landingPage"
  },
  {
    "imgSrc" : "img/wordpress/wordpress1.jpg",
    "type" : "wordpress"
  },
  {
    "imgSrc" : "img/wordpress/wordpress2.jpg",
    "type" : "wordpress"
  },
  {
    "imgSrc" : "img/wordpress/wordpress3.jpg",
    "type" : "wordpress"
  },
  {
    "imgSrc" : "img/wordpress/wordpress4.jpg",
    "type" : "wordpress"
  },
  {
    "imgSrc" : "img/wordpress/wordpress5.jpg",
    "type" : "wordpress"
  },
  {
    "imgSrc" : "img/wordpress/wordpress6.jpg",
    "type" : "wordpress"
  },
  {
    "imgSrc" : "img/wordpress/wordpress7.jpg",
    "type" : "wordpress"
  },
  {
    "imgSrc" : "img/wordpress/wordpress8.jpg",
    "type" : "wordpress"
  },
  {
    "imgSrc" : "img/wordpress/wordpress9.jpg",
    "type" : "wordpress"
  },
  {
    "imgSrc" : "img/wordpress/wordpress10.jpg",
    "type" : "wordpress"
  },
];

const createImg = (array) => {
  array.forEach(el => {
    let img = document.createElement("img");
    img.src = el.imgSrc;
    img.setAttribute( "data-filter", el.type);
    img.classList.add("activeWork");
    tabsWorkAll.appendChild(img);
  });
};

const filterAdd = (arr, attribute) => {
  // console.log(arr, attribute);
  let filteredImgs = arr.filter(item => {
    if (item.type === attribute) {
      // console.log(item.type);
      return item;
    }
  })
   return filteredImgs;
};

const allImgArray = allImg.slice(0 , 12);
let firstImgSorted = allImgArray.sort(() => Math.random() - 0.5);

createImg(firstImgSorted);

tabsListWork.forEach(el => {
  el.addEventListener("click", (ev) => {

    let tabNavAttr = ev.target.getAttribute("data-typeWork");
    let del = document.querySelectorAll(".tabsImg-all img");
    // Удаляем класс activeWork с картинок 
    del.forEach(el => {
      if (el.classList.contains("activeWork")) {
        el.classList.remove("activeWork");
      }
    })
    // Отфильтровали массив allImg по tabNavAttr
    let addResult = filterAdd(allImg, tabNavAttr);
    // rerender view
    createImg(addResult);

    console.log(ev.target);
  })
}); 

// tabsListWork.forEach(item =>
//       item.classList.remove("activeWork"));
//       ev.target.classList.add("activeWork");

    
//     if(el.target.dataset.type === "all"){
//       createImg(allImgArray);
//       console.log(allImgArray);
//     }
   
workImgLoad.addEventListener("click", () => {
  let arrMoreImg = firstImgSorted.concat(allImg.slice(12, 24));
  createImg(arrMoreImg);
})


const mySwiper = new Swiper('.gallery-top', {
  spaceBetween: 6,
  thumbs: {
    swiper: {
      el: '.gallery-thumbs',
      spaceBetween: 6,
      slidesPerView: 4,
      freeMode: true } },
    loop: true,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev' } 
});





MicroModal.init({
  onShow: modal => console.info(`${modal.id} is shown`), 
  onClose: modal => console.info(`${modal.id} is hidden`), 
  openTrigger: 'data-custom-open', 
  closeTrigger: 'data-custom-close', 
  disableScroll: true, 
  disableFocus: false, 
  awaitOpenAnimation: true, 
  awaitCloseAnimation: true, 
  debugMode: true 
});