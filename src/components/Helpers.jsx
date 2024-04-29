export function convertText (text) {

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

export function DisplayText (props) {
    return <>
        {convertText(props.text)}
    </>
}

