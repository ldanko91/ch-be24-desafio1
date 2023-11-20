let Productos = [{id:1, title:"prueba1", description:"producto de pruebas", price:100, thumbnail:"foto.jpg", code:"abc123", stock:10},{id:2, title:"prueba2", description:"producto de pruebas 2", price:110, thumbnail:"foto.jpg", code:"abc1234", stock:11}];
class ProductManager {
    constructor (title, description, price, thumbnail, code, stock) {
        this.title=title
        this.description=description
        this.price=price
        this.thumbnail=thumbnail
        this.code=code
        this.stock=stock   
    }


    addProduct = (title, description, price, thumbnail, code, stock) => {
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios!")
        }else{
            if(Productos.some(producto => producto.code === code )){
                console.log("El campo code ya existe!")
            }else{
            let id
            let idAuto = () => {
                let maxId = Productos.length
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
            return Productos.push(newProd)
    }
    }
    }
    

    getProducts = () => {
        console.table(Productos)
    }

    getProductById = (prodId) => {
        if(!Productos.some(producto => producto.id === prodId )){
            console.log("El producto buscado no existe!")
        }else{

        let prodIndex = Productos.findIndex(producto => producto.id === prodId)
        return console.table(Productos[prodIndex])
        }
    }  
}

const Manager1 = new ProductManager;

//Muestra inicial
Manager1.getProducts()

//Prueba código repetido
console.log("Prueba producto repetido")
Manager1.addProduct("prueba1", "producto de pruebas", 100, "foto.jpg", "abc123", 10)

//Prueba atributo faltante
console.log("Prueba atributo faltante")
Manager1.addProduct("prueba1", "producto de pruebas", 100,  "abz123", 10)

//Añadir productos
Manager1.addProduct("añadido1", "description1", 125, "foto2.jpg", "azz123", 5)
Manager1.addProduct("añadido2", "description2", 250, "foto332.jpg", "a5z123", 15)

//Mostrar productos añadidos
Manager1.getProducts()

//Buscar producto por ID
console.log("Búsqueda por ID")
Manager1.getProductById(2)

//Búsqueda ID inexistente
console.log("Búsqueda ID inexistente")
Manager1.getProductById(8)