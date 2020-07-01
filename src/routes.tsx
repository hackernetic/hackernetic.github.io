import { mount, route } from "navi"
import * as React from "react"
import { Home } from "./layouts/Home"
import { config } from "~config"

export const routes = mount({
  "/": route({
    title: config.title,
    getData: () => null,
    view: <Home />,
  }),
})
