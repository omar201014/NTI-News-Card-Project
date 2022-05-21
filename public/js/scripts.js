const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    newsFeedFn();
});


let newsFeedFn = async()=>{
    try {
        let news = document.getElementById('newsType').value;
        const url = `http://www.localhost:3000/news?type=${news}`;
        console.log(url);
        const title = document.getElementsByClassName('card-title');
        const description = document.getElementsByClassName('card-text');
        const image = document.getElementsByClassName('card-img-top');
        const error = document.getElementsByClassName('errorCase');
        console.log(error);
        console.log(title);
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.error) {
            console.log("errorCase");
            error.innerHTML = data.error;
            error.style.color = "red";
            error.style.fontWeight = "bold";
            error.style.fontSize = "12px";
            error.style.textAlign = "center";            
            title.innerHTML = '';
            description.innerHTML = '';
            image.innerHTML = '';            
        }
        else {
            console.log("passCase");
            error.innerHTML = "";
            for(let i = 0 ; i < data.length ; i++) {
                title.innerHTML = data[i].title;
                description.innerHTML = data[i].description;
                image.src = data[i].image;
            }
        }
    }
    catch(error) {
        console.log(error);
    }
}

        
