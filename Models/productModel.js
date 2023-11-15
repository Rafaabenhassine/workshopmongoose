const mongoose=require ("mongoose")

//create schema   ( on l'a divisé sur deux étapes)
const schema=mongoose.Schema

const productSchema=new schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    photo:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
//export  (product remplace product schema)
module.exports = mongoose.model("product",productSchema)
