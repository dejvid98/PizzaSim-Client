import Cookie from 'js-cookie';
import store from '../store/store';
export default () => {
  store.subscribe(() => {
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
    } = store.getState().userCart;

    const cookieObj = {
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
    };

    Cookie.set('usercart', JSON.stringify(cookieObj), { expires: 7 });
  });
};
