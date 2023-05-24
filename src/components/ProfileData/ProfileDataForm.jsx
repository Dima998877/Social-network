import { useForm } from 'react-hook-form';

const ProfileDataForm = ({ initialValues, profile, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <button>save</button>
      </div>
      <div>
        <b>Name:</b>
        <input
          placeholder='Full name'
          {...register('fullName', { required: true })}
        />{' '}
        {errors.fullname && <span>'This field is required'</span>}
      </div>
      <div>
        <b>About me:</b>
        <input
          placeholder='About me'
          {...register('aboutMe', { required: true })}
        />{' '}
        {errors.aboutMe && <span>'This field is required'</span>}
      </div>
      <div>
        <b>Job status:</b>
        <input
          placeholder='Job status'
          {...register('lookingForAJobDescription', { required: true })}
        />{' '}
        {errors.lookingForAJobDescription && (
          <span>'This field is required'</span>
        )}
      </div>

      <div>
        Contacts:{' '}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>{key}:</b>
              <input placeholder={key} {...register(`contacts.${key}`)} />
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default ProfileDataForm;
