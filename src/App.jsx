import MenuBar from "./components/MenuBar"
import SideMenu from "./components/SideMenu"

export default function App (props) {
	return <>
		<MenuBar />
		<SideMenu />
		{props.children}
	</>
}
