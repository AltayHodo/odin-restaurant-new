import './style.css'
import menuPage from "./menu";
import homePage from "./home";
import aboutPage from "./about";

window.onload = () => {
  homePage();
}

const homeButton = document.querySelector('.home-btn');
homeButton.addEventListener('click', () => {
  homePage();
})

const menuButton = document.querySelector('.menu-btn');
menuButton.addEventListener('click', () => {
  menuPage();
})

const aboutButton = document.querySelector('.about-btn');
aboutButton.addEventListener('click', () => {
  aboutPage();
})