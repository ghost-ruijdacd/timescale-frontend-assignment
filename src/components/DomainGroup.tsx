import { Collapsible } from "@ark-ui/react";
import { NavArrowDown } from "iconoir-react";

import { Recipient } from "../types/recipient";
import { SingleRecipient } from "./SingleRecipient";

import "./DomainGroup.css";

interface DomainGroupProps {
  domain: string;
  recipients: Array<Recipient>;

  actionLabels: {
    domain: string;
    recipient: string;
  };

  actionIcon: React.ReactNode;
  onClickRecipient: (email: string) => void;
  onClickDomain: (domain: string) => void;
}

export function DomainGroup(props: DomainGroupProps) {
  const {
    domain,
    recipients,

    actionLabels,
    actionIcon,

    onClickRecipient,
    onClickDomain,
  } = props;

  return (
    <Collapsible.Root asChild>
      <li className="domain-group">
        <div className="domain-group__header">
          <div className="domain-group__header-content">
            <Collapsible.Trigger className="domain-group__trigger">
              <NavArrowDown />
            </Collapsible.Trigger>

            <span className="domain-group__name">{domain}</span>
          </div>

          <button
            className="domain-group__action"
            aria-label={actionLabels.domain}
            title={actionLabels.domain}
            onClick={() => onClickDomain(domain)}
          >
            {actionIcon}
          </button>
        </div>

        <Collapsible.Content asChild>
          <ul className="domain-group__content">
            {recipients.map((recipient) => (
              <SingleRecipient
                key={recipient.email}
                recipient={recipient}
                actionLabel={actionLabels.recipient}
                actionIcon={actionIcon}
                onClickRecipient={onClickRecipient}
              />
            ))}
          </ul>
        </Collapsible.Content>
      </li>
    </Collapsible.Root>
  );
}
