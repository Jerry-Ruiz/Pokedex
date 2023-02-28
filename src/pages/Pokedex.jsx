import React from 'react';
import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokedex/PokemonCard';
import usePokedex from '../hooks/usePokedex';
import "./styles/Pokedex.css"

const Pokedex = () => {

  const nameTrainer = useSelector(store => store.nameTrainer)

  const { handleSubmit, handleChangeSelect, types, pokemonsInPage, handlePreviusPage, handleNextPage, pagesInBlock, setCurrentPage } = usePokedex()

  return (
    <main className='pokedex'>
      <p className='pokedex__welcome'><span className='pokedex__welcome-name'>Welcome {nameTrainer},</span> here you can find information about your favorite pokemon.</p>
      <form onSubmit={handleSubmit}>
        <div className='pokedex__form'>
          <input className='pokedex__input' type="text" id='pokemonName' placeholder='Search your Pokemon...' />
          <button className='pokedex__btn'>Search</button>
        </div>
        <div className='pokedex__select-content'>
          <select className='pokedex__select' onChange={handleChangeSelect}>
            <option value="" >All</option>
            {
              types.map(type => <option key={type.url}>{type.name}</option>)
            }
          </select>
        </div>
      </form>
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: "20px", justifyContent: 'center' }}>
        {
          pokemonsInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
        }
      </section>
      <section className='pokedex__pagination'>
        <ul className='pokedex__pagination-list'>
          <li className='pokedex__pagination-page' onClick={handlePreviusPage}>{"<<"}</li>
          <li onClick={() => setCurrentPage(1)}></li>
          {
            pagesInBlock.map(page => <li className='pokedex__pagination-page' onClick={() => setCurrentPage(page)} key={page}>{page}</li>)
          }
          <li onClick={() => setCurrentPage(lastPage)}></li>
          <li className='pokedex__pagination-page' onClick={handleNextPage}>{">>"}</li>
        </ul>
      </section>
    </main>
  )
}
export default Pokedex