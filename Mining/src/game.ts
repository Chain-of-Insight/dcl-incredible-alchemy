import utils from '../node_modules/decentraland-ecs-utils/index';
import * as ui from '../node_modules/@dcl/ui-utils/index';
import { InterpolationType } from '../node_modules/decentraland-ecs-utils/transform/math/interpolation';
import { AlchemistNPC, IntroText, HasGalliumText, GalliumApplyNotReady, KeepHittingText } from './messenger';
import { Mineral } from './mineral';

// Mineral types
const SPHALERITE = "sphalerite";
const GALENA = "galena";
const PYRITE = "pyrite";
const ZINCITE = "zincite";
const CHALCOPYRITE = "chalcopyrite";
const HOPEITE = "hopeite";
const GHANITE = "ghanite";
const AMETHYST = "amethyst";
const GALLIUM = "gallium";
// State
let hasGallium = false;
let lockIsBroken = false;
let galliumApplyStarted;
// let aluminumReactionDuration = 20000; // 20 seconds
let aluminumReactionDuration = 5000; // 5 seconds

// Sprite sheet positions (inventory icons)
const spritePositions = {};
spritePositions[SPHALERITE] = {
  sourceWidth: 50, 
  sourceHeight: 50, 
  sourceLeft: 480
};
spritePositions[GALENA] = {
  sourceWidth: 50, 
  sourceHeight: 50, 
  sourceLeft: 336, 
  sourceTop: 95
};
spritePositions[PYRITE] = {
  sourceWidth: 50, 
  sourceHeight: 50, 
  sourceLeft: 432
};
spritePositions[ZINCITE] = {
  sourceWidth: 50, 
  sourceHeight: 50, 
  sourceLeft: 144, 
  sourceTop: 95
};
spritePositions[CHALCOPYRITE] = {
  sourceWidth: 50, 
  sourceHeight: 50, 
  sourceLeft: 192,  
  sourceTop: 95
};
spritePositions[HOPEITE] = {
  sourceWidth: 50, 
  sourceHeight: 50, 
  sourceLeft: 192
};
spritePositions[GHANITE] = {
  sourceWidth: 50, 
  sourceHeight: 50, 
  sourceLeft: 336
};
spritePositions[AMETHYST] = {
  sourceWidth: 50, 
  sourceHeight: 50, 
  sourceLeft: 240, 
  sourceTop: 95
};
spritePositions[GALLIUM] = {
  sourceWidth: 50, 
  sourceHeight: 50, 
  sourceLeft: 530, 
  sourceTop: 50
};

// 3D Models (minerals)
const models = {};
models[SPHALERITE] = new GLTFShape('models/minerals/sphalerite.glb');
models[GALENA] = new GLTFShape('models/minerals/galena.glb');
models[PYRITE] = new GLTFShape('models/minerals/pyrite.glb');
models[ZINCITE] = new GLTFShape('models/minerals/zincite.glb');
models[CHALCOPYRITE] = new GLTFShape('models/minerals/chalcopyrite.glb');
models[HOPEITE] = new GLTFShape('models/minerals/hopeite.glb');
models[GHANITE] = new GLTFShape('models/minerals/ghanite.glb');
models[AMETHYST] = new GLTFShape('models/minerals/amethyst.glb');
models['alchemizer'] = new GLTFShape('models/alchemy/Lab_Sphere_01.glb');
models['aluminum_door'] = new GLTFShape('models/door/FenceIronDoor_01.glb');
models['door_rubble'] = new GLTFShape('models/door/debris/debris.glb');

// Sounds
// Gallium success
const galliumAcquiredSound = new Entity();
galliumAcquiredSound.addComponent(
  new AudioSource(
    new AudioClip('sounds/gallium.mp3')
  )
);
galliumAcquiredSound.addComponent(new Transform());
galliumAcquiredSound.getComponent(Transform).position = Camera.instance.position;
engine.addEntity(galliumAcquiredSound);

// Loading alchemizer
const loadingAlchemizerSound = new Entity();
loadingAlchemizerSound.addComponent(
  new AudioSource(
    new AudioClip('sounds/loading.mp3')
  )
);
loadingAlchemizerSound.addComponent(new Transform());
loadingAlchemizerSound.getComponent(Transform).position = Camera.instance.position;
engine.addEntity(loadingAlchemizerSound);

// Alchemizer
const alchemizerSound = new Entity();
alchemizerSound.addComponent(
  new AudioSource(
    new AudioClip('sounds/alchemizer.mp3')
  )
);
alchemizerSound.addComponent(new Transform());
alchemizerSound.getComponent(Transform).position = Camera.instance.position;
engine.addEntity(alchemizerSound);

// Alchemy failed
const alchemizerFailedSound = new Entity();
alchemizerFailedSound.addComponent(
  new AudioSource(
    new AudioClip('sounds/failed.mp3')
  )
);
alchemizerFailedSound.addComponent(new Transform());
alchemizerFailedSound.getComponent(Transform).position = Camera.instance.position;
engine.addEntity(alchemizerFailedSound);

// Applying gallium to door
const applyGalliumSound = new Entity();
applyGalliumSound.addComponent(
  new AudioSource(
    new AudioClip('sounds/scraping.mp3')
  )
);
applyGalliumSound.addComponent(new Transform());
applyGalliumSound.getComponent(Transform).position = Camera.instance.position;
engine.addEntity(applyGalliumSound);

// Hit door
const hitDoorSound = new Entity();
hitDoorSound.addComponent(
  new AudioSource(
    new AudioClip('sounds/hitdoor.mp3')
  )
);
hitDoorSound.addComponent(new Transform());
hitDoorSound.getComponent(Transform).position = Camera.instance.position;
engine.addEntity(hitDoorSound);

// Break door
const breakDoorSound = new Entity();
breakDoorSound.addComponent(
  new AudioSource(
    new AudioClip('sounds/breakdoor.mp3')
  )
);
breakDoorSound.addComponent(new Transform());
breakDoorSound.getComponent(Transform).position = Camera.instance.position;
engine.addEntity(breakDoorSound);

// Create minerals
// Sphalerite (y)
const sphalerite = new Mineral(
  models[SPHALERITE],
  SPHALERITE,
  spritePositions[SPHALERITE]
);
// Galena (n)
const galena = new Mineral(
  models[GALENA],
  GALENA,
  spritePositions[GALENA]
);
// Pyrite (n)
const pyrite = new Mineral(
  models[PYRITE],
  PYRITE,
  spritePositions[PYRITE]
);
// Zincite (n)
const zincite = new Mineral(
  models[ZINCITE],
  ZINCITE,
  spritePositions[ZINCITE]
);
// Chalcopyrite (n)
const chalcopyrite = new Mineral(
  models[CHALCOPYRITE],
  CHALCOPYRITE,
  spritePositions[CHALCOPYRITE]
);
// Hopeite (m)
const hopeite = new Mineral(
  models[HOPEITE],
  HOPEITE,
  spritePositions[HOPEITE]
);
// Ghanite (y)
const ghanite = new Mineral(
  models[GHANITE],
  GHANITE,
  spritePositions[GHANITE]
);
// Amethyst (n)
const amethyst = new Mineral(
  models[AMETHYST],
  AMETHYST,
  spritePositions[AMETHYST]
);

// Display introduction message
new AlchemistNPC(IntroText, 0);

// Alchemizer inventory
let alchemizerInventory = [];
let MineralModel = sphalerite;
let galliumIcon;
let galliumAluminumMixtureIcon;

// Alchemy station
const alchemizer = new Entity();
alchemizer.addComponent(models['alchemizer']);
alchemizer.addComponent(new Transform({ position: new Vector3(7, 0, 7) }));
engine.addEntity(alchemizer);
createAlchemyListener();

/**
 * Create or replace Alchemy event listeners
 * @see {Entity} alchemizer
 */
function createAlchemyListener() {
  alchemizer.addComponentOrReplace(
    new OnPointerDown(
      (e) => {
        // Instance of mineral inventory
        alchemizerInventory = MineralModel.getInventory();
        loadingAlchemizerSound.getComponent(AudioSource).playOnce();
        // If no items nothing to do
        if (alchemizerInventory.length == 0) {
          ui.displayAnnouncement('Nothing to alchemize');
        // If only 1 item can't create alchemical reaction
        } else if (alchemizerInventory.length == 1) {
          ui.displayAnnouncement('Alchemy requires at least 2 items');
        // Else, alchemize
        } else if (alchemizerInventory.length <= 3) {
          alchemizer.addComponentOrReplace(
            new OnPointerDown(
              (e) => {
                let result = smeltingEvent(alchemizerInventory);
                alchemizer.addComponentOrReplace(
                  new utils.Delay(3500, () => {
                    if (result) {
                      // Gallium was produced!
                      ui.displayAnnouncement('Gallium added to your inventory!');
    
                      galliumAcquiredSound.getComponent(AudioSource).playOnce();
                      
                      // Set Galium icon
                      galliumIcon = new ui.SmallIcon(
                        'models/icons/ores.png', 
                        // x, y
                        -25, 80, 
                        // Width, height
                        48, 48, 
                        // Sprite sheet position
                        spritePositions[GALLIUM]
                      );
    
                      // Remove minerals from engine
                      removeMinerals();

                      // Display helper message
                      new AlchemistNPC(HasGalliumText, 0);

                      // Modify door listener
                      createDoorListener();
                    } else {
                      if (!hasGallium) {
                        alchemizerFailedSound.getComponent(AudioSource).playOnce();
                        // Alchemy failed
                        ui.displayAnnouncement('A foul mixture is produced, you recoil in shame');
                        // Remove minerals from engine
                        resetScene();
                      }
                    }
                  })
                );
              },
              { 
                button: ActionButton.SECONDARY,
                hoverText: 'alchemize'
              }
            )
          )
        }
      },
      { 
        button: ActionButton.PRIMARY,
        hoverText: 'deposit ore'
      }
    )
  );
};

function smeltingEvent(items: Array<string>): boolean {
  let isGallium = false;

  // Player has gallium
  if (hasGallium) {
    alchemizerFailedSound.getComponent(AudioSource).playOnce();
    return false;
  } else {
    alchemizerSound.getComponent(AudioSource).playOnce();
  }

  // Alchemizer must be full
  if (items.length !== 3) {
    return false;  
  }

  // Calculate Gallium production 
  let slot1: boolean = false, 
      slot2: boolean = false, 
      slot3: boolean = false,
      slots: Array<boolean> = [slot1, slot2, slot3];
  
  for (let i = 0; i < items.length; i++) {
    switch (items[i]) {
      // (y)
      case SPHALERITE:
        slots[i] = true;
        break;
      // (y)
      case GHANITE:
        slots[i] = true;
        break;
      // (m)
      case HOPEITE: // 1 slot = 50% chance, 2 slots = 25% chance, 3 slots = 12.5% chance
        slots[i] = Math.random() >= 0.5;
        break;
      default:
        slots[i] = false;
    }
  }

  if (slots[0] == true && slots[1] == true && slots[2] == true) {
    isGallium = true;
    hasGallium = true;
  }

  return isGallium;
};

/**
 * Utility function to clear minerals from the game engine
 */
function removeMinerals() {
  sphalerite.destroy();
  galena.destroy();
  pyrite.destroy();
  zincite.destroy();
  chalcopyrite.destroy();
  hopeite.destroy();
  ghanite.destroy();
  amethyst.destroy();
};

/**
 * Reset the state and random positions of all minerals, reset alchemizer
 */
function resetScene() {
  // Reset minerals
  sphalerite.reset();
  galena.reset();
  pyrite.reset();
  zincite.reset();
  chalcopyrite.reset();
  hopeite.reset();
  ghanite.reset();
  amethyst.reset();
  // Reset alchemizer
  createAlchemyListener();
};

// Aluminum door
const aluminumDoor = new Entity();
aluminumDoor.addComponent(models['aluminum_door']);
aluminumDoor.addComponent(new Transform({ position: new Vector3(15, 0, 15) }));
engine.addEntity(aluminumDoor);
initDoor();

// Door rubble
const doorRubble = new Entity();
doorRubble.addComponent(models['door_rubble']);
doorRubble.addComponent(
  new Transform({ 
    position: new Vector3(15, -100, 15),
    scale: new Vector3(0.225, 0.225, 0.225)
  }));
engine.addEntity(doorRubble);

function initDoor() {
  aluminumDoor.addComponent(
    new OnPointerDown(
      (e) => {
        ui.displayAnnouncement('The door seems to be made of a lightweight, shiny metal');
      },
      { 
        button: ActionButton.POINTER,
        hoverText: 'analyze'
      }
    )
  );
}

function createDoorListener() {
  if (!hasGallium || lockIsBroken) {
    return;
  }

  aluminumDoor.addComponentOrReplace(
    new OnPointerDown(
      (e) => {
        // Remove gallium icon from ui
        // (We keep the gallium in inventory
        // since it controls state)
        if (galliumIcon) {
          galliumIcon.image.visible = false;
        }

        // Play scraping sound
        applyGalliumSound.getComponent(AudioSource).playOnce();

        galliumApplyStarted = new Date().getTime();

        // Create next action
        aluminumDoor.addComponentOrReplace(
          new OnPointerDown(
            (e) => {
              let penetrations = hitDoorAction();

              // Gallium application wait time
              let timeSinceApplication = getCurrentTimestamp();
              if ((timeSinceApplication - galliumApplyStarted) < aluminumReactionDuration) {
                // Display wait message
                new AlchemistNPC(GalliumApplyNotReady, 0);
                return;
              }

              if (penetrations >= 2) {
                lockIsBroken = true;
                // Play sound shattering metal
                breakDoorSound.getComponent(AudioSource).playOnce();
                
                aluminumDoor.addComponentOrReplace(
                  new utils.Delay(1000, () => {
                    // Destroy door
                    let currentPosition = aluminumDoor.getComponent(Transform).position;
                    let destination = new Vector3(currentPosition.x, -100, currentPosition.z);
                    let duration = 3;
                    aluminumDoor.addComponentOrReplace(
                      new utils.MoveTransformComponent(
                        currentPosition,
                        destination,
                        duration, // 3 seconds
                        // On finished callback
                        () => {},
                        InterpolationType.EASEQUAD
                      )
                    );
                    let rubblePosition = doorRubble.getComponent(Transform).position;
                    let rubbleDestination = new Vector3(
                      (currentPosition.x - 0.5), currentPosition.y, (currentPosition.z - 0.5)
                    );
                    doorRubble.addComponentOrReplace(
                      new utils.MoveTransformComponent(
                        rubblePosition,
                        rubbleDestination,
                        0,
                        // On finished callback
                        () => {},
                        InterpolationType.EASEQUAD
                      )
                    );
                    // Display Gallium-Aluminum mixture icon
                    galliumAluminumMixtureIcon = new ui.MediumIcon(
                      'models/icons/ga-al-mix.png',
                      // x, y
                      -25, 80, 
                      // Width, Height
                      48, 48
                    );
                    // Announce mixture added to inventory
                    ui.displayAnnouncement('Gallium-Aluminum mixture added to your inventory!');
                  })
                );                
              } else {
                new AlchemistNPC(KeepHittingText, 0);
              }
            },
            { 
              button: ActionButton.SECONDARY,
              hoverText: 'hit door'
            }
          )
        );
      },
      { 
        button: ActionButton.PRIMARY,
        hoverText: 'apply gallium'
      }
    )
  );
}

function hitDoorAction() {
  let hit1 = Math.random() >= 0.5,
      hit2 = Math.random() >= 0.5,
      hit3 = Math.random() >= 0.5,
      hits = [hit1, hit2, hit3],
      penetrations = 0;

  // Play hits sound
  hitDoorSound.getComponent(AudioSource).playOnce();

  hits.forEach(worked => {
    if (worked)
      ++penetrations;
  });

  return penetrations;
};

function getCurrentTimestamp() {
  return new Date().getTime();
};