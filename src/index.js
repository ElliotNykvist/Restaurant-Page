import createHeader from "./header";
import createFooter from "./footer";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact"

function navTabs(header) {
  const pageContent = document.getElementById("pageLoadContainer");
  const tabs = header.querySelectorAll('li'); // Get elements with the class "tab" inside the header

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Clear the pageContent
      pageContent.textContent = "";

      if (tab.textContent === "Home") {
        // Append the content from createHome to pageContent
        pageContent.appendChild(createHome());
      } else if (tab.textContent === "Menu") {
        // Append the content from createMenu to pageContent
        pageContent.appendChild(createMenu());
      } else {
        pageContent.appendChild(createContact());
      }
    });
  });
}

function init() {
  const container = document.getElementById('container');
  const header = createHeader(); // Create the header once

  container.appendChild(header);
  container.appendChild(createHome());
  container.appendChild(createFooter());
  createMenu(container);

  navTabs(header); // Pass the header as an argument to helloMsg
}

init();

