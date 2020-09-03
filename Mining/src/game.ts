import utils from '../node_modules/decentraland-ecs-utils/index';
import { InterpolationType } from '../node_modules/decentraland-ecs-utils/transform/math/interpolation';
import * as ui from '../node_modules/@dcl/ui-utils/index';

// Params
let inventory = [];
let sphaleriteIcon;
let galenaIcon;
let pyriteIcon;
let zinciteIcon;
let chalcopyriteIcon;
let hopeiteIcon;
let ghaniteIcon;
let amethystIcon;
const SPHALERITE = "sphalerite";
const GALENA = "galena";
const PYRITE = "pyrite";
const ZINCITE = "zincite";
const CHALCOPYRITE = "chalcopyrite";
const HOPEITE = "hopeite";
const GHANITE = "ghanite";
const AMETHYST = "amethyst";
let isMiningSphalerite = false;
let isMiningGalena = false;
let isMiningPyrite = false;
let isMiningZincite = false;
let isMiningChalcopyrite = false;
let isMiningHopeite = false;
let isMiningGhanite = false;
let isMiningAmethyst = false;

// Sounds
// Mining sound effect
const diggingSound = new Entity();
diggingSound.addComponent(
  new AudioSource(
    new AudioClip('sounds/shovel.mp3')
  )
);
diggingSound.addComponent(new Transform());
diggingSound.getComponent(Transform).position = Camera.instance.position;
engine.addEntity(diggingSound);

// Sphalerite (y)
const sphalerite = new Entity();
sphalerite.addComponent(new GLTFShape('models/minerals/sphalerite.glb'));
sphalerite.addComponent(new Transform({
  position: new Vector3(7,0,7)
}));

engine.addEntity(sphalerite);

sphalerite.addComponent(
  new OnPointerDown(
    (e) => {
      if (inventory.length < 3) {
        // Play digging sound
        diggingSound.getComponent(AudioSource).playOnce()
        // Reduce or remove pile ore deposit
        miningEvent(SPHALERITE);
      } else {
        ui.displayAnnouncement('You\'re carrying a heavy load');
      }
    },
    { 
      button: ActionButton.POINTER, 
      hoverText: 'Sphalerite Ore' 
    }
  )
);

// Galena (n)
const galena = new Entity();
galena.addComponent(new GLTFShape('models/minerals/galena.glb'));
galena.addComponent(new Transform({
  position: new Vector3(3,0,3)
}));

engine.addEntity(galena);

galena.addComponent(
  new OnPointerDown(
    (e) => {
      if (inventory.length < 3) {
        // Play digging sound
        diggingSound.getComponent(AudioSource).playOnce()
        // Reduce or remove pile ore deposit
        miningEvent(GALENA);
      } else {
        ui.displayAnnouncement('You\'re carrying a heavy load');
      }
    },
    { 
      button: ActionButton.POINTER, 
      hoverText: 'Galena Ore' 
    }
  )
);

// Pyrite (n)
const pyrite = new Entity();
pyrite.addComponent(new GLTFShape('models/minerals/pyrite.glb'));
pyrite.addComponent(new Transform({
  position: new Vector3(2,0,9)
}));

engine.addEntity(pyrite);

pyrite.addComponent(
  new OnPointerDown(
    (e) => {
      if (inventory.length < 3) {
        // Play digging sound
        diggingSound.getComponent(AudioSource).playOnce()
        // Reduce or remove pile ore deposit
        miningEvent(PYRITE);
      } else {
        ui.displayAnnouncement('You\'re carrying a heavy load');
      }
    },
    { 
      button: ActionButton.POINTER, 
      hoverText: 'Pyrite Ore' 
    }
  )
);

// Zincite (n)
const zincite = new Entity();
zincite.addComponent(new GLTFShape('models/minerals/zincite.glb'));
zincite.addComponent(new Transform({
  position: new Vector3(6,0,2)
}));

engine.addEntity(zincite);

zincite.addComponent(
  new OnPointerDown(
    (e) => {
      if (inventory.length < 3) {
        // Play digging sound
        diggingSound.getComponent(AudioSource).playOnce()
        // Reduce or remove pile ore deposit
        miningEvent(ZINCITE);
      }
    },
    { 
      button: ActionButton.POINTER, 
      hoverText: 'Zincite Ore' 
    }
  )
);

function miningEvent(type: string) {

  /*
  const CHALCOPYRITE = "chalcopyrite";
  const HOPEITE = "hopeite";
  const GHANITE = "ghanite";
  const AMETHYST = "amethyst";
  */

  switch (type) {
    case SPHALERITE:
      sphaleriteMiningEvent();
      break;
    case GALENA:
      galenaMiningEvent();
      break;
    case PYRITE:
      pyriteMiningEvent();
      break;
    case ZINCITE:
      zinciteMiningEvent();
      break;
  }
}

function sphaleriteMiningEvent() {
  if (isMiningSphalerite) {
    engine.removeEntity(sphalerite);
    let xOffset = 0;
    switch (inventory.length) {
      case 0:
        xOffset = -25;
        break;
      case 1:
        xOffset = -80;
        break;
      case 2:
        xOffset = -135;
        break;
    }

    // Handle Inventory
    sphaleriteIcon = new ui.SmallIcon(
      'models/icons/ores.png', 
      // x, y
      xOffset, 80, 
      // Width, height
      48, 48, 
      // Sprite sheet position
      {sourceWidth: 50, sourceHeight: 50, sourceLeft: 480}
    );
    
    // Add to inventory
    inventory.push(SPHALERITE);

    ui.displayAnnouncement('Sphalerite added to your inventory');

  } else {
    isMiningSphalerite = true;
    let currentScale = sphalerite.getComponent(Transform).position.z
    let startScale = new Vector3(currentScale * 0.05, currentScale * 0.05, currentScale * 0.05);
    let endScale = new Vector3(currentScale * 0.025, currentScale * 0.025, currentScale * 0.025);

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
};

function galenaMiningEvent() {
  if (isMiningGalena) {
    engine.removeEntity(galena);
    let xOffset = 0;
    switch (inventory.length) {
      case 0:
        xOffset = -25;
        break;
      case 1:
        xOffset = -80;
        break;
      case 2:
        xOffset = -135;
        break;
    }

    // Handle Inventory
    galenaIcon = new ui.SmallIcon(
      'models/icons/ores.png', 
      // x, y
      xOffset, 80, 
      // Width, height
      48, 48, 
      // Sprite sheet position
      {sourceWidth: 50, sourceHeight: 50, sourceLeft: 336, sourceTop: 95}
    );
    
    // Add to inventory
    inventory.push(GALENA);

    ui.displayAnnouncement('Galena added to your inventory');

  } else {
    isMiningGalena = true;
    let currentScale = galena.getComponent(Transform).position.z
    let startScale = new Vector3(currentScale * 0.05, currentScale * 0.05, currentScale * 0.05);
    let endScale = new Vector3(currentScale * 0.025, currentScale * 0.025, currentScale * 0.025);

    galena.addComponent(
      new utils.ScaleTransformComponent(
        startScale,
        endScale,
        0.5,
        null,
        InterpolationType.LINEAR
      )
    );
  }
};

function pyriteMiningEvent() {
  if (isMiningPyrite) {
    engine.removeEntity(pyrite);
    let xOffset = 0;
    switch (inventory.length) {
      case 0:
        xOffset = -25;
        break;
      case 1:
        xOffset = -80;
        break;
      case 2:
        xOffset = -135;
        break;
    }

    // Handle Inventory
    pyriteIcon = new ui.SmallIcon(
      'models/icons/ores.png', 
      // x, y
      xOffset, 80, 
      // Width, height
      48, 48, 
      // Sprite sheet position
      {sourceWidth: 50, sourceHeight: 50, sourceLeft: 432}
    );
    
    // Add to inventory
    inventory.push(PYRITE);

    ui.displayAnnouncement('Pyrite added to your inventory');

  } else {
    isMiningPyrite = true;
    let currentScale = pyrite.getComponent(Transform).position.z
    let startScale = new Vector3(currentScale * 0.05, currentScale * 0.05, currentScale * 0.05);
    let endScale = new Vector3(currentScale * 0.025, currentScale * 0.025, currentScale * 0.025);

    pyrite.addComponent(
      new utils.ScaleTransformComponent(
        startScale,
        endScale,
        0.5,
        null,
        InterpolationType.LINEAR
      )
    );
  }
};

function zinciteMiningEvent() {
  if (isMiningZincite) {
    engine.removeEntity(zincite);
    let xOffset = 0;
    switch (inventory.length) {
      case 0:
        xOffset = -25;
        break;
      case 1:
        xOffset = -80;
        break;
      case 2:
        xOffset = -135;
        break;
    }

    // Handle Inventory
    zinciteIcon = new ui.SmallIcon(
      'models/icons/ores.png', 
      // x, y
      xOffset, 80, 
      // Width, height
      48, 48, 
      // Sprite sheet position
      {sourceWidth: 50, sourceHeight: 50, sourceLeft: 144, sourceTop: 95}
    );
    
    // Add to inventory
    inventory.push(ZINCITE);

    ui.displayAnnouncement('Zincite added to your inventory');

  } else {
    isMiningZincite = true;
    let currentScale = pyrite.getComponent(Transform).position.z
    let startScale = new Vector3(currentScale * 0.05, currentScale * 0.05, currentScale * 0.05);
    let endScale = new Vector3(currentScale * 0.025, currentScale * 0.025, currentScale * 0.025);

    zincite.addComponent(
      new utils.ScaleTransformComponent(
        startScale,
        endScale,
        0.5,
        null,
        InterpolationType.LINEAR
      )
    );
  }
};