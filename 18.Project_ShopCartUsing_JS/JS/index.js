console.log("Index js is loaded");

async function fetchCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    return data;
}

async function populateCategories(){
    const categories = await fetchCategories();
    // const loaderBackdrop = document.getElementById("loader-backdrop");
    // loaderBackdrop.style.display = 'none';
    removeLoader();
    const categoryList = document.getElementById("categoryList")
    categories.forEach(category => {
        const categoryHolder = document.createElement("div");
        const categoryLink = document.createElement("a");
        categoryLink.href = `productList.html?category=${category}`;
        categoryLink.textContent = category.toUpperCase();
        categoryHolder.classList.add("category-item", "d-flex", "align-items-center", "justify-content-center");
        categoryHolder.appendChild(categoryLink);
        categoryList.appendChild(categoryHolder);
    });
}
populateCategories();