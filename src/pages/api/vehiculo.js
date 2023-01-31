import {dbConnect} from  '../utils/mongoose';
import datos_vheiculos from "../../models/datos_vheiculos";

dbConnect();

export default async function handler(req, res) {

  const {method,body} = req

  switch (method) {
    case "GET":
      try {
        const vehiculo = await datos_vheiculos.find();
        return res.status(200).json(vehiculo);
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
     
    case "POST":
      try {
        const newVehiculo = new datos_vheiculos(body);
        const savedVehiculo = await newVehiculo.save();
        return res.status(201).json(savedVehiculo);
      } catch (error) { 
      return res.status(500).json({error: error.message});
      }


    default:
      return res.status(400).json({msg: "this method is not supported"})

  }
  
}
