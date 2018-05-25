module.exports = {

    getInv: (req,res ) => {
    const db = req.app.get('db');
    // console.log(req.body)
        
        db.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send())

},

    addProduct: (req,res) => {
        const db = req.app.get('db');
        const {itemInput, priceInput, quantityInput}=req.body

        db.add_product([itemInput,priceInput,quantityInput])
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send())

    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.delete_product([id])
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send())
    }





}