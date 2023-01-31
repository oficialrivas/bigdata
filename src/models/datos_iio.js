import {Schema,model,models, Types} from "mongoose"
const ObjectId = Types.ObjectId;

const iioSchema = new Schema({
    iio: {type: String, required: [true], unique: true},
    foto: String,
    tie: String,
    modalidad: String,
    parroquia: String,
    ciudad: String,
    municipio: String,
    estado: String,
    pais: String,
    relacion: [{ type: ObjectId, ref: "datos_personales", description: "relacion", }],

})

iioSchema.index({

    iio: "text",
    foto: "text",
    tie: "text",
    modalidad: "text",
    parroquia: "text",
    ciudad: "text",
    municipio: "text",
    estado: "text",
    pais: "text",
})

export default models.iioModel || model("iio", iioSchema )