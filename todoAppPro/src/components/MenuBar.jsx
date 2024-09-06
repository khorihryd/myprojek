import {
	useState
} from 'react';

export default function MenuBar( {
	openSideMenu
}) {

	return(
		<nav className="fixed bottom-0 left-0 pl-4 pr-7 py-3 shadow-[10px_0_15px_-3px_rgba(0,0,0,0.3)] flex justify-between items-center w-full bg-white">
      <button id="btnMenu" onClick={openSideMenu} className="flex flex-col justify-center items-center"><span className="material-symbols-outlined iconNav text-gray-400"> menu </span></button>
      <a href="#" className="flex flex-col justify-center items-center text-xs text-blue-600"><span className="material-symbols-outlined iconNav"> task </span>tugas</a>
      <a href="#" className="flex flex-col justify-center items-center text-xs text-gray-400"><span className="material-symbols-outlined iconNav"> calendar_month </span>kalender</a>
      <a href="#" className="flex flex-col justify-center items-center text-xs text-grayll
			-400"><span className="material-symbols-outlined iconNav"> person </span>Miliku</a>
		</nav>
	)
}