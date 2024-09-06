import {
	useState,
	useEffect,
	useRef
} from 'react';
import MenuBar from './components/MenuBar';
import SideMenu from './components/SideMenu';

function App() {
	const [menu,
		setMenu] = useState(false);
	const childRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menu && childRef.current && !childRef.current.contains(event.target)) {
				setMenu(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	},
		[menu]);

	return (
		<div>
		<h1>khori haryadi presiden republik indonesia</h1>
		<MenuBar openSideMenu={()=> { !menu ? setMenu(true): null }} />
		<SideMenu show={!menu ? "right-full": "right-0"} ref={childRef} />
		</div>
	)
}

export default App