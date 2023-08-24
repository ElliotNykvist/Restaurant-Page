function createMenu(){
  window.scrollTo(0,0); //to start page from top

  const section = document.createElement('section');
  section.setAttribute('id', 'pageLoadContainer');

  const menu = document.createElement('section');
  menu.classList.add('menuContent');

  const menuBackground = document.createElement('div');
  menuBackground.classList.add('menuBackground');

  const menuTitle = document.createElement('p');
  menuTitle.textContent = ("Menu");
  menuTitle.classList.add('menuTitle');
  menuBackground.appendChild(menuTitle);

  let menuItemPrice = [
    "Margherita Pizza", "9.99",
    "Pepperoni Pizza", "11.50",
    "Hawaiian Pizza", "12.75",
    "Vegetarian Pizza", "10.25",
    "Supreme Pizza", "13.75",
    "Cheese Stuffed Crust", "2.00",
    "Extra Cheese", "1.50",
    "Garlic Breadsticks", "4.50",
    "Mushroom Pizza", "10.75",
    "BBQ Chicken Pizza", "12.25",
    "Sausage Pizza", "11.00",
    "Pesto Pizza", "12.50",
    "Spinach and Feta Pizza", "11.75",
    "Meat Lovers Pizza", "13.50",
    "Veggie Calzone", "9.25",
    "Veggie Stromboli", "9.75",
    "Caesar Salad", "6.50",
    "Greek Salad", "7.00",
    "Caprese Salad", "8.00",
    "Garlic Knots (6 pieces)", "3.50",
    "Cannoli", "4.25",
    "Tiramisu", "5.75",
];
        


  menuItemPrice.forEach(element => {
    const item = document.createElement('p');
    item.textContent = element;
    menuBackground.appendChild(item);
  });

  menu.appendChild(menuBackground);
  section.appendChild(menu);
  return section;
}



export default createMenu;