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

/**************************\
  Start Our Amazing Work
\**************************/                

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
    let tabsImgList = document.createElement("div");
    // div hover and his content
    let divHover = document.createElement("div");
    let divHoverItemsSrc = document.createElement("div");
    let divHoverSrcLeft = document.createElement("a");
    let divHoverSrcRight = document.createElement("a");
    let divHoverTitleName = document.createElement("h3");
    let divHoverSpan = document.createElement("span");
    let divHoverItemLeft = document.createElement("div");
    let divHoverItemRight = document.createElement("div");
    let divHoverItemRightSquare = document.createElement("div");


    img.src = el.imgSrc;
    tabsImgList.setAttribute( "data-filter", el.type);
    tabsImgList.classList.add("activeWork");
    tabsWorkAll.appendChild(tabsImgList);
    tabsImgList.appendChild(img);
    tabsImgList.classList.add("tabsImgList");

    // Добовляем див ховер его контент и классы 
    tabsImgList.appendChild(divHover);
    divHover.classList.add("divHover");

    divHover.appendChild(divHoverItemsSrc);
    divHoverItemsSrc.classList.add("divHoverItemsSrc");

    divHoverItemsSrc.appendChild(divHoverSrcLeft);
    divHoverSrcLeft.classList.add("divHoverSrcLeft");
    divHoverSrcLeft.appendChild(divHoverItemLeft);
    divHoverItemLeft.classList.add("divHoverItemLeft");
    // divHoverTitleName.innerHTML = " ";

    divHoverItemsSrc.appendChild(divHoverSrcRight);
    divHoverSrcRight.classList.add("divHoverSrcRight");
    divHoverSrcRight.appendChild(divHoverItemRight);
    divHoverItemRight.classList.add("divHoverItemRight");
    divHoverItemRight.appendChild(divHoverItemRightSquare);
    divHoverItemRightSquare.classList.add("divHoverItemRightSquare");
    // divHoverTitleName.innerHTML = " ";

    divHover.appendChild(divHoverTitleName);
    // divHoverTitleName.classList.add("divHoverTitleName");
    divHoverTitleName.innerHTML = "creative design";

    divHover.appendChild(divHoverSpan);
    // divHoverSpan.classList.add("divHoverSpan");
    divHoverSpan.innerHTML = "Web Design";
    
    
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
let firstImgSorted = allImgArray.sort();

createImg(firstImgSorted);
// checkBtnLoad(true);

tabsListWork.forEach(el => {
  el.addEventListener("click", (ev) => {

  let tabNavAttr = ev.target.getAttribute("data-typeWork");
	let del = document.querySelectorAll(".tabsImg-all .tabsImgList");

	// removing class activeWork from active tab
	document.querySelector(".tabs-list.activeWork").classList.remove("activeWork");
	// adding ativeWork class to current tab
	ev.target.classList.add("activeWork");

	if(tabNavAttr === 'all'){
    createImg(firstImgSorted);
    document.querySelector("#workImgLoad").classList.add("activeLoad");
    return;
    
    // checkBtnLoad(true);
  }
  


	// Удаляем класс activeWork с картинок	
    del.forEach(el => {
      if (el.classList.contains("activeWork")) {
        el.classList.remove("activeWork");
      }
    })
  // Отфильтровали массив allImg по tabNavAttr
	let addResult = filterAdd(allImg, tabNavAttr);

	// check if for some reason button "load more" is hidden
	// checkBtnLoad();
	
	// rerender view
	createImg(addResult);
  document.querySelector("#workImgLoad").classList.remove("activeLoad");
	

    // console.log(ev.target);
  })
}); 


   
workImgLoad.addEventListener("click", () => {

	// grab current images and coumt starting pointr of new array 
	let currentImgs = document.querySelectorAll(".tabsImg-all .tabsImgList.activeWork").length;
	console.log(currentImgs);
	// check if current length not bigger than original array of imgs lenght 
	// if true hide button 
	if(currentImgs >= allImg.length - 12) {
		workImgLoad.style.display = "none";
	}

	// create new piece of array and print it 
	let newImgs = allImg.slice(currentImgs, currentImgs + 12);

	createImg(newImgs);
})


//////////////// End Our Amazing Work




/**************************\
  Start SLIDER
\**************************/   

const sliderBtnPrev = document.querySelector("#slider-btn_prev");
const sliderBtnNext = document.querySelector("#slider-btn_next");
const persons = document.querySelectorAll(".person-info_item");
const slider = document.querySelector(".slider-wrapper");
const sliderItem = document.querySelectorAll(".slider-item");

let count = 0;
let countImage = document.querySelector(".slider-active");


slider.addEventListener("click", (ev) => {
  /// Удаляем класс slider-active
  sliderItem.forEach(item => {
    if(item.classList.contains("slider-active")) {
      item.classList.remove("slider-active")
    }
  })
  /// Добовляем класс slider-active
  ev.target.closest("li").classList.add("slider-active");

  persons.forEach((el, index) => {
    if(ev.target.closest("li").dataset.name === el.dataset.name) {
      el.classList.add("is-active");
      count = index;
    } else {
      el.classList.remove("is-active");
    }
  })
});


sliderBtnNext.addEventListener("click", function() {
  persons[count].classList.remove("is-active");
  sliderItem[count].classList.remove("slider-active");
  count++;
  if (count === sliderItem.length) {
    count = 0;
  }
  sliderItem[count].classList.add("slider-active");
  persons[count].classList.add("is-active");
})

sliderBtnPrev.addEventListener("click", function() {
  persons[count].classList.remove("is-active");
  sliderItem[count].classList.remove("slider-active");
  count--;
  if (count < 0) {
    count = 3;
  }
  sliderItem[count].classList.add("slider-active");
  persons[count].classList.add("is-active");
})


//////    END SLIDER



/**************************\
  Start SLIDER
\**************************/ 


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