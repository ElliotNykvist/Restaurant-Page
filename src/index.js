import createHeader from "./header";
import createFooter from "./footer";
import createHome from "./home";


function init() {
  const container = document.getElementById('container');
  container.appendChild(createHeader());
  container.appendChild(createHome());
  container.appendChild(createFooter());


  return container
}

init()