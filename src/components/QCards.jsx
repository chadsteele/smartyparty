import QCard from "./QCard.jsx"
import config from "./config.js"
import { Show, createSignal, onMount, createEffect } from "solid-js"

export default function () {

    const cards = [...config.QA]
    const [card, setCard] = createSignal(cards[0])
    console.log({ card: card(), cards })

    function next () {
        const old = card()
        let i = 0, newCard = card()

        while (old?.q == newCard?.q && newCard?.correct == 1) {
            i = Math.floor(Math.random() * cards.length)
            newCard = cards[i]
        }
        console.log({ i, newCard, cards })
        setCard(newCard)
    }


    return <>
        <QCard qa={card()} next={next} />
    </>
}