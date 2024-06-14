const ImageCard = ({ card }) => {
  return (
    <div>
      <img src={card.urls.small} alt={card.altDescription} />
    </div>
  );
};

export default ImageCard;
