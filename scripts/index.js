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

/*-----------------------------------------------*/
/*                   Elements                    */
/*-----------------------------------------------*/
const titleEditButton = document.querySelector("#title-edit-button");
const titleEditModal = document.querySelector("#title-edit-modal");
const titleCloseButton = document.querySelector("#title-close-button");

titleEditButton.addEventListener("click", () => {
  titleEditModal.classList.add("modal_opened");
});

titleCloseButton.addEventListener("click", () => {
  titleEditModal.classList.remove("modal_opened");
});
