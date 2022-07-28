import './style.css';
import renderCards from './modules/renderContent.js';
import { artCounter } from './modules/helpers.js';

const articlesDisplay = document.querySelector('.movies__counter');

const counterFunc = async () => {
  const counter = await artCounter();
  articlesDisplay.innerHTML = `Shows: ${counter}`;
};

counterFunc();
renderCards();