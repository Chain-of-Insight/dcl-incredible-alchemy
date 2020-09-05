import utils from '../node_modules/decentraland-ecs-utils/index';
import * as ui from '../node_modules/@dcl/ui-utils/index';

import { Mineral } from "./mineral";

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

// Alchemizer inventory
let alchemizerInventory = [];
let MineralModel = sphalerite;
let galliumIcon;

// Alchmey station
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
      slot3: boolean = false;
  // Inventory slot 1
  switch (items[0]) {
    // (y)
    case SPHALERITE:
      slot1 = true;
      break;
    // (y)
    case GHANITE:
      slot1 = true;
      break;
    // (m)
    case HOPEITE: // 1 slot = 50% chance, 2 slots = 25% chance, 3 slots = 12.5% chance
      slot1 = Math.random() >= 0.5;
      break;
    default:
      slot1 = false;
  }
  // Inventory slot 2
  switch (items[1]) {
    // (y)
    case SPHALERITE:
      slot2 = true;
      break;
    // (y)
    case GHANITE:
      slot2 = true;
      break;
    // (m)
    case HOPEITE:
      slot2 = Math.random() >= 0.5;
      break;
    default:
      slot2 = false;
  }
  // Inventory slot 3
  switch (items[2]) {
    // (y)
    case SPHALERITE:
      slot3 = true;
      break;
    // (y)
    case GHANITE:
      slot3 = true;
      break;
    // (m)
    case HOPEITE:
      slot3 = Math.random() >= 0.5;
      break;
    default:
      slot3 = false;
  }

  if (slot1 && slot2 && slot3) {
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