import { Router } from "express";
import { crearProducto, editarProducto, listaProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.route("/productos").get(listaProductos).post(crearProducto);
router.route("/producto/:id").get(obtenerProducto).put(editarProducto);

export default router;
