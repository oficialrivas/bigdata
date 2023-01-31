import {dbConnect} from  '../../utils/mongoose';
import Datos_personales from "../../../models/datos_personales";

dbConnect();

export default async function datoHandler(req, res) {

const {method, body, query:{id}} = req;

switch (method) {
    case "GET":
        try {
            const dato = await Datos_personales.findById(id);
            if (!dato) return res.status(404).json({ msg: "Persona no encontrada"});
            return res.status(200).json(dato);
        } catch (error) {
            return res.status(500).json({ msg: error.message});
        }
  

    case "PUT":
        try {
            const dato = await Datos_personales.findByIdAndUpdate(id, body, {
                new: true,
                runValidators: true,
            });
            if (!dato) return res.status(404).json({msg: "persona no encontrada"});
            return res.status(200).json(dato);

        } catch (error){  
            return res.status(500).json({msg: error.message});

        }
    
    case "DELETE":
        try {
            const deletedato = await Datos_personales.findByIdAndDelete(id);
            if (!deletedato) 
                return res.status(404).json({msg: "No existe"});
                return res.status(204).json();
            } catch (error) {
                return res.status(400).json({msg: error.message});
            }
            default:
                return res.status(400).json({msg: "metodo no soportado" });
        }

      


    }
