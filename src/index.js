// import url from ('../modules/')
function getstuff(query){
    const url =`https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(url)
.then(response=> response.json())
.then((getdata)=>{
   console.log(getdata)
})

}
getstuff('friends');