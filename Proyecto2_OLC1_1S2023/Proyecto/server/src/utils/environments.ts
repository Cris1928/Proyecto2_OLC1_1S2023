/**
 * EN LA CARPETA config ES DONDE VAMOS A MANEJAR
 * LOS PUERTOS QUE SE VAN A UTILIZAR
 */

import config from "config";

export const PORT = config.get('PORT')