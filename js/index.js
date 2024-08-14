fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        let card = `<div class="row row-cols-1 row-cols-md-3 g-4">`
        for (let user of data) {
             card += `<div class="col">
                    <div class="card h-100">
                        <img src="${user.image}" class="card-img-top" alt="user">
                        <div class="card-body">
                            <h5 class="card-title">${user.title}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Precio:</strong> ${user. price}</li>
                            </ul>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Descripción:</strong> ${user. description}</li>
                            </ul>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Categoria:</strong> ${user. category}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
        }
            card += "</div>"

    document.getElementById("list-card").innerHTML = card

}) 