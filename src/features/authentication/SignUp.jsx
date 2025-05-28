import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';
import { useSignUp } from './useSignUp';
function SignUp() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { isSignUp, mutate } = useSignUp();
  const { errors } = formState;
  function Submit(data) {
    mutate(data);
  }
  return (
    <form className="pl-3 text-black sm:px-10" onSubmit={handleSubmit(Submit)}>
      <div className="h-[55px]">
        <input
          disabled={isSignUp}
          className="w-[100%] border-b-1 border-gray-200 pb-3 focus:border-blue-600 focus:outline-0"
          id="firstName"
          type="text"
          name="firstName"
          placeholder="first Name"
          {...register('firstName', {
            required: 'first name is required',
            min: { value: 2, message: 'min length is 2' },
          })}
        />
        {errors?.firstName?.message && (
          <p className="text-end text-red-500">*{errors.firstName.message}*</p>
        )}
      </div>

      <div className="h-[55px]">
        <input
          disabled={isSignUp}
          className="w-[100%] border-b-1 border-gray-200 pb-3 focus:border-blue-600 focus:outline-0"
          id="lastName"
          type="text"
          name="lastName"
          placeholder="last Name"
          {...register('lastName', {
            required: 'last name is required',
            min: { value: 2, message: 'min length is 2' },
          })}
        />
        {errors?.lastName?.message && (
          <p className="text-end text-red-500">*{errors.lastName.message}*</p>
        )}
      </div>
      <div className="h-[55px]">
        <input
          disabled={isSignUp}
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
          disabled={isSignUp}
          className="w-[100%] border-b-1 border-gray-200 pb-3 focus:border-blue-600 focus:outline-0"
          id="phone"
          type="text"
          name="phoneNumber"
          placeholder="phone number"
          {...register('phoneNumber', {
            required: 'phone number is required',
          })}
        />
        {errors?.phoneNumber?.message && (
          <p className="text-end text-red-500">
            *{errors.phoneNumber.message}*
          </p>
        )}
      </div>
      <div className="h-[55px]">
        <input
          disabled={isSignUp}
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
      <div className="h-[55px]">
        <input
          disabled={isSignUp}
          className="w-[100%] border-b-1 border-gray-200 pb-3 focus:border-blue-600 focus:outline-0"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="confirm Password"
          {...register('confirmPassword', {
            required: 'confirm password is required',
            validate: (value) =>
              value === getValues().password || 'passwords are not the same',
          })}
        />
        {errors?.confirmPassword?.message && (
          <p className="text-end text-red-500">
            *{errors.confirmPassword.message}*
          </p>
        )}
      </div>
      <div className="w-[100%] text-center text-gray-500">
        {/* {error && <p className="text-red-500">*{error.message}*</p>} */}
        <Button
          backgroundcolor="black"
          disabled={isSignUp}
          className="mt-3 font-bold"
          color="rgb(101, 101, 241)"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
export default SignUp;
