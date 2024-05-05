import config from "./config.js"
import org from "../orgs/boldleaders.config.js"
import ai from '../orgs/ai.config.js'
import { Show, createSignal, createEffect } from "solid-js"
import { Alert, Button, Container, Card, CardContent } from "@suid/material"
import { useLocation } from "@solidjs/router"
import QCards from "./QCards"
import Steps from './Steps'

import { setOpen } from './SideMenu'
import { DisplayText } from './Helpers.jsx'

import './Select.css'


export function getRoot () {
    const loc = useLocation();
    console.log(loc.pathname)

    const paths = [...org.paths, ...ai.paths]
    const root = paths.filter((item) => item.path.toLowerCase() == loc.pathname.toLowerCase()) || paths
    return root
}

export default function (props) {

    const [original, setOriginal] = createSignal({})
    const [component, setComponent] = createSignal()


    // update original when url changes
    createEffect(() => {

        setOriginal(getRoot()[0])

        if (original()?.steps) {
            setComponent(<Steps />)
        } else if (original()?.qa) {
            setComponent(<QCards />)
        } else if (original()?.html) {
            setComponent(
                <Container>
                    <Card>
                        <CardContent>
                            <DisplayText text={original().html} />
                        </CardContent>
                    </Card>
                </Container>
            )
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

