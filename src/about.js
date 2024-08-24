export default function aboutPage() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  const aboutContent = document.createElement('div');
  aboutContent.textContent = 'About';
  content.appendChild(aboutContent);
}