import React, { useMemo, useState } from 'react';

import ReactWebChat, { createDirectLine } from 'botframework-webchat';

function ChatComponent({ styleOptions }) {
  const [directLine, setDirectLine] = useState();

  useMemo(async () => {
    const res = await fetch('https://webchat-mockbot.azurewebsites.net/directline/token', { method: 'POST' });
    const { token } = await res.json();

    setDirectLine(createDirectLine({ token: '1JoB4zpuSlw.GY2WCd7n-VkTYBrN8aLGwo2xCLdzZASzcWGe9PJ_-bA' }));
  }, []);

  return (
    <section>
      <header>Chat component is using React {React.version}</header>
      <div className="react-container webchat">
        {!!directLine && <ReactWebChat directLine={directLine} styleOptions={styleOptions} />}
      </div>
    </section>
  );
}

export default ChatComponent;