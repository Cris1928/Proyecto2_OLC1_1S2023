import * as health from './health/ping'
//import * as parser from './parser/parser'
import * as parser2 from './parser/parser2'


/**
 * ...health: se llama express operator, lo que hace 
 * es de que si en ping contenemos 50 endpoint lo
 * que hace es convertir toda la clase en un json y no
 * tengo que venir aqui a enumerar cada endpoint sino 
 * que él mismo lo hace.
 */
export default {
    ...health,
    //...parser,
    ...parser2
}