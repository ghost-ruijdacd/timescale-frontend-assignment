import { Check, Xmark } from "iconoir-react";

import initialRecipients from "../assets/recipientsData.json";

import { useRecipients } from "../hooks/useRecipients";

import { AddRecipientForm } from "./AddRecipientForm";
import { RecipientsList } from "./RecipientsList";
import { RecipientsSection } from "./RecipientsSection";

import "./App.css";

const App = () => {
  const {
    recipients,

    addRecipient,
    selectRecipient,
    selectRecipientByDomain,
    deselectRecipient,
    deselectRecipientByDomain,
  } = useRecipients(initialRecipients);

  const availableRecipients = recipients.filter(
    (recipient) => !recipient.isSelected,
  );

  const selectedRecipients = recipients.filter(
    (recipient) => recipient.isSelected,
  );

  return (
    <main className="container">
      <AddRecipientForm onAddRecipient={addRecipient} />

      <div className="recipients-grid">
        <RecipientsSection title="Available recipients">
          <RecipientsList
            recipients={availableRecipients}
            actionLabels={{
              domain: "Select all recipients from this domain",
              recipient: "Select this recipient",
            }}
            actionIcon={<Check />}
            onClickRecipient={selectRecipient}
            onClickDomain={selectRecipientByDomain}
          />
        </RecipientsSection>

        <RecipientsSection title="Selected recipients">
          <RecipientsList
            recipients={selectedRecipients}
            actionLabels={{
              domain: "Deselect all recipients from this domain",
              recipient: "Deselect this recipient",
            }}
            actionIcon={<Xmark />}
            onClickRecipient={deselectRecipient}
            onClickDomain={deselectRecipientByDomain}
          />
        </RecipientsSection>
      </div>
    </main>
  );
};

export default App;
