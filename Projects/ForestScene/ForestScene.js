"use strict";
var ExampleSceneForest;
(function (ExampleSceneForest) {
    var f = FudgeCore;
    window.addEventListener("DOMContentLoaded", init);
    let node;
    let camera;
    let viewPort;
    function init() {
        f.RenderManager.initialize();
        createMiniForest();
        viewPort.draw();
        viewPort.showSceneGraph();
    }
    function createMiniForest() {
        let forest = new f.Node("Forest");
        let clrLeaves = new f.Color(0.2, 0.6, 0.3, 1);
        let clrNeedles = new f.Color(0.1, 0.5, 0.3, 1);
        let clrTrunkTree = new f.Color(0.5, 0.3, 0.0, 1);
        let clrCapMushroomBrown = new f.Color(0.6, 0.4, 0.0, 1);
        let clrCapMushroomRed = new f.Color(0.5, 0.0, 0.0, 1);
        let clrTrunkMushroom = new f.Color(0.9, 0.8, 0.7, 1);
        let clrGround = new f.Color(0.3, 0.6, 0.5, 1);
        let ground = createCompleteMeshNode("Ground", new f.Material("Ground", f.ShaderUniColor, new f.CoatColored(clrGround)), new f.MeshCube());
        let cmpGroundMesh = ground.getComponent(f.ComponentMesh);
        cmpGroundMesh.pivot.scale(new f.Vector3(6, 0.05, 6));
        node = ground;
        createViewport();
        let cmpCamera = camera.getComponent(f.ComponentTransform);
        cmpCamera.local.translateY(2);
        cmpCamera.local.rotateX(-10);
        let broadleaf = createBroadleaf("BroadLeaf", clrTrunkTree, clrLeaves, new f.Vector3(0, 0, 0), new f.Vector3(0.2, 0.5, 0.2));
        node.appendChild(broadleaf);
    }
    function createCompleteMeshNode(_name, _material, _mesh) {
        let node = new f.Node(_name);
        let cmpMesh = new f.ComponentMesh(_mesh);
        let cmpMaterial = new f.ComponentMaterial(_material);
        let cmpTransform = new f.ComponentTransform();
        node.addComponent(cmpMesh);
        node.addComponent(cmpMaterial);
        node.addComponent(cmpTransform);
        return node;
    }
    function createViewport(_canvas = null) {
        if (!_canvas) {
            _canvas = document.createElement("canvas");
            _canvas.width = 800;
            _canvas.height = 600;
            document.body.appendChild(_canvas);
        }
        viewPort = new f.Viewport();
        camera = createCamera();
        viewPort.initialize("viewport", node, camera.getComponent(f.ComponentCamera), _canvas);
    }
    function createCamera(_translation = new f.Vector3(1, 1, 10), _lookAt = new f.Vector3()) {
        let camera = new f.Node("Camera");
        let cmpTransform = new f.ComponentTransform();
        cmpTransform.local.translate(_translation);
        cmpTransform.local.lookAt(_lookAt);
        camera.addComponent(cmpTransform);
        let cmpCamera = new f.ComponentCamera();
        cmpCamera.projectCentral(1, 45, f.FIELD_OF_VIEW.DIAGONAL);
        camera.addComponent(cmpCamera);
        return camera;
    }
    function createBroadleaf(_name, _clrTrunk, _clrTop, _pos, _scale) {
        let tree = new f.Node(_name);
        let treeTrunk = createCompleteMeshNode("TreeTrunk", new f.Material("TrunkTree", f.ShaderUniColor, new f.CoatColored(_clrTrunk)), new f.MeshCube);
        let cmpTrunkMesh = treeTrunk.getComponent(f.ComponentMesh);
        cmpTrunkMesh.pivot.scale(_scale);
        cmpTrunkMesh.pivot.translateY(_scale.y / 2);
        let treeTop = createCompleteMeshNode("TreeTop", new f.Material("TreeTop", f.ShaderUniColor, new f.CoatColored(_clrTop)), new f.MeshCube);
        let cmpTreeTopMesh = treeTop.getComponent(f.ComponentMesh);
        cmpTreeTopMesh.pivot.scale(new f.Vector3((_scale.x * 2), (_scale.y * 3), (_scale.z * 2)));
        cmpTreeTopMesh.pivot.translateY((_scale.y * 2));
        tree.appendChild(treeTop);
        tree.appendChild(treeTrunk);
        tree.addComponent(new f.ComponentTransform);
        tree.cmpTransform.local.translate(_pos);
        return tree;
    }
})(ExampleSceneForest || (ExampleSceneForest = {}));
//# sourceMappingURL=ForestScene.js.map