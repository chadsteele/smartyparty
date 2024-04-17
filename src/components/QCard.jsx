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

import "./QCard.css"

export default function (props) {

    if (!props.qa) return <>Missing params!</>

    const [hint, setHint] = createSignal("")
    const [answer, setAnswer] = createSignal("")
    const [message, setMessage] = createSignal("")
    let ref


    onMount(() => {
        props.qa.correct = 0
    })

    createEffect(() => {
        setMessage(props.message || props.qa.message || "")
        if (props.focus) {
            setTimeout(() => { ref.focus() }, 0)
            setAnswer("")
            setHint("")
        }
    })

    function onEnter () {

        if (props.qa?.a?.trim() != answer().trim()) {
            onMiss()
        } else {
            ++props.qa.correct;
            setAnswer("")
            setHint("")
            props.next()
        }
    }

    function TextButtons () {
        return <>
            <IconButton disabled ><MicIcon /></IconButton>
            <IconButton onClick={onEnter} ><KeyboardReturnIcon /></IconButton>
        </>
    }

    function onMiss () {
        props.qa.correct = -2 // miss once, you have to get it right 3x to learn it
        let temp = props.qa.a
        if (!temp) return

        if (hint().length >= props.qa.a.length) {
            temp = getHint(temp)
        } else {
            // replace all letters with underscores
            temp = props.qa.a.replaceAll(/\w/g, '•')
        }
        setHint(temp)
    }

    return <>

        <Card class="card" >
            <CardContent>
                <div class="question">
                    {props.qa.q}
                </div>

                <TextField
                    label="your answer"
                    variant="outlined"
                    fullWidth
                    InputProps={{ endAdornment: <TextButtons /> }}
                    value={answer()}
                    inputRef={input => { ref = input }}

                    onChange={(event, value) => {
                        setAnswer(value)
                    }}

                    onKeyDown={(event) => {
                        if (event.key == 'Enter') {
                            if (event.shiftKey) {
                                setAnswer(props.qa.a)
                            }
                            onEnter()
                        }

                    }}
                    autoComplete="off"
                />
                <Show when={hint() && answer() != props.qa.a} >
                    <Alert severity="error" sx={{ marginTop: '1em' }}>
                        Hint: &nbsp;  <strong>{hint()}</strong>
                    </Alert>
                </Show>

                <Show when={answer() == props.qa.a} >
                    <Alert severity="success" sx={{ marginTop: '1em' }}>
                        Correct!
                    </Alert>
                </Show>

                <Show when={message()}>
                    <Stack direction="row" justifyContent="end" sx={{ fontSize: '0.8em', color: 'grey' }}>
                        {message()}
                    </Stack>
                </Show>

            </CardContent>
        </Card >

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