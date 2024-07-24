console.log(axios);
//API index

window.onload = function(e) {
    getDataIndexApi();
}



async function getDataIndexApi() {
    try{
        let response = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method :'GET',
            responseType: 'json'
        });
        console.log(response.data);
    rennderProduct(response.data);        
    }catch(err) {
        console.log(err);
    }    
}



window.rennderProduct = function (arr){
    let htmlTring = '';
    for (let item of arr){
        htmlTring=`<div class="product">
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto;">
                <p><strong>Description:</strong> ${product.shortDescription}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Available Sizes:</strong> ${sizes.join(', ')}</p>
                <p><strong>Categories:</strong> ${categories.map(c => c.category).join(', ')}</p>
                <p><strong>Related Products:</strong> ${relatedProducts.join(', ')}</p>
            </div>`
    }
    document.querySelector('.card').onclick = async function(e){
        getDataIndexApi(rennderProduct());
    }   
}   
