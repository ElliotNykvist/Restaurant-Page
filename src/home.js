function createHome() {
  window.scrollTo(0, 0); // Scroll to the top of the page

  const section = document.createElement('section');
  section.setAttribute('id', 'pageLoadContainer');

  // Intro Section
  const intro = document.createElement('section');
  intro.classList.add('intro');

  const introBackground = document.createElement('div');
  introBackground.classList.add('intro-background');

  const introContent = document.createElement('div');
  introContent.classList.add('intro-content');
  const firstTitle = document.createElement('h2');
  firstTitle.textContent = ("Luke's Pizza");
  const subTitle = document.createElement('h4');
  subTitle.textContent = ("Pizza at its best");
  const resyBtn = document.createElement('button');
  resyBtn.textContent = ("Reservation");
  resyBtn.classList.add('resy');

  introContent.appendChild(firstTitle);
  introContent.appendChild(subTitle);
  introContent.appendChild(resyBtn);

  introBackground.appendChild(introContent);
  intro.appendChild(introBackground);
  

  section.appendChild(intro);

  // About Section
  const about = document.createElement('section');
  about.classList.add('about');

  const title = document.createElement('div');
  title.textContent = ("Luke's Pizza");

  const information = document.createElement('p');
  information.classList.add('information');
  information.textContent = ("Luke's Pizza, a family-driven establishment since 2020, brings the essence of true Italian pizza to life, offering a genuine taste of Italy in every delightful bite. With generations-old recipes and a warm, inviting atmosphere, it's a place where food and family traditions intertwine to create a memorable dining experience.")

  const secondSubTitle = document.createElement('a');
  secondSubTitle.textContent = ("Menu");
  secondSubTitle.setAttribute('id', 'menuCenter');
  secondSubTitle.setAttribute('href', '#');

  about.appendChild(title);
  about.appendChild(information);
  about.appendChild(secondSubTitle);

  section.appendChild(about);

  // Contacts Section
  const contacts = document.createElement('section');
  contacts.classList.add('contact');

  // Address
  const address = document.createElement('div');
  address.classList.add('address');
  const addressIcon = document.createElement('i');
  addressIcon.classList.add('fa-solid', 'fa-location-dot');
  addressIcon.setAttribute('id', 'contact-icon');
  const addressTitle = document.createElement('div');
  addressTitle.textContent = ("Address");
  const addressContent = document.createElement('p');
  addressContent.textContent = (`123 Serendipity Street \r\n Wonderland City \r\n Enchanted Forest`);

  address.appendChild(addressIcon);
  address.appendChild(addressTitle);
  address.appendChild(addressContent);

  // Hours
  const hours = document.createElement('div');
  hours.classList.add('hours');
  const hoursIcon = document.createElement('i');
  hoursIcon.classList.add('fa-solid', 'fa-clock');
  hoursIcon.setAttribute('id', 'contact-icon');
  const hoursTitle = document.createElement('div');
  hoursTitle.textContent = ("Hours");
  const hoursContent = document.createElement('p');
  hoursContent.textContent = (`Monday-Thursday \r\n 11:00 am - 09:00 pm \r\n \r\n Friday-Sunday \r\n 10:00 am - 11:00 pm`);

  hours.appendChild(hoursIcon);
  hours.appendChild(hoursTitle);
  hours.appendChild(hoursContent);

  // Contact Information
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');
  const contactIcon = document.createElement('i');
  contactIcon.classList.add('fa-solid', 'fa-phone');
  contactIcon.setAttribute('id', 'contact-icon')
  const contactTitle = document.createElement('div');
  contactTitle.textContent = ("Contact");
  const contactContent = document.createElement('p');
  contactContent.textContent = (`Phone: 555-555-5555 \r\n Email: lukespizza@gmail.com`);

  contactInfo.appendChild(contactIcon);
  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(contactContent);

  contacts.appendChild(address);
  contacts.appendChild(hours);
  contacts.appendChild(contactInfo);

  section.appendChild(contacts);

  return section;
}

export default createHome;
