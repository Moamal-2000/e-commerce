import s from "./EditProfileForm.module.scss";

const EditProfileForm = () => {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form className={s.profileForm} onSubmit={handleSubmit}>
      <h2>Edit Your Profile</h2>

      <section className={s.inputs}>
        <section className={s.wrapper}>
          <div className={s.input}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Md" />
          </div>

          <div className={s.input}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Rimel" />
          </div>

          <div className={s.input}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="rimel1111@gmail.com" />
          </div>

          <div className={s.input}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Kingston, 5236, United State"
            />
          </div>
        </section>

        <section className={s.passwordInputs}>
          <div className={s.input}>
            <label htmlFor="currentPass">Password Changes</label>
            <input
              type="currentPass"
              id="currentPass"
              placeholder="Current Password"
            />
          </div>

          <div className={s.input}>
            <input type="password" id="newPass" placeholder="New Password" />
          </div>

          <div className={s.input}>
            <input
              type="password"
              id="confirmPass"
              placeholder="Confirm New Passwod"
            />
          </div>
        </section>
      </section>

      <div className={s.buttons}>
        <button type="reset" className={s.cancelButton}>
          Cancel
        </button>
        <button type="submit" className={s.submitButton}>
          Save Changes
        </button>
      </div>
    </form>
  );
};
export default EditProfileForm;
