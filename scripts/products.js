let jerseys = document.getElementById('jerseys-products')
const searchBar=document.getElementById('searchBar')


searchBar.addEventListener('keyup', (e)=>{
    const serchString= e.target.value
    const filterClubName=jerseysProduscts.filter((jersey)=>{
        return(
            jersey.club.toLowerCase().includes(serchString)
        )
    })
    displayJerseys(filterClubName)
    // console.log(filterClub);
})

function displayJerseys(){
    jerseysProduscts.map((shirt)=>{
        jerseys.innerHTML+= `
        <div>
            <img class="jerseys" src=${shirt.img}><img/>
        </div>`
    })
}
displayJerseys() 


