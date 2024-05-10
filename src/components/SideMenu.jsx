import { Show, createSignal, } from "solid-js"
import { createStore } from "solid-js/store";
import theOrg from "../orgs/boldleaders.config.js"

import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText, Grow, Slide
} from "@suid/material";
import OpenIcon from "@suid/icons-material/ArrowDropDown"
import config from "./config.js"

import "./SideMenu.css"
import { useNavigate } from "@solidjs/router"



export const [open, setOpen] = createSignal(false)
export const [org, setOrg] = createSignal({})

export default function (props) {

    console.log({ SideMenu: props })
    setOrg(props.org || theOrg)

    console.log({ org: org() })

    return (
        <>
            <Drawer anchor="left" open={open()} onClose={() => { setOpen(false) }}>
                <List class="menu">
                    <Label url={org().url} label={org().label} html={org().html} enabled={!!org().url || org().menu.length} />
                    <Divider />
                    <Menu menu={org().menu} indent={0} />
                </List>
            </Drawer >
        </>
    );
}



function Label (props) {

    const { label, url, path, html, indent, toggle, enabled } = props

    const navigate = useNavigate();


    return <>
        <ListItem disablePadding>
            <ListItemButton
                disabled={!enabled && !url && !path}
                onClick={() => {
                    url && window.open(url, label)
                    path && console.log({ path })
                    path && navigate("./" + path.replace("./", ""))
                    toggle && toggle()
                }} >
                <Show when={!html && label} fallback={<div innerHTML={html} />}>
                    <ListItemText primary={label}
                        class="limit-label"
                        sx={{ ml: config.menu.indent * indent, }} />
                    <Show when={enabled}>
                        <OpenIcon class="open-icon"
                            // sx={{ transform: `rotate(${!props.opened ? -120 : 0}deg)`, transition: "transform .25s" }} />
                            sx={{ transform: !props.opened ? "rotate(-90deg)" : "rotate(0deg)", transition: "transform .25s" }} />
                    </Show>
                </Show>
            </ListItemButton>
        </ListItem>
    </>
}

function MenuItem (props) {
    const { item } = props

    function findNode (label, node) {
        console.log({ findNode: label, node })
        if (node.label == label) return node
        if (node?.menu) for (let item of node.menu) {
            const found = findNode(label, item)
            if (found) return found
            if (item.menu) return findNode(label, item.menu)
        }
        return null
    }

    const toggle = () => {
        let temp = org()
        setOrg({})

        const menuItem = findNode(item.label, temp)
        if (menuItem) menuItem.opened = !!!menuItem.opened
        setOrg(temp)
    }

    return <div >
        <Label html={item.html} label={item.label} indent={props.indent} menu={item.menu}
            toggle={toggle} opened={item.opened} url={item.url} path={item.path}
            enabled={!!item.url || item.menu?.length}
        />
        <Show when={item.menu?.length && item.opened}>
            {/* <Slide direction="left" in={item.menu && item.opened} timeout={250} > */}
            <Menu menu={item.menu} indent={props.indent + 1} />
            {/* </Slide> */}
        </Show>
    </div>
}

function Menu (props) {
    return <div>
        <For each={props.menu}>{
            (item) => <MenuItem item={item} indent={props.indent} />
        }</For >
    </div >
}