import {Schema,model,models, Types} from "mongoose"
const ObjectId = Types.ObjectId;


const empresaSchema = new Schema({
    razon_social: String,
    nombre_comercial: { type: String, required: [true] },
    rif:  { type: String, unique: true },
    url: String,
    socios: [{ type: ObjectId, ref: "datos_personales", description: "relacion", }],
    actividad_economica: String,
    direccion: String,
    

  });

  empresaSchema.index({

    razon_social:  "text",
    nombre_comercial:  "text",
    rif:  "text",
    url:  "text",
    actividad_economica:  "text",
    direccion:  "text",
    


  })

  export default models.empresaModel || model("empresa", empresaSchema )