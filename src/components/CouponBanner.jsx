const CouponBanner = () => {
  return (
    <div className="bg-gray-200 text-2xl mt-6 rounded-xl md:text-5xl p-4 text-center text-gray-500">
      <div className="inline-flex items-center">
        <img src="/cart-bag.jpg" alt="Bag Icon" className="w-6 h-6 mx-2" />
        <p className="mx-2">Get 20% off coupon bag20</p>

        <img src="/cart-bag.jpg" alt="Bag Icon" className="w-6 h-6 mx-2" />
      </div>
      <div className="inline-flex items-center">
        <p className="mx-2">Get 20% off coupon bag20</p>
      </div>
      <div className="inline-flex items-center">
        <p className="mx-2">Get 20% off coupon</p>
        <img src="/cart-bag.jpg" alt="Bag Icon" className="w-6 h-6 mx-2" />
        <p className="mx-2">bag20</p>
      </div>
    </div>
  );
};

export default CouponBanner;
