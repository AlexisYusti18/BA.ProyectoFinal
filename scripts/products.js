// const jerseys = document.getElementById('jerseys-products')
// const searchBar=document.getElementById('searchBar')
// let filterClubName= [];

// searchBar.addEventListener('input', (event) => {
//     filterClubName = event.target.value.toLowerCase();
//     showList();
//   });

// const showList=()=>{
//     jerseys.innerHTML= '';
//     jerseysProducts.filter((item)=>{
    
//         return(
//             item.club.toLowerCase().includes(filterClubName)
//             )
//     }).forEach((e)=>{
//         const img= document.createElement('img')
//         img.innerHTML= `<img class="jerseys" src=${e.img}><img/>`
//         jerseys.appendChild(img)
//     })
// }
// showList()
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


// const searchBar=document.getElementById('searchBar')
buscarElemento()
  // Función para buscar elementos en el array
  function buscarElemento() {
    // Obtener el valor ingresado en la barra de búsqueda
    let consulta = document.getElementById("searchBar").value.toLowerCase()
    console.log(consulta);
    // Filtrar el array de elementos según la consulta
    var resultados = jerseysProducts.filter((elemento)=> {
        // console.log(elemento.club);
      return elemento.club.toLowerCase().includes(consulta);
    });
    
    // Mostrar los resultados en la página
    var resultadoHTML = "";
    resultados.forEach(function(resultado) {
      resultadoHTML += '<div>' +
                       '<img class="jerseys" src="' + resultado.img + '">' +                       
                       '</div>';
    });
    document.getElementById("jerseys-products").innerHTML = resultadoHTML;
  }

