import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from "./Card"
import Button from "./Button"
import CharactersLayout from "./CharactersLayout"

const Body = () => {

  const [characters, next, prev, getCharacters] = useFetch('https://rickandmortyapi.com/api/character');


  let filteredCharacters = () => {
    return filteredCharacters = characters.results.filter((character) => character.name.toLowerCase().includes(characters.filtered.toLowerCase()))
   
  }
  const filterCharacters = (e) => {
    const { value } = e.target
    setCharacters({results: characters.results, filtered: value})
    
  }
  const CharacterCards = characters.results.map((character) => <Card key={character.id} {...character} />)
  const FilteredCharactersCards = filteredCharacters().map((character) => <Card key={character.id} {...character} />)

 

    
  return (
    <main className=" flex flex-col gap-10 my-5">
      <div className="flex justify-center">
        <input type="text" placeholder="Search" onChange={filterCharacters} className="px-4 py-2 wi rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
      </div>
      <CharactersLayout>
        {characters.filtered === '' ? CharacterCards : FilteredCharactersCards}
      </CharactersLayout>
      <div className="flex justify-center gap-5 mt-5">
        {prev && <Button text="Prev" handleClick={() => getCharacters(prev)} />}
        {next && <Button text="Next" handleClick={() => getCharacters(next)} />}
      </div>
    </main>
  )
}

export default Body;