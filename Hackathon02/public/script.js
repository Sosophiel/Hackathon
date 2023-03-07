const getProducts = async () =>{
        let response = await fetch(`http://localhost:5002/api/products`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }         
        })
        let json = await response.json()

        const html = json.map(x =>{
            return `<option value="${x.id}">${x.name}</option>`
        })
        document.getElementById('products').innerHTML = html.join('')
}


const addProduct = async (id) => {

    try {

        const form = document.getElementById("form")
        const formData = new FormData(form)
        const data = {
            id_receiver: id,
            quantity : formData.get('quantity'),
            id_product: formData.get('products'),
        }

        let response = await fetch(`http://localhost:5002/api/products/add`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });




    } catch (error) {
        console.log(error);
    }
        
}


