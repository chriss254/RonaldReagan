import { css } from "@emotion/react";
import React from "react";
import { spacingMedium } from "../../styles/spacing";
import { Button, Input } from "antd";

export interface ChatFooterProps {
  readonly onMessageSend: (message: string) => void;
}

export const ChatFooter: React.FC<ChatFooterProps> = ({ onMessageSend }) => {
  const [message, setMessage] = React.useState("");

  const onSendClick = () => {
    onMessageSend(message);
    setMessage("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSendClick();
    }
  };

  return (
    <div css={styles.container}>
      <Input
        onChange={(event) => setMessage(event.currentTarget.value)}
        onKeyDown={handleKeyDown}
        value={message}
      ></Input>
      <Button onClick={onSendClick}>Senden</Button>
    </div>
  );
};

const styles = {
  container: css({
    display: "flex",
    marginTop: spacingMedium,
    justifyContent: "space-between",
  }),
};
