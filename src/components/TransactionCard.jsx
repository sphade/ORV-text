import React from "react";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Space } from "antd";

import "../app.css";

const TransactionCard = ({ Icon, desc, price, goingUp }) => {
  return (
    <div className={`transactionCard ${goingUp ? "red" : "green"} `}>
      <Space className="transaction__left" size={15}>
        <div>
          {goingUp === true ? (
            <ArrowUpOutlined
              rotate={50}
              className="roundedIcon red"
              style={{ backgroundColor: " rgb(241, 189, 189)" }}
            />
          ) : (
            <ArrowDownOutlined
              rotate={-40}
              className="roundedIcon green"
              style={{ backgroundColor: " rgb(201, 241, 189)" }}
            />
          )}
        </div>

        <div className="transaction__left-inner">
          <h3>Deeets</h3>
          <p>{desc}</p>
        </div>
      </Space>
      <p className="transaction__price">{price}</p>
    </div>
  );
};

export default TransactionCard;
