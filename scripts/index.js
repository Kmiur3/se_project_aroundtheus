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
const titleCloseButton = document.querySelector("#title-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const titleEditInput = document.querySelector("#title-edit-input");
const titleDescriptionInput = document.querySelector(
  "#title-description-input"
);
const profileEditForm = titleEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/*------------------------------------------------------------------------*/
/*                                 Functions                              */
/*------------------------------------------------------------------------*/
function closePopup() {
  titleEditModal.classList.remove("modal_opened");
}

/*------------------------------------------------------------------------*/
/*                                 Event Handlers                         */
/*------------------------------------------------------------------------*/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = titleEditInput.value;
  profileDescription.textContent = titleDescriptionInput.value;
  closePopup();
}

/*------------------------------------------------------------------------*/
/*                                 Event Listeners                        */
/*------------------------------------------------------------------------*/

titleEditButton.addEventListener("click", () => {
  titleEditInput.value = profileTitle.textContent;
  titleDescriptionInput.value = profileDescription.textContent;
  titleEditModal.classList.add("modal_opened");
});

titleCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach(cardData) => {

}
