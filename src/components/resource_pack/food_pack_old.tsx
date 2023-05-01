import { useState } from "react";
import { NumericFormat } from "react-number-format";

type FoodPackProps = {
  headingTitle: Function;
};

const FoodPack = ({}: FoodPackProps) => {
  const initialFoodState = { food_1000: 0, food_10000: 0, food_50000: 0, food_150000: 0, food_500000: 0, food_1500000: 0, food_5000000: 0 };
  const [total, setTotal] = useState(0);
  const [food, setFood] = useState(initialFoodState);

  const changeValues = (e: any, rate: any) => {
    const { name, value } = e.target;
    const newValue = { ...food, [name]: !value ? 0 : parseInt(value) * rate };
    setFood(newValue);

    const foodTotal = Object.values(newValue).reduce((acc, cur) => acc + cur);
    setTotal(foodTotal);
  };

  const resetValues = () => {
    setFood(initialFoodState);
    setTotal(0);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">
          Food
          <button className="btn btn-outline-secondary btn-sm ms-2" onClick={resetValues}>
            Reset
          </button>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-food1000">
              1,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 1000)} className="form-control" value={food.food_1000} name="food_1000" placeholder="0" min="0" aria-label="1000" aria-describedby="basic-addon-food1000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-food10000">
              10,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 10000)} className="form-control" value={food.food_10000} name="food_10000" placeholder="0" min="0" aria-label="10000" aria-describedby="basic-addon-food10000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-food50000">
              50,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 50000)} className="form-control" value={food.food_50000} name="food_50000" placeholder="0" min="0" aria-label="50000" aria-describedby="basic-addon-food50000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-food150000">
              150,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 150000)} className="form-control" value={food.food_150000} name="food_150000" placeholder="0" min="0" aria-label="150000" aria-describedby="basic-addon-food150000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-food500000">
              500,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 500000)} className="form-control" value={food.food_500000} name="food_500000" placeholder="0" min="0" aria-label="500000" aria-describedby="basic-addon-food500000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-food1500000">
              1,500,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 1500000)} className="form-control" value={food.food_1500000} name="food_1500000" placeholder="0" min="0" aria-label="1500000" aria-describedby="basic-addon-food1500000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-food5000000">
              5,000,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 5000000)} className="form-control" value={food.food_5000000} name="food_5000000" placeholder="0" min="0" aria-label="5000000" aria-describedby="basic-addon-food5000000" />
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Food : <NumericFormat displayType="text" value={total} prefix={""} thousandSeparator="," />
          </small>
        </div>
      </div>
    </div>
  );
};
export default FoodPack;
