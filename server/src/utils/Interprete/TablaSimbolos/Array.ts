import Simbolo from "./Simbolo";


export class Array{
    public values : Simbolo [];

    constructor(){
        this.values = [];
    }

    public getAttribute(index: number){
        return this.values[index];
    }

    public setAttribute(index: number, value: Simbolo){
        this.values[index] = value;
    }
}