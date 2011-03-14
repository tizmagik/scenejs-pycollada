SceneJS.createNode({"nodes": [{"baseColor": {"r": 0.64000000000000001, "b": 0.64000000000000001, "g": 0.64000000000000001}, "type": "material", "id": "Material-effect", "emit": 0.0}, {"primitive": "triangles", "resource": "Cube-mesh", "positions": [1.0, 1.0, -1.0, 1.2008039951324463, -1.0, -1.0, 1.2008039951324463, 0.9999995231628418, 1.0, 0.12818129360675812, -1.0000009536743164, 1.0, 1.2008039951324463, 0.9999995231628418, 1.0, 1.2008039951324463, -1.0, -1.0], "normals": [0.99006932973861694, 0.099404752254486084, -0.09940493106842041, 0.99006932973861694, 0.099404752254486084, -0.09940493106842041, 0.99006932973861694, 0.099404752254486084, -0.09940493106842041, 0.79675352573394775, -0.42730799317359924, 0.4273076057434082, 0.79675352573394775, -0.42730799317359924, 0.4273076057434082, 0.79675352573394775, -0.42730799317359924, 0.4273076057434082], "indices": [0, 2, 1, 4, 3, 5], "type": "geometry", "id": "Cube-mesh"}], "type": "library"});
SceneJS.createNode({"nodes": [{"clear": {"color": true, "depth": true, "stencil": false}, "nodes": [{"eye": {"y": -6.5076400000000003, "x": 7.4811319999999997, "z": 5.3436649999999997}, "nodes": [{"optics": {"far": 100.0, "near": 0.10000000000000001, "type": "perspective", "aspect": 1.0, "fovy": 87.349948696520002}, "nodes": [{"nodes": [{"color": {"r": 1.0, "b": 1.0, "g": 1.0}, "quadraticAttenuation": 0.00080000000000000004, "linearAttenuation": 0.0, "mode": "point", "type": "light", "constantAttenuation": 1.0}], "elements": [1.0, 0.0, 0.0, 2.2780049999999998, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 4.6668409999999998, 0.0, 0.0, 0.0, 1.0], "type": "matrix"}, {"nodes": [{"baseColor": {"r": 0.64000000000000001, "b": 0.64000000000000001, "g": 0.64000000000000001}, "nodes": [{"type": "instance", "target": "Cube-mesh"}], "type": "material", "id": "Cube-mesh-Material-effect", "emit": 0.0}], "elements": [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0], "type": "matrix"}], "type": "camera"}], "type": "lookAt", "look": {"y": -5.8969743745885523, "x": 6.8262701777218977, "z": 4.8984195759208191}, "up": {"y": 0.31246870174071106, "x": -0.31737015350654024, "z": 0.89534322809507516}}], "type": "renderer", "clearColor": {"r": 0.40000000000000002, "b": 0.40000000000000002, "g": 0.40000000000000002}}], "loggingElementId": "scenejsLog", "canvasId": "scenejsCanvas", "type": "scene", "id": "Scene"});
