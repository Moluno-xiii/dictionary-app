import { CiSearch } from "react-icons/ci";


interface SearchBarProps {
    onClick : () => void;
    query: string
    setQuery: (newQuery : string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClick, query, setQuery,  }) => {
    const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
      
        
    }

  return (
    <p className="flex">
      <input
        type="text"
        placeholder=""
        value={query}
        onChange={onChangeQuery}
        className="text-black rounded-lg outline-none px-2 bg-blue-400"
      />
      <button onClick={onClick} className="ml-2"><CiSearch /></button>
    </p>
  );
};

export default SearchBar;
