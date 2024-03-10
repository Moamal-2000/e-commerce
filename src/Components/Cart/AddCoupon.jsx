import { useRef } from "react";
import styles from "./AddCoupon.module.scss";

const AddCoupon = () => {
  const couponInputRef = useRef("");

  return (
    <div className={styles.couponContainer}>
      <input
        type="text"
        placeholder="Example SAVE20"
        onChange={(e) => (couponInputRef.current = e.target.value)}
      />

      <button type="button">Apply Coupon</button>
    </div>
  );
};
export default AddCoupon;
