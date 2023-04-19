import { reduxForm } from 'redux-form';

import styles from './ProfileDataForm.module.css';
import { createField, Input } from '../../Common/FormControls/FormControls';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      <div>
        <b>Name:</b>
        {createField('Full name', 'fullName', Input, [])}
      </div>
      <div>
        <b>About me:</b>
        {createField('About me', 'aboutMe', Input, [])}
      </div>
      <div>
        <b>Job status:</b>
        {createField('Job status', 'lookingForAJobDescription', Input, [])}
      </div>

      <div>
        Contacts:{' '}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>{key}:</b>
              {createField(key, 'contacts.' + key, Input, [])}
            </div>
          );
        })}
        <div className={styles.formSummaryError}>{error}</div>
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: 'edit-profile',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ProfileDataForm);
export default ProfileDataReduxForm;
