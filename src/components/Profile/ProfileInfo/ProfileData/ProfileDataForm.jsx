import { reduxForm } from 'redux-form'
import { createField, Input } from '../../../Common/FormControls/FormControls'
import { Contacts } from '../ProfileInfo'


const ProfileDataForm = ({  handleSubmit, diactivateEditMode }) => {
   return (
      <form onSubmit={handleSubmit}>
         <div><button onClick={diactivateEditMode}>save</button></div>
         <div>
            <b>Name:</b>{createField('Full name', 'fullName', Input, [],)}
         </div>
         <div>
            <b>About me:</b>{createField('About me', 'aboutMe', Input, [],)}
         </div>
         <div><b>Job status:</b>{createField('Job status', 'lookingForAJobDescription', Input, [],)}</div>
         {/* <div>Contacts: {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key}} />
         })
         }
         </div> */}
      </form>

   )
}

const ProfileDataReduxForm =  reduxForm({ form: "edit-profile", enableReinitialize: true, destroyOnUnmount: false })(ProfileDataForm)
export default ProfileDataReduxForm