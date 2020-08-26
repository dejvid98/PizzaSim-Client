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
      queueTime,
      size,
      startTime,
      step,
      time,
      total,
    } = store.getState().userCart;
    Cookie.set('usercart', {
      address,
      fisrtname,
      ing,
      lastname,
      orderDate,
      orderid,
      ordersLeft,
      phonenumber,
      queueTime,
      qty,
      size,
      startTime,
      step,
      time,
      total,
    });
  });
};
