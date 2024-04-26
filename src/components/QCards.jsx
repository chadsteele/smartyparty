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
    Stack, IconButton, Slide, Box, Grow, LinearProgress
} from "@suid/material"
import { useLocation } from "@solidjs/router"


import "./QCard.css"

export default function (props) {

    const [original, setOriginal] = createSignal([])
    const [cards, setCards] = createSignal([])
    const [index, setIndex] = createSignal(0)


    // update original when url changes
    createEffect(() => {

        const loc = useLocation();
        console.log(loc.pathname)

        const root = config.org.defaults.filter((item) => item.path == loc.pathname) || config.org.defaults
        setOriginal(root[0].qa.map((item) => { item.correct = 0; return item }))

    })

    // update cards when original changes
    createEffect(() => {
        setCards(original())
        setIndex(0)
    })


    function next () {
        setCards(cards().filter((card) => card.correct < 1))
        const temp = Math.floor(Math.random() * cards().length)
        setIndex(temp)

        console.log({ cards: cards(), index: index() })
    }

    onMount(() => {
        next()
    })

    return <>
        <Container sx={{ m: 1, textAlign: "right" }}>
            <LinearStatus
                status={`${original().length - cards().length}/${original().length}`}
                ratio={100 * (original().length - cards().length) / original().length}
            />
        </Container>

        <Container >
            <Show when={cards().length}>
                <Box sx={{ width: "100%", position: "relative" }}>
                    <For each={cards()} fallback={<div>Loading...</div>}>{(item, i) =>
                        <Grow in={i() == index()}>
                            <QCard qa={item} next={next} focus={i() == index()} />
                        </Grow>
                    }</For>
                </Box>
            </Show>
        </Container>
    </>
}

function LinearStatus (props) {
    return <>
        <Show when={props.status != undefined}>
            <Box sx={{ right: 0, fontStyle: "italic", color: "grey" }}>
                {props.status}
            </Box>
        </Show>
        <Box >
            <LinearProgress variant="determinate" value={props.ratio} />
        </Box>
    </>
}
