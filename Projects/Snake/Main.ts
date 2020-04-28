namespace L02_FirstFudge {
    import ƒ = FudgeCore;

    let node: ƒ.Node;
    let viewport: ƒ.Viewport;
    let cmpCamera: ƒ.ComponentCamera;
    window.addEventListener("load", init);

    function init(_event: Event): void {
        createScene();
        initializeCamera();
        initializeViewport();
        viewport.draw();
        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
        ƒ.Loop.start();
    }

    function initializeCamera(): void {
        cmpCamera = new ƒ.ComponentCamera();
        cmpCamera.pivot.translateZ(5);
        cmpCamera.pivot.rotateY(180);        
    }

    function initializeViewport(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", node, cmpCamera, canvas);        
    }

    function update(): void {
        node.mtxLocal.translateX(0.01);
        viewport.draw();
    }

    function createScene(): void {
        node = new ƒ.Node("Quad");
        node.addComponent(new ƒ.ComponentTransform(ƒ.Matrix4x4.TRANSLATION(new ƒ.Vector3(1, 0, 0))));

        let mesh: ƒ.MeshQuad = new ƒ.MeshQuad();
        let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        
        let mtrSolidWhite: ƒ.Material = new ƒ.Material("SolidWhite", ƒ.ShaderUniColor, new ƒ.CoatColored(ƒ.Color.CSS("WHITE")));
        let cmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(mtrSolidWhite);
        node.addComponent(cmpMaterial);
    }
}