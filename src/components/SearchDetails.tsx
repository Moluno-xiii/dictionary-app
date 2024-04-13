import React from "react";
import { WordsData, } from "../../public/types";

interface GetMovieProps {
  searchData: WordsData[];
}

const GetMovie: React.FC<GetMovieProps> = ({ searchData }) => {
//   // @ts-expect-error: These variables are intentionally declared but not used
//   const phonetics: Phonetics[] = [];
//   // @ts-expect-error: These variables are intentionally declared but not used
//   const meanings: Meanings[] = [];
//  {/* @ts-expect-error: These variables are intentionally declared but not used */}
//   const licenses: License[] = []; 

  return (
    <div className="flex justify-center">
      {searchData.length === 0 ? (
        <div>input a search query</div>
      ) : (
        <div>
          {searchData[0].meanings?.map((meaning) => (
            // @ts-expect-error: These variables are intentionally declared but not used
            <div className="bg-lue-400 mt-5" key={meaning.partOfSpeech}>
              <p className="bg-purple-400">
                {/* @ts-expect-error: These variables are intentionally declared but not used */}
                Part of Speech: {meaning.partOfSpeech}
              </p>
              {/* @ts-expect-error: These variables are intentionally declared but not used */}
              {meaning.definitions.map((def, index) => (
                <div key={index}>
                  <p className="my-4 bg-pink-400">
                    Definition: {def.definition}
                  </p>
                  {def.Synonyms && <p>Synonyms: {def.synonyms?.join(", ")}</p>}
                  {def.Antonyms && <p>Antonyms: {def.antonyms?.join(", ")}</p>}
                  {def.example && (
                    <p className="bg-violet-300">Example: {def.example}</p>
                  )}
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
