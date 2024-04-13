import React from "react";
import { WordsData, License, Meanings, Phonetics } from "../../public/types";

interface GetMovieProps {
  searchData: WordsData[];
}

const GetMovie: React.FC<GetMovieProps> = ({ searchData }) => {
  const phonetics: Phonetics[] = [];
  const meanings: Meanings[] = [];
  const licenses: License[] = [];

  return (
    <div className="flex justify-center">
      {searchData.length === 0 ? (
        <div>input a search query</div>
      ) : (
        <div>
          {searchData[0].meanings?.map((meaning) => (
            <div className="mt-5 bg-lue-400" key={meaning.partOfSpeech}>
              <p className="bg-purple-400">Part of Speech: {meaning.partOfSpeech}</p>
              {meaning.definitions.map((def, index) => (
                <div key={index}>
                  <p className="my-4 bg-pink-400">Definition: {def.definition}</p>
                  {def.Synonyms && <p>Synonyms: {def.synonyms?.join(", ")}</p>}
                  {def.Antonyms && <p>Antonyms: {def.antonyms?.join(", ")}</p>}
                  {def.example && <p className="bg-violet-300">Example: {def.example}</p>}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetMovie;
