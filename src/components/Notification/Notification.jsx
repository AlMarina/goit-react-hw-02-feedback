import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

Notification.prototype = {
  message: PropTypes.string,
};
