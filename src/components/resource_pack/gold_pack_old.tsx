import { useState } from "react";
import { NumericFormat } from "react-number-format";

const GoldPack = () => {
  const [total, setTotal] = useState(0);
  const [gold, setGold] = useState({ gold_500: 0, gold_3000: 0, gold_15000: 0, gold_50000: 0, gold_200000: 0, gold_600000: 0, gold_2000000: 0 });

  const changeValues = (e: any, rate: any) => {
    const { name, value } = e.target;
    const newValue = { ...gold, [name]: !value ? 0 : parseInt(value) * rate };
    setGold(newValue);

    const goldTotal = Object.values(newValue).reduce((acc, cur) => acc + cur);
    setTotal(goldTotal);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">Gold</div>

        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-gold500">
              500
            </span>
            <input type="number" onChange={(e) => changeValues(e, 500)} className="form-control" name="gold_500" placeholder="0" min="0" aria-label="500" aria-describedby="basic-addon-gold500" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-gold3000">
              3,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 3000)} className="form-control" name="gold_3000" placeholder="0" min="0" aria-label="3000" aria-describedby="basic-addon-gold3000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-gold15000">
              15,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 15000)} className="form-control" name="gold_15000" placeholder="0" min="0" aria-label="15000" aria-describedby="basic-addon-gold15000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-gold50000">
              50,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 50000)} className="form-control" name="gold_50000" placeholder="0" min="0" aria-label="50000" aria-describedby="basic-addon-gold50000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-gold200000">
              200,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 200000)} className="form-control" name="gold_200000" placeholder="0" min="0" aria-label="200000" aria-describedby="basic-addon-gold200000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-gold600000">
              600,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 600000)} className="form-control" name="gold_600000" placeholder="0" min="0" aria-label="600000" aria-describedby="basic-addon-gold600000" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon-gold2000000">
              2,000,000
            </span>
            <input type="number" onChange={(e) => changeValues(e, 2000000)} className="form-control" name="gold_2000000" placeholder="0" min="0" aria-label="2000000" aria-describedby="basic-addon-gold2000000" />
          </div>
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
