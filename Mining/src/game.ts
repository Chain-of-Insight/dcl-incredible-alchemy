import utils from "../node_modules/decentraland-ecs-utils/index"
import { InterpolationType } from '../node_modules/decentraland-ecs-utils/transform/math/interpolation'

// Params
let isMining = false

// Sounds
// Mining sound effect
const diggingSound = new Entity()
diggingSound.addComponent(
  new AudioSource(
    new AudioClip('sounds/shovel.mp3')
  )
)
diggingSound.addComponent(new Transform())
diggingSound.getComponent(Transform).position = Camera.instance.position
engine.addEntity(diggingSound)

// Sphalerite (y)
const sphalerite = new Entity()
sphalerite.addComponent(new GLTFShape('models/minerals/sphalerite.glb'))
sphalerite.addComponent(new Transform({
  position: new Vector3(7,0,7)
}))

engine.addEntity(sphalerite)

sphalerite.addComponent(
  new OnPointerDown(
    (e) => {
      // Play digging sound
      diggingSound.getComponent(AudioSource).playOnce()
      
      // log(e)

      // Reduce or remove pile ore deposit
      miningEvent()
    },
    { 
      button: ActionButton.POINTER, 
      hoverText: 'Sphalerite Ore' 
    }
  )
)

function miningEvent() {
  if (isMining) {
    engine.removeEntity(sphalerite);
  } else {
    isMining = true;
    let currentScale = sphalerite.getComponent(Transform).position.z
    let startScale = new Vector3(currentScale * 0.05, currentScale * 0.05, currentScale * 0.05);
    let endScale = new Vector3(currentScale * 0.025, currentScale * 0.025, currentScale * 0.025);

    log(currentScale);

    sphalerite.addComponent(
      new utils.ScaleTransformComponent(
        startScale,
        endScale,
        0.5,
        null,
        InterpolationType.LINEAR
      )
    );
  }
}