import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener("click", handleImageClick);
const showImages = createImageCardMarkup(galleryItems);
function createImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </div>
  `;
    })
    .join("");
}
galleryContainer.insertAdjacentHTML("beforeend", showImages);

function handleImageClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" width="800" height="600"/>
`);
  instance.show();
}
