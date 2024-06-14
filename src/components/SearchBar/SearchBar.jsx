import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const notify = () => toast("You must enter text to search for a picture.");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchWord = form.elements.searchWord.value;

    if (form.elements.searchWord.value === "") {
      notify();
      return;
    }
    onSearch(searchWord);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchWord"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
