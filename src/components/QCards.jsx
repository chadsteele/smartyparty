import QCard from "./QCard.jsx"
import config from "./config.js"
import org from "../orgs/boldleaders.config.js"
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
import { setOpen } from './SideMenu'

import { DisplayText } from './Helpers.jsx'
import { getRoot } from './Select.jsx'

import "./QCard.css"

export default function (props) {

    const [original, setOriginal] = createSignal([])
    const [cards, setCards] = createSignal([])
    const [index, setIndex] = createSignal(0)
    const [intro, setIntro] = createSignal(false)
    const [root, setRoot] = createSignal()
    const [correct, setCorrect] = createSignal([])



    // update original when url changes
    createEffect(() => {
        setRoot(getRoot()[0])
        setOriginal(root().qa.map((item) => { item.correct = 0; item.missed = 0; return item }))
        setIntro(!!root().summary)

    })

    function reset () {
        setCards(original())
        setIndex(0)
        setIntro(true)
    }

    // update cards when original changes
    createEffect(() => {
        original() // trigger
        reset()
    })


    function next () {
        // ensure we're working with only 10 questions at a time, so that missed questions will get reviewed sooner than later
        setCards(original()
            .filter((card) => card.correct < 1) // remove cards we've learned
            .sort((a, b) => a.correct - b.correct) // sort to ensure the cards we've missed are in the front of the list
            .slice(0, 10))  // get the top 10

        console.log({ sorted: cards() })
        const temp = Math.floor(Math.random() * cards().length)
        setIndex(temp)

        setCorrect(original().filter((card) => card.correct == 1))
    }

    onMount(() => {
        next()
    })

    return <>
        <Container >

            <Show when={cards().length < original().length}>
                <LinearStatus
                    status={`${correct().length}/${original().length}`}
                    ratio={100 * correct().length / original().length}
                />
            </Show>


            <Show when={intro() && root()?.summary}>
                <Card>
                    <CardContent>
                        <h1><DisplayText text={root()?.title} /></h1>
                        <DisplayText text={root()?.summary} />
                        <Button onClick={() => { setIntro(false) }}>continue</Button>
                    </CardContent>
                </Card>

            </Show>


            <Show when={!intro() && cards().length || !root()?.summary}>
                <Box sx={{ width: "100%", position: "relative" }}>
                    <For each={cards()} fallback={<div>Loading...</div>}>{(item, i) =>
                        <Grow in={i() == index()}>
                            <QCard qa={item} next={next} focus={i() == index()} />
                        </Grow>
                    }</For>
                </Box>
            </Show>

            <Show when={cards().length == 0 && original().length > 0}>
                <Alert severity="success">
                    <h1>Congratulations!</h1>
                    You successfully completed this exercise and learned {original().length} new things!
                    <br></br>
                    <Stats cards={original()} />
                    <br></br>
                    <Button onClick={reset}>retry</Button>
                    <Button onClick={() => { setOpen(true) }}>menu</Button>
                </Alert>
            </Show>


        </Container>
    </>
}

function LinearStatus (props) {
    return <>

        <Show when={props.status != undefined}>
            <Box sx={{ fontStyle: "italic", color: "grey", textAlign: "right" }}>
                {props.status}
            </Box>
        </Show>
        <Box sx={{ marginBottom: "1em" }}>
            <LinearProgress variant="determinate" value={props.ratio} />
        </Box>

    </>
}

function Stats (props) {
    const { cards } = props
    if (!cards?.length) return <Alert severity="error">Stats function received an empty list</Alert>

    console.log({ stats: props })
    const totalMissed = cards?.reduce(function (total, card) { return total + card.missed }, 0)
    const numMissed = cards?.filter(card => card.missed).length
    const grade = Math.floor((cards.length - numMissed) / cards.length * 100)

    return <>
        You got {grade}% of the questions right on the first try, missed {numMissed} and required {totalMissed} total hints
    </>

}
