import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-5 py-5 w-full sm:px-10">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm transition-all cursor-pointer text-gray hover:text-white">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
         
        </div>
      </nav>
    </header>
  )
}

export default Navbar