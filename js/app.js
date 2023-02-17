// Category
var swiper = new Swiper(".category", {
  grabCursor: true,
  slidesPerView: 1.3,
  spaceBetween: 25,

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Best-seller
var swiper = new Swiper(".best-seller", {
  slidesPerView: 1.2,
  spaceBetween:25,
  loopFillGroupWithBlank: true,
  
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 
  breakpoints: {
  755: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween:33,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Brand-swiper
const brand = new Swiper(".brand", {
  slidesPerView: 2.5,
  spaceBetween: 25,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    755: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
    1280: {
      slidesPerView: 8,
    },
  },
});

// Room
var room = new Swiper(".room", {
  slidesPerView: 1.2,
  grabCursor: true,
  spaceBetween: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    755: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//   Reviews
const reviews = new Swiper('.reviews', {
  slidesPerView: 1.4,
  spaceBetween: 33,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      630: {
        slidesPerView: 2,
      },
      760: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50
      },
    }
});


// insights
const insights = new Swiper(".insights", {
  slidesPerView: 1.2,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
  755: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
    },
  },
});

const elMenuIcon = document.querySelector('#menu-icon');
const elMenuIconI = document.querySelector('#menu-icon i');
const elMobileMenu = document.querySelector('#mob-menu');

elMenuIcon.addEventListener('click', function() { 
  elMenuIconI.classList.toggle('fa-xmark');
  elMenuIconI.classList.toggle('fa-bars');
  elMobileMenu.classList.toggle('hidden')
  elMobileMenu.classList.toggle('block')
})

// filter 

let filter = document.querySelector("#filter");
let filterBtn  = document.querySelector("#filter-btn")
let filterBtnImg  = document.querySelector("#filter-btn img")
let bgFilter = document.querySelector("#bg-filter")
let winFilter  = document.querySelector('#product-filter')
let productCards = document.querySelector('#product-cards')
let productFilterContent = document.querySelectorAll('.product-filter-content')
let productFilteBtn = document.querySelectorAll('.product-filter-btn')
let productFilteBtnIcon = document.querySelectorAll('.product-filter-btn i')

filterBtn.addEventListener('click' , function(){
  filter.classList.remove("hidden")
  winFilter.classList.toggle("lg:block")
  // productCards.classList.toggle("lg:grid-cols-4")
  filterBtnImg.classList.toggle('rotate-180')
  productCards.classList.toggle("lg:col-span-3")
  productCards.classList.toggle("lg:col-span-4")
  productCards.classList.toggle("lg:grid-cols-3")
  productCards.classList.toggle("lg:grid-cols-4")
  
})

bgFilter.addEventListener('click' , function(){
  filter.classList.add("hidden")
  filterBtnImg.classList.toggle('rotate-180')
  document.body.classList.remove("overflow-hidden")
   
})

productFilteBtn.forEach((item , index)=>{
  item.addEventListener('click' , function(){
    productFilterContent[index].classList.toggle('hidden')
    productFilteBtnIcon[index].classList.toggle("fa-plus")
    productFilteBtnIcon[index].classList.toggle("fa-minus")
    console.log('salom');
  })
})

// tabs



