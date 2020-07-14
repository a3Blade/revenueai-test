import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

export default () => {
  const directLine = useMemo(() => createDirectLine({ token: '1JoB4zpuSlw.GY2WCd7n-VkTYBrN8aLGwo2xCLdzZASzcWGe9PJ_-bA' }), []);

  return <ReactWebChat directLine={directLine} userID="YOUR_USER_ID" />;
};