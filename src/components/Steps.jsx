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
import { setOpen } from './SideMenu'



export default function (props) {

    const [original, setOriginal] = createSignal({})
    const [title, setTitle] = createSignal("")
    const [intro, setIntro] = createSignal("")

    // update original when url changes
    createEffect(() => {

        const loc = useLocation();
        console.log(loc.pathname)

        setTitle(loc.pathname.replaceAll("/", <> / </>))

        const root = config.org.defaults.filter((item) => item.path == loc.pathname) || config.org.defaults
        //root[0].steps.map((item) => { item.correct = 0; item.missed = 0; return item })
        setOriginal(root[0])
        setIntro(root[0].intro)

        console.log({ intro: intro() })

    })




    return <>
        <Container >
            <h4>{title()}</h4>
            <h4>{original().title}</h4>
            <Box>

                {ConvertText(original().intro)}

            </Box>

            <Box sx={{ width: "100%", position: "relative" }}>
                content goes here
                {/* <For each={cards()} fallback={<div>Loading...</div>}>{(item, i) =>
                        <Grow in={i() == index()}>
                            <QCard qa={item} next={next} focus={i() == index()} />
                        </Grow>
                    }</For> */}
            </Box>

        </Container>
    </>
}


function ConvertText (text) {

    console.log(text)
    if (!text) return <></>

    if (text.match(/[<>/]/g)?.length > 2) {
        //assume HTML
        return <div innerHTML={text} />
    } else {
        // convert linebreaks to <p>
        return <>
            <For each={text.split("\n")}>{(p) => {
                if (p.trim()) return <p>{p}</p>
                return ""
            }
            }</For>
        </>
    }
}

