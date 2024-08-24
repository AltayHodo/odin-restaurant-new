export default function homePage() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  const homeContent = document.createElement('div');
  homeContent.textContent =
    'Welcome to my restaurant, which has the best Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit.';
  content.appendChild(homeContent);
}
