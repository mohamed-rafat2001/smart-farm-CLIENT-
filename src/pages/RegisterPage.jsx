import Register from '../features/authentication/Register.jsx';
import asiedImg from '../assets/3d-illustration-smart-farming-concept_932730-391.avif';
import Header from '../ui/Header.jsx';

function RegisterPage() {
  return (
    <div className="h-screen bg-[#101010]">
      <Header />
      <div className="mt-0 flex h-[80%] w-[100%] items-center justify-center">
        <div className="flex h-[95%] w-[70%]">
          <img
            src={asiedImg}
            className="hidden rounded-s-3xl object-cover opacity-60 sm:block sm:w-[50%]"
          />
          <Register />
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
