import { useState } from "react";
import {
  joystickThumbnail1,
  joystickThumbnail2,
  joystickThumbnail3,
  joystickThumbnail4,
} from "../../Assets/Images/Images";
import RateStars from "../Shared/MidComponents/RateStars";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./ProductDetails.module.scss";

const ProductDetails = ({ data }) => {
  const {
    shortName,
    name,
    type,
    price,
    discount,
    afterDiscount,
    addedDate,
    img,
    rate,
    votes,
    sold,
    id,
  } = data;
  const [quantity, setQuantity] = useState(1);

  return (
    <section className={styles.detailsSection}>
      <section className={styles.images}>
        <div className={styles.otherImages}>
          <img src={joystickThumbnail1} alt="" />
          <img src={joystickThumbnail2} alt="" />
          <img src={joystickThumbnail3} alt="" />
          <img src={joystickThumbnail4} alt="" />
        </div>

        <div className={styles.previewImgHolder}>
          <img src={img} alt={name} />
        </div>
      </section>

      <section className={styles.details}>
        <section className={styles.firstInfos}>
          <b className={styles.productName}>{name.toUpperCase()}</b>

          <section className={styles.rateAndReviews}>
            <RateStars rate={rate} />
            <span className={styles.reviews}>({votes} Reviews)</span>
            <div className={styles.verticalLine} />
            <span className={styles.greenText}>In Stock</span>
          </section>

          <span className={styles.price}>${price}</span>

          <p className={styles.description}>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
        </section>

        <div className={styles.horizontalLine} />

        <section className={styles.colors}>
          <span>Colours:</span>
          <div
            className={`${styles.color} ${styles.active}`}
            style={{ backgroundColor: "#a0bce0" }}
          ></div>

          <div
            className={styles.color}
            style={{ backgroundColor: "#e07575" }}
          ></div>
        </section>

        <section className={styles.sizes}>
          <span>Size:</span>

          <div className={styles.sizesWrapper}>
            <div className={styles.size}>XL</div>
            <div className={styles.size}>S</div>
            <div className={`${styles.size} ${styles.active}`}>M</div>
            <div className={styles.size}>L</div>
            <div className={styles.size}>XL</div>
          </div>
        </section>

        <section className={styles.dealing}>
          <div className={styles.customNumberInput}>
            <button
              onClick={() => setQuantity((prevNumber) => +prevNumber - 1)}
              type="button"
            >
              -
            </button>
            <input
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              min={1}
              max={1000}
            />
            <button
              onClick={() => setQuantity((prevNumber) => +prevNumber + 1)}
              type="button"
            >
              +
            </button>
          </div>

          <button type="button">Buy Now</button>
          <div className={styles.addToFav}>
            <SvgIcon name="heart" />
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <SvgIcon name="truck" />

            <div className={styles.content}>
              <b>Free Delivery</b>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
          </div>

          <div className={styles.feature}>
            <SvgIcon name="infiniteArrows" />

            <div className={styles.content}>
              <b>Return Delivery</b>
              <p>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default ProductDetails;
