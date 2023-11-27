class ProductManager {
    constructor (title, description, price, thumbnail, code, stock) {
        this.title=title
        this.description=description
        this.price=price
        this.thumbnail=thumbnail
        this.code=code
        this.stock = stock
        this.products = []   
    }


    addProduct = (title, description, price, thumbnail, code, stock) => {
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios!")
        }else{
            if (this.products.some(producto => producto.code === code)) {
                console.log("El campo code ya existe!")
            }else{
            let id
            let idAuto = () => {
                let maxId = this.products.length
                id = (maxId + 1)
                return id
            }
            
            id = idAuto()
            let newProd = {
                id: id,
                title:title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code:code,
                stock: stock,
            }
                return this.products.push(newProd)
    }
    }
    }
    

    getProducts = () => {
        console.table(this.products)
    }

    getProductById = (prodId) => {
        if (!this.products.some(producto => producto.id === prodId)) {
            console.log("El producto buscado no existe!")
        }else{

            let prodIndex = this.products.findIndex(producto => producto.id === prodId)
            return console.table(this.products[prodIndex])
        }
    }  
}

const Manager1 = new ProductManager;

// //Muestra inicial
// Manager1.getProducts()

// //Prueba código repetido
// console.log("Prueba producto repetido")
// Manager1.addProduct("prueba1", "producto de pruebas", 100, "foto.jpg", "abc123", 10)

//Prueba atributo faltante
console.log("Prueba atributo faltante")
Manager1.addProduct("prueba1", "producto de pruebas", 100,  "abz123", 10)

//Añadir productos
Manager1.addProduct("añadido1", "description1", 125, "foto2.jpg", "azz123", 5)
Manager1.addProduct("añadido2", "description2", 250, "foto332.jpg", "a5z123", 15)
Manager1.addProduct("añadido3", "description3", 1225, "foto1222.jpg", "azz1423", 22)

//Mostrar productos añadidos
Manager1.getProducts()

//Buscar producto por ID
console.log("Búsqueda por ID")
Manager1.getProductById(2)

//Búsqueda ID inexistente
console.log("Búsqueda ID inexistente")
Manager1.getProductById(8)