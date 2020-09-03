import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script2 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script3 from "../ed36149f-76c5-45c4-a678-d4b31c4ed9ca/src/item"
import Script4 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script5 from "../e915cdb6-03e6-43e2-81fb-58ad8603f68c/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorFantasyRocks_02/FloorFantasyRocks_02.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform10)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform11)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform12)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform13)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform14)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform15)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform16)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform17)

const entity17 = new Entity('entity17')
engine.addEntity(entity17)
entity17.setParent(_scene)
entity17.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity17.addComponentOrReplace(transform18)

const entity18 = new Entity('entity18')
engine.addEntity(entity18)
entity18.setParent(_scene)
entity18.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity18.addComponentOrReplace(transform19)

const entity19 = new Entity('entity19')
engine.addEntity(entity19)
entity19.setParent(_scene)
entity19.addComponentOrReplace(gltfShape)
const transform20 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity19.addComponentOrReplace(transform20)

const entity20 = new Entity('entity20')
engine.addEntity(entity20)
entity20.setParent(_scene)
entity20.addComponentOrReplace(gltfShape)
const transform21 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity20.addComponentOrReplace(transform21)

const entity21 = new Entity('entity21')
engine.addEntity(entity21)
entity21.setParent(_scene)
entity21.addComponentOrReplace(gltfShape)
const transform22 = new Transform({
  position: new Vector3(8, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity21.addComponentOrReplace(transform22)

const entity22 = new Entity('entity22')
engine.addEntity(entity22)
entity22.setParent(_scene)
entity22.addComponentOrReplace(gltfShape)
const transform23 = new Transform({
  position: new Vector3(24, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity22.addComponentOrReplace(transform23)

const entity23 = new Entity('entity23')
engine.addEntity(entity23)
entity23.setParent(_scene)
entity23.addComponentOrReplace(gltfShape)
const transform24 = new Transform({
  position: new Vector3(40, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity23.addComponentOrReplace(transform24)

const entity24 = new Entity('entity24')
engine.addEntity(entity24)
entity24.setParent(_scene)
entity24.addComponentOrReplace(gltfShape)
const transform25 = new Transform({
  position: new Vector3(56, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity24.addComponentOrReplace(transform25)

const entity25 = new Entity('entity25')
engine.addEntity(entity25)
entity25.setParent(_scene)
entity25.addComponentOrReplace(gltfShape)
const transform26 = new Transform({
  position: new Vector3(8, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity25.addComponentOrReplace(transform26)

const entity26 = new Entity('entity26')
engine.addEntity(entity26)
entity26.setParent(_scene)
entity26.addComponentOrReplace(gltfShape)
const transform27 = new Transform({
  position: new Vector3(24, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity26.addComponentOrReplace(transform27)

const entity27 = new Entity('entity27')
engine.addEntity(entity27)
entity27.setParent(_scene)
entity27.addComponentOrReplace(gltfShape)
const transform28 = new Transform({
  position: new Vector3(40, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity27.addComponentOrReplace(transform28)

const entity28 = new Entity('entity28')
engine.addEntity(entity28)
entity28.setParent(_scene)
entity28.addComponentOrReplace(gltfShape)
const transform29 = new Transform({
  position: new Vector3(56, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity28.addComponentOrReplace(transform29)

const entity29 = new Entity('entity29')
engine.addEntity(entity29)
entity29.setParent(_scene)
entity29.addComponentOrReplace(gltfShape)
const transform30 = new Transform({
  position: new Vector3(8, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity29.addComponentOrReplace(transform30)

const entity30 = new Entity('entity30')
engine.addEntity(entity30)
entity30.setParent(_scene)
entity30.addComponentOrReplace(gltfShape)
const transform31 = new Transform({
  position: new Vector3(24, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity30.addComponentOrReplace(transform31)

const entity31 = new Entity('entity31')
engine.addEntity(entity31)
entity31.setParent(_scene)
entity31.addComponentOrReplace(gltfShape)
const transform32 = new Transform({
  position: new Vector3(40, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity31.addComponentOrReplace(transform32)

const entity32 = new Entity('entity32')
engine.addEntity(entity32)
entity32.setParent(_scene)
entity32.addComponentOrReplace(gltfShape)
const transform33 = new Transform({
  position: new Vector3(56, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity32.addComponentOrReplace(transform33)

const bloomingPinkAcaciaTree = new Entity('bloomingPinkAcaciaTree')
engine.addEntity(bloomingPinkAcaciaTree)
bloomingPinkAcaciaTree.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(11, 0, 78),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bloomingPinkAcaciaTree.addComponentOrReplace(transform34)
const gltfShape2 = new GLTFShape("models/Tree_Forest_Pink_02/Tree_Forest_Pink_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
bloomingPinkAcaciaTree.addComponentOrReplace(gltfShape2)

const stonePond = new Entity('stonePond')
engine.addEntity(stonePond)
stonePond.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(21.5, 0, 79),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 3)
})
stonePond.addComponentOrReplace(transform35)
const gltfShape3 = new GLTFShape("models/Pond_Stone_01/Pond_Stone_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
stonePond.addComponentOrReplace(gltfShape3)

const swampVineTreeLamp = new Entity('swampVineTreeLamp')
engine.addEntity(swampVineTreeLamp)
swampVineTreeLamp.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(22, 0, 74),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
swampVineTreeLamp.addComponentOrReplace(transform36)
const gltfShape4 = new GLTFShape("models/Tree_Lamp_01/Tree_Lamp_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
swampVineTreeLamp.addComponentOrReplace(gltfShape4)

const cornerStoneBrickWall = new Entity('cornerStoneBrickWall')
engine.addEntity(cornerStoneBrickWall)
cornerStoneBrickWall.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(63.5, 0, 127.5),
  rotation: new Quaternion(-1.5203487543891635e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(2.999999523162842, 3, 5.76352071762085)
})
cornerStoneBrickWall.addComponentOrReplace(transform37)
const gltfShape5 = new GLTFShape("models/Module_Stone_Curve_01/Module_Stone_Curve_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
cornerStoneBrickWall.addComponentOrReplace(gltfShape5)

const largeStoneWall = new Entity('largeStoneWall')
engine.addEntity(largeStoneWall)
largeStoneWall.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(62.5, 0, 116.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(21.927227020263672, 12, 1.000009536743164)
})
largeStoneWall.addComponentOrReplace(transform38)
const gltfShape6 = new GLTFShape("models/Wall_Stone_Large/Wall_Stone_Large.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
largeStoneWall.addComponentOrReplace(gltfShape6)

const cornerStoneBrickWall2 = new Entity('cornerStoneBrickWall2')
engine.addEntity(cornerStoneBrickWall2)
cornerStoneBrickWall2.setParent(_scene)
cornerStoneBrickWall2.addComponentOrReplace(gltfShape5)
const transform39 = new Transform({
  position: new Vector3(1.5, 0, 127.5),
  rotation: new Quaternion(1.5915075687715236e-15, -1, 1.1920927533992653e-7, -1.4901161193847656e-8),
  scale: new Vector3(5.9999918937683105, 3, 0.9999982118606567)
})
cornerStoneBrickWall2.addComponentOrReplace(transform39)

const largeStoneWall2 = new Entity('largeStoneWall2')
engine.addEntity(largeStoneWall2)
largeStoneWall2.setParent(_scene)
largeStoneWall2.addComponentOrReplace(gltfShape6)
const transform40 = new Transform({
  position: new Vector3(2, 0, 127),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(21.92724609375, 12, 1.0000107288360596)
})
largeStoneWall2.addComponentOrReplace(transform40)

const cornerStoneBrickWall3 = new Entity('cornerStoneBrickWall3')
engine.addEntity(cornerStoneBrickWall3)
cornerStoneBrickWall3.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(1.5, 0, 1.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.625101566314697, 2.7724390029907227, 1.5257916450500488)
})
cornerStoneBrickWall3.addComponentOrReplace(transform41)
cornerStoneBrickWall3.addComponentOrReplace(gltfShape5)

const cornerStoneBrickWall4 = new Entity('cornerStoneBrickWall4')
engine.addEntity(cornerStoneBrickWall4)
cornerStoneBrickWall4.setParent(_scene)
cornerStoneBrickWall4.addComponentOrReplace(gltfShape5)
const transform42 = new Transform({
  position: new Vector3(62.961612701416016, 0, 1.0394468307495117),
  rotation: new Quaternion(-2.177062080483132e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(2.500037431716919, 2.7724390029907227, 1.5257854461669922)
})
cornerStoneBrickWall4.addComponentOrReplace(transform42)

const stoneBrickWall = new Entity('stoneBrickWall')
engine.addEntity(stoneBrickWall)
stoneBrickWall.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(53, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.459365844726562, 2.8377647399902344, 0.9999999403953552)
})
stoneBrickWall.addComponentOrReplace(transform43)
const gltfShape7 = new GLTFShape("models/Module_Stone_Straight_01/Module_Stone_Straight_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
stoneBrickWall.addComponentOrReplace(gltfShape7)

const alchemyEquipment = new Entity('alchemyEquipment')
engine.addEntity(alchemyEquipment)
alchemyEquipment.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(28, 0, 78.5),
  rotation: new Quaternion(-4.157467251052812e-15, 0.9238795638084412, -1.1013501932666259e-7, 0.3826834559440613),
  scale: new Vector3(1.8646272420883179, 1.8646152019500732, 1.8646272420883179)
})
alchemyEquipment.addComponentOrReplace(transform44)
const gltfShape8 = new GLTFShape("models/Lab_Sphere_01/Lab_Sphere_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
alchemyEquipment.addComponentOrReplace(gltfShape8)

const clickArea = new Entity('clickArea')
engine.addEntity(clickArea)
clickArea.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(28, 0, 78.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.848838448524475, 1.808447241783142, 1.2231366634368896)
})
clickArea.addComponentOrReplace(transform45)

const toolbox = new Entity('toolbox')
engine.addEntity(toolbox)
toolbox.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(38, 0, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toolbox.addComponentOrReplace(transform46)

const stoneArchway = new Entity('stoneArchway')
engine.addEntity(stoneArchway)
stoneArchway.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(33, 0, 126),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 3, 3)
})
stoneArchway.addComponentOrReplace(transform47)
const gltfShape9 = new GLTFShape("models/ArchWay_02/ArchWay_02.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
stoneArchway.addComponentOrReplace(gltfShape9)

const stoneArchway2 = new Entity('stoneArchway2')
engine.addEntity(stoneArchway2)
stoneArchway2.setParent(_scene)
stoneArchway2.addComponentOrReplace(gltfShape9)
const transform48 = new Transform({
  position: new Vector3(32.5, 0, 100.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 3, 3)
})
stoneArchway2.addComponentOrReplace(transform48)

const stoneBrickWindowWithStainedGlass = new Entity('stoneBrickWindowWithStainedGlass')
engine.addEntity(stoneBrickWindowWithStainedGlass)
stoneBrickWindowWithStainedGlass.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(25.5, 0, 125),
  rotation: new Quaternion(-6.692902301134779e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(3.000080108642578, 3, 3.000080108642578)
})
stoneBrickWindowWithStainedGlass.addComponentOrReplace(transform49)
const gltfShape10 = new GLTFShape("models/Module_Stone_Straight_Window_02/Module_Stone_Straight_Window_02.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
stoneBrickWindowWithStainedGlass.addComponentOrReplace(gltfShape10)

const stoneBrickWindowWithStainedGlass2 = new Entity('stoneBrickWindowWithStainedGlass2')
engine.addEntity(stoneBrickWindowWithStainedGlass2)
stoneBrickWindowWithStainedGlass2.setParent(_scene)
stoneBrickWindowWithStainedGlass2.addComponentOrReplace(gltfShape10)
const transform50 = new Transform({
  position: new Vector3(25.5, 0, 113.5),
  rotation: new Quaternion(-6.692902301134779e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(3.0000686645507812, 3, 3.0000686645507812)
})
stoneBrickWindowWithStainedGlass2.addComponentOrReplace(transform50)

const stoneBrickWindowWithStainedGlass3 = new Entity('stoneBrickWindowWithStainedGlass3')
engine.addEntity(stoneBrickWindowWithStainedGlass3)
stoneBrickWindowWithStainedGlass3.setParent(_scene)
stoneBrickWindowWithStainedGlass3.addComponentOrReplace(gltfShape10)
const transform51 = new Transform({
  position: new Vector3(42, 0, 125),
  rotation: new Quaternion(-6.692902301134779e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(3.000088691711426, 3, 3.000088691711426)
})
stoneBrickWindowWithStainedGlass3.addComponentOrReplace(transform51)

const stoneBrickWindowWithStainedGlass4 = new Entity('stoneBrickWindowWithStainedGlass4')
engine.addEntity(stoneBrickWindowWithStainedGlass4)
stoneBrickWindowWithStainedGlass4.setParent(_scene)
stoneBrickWindowWithStainedGlass4.addComponentOrReplace(gltfShape10)
const transform52 = new Transform({
  position: new Vector3(42, 0, 113),
  rotation: new Quaternion(-6.692902301134779e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(3.000102996826172, 3, 3.000102996826172)
})
stoneBrickWindowWithStainedGlass4.addComponentOrReplace(transform52)

const curvedStoneBrickWall = new Entity('curvedStoneBrickWall')
engine.addEntity(curvedStoneBrickWall)
curvedStoneBrickWall.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(33, 11, 127),
  rotation: new Quaternion(-0.5149341821670532, 0.48176929354667664, -0.4888898432254791, 0.513544499874115),
  scale: new Vector3(1.254254937171936, 1.2500847578048706, 2.508328676223755)
})
curvedStoneBrickWall.addComponentOrReplace(transform53)
const gltfShape11 = new GLTFShape("models/Module_Stone_Curve_02/Module_Stone_Curve_02.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
curvedStoneBrickWall.addComponentOrReplace(gltfShape11)

const curvedStoneBrickWall2 = new Entity('curvedStoneBrickWall2')
engine.addEntity(curvedStoneBrickWall2)
curvedStoneBrickWall2.setParent(_scene)
curvedStoneBrickWall2.addComponentOrReplace(gltfShape11)
const transform54 = new Transform({
  position: new Vector3(33, 11, 122.5),
  rotation: new Quaternion(-0.5149341821670532, 0.48176929354667664, -0.4888898432254791, 0.513544499874115),
  scale: new Vector3(1.2542555332183838, 1.2500859498977661, 2.5083298683166504)
})
curvedStoneBrickWall2.addComponentOrReplace(transform54)

const curvedStoneBrickWall3 = new Entity('curvedStoneBrickWall3')
engine.addEntity(curvedStoneBrickWall3)
curvedStoneBrickWall3.setParent(_scene)
curvedStoneBrickWall3.addComponentOrReplace(gltfShape11)
const transform55 = new Transform({
  position: new Vector3(33, 11, 118.5),
  rotation: new Quaternion(-0.5149341821670532, 0.48176929354667664, -0.4888898432254791, 0.513544499874115),
  scale: new Vector3(1.2542561292648315, 1.2500871419906616, 2.508331060409546)
})
curvedStoneBrickWall3.addComponentOrReplace(transform55)

const curvedStoneBrickWall4 = new Entity('curvedStoneBrickWall4')
engine.addEntity(curvedStoneBrickWall4)
curvedStoneBrickWall4.setParent(_scene)
curvedStoneBrickWall4.addComponentOrReplace(gltfShape11)
const transform56 = new Transform({
  position: new Vector3(33, 11, 115),
  rotation: new Quaternion(-0.5149341821670532, 0.48176929354667664, -0.4888898432254791, 0.513544499874115),
  scale: new Vector3(1.2542567253112793, 1.2500883340835571, 2.5083322525024414)
})
curvedStoneBrickWall4.addComponentOrReplace(transform56)

const curvedStoneBrickWall5 = new Entity('curvedStoneBrickWall5')
engine.addEntity(curvedStoneBrickWall5)
curvedStoneBrickWall5.setParent(_scene)
curvedStoneBrickWall5.addComponentOrReplace(gltfShape11)
const transform57 = new Transform({
  position: new Vector3(33, 11, 111),
  rotation: new Quaternion(-0.5149341821670532, 0.48176929354667664, -0.4888898432254791, 0.513544499874115),
  scale: new Vector3(1.2542588710784912, 1.250092625617981, 2.5083365440368652)
})
curvedStoneBrickWall5.addComponentOrReplace(transform57)

const curvedStoneBrickWall6 = new Entity('curvedStoneBrickWall6')
engine.addEntity(curvedStoneBrickWall6)
curvedStoneBrickWall6.setParent(_scene)
curvedStoneBrickWall6.addComponentOrReplace(gltfShape11)
const transform58 = new Transform({
  position: new Vector3(33, 11, 106),
  rotation: new Quaternion(-0.5149341821670532, 0.48176929354667664, -0.4888898432254791, 0.513544499874115),
  scale: new Vector3(1.254259467124939, 1.2500938177108765, 2.5083377361297607)
})
curvedStoneBrickWall6.addComponentOrReplace(transform58)

const curvedStoneBrickWall7 = new Entity('curvedStoneBrickWall7')
engine.addEntity(curvedStoneBrickWall7)
curvedStoneBrickWall7.setParent(_scene)
curvedStoneBrickWall7.addComponentOrReplace(gltfShape11)
const transform59 = new Transform({
  position: new Vector3(33.5, 11, 100.5),
  rotation: new Quaternion(0.48888975381851196, -0.5135445594787598, -0.5149341821670532, 0.4817693531513214),
  scale: new Vector3(1.2542747259140015, 1.2501085996627808, 2.5083670616149902)
})
curvedStoneBrickWall7.addComponentOrReplace(transform59)

const curvedStoneBrickWall8 = new Entity('curvedStoneBrickWall8')
engine.addEntity(curvedStoneBrickWall8)
curvedStoneBrickWall8.setParent(_scene)
curvedStoneBrickWall8.addComponentOrReplace(gltfShape11)
const transform60 = new Transform({
  position: new Vector3(33.5, 11, 105),
  rotation: new Quaternion(0.48888975381851196, -0.5135445594787598, -0.5149341821670532, 0.4817693531513214),
  scale: new Vector3(1.2542765140533447, 1.2501097917556763, 2.5083718299865723)
})
curvedStoneBrickWall8.addComponentOrReplace(transform60)

const curvedStoneBrickWall9 = new Entity('curvedStoneBrickWall9')
engine.addEntity(curvedStoneBrickWall9)
curvedStoneBrickWall9.setParent(_scene)
curvedStoneBrickWall9.addComponentOrReplace(gltfShape11)
const transform61 = new Transform({
  position: new Vector3(33.5, 11, 110),
  rotation: new Quaternion(0.48888975381851196, -0.5135445594787598, -0.5149341821670532, 0.4817693531513214),
  scale: new Vector3(1.254278302192688, 1.2501109838485718, 2.5083765983581543)
})
curvedStoneBrickWall9.addComponentOrReplace(transform61)

const curvedStoneBrickWall10 = new Entity('curvedStoneBrickWall10')
engine.addEntity(curvedStoneBrickWall10)
curvedStoneBrickWall10.setParent(_scene)
curvedStoneBrickWall10.addComponentOrReplace(gltfShape11)
const transform62 = new Transform({
  position: new Vector3(33.5, 11, 113.5),
  rotation: new Quaternion(0.48888975381851196, -0.5135445594787598, -0.5149341821670532, 0.4817693531513214),
  scale: new Vector3(1.2542861700057983, 1.250115990638733, 2.5083913803100586)
})
curvedStoneBrickWall10.addComponentOrReplace(transform62)

const curvedStoneBrickWall11 = new Entity('curvedStoneBrickWall11')
engine.addEntity(curvedStoneBrickWall11)
curvedStoneBrickWall11.setParent(_scene)
curvedStoneBrickWall11.addComponentOrReplace(gltfShape11)
const transform63 = new Transform({
  position: new Vector3(33.5, 11, 118),
  rotation: new Quaternion(0.48888975381851196, -0.5135445594787598, -0.5149341821670532, 0.4817693531513214),
  scale: new Vector3(1.2542818784713745, 1.2501133680343628, 2.508385419845581)
})
curvedStoneBrickWall11.addComponentOrReplace(transform63)

const curvedStoneBrickWall12 = new Entity('curvedStoneBrickWall12')
engine.addEntity(curvedStoneBrickWall12)
curvedStoneBrickWall12.setParent(_scene)
curvedStoneBrickWall12.addComponentOrReplace(gltfShape11)
const transform64 = new Transform({
  position: new Vector3(33.5, 11, 122),
  rotation: new Quaternion(0.48888975381851196, -0.5135445594787598, -0.5149341821670532, 0.4817693531513214),
  scale: new Vector3(1.2542837858200073, 1.2501145601272583, 2.5083885192871094)
})
curvedStoneBrickWall12.addComponentOrReplace(transform64)

const woodenDoor2 = new Entity('woodenDoor2')
engine.addEntity(woodenDoor2)
woodenDoor2.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(38.5, 0, 100),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.5069684982299805, 3.982438564300537, 3.499999761581421)
})
woodenDoor2.addComponentOrReplace(transform65)

const mediumLuxuriousFenceModule = new Entity('mediumLuxuriousFenceModule')
engine.addEntity(mediumLuxuriousFenceModule)
mediumLuxuriousFenceModule.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(61.852867126464844, 0, 63.97926330566406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 5, 2)
})
mediumLuxuriousFenceModule.addComponentOrReplace(transform66)
const gltfShape12 = new GLTFShape("models/Fence_Stone_3M/Fence_Stone_3M.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
mediumLuxuriousFenceModule.addComponentOrReplace(gltfShape12)

const mediumLuxuriousFenceModule2 = new Entity('mediumLuxuriousFenceModule2')
engine.addEntity(mediumLuxuriousFenceModule2)
mediumLuxuriousFenceModule2.setParent(_scene)
mediumLuxuriousFenceModule2.addComponentOrReplace(gltfShape12)
const transform67 = new Transform({
  position: new Vector3(2.5, 0, 64),
  rotation: new Quaternion(-5.67359905191407e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(2, 5, 2)
})
mediumLuxuriousFenceModule2.addComponentOrReplace(transform67)

const mediumLuxuriousFenceModule3 = new Entity('mediumLuxuriousFenceModule3')
engine.addEntity(mediumLuxuriousFenceModule3)
mediumLuxuriousFenceModule3.setParent(_scene)
mediumLuxuriousFenceModule3.addComponentOrReplace(gltfShape12)
const transform68 = new Transform({
  position: new Vector3(50.21940612792969, 0, 63.9052734375),
  rotation: new Quaternion(-5.67359905191407e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(2, 5, 2)
})
mediumLuxuriousFenceModule3.addComponentOrReplace(transform68)

const mediumLuxuriousFenceModule4 = new Entity('mediumLuxuriousFenceModule4')
engine.addEntity(mediumLuxuriousFenceModule4)
mediumLuxuriousFenceModule4.setParent(_scene)
mediumLuxuriousFenceModule4.addComponentOrReplace(gltfShape12)
const transform69 = new Transform({
  position: new Vector3(14.259223937988281, 0, 64.04937744140625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 5, 2)
})
mediumLuxuriousFenceModule4.addComponentOrReplace(transform69)

const mediumLuxuriousFenceModule5 = new Entity('mediumLuxuriousFenceModule5')
engine.addEntity(mediumLuxuriousFenceModule5)
mediumLuxuriousFenceModule5.setParent(_scene)
mediumLuxuriousFenceModule5.addComponentOrReplace(gltfShape12)
const transform70 = new Transform({
  position: new Vector3(50.24531555175781, 0, 63.91197967529297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 5, 2)
})
mediumLuxuriousFenceModule5.addComponentOrReplace(transform70)

const mediumLuxuriousFenceModule6 = new Entity('mediumLuxuriousFenceModule6')
engine.addEntity(mediumLuxuriousFenceModule6)
mediumLuxuriousFenceModule6.setParent(_scene)
mediumLuxuriousFenceModule6.addComponentOrReplace(gltfShape12)
const transform71 = new Transform({
  position: new Vector3(38.62348556518555, 0, 63.983272552490234),
  rotation: new Quaternion(-5.67359905191407e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(2, 5, 2)
})
mediumLuxuriousFenceModule6.addComponentOrReplace(transform71)

const mediumLuxuriousFenceModule7 = new Entity('mediumLuxuriousFenceModule7')
engine.addEntity(mediumLuxuriousFenceModule7)
mediumLuxuriousFenceModule7.setParent(_scene)
mediumLuxuriousFenceModule7.addComponentOrReplace(gltfShape12)
const transform72 = new Transform({
  position: new Vector3(14.294261932373047, 0, 64.0174331665039),
  rotation: new Quaternion(-5.67359905191407e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(2, 5, 2)
})
mediumLuxuriousFenceModule7.addComponentOrReplace(transform72)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(32.5, 0, 93.86003875732422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(18.75406837463379, 1, 9.75)
})
triggerArea.addComponentOrReplace(transform73)

const ironFenceDoor = new Entity('ironFenceDoor')
engine.addEntity(ironFenceDoor)
ironFenceDoor.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(35, 0, 64),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.392803430557251, 4.223560810089111, 4.223560333251953)
})
ironFenceDoor.addComponentOrReplace(transform74)

const smallLuxuriousFenceModule = new Entity('smallLuxuriousFenceModule')
engine.addEntity(smallLuxuriousFenceModule)
smallLuxuriousFenceModule.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(27, 0, 64),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.265925168991089, 5.013143062591553, 1)
})
smallLuxuriousFenceModule.addComponentOrReplace(transform75)
const gltfShape13 = new GLTFShape("models/Fence_Stone_1M/Fence_Stone_1M.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
smallLuxuriousFenceModule.addComponentOrReplace(gltfShape13)

const smallLuxuriousFenceModule2 = new Entity('smallLuxuriousFenceModule2')
engine.addEntity(smallLuxuriousFenceModule2)
smallLuxuriousFenceModule2.setParent(_scene)
smallLuxuriousFenceModule2.addComponentOrReplace(gltfShape13)
const transform76 = new Transform({
  position: new Vector3(36.23991394042969, 0, 63.94817352294922),
  rotation: new Quaternion(3.1755625181566303e-15, 1, -1.1920926823449918e-7, 5.960464477539063e-8),
  scale: new Vector3(2.265925168991089, 5.013143062591553, 1)
})
smallLuxuriousFenceModule2.addComponentOrReplace(transform76)

const mediumLuxuriousFenceEndModule = new Entity('mediumLuxuriousFenceEndModule')
engine.addEntity(mediumLuxuriousFenceEndModule)
mediumLuxuriousFenceEndModule.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(35.21884536743164, 0, 64),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.554448366165161, 7.084144592285156, 3.554448366165161)
})
mediumLuxuriousFenceEndModule.addComponentOrReplace(transform77)
const gltfShape14 = new GLTFShape("models/Fence_Stone_End/Fence_Stone_End.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
mediumLuxuriousFenceEndModule.addComponentOrReplace(gltfShape14)

const mediumLuxuriousFenceEndModule2 = new Entity('mediumLuxuriousFenceEndModule2')
engine.addEntity(mediumLuxuriousFenceEndModule2)
mediumLuxuriousFenceEndModule2.setParent(_scene)
mediumLuxuriousFenceEndModule2.addComponentOrReplace(gltfShape14)
const transform78 = new Transform({
  position: new Vector3(27.97528839111328, 0, 63.929344177246094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.554448366165161, 7.084144592285156, 3.554448366165161)
})
mediumLuxuriousFenceEndModule2.addComponentOrReplace(transform78)

const smallLuxuriousFenceModule3 = new Entity('smallLuxuriousFenceModule3')
engine.addEntity(smallLuxuriousFenceModule3)
smallLuxuriousFenceModule3.setParent(_scene)
smallLuxuriousFenceModule3.addComponentOrReplace(gltfShape13)
const transform79 = new Transform({
  position: new Vector3(22.256006240844727, 0, 64),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.265925168991089, 5.013143062591553, 1.5060946941375732)
})
smallLuxuriousFenceModule3.addComponentOrReplace(transform79)

const smallLuxuriousFenceModule4 = new Entity('smallLuxuriousFenceModule4')
engine.addEntity(smallLuxuriousFenceModule4)
smallLuxuriousFenceModule4.setParent(_scene)
smallLuxuriousFenceModule4.addComponentOrReplace(gltfShape13)
const transform80 = new Transform({
  position: new Vector3(24.75293731689453, 0, 64),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.265925168991089, 5.013143062591553, 1)
})
smallLuxuriousFenceModule4.addComponentOrReplace(transform80)

const stoneAlt = new Entity('stoneAlt')
engine.addEntity(stoneAlt)
stoneAlt.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(59, 0, 66.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoneAlt.addComponentOrReplace(transform81)
const gltfShape15 = new GLTFShape("models/stone03_export3.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
stoneAlt.addComponentOrReplace(gltfShape15)

const stoneExport = new Entity('stoneExport')
engine.addEntity(stoneExport)
stoneExport.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(15.5, 0, 124),
  rotation: new Quaternion(0.2113015353679657, -0.3743652105331421, 0.16269218921661377, 0.8881068229675293),
  scale: new Vector3(1, 1.0000004768371582, 0.9999997019767761)
})
stoneExport.addComponentOrReplace(transform82)
const gltfShape16 = new GLTFShape("models/stone03_export5.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
stoneExport.addComponentOrReplace(gltfShape16)

const stone2 = new Entity('stone2')
engine.addEntity(stone2)
stone2.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(44.5, 0, 104.5),
  rotation: new Quaternion(0, -0.19509033858776093, 2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(1, 1, 1)
})
stone2.addComponentOrReplace(transform83)
const gltfShape17 = new GLTFShape("models/stone03_export2.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
stone2.addComponentOrReplace(gltfShape17)

const stone3 = new Entity('stone3')
engine.addEntity(stone3)
stone3.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(3.5, 0, 122),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3761253356933594, 1.3761253356933594, 1.3761253356933594)
})
stone3.addComponentOrReplace(transform84)
const gltfShape18 = new GLTFShape("models/stone03_export3b.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
stone3.addComponentOrReplace(gltfShape18)

const stone4 = new Entity('stone4')
engine.addEntity(stone4)
stone4.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(59, 0, 75),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5225486755371094, 0.5225486755371094, 0.5225486755371094)
})
stone4.addComponentOrReplace(transform85)
const gltfShape19 = new GLTFShape("models/stone03_export4.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
stone4.addComponentOrReplace(gltfShape19)

const stone = new Entity('stone')
engine.addEntity(stone)
stone.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(55, 0, 119.5),
  rotation: new Quaternion(-2.1133743084537915e-15, -0.8244251608848572, 9.8279130611445e-8, 0.5659710168838501),
  scale: new Vector3(1.2825047969818115, 1.2825050354003906, 1.2825047969818115)
})
stone.addComponentOrReplace(transform86)
const gltfShape20 = new GLTFShape("models/stone03_export7.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
stone.addComponentOrReplace(gltfShape20)

const stone5 = new Entity('stone5')
engine.addEntity(stone5)
stone5.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(45.5, 0, 119),
  rotation: new Quaternion(-1.10062582369541e-15, -0.6343932747840881, 7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(1.1354522705078125, 1.1354522705078125, 0.767402708530426)
})
stone5.addComponentOrReplace(transform87)
const gltfShape21 = new GLTFShape("models/stone03_export6.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
stone5.addComponentOrReplace(gltfShape21)

const zincite = new Entity('zincite')
engine.addEntity(zincite)
zincite.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(60, 0, 112.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6040802001953125, 0.6040802001953125, 0.6040802001953125)
})
zincite.addComponentOrReplace(transform88)
const gltfShape22 = new GLTFShape("models/stone01_export.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
zincite.addComponentOrReplace(gltfShape22)

const zincite2 = new Entity('zincite2')
engine.addEntity(zincite2)
zincite2.setParent(_scene)
zincite2.addComponentOrReplace(gltfShape22)
const transform89 = new Transform({
  position: new Vector3(60, 0, 112.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6040802001953125, 0.6040802001953125, 0.6040802001953125)
})
zincite2.addComponentOrReplace(transform89)

const zincite3 = new Entity('zincite3')
engine.addEntity(zincite3)
zincite3.setParent(_scene)
zincite3.addComponentOrReplace(gltfShape22)
const transform90 = new Transform({
  position: new Vector3(60.5, 0, 113.5),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(0.889090895652771, 0.889090895652771, 0.889090895652771)
})
zincite3.addComponentOrReplace(transform90)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script1.spawn(clickArea, {"enabled":true,"onClickText":"Interact","button":"PRIMARY","onClick":[{"entityName":"toolbox","actionId":"print","values":{"message":"You don't have anything to alchemize!","duration":5,"multiplayer":false}}]}, createChannel(channelId, clickArea, channelBus))
script2.spawn(toolbox, {}, createChannel(channelId, toolbox, channelBus))
script3.spawn(woodenDoor2, {"onClickText":"Open sesame","onClick":[{"entityName":"woodenDoor2","actionId":"toggle","values":{}}]}, createChannel(channelId, woodenDoor2, channelBus))
script4.spawn(triggerArea, {"enabled":true,"onLeave":[{"entityName":"woodenDoor2","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea, channelBus))
script5.spawn(ironFenceDoor, {"onClickText":"A shiny gate","onClick":[{"entityName":"ironFenceDoor","actionId":"toggle","values":{}}]}, createChannel(channelId, ironFenceDoor, channelBus))