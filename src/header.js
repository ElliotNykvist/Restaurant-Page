function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const leftHeader = document.createElement('div');
  leftHeader.classList.add('left-header');

  const logoText = document.createElement('h1');
  logoText.classList.add('logo-text');
  logoText.textContent = "Luke's Pizza";

  leftHeader.appendChild(logoText);

  header.appendChild(leftHeader);


  const rightHeader = document.createElement('div')
  rightHeader.classList.add('right-header');

  const buttons = document.createElement('ul');
  buttons.classList.add('buttons');

  const homeBtn = document.createElement('li')
  homeBtn.setAttribute('id', 'home')
  homeBtn.setAttribute('id', 'not-active')
  homeBtn.classList.add('tab');
  homeBtn.textContent = 'Home';

  const menuBtn = document.createElement('li')
  menuBtn.setAttribute('id', 'menu')
  menuBtn.setAttribute('id', 'not-active')
  menuBtn.classList.add('tab');
  menuBtn.textContent = 'Menu';

  const contactBtn = document.createElement('li')
  contactBtn.setAttribute('id', 'contact')
  contactBtn.setAttribute('id', 'not-active')
  contactBtn.classList.add('tab');
  contactBtn.textContent = 'Contact';

  buttons.appendChild(homeBtn);
  buttons.appendChild(menuBtn);
  buttons.appendChild(contactBtn);

  rightHeader.appendChild(buttons);

  const social = document.createElement('div');
  social.classList.add('social');

  const facebook = document.createElement('i');
  facebook.setAttribute('id', 'facebook');
  facebook.classList.add('fab', 'fa-facebook-square'); // Use 'fab' for brand icons

  const instagram = document.createElement('i');
  instagram.setAttribute('id', 'instagram');
  instagram.classList.add('fab', 'fa-instagram'); // Use 'fab' for brand icons

  social.appendChild(facebook);
  social.appendChild(instagram);

  rightHeader.appendChild(social)

  header.appendChild(rightHeader);

  return header;
}

export default createHeader;