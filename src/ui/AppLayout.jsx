import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar.jsx';
function AppLayout() {
  return (
    <div className="@container grid grid-cols-1 grid-rows-[auto_1fr] bg-[#101010] sm:grid-cols-[20%_80%] sm:grid-rows-[auto]">
      <Sidebar />
      <main className="w-[100%] bg-white p-5">
        <div className="h-[100%] rounded-3xl bg-stone-200 p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
export default AppLayout;
