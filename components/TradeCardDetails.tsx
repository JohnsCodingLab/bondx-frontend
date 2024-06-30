import React from "react";
import styles from '../components/stylesheet/tradecarddetails.module.css'

const TradeCardDetails = () => {
  return (
    <div className={styles.carddetails_container}>
      <div className={styles.card}>
        <div className={styles.buttons}>
          <button className={styles.buy_button}>Buy</button>
          <button className={styles.sell_button}>Sell</button>
        </div>
      </div>
      
    </div>
  );
};
export default TradeCardDetails;
