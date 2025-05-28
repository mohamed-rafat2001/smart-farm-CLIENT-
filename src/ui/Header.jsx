import { NavLink } from 'react-router-dom';
// import Logo from '../assets/WhatsApp Image 2025-05-15 at 02.55.46_e2d38c84.jpg';
import Logo from '../assets/logo.jpg';

function Header() {
  return (
    <header className="flex h-[90px] items-center justify-between px-5 font-bold text-stone-500">
      <div className="hidden h-[100%] pt-2 sm:block sm:w-[30%]">
        <img
          src={Logo}
          className="h-[100%] w-[22%] rounded-full object-cover"
        />
      </div>
      <nav className="flex w-[100%] justify-evenly sm:w-[60%]">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact Us
        </NavLink>
        <NavLink to="/registration" className="nav-link">
          Register
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
