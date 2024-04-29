/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import { Router, Route } from "@solidjs/router"
import Select from './components/Select'

/* BoldLeaders/Elementals/Resources101/Learn/Elementals */

render(() => <Router root={App} >

    <Route path="/*" component={Select} />

</Router>
    , document.getElementById("root"));
