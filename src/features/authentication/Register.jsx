import { NavLink, Outlet } from 'react-router-dom';

function Register() {
  return (
    <div className="w-[100%] rounded-3xl bg-white py-6 sm:w-[50%] sm:rounded-s-[0px]">
      <nav className="mb-5 flex justify-between text-center text-xl font-bold text-gray-500">
        <NavLink
          to="/registration/signUp"
          className="switch-link w-[100%] pb-5"
        >
          SignUp
        </NavLink>
        <NavLink to="/registration/login" className="switch-link w-[100%] pb-5">
          Login
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
export default Register;
