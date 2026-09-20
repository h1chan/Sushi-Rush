/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('scroll-header') 
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER MENU ===============*/ 
const swiperTabs = new Swiper('.menu__tabs', {
   slidesPerView: 'auto'
})

const SwiperMenu = new Swiper('.menu__content', {
   loop: true,
   thumbs: {
      swiper: swiperTabs,
   }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   // add the .scroll-header class if the bottom scroll of the viewport is greater than 350
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                                   : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
   // We get the position by scrolling down
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id, // id of each section
            top = section.offsetTop - 50, // Distance from the top edge
            height = section.offsetHeight, // Element height
            link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'bottom',
   distance: '60px',
   duration: 1500,
   delay:300,
   easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
   // reset: true,
})

sr.reveal(`.home__title`, {origin: 'top'})
sr.reveal(`.home__description`, {delay: 600, origin: 'top'})
sr.reveal(`.home__data .button`, {delay: 900, distance: 0, scale: 0, origin: 'top'})
sr.reveal(`.home__blob`, {delay: 900, distance: '100px'})
sr.reveal(`.home__images img`, {delay: 1200, distance: 0, interval: 200, scale: 0})
sr.reveal(`.home__data img`, {delay: 1500, distance: 0, interval: 200, scale: 0})
sr.reveal(`.home__text`, {delay: 2100, distance: '120px'})

sr.reveal(`.about__data .section__title`)
sr.reveal(`.about__data .section__subtitle`, {delay: 600})
sr.reveal(`.about__description`, {delay: 900})
sr.reveal(`.about__data .button`, {delay: 1200, distance: 0, scale: 0})
sr.reveal(`.about__blob`, {delay: 1200, origin: 'left'})
sr.reveal(`.about__img`, {delay: 1500, origin: 'right'})
sr.reveal(`.about__data img`, {delay: 1800, distance: 0, interval: 200, scale: 0})
sr.reveal(`.about__text`, {delay: 2100})

sr.reveal(`.menu__button`, {interval: 100})
sr.reveal(`.menu__content`, {delay: 600})
sr.reveal(`.menu__text-1`, {delay: 900, origin: 'top'})
sr.reveal(`.menu__text-2`, {delay: 1200})

sr.reveal(`.new__data .section__title`)
sr.reveal(`.new__data .section__subtitle`, {delay: 600})
sr.reveal(`.new__description`, {delay: 900})
sr.reveal(`.new__blob`, {delay: 900, origin: 'right'})
sr.reveal(`.new__images img`, {delay: 1200, distance: 0, interval: 200, scale: 0})
sr.reveal(`.new__data img`, {delay: 1500, distance: 0, interval: 200, scale: 0})
sr.reveal(`.new__text-1`, {delay: 2100})
sr.reveal(`.new__text-2`, {delay: 2400})

sr.reveal(`.contact__data`, {interval: 100})
sr.reveal(`.contact__newsletter`, {delay: 600})
sr.reveal(`.contact__text-1`, {delay: 1200, origin: 'top'})
sr.reveal(`.contact__text-2`, {delay: 1500})

sr.reveal(`.footer__container`, {distance: '20px'})