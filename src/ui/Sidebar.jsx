import { useNavigate, NavLink } from 'react-router-dom';
import defaultProfileImg from '../assets/defaultProfileImage.jpeg';
import Button from './Button';
function Sidebar() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate('/');
  };
  return (
    <aside className="w-[100%] p-10 text-left font-bold text-stone-500">
      <div className="items-left mb-10 flex flex-col">
        <div className="mb-3 h-25 w-25">
          <img
            src={defaultProfileImg}
            className="h-[100%] w-[100%] rounded-xl border-2 border-gray-200 object-cover"
          />
        </div>

        <h1 className="text-xl text-white">mohamed rafat</h1>
        <p className="text-xs">mohamed20rafat@gmail.com</p>
      </div>
      <nav className="mb-8 flex flex-col gap-y-8">
        <NavLink to="/app/farmsDashboard" className="nav-link">
          Dashboard
        </NavLink>

        <NavLink to="/app/profile" className="nav-link">
          Profile
        </NavLink>
        <NavLink to="/app/farms" className="nav-link">
          Farms
        </NavLink>
        <NavLink to="/app/settings" className="nav-link">
          Settings
        </NavLink>
      </nav>
      <div className="w-full text-center text-white">
        <Button onClick={handleLogOut}>LogOut</Button>
      </div>
    </aside>
  );
}
export default Sidebar;
