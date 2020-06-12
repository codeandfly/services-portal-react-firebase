import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE,
} from '../types';

import db from '../db';

/**
 * ------------------------------------------
 * Fetch Services
 * ------------------------------------------
 */
export const fetchServices = () => {
  return async dispatch => {
    try {
      const snapshot = await db.collection('services').get();
      const services = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch({ type: FETCH_SERVICES_SUCCESS, services });
    } catch (err) {
      console.log(err);
    }
  };
};

/**
 * ------------------------------------------
 * Fetch Service By ID
 * ------------------------------------------
 */
export const fetchServiceById = id => {
  return async (dispatch, getState) => {
    // Caching: Get current service item and check if it's the same as item id being
    // passed in. This will prevent unnecessary fetch requests if we are
    // trying to click to same service page
    const lastService = getState().selectedService.item;

    if (lastService.id && lastService.id === id) {
      return Promise.resolve();
    }

    // dispatch({ type: CLEAR_SERVICE });
    dispatch({ type: REQUEST_SERVICE });
    try {
      // const snapshot = await db.collection(`services/${id}`).get();
      const snapshot = await db.collection('services').doc(id).get();
      const service = { id: snapshot.id, ...snapshot.data() };

      dispatch({
        type: FETCH_SERVICE_SUCCESS,
        service,
      });
    } catch (err) {
      console.log(err);
    }
  };
};