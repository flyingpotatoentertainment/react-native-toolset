import React from 'react';
import { AlertContext } from '../../AlertContext';
import { Query } from 'react-apollo';
import Loader from '../Loader';

const ErrorAwareQuery = ({ children, ...args }) => {
  return (
    <AlertContext.Consumer>
      {showAlert => {
        return (
          <Query {...args}>
            {({ data, error, loading, refetch }) => {
              if (error && error.networkError) {
                console.log(error);
                showAlert(
                  'There is a problem with your network connection. Please reconnect.'
                );
                error = null;
                return null;
              }
              if (loading) {
                return <Loader />;
              }
              return children({ data, error, loading, refetch }, showAlert);
            }}
          </Query>
        );
      }}
    </AlertContext.Consumer>
  );
};

export default ErrorAwareQuery;
