"use strict";
var L02_FirstFudge;
(function (L02_FirstFudge) {
    var ƒ = FudgeCore;
    let node;
    let viewport;
    let cmpCamera;
    window.addEventListener("load", init);
    function init(_event) {
        createScene();
        initializeCamera();
        initializeViewport();
        viewport.draw();
    }
    function initializeCamera() {
        cmpCamera = new ƒ.ComponentCamera();
        cmpCamera.pivot.translateZ(5);
        cmpCamera.pivot.rotateY(180);
    }
    function initializeViewport() {
        const canvas = document.querySelector("canvas");
        viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", node, cmpCamera, canvas);
    }
    function createScene() {
        node = new ƒ.Node("Quad");
        let mesh = new ƒ.MeshQuad();
        let cmpMesh = new ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        let mtrSolidWhite = new ƒ.Material("SolidWhite", ƒ.ShaderUniColor, new ƒ.CoatColored(ƒ.Color.CSS("WHITE")));
        let cmpMaterial = new ƒ.ComponentMaterial(mtrSolidWhite);
        node.addComponent(cmpMaterial);
    }
})(L02_FirstFudge || (L02_FirstFudge = {}));
//# sourceMappingURL=Main.js.map