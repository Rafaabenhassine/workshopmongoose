const express=require("express")
const { addProduct, deleteProduct, getById, getByIdAndEdit, getProducts } = require("../Controllers/productControllers")



//require router
const router=express.Router()



//add new product
router.post('/add_product',addProduct)

//get all products
router.get('/get_products',getProducts)

//get product by Id
router.get('/get_byId/:_Id',getById)

//delete product
router.delete('/deleteproduct/:_Id',deleteProduct)

//get by Id and edit
router.put('/edit/:_id',getByIdAndEdit)

module.exports=router