import React from 'react'
import { useDispatch } from 'react-redux';
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice';
import "./styles/Home.css"

const Home = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameTrainer = e.target.nameTrainer.value
    dispatch(setNameTrainerGlobal(nameTrainer));
  };

  return (
    <main className='home'>
      <section className='home__section'>
        <div className='home__img'>
          <img src="/images/pokedex.png" alt="" />
        </div>
        <h2 className='home__hello'>Hello Trainer!</h2>
        <p className='home__start'>Give me your name to start!</p>
        <form className='home__form' onSubmit={handleSubmit}>
          <input className='home__input' required id='nameTrainer' type="text" placeholder='Enter your name...' />
          <button className='home__btn' >Start</button>
        </form>
      </section>
      <section className='home__bar'>
        <div className='home__red'></div>
        <div className='home__black'>
          <div className='home__black-boll'>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home