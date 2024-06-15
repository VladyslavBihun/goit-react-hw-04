import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ cards, onImgClick }) => {
  return (
    <ul className={css.list}>
      {cards.map((card) => (
        <li className={css.item} key={card.id}>
          <ImageCard card={card} onImgClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
