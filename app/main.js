//////////////////////////////
// header

const header = document.querySelector('#header')
const setHeaderPosition = () => {
    if (window.scrollY > 0) {
        header.classList.add('sticky-header')
        document.body.style.marginTop = header.offsetHeight + 'px'
    } else {
        header.classList.remove('sticky-header')
        document.body.style.marginTop = 0 + 'px'
    }
}
window.addEventListener('scroll', setHeaderPosition)


///////////////////////////////
// red data dinamically
let products = [{
        id: 1,
        name: `XX99 MARKT || HEADPHONES`,
        image: '../images/Headphone-848x1030.png',
        desc: `The new XX99 Mark || headphone is the pinnacie of pristine audio. 
    It reddefines your permium heaphone experience by reproducing the balanced 
    depth and precision of studio-quality sound.`,
        price: 2.999
    },
    {
        id: 2,
        name: `JBL59`,
        image: '../images/headphone-jbl.jpg',
        desc: `The new JBL59 Mark || headphone is the pinnacie of pristine audio. 
    It reddefines your permium heaphone experience by reproducing the balanced 
    depth and precision of studio-quality sound.`,
        price: 1.999
    },
    {
        id: 3,
        name: `ZX9 SPEAKER`,
        image: '../images/speaker.jpg',
        desc: `The new JBL59 Mark || headphone is the pinnacie of pristine audio. 
    It reddefines your permium heaphone experience by reproducing the balanced 
    depth and precision of studio-quality sound.`,
        price: 599
    },
    {
        id: 4,
        name: `earphone`,
        image: '../images/earphone.jpg',
        desc: `The new JBL59 Mark || headphone is the pinnacie of pristine audio. 
    It reddefines your permium heaphone experience by reproducing the balanced 
    depth and precision of studio-quality sound.`,
        price: 600
    },
    {
        id: 5,
        name: `KAROL-D EDITION`,
        image: '../images/earphone.jpg',
        desc: `The new JBL59 Mark || headphone is the pinnacie of pristine audio. 
    It reddefines your permium heaphone experience by reproducing the balanced 
    depth and precision of studio-quality sound.`,
        price: 2000
    },
    {
        id: 6,
        name: `headphone`,
        image: '../images/earphone.jpg',
        desc: `The new JBL59 Mark || headphone is the pinnacie of pristine audio. 
    It reddefines your permium heaphone experience by reproducing the balanced 
    depth and precision of studio-quality sound.`,
        price: 2000
    },
    {
        id: 7,
        name: `kyra-b-w speaker`,
        image: "./images/KYRA-B-W.png",
        desc: `upgrade to premium speakers that are phenomenally built to delever truly remarkable sound.`,
        price: 5000
    },
    {
        id: 8,
        name: `adam-a7x speaker`,
        image: "./images/adam-audio-a7x.jpg",
        desc: `upgrade to premium speakers that are phenomenally built to delever truly remarkable sound.`,
        price: 5000
    },
    {
        id: 9,
        name: `merch crest edition wireless headphone`,
        image: "./images/Merch-Crest-Edition-Wireless-Headphones-2000px-2.png",
        desc: `upgrade to premium speakers that are phenomenally built to delever truly remarkable sound.`,
        price: 5000
    }
]

const kyraEl = document.getElementById('kyra-main')
const adamEl = document.getElementById('adam-main')
const merchEl = document.getElementById('merch-main')
kyraEl.innerHTML = ''
adamEl.innerHTML = ''
merchEl.innerHTML = ''

const kyraSpeaker = () => {
    kyraEl.innerHTML = `
                    <div class="img-cover">
                        <img src="${products[6].image}" alt="${products[6].name}">
                        <div class="shadow-1"></div>
                        <div class="shadow-2"></div> 
                        <!-- start waves -->
                        <div class="wave-1"></div>
                        <div class="wave-2"></div>
                        <div class="wave-3"></div>
                        <!-- end waves -->
                    </div>
                    <div class="content">
                        <h1 class="title">${products[6].name}</h1>
                        <p>${products[6].desc}</p>
                        <a href="#" class="btn main-btn">see product <i class="fas fa-chevron-right"></i></a>
                    </div>`
}

const adamSpeaker = () => {
    adamEl.innerHTML = `
                    <div class="content">
                        <h1 class="title">${products[7].name}</h1>
                        <a href="#" class="btn">see product <i class="fas fa-chevron-right"></i></a>
                    </div>
                    <div class="img-cover">
                        <img src="${products[7].image}" alt="${products[7].name}">
                    </div>`
}

const merchHeadphone = () => {
    merchEl.innerHTML = `
                <div class="img-cover">
                    <img src="${products[8].image}"
                        alt="${products[8].name}">
                </div>
                <div class="content">
                    <h1 class="title">${products[8].name}</h1>
                    <a href="#" class="btn">see product <i class="fas fa-chevron-right"></i></a>
                </div>`
}

window.addEventListener('DOMContentLoaded', () => {
    kyraSpeaker()
    adamSpeaker()
    merchHeadphone()
})