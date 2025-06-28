import { useState } from "react";
import { Search } from "lucide-react";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error("Enter some query");
      return;
    }
    onSubmit(value);

    setValue("");
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          onChange={handleChange}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          Search
          <Search size={20} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
