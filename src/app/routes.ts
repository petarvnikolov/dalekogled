import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { MainPainting } from "./components/MainPainting";
import { ArtistScreen } from "./components/ArtistScreen";
import { TechniqueScreen } from "./components/TechniqueScreen";
import { SceneScreen } from "./components/SceneScreen";
import { ARViewScreen } from "./components/ARViewScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: MainPainting },
      { path: "artist", Component: ArtistScreen },
      { path: "technique", Component: TechniqueScreen },
      { path: "scene", Component: SceneScreen },
      { path: "ar", Component: ARViewScreen },
    ],
  },
]);
