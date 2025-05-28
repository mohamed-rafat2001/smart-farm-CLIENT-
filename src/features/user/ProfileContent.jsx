import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import ProfileSettings from './ProfileSettings';

function ProfileContent() {
  const [Default, setDefault] = useState(true);
  return (
    <div>
      <div className="my-5 font-bold">
        <button
          type="button"
          className="switch-link me-15"
          onClick={() => {
            setDefault(true);
          }}
        >
          Personal Details
        </button>
        <button
          type="button"
          className="switch-link"
          onClick={() => {
            setDefault(false);
          }}
        >
          Settings
        </button>
      </div>
      {Default ? <PersonalDetails /> : <ProfileSettings />}
    </div>
  );
}

export default ProfileContent;
