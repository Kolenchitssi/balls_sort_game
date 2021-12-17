import React, { FC } from "react";

export interface IRoute {
  path: string;
  element: FC<{}>;
}
