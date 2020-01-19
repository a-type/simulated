import React, { FC } from 'react';
import { formatDistanceToNow, format, differenceInHours } from 'date-fns';

export interface TimestampProps {
  date: Date | number | string;
}

const Timestamp: FC<TimestampProps> = ({ date }) => {
  let parsed: Date;
  if (typeof date === 'string') {
    parsed = new Date(date);
  } else if (typeof date === 'number') {
    parsed = new Date(date);
  } else {
    parsed = date;
  }

  if (Math.abs(differenceInHours(parsed, new Date())) > 3) {
    return <span>{format(parsed, 'hh:mm aaaa MMM do, y')}</span>;
  }

  return <span>{formatDistanceToNow(parsed)} ago</span>;
};

export default Timestamp;
