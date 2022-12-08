import { Soldier } from "../soldier/Soldier";

export class Viking extends Soldier {
    name: string;
    constructor(nameArg: string, healthArg: number, strengthArg: number) {
        super(healthArg, strengthArg);
        this.name = nameArg;
    }
    receiveDamage(damage: number){
        super.receiveDamage(damage);
        if(this.health <= 0){
            return `${this.name} has died in act of combat`
        }else{
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    };
}