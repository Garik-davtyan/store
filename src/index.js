

import React from "react"
import * as ReactDOMClient from "react-dom/client"
import Lider from "./probnih/lider"
import "./probnih/sport.css"

const main = ReactDOMClient.createRoot(document.getElementById('app'))

main.render(<Lider/>)


