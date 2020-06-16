import React, { useEffect } from 'react';
import withAuthorization from '../../components/hoc/withAuthorization';
import ServiceItem from '../../components/service/ServiceItem';
import { fetchSentOffers } from '../../actions';
import { useDispatch } from 'react-redux';

const SentOffers = ({ auth }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSentOffers(auth.user.uid));
  }, [auth.user.uid, dispatch]);

  return (
    <div className="container">
      <div className="content-wrapper">
        <h1 className="title">Sent Offers</h1>
        <div className="columns">
          <div className="column is-one-third">
            {/* <ServiceItem
              noButton
              className="offer-card"
              service={o.service}>
              <div className="tag is-large">
                {o.status}
              </div>
              <hr />
              <div className="service-offer">
                <div>
                  <span className="label">From User:</span> {o.toUser.fullName}
                </div>
                <div>
                  <span className="label">Note:</span> {o.note}
                </div>
                <div>
                  <span className="label">Price:</span> ${o.price}
                </div>
                <div>
                  <span className="label">Time:</span> {o.time} hours
                </div>
              </div>
            </ServiceItem>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuthorization(SentOffers);
