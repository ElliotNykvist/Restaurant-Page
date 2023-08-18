function createHome() {
  const main = document.getElementById("main");
  main.appendChild(createSection());
  return main;
}

function createSection() {
  const section = document.createElement("section");

  section.appendChild(leftSection());
  section.appendChild(rightSection());

  return section;
  
};

function leftSection() {
  const leftSection = document.createElement('div');
  leftSection.classList.add('left-section');
  
  const info = document.createElement('div'); // Create 'info' before appending
  info.classList.add('info');
  
  const headerInfo = document.createElement('h1');
  headerInfo.classList.add('header-info');
  headerInfo.textContent = "Luke's Pizza";

  info.appendChild(headerInfo);

  const information = document.createElement('p');
  information.classList.add('information');
  information.textContent = "Luke's Pizza, a family-driven establishment since 2020, brings the essence of true Italian pizza to life, offering a genuine taste of Italy in every delightful bite. With generations-old recipes and a warm, inviting atmosphere, it's a place where food and family traditions intertwine to create a memorable dining experience.";

  info.appendChild(information);

  leftSection.appendChild(info);

  return leftSection;
}

function rightSection() {

  const rightSection = document.createElement("div");
  rightSection.classList.add("right-section");


  const openHours = document.createElement("div");
  openHours.classList.add("open");

  const hours = document.createElement('h1');
  hours.textContent = "Hours";

  const mon = document.createElement('h4');
  mon.textContent = "MON - THUR";

  const monTime = document.createElement('h5');
  monTime.textContent = "17.00-23.00";

  const fri = document.createElement('h4');
  fri.textContent = "FRI - SAT";

  const friTime = document.createElement('h5');
  friTime.textContent = "17.00-00.00";

  const sun = document.createElement('h4');
  sun.textContent = "SUN";

  const sunTime = document.createElement('h5');
  sunTime.textContent = "CLOSED";

  rightSection.appendChild(hours);
  rightSection.appendChild(mon);
  rightSection.appendChild(monTime);
  rightSection.appendChild(fri);
  rightSection.appendChild(friTime);
  rightSection.appendChild(sun);
  rightSection.appendChild(sunTime);

  return rightSection

};

function loadHome() {
  const content = document.getElementById('content');
  const home = createHome();
  content.appendChild(home);

}

export default loadHome;


