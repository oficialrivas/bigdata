import {dbConnect} from  '../utils/mongoose';
import datos_iio from "../../models/datos_iio";

dbConnect();

export default async function handler(req, res) {

  const {method,body} = req

  switch (method) {
    case "GET":
      try {
        const iio = await datos_iio.find();
        return res.status(200).json(iio);
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
     
    case "POST":
      try {
        const newiio = new datos_iio(body);
        const savediio = await newiio.save();
        return res.status(201).json(savediio);
      } catch (error) { 
      return res.status(500).json({error: error.message});
      }


    default:
      return res.status(400).json({msg: "metodo no soportado"})

  }
  
}