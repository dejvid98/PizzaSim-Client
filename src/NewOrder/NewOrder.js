// Libraries imports
import React, { useState } from 'react';
import {
  DollarOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

// Relative imports
import styles from './NewOrder.module.scss';
import Navbar from '../Layout/Navbar';
import ingredients from './ingredients';

const NewOrder = () => {
  const [orderStep, setOrderStep] = useState('size');
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.heading}>
        <div className={styles.iconWrapper}>
          <p>Total</p>
          <DollarOutlined className={styles.moneyIcon} />
          <p>
            <span className={styles.value}>0 </span>$
          </p>
        </div>
        <div className={styles.iconWrapper}>
          <p>Time</p>
          <ClockCircleOutlined className={styles.timeIcon} />
          <p>
            <span className={styles.value}>0 </span>s
          </p>
        </div>

        <div className={styles.iconWrapper}>
          <p>Quantity</p>
          <DatabaseOutlined className={styles.qtyIcon} />
          <p>
            <span className={styles.value}>1</span>
          </p>
        </div>
      </div>
      {orderStep === 'size' ? (
        <div className={styles.mainStepWrapper}>
          <h3 className={styles.ingredientHeading}>Size</h3>
          <div className={styles.ingWrapper}>
            <div className={styles.sizeWrapper}>
              <p>Small</p>
              <div className={styles.values}>
                <div className={styles.moneyValueWrapper}>
                  <DollarOutlined />
                  <p>200$</p>
                </div>
                <div className={styles.timeValueWrapper}>
                  <ClockCircleOutlined />
                  <p>1s</p>
                </div>
              </div>
            </div>
            <div className={styles.sizeWrapper}>
              <p>Medium</p>
              <div className={styles.values}>
                <div className={styles.moneyValueWrapper}>
                  <DollarOutlined />
                  <p>400$</p>
                </div>
                <div className={styles.timeValueWrapper}>
                  <ClockCircleOutlined />
                  <p>2s</p>
                </div>
              </div>
            </div>
            <div className={styles.sizeWrapper}>
              <p>Large</p>
              <div className={styles.values}>
                <div className={styles.moneyValueWrapper}>
                  <DollarOutlined />
                  <p>600$</p>
                </div>
                <div className={styles.timeValueWrapper}>
                  <ClockCircleOutlined />
                  <p>3s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {orderStep === 'ing' ? (
        <div className={styles.mainStepWrapper}>
          <h3 className={styles.ingredientHeading}>Ingredients</h3>
          <div className={styles.ingWrapper}>
            {ingredients.map((item) => (
              <div className={styles.ingredient}>
                <div className={styles.imageWrapper}>
                  <img src={item.picture} alt='food' />
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.ingName}>
                    {capitalizeFirstLetter(item.name)}
                  </p>
                  <div className={styles.valuesWrapper}>
                    <div className={styles.moneyValueWrapper}>
                      <DollarOutlined />
                      <p>{item.price}$</p>
                    </div>
                    <div className={styles.timeValueWrapper}>
                      <ClockCircleOutlined />
                      <p>{item.time}s</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NewOrder;
