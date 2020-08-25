import { combineReducers } from '@reduxjs/toolkit';
import userCart from './userCart';
import adminInfo from './adminInfo';

export default combineReducers({ userCart, adminInfo });
