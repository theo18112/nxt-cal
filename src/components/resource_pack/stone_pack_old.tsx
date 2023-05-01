import { useState } from "react";
import { NumericFormat } from "react-number-format";

const StonePack = () => {
  const [total, setTotal] = useState(0);
  const [stone, setStone] = useState({ stone_750: 0, stone_7500: 0, stone_37500: 0, stone_112500: 0, stone_375000: 0, stone_1125000: 0, stone_3750000: 0 });

  const changeValues = (e: any, rate: any) => {
    const { name, value } = e.target;
    const newValue = { ...stone, [name]: !value ? 0 : parseInt(value) * rate };
    setStone(newValue);

    const stoneTotal = Object.values(newValue).reduce((acc, cur) => acc + cur);
    setTotal(stoneTotal);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">Stone</div>

        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-stone750">
              750
            </span>
            <input type="number" onChange={(e) => changeValues(e, 750)} className="form-control" name="stone_750" placeholder="0" min="0" aria-label="750" aria-describedby="basic-addon-stone750" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-stone7500">
              7,500
            </span>
            <input type="number" onChange={(e) => changeValues(e, 7500)} className="form-control" name="stone_7500" placeholder="0" min="0" aria-label="7500" aria-describedby="basic-addon-stone7500" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-stone37500">
              37,500
            </span>
            <input type="number" onChange={(e) => changeValues(e, 37500)} className="form-control" name="stone_37500" placeholder="0" min="0" aria-label="37500" aria-describedby="basic-addon-stone37500" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-stone112500">
              112,500
            </span>
            <input type="number" onChange={(e) => changeValues(e, 112500)} className="form-control" name="stone_112500" placeholder="0" min="0" aria-label="112500" aria-describedby="basic-addon-stone112500" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-stone375000">
              375,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 375000)} className="form-control" name="stone_375000" placeholder="0" min="0" aria-label="375000" aria-describedby="basic-addon-stone375000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-stone1125000">
              1,125,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 1125000)} className="form-control" name="stone_1125000" placeholder="0" min="0" aria-label="1125000" aria-describedby="basic-addon-stone1125000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-stone3750000">
              3,750,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 3750000)} className="form-control" name="stone_3750000" placeholder="0" min="0" aria-label="3750000" aria-describedby="basic-addon-stone3750000" />
          </div>
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
