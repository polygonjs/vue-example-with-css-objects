import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1680013573163",
  root: "1680013573163",
  nodes: {
    geo1: "1680013573163",
    "geo1/MAT": "1680013573163",
    ground: "1680013573163",
    "ground/MAT": "1680013573163",
    "ground/MAT/meshStandardBuilder1": "1680013573163",
    COP: "1680013573163",
    lights: "1680013573163",
    cameras: "1680013573163",
    "cameras/cameraControls1": "1680013573163",
    "cameras/cameraCSSRenderer1": "1680013573163",
    CSSObjects: "1680013585226",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1680013585226",
      fragment: "1680013585226",
      "customDepthMaterial.vertex": "1680013585226",
      "customDepthMaterial.fragment": "1680013585226",
      "customDistanceMaterial.vertex": "1680013585226",
      "customDistanceMaterial.fragment": "1680013585226",
      "customDepthDOFMaterial.vertex": "1680013585226",
      "customDepthDOFMaterial.fragment": "1680013585226",
    },
  },
};

export const loadSceneData_scene_02 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_02",
    urlPrefix: sceneDataRoot + "/scene_02",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
