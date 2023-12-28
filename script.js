//Creating the Structure of Html
let container = document.createElement("div");
container.className="container-fluid row"
container.style.backgroundColor="#000"

//API logic
let detailsobj;
        let objdetails;
        fetch("https://restcountries.com/v3.1/all")

        .then((reponse)=>{
            console.log("data fetched....")
            return reponse.json();
        })
        .then((data)=>{
            console.log(data)
            for(let i=0;i<data.length;i++){
                names=data[i].name;
                let div=document.createElement('div');
                div.className=`container-fluid col-lg-4 col-sm-12 card-container `;
                div.style.backgroundColor="#000";
                div.style.height="300px";
                div.style.color="#fff"
                div.innerHTML=`<div class="card-item">
                    <div class="top">
                        <div class="flag">
                            <img src="${data[i].flags.png}">
                        </div>
                        <div class="name">
                            <p>${data[i].name.official}</p>
                        </div>
                    </div>
                    <div class="row card-body">
                        <p class="card-text col-6">Capital: ${data[i].capital}</p>
                        <p class="card-text col-6">Region: ${data[i].region}</p>
                        <p class="card-text col-6">SubRegion: ${data[i].subregion}</p>
                        <p class="card-text col-6">Country Code: ${data[i].ccn3}</p>
                        <button type="button" class="btn" style="border-radius:4px;" onclick="loadWeather(${data[i].latlng[0]},${data[i].latlng[1]})">Click for Weather</button><br>
                    </div>
                    
                </div>`
               
                container.appendChild(div);
                document.body.appendChild(container);

            }
            
        })
        .then(()=>{
            console.log(detailsobj);
        })
        .catch((error)=>{
                console.log(error)
        })

let wethrdtl;
//load the weather details with latitude and langitude
function loadWeather(lat,lng){
    let wethrdtl;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2ec8027f9afa11371eb8cb23292005ff`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
            console.log(data.main.temp-273.15, data.visibility, data.main.humidity)
            alert(`Temperature: ${(data.main.temp-273.15).toFixed(1)}, Visibility: ${data.visibility/1000} Km, Humidity: ${data.main.humidity}%`)
        
    })
    .catch((error)=>{
        console.log(error)
    })
    
}     
