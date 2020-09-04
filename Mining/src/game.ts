// import utils from '../node_modules/decentraland-ecs-utils/index';
// import { InterpolationType } from '../node_modules/decentraland-ecs-utils/transform/math/interpolation';
// import * as ui from '../node_modules/@dcl/ui-utils/index';

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

// 3D Models
const models = {};
models[SPHALERITE] = new GLTFShape('models/minerals/sphalerite.glb');
models[GALENA] = new GLTFShape('models/minerals/galena.glb');
models[PYRITE] = new GLTFShape('models/minerals/pyrite.glb');
models[ZINCITE] = new GLTFShape('models/minerals/zincite.glb');
models[CHALCOPYRITE] = new GLTFShape('models/minerals/chalcopyrite.glb');
models[HOPEITE] = new GLTFShape('models/minerals/hopeite.glb');
models[GHANITE] = new GLTFShape('models/minerals/ghanite.glb');
models[AMETHYST] = new GLTFShape('models/minerals/amethyst.glb');

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