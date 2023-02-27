import React, { useState, useEffect } from 'react'

import Card from "./Card"
import Button from "./Button"
import CharactersLayout from "./CharactersLayout"

const main = () => {

  const [characters, setCharacters] = useState([])
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  const getCharacters = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    data.info.next ? setNext(data.info.next) : setNext('')
    data.info.prev ? setPrev(data.info.prev) : setPrev('')

    setCharacters(data.results)

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
   getCharacters('https://rickandmortyapi.com/api/character')
  }, []);

  const CharacterCards = characters.map((character) => <Card key={character.id} {...character} />)

    
  return (
    <main className=" flex flex-col gap-10 my-5">
      <CharactersLayout>
        {CharacterCards}
      </CharactersLayout>
      <div className="flex justify-center gap-5 mt-5">
        {prev && <Button text="Prev" handleClick={() => getCharacters(prev)} />}
        {next && <Button text="Next" handleClick={() => getCharacters(next)} />}
      </div>
    </main>
  )
}

export default main