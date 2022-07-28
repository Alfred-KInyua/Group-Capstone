const list = document.querySelector('.resultList');

const display = (list) => {
  list.forEach((item) => {
    const showcontainer = document.createElement('div');
    showcontainer.innerHTML = `<div class="image"> <img src="${item.image.medium}" alt=""/>
                               </div>
                               <div class="info">
                              <h2 class="title-show">${item.name}</h2>
                              <span class="likes"></span>
                              </div>
                              <p class="season"> season ${item.season} episode ${item.number} </p>
                              <p class="description">${item.summary}</p>
                              <button class="like">Like</button>
                              <button class="comment">Comment</button>
                              <button class="reservation">Reservation</button> `;

    list.appendChild(showcontainer);
  });
};

export default display;