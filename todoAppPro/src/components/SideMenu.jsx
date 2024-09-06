import React, {
	forwardRef
} from 'react';

const SideMenu = forwardRef((
	props, ref
) => {
	return (
		<div className={`sidemenu fixed top-0 w-full ${props.show} transition-all duration-200 h-screen z-10`}>
      <div ref={ref}{...props} className="slideMenu w-3/4 h-screen bg-white shadow z-50">
        <div className="w-full h-28 pl-6 pt-16 bg-sky-600">
          <h1 className="text-4xl font-extrabold text-white">To-Do Pro</h1>
		</div>
        <ul className="h-5/6 overflow-y-scroll px-2 pt-2 text-gray-700">
          <li className="flex p-3 justify-start items-center gap-6"><span className="material-symbols-outlined text-yellow-300 aside-list"> card_membership </span>Menjadi Pro</li>
          <li className="flex p-3 justify-start items-center gap-6"><span className="material-symbols-outlined text-sky-600 aside-list"> star </span>Bintang Tugas</li>
          <li className="p-3 border-b">
            <details className="">
              <summary className="list-none flex justify-start items-center gap-6">
                <span className="material-symbols-outlined text-sky-600 aside-list"> category </span>
                <span className="pr-20">Kategori</span>
                <span className="material-symbols-outlined justify-self-end"> arrow_drop_down </span>
              </summary>
              <ul className="pt-4">
                <li className="flex justify-between items-center pl-5 py-2">
                  <div className="flex items-center gap-6">
				<span className="material-symbols-outlined text-gray-300"> description </span>Semua
			</div>
                  <span>0</span>
                </li>
                <li className="flex justify-between items-center pl-5 py-2">
                  <div className="flex items-center gap-6">
				<span className="material-symbols-outlined text-gray-300"> description </span>Kerja
			</div>
                  <span>0</span>
                </li>
                <li className="flex justify-between items-center pl-5 py-2">
                  <div className="flex items-center gap-6">
				<span className="material-symbols-outlined text-gray-300"> description </span>Pribadi
			</div>
                  <span>0</span>
                </li>
                <li className="flex justify-between items-center pl-5 py-2">
                  <div className="flex items-center gap-6">
				<span className="material-symbols-outlined text-gray-300"> description </span>Wishlist
			</div>
                  <span>0</span>
                </li>
                <li className="flex justify-between items-center pl-5 py-2">
                  <div className="flex items-center gap-6">
				<span className="material-symbols-outlined text-gray-300"> description </span>Hari Ulang Tahun
			</div>
                  <span>0</span>
                </li>
                <li className="flex justify-between items-center pl-5 pt-3">
                  <div className="flex items-center gap-6">
				<span className="material-symbols-outlined text-blue-500"> add </span>buat baru
			</div>
                </li>
			</ul>
            </details>
          </li>
          <li className="flex p-3 justify-start items-center gap-6"><span className="material-symbols-outlined text-sky-600 aside-list"> format_paint </span>Tema</li>
          <li className="flex p-3 justify-start items-center gap-6"><span className="material-symbols-outlined text-sky-600 aside-list"> widgets </span>Widget</li>
          <li className="flex p-3 justify-start items-center gap-6"><span className="material-symbols-outlined text-sky-600 aside-list"> volunteer_activism </span>Sumbang</li>
          <li className="flex p-3 justify-start items-center gap-6"><span className="material-symbols-outlined text-sky-600 aside-list"> family_home </span>Aplikasi Keluarga</li>
          <li className="flex p-3 justify-start items-center gap-6"><span className="material-symbols-outlined text-sky-600 aside-list"> rate_review </span>Keritik saran</li>
          <li className="flex p-3 justify-start items-center gap-6"><span className="material-symbols-outlined text-sky-600 aside-list"> help </span>Tanya Jawab</li>
          <li className="flex p-3 justify-start items-center gap-6"><span className="material-symbols-outlined text-sky-600 aside-list"> settings </span>Pengaturan</li>
		</ul>
		</div>
		</div>
	)
});

export default SideMenu;