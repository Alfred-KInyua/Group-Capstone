import './style.css';
<<<<<<< HEAD
import renderCards from './modules/renderContent.js';
import { artCounter } from './modules/helperMethods.js';

const countMovies = document.querySelector('.count__movies');

const counterFunc = async () => {
  const counter = await artCounter();
  countMovies.innerHTML = `Shows: ${counter}`;
};

counterFunc();
renderCards();
=======

const list=document.querySelector('.resultsList');
const modal = document.querySelector("#myModal");

// Get the button that opens the modal
const btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const showsquery = async () => {
  const url ='https://api.tvmaze.com/shows/2/episodes';  
  const fetchData = await fetch(url);
  const data = await fetchData.json();
  renderresults(data);
};

const renderresults = (results) => {
  results.forEach((item) => {
    const episodes = document.createElement('div');
    episodes.innerHTML = `
                           <div class="image"> <img src="${item.image.medium}" alt=""/>
                               </div>
                               <div class="info">
                              <h2 class="title-show">${item.name}</h2>
                              <span class="likes"></span>
                              </div>
                              <p class="season"> season ${item.season} episode ${item.number} </p>
                              <p class="summary">${item.summary}</p>
                              <button class="like">Like</button>
                              <button id="myBtn">comments</button>
                              <button class="reservation">Reservation</button> `;

    list.appendChild(episodes);
  });
};




 
// window.onload =()=>{
//  const search =document.querySelector('#query')
//   search.onkeyup =(e)=>{
//     showsquery(search.value);
//   }
// }

window.onload =()=>{  
     showsquery();
   }
 
>>>>>>> dev
