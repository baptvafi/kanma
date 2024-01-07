import { ref, type Ref } from "vue"

export class Ticket{

    constructor(n : String, d : Date, p : Number, i : String){
        this.nom = n;
        this._date = d;
        this.prix = p;
        this._id = i;
    }

    private _id!: String;
    private _date!: Date;

    public get date_String() : String{
        let jour = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
        let mois = ["Jan", "Fév", "Mars", "Avr", "Mais", "Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Déc"]
        return jour[this._date.getDay()] + ' ' + this._date.getDate() + ' ' + mois[this._date.getMonth()] + ' ' + this._date.getFullYear() + 
        " à " + this._date.getHours() + ':' + (this._date.getMinutes() > 9 ? this._date.getMinutes(): "0"+this._date.getMinutes());
    }

    public get id() : String{
        return this._id;
    }


    nom!: String;
    prix!: Number;
    description?: String;
    place : Ref<number> = ref(0); // Le nombre de place prise
}