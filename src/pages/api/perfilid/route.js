import express from "express";
import path from "path";
import exphbs from "express-handlebars";
import multer from "multer";
import fs from "fs-extra";
import xlsxFile from "read-excel-file/node";

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("file"));
// ROUTES

app.post("/process", async (req, res) => {
  const data = await xlsxFile(req.file.path);
  let empleados = [];
  for (var i in data) {
    if (i != 0) {
      var empleado = {
        nombre: data[i][0],
        cargo: data[i][1],
        salario: data[i][2],
      };
      empleados.push(empleado); 
    }
  }
  await fs.remove(req.file.path);
  res.render("success", { empleados });
});
app.use(express.static(path.join(__dirname,'public')))
export default app;


