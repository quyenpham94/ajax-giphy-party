console.log("Let's get this party started!");

// Appending GIFs
const gifArea = document.getElementById('gif-area');
function addGif(response){
    let numberResults = response.data.length;
    if(numberResults) {
        let randomIndex = Math.floor(Math.random() * numberResults);
        const newDiv = document.createElement('div');
        const newImg = document.createElement('img');
        newImg.src = response.data[randomIndex].images.original.url;
        newImg.classList.add("w-100");
        newDiv.append(newImg);
        gifArea.append(newDiv);

    }
}

// Building the Form
const form =  document.getElementById("new-gif");
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const getKeyword = document.getElementById('keyword').value;
    getKeyword.value = '';
    console.log(getKeyword)
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: getKeyword,
            api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    })
    
    console.log(res);
    addGif(res.data);
})

// removing GIFs
const removeBtn = document.getElementById('remove-button');
removeBtn.addEventListener('click', function(){
    gifArea.remove();
})