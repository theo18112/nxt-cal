import { Resource } from "@/types/resource_types";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

const WoodPack = ({ calculateTotal }: Resource) => {
  const woodItems = [
    { id: 1, name: "1,000", rate: 1000, value: 0 },
    { id: 2, name: "10,000", rate: 10000, value: 0 },
    { id: 3, name: "50,000", rate: 50000, value: 0 },
    { id: 4, name: "150,000", rate: 150000, value: 0 },
    { id: 5, name: "500,000", rate: 500000, value: 0 },
    { id: 6, name: "1,500,000", rate: 1500000, value: 0 },
    { id: 7, name: "5,000,000", rate: 5000000, value: 0 },
  ];

  const [wood, setWood] = useState(woodItems);
  const [total, setTotal] = useState(0);

  const changeValue = (id: any, value: any) => {
    const newItems = wood.map((item) => (item.id === id ? { ...item, value: value } : item));
    setWood(newItems);
    setTotal(calculateTotal(newItems));
  };

  const resetValues = () => {
    setWood(wood.map((item) => ({ ...item, value: 0 })));
    setTotal(0);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">
          Wood
          <button className="btn btn-outline-secondary btn-sm ms-2" onClick={resetValues}>
            Reset
          </button>
        </div>

        <div className="card-body">
          {wood.map((item) => (
            <div className="input-group mb-3" key={item.id}>
              <span className="input-group-text" id={`basic-addon-wood${item.id}`}>
                {item.name}
              </span>
              <input
                type="number"
                onChange={(e) => changeValue(item.id, e.target.value)}
                className="form-control"
                name={`wood_${item.id}`}
                placeholder="0"
                min="0"
                aria-label={item.name}
                aria-describedby={`basic-addon-wood${item.id}`}
                value={item.value}
              />
            </div>
          ))}
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Wood : <NumericFormat displayType="text" value={total} prefix={""} thousandSeparator="," />
          </small>
        </div>
      </div>
    </div>
  );
};
export default WoodPack;
