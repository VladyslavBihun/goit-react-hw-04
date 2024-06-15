import { useEffect, useState } from "react";
import fetchImages from "../img-api";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ url: "", alt: "" });

  useEffect(() => {
    if (searchWord === "") {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, totalPages } = await fetchImages(searchWord, page);
        setCards((prevCards) => {
          return [...prevCards, ...results];
        });
        setTotalPages(totalPages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, searchWord]);

  const handleSearch = async (searchWord) => {
    setSearchWord(searchWord);
    setPage(1);
    setCards([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImgClick = (url, alt) => {
    setModalImage({ url, alt });
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {cards.length > 0 && !isError && (
        <ImageGallery cards={cards} onImgClick={handleImgClick} />
      )}
      {isLoading && !isError && <Loader />}
      {!isLoading && cards.length > 0 && !isError && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          imageUrl={modalImage.url}
          imageAlt={modalImage.alt}
        />
      )}
    </>
  );
}

export default App;
