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
        this.vikingArmy.push(viking)
    };
    addSaxon(saxon: Saxon){
        this.saxonArmy.push(saxon)
    };
    vikingAttack(){};
    saxonAttack(){};
    showStatus(){};
}