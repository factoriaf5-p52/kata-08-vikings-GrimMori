import { Viking } from "../viking/Viking";
import { Saxon } from "../saxon/Saxon";

export class War {
    vikingArmy: Viking[];
    saxonArmy : Saxon[];
    constructor(){
        this.vikingArmy = new Array<Viking>;
        this.saxonArmy =  new Array<Saxon>;
    }

    addViking(viking: Viking){
        this.vikingArmy.push(viking);
    };

    addSaxon(saxon: Saxon){
        this.saxonArmy.push(saxon);
    };

    vikingAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        if(randomSaxon.health - randomViking.strength <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
        return randomSaxon.receiveDamage(randomViking.strength);
    };

    saxonAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        if(randomViking.health - randomSaxon.strength <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return randomViking.receiveDamage(randomSaxon.strength);
    };
    
    showStatus(){
        if(this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!"
        }
        else if( this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survive another day..."
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    };
}