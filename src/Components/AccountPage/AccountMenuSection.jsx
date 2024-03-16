import { NavLink } from "react-router-dom";
import s from "./AccountMenuSection.module.scss";

const AccountMenuSection = () => {
  return (
    <section className={s.menuSection}>
      <section className={s.section}>
        <h2>Manage My Account</h2>

        <ul>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>

          <li>
            <a href="#">Address Book</a>
          </li>

          <li>
            <a href="#">My Payment Options</a>
          </li>
        </ul>
      </section>


      <section className={s.section}>
        <h2>My Orders</h2>

        <ul>
          <li>
            <a href="#">My Returns</a>
          </li>

          <li>
            <a href="#">My Cancellations</a>
          </li>
        </ul>
      </section>
    </section>
  );
};
export default AccountMenuSection;
