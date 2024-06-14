import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ cards }) => {
  return (
    <ul>
      {cards.map((card) => (
        <li key={card.id}>
          <ImageCard card={card} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
