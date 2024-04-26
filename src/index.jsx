/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import { Router, Route } from "@solidjs/router"
import QCards from './components/QCards'

/* BoldLeaders/Elementals/Resources101/Learn/Elementals */

render(() => <Router root={App} >

    <Route path="/*" component={QCards} />


</Router>
    , document.getElementById("root"));
