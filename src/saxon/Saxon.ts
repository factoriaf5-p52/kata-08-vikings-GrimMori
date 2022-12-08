import { Soldier } from "../soldier/Soldier";

export class Saxon extends Soldier {
    constructor(healthArg: number, strengthArg: number) {
        super(healthArg, strengthArg);
    }
    receiveDamage(damage: number){
        super.receiveDamage(damage);
        if(this.health <= 0){
            return "A Saxon has died in combat";
        }else{
            return `A Saxon has received ${damage} points of damage`
        }
    }
}