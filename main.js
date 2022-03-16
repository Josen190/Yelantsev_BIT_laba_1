let buttons = document.getElementsByClassName("button_gallery");
for (let i =0; i < buttons.length; i++){
    buttons[i].addEventListener("click", openGalleryFullScrean)
}

window.addEventListener("scroll", function(){
    let scroll = document.querySelector('.up_button');
    scroll.addEventListener('click', scrollToTop);
    scroll.classList.toggle("active", window.scrollY > 200)
    scroll.style.opacity = (window.scrollY - 200) / 1200;
});

function scrollToTop(){
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    })
}

function openGalleryFullScrean(){
    console.log(this.lastChild.previousSibling);
    const bg = document.createElement("div");
    bg.classList.add("view_full");
    const img = this.lastChild.previousSibling.cloneNode();
    bg.appendChild(img);
    bg.addEventListener("click", closeGalleryFullScrean);
    document.body.appendChild(bg);
    
}

function closeGalleryFullScrean(){
    document.body.removeChild(this);
}