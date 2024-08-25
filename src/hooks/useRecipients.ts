import { useState } from "react";
import type { Recipient } from "../types/recipient";

export function useRecipients(initialRecipients: Recipient[]) {
  const [recipients, setRecipients] = useState<Recipient[]>(initialRecipients);

  function addRecipient(email: string) {
    setRecipients((prev) => [...prev, { email, isSelected: false }]);
  }

  function selectRecipient(email: string) {
    const recipient = recipients.find((r) => r.email === email);

    if (recipient) {
      setRecipients((prev) =>
        prev.map((r) => (r.email === email ? { ...r, isSelected: true } : r)),
      );
    }
  }

  function selectRecipientByDomain(domain: string) {
    const emails = recipients
      .filter((r) => r.email.endsWith(domain))
      .map((r) => r.email);

    setRecipients((prev) =>
      prev.map((r) =>
        emails.includes(r.email) ? { ...r, isSelected: true } : r,
      ),
    );
  }

  function deselectRecipient(email: string) {
    setRecipients((prev) =>
      prev.map((r) => (r.email === email ? { ...r, isSelected: false } : r)),
    );
  }

  function deselectRecipientByDomain(domain: string) {
    setRecipients((prev) =>
      prev.map((r) =>
        r.email.endsWith(domain) ? { ...r, isSelected: false } : r,
      ),
    );
  }

  return {
    recipients,

    addRecipient,
    selectRecipient,
    selectRecipientByDomain,
    deselectRecipient,
    deselectRecipientByDomain,
  };
}
