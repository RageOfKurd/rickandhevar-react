import { useState , useEffect } from 'react';
const useFetch = (url) => {

    const [characters, setCharacters] = useState({
        results: [],
        filtered: ''
    
    })
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  const getCharacters = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    data.info.next ? setNext(data.info.next) : setNext('')
    data.info.prev ? setPrev(data.info.prev) : setPrev('')

    setCharacters({results:data.results, filtered: ''})

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    getCharacters(url)
   }, []);
    
  return [characters , next , prev , getCharacters]
}

export default useFetch