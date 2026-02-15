import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomeScreen } from "./components/HomeScreen";
import { MainPainting } from "./components/MainPainting";
import { ArtistScreen } from "./components/ArtistScreen";
import { TechniqueScreen } from "./components/TechniqueScreen";
import { SceneScreen } from "./components/SceneScreen";
import { ARViewScreen } from "./components/ARViewScreen";
import { AboutScreen } from "./components/AboutScreen";
import { CollectionScreen } from "./components/CollectionScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomeScreen },
      { path: "painting/:id", Component: MainPainting },
      { path: "artist", Component: ArtistScreen },
      { path: "technique", Component: TechniqueScreen },
      { path: "scene", Component: SceneScreen },
      { path: "ar", Component: ARViewScreen },
      { path: "about", Component: AboutScreen },
      { path: "collection/:id", Component: CollectionScreen },
    ],
  },
]);
