import FeatureCard from "./FeatureCard";

const FeatureCards = () => {
  return (
    <div className="flex gap-3">
      <FeatureCard
        title="Modern quality and mind refreshing color bag"
        backgroundImage="./bedsheet.jpg
        "
      />
      <FeatureCard
        title="Latest fashion and beauty leather bag for you"
        backgroundImage="./bedsheet1.jpg
        "
      />
    </div>
  );
};

export default FeatureCards;
