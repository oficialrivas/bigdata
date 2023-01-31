import {dbConnect} from  '../utils/mongoose';
import datos_vinculos from "../../models/datos_vinculos";

dbConnect();

export default async function handler(req, res) {

  const {method,body} = req

  switch (method) {
    case "GET":
      try {
        const vinculo = await datos_vinculos.find();
        return res.status(200).json(vinculo);
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
     
    case "POST":
      try {
        const newVinculo = new datos_vinculos(body);
        const savedVinculo = await newVinculo.save();
        return res.status(201).json(savedVinculo);
      } catch (error) { 
      return res.status(500).json({error: error.message});
      }


    default:
      return res.status(400).json({msg: "this method is not supported"})

  }
  
}
