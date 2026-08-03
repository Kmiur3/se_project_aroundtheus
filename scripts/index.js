const initialCards = [
  {
    name: "Stonehenge",
    link: "https://kmiur3.github.io/se_project_aroundtheus/images/Stonehenge.png",
  },
  {
    name: "Big Ben",
    link: "https://kmiur3.github.io/se_project_aroundtheus/images/Big-Ben.png",
  },
  {
    name: "Cliffs of Moher",
    link: "https://kmiur3.github.io/se_project_aroundtheus/images/Cliffs-of-Moher.png",
  },
  {
    name: "Mont St Michel",
    link: "https://kmiur3.github.io/se_project_aroundtheus/images/Mont-St-Michel.png",
  },
  {
    name: "Matterhorn",
    link: "https://kmiur3.github.io/se_project_aroundtheus/images/Matterhorn.png",
  },
  {
    name: "Kirkjufell",
    link: "https://kmiur3.github.io/se_project_aroundtheus/images/Kirkjufell.png",
  },
];

/*------------------------------------------------------------------------*/
/*                                 Elements                               */
/*------------------------------------------------------------------------*/
const titleEditButton = document.querySelector("#title-edit-button");
const titleEditModal = document.querySelector("#title-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const titleEditInput = document.querySelector("#title-edit-input");
const titleDescriptionInput = document.querySelector(
  "#title-description-input",
);
const addNewCardButton = document.querySelector(".profile__add-button");

const addCardModal = document.querySelector("#add-card-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title",
);
const cardImageLink = addCardFormElement.querySelector(
  ".modal__input_type_url",
);

const viewModal = document.querySelector("#preview-modal");
const modalImage = viewModal.querySelector(".modal__image");
const imageCaption = viewModal.querySelector(".modal__caption");

const profileEditForm = document.forms["profile-form"];
const cardAlbum = document.querySelector(".cards__album");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/*------------------------------------------------------------------------*/
/*                                 Functions                              */
/*------------------------------------------------------------------------*/

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = titleEditInput.value;
  profileDescription.textContent = titleDescriptionInput.value;
  closePopup(titleEditModal);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: cardTitleInput.value,
    link: cardImageLink.value,
  };
  const cardElement = getCardElement(cardData);
  cardAlbum.prepend(cardElement);
  evt.target.reset();
  closePopup(addCardModal);
}

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("card__like-button_active");
}

function handleDeleteButtonClick(evt) {
  const cardElement = evt.target.closest(".card");
  cardElement.remove();
}

function handleImageClick(evt) {
  modalImage.src = evt.target.src;
  modalImage.alt = evt.target.alt;
  imageCaption.textContent = evt.target.alt;
  openModal(viewModal);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  return cardElement;
}

/*------------------------------------------------------------------------*/
/*                                 Event Listeners                        */
/*------------------------------------------------------------------------*/

titleEditButton.addEventListener("click", () => {
  titleEditInput.value = profileTitle.textContent;
  titleDescriptionInput.value = profileDescription.textContent;
  openModal(titleEditModal);
});
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addNewCardButton.addEventListener("click", () => {
  addCardFormElement.reset();
  openModal(addCardModal);
});
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

cardAlbum.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("card__like-button")) {
    handleLikeButtonClick(evt);
  } else if (evt.target.classList.contains("card__delete-button")) {
    handleDeleteButtonClick(evt);
  } else if (evt.target.classList.contains("card__image")) {
    handleImageClick(evt);
  }
});

const closeButtons = document.querySelectorAll(".modal__close");

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closePopup(popup));
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardAlbum.prepend(cardElement);
});
