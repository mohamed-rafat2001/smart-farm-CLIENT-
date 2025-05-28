import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';
import useLogin from './useLogin';
function Login() {
  const { register, handleSubmit, formState } = useForm();
  const { isLogin, loginUser, error } = useLogin();
  const { errors } = formState;
  function Submit(data) {
    console.log(error);
    loginUser(data);
  }
  return (
    <form className="pl-3 text-black sm:px-10" onSubmit={handleSubmit(Submit)}>
      <div className="h-[55px]">
        <input
          disabled={isLogin}
          className="w-[100%] border-b-1 border-gray-200 pb-3 focus:border-blue-600 focus:outline-0"
          id="email"
          type="email"
          name="email"
          placeholder="email"
          {...register('email', { required: 'email is required' })}
        />
        {errors?.email?.message && (
          <p className="text-end text-red-500">*{errors.email.message}*</p>
        )}
      </div>

      <div className="h-[55px]">
        <input
          disabled={isLogin}
          className="w-[100%] border-b-1 border-gray-200 pb-3 focus:border-blue-600 focus:outline-0"
          id="password"
          type="password"
          name="password"
          placeholder="password"
          {...register('password', { required: 'password is required' })}
        />
        {errors?.password?.message && (
          <p className="text-end text-red-500">*{errors.password.message}*</p>
        )}
      </div>
      <div className="w-[100%] text-center text-gray-500">
        {error && <p className="text-red-500">*{error.message}*</p>}
        <Button
          backgroundcolor="black"
          disabled={isLogin}
          className="mt-4 font-bold"
          color="rgb(101, 101, 241)"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
export default Login;
