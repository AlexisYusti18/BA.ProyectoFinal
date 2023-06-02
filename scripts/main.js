let card= document.getElementById("products-card")

products.map((product)=>{
    card.innerHTML+=
        `
        <div class="card">
            <div class="card-img">
                <img class="img-newproducts" src=${product.img}></img>
            </div>
            <div class="card-body">
                <h3>${product.name}</h3>
                <p>Precio:$${product.price * 490}</p> 
            </div>
        </div>
        `
        //MULTIPLICO EL PRECIO POR EL VALOR DEL DOLAR ACTUAL. DESDE EL ARCHIVO JS EL PRECIO ES EN DOLARES/EUROS
})