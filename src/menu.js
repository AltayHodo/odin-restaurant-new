export default function menuPage() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  const menuContent = document.createElement('div');
  menuContent.textContent = 'Menu';
  const list = document.createElement('ul');
  list.classList.add('menu-list')
  list.innerHTML = `
    <li>Food item 1</li>
    <li>pizza</li>
    <li>milkshake</li>
    <li>fries</li>
  `;

  menuContent.appendChild(list);
  content.appendChild(menuContent);
}
