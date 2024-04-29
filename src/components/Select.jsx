import config from "./config.js"
import { Show, createSignal, createEffect } from "solid-js"
import { Alert, Button, Container } from "@suid/material"
import { useLocation } from "@solidjs/router"
import QCards from "./QCards"
import Steps from './Steps'

import { setOpen } from './SideMenu'


export default function (props) {

    const [original, setOriginal] = createSignal({})
    const [component, setComponent] = createSignal()


    // update original when url changes
    createEffect(() => {

        const loc = useLocation();
        console.log(loc.pathname)

        const root = config.org.defaults.filter((item) => item.path == loc.pathname) || config.org.defaults
        //root[0].steps.map((item) => { item.correct = 0; item.missed = 0; return item })
        setOriginal(root[0])

        if (original()?.steps) {
            setComponent(<Steps />)
        } else if (original()?.qa) {
            setComponent(<QCards />)
        } else {
            setComponent(
                <Container><Alert severity="error">
                    <h1>Sorry!  Page not found!</h1>
                    <Button onClick={() => { setOpen(true) }}>menu</Button>
                </Alert>
                </Container>
            )
        }

    })

    return <>
        <Show when={component()}>
            {component()}
        </Show>
    </>
}

