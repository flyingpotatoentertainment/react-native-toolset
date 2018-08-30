import React from 'react';
import { AlertContext } from '../../AlertContext';
import { Mutation } from 'react-apollo';
import Loader from '../Loader';


const ErrorAwareMutation = ({ children, ...args }) => {
  return (
    <AlertContext.Consumer>
      {showAlert => {
        return (
          <Mutation {...args} >
            {(mutation, { data, error, loading }) => {
              // throw on network error and continue
              if (loading) {
                return <Loader />;
              }
              if (error && error.networkError) {
                showAlert(
                  'There is a problem with your network connection. Please reconnect.'
                );
                error = null;
              }
              return children(mutation, { data, error, loading }, showAlert);
            }}
          </Mutation>
        );
      }}
    </AlertContext.Consumer>
  );
};

export default ErrorAwareMutation;
