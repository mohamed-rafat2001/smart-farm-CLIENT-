import { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import UpdatePassword from './UpdatePassword';

function ProfileSettings() {
  const [content, setContent] = useState('');
  return (
    <>
      {!content && (
        <div className="mt-10 flex flex-col items-start gap-y-20 font-bold">
          <button
            type="button"
            className="switch-link capitalize"
            onClick={() => {
              setContent('updatePassword');
            }}
          >
            update password
          </button>
          <button
            type="button"
            className="switch-link capitalize"
            onClick={() => {
              setContent('forgotPassword');
            }}
          >
            forgot password
          </button>
        </div>
      )}
      {content === 'updatePassword' && (
        <div>
          <button
            type="button"
            className="switch-link my-5"
            onClick={() => {
              setContent('');
            }}
          >
            ← Back to Settings
          </button>
          <UpdatePassword />
        </div>
      )}
      {content === 'forgotPassword' && (
        <div>
          <button
            type="button"
            className="switch-link my-5"
            onClick={() => {
              setContent('');
            }}
          >
            ← Back to Settings
          </button>
          <ForgotPassword />
        </div>
      )}
    </>
  );
}
export default ProfileSettings;
