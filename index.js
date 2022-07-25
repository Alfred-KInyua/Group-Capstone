find=()=>{
fetch('https://api.tvmaze.com/search/shows?q=snow')
.then((response)=>{
    console.log('response');
    console.log(response);
    return response.json();

})
.then((jsonData)=>{
    console.log('we got our data')
console.log(jsonData)

})

}

find();