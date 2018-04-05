'use strict';
//import 'pixi.js';

//let PIXI = null;
//let PIXI = require('pixi.js');
//let PixiParticles = null;

class ShipActor{

    constructor(renderer){
        
        //PIXI = require('pixi.js');
        //PixiParticles = require('pixi-particles');
        this.gameEngine = renderer.gameEngine;
        //this.backLayer = renderer.layer1;
        this.sprite = new PIXI.Container();
        this.shipContainerSprite = new PIXI.Container();

        this.shipSprite = new PIXI.Sprite(PIXI.loader.resources.ship.texture);

        // keep a reference to the actor from the sprite
        this.sprite.actor = this;

        this.shipSprite.anchor.set(0.5, 0.5);
        this.shipSprite.width = 50;
        this.shipSprite.height = 45;

        this.addThrustEmitter();
        this.sprite.addChild(this.shipContainerSprite);
        this.shipContainerSprite.addChild(this.shipSprite);
        
    }
}