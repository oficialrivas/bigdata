import {dbConnect} from  '../utils/mongoose';
import datos_personales from "../../models/datos_personales";

dbConnect();

export default async function handler(req, res) {

  const {method,body} = req

  switch (method) {
    case "GET":
      try {
        const tasks = await datos_personales.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
     
    case "POST":
      try {
        const newDato = new datos_personales(body);
        const savedDato = await newDato.save();
        return res.status(201).json(savedDato);
      } catch (error) { 
      return res.status(500).json({error: error.message});
      }


    default:
      return res.status(400).json({msg: "this method is not supported"})

  }
  
}
