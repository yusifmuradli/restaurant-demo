const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.getElementById("search-btn");
const cartBtn = document.getElementById("cart-btn");
const menuBtn = document.getElementById("menu-btn")



searchBtn.addEventListener("click",()=>{
    searchForm.classList.toggle("active");
    document.addEventListener("click", (e)=>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)){
            searchForm.classList.remove("active");
        }
    })
})

cartBtn.addEventListener("click",()=>{
    cartItem.classList.toggle("active");
    document.addEventListener("click", (e)=>{
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem)){
            cartItem.classList.remove("active");
        }
    })
})
menuBtn.addEventListener("click",()=>{
    navbar.classList.toggle("active");
    document.addEventListener("click", (e)=>{
        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)){
            navbar.classList.remove("active");
        }
    })
})


//! links

const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const menuLink = document.getElementById("menu-link");
const productsLink = document.getElementById("products-link");
const reviewLink = document.getElementById("review-link");
const contactLink = document.getElementById("contact-link");
const blogsLink = document.getElementById("blogs-link");

homeLink.addEventListener("click", ()=>{
    homeLink.classList.add("active");
    document.addEventListener("click",(e)=>{
        if(
            e.composedPath().includes(aboutLink) ||
            e.composedPath().includes(menuLink) ||
            e.composedPath().includes(productsLink) ||
            e.composedPath().includes(reviewLink) ||
            e.composedPath().includes(contactLink) ||
            e.composedPath().includes(blogsLink) 
            ){
            homeLink.classList.remove("active");
        }
    })
})
aboutLink.addEventListener("click", ()=>{
    aboutLink.classList.add("active");
    document.addEventListener("click",(e)=>{
        if(
        e.composedPath().includes(homeLink) ||
        e.composedPath().includes(menuLink) ||
        e.composedPath().includes(productsLink) ||
        e.composedPath().includes(reviewLink) ||
        e.composedPath().includes(contactLink) ||
        e.composedPath().includes(blogsLink) 
        ){
            aboutLink.classList.remove("active");
        }
    })
})
menuLink.addEventListener("click", ()=>{
    menuLink.classList.add("active");
    document.addEventListener("click",(e)=>{
        if(
            e.composedPath().includes(homeLink) ||
            e.composedPath().includes(aboutLink) ||
            e.composedPath().includes(productsLink) ||
            e.composedPath().includes(reviewLink) ||
            e.composedPath().includes(contactLink) ||
            e.composedPath().includes(blogsLink) 
            ){
            menuLink.classList.remove("active");
        }
    })
})
productsLink.addEventListener("click", ()=>{
    productsLink.classList.add("active");
    document.addEventListener("click",(e)=>{
        if(
            e.composedPath().includes(homeLink) ||
            e.composedPath().includes(aboutLink) ||
            e.composedPath().includes(menuLink) ||
            e.composedPath().includes(reviewLink) ||
            e.composedPath().includes(contactLink) ||
            e.composedPath().includes(blogsLink) 
            ){
            productsLink.classList.remove("active");
        }
    })
})
reviewLink.addEventListener("click", ()=>{
    reviewLink.classList.add("active");
    document.addEventListener("click",(e)=>{
        if(
            e.composedPath().includes(homeLink) ||
            e.composedPath().includes(aboutLink) ||
            e.composedPath().includes(productsLink) ||
            e.composedPath().includes(aboutLink) ||
            e.composedPath().includes(contactLink) ||
            e.composedPath().includes(blogsLink) 
            ){
            reviewLink.classList.remove("active");
        }
    })
})
contactLink.addEventListener("click", ()=>{
    contactLink.classList.add("active");
    document.addEventListener("click",(e)=>{
        if(
            e.composedPath().includes(homeLink) ||
            e.composedPath().includes(aboutLink) ||
            e.composedPath().includes(productsLink) ||
            e.composedPath().includes(reviewLink) ||
            e.composedPath().includes(aboutLink) ||
            e.composedPath().includes(blogsLink) 
            ){
            contactLink.classList.remove("active");
        }
    })
})
blogsLink.addEventListener("click", ()=>{
    blogsLink.classList.add("active");
    document.addEventListener("click",(e)=>{
        if(
            e.composedPath().includes(homeLink) ||
            e.composedPath().includes(aboutLink) ||
            e.composedPath().includes(productsLink) ||
            e.composedPath().includes(reviewLink) ||
            e.composedPath().includes(contactLink) ||
            e.composedPath().includes(aboutLink) 
            ){
            blogsLink.classList.remove("active");
        }
    })
})

