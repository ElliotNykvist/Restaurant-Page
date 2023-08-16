function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    
    const resyBtn = document.createElement('button');
    resyBtn.classList.add('resy');

    const nav = document.createElement('div');
    nav.classList.add('nav');

    const scroll = document.createElement('div');
    scroll.classList.add('scroll-trigger');

    header.appendChild(resyBtn());
    header.appendChild(createNav());
    header.appendChild(scroll());
    
    return header;
}

function createResyBtn() {
    const resyBtn = document.createElement('button');
    resyBtn.classList.add('resy');

};

function createNav() {
    const nav = document.createElement('div');
    nav.classList.add('nav');

    // left-nav

    const leftHeader = document.createElement('div');
    leftHeader.classList.add('left-header');

    const logo = document.createElement('i');
    logo.classList.add('fa-solid fa-pizza-slice');
    logo.setAttribute('id', 'logo');

    const logoText = document.createElement('h2');
    logoText.textContent = ("Luke's Pizza");
    logoText.classList.add('logo-text');

    leftHeader.appendChild('logo');
    leftHeader.appendChild('logoText ')

    nav.appendChild('leftHeader');

    // center-nav

    const navigation = document.createElement('nav');

    const list = document.createElement('ul');

    const homeList = document.createElement('li')
    homeList.textContent = ('Home');
    homeList.classList.add('active')

    const menuList = document.createElement('li')
    menuList.textContent = ('Menu');
    menuList.classList.add('not-active');

    const contactList = document.createElement('li')
    contactList.textContent = ('Contact');
    contactList.classList.add('not-active');


    list.appendChild('homeList');
    list.appendChild('menuList');
    list.appendChild('contactList');

    navigation.apppendChild('list');

    nav.appendChild('navigation');




    // right-nav

    const rightHeader = document.createElement('div');
    rightHeader.classList.add('right-header');

    const facebookLogo = document.createElement('i');
    facebookLogo.classList.add('fa-brands fa-square-facebook');
    facebookLogo.setAttribute('id', 'facebook');

    const instagramLogo = document.createElement('i');
    instagramLogo.classList.add('fa-brands fa-instagram');
    instagramLogo.setAttribute('id', 'instagram')

    rightHeader.appendChild(facebookLogo);
    rightHeader.appendChild(instagramLogo);

    nav.appendChild('rightHeader');




};