import { NavLink } from 'react-router-dom';
import Button from './Button';
import useLogOut from '../features/authentication/useLogout';
import Logo from '../assets/logo.jpg';
function Sidebar() {
  const { isLogOut, logOutUser } = useLogOut();

  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <aside className="w-[100% ] h-screen pt-10 text-lg font-bold text-stone-500 capitalize">
      <div className="mb-10 flex flex-col items-center justify-center border-b-1 border-stone-400 uppercase lg:flex-row">
        <div className="me-2 mb-3 h-20 w-20">
          <img
            src={Logo}
            className="h-[100%] w-[100%] rounded-full border-2 border-gray-200 object-cover"
          />
        </div>
        <div>
          <h1 className="mb-2 text-white">Smart Farm</h1>
        </div>
      </div>
      <nav className="mb-8 flex flex-col items-center gap-y-8 text-start">
        <NavLink to="/app/profile" className="nav-link sm:w-[50%]">
          Profile
        </NavLink>

        <NavLink to="/app/farmsDashboard" className="nav-link sm:w-[50%]">
          Dashboard
        </NavLink>

        <NavLink to="/app/farms" className="nav-link sm:w-[50%]">
          Farms
        </NavLink>
        <NavLink to="/app/settings" className="nav-link sm:w-[50%]">
          Settings
        </NavLink>
      </nav>
      <div className="w-full text-center text-white">
        <Button
          backgroundcolor="gray"
          disabled={isLogOut}
          onClick={handleLogOut}
        >
          LogOut
        </Button>
      </div>
    </aside>
  );
}
export default Sidebar;
