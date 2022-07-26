// import addData from '../modules/add.js';
// import './style.css';
// import display from '../modules/display.js';
// import myurl from '../modules/url.js';

import { serialize } from "cookie";

// const myform = document.querySelector('.myform');
// const refresh = document.querySelector('.refresh');

// const displayFRomAPI = async () => {
//   const geturl = await fetch(myurl);
//   const data = await geturl.json();
//   display(data.result);
// };

// refresh.addEventListener('click', displayFRomAPI);


function showsquery(query){
  const url =`https://api.tvmaze.com/search/shows?q=${query}`;
fetch(url)
.then((response)=>response.json())
.then((jsondata)=>{
  
  const results  = jsondata.map(element=>element.show.name)
  renderresults(results)})


}
function renderresults(results){
  const list=document.querySelector('.resultsList');
  list.innerHTML=''
   results.forEach(result => {
    const element = document.createElement("li");
    element.innerText =result;
    list.appendChild(element);
  });
}
 
window.onload =()=>{
 const search =document.querySelector('#query')
  search.onkeyup =(e)=>{
    showsquery(search.value);
  }
}