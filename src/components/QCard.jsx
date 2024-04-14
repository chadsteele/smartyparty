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
import { Show, createSignal, onMount, createEffect, onCleanup } from "solid-js"
import KeyboardReturnIcon from '@suid/icons-material/KeyboardReturn';
import MicIcon from '@suid/icons-material/Mic';
import { Transition } from "solid-transition-group"

import "./QCard.css"

export default function (params) {
    if (!params.qa) return ''
    params.qa.correct ||= 0  // init

    const [hint, setHint] = createSignal("")
    const [answer, setAnswer] = createSignal("")
    const [css, setCss] = createSignal("")

    onMount(() => {
        setCss("fade-in slide-in-left")
    })

    onCleanup(() => {
        setCss("fade-out slide-out-right")
    })


    function onEnter () {
        if (params.qa.a.trim() != answer().trim()) {
            onMiss()
        } else {
            params.qa.correct++
            params.next()
        }
    }

    function TextButtons () {
        return <>
            <IconButton disabled ><MicIcon /></IconButton>
            <IconButton onClick={onEnter} ><KeyboardReturnIcon /></IconButton>

        </>
    }

    function onMiss () {

        params.qa.correct = -2 // miss once, you have to get it right 3x to learn it
        let temp = params.qa.a
        if (!temp) return

        if (hint().length >= params.qa.a.length) {
            temp = getHint(temp)
        } else {
            // replace all letters with underscores
            temp = params.qa.a.replaceAll(/\w/g, '•')
        }

        setHint(temp)
    }

    return <>
        <Container>
            <Box sx={{ maxWidth: "50em", marginTop: "1em" }}>
                <Card class={css()}>
                    <CardContent>
                        <div class="question">
                            {params.qa.q}
                        </div>

                        <TextField
                            label="your answer"
                            variant="outlined"
                            fullWidth
                            InputProps={{ endAdornment: <TextButtons /> }}
                            value={answer()}

                            onChange={(event, value) => {
                                setAnswer(value)
                            }}

                            onKeyDown={(event) => {
                                if (event.key == 'Enter') {
                                    if (event.shiftKey) {
                                        setAnswer(params.qa.a)
                                    }
                                    onEnter()
                                }

                            }}
                            autoComplete="off"
                        />
                        <Show when={hint() && answer() != params.qa.a} >
                            <Alert severity="error" sx={{ marginTop: '1em' }}>
                                Hint: &nbsp;  <strong>{hint()}</strong>
                            </Alert>
                        </Show>

                        <Show when={params.qa.correct < 0}>
                            <Stack direction="row" justifyContent="end" sx={{ fontSize: '0.8em', color: 'grey' }}>
                                Retries required {1 - params.qa.correct}
                            </Stack>
                        </Show>

                    </CardContent>
                </Card>
            </Box>
        </Container >
    </>
}



function getHint (str, ratio = 1 / 2) {
    //reveal some of the letters
    const uniqueCharacters = [...new Set(str.split(""))].join("").match(/\w/g).join("")
    let replaceable = uniqueCharacters

    // leave the other letters, to be hidden later
    for (var i = 0; i < uniqueCharacters.length * ratio; i++) {
        replaceable = removeRandomLetter(replaceable)
    }

    const regx = new RegExp(`[${replaceable}]`, 'g')
    const temp = str.replaceAll(regx, '•')

    console.log({ uniqueCharacters, replaceable, regx, temp })
    return temp
}

function removeRandomLetter (str) {
    var pos = Math.floor(Math.random() * str.length);
    return str.substring(0, pos) + str.substring(pos + 1);
}