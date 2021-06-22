const first = document.getElementById('firstImg')
const second = document.getElementById('secondImg')
const allImgs = document.getElementsByClassName(".projectsImg")
 const imges = document.getElementsByTagName('img')
const hide = document.querySelector('.hide')

const projectsImges = Array.from(imges).slice(8,14)
console.log(projectsImges)

projectsImges.forEach(img => {
  img.addEventListener('mouseover', () => {
    if (img.id == "firstImg") {
    
      
      hide.style.opacity = "1";
      hide.innerText = "After Hours Weeknd"
    } if (img.id == "secondImg") {
      hide.style.opacity = "1";
      hide.innerText = "Drake Take Care"
    }
    if (img.id == "thirdImg") {
      hide.style.opacity = "1";
      hide.innerText = "Eminem Recovery"
    }
    if (img.id == "fourthImg") {
      hide.style.opacity = "1";
      hide.innerText = "Kygo Cloud Nine"
     
    }
    if (img.id == "fifthImg") {
      hide.style.opacity = "1";
      hide.innerText = "True Avicii by Avicii"
      
    }
    if (img.id == "sixthImg") {
      hide.style.opacity = "1";
      hide.innerText = "Drake Views"
    
    }setTimeout(function () {
      hide.style.opacity = "0";
    }, 5000);
  })
});

const darkBtn = document.querySelector('.darkBtn')
const body = document.querySelector('.body')
const navContainer = document.querySelector('.nav-container')
const span = document.querySelector('.darkBtnSpan')
const faSun = document.querySelector('.fa-sun-o')
const faMoon = document.querySelector('.fa-moon-o')
console.log(body)
darkBtn.addEventListener('click', toggleDarkMode)
function toggleDarkMode() {
  darkBtn.appendChild(span)
  if (darkBtn.classList.contains("dark")) {
    document.body.style.backgroundColor = "#4d4d51"
    document.body.style.color = "white"
    navContainer.style.backgroundColor = "#4d4d51"
    // darkBtn.innerText = "Light"
    faMoon.style.opacity = "0"
    faSun.style.opacity = "1"
    darkBtn.classList.remove("dark")
    darkBtn.classList.add("light")
    darkBtn.appendChild(span)
    span.style.transform = "translate(40px ,0px)"
    // span.style.transform = "translateY(-15px)"
    // darkBtn.appendChild(span)
  } else {
    
    // darkBtn.innerText = "dark"
    faMoon.style.opacity = "1"
    faSun.style.opacity = "0"
    document.body.style.backgroundColor = "white"
    document.body.style.color = "#3993DD"
    navContainer.style.backgroundColor = "white"
        darkBtn.classList.add("dark")
    darkBtn.classList.remove("light")
    // darkBtn.appendChild(span)
    darkBtn.appendChild(span)
    span.style.transform = "translate(0px ,0px)"
    span.style.transition = "all 1s"
   
    
    
  }
  
}

