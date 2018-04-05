'use strict';

//typeof(window) === 'undefined';
//import 'pixi.js';
//import 'pixi.js/dist/pixi';
//let PIXI = require('pixi.js/dist/pixi');
//let PIXI = require('pixi.js');
//import * as PIXI from 'pixi.js'

import isNode from 'detect-node'
if (!isNode) {                                                                                                                                                                                        
    require('pixi.js');
}

import Renderer from 'lance/render/pixi/PixiRenderer';

export default class MyRenderer extends Renderer {

    get ASSETPATHS(){
        return {
            ship: 'assets/ship1.png'
            //,missile: 'assets/shot.png'
            //,bg1: 'assets/space3.png'
            //,bg2: 'assets/space2.png'
            //,bg3: 'assets/clouds2.png'
            //,bg4: 'assets/clouds1.png'
            //,smokeParticle: 'assets/smokeparticle.png'
        };
    }

    constructor(gameEngine, clientEngine) {
        super(gameEngine, clientEngine);
        this.sprites = {};

        console.log(this);
    }

    draw() {
        super.draw();
    }

    addObject(obj) {
        super.addObject(obj);

    }

    removeObject(obj) {
        super.removeObject(obj);

    }

    /*
    draw(t, dt) {
        super.draw(t, dt);

        for (let objId of Object.keys(this.sprites)) {
            if (this.sprites[objId].el) {
                this.sprites[objId].el.style.top = this.gameEngine.world.objects[objId].position.y + 'px';
                this.sprites[objId].el.style.left = this.gameEngine.world.objects[objId].position.x + 'px';
            }
        }
    }

    addSprite(obj, objName) {
        if (objName === 'paddle') objName += obj.playerId;
        this.sprites[obj.id] = {
            el: document.querySelector('.' + objName)
        };
    }
    */

}
