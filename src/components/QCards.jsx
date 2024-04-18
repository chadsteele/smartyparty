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
    const originalCards = (params.QA || config.QA).map((item) => { item.correct = 0; return item })
    const [cards, setCards] = createSignal(originalCards)
    const [index, setIndex] = createSignal(0)
    const [progress, setProgress] = createSignal(0)

    function next () {
        setCards(cards().filter((card) => card.correct < 1))
        const temp = Math.floor(Math.random() * cards().length)
        setIndex()
        setProgress(100 * (originalCards.length - cards().length) / originalCards.length)

        console.log({ cards: cards(), index: index() })
    }

    onMount(() => {
        next()
    })

    return <>
        <LinearProgress variant="determinate" value={progress()} />
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


