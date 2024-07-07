import { FaShippingFast, FaCreditCard, FaUndo } from "react-icons/fa";
import FeatureItem from "./FeatureItem";

const SupportSection = () => {
  return (
    <div className="support-section  py-8 text-center">
      <h1 className="text-3xl  mb-6">We Supported by</h1>
      <div className="flex flex-wrap justify-center  lg:justify-between gap-3  mb-6">
        <FeatureItem
          title="EXPRESS DELIVERY"
          icon={FaShippingFast}
          description="DHL express delivery worldwide from our bag company"
        />
        <FeatureItem
          title="PAYMENT IN 3x"
          icon={FaCreditCard}
          description="Take advantage of a payment in 3x without fees from $100 purchase"
        />
        <FeatureItem
          title="FREE RETURNS"
          icon={FaUndo}
          description="Free return for 7 days for any order delivered in France"
        />
      </div>
    </div>
  );
};

export default SupportSection;
