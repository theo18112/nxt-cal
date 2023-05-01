import { Resource } from "@/types/resource_types";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

const StonePack = ({ calculateTotal }: Resource) => {
  const stoneItems = [
    { id: 1, name: "750", rate: 750, value: 0 },
    { id: 2, name: "7,500", rate: 7500, value: 0 },
    { id: 3, name: "37,500", rate: 37500, value: 0 },
    { id: 4, name: "112,500", rate: 112500, value: 0 },
    { id: 5, name: "375,000", rate: 375000, value: 0 },
    { id: 6, name: "1,125,000", rate: 1125000, value: 0 },
    { id: 7, name: "3,750,000", rate: 3750000, value: 0 },
  ];

  const [stone, setStone] = useState(stoneItems);
  const [total, setTotal] = useState(0);

  const changeValue = (id: any, value: any) => {
    const newItems = stone.map((item) => (item.id === id ? { ...item, value: value } : item));
    setStone(newItems);
    setTotal(calculateTotal(newItems));
  };

  const resetValues = () => {
    setStone(stone.map((item) => ({ ...item, value: 0 })));
    setTotal(0);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">
          Stone
          <button className="btn btn-outline-secondary btn-sm ms-2" onClick={resetValues}>
            Reset
          </button>
        </div>

        <div className="card-body">
          {stone.map((item) => (
            <div className="input-group mb-3" key={item.id}>
              <span className="input-group-text" id={`basic-addon-stone${item.id}`}>
                {item.name}
              </span>
              <input
                type="number"
                onChange={(e) => changeValue(item.id, e.target.value)}
                className="form-control"
                name={`stone_${item.id}`}
                placeholder="0"
                min="0"
                aria-label={item.name}
                aria-describedby={`basic-addon-stone${item.id}`}
                value={item.value}
              />
            </div>
          ))}
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Stone : <NumericFormat displayType="text" value={total} prefix={""} thousandSeparator="," />
          </small>
        </div>
      </div>
    </div>
  );
};
export default StonePack;
