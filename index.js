const products = document.querySelector('.products');
const loading = document.querySelector('.products h3');

var mockData = fetch('https://fakestoreapi.com/products')
.then(blob => blob.json())
.then(data => data.forEach(item => {
            var product = document.createElement('div');
            loading.innerHTML='';
            product.classList.add('product');
            product.innerHTML = 
            `
                <img src="${item.image}" alt="">
                <div class="product-information">
                    <div class="name">${item.title}</div>
                    <div class="price">${item.price}</div>
                </div>
            `

            products.appendChild(product);
    }
));

const searchInput = document.querySelector('.search input');

searchInput.addEventListener('input', function() {
    let textValue = searchInput.value.trim();
    const itemList = document.querySelectorAll('.product');
    itemList.forEach(item => {
        if (item.innerText.toLowerCase().includes(textValue)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
})


