const jerseys = document.getElementById('jerseys-products')
const searchBar=document.getElementById('searchBar')
let filterClubName= [];

searchBar.addEventListener('input', (event) => {
    filterClubName = event.target.value.toLowerCase();
    showList();
  });

const showList=()=>{
    jerseys.innerHTML= '';
    jerseysProducts.filter((item)=>{
    
        return(
            item.club.toLowerCase().includes(filterClubName)
            )
    }).forEach((e)=>{
        const img= document.createElement('img')
        img.innerHTML= `<img class="jerseys" src=${e.img}><img/>`
        jerseys.appendChild(img)
    })
}
showList()
// searchBar.addEventListener('keyup', (e)=>{
//     let arr= []
//     const searchString= e.target.value
//     const filterClubName= jerseysProducts.filter((jersey)=>(
//         jersey.club.toLowerCase().includes(searchString)
//         ))
//     })


//     jerseysProducts.map((shirt)=>{
//         jerseys.innerHTML+= `
//             <div>
//                 <img class="jerseys" src=${shirt.img}><img/>
//             </div>`
//     })



