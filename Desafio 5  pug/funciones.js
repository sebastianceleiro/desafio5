import productos from './productos.js'

class listadoProductos {

    filtrado(req,res) {
        const filtrado = productos.filter(producto => producto.id == req.params.id) 
        if (filtrado.length == 0) { res.send ( {error: "producto no encontrado"}) } else {

        res.render("main", {filtrado})}
    }

    nuevoIngreso(req,res) {
        const nuevoProducto = {
            title: req.body.title,
            price: req.body.price,
            thumbnail: req.body.thumbnail,
            id: productos.length+1
        }
        productos.push(nuevoProducto)
        res.redirect('../index.html');
    }

    modificar(req,res) {
        console.log ("modificando productos")
        if (req.params.id <= productos.length+1) {
        productos[parseInt(req.params.id)-1] = req.body 
        res.send (req.body)} else { res.send ({error: "producto no encontrado"})} ;
    }

    borrar(req,res) {
        console.log ("borrando productos")
        if (req.params.id <= productos.length) {
        productos.splice(req.params.id-1,1)
        res.send (productos)} else { res.send ({error: "producto no encontrado"})} ;
    }
}

export default listadoProductos ;