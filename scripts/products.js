let jerseys = document.getElementById('jerseys-products')

jerseysProduscts.map((shirt)=>{
    jerseys.innerHTML+= `
        <div>
            <img class="jerseys" src=${shirt.img}><img/>
        </div>
    `
})