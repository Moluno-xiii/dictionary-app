import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"
import SearchDetails from "./components/SearchDetails";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";


function App() {
  const [query, setQuery] = useState(
    "",
  );
  const [loading, setLoading] = useState(false)
  // const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [error, setError] = useState('');

  async function fetchData() {
    try {
      setLoading(true)
      setError('')
      const response = await fetch(`${apiUrl}${query}`);
    if (!response.ok) {
      if (response.status === 404) {
        setError('Word not found')
        throw new Error("Word not found. Please try another word.");
      } else {
        setError('Failed to fetch data, try again')
        throw new Error("Failed to fetch data");
      }
    }
      const data = await response.json();
      setLoading(false)
      setError('')
      setSearchData(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="flex justify-center">
      <div className=" flex h-full container flex-col items-center px-2 text-sm  text-black sm:text-xl md:text-2xl xl:text-2xl 3xl:text-4xl">
        <Header />
        <SearchBar onClick={fetchData} query={query} setQuery={setQuery}/>
        {!loading && <SearchDetails searchData={searchData} />}
        {!error && loading && <Loader />}
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}

export default App;


