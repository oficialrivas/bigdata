import {dbConnect} from  '../utils/mongoose';
import datos_empresas from "../../models/datos_empresas";

dbConnect();

export default async function handler(req, res) {

  const {method,body} = req

  switch (method) {
    case "GET":
      try {
        const empresa = await datos_empresas.find();
        return res.status(200).json(empresa);
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
     
    case "POST":
      try {
        const newEmpresa = new datos_empresas(body);
        const savedEmpresa = await newEmpresa.save();
        return res.status(201).json(savedEmpresa);
      } catch (error) { 
      return res.status(500).json({error: error.message});
      }


    default:
      return res.status(400).json({msg: "this method is not supported"})

  }
  
}
