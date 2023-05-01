import { useState } from "react";
import { NumericFormat } from "react-number-format";

const WoodPack = () => {
  const [total, setTotal] = useState(0);
  const [wood, setWood] = useState({ wood_1000: 0, wood_10000: 0, wood_50000: 0, wood_150000: 0, wood_500000: 0, wood_1500000: 0, wood_5000000: 0 });

  const changeValues = (e: any, rate: any) => {
    const { name, value } = e.target;
    const newValue = { ...wood, [name]: !value ? 0 : parseInt(value) * rate };
    setWood(newValue);

    const woodTotal = Object.values(newValue).reduce((acc, cur) => acc + cur);
    setTotal(woodTotal);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">Wood</div>

        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-wood1000">
              1,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 1000)} className="form-control" name="wood_1000" placeholder="0" min="0" aria-label="1000" aria-describedby="basic-addon-wood1000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-wood10000">
              10,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 10000)} className="form-control" name="wood_10000" placeholder="0" min="0" aria-label="10000" aria-describedby="basic-addon-wood10000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-wood50000">
              50,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 50000)} className="form-control" name="wood_50000" placeholder="0" min="0" aria-label="50000" aria-describedby="basic-addon-wood50000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-wood150000">
              150,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 150000)} className="form-control" name="wood_150000" placeholder="0" min="0" aria-label="150000" aria-describedby="basic-addon-wood150000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-wood500000">
              500,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 500000)} className="form-control" name="wood_500000" placeholder="0" min="0" aria-label="500000" aria-describedby="basic-addon-wood500000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-wood1500000">
              1,500,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 1500000)} className="form-control" name="wood_1500000" placeholder="0" min="0" aria-label="1500000" aria-describedby="basic-addon-wood1500000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-wood5000000">
              5,000,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 5000000)} className="form-control" name="wood_5000000" placeholder="0" min="0" aria-label="5000000" aria-describedby="basic-addon-wood5000000" />
          </div>
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
