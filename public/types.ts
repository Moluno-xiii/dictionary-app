interface WordsData  {
  word: string;
  phonetics?: string[];
  meanings?: string[];
  license?: string[];
}

interface Phonetics {
  text: string;
  audio?: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
}

interface Definition {
  definition: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
}

interface Meanings {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface License {
  name: string;
  url: string;
}


export type { WordsData, License, Meanings, Phonetics}