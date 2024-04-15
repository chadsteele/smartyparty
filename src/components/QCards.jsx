import QCard from "./QCard.jsx"
import config from "./config.js"
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
    Stack, IconButton, Slide, Box
} from "@suid/material"

export default function () {

    const cards = [...config.QA]
    const [card, setCard] = createSignal("")
    console.log({ card: card(), cards })

    function next () {
        const old = card()
        let i = 0, newCard = card()

        while (old?.q == newCard?.q || newCard?.correct == 1) {
            i = Math.floor(Math.random() * cards.length)
            newCard = cards[i]
        }
        console.log({ i, newCard, cards })
        setCard(<QCard qa={newCard} next={next} />)
    }


    return <>
        <Container>

            {/* <QCard qa={cards[0]} next={next} /> */}

            <For each={cards}>{(c, i) =>
                <QCard qa={c} next={next} />
            }</For>

        </Container>
    </>
}