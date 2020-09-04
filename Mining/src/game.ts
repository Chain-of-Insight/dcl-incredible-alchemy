// import utils from '../node_modules/decentraland-ecs-utils/index';
// import { InterpolationType } from '../node_modules/decentraland-ecs-utils/transform/math/interpolation';
import * as ui from '../node_modules/@dcl/ui-utils/index';

// import { ImageSection } from '../node_modules/@dcl/ui-utils/utils/types';

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

// Alchmey station
const alchemizer = new Entity();
alchemizer.addComponent(models['alchemizer']);
alchemizer.addComponent(new Transform({ position: new Vector3(7, 0, 7) }));
engine.addEntity(alchemizer);

alchemizer.addComponent(
  new OnPointerDown(
    (e) => {
      if (alchemizerInventory.length < 3) {
        alchemizerInventory = MineralModel.getInventory();
        alchemizer.addComponentOrReplace(
          new OnPointerDown(
            (e) => {
              let result = smeltingEvent(alchemizerInventory);
              if (result) {
                // Gallium was produced!
                ui.displayAnnouncement('Galium added to your inventory!');
                
                // Remove minerals from engine
                removeMinerals(alchemizerInventory);
                
                // Set Galium icon
              } else {
                // Alchemy failed
                ui.displayAnnouncement('A foul mixture is produced, you recoil in shame');
        
                // Remove minerals from engine
                resetMinerals();
              }
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

function smeltingEvent(items: Array<string>): boolean {
  let isGallium = false;

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
  }

  return isGallium;
};

/**
 * Utility function to clear minerals
 * @param {Array<string>} removed : An array of minerals already removed from the scene
 */
function removeMinerals(removed: Array<string>) {
  if (removed.indexOf(SPHALERITE) == -1) {
    sphalerite.destroy();
  }
  if (removed.indexOf(GALENA) == -1) {
    galena.destroy();
  }
  if (removed.indexOf(PYRITE) == -1) {
    pyrite.destroy();
  }
  if (removed.indexOf(ZINCITE) == -1) {
    zincite.destroy();
  }
  if (removed.indexOf(CHALCOPYRITE) == -1) {
    chalcopyrite.destroy();
  }
  if (removed.indexOf(HOPEITE) == -1) {
    hopeite.destroy();
  }
  if (removed.indexOf(GHANITE) == -1) {
    ghanite.destroy();
  }
  if (removed.indexOf(AMETHYST) == -1) {
    amethyst.destroy();
  }
};

/**
 * Reset the state and random positions of all minerals
 */
function resetMinerals() {//here
  // TODO
};