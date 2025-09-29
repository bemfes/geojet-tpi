const lineLeftHorizontalPlus = document.querySelector('.abt-pluses-sec__line-x_left_desctop');
const lineRightHorizontalPlus = document.querySelector('.abt-pluses-sec__line-x_right_desctop');
const itemsPlusLeft = document.querySelectorAll('.abt-pluses-sec__item_left');
const itemsPlusRight = document.querySelectorAll('.abt-pluses-sec__item_right');

if (itemsPlusLeft) {
    itemsPlusLeft.forEach(item => {
        item.addEventListener('mouseenter', () => {
            lineLeftHorizontalPlus.classList.add('abt-pluses-sec__line-x_hovered-left')
        })
        item.addEventListener('mouseleave', () => {
            lineLeftHorizontalPlus.classList.remove('abt-pluses-sec__line-x_hovered-left')
        })
    })
}
if (itemsPlusRight) {
    itemsPlusRight.forEach(item => {
        item.addEventListener('mouseenter', () => {
            lineRightHorizontalPlus.classList.add('abt-pluses-sec__line-x_hovered')
        })
        item.addEventListener('mouseleave', () => {
            lineRightHorizontalPlus.classList.remove('abt-pluses-sec__line-x_hovered')
        })
    })
}

const textPrepositions = document.querySelectorAll('.without-prepositions');
if (textPrepositions)
    console.log(2);
    textPrepositions.forEach(text => {

        text.innerHTML = text.innerHTML.replace(/\sк\s|\sи\s|для\s|\sв\s|\sоб\s|\sиз\s|\sдо\s|\sза\s|\sна\s|\sбез\s|\sпри\s|\sот\s|\sс\s|\sо\s|\sпо\s|\sкак\s|\sчтобы\s|\sтак\s|\sа\s|\sне\s|\sпод\s|\sвне\s|\sчто\s|\sгде\s/gi, '$&&nbsp;')
        // text.innerHTML = text.innerHTML.replace(/\sРє\s|\sРё\s|РґР»СЏ\s|\sРІ\s|\sРѕР±\s|\sРёР·\s|\sРґРѕ\s|\sР·Р°\s|\sРЅР°\s|\sР±РµР·\s|\sРїСЂРё\s|\sРѕС‚\s|\sСЃ\s|\sРѕ\s|\sРїРѕ\s|\sРєР°Рє\s|\sС‡С‚РѕР±С‹\s|\sС‚Р°Рє\s|\sР°\s|\sРЅРµ\s|\sРїРѕРґ\s|\sРІРЅРµ\s|\sС‡С‚Рѕ\s|\sРіРґРµ\s/gi, '$&&nbsp;')
        text.innerHTML = text.innerHTML.replaceAll(' &nbsp;', '&nbsp;')
})

const vedartSlider = document.querySelector('.vedart-cases__slider');
if (vedartSlider) {
    const swiper = new Swiper(vedartSlider, {
        // slidesPerView: 3,
        
        // spaceBetween: 30,
        loop: true,
        navigation: {
        nextEl: '.vedart-cases__slider-btn-next',
        prevEl: '.vedart-cases__slider-btn-prev',
        },
        breakpoints: {
    
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 35,
      centeredSlides: true,
    },
    1199: {
    slidesPerView: 2,
      spaceBetween: 55,
      centeredSlides: true,
    }
  }
    })
}

const complexMethodBoxFirst = document.querySelector('.complex-methods__item-text-box-first');

if (complexMethodBoxFirst) {
        const text = complexMethodBoxFirst.querySelector('.complex-methods__item-text')
        complexMethodBoxFirst.style.maxHeight = text.scrollHeight + 40 + 'px'
}

// window.addEventListener('resize', () => {
//     if (complexMethodBoxFirst) {
//         const text = complexMethodBoxFirst.querySelector('.complex-methods__item-text')
//         complexMethodBoxFirst.style.maxHeight = text.scrollHeight + 40 + 'px'
//     }
    
// })

const complexMethodsBtn = document.querySelectorAll('.complex-methods__item-btn');

if (complexMethodsBtn) {
    complexMethodsBtn.forEach(btn => {
        const btnParent = btn.parentElement
        const text = btnParent.querySelector('.complex-methods__item-text-box')
        const textBox = btnParent.querySelector('.complex-methods__item-text-box')
        console.log(text);
        btn.addEventListener('click', () => {
            
            if (text.style.maxHeight ) {
                text.style.maxHeight = null
                btn.classList.remove('complex-methods__item-btn_open')
                btnParent.classList.remove('complex-methods__item_auto-height')
            } else {
                text.style.maxHeight = text.scrollHeight + 'px'
                btn.classList.add('complex-methods__item-btn_open')
                btnParent.classList.add('complex-methods__item_auto-height')
            }
        })
    })
}

const vedartJobBtn = document.querySelector('.vedart-job-sec__btn');
const vedartJobList = document.querySelector('.vedart-job-sec__list');

if (vedartJobBtn) {
    vedartJobBtn.addEventListener('click', () => {
        if (vedartJobList.style.maxHeight) {
            vedartJobList.style.maxHeight = null
            vedartJobBtn.classList.remove('vedart-job-sec__btn_open')
        } else {
            vedartJobList.style.maxHeight = vedartJobList.scrollHeight + 'px'
            vedartJobBtn.classList.add('vedart-job-sec__btn_open')
        }
    })
}



