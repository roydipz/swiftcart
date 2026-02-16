const loadCat = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => displayCat(data))
}

// const loadCatWiseProducts = (name) => {
//     const url=`https://fakestoreapi.com/products/category/${(name)}`;
//     console.log(url);
// }

const loadCatWiseProducts = (name) => {
  const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(name)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const productsContainer = document.getElementById('products-container');
      productsContainer.innerHTML = "";   // clear old products
      displayProducts(data);
    });
};


const displayCat = (categories) => {
    const catContainer = document.getElementById("cat-container");
    catContainer.innerHTML = "";

    const btnAll = document.createElement("div");
    btnAll.innerHTML = `<button onclick='loadProducts();' class="btn btn-outline rounded-full btn-primary capitalize">All</button>`;
    catContainer.append(btnAll);

    for (let category of categories) {


        const btnCat = document.createElement("div");
        btnCat.innerHTML = 
        // <button onclick="loadCatWiseProducts('${category}');" class="btn btn-outline rounded-full btn-primary capitalize">${category}</button>
        
        `
            

            <button onclick="loadCatWiseProducts(this.dataset.cat)" data-cat="${category}" class="btn btn-outline rounded-full btn-primary capitalize">${category}</button>


        `;


        catContainer.append(btnCat);
    }


};

const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(output => displayProducts(output))
}

const displayProducts = (products) => {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = "";
    products.forEach((product) => {
        

        const productCard = document.createElement("div");
        productCard.innerHTML = `
            

            <div class="card bg-base-100 border border-base-200 shadow-sm">
                <!-- Product Image -->
                <figure class="">
                    <div class="w-full bg-base-200 p-4">
                        <img src="${product.image}" alt="Product"
                            class="h-44 w-full object-contain" />
                    </div>
                </figure>

                <!-- Card Body -->
                <div class="card-body p-4 pt-3">
                    <!-- Top row: Category + Rating -->
                    <div class="flex items-center justify-between">
                        <span class="badge badge-primary text-xs rounded-full">${product.category}</span>

                        <div class="flex items-center gap-1 text-xs text-base-content/60">
                            <i class="fa-solid fa-star text-[#ffa534]"></i>
                            <span class="font-medium text-base-content/70">${product.rating.rate}</span>
                            <span>(${product.rating.count})</span>
                        </div>
                    </div>

                    <!-- Title -->
                    <h3 class="mt-2 line-clamp-2 text-sm font-semibold">
                        ${product.title}
                    </h3>

                    <!-- Price -->
                    <p class="mt-1 text-base font-bold">$${product.price}</p>

                    <!-- Buttons -->
                    <div class="mt-3 flex items-center gap-2">
                        <a class="btn btn-outline btn-sm flex-1 gap-2">
                            <i class="fa-regular fa-eye"></i>
                            
                            Details
                        </a>

                        <a class="btn btn-primary btn-sm flex-1 gap-2">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Add
                            </a>
                    </div>
                </div>
            </div>



        `;

        productsContainer.append(productCard);

    })
}




loadCat();
