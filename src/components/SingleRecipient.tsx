import { Recipient } from "../types/recipient";

import "./SingleRecipient.css";

interface SingleRecipientProps {
  recipient: Recipient;
  actionLabel: string;
  actionIcon: React.ReactNode;
  onClickRecipient: (email: string) => void;
}

export function SingleRecipient(props: SingleRecipientProps) {
  const { recipient, actionLabel, actionIcon, onClickRecipient } = props;

  return (
    <li className="single-recipient">
      <span className="single-recipient__email">{recipient.email}</span>
      <button
        className="single-recipient__action"
        aria-label={actionLabel}
        title={actionLabel}
        onClick={() => onClickRecipient(recipient.email)}
      >
        {actionIcon}
      </button>
    </li>
  );
}
