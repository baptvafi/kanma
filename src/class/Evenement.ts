import type { Ticket } from "./ticket";


export class Evenement{

    constructor(){
    }

    title!:string;
    description!:string;
    tickets: Ticket[] = [];

    none() : bool{
        let b = 1;
        this.tickets.forEach(element => {
            console.log("la ", element.place.value)
            if(element.place.value > 0){
                b = 0;
            }
        });
        return b;
    }
}