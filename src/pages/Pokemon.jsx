import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {

  const [pokemon, setPokemon] = useState()

  const { id } = useParams()

  const getPercentbar = (stat) => {
    const percent = (stat * 100) / 255;
    return `${percent}%`;
  }

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className='pokemon'>
      {/* Parte superior */}
      <section className='pokemon__header'>
        <section className='pokemon__section'>
          <div className='pokemon__img'>
            <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
          </div>
        </section>
      </section>
      {/* Body */}
      <section className='pokemon__body'>
        <h2 className='pokemon__num'>#{pokemon?.id}</h2>
        <h2 className='pokemon__name'>{pokemon?.name}</h2>
        <div className='pokemon__div'>
          <div className='pokemon__data'>
            <h5>Weigth</h5>
            <h4 className='pokemon__data-num'>{pokemon?.weight}</h4>
          </div>
          <div className='pokemon__data'>
            <h5>Heigth</h5>
            <h4 className='pokemon__data-num'>{pokemon?.heigth}</h4>
          </div>
        </div>

        <div>
          <div>
            <h3 className='pokemon__type'>Type</h3>
            <div className='pokemon__type-type'>
              {
                pokemon?.types.map(type => <div className='pokemon__types' key={type.type.name}><span>{type.type.name}</span></div>)
              }
            </div>
          </div>
          <div>
            <h3 className='pokemon__abilitie'>Abilities</h3>
            <div className='pokemon__abilitie-abilitie'>
              {
                pokemon?.abilities.map(ability => <div className='pokemon__abilities' key={ability.ability.name}><span>{ability.ability.name}</span></div>)
              }
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className='pokemon__stats'>
          <h2 className='pokemon__stats-title'>Stats</h2>
          <section className='pokemon__stat-info'>
            {
              pokemon?.stats.map(stat => (
                <article className='pokemon__stat' key={stat.stat.name}>
                  <div className='pokemon__stat-header'>
                    <h4 className='pokemon__stat-name'>{stat.stat.name}</h4>
                    <h5 className='pokemon__stat-value'>{stat.base_stat}/255</h5>
                  </div>
                  <div className='pokemon__stat-bar'>
                    <div className='pokemon__stat-barGray'>
                      <div className='pokemon__stat-barProgres' style={{ width: getPercentbar(stat.base_stat) }}></div>
                    </div>
                  </div>
                </article>
              ))
            }
          </section>
        </section>
      </section>

    </main>
  )
}

export default Pokemon