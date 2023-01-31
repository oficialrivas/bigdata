
import {Schema,model,models, Types} from "mongoose"
const ObjectId = Types.ObjectId;

const datoSchema = new Schema({
    codigo:   { type: String, unique: true },
    nombre:  { type: String, required: [true] },
    apellido: String,
    cedula:  { type: String, required: [true], unique: true },
    pasaporte: String,
    correo: String,
    nacionalidad: String,
    civil: String,
    profesion: String,
    telefonos: String,
    diplomatico: String,
    facebook: String,
    instagram: String,
    twitter: String,
    migratorios: String,
    entorno: String,
    direccion: String,
    ciudad: String,
    estado: String,
    postal: String,
    empresas: [{ type: ObjectId, ref: "datos_empresas", description: "socio", }],
    iio: [{ type: ObjectId, ref: "datos_iio", description: "relacionado", }],
    vehiculos: [{ type: ObjectId, ref: "datos_vheiculos", description: "propietario", }],
    vinculos: [{ type: ObjectId, ref: "datos_vinculos", description: "relacion", }],
 
  });

  datoSchema.index({

    codigo:   "text",
    nombre:  "text",
    apellido: "text",
    cedula:  "text",
    pasaporte: "text",
    correo: "text",
    nacionalidad: "text",
    civil: "text",
    profesion: "text",
    telefonos: "text",
    diplomatico: "text",
    facebook: "text",
    instagram: "text",
    twitter: "text",
    migratorios: "text",
    entorno: "text",
    direccion: "text",
    ciudad: "text",
    estado: "text",
    postal: "text",
  })

  
  export default models.datoModel || model("dato", datoSchema )

