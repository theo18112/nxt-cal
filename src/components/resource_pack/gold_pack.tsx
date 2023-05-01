import { Resource } from "@/types/resource_types";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

const GoldPack = ({ calculateTotal }: Resource) => {
  const goldItems = [
    { id: 1, name: "500", rate: 500, value: 0 },
    { id: 2, name: "3,000", rate: 3000, value: 0 },
    { id: 3, name: "15,000", rate: 15000, value: 0 },
    { id: 4, name: "50,000", rate: 50000, value: 0 },
    { id: 5, name: "200,000", rate: 200000, value: 0 },
    { id: 6, name: "600,000", rate: 600000, value: 0 },
    { id: 7, name: "2,000,000", rate: 2000000, value: 0 },
  ];

  const [gold, setGold] = useState(goldItems);
  const [total, setTotal] = useState(0);

  const changeValue = (id: any, value: any) => {
    const newItems = gold.map((item) => (item.id === id ? { ...item, value: value } : item));
    setGold(newItems);
    setTotal(calculateTotal(newItems));
  };

  const resetValues = () => {
    setGold(gold.map((item) => ({ ...item, value: 0 })));
    setTotal(0);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">
          Gold
          <button className="btn btn-outline-secondary btn-sm ms-2" onClick={resetValues}>
            Reset
          </button>
        </div>

        <div className="card-body">
          {gold.map((item) => (
            <div className="input-group mb-3" key={item.id}>
              <span className="input-group-text" id={`basic-addon-gold${item.id}`}>
                {item.name}
              </span>
              <input
                type="number"
                onChange={(e) => changeValue(item.id, e.target.value)}
                className="form-control"
                name={`gold_${item.id}`}
                placeholder="0"
                min="0"
                aria-label={item.name}
                aria-describedby={`basic-addon-gold${item.id}`}
                value={item.value}
              />
            </div>
          ))}
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Gold : <NumericFormat displayType="text" value={total} prefix={""} thousandSeparator="," />
          </small>
        </div>
      </div>
    </div>
  );
};
export default GoldPack;
