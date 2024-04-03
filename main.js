import kaboom from "./libs/kaboom.mjs"
import { Level } from "./utils/Level.js"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"
import {attachCamera} from "./utils/camera.js"
import { Player } from "./entities/player.js"
import { level1Config } from "./content/level1/config.js"
kaboom({
    width:1280,
    height: 720,
    letterbox:true
})
load.fonts()
load.sounds()
load.assets()

const scenes = {
    menu:()=>{
        uiManager.displayMainMenu()
    },
    controls:()=>{
        uiManager.displayControlsMenu()
    },
    1 : () => {
        setGravity(1400)
        const level1 = new Level()
        level1.drawBackground("forest-background")
        level1.drawMapLayout(level1Layout,level1Mappings)
        
        const player = new Player(level1Config.playerInitialX,level1Config.playerInitialY,level1Config.playerSpeed,level1Config.playerJumpForce,level1Config.playerNbLives,1,false)
        player.enablePassThrough()
        player.enableCoinPickUp()
        player.update()

        
        attachCamera(player.gameObj,0,200)

        level1.drawWaves("water","wave")
        uiManager.addDarkBg()
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLivesCount(uiManager.livesCountUI)
    },
    2 : () => {

    },
    3 : () => {

    },
    gameover : () =>{

    },
    end:()=>{

    }
}

for (const key in scenes)
{
    scene(key,scenes[key])
}

go("menu")