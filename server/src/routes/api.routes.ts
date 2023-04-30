/**
 * Aca solo importamos nuestro archivo api.controller.ts
 * ya que ahi se estan controlando todos los endpoints y 
 * no se necesita de estar importando de clase en clase.
 */


import controller from '../controller/api.controller'
import express from 'express'

/**
 * Creamos nuestro enrutador
 */
const router = express.Router();

/**
 * Ya no importamos la clase ni el metodo ping 
 * porque ya esta adentro de nuestro archivo api.controller
 * y ya solo se extrae la propiedad que es el ping.
 */
router.get('/ping', controller.ping)
//router.post('/parse', controller.parse)
router.post('/parse2', controller.parse2)

export default router;