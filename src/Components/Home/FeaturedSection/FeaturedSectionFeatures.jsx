import { car, correctSign, headphone } from "src/Assets/Images/Images";
import Feature from "../../Shared/MiniComponents/Feature";
import s from "./FeaturedSectionFeatures.module.scss";

const FeaturedSectionFeatures = () => {
  return (
    <div className={s.features}>
      <Feature
        iconImg={car}
        iconAlt="Car"
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />

      <Feature
        iconImg={headphone}
        iconAlt="Headphone"
        title="24/7 CUSTOMER SERVICE"
        description="Friendly 24/7 customer support"
      />

      <Feature
        iconImg={correctSign}
        iconAlt="Correct sign"
        title="MONEY BACK GUARANTEE"
        description="We reurn money within 30 days"
      />
    </div>
  );
};
export default FeaturedSectionFeatures;
