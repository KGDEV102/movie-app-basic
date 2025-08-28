function Navbar() {
    return (
      <div className="bg-black text-white flex items-center justify-between px-8 py-4 ">
        <div className="flex gap-8 items-center">
          <h2 className="font-bold text-3xl text-red-600">MOVIE</h2>
          <ul className="flex gap-6 font-semibold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <input type="text" placeholder="Seach..." className="p-3 text-black/80 bg-white rounded" />
          <button className="bg-red-500 p-2 rounded-lg">Search</button>
        </div>
      </div>
    );
}

export default Navbar;