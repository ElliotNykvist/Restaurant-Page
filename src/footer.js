function createFooter() {
  // Create the footer container
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  // Create the copyright paragraph
  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © 2023 elliotnykvist`;

  // Create the GitHub link
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/elliotnykvist";
  githubLink.target = "_blank"; // Use dot notation for properties

  // Create the GitHub icon (Font Awesome)
  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab", "fa-github");

  // Append the GitHub icon to the GitHub link
  githubLink.appendChild(githubIcon);

  // Append the copyright and GitHub link to the footer
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

export default createFooter;