import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName : String
})

const categoryModel = mongoose.model('categories', categorySchema)

export default categoryModel