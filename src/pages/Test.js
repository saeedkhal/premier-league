import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEvents } from '../features/events/eventsSlice';

function Counter() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div>
        test
      </div>
    </div>
  );
}

export default Counter;
