import Error from "./Error/Error";
import GameField from "./GameField/GameField";
import GameOver from "./GameOver/GameOver";
import Home from "../components/Home/Home";
import { IRoute } from "../models/IRoute";
import { routePath } from "./routePath";

export const publicRoutes: IRoute[] = [
  { path: routePath.HOME, element: Home },
  { path: routePath.START, element: GameField },
  { path: routePath.GAMEOVER, element: GameOver },
  { path: routePath.ERROR, element: Error },
];
