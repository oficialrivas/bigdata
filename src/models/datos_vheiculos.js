import {Schema,model,models, Types} from "mongoose"
const ObjectId = Types.ObjectId;

const vehiculoSchema = new Schema({
    codigo:  { type: String, unique: true },
    modelo: String,
    marca: String,
    url: String,
    color: String,
    matricula:  { type: String, required: [true], unique: true },
    relacion: [{ type: ObjectId, ref: "datos_personales", description: "relacion", }],

    });

    vehiculoSchema.index({
      codigo:  "text",
      modelo: "text",
      marca: "text",
      url: "text",
      color: "text",
      matricula:  "text",


    })

  export default models.vehiculoModel || model("vehiculo", vehiculoSchema )
