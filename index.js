let sunElem = document.querySelector('.sun')
let bodyElem = document.querySelector('body')
let picElem = document.querySelector('.profile-pic')


sunElem.addEventListener('click',function(){
    bodyElem.classList.toggle('dark-theme')
    if (bodyElem.classList.contains('dark-theme')){
        sunElem.src = 'images/moon.png'
    }
    else{
        sunElem.src = 'images/sun.png'
    }
})


