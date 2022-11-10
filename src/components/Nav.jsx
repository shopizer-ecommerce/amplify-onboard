import { NavProfile } from ".";

const Nav = ({ handleSignOut }) => (
  <header className="w-full shadow-md z-30 px-2 py-1.5 bg-white text-slate-500">
    <div className="container mx-auto flex flex-wrap justify-between px-2">
      
      <img src="./logo_tng-xtra-small.jpg" alt="Tip N Go"/>
      <NavProfile handleSignOut={handleSignOut} />
    </div>
  </header>
);

export default Nav;
