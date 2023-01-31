import {Schema,model,models, Types} from "mongoose"
const ObjectId = Types.ObjectId;

const vinculoSchema = new Schema({
  codigo:  { type: String, unique: true },
  nombre: { type: String, required: [true] },
    apellido: String,
    cedula:  { type: String, required: [true], unique: true },
    url: String,
    pasaporte: String,
    correo: String,
    nacionalidad: String,
    civil: String,
    profesion: String,
    telefonos: String,
    cuerpo_diplomatico: String,
    facebook: String,
    instagram: String,
    twitter: String,
    migratorios: String,
    entorno: String,
    direccion: String,
    ciudad: String,
    estado: String,
    postal: String,
    relacion: [{ type: ObjectId, ref: "datos_personales", description: "relacion", }],
    

  });

  vinculoSchema.index({

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

  export default models.vinculoModel || model("vinculo", vinculoSchema )