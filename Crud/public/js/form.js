let productImg = document.getElementById("product_image")
let productName = document.getElementById("product_name")
let productPrice = document.getElementById("product_price")
let productdesc = document.getElementById("product_description")


async function submitData(event) {
    event.preventDefault()

    const body_data = {
        image: productImg.value,
        title: productName.value,
        price: productPrice.value,
        description: productdesc.value,
    }

    await fetch(`http://localhost:8000/create_product`, {
        method: "POST",
        body: JSON.stringify(body_data),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
        .then((res) => res.json())  // Call json() method correctly
        .then((data) => console.log(data)) // Log the response data (new product)
        .catch((err) => console.log(err))

}

