import css from "./ImageCard.module.css";

const ImageCard = ({ card, onImgClick }) => {
  return (
    <div
      className={css.card}
      onClick={() => onImgClick(card.urls.regular, card.alt_description)}
    >
      <img
        className={css.img}
        src={card.urls.small}
        alt={card.altDescription}
      />
    </div>
  );
};

export default ImageCard;
