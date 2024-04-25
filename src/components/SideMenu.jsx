import { Show, createSignal } from "solid-js"

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


export const [open, setOpen] = createSignal(true)

export default function (props) {
    const org = props.org || config.org

    return (
        <>
            <Drawer anchor="left" open={open()} onClose={() => { setOpen(false) }}>
                <List class="menu">
                    <Label url={org.url} label={org.label} html={org.html} />
                    <Divider />
                    <Menu menu={org.menu} indent={0} />
                </List>
            </Drawer >
        </>
    );
}



function Label (props) {
    const { label, url, html, indent, toggle, menu } = props

    return <>
        <ListItem disablePadding>
            <ListItemButton onClick={() => {
                url && window.open(url, label)
                props.toggle && props.toggle()
            }} >
                <Show when={!html && label} fallback={<div innerHTML={html} />}>
                    <ListItemText primary={label}
                        class="limit-label"
                        sx={{ ml: config.menu.indent * indent, }} />
                    <Show when={menu?.length}>
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

    const [opened, setOpened] = createSignal(item.opened || false)
    const toggle = () => { setOpened(!opened()) }

    return <div >
        <Label html={item.html} label={item.label} indent={props.indent} menu={item.menu} toggle={toggle} opened={opened()} />
        <Show when={item.menu && opened()}>
            <Slide direction="left" in={item.menu && opened()} timeout={1000} >
                <div>
                    <Menu menu={item.menu} indent={props.indent + 1} />
                </div>
            </Slide>
        </Show>
    </div>
}

function Menu (props) {
    return <  >
        <For each={props.menu}>{
            (item) => {
                return <MenuItem item={item} indent={props.indent} />
            }}</For >
    </ >
}