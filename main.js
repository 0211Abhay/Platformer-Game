import kaboom from "./libs/kaboom.mjs"

kaboom({
    width:1280,
    height: 720,
    letterbox:true
})
const scenes = {
    menu:()=>{

    },
    controls:()=>{

    }
}

for (const key in scenes)
{
    scene(key,scenes[key])
}