import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar.jsx';
function AppLayout() {
  return (
    <div className="@container grid h-screen grid-cols-1 grid-rows-[auto_1fr] bg-[#101010] py-5 sm:grid-cols-[20%_80%] sm:grid-rows-[auto]">
      <Sidebar />
      <main className="w-[100%] rounded-3xl bg-white p-10">
        <Outlet />
      </main>
    </div>
  );
}
export default AppLayout;
