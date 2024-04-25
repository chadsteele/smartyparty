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


import "./QCard.css"

export default function (params) {
    const originalCards = (config.QA).map((item) => { item.correct = 0; return item })
    const [cards, setCards] = createSignal(originalCards)
    const [index, setIndex] = createSignal(0)

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
                status={`${originalCards.length - cards().length}/${originalCards.length}`}
                ratio={100 * (originalCards.length - cards().length) / originalCards.length}
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
