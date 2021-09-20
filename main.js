// targeting the elements
const container = document.querySelector("#container");
const shoppingListTitle = document.getElementById("title");
const formDiv = document.getElementById("formDiv");
const shoppingForm = document.getElementById("shoppingForm");
const formInput = document.querySelectorAll(".formInput");
const itemTitleInput = document.getElementById("itemTitleInput");
const quantityInput = document.getElementById("quantityInput");
const textInput = document.getElementById("textInput");
const formAddBtn = document.querySelector(".add-btn");
const shoppingList = document.getElementById("shoppingList");

// logic

// an array of the shopping items
let shoppingItems = [];

// function to add items to the shoppingItems array
const addItemsToCart = () => {
  // item object
  let item = {
    itemTitle: itemTitleInput.value,
    quantity: quantityInput.value,
    description: textInput.value,
  };
  shoppingItems = [...shoppingItems, item];

  // empty the shopping list div before invoking the renderItems function
  shoppingList.innerHTML = "";
  renderItems();
};

formAddBtn.addEventListener("click", () => addItemsToCart());

// function to activate trash button
const removeItems = (list) => {
  shoppingItems = shoppingItems.filter((item, index) => {
    return item.itemTitle !== list.itemTitle;
  });
  shoppingList.innerHTML = "";
  renderItems();
};

// function to render the individual items in the shopping list

const renderItems = () => {
  // maping through the shopping items array
  const items = shoppingItems.map((item, index) => {
    //   creating a card to hold individual items looped in the shopping list array
    const card = document.createElement("div");
    card.classList.add("card");

    const btnDiv = document.createElement("div");

    // individual details in the card generated
    const cardDetails = document.createElement("div");
    card.appendChild(cardDetails);
    card.appendChild(btnDiv);

    // title of the item in the card
    const cardDetailsTitle = document.createElement("h2");
    cardDetailsTitle.innerText = item.itemTitle;
    cardDetails.appendChild(cardDetailsTitle);

    // quantity of the item in the card
    const cardDetailsQuantity = document.createElement("h3");
    cardDetailsQuantity.textContent = item.quantity;
    cardDetails.appendChild(cardDetailsQuantity);

    // description of the item in the card
    const cardDetailsDescription = document.createElement("p");
    cardDetailsDescription.textContent = item.description;
    cardDetails.appendChild(cardDetailsDescription);

    // button for ticking the card from the shopping list array
    const doneBtn = document.createElement("button");
    //   use filter to remove the item
    doneBtn.innerHTML = '<i class="fas fa-check"></i>';
    doneBtn.classList.add("done-btn");
    doneBtn.addEventListener("click", () => {
      card.style.textDecoration = "line-through";
      card.style.backgroundColor = "rgb(122, 27, 27, 0.6)";
    });
    btnDiv.appendChild(doneBtn);

    // button to remove the card from the shopping list array
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn", "done-btn");
    trashButton.addEventListener("click", () => removeItems(item));
    btnDiv.appendChild(trashButton);

    shoppingList.appendChild(card);
  });

  return items;
};
