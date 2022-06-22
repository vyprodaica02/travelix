
window.addEventListener('load',function(){


const headerTop = document.querySelector('.header-top');
const headerNav = document.querySelector(".header-nav");
const headerNavContainer = document.querySelector('.header-nav-container');
const searchInput = document.querySelector(".search-input");
const search = document.querySelector(".header-nav-search i");
const showBars = document.querySelector('.icon-bars_mb i');
const overlay = document.querySelector('.overlay')
const closeOverlay = document.querySelector(".header-mb-bar i");
const headerBar = document.querySelector('.header-mb-bar');

window.addEventListener('scroll',handleScroll);

function handleScroll(e){
    const scrollY = window.pageYOffset;
    if(scrollY >= 34){
       headerTop && headerTop.classList.add('hide');
       headerNav.classList.add('scroll');
       headerNavContainer.classList.add("p")
    } else{
       headerTop && headerTop.classList.remove('hide');
       headerNav.classList.remove('scroll');
       headerNavContainer.classList.remove("p")
       
    }
}


search.addEventListener("click",function(){
   searchInput.classList.toggle('show');
});

   showBars.addEventListener('click',()=>{
     headerBar.classList.add("show-mb-bar")
     overlay.classList.add('show')
   })

document.body.addEventListener('click',function(e){
   if(e.target === closeOverlay || e.target === overlay){
      headerBar.classList.remove("show-mb-bar");
       overlay.classList.remove('show');
   }
})

   const links = document.querySelectorAll('.header-nav-list li');
   links.forEach(item => item.addEventListener('mouseenter',heandleHoverLink))
   const line = this.document.createElement('div');
   line.className = 'line-effect';
   document.body.appendChild(line);

   function heandleHoverLink(e){
      const {left,top,width,height} = e.target.getBoundingClientRect();
      const offsetBottom = 5;
      console.log({left,top,width,height})
      line.style.width = `${width}px`;
      line.style.left = `${left}px`;
      line.style.top = `${top + height + offsetBottom}px`;
   }

   const menu = document.querySelector('.header-nav-list');
   menu.addEventListener("mouseleave",function(e){
      line.style.width = 0;
   })
})
