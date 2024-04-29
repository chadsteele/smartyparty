/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import { Router, Route } from "@solidjs/router"
import QCards from './components/QCards'
import Steps from './components/Steps'

/* BoldLeaders/Elementals/Resources101/Learn/Elementals */

render(() => <Router root={App} >

    <Route path="/BoldLeaders/Elementals/Resources101/Act/RestoringTrust" component={Steps} />
    <Route path="/*" component={QCards} />


</Router>
    , document.getElementById("root"));
