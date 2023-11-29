const productsCards = document.getElementById('products');
const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const img = document.getElementById('img');
const price = document.getElementById('price');
const size = document.getElementById('size');
const deleteButton = document.querySelectorAll('.delete-product-button');
const container = document.querySelector('.container');

const url = 'https://65572f1fbd4bcef8b612350d.mockapi.io/shoestore/'


const fetchedProducts = async () => {
    try {
        const result = await fetch(url+'/product');
        if (!result.ok) {
            throw new Error(`Failed to fetch data. Status: ${result.status}`);
        }

        const res = await result.json();
        console.log(res);
        renderProducts(res)
    } catch (err) {
        console.error(err);
    }
};

fetchedProducts();

const renderProducts = (products)=>{
    productsCards.innerHTML =''
    if(products){
        products.forEach(product =>{
            const productCard = document.createElement('div')
            productCard.classList.add('productCard');
            productsCards.appendChild(productCard)
            
            const productImg = document.createElement('img');
            productImg.classList.add('productImg');
            productImg.src = product.img;
            productImg.alt = product.name;
            productCard.appendChild(productImg)

            const productName = document.createElement('h2')
            productName.textContent = product.name
            productCard.appendChild(productName)

            const productPrice = document.createElement('p')
            productPrice.textContent = `Price: ${product.price}`
            productCard.appendChild(productPrice)

            const productSize = document.createElement('p')
            productSize.textContent = `Size: ${product.size}`
            productCard.appendChild(productSize)
            
            const editProduct = document.createElement('button')
            editProduct.classList.add('edit-product-button');
            editProduct.id = product.id;
            editProduct.style.cursor = 'pointer';
            editProduct.textContent = 'edit product'
            productCard.appendChild(editProduct)
            
            const deleteProduct = document.createElement('button')
            deleteProduct.classList.add('delete-product-button');
            deleteProduct.id = product.id;
            deleteProduct.style.cursor = 'pointer';
            deleteProduct.textContent = 'delete product'
            productCard.appendChild(deleteProduct)
            
            deleteProduct.addEventListener('click', () => deleteFunction(deleteProduct.id) )
            editProduct.addEventListener('click', () => editFunction(product) )
})
    }}
renderProducts()


userForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
        const addProduct = {
            name: nameInput.value,
            img:img.value,
            price: price.value,
            size:size.value
        }
    console.log('submitted');
        const response = await fetch(url+'/shoes', {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addProduct),
        });
        console.log(response.status);
        const result = await response.json();
        console.log(result);
        fetchedProducts()
    } catch (error) {
        console.log(error);
    }
})



const deleteFunction = async(id)=>{
    console.log(id);
    try {
        const response = await fetch(url+`/shoes/${id}`, {
            method: "DELETE", // or 'PUT'
            });
          console.log(response.status);
          const result = await response.json();
          console.log(result);
          fetchedProducts()
             } catch (error) {
        console.log(error);
    }
}

const editFunction = async (product)=>{
    const existingForm = document.getElementById('editForm');
    if(existingForm){
        existingForm.remove()
    }
    let editForm = document.createElement('form')
    editForm.id = 'editForm'
    let title = document.createElement('h1');
    title.textContent = `Edit ${product.name}`
    
    editForm.classList.add('editForm')
    let closeForm = document.createElement('h1')
    closeForm.textContent = 'x';
    closeForm.classList.add('closeForm')
    let editNameInput = document.createElement("input");
    let editImgInput = document.createElement("input");
    let editPriceInput = document.createElement("input");
    let editSizeInput = document.createElement("input");
    let submitEdit = document.createElement("input");
    editNameInput.value = product.name;
    editImgInput.value= product.img;
    editPriceInput.value = product.price;
    editSizeInput.value = product.size;
    submitEdit.type = "submit";
    submitEdit.textContent="submit editing"
    editForm.appendChild(closeForm)
    editForm.appendChild(title)
    editForm.appendChild(editNameInput)
    editForm.appendChild(editImgInput)
    editForm.appendChild(editPriceInput)
    editForm.appendChild(editSizeInput)
    editForm.appendChild(submitEdit)
    document.body.appendChild(editForm)

    

    editForm.addEventListener("submit", async (e)=>{
        e.preventDefault()
        const editedProduct = {...product,
            name : editNameInput.value,
            img: editImgInput.value,
            price : editPriceInput.value,
            size : editSizeInput.value}
      await  editProduct(editedProduct)
      editForm.remove()
        })

        closeForm.addEventListener('click', ()=>{
            editForm.remove()
        })
}

const editProduct = async (product)=>{
    console.log(product)
    try{
    const response = await fetch(url+`/shoes/${product.id}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      console.log(response.status);
      const result = await response.json();
      console.log(result);
      fetchedProducts()
  } catch (error) {
      console.log(error);
  }
}



// Headers:

// Headers are metadata associated with the request or response. They provide additional information
//  about the request or the data being sent/received.
// In this case, we are setting a header with the key "Content-Type" and the value "application/json".
//  This header indicates to the server that the content of the request body is in JSON format.
// Body:

// The body property is used to specify the data that will be sent with the request.
// JSON.stringify(addProduct) is a method that converts a JavaScript object (addProduct in this case)
//  into a JSON-formatted string. This is necessary because the server expects the data to be in JSON format.
// The resulting JSON string is then included as the body of the HTTP request.
// Putting it together, this part of the code is telling the server that the data being sent is in
//  JSON format ("Content-Type": "application/json"), and the actual data is the serialized JSON representation of
//  the addProduct object (JSON.stringify(addProduct)).

// In simpler terms, it's like putting your data in a specific envelope (JSON format) and telling the recipient (server)
//  how to open and understand that envelope (via the "Content-Type": "application/json" header)