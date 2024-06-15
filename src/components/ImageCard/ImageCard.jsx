import css from "./ImageCard.module.css";

const ImageCard = ({ card }) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={card.urls.small}
        alt={card.altDescription}
      />
    </div>
  );
};

export default ImageCard;
