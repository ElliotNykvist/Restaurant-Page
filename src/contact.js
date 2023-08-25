function createContact() {
  // Create the main section
  const section = document.createElement('section');
  section.setAttribute('id', 'pageLoadContainer');

  // Create the section for contact information
  const section1 = document.createElement("section");
  section1.setAttribute('id', 'contact');

  // Create the section header
  const header = document.createElement("h1");
  header.className = "section-header";
  header.textContent = "Contact";

  // Create a container for the contact information
  const contactWrapper = document.createElement("div");
  contactWrapper.className = "contact-wrapper";

  // Create the contact form
  const contactForm = document.createElement("form");
  contactForm.id = "contact-form";
  contactForm.className = "form-horizontal";
  contactForm.setAttribute("role", "form");

  // Create the first form group
  const formGroup1 = document.createElement("div");
  formGroup1.className = "form-group";

  const col1 = document.createElement("div");
  col1.className = "col-sm-12";

  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.className = "form-control";
  inputName.id = "name";
  inputName.placeholder = "NAME";
  inputName.name = "name";
  inputName.value = "";
  inputName.required = true;

  col1.appendChild(inputName);
  formGroup1.appendChild(col1);

  // Create the second form group
  const formGroup2 = document.createElement("div");
  formGroup2.className = "form-group";

  const col2 = document.createElement("div");
  col2.className = "col-sm-12";

  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.className = "form-control";
  inputEmail.id = "email";
  inputEmail.placeholder = "EMAIL";
  inputEmail.name = "email";
  inputEmail.value = "";
  inputEmail.required = true;

  col2.appendChild(inputEmail);
  formGroup2.appendChild(col2);

  // Create the textarea
  const textarea = document.createElement("textarea");
  textarea.className = "form-control";
  textarea.rows = "10";
  textarea.placeholder = "MESSAGE";
  textarea.name = "message";
  textarea.required = true;

  // Create the submit button
  const button = document.createElement("button");
  button.className = "btn btn-primary send-button";
  button.id = "submit";
  button.type = "submit";
  button.textContent = "SEND";

  // Append form elements to the contact form
  contactForm.appendChild(formGroup1);
  contactForm.appendChild(formGroup2);
  contactForm.appendChild(textarea);
  contactForm.appendChild(button);

  // Create the direct contact container
  const directContactContainer = document.createElement("div");
  directContactContainer.className = "direct-contact-container";

  // Create the contact list
  const contactList = document.createElement("ul");
  contactList.className = "contact-list";

  // Create list items for contact information
  function createContactItem(iconClass, contactText) {
    const listItem = document.createElement("li");
    const icon = document.createElement("i");
    icon.className = iconClass;
    const span = document.createElement("span");
    span.className = "contact-text";
    span.textContent = contactText;
    listItem.appendChild(icon);
    listItem.appendChild(span);
    return listItem;
  }

  contactList.appendChild(createContactItem("fa fa-map-marker fa-2x", "123 Serendipity Street"));
  contactList.appendChild(createContactItem("fa fa-phone fa-2x", "555-555-5555"));
  contactList.appendChild(createContactItem("fa fa-envelope fa-2x", "lukespizza@gmail.com"));

  // Create the social media list
  const socialMediaList = document.createElement("ul");
  socialMediaList.className = "social-media-list";

  // Create social media icons
  function createSocialMediaIcon(iconClass) {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = "#";
    anchor.target = "_blank";
    anchor.className = "contact-icon";
    const icon = document.createElement("i");
    icon.className = iconClass;
    anchor.appendChild(icon);
    listItem.appendChild(anchor);
    return listItem;
  }

  socialMediaList.appendChild(createSocialMediaIcon("fa fa-github"));
  socialMediaList.appendChild(createSocialMediaIcon("fa fa-codepen"));
  socialMediaList.appendChild(createSocialMediaIcon("fa fa-twitter"));
  socialMediaList.appendChild(createSocialMediaIcon("fa fa-instagram"));

  // Append contact information elements to the direct contact container
  directContactContainer.appendChild(contactList);
  directContactContainer.appendChild(document.createElement("hr"));
  directContactContainer.appendChild(socialMediaList);
  directContactContainer.appendChild(document.createElement("hr"));

  // Append all elements to the contact wrapper
  contactWrapper.appendChild(contactForm);
  contactWrapper.appendChild(directContactContainer);

  // Append the header and contact wrapper to the section
  section1.appendChild(header);
  section1.appendChild(contactWrapper);

  section.appendChild(section1);

  return section;
}

export default createContact;
