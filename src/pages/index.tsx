import InitLayout from "@/components/layouts/InitLayout";
import FoodPack from "@/components/resource_pack/food_pack";
import GoldPack from "@/components/resource_pack/gold_pack";
import StonePack from "@/components/resource_pack/stone_pack";
import WoodPack from "@/components/resource_pack/wood_pack";
import { ReactElement } from "react";

const Home = () => {
  const calculateTotal = (items: any) => {
    return items.reduce((acc: any, item: any) => acc + item.value * item.rate, 0);
  };

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-2">
          <FoodPack calculateTotal={calculateTotal} />
          <WoodPack calculateTotal={calculateTotal} />
          <StonePack calculateTotal={calculateTotal} />
          <GoldPack calculateTotal={calculateTotal} />
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <InitLayout title={"Home"}>{page}</InitLayout>;
};

export default Home;
