let consulta = ""
buscarElemento()

function buscarElemento() {
    // Obtener el valor ingresado en la barra de búsqueda
    consulta = document.getElementById("searchBar").value.toLowerCase()
    console.log(consulta);
    var resultados = jerseysProducts.filter((elemento)=> {
        // console.log(elemento.club);
      return elemento.club.toLowerCase().includes(consulta);
    });
    
    var resultadoHTML = "";
    if(resultados.length >= 1){
      resultados.forEach(function(resultado) {
        resultadoHTML += '<div>' +
                         '<img class="jerseys" src="' + resultado.img + '">' +                       
                         '</div>';
      });      
    } else {
      resultadoHTML+= `
          <h1>NO HAY CAMISETA<h1/>
      `
    }
    document.getElementById("jerseys-products").innerHTML = resultadoHTML;
  }

