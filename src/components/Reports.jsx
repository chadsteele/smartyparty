import { Box, } from "@suid/material"
import { list } from "./Listener"


export default function () {
    return <>
        <For each={list()}>{(item, i) =>
            <Report report={item} />
        }</For>
    </>
}

export function Report (props) {
    const report = { ...{ title: "", emoji: "", summary: "", questions: [] }, ...props.report }
    return <>
        <Box>
            <h1>{report.title} {report.emoji}</h1>
            {report.summary}
            <ul>
                <For each={report.questions}>{(q, i) =>
                    <li>
                        {q}
                    </li>
                }</For>
            </ul>
        </Box>
    </>
}