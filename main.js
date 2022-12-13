//change navbar styles on scrolling

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0);
})


//show/hide faq asnwer

const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');

            //change icon
            const icon = faq.querySelector('.faq__icon i');
            if (icon.className === 'uil uil-plus') {
                icon.className = 'uil uil-minus';
            }else {
                icon.className = 'uil uil-plus';
            }
        })
    })

//show/hide navbar on click
const menu =document.querySelector('.nav__menu');
const menuBtn=document.querySelector('#open-menu');
const closeBtn=document.querySelector('#close-menu');

menuBtn.addEventListener('click', () => {
    menu.style.display ="flex";
    closeBtn.style.display ="inline-block";
    menuBtn.style.display ="none";
})


//close navbar on click
// closeBtn.addEventListener('click', () => {
//     menu.style.display ="none";
//     closeBtn.style.display ="none";
//     menuBtn.style.display ="inline-block";
// })
const closeNav =() => {
    menu.style.display ="none";
    closeBtn.style.display ="none";
    menuBtn.style.display ="inline-block";
}

closeBtn.addEventListener('click', closeNav);


// ultimo slide

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      //when window width is >=600px
    breakpoints: {
        600:{
            slidesPerView: 2,
        }
    }

  });


  // 2do slide

  var swiper = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


