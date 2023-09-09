import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { Card, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Card>
          <Text>Good: {good}</Text>
          <Text>Neutral: {neutral}</Text>
          <Text>Bad: {bad}</Text>
          <Text>Total: {total}</Text>
          <Text>Positive feedback: {positivePercentage}%</Text>
        </Card>
      )}
    </div>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
