import './style.css'
import menuPage from "./menu";
import homePage from "./home";
import aboutPage from "./about";

window.onload = () => {
  homePage();
}

const navButtons = document.querySelectorAll('nav > button');
navButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    updatePage(e)
  })
})

function updatePage(e){
  const button = e.target.textContent;
  if(button === 'Home'){
    homePage();
  } else if (button === 'Menu'){
    menuPage();
  } else{
    aboutPage();
  }
}



