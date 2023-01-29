import { useEffect, useState } from 'react';

const CREATE_CAT_ENDPOINT = (sentence: string) =>
  `https://cataas.com/cat/says/${sentence}?size=50&json=true`;

const CAT_ENDPOINT_PREFIX = 'https://cataas.com';

const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact?max_length=50';

export const useCat = () => {
  const [catUrl, setCatUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGetCats = async (sentence: string) => {
    setIsLoading(true);
    const res = await fetch(CREATE_CAT_ENDPOINT(sentence));
    const { url } = await res.json();
    setCatUrl(`${CAT_ENDPOINT_PREFIX}${url}`);
    setIsLoading(false);
  };

  const handleGetFactCat = async () => {
    setIsLoading(true);
    const res = await fetch(CAT_FACT_ENDPOINT);
    const { fact } = await res.json();
    handleGetCats(fact);
  };

  useEffect(() => {
    handleGetFactCat();
  }, []);

  return { catUrl, isLoading, handleGetCats, handleGetFactCat };
};
