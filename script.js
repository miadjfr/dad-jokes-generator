const btnel = document.getElementById('btn');
const jokeEl = document.getElementById("joke")

const apiKey = "SlYUxNhtczZaBisdhU1xIQ==JiZVUJdGLxjAN98g";

const option = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey},
};

const APIUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getbtn(){

    jokeEl.innerText = "Ready ..."
     const response = await fetch(APIUrl , option );
     const data = await response.json();

     jokeEl.innerText = data[0].joke;



};

btnel.addEventListener('click' , getbtn);
