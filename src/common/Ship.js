/*

*/

//import Serializer from 'lance/serialize/Serializer';
import DynamicObject from 'lance/serialize/DynamicObject';

import Renderer from '../client/MyRenderer';
import ShipActor from '../client/ShipActor';
//import '../client/ShipActor';

export default class Ship extends DynamicObject {

    constructor(gameEngine, options, props){
        super(gameEngine, options, props);
        this.showThrust = 0;
    }

    get maxSpeed() { return 3.0; }
    
    onAddToWorld(gameEngine) {
        let renderer = Renderer.getInstance();
        if (renderer) {
            console.log("ship build renderer");
            console.log(renderer);

            //console.log(ShipActor());

            let shipActor = new ShipActor(renderer);
            /*
            let sprite = shipActor.sprite;
            renderer.sprites[this.id] = sprite;
            sprite.id = this.id;
            sprite.position.set(this.position.x, this.position.y);
            console.log(renderer);
            //renderer.layer2.addChild(sprite);

            if (gameEngine.isOwnedByPlayer(this)) {
                renderer.addPlayerShip(sprite);
            } else {
                renderer.addOffscreenIndicator(this);
            }
            */
        }
    }
}