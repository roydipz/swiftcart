const loadCat = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => displayCat(data));
};

const removeActive = () => {
    const catButtons = document.querySelectorAll(".cat-btn");
    catButtons.forEach(btn => btn.classList.remove("active"));
};

const loadCatWiseProducts = (name) => {
    const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(name)}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive();
            const productsContainer = document.getElementById("products-container");
            productsContainer.innerHTML = "";

            const clickedBtn = document.getElementById(`${name}`);
            clickedBtn.classList.add("active");

            displayProducts(data);
        });
};

const displayCat = (categories) => {
    const catContainer = document.getElementById("cat-container");
    catContainer.innerHTML = "";

    const btnAll = document.createElement("div");
    btnAll.innerHTML = `<button onclick='loadProducts();' id="all-btn" class="btn btn-outline rounded-full btn-primary capitalize cat-btn">All</button>`;
    catContainer.append(btnAll);

    for (let category of categories) {
        const btnCat = document.createElement("div");
        btnCat.innerHTML = `
      <button id="${category}" onclick="loadCatWiseProducts(this.dataset.cat)" data-cat="${category}" class="btn btn-outline rounded-full btn-primary capitalize cat-btn">${category}</button>
    `;
        catContainer.append(btnCat);
    }
};

const showProductDetail = (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayProductDetails(data));
};

const displayProductDetails = (pro_details) => {
    const detailsBox = document.getElementById("details-container");
    detailsBox.innerHTML = `
    <h3 class="text-lg font-bold">${pro_details.title}</h3>
    <p class="py-4"><b>Description : </b> ${pro_details.description}</p>
    <p><b>Price : </b> $${pro_details.price}</p>
    <p><b>Rating : </b> ${pro_details.rating.rate} (${pro_details.rating.count})</p>
    <br>
    <a class="btn btn-primary btn-sm flex-1 gap-2">
      <i class="fa-solid fa-cart-shopping"></i>
      Add to Cart
    </a>
  `;

    document.getElementById("product_modal").showModal();
};

const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(output => {
            removeActive();
            document.getElementById("all-btn").classList.add("active");
            displayProducts(output);
        });
};

const displayProducts = (products) => {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.innerHTML = `
      <div class="card bg-base-100 border border-base-200 shadow-sm">
        <figure class="">
          <div class="w-full bg-base-200 p-4">
            <img src="${product.image}" alt="Product" class="h-44 w-full object-contain" />
          </div>
        </figure>

        <div class="card-body p-4 pt-3">
          <div class="flex items-center justify-between">
            <span class="badge badge-primary text-xs rounded-full">${product.category}</span>

            <div class="flex items-center gap-1 text-xs text-base-content/60">
              <i class="fa-solid fa-star text-[#ffa534]"></i>
              <span class="font-medium text-base-content/70">${product.rating.rate}</span>
              <span>(${product.rating.count})</span>
            </div>
          </div>

          <h3 class="mt-2 line-clamp-2 text-sm font-semibold">
            ${product.title}
          </h3>

          <p class="mt-1 text-base font-bold">$${product.price}</p>

          <div onclick="showProductDetail(${product.id})" class="mt-3 flex items-center gap-2">
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
    });
};

const loadTrending = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(products => {
            const top4 = products.slice(0, 4);
            displayTrending(top4);
        });
};

const displayTrending = (products) => {
    const topRatedContainer = document.querySelector(".top-rated");
    if (!topRatedContainer) return;

    topRatedContainer.innerHTML = "";

    products.forEach((product) => {
        const card = document.createElement("div");
        card.innerHTML = `
      <div class="card bg-base-100 border border-base-200 shadow-sm">
        <figure>
          <div class="w-full bg-base-200 p-4">
            <img src="${product.image}" alt="Product" class="h-44 w-full object-contain" />
          </div>
        </figure>

        <div class="card-body p-4 pt-3">
          <div class="flex items-center justify-between">
            <span class="badge badge-primary text-xs rounded-full capitalize">${product.category}</span>

            <div class="flex items-center gap-1 text-xs text-base-content/60">
              <i class="fa-solid fa-star text-[#ffa534]"></i>
              <span class="font-medium text-base-content/70">${product.rating.rate}</span>
              <span>(${product.rating.count})</span>
            </div>
          </div>

          <h3 class="mt-2 line-clamp-2 text-sm font-semibold">
            ${product.title}
          </h3>

          <p class="mt-1 text-base font-bold">$${product.price}</p>

          <div class="mt-3 flex items-center gap-2">
            <a onclick="showProductDetail(${product.id})" class="btn btn-outline btn-sm flex-1 gap-2">
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
        topRatedContainer.append(card);
    });
};

loadTrending();
loadCat();
loadProducts();
