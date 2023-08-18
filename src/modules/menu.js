

function createSection() {
  const section = document.createElement("section");

  section.appendChild(leftSection);
  section.appendChild(rightSection);

  return section;
  
};

function leftSection() {

  const leftSection = document.createElement('div');
  leftSection.classList.add('left-section');

  leftSection.appendChild(info);
  
  const info = document.createElement('div');
  info.classList.add('info');

  const headerInfo = document.createElement('h1');
  headerInfo.classList.add('header-info');
  headerInfo.textContent("Luke's Pizza");

  info.appendChild(headerInfo);

  const information = document.createElement('p');
  information.classList.add('information');
  information.textContent("Luke's Pizza, a family-driven establishment since 2020, brings the essence of true Italian pizza to life, offering a genuine taste of Italy in every delightful bite. With generations-old recipes and a warm, inviting atmosphere, it's a place where food and family traditions intertwine to create a memorable dining experience.");

  info.appendChild(information);


  return leftSection

};

function rightSection() {

  const rightSection = document.createElement("div");
  rightSection.classList.add("right-section");

  rightSection.appendChild(hours);
  rightSection.appendChild(mon);
  rightSection.appendChild(monTime);
  rightSection.appendChild(fri);
  rightSection.appendChild(friTime);
  rightSection.appendChild(sun);
  rightSection.appendChild(sunTime);


  const openHours = document.createElement("div");
  openHours.classList.add("open");

  const hours = document.createElement('h1');
  hours.textContent("Hours");

  const mon = document.createElement('h4');
  mon.textContent("MON - THUR");

  const monTime = document.createElement('h5');
  monTime.textContent("17.00-23.00");

  const fri = document.createElement('h4');
  headerInfo.textContent("FRI - SAT");

  const friTime = document.createElement('h5');
  headerInfo.textContent("17.00-00.00");

  const sun = document.createElement('h4');
  headerInfo.textContent("SUN");

  const sunTime = document.createElement('h5');
  headerInfo.textContent("CLOSED");

};

function loadHome() {
  const content = document.getElementById('content');
  content.appendChild(createSection);

}

export default loadHome;
