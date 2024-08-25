import { Recipient } from "../types/recipient";
import { groupByDomain } from "../utils/groupByDomain";
import { DomainGroup } from "./DomainGroup";
import { SingleRecipient } from "./SingleRecipient";

import "./RecipientsList.css";

interface RecipientsListProps {
  recipients: Array<Recipient>;

  actionLabels: {
    domain: string;
    recipient: string;
  };

  actionIcon: React.ReactNode;
  onClickRecipient: (email: string) => void;
  onClickDomain: (domain: string) => void;
}

export function RecipientsList(props: RecipientsListProps) {
  const {
    recipients,
    actionLabels,
    actionIcon,
    onClickRecipient,
    onClickDomain,
  } = props;
  const groupedRecipients = groupByDomain(recipients);

  return (
    <ul className="recipients-list">
      {Object.entries(groupedRecipients).map(([domain, recipients]) =>
        recipients.length > 1 ? (
          <DomainGroup
            key={domain}
            domain={domain}
            recipients={recipients}
            actionLabels={actionLabels}
            actionIcon={actionIcon}
            onClickRecipient={onClickRecipient}
            onClickDomain={onClickDomain}
          />
        ) : (
          <SingleRecipient
            key={recipients[0].email}
            recipient={recipients[0]}
            actionLabel={actionLabels.recipient}
            actionIcon={actionIcon}
            onClickRecipient={onClickRecipient}
          />
        ),
      )}
    </ul>
  );
}
