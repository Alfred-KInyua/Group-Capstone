import './style.css';
import renderCards from './modules/renderContent.js';
import { artCounter } from './modules/helperMethods.js';

const countMovies = document.querySelector('.count__movies');

const counterFunc = async () => {
  const counter = await artCounter();
  countMovies.innerHTML = `Shows: ${counter}`;
};

counterFunc();
renderCards();