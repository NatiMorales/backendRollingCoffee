import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, listaProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.route("/productos").get(listaProductos).post(crearProducto);
router.route("/producto/:id").get(obtenerProducto).put(editarProducto).delete(borrarProducto);

export default router;
