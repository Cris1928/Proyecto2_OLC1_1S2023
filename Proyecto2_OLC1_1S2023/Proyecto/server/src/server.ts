import dotenv from 'dotenv'
import { application } from 'express'
import { PORT } from './utils/environments'
import appServer from './app'

dotenv.config();

/**
 * Para obtener la promesa debemos de usar un .then
 * para que cuando termine decirle retorna una variable
 * del tipo de aplicacion (app: typeof application) y en 
 * base a esta app yo necesito que hagas algo ( => {} )
 */
appServer().then((app: typeof application) => {

    /**
     * Necesitamos que cuando ya este activo empiece a escuchar
     * y le vamos a decir que nos de señales de vida :v
     */
    app.listen(PORT, () =>{
        console.log(`Server ready on PORT ${PORT} ${process.env.NODE_ENV}`)
    })


})

/**
 * Ahora necesitamos que nos otorge las promesas y utilizamos
 * un .catch para decirle que mientras se estaba instanciando 
 * nuestro servidor necesito que me lo hagas saber.
 */
.catch((err: Partial<Error> & unknown) => console.log(err));
