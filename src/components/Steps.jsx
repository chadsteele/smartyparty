import QCard from "./QCard.jsx"
import config from "./config.js"
import { createStore } from "solid-js/store";
import { Show, createSignal, onMount, createEffect } from "solid-js"
import {
    Alert,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    TextField,
    Typography,
    Stack, IconButton, Slide, Box, Grow, LinearProgress, Checkbox
} from "@suid/material"
import { useLocation } from "@solidjs/router"
import { setOpen } from './SideMenu'
import { DisplayText } from './Helpers.jsx'




export default function (props) {

    const [original, setOriginal] = createSignal({})


    // update original when url changes
    createEffect(() => {

        const loc = useLocation();
        console.log(loc.pathname)

        const root = config.org.defaults.filter((item) => item.path == loc.pathname) || config.org.defaults
        //root[0].steps.map((item) => { item.correct = 0; item.missed = 0; return item })
        setOriginal(root[0])

    })




    return <>
        <Container >
            <h2><DisplayText text={original().title} /></h2>
            <Box>
                <DisplayText text={original().intro} />
            </Box>

            <Box sx={{ width: "100%", position: "relative" }}>
                <ol>
                    <For each={original().steps} fallback={<div>Loading...</div>}>{
                        (step, i) => <li><Step step={step} /></li>
                    }</For>
                </ol>
            </Box>

        </Container>
    </>
}


function Step (props) {

    const [notes, setNotes] = createSignal(props.step.notes)
    const [showNotes, setShowNotes] = createSignal(!!props.step.notes)

    function toggleNotes () {
        setShowNotes(!showNotes())
    }

    return <Box >


        <h4>{props.step.title} </h4>
        <p onClick={toggleNotes}> {props.step.text}

        </p>
        <Show when={notes() || showNotes()} fallback={<Button size="small" onClick={toggleNotes} >✏️ notes</Button>}>
            <TextField label="Notes" value={notes()} sx={{ width: "100%" }} />
        </Show>


    </Box>
}