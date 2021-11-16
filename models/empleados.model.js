const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const EmpleadosSchema = new Schema({    
    nombre:{type: String, required: true, max:40},     
    apellido_p:{type: String, required: true, max:20},    
    apellido_m:{type: String, required: false, max:20},
    telefono:{type: String, required: true, max:15},
    mail:{type: String, required: false, max:70},
    direccion:{type: String, required: false, max:150},
});

module.exports = mongoose.model("empleados", EmpleadosSchema);