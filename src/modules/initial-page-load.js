function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.setAttribute('id', 'header');
    
    const scroll = document.createElement('div');
    scroll.classList.add('scroll-trigger');

    header.appendChild(createResyBtn());
    header.appendChild(createNav());
    header.appendChild(scroll);
    
    return header;
}

function createResyBtn() {
    const resyBtn = document.createElement('button');
    resyBtn.textContent = 'Reservation';
    resyBtn.classList.add('resy');

    return resyBtn;
}

function createNav() {
    const nav = document.createElement('div');
    nav.classList.add('nav');

    // left-nav
    const leftHeader = document.createElement('div');
    leftHeader.classList.add('left-header');

    const logo = document.createElement('i');
    logo.classList.add('fas', 'fa-pizza-slice'); // Correct class name
    logo.setAttribute('id', 'logo');

    const logoText = document.createElement('h2');
    logoText.textContent = "Luke's Pizza";
    logoText.classList.add('logo-text');

    leftHeader.appendChild(logo);
    leftHeader.appendChild(logoText);

    nav.appendChild(leftHeader);

    // center-nav
    const navigation = document.createElement('nav');

    const list = document.createElement('ul');

    const homeList = document.createElement('li');
    homeList.textContent = 'Home';
    homeList.classList.add('active');

    const menuList = document.createElement('li');
    menuList.textContent = 'Menu';
    menuList.classList.add('not-active');

    const contactList = document.createElement('li');
    contactList.textContent = 'Contact';
    contactList.classList.add('not-active');

    list.appendChild(homeList);
    list.appendChild(menuList);
    list.appendChild(contactList);

    navigation.appendChild(list);

    nav.appendChild(navigation);

    // right-nav
    const rightHeader = document.createElement('div');
    rightHeader.classList.add('right-header');

    const facebookLogo = document.createElement('i');
    facebookLogo.classList.add('fab', 'fa-facebook-square'); // Correct class name
    facebookLogo.setAttribute('id', 'facebook');

    const instagramLogo = document.createElement('i');
    instagramLogo.classList.add('fab', 'fa-instagram'); // Correct class name
    instagramLogo.setAttribute('id', 'instagram');

    rightHeader.appendChild(facebookLogo);
    rightHeader.appendChild(instagramLogo);

    nav.appendChild(rightHeader);

    return nav;
}

function loadPage() {
    const content = document.getElementById('content');
    const header = createHeader();
    content.appendChild(header);
    
    window.addEventListener("scroll", function() {
        var scrollTrigger = document.querySelector(".scroll-trigger");
        var nav = document.querySelector(".nav");

        if (window.scrollY > scrollTrigger.offsetTop) {
            nav.classList.add("scrolled-nav");
        } else {
            nav.classList.remove("scrolled-nav");
        }
    });
}

export default loadPage;
