import { Router } from "express";
import { crearProducto, listaProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.route("/productos").get(listaProductos).post(crearProducto);
router.route("/producto/:id").get(obtenerProducto);

export default router;
