import {dbConnect} from  '../../../utils/mongoose';
import Datos_personales from "../../../../models/datos_personales";
import Datos_empresas from "../../../../models/datos_empresas";
import Datos_vheiculos from "../../../../models/datos_vheiculos";
import Datos_vinculos from "../../../../models/datos_vinculos";
import Datos_iio from "../../../../models/datos_iio";

dbConnect();

export default async function datoHandler(req, res) {

const {method, body, query:{dato}} = req;

switch (method) {
    case "GET":
        try {
            console.log(dato)
            const personas = await Datos_personales.find({$text: {$search: dato}});
            const empresas = await Datos_empresas.find({$text: {$search: dato}});
            const vehiculos = await Datos_vheiculos.find({$text: {$search: dato}});
            const vinculos = await Datos_vinculos.find({$text: {$search: dato}});
            const iio = await Datos_iio.find({$text: {$search: dato}});
            
const resultado = {
    personas,
    empresas,
    vehiculos,
    vinculos,
    iio,
}

            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(500).json({ msg: error.message});
        }
  

       


    }}
