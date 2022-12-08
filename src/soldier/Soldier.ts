export class Soldier {
    strength: number;
    health: number;
    constructor(healthArg: number, strengthArg: number) {
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack(){ return this.strength }
    receiveDamage(damage: number){ this.health -= damage }
    
}