import Cookie from 'js-cookie';
import store from '../store/store';
import { restoreState } from '../store/userCart';
export default () => {
  const cookies = Cookie.get('usercart');

  if (cookies) {
    const parsedCookie = JSON.parse(cookies);

    const {
      address,
      fisrtname,
      ing,
      lastname,
      orderDate,
      orderid,
      ordersLeft,
      phonenumber,
      qty,
      size,
      startTime,
      step,
      time,
      total,
      lastLogin,
      queueTime,
    } = parsedCookie;

    const timeDifference = new Date() - new Date(lastLogin);

    store.dispatch(
      restoreState({
        address,
        fisrtname,
        ing,
        lastname,
        orderDate,
        orderid,
        ordersLeft,
        phonenumber,
        qty,
        queueTime: Math.floor(queueTime - timeDifference / 1000),
        size,
        startTime,
        step,
        time,
        total,
      })
    );
  }
};
