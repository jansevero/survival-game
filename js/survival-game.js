//import Phaser from "phaser";
import MainScene from "./MainScene.js";
//import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin";

const config = {
  width:512,
  height:512,
  backgroundColor: '#999999',
  type: Phaser.AUTO,
  parent: 'survival-game',
  scene:[MainScene],
  scale: {
    mode: Phaser.Scale.FIT,
    zoom:1,
    parent:'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'matter',
    matter: {
      debug:true,
      gravity:{y:0},
    }
  },
  plugins: {
    scene:[
      {
        //plugin: PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping: 'matterCollision'
      }
    ]
  }
}

new Phaser.Game(config);