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
  const buttonType = e.target.textContent;
  if(buttonType === 'Home'){
    homePage();
  } else if (buttonType === 'Menu'){
    menuPage();
  } else{
    aboutPage();
  }

  navButtons.forEach(button => button.classList.remove('active'))
  e.target.classList.add('active')

}



