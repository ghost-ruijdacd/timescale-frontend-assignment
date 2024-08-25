import { z } from "zod";
import type { Recipient } from "../types/recipient";

export function groupByDomain(
  recipients: Array<Recipient>,
): Record<string, Array<Recipient>> {
  const result: Record<string, Array<Recipient>> = {};

  for (const recipient of recipients) {
    const email = recipient.email;

    const isValidEmail = z.string().email().safeParse(email);

    if (!isValidEmail.success) {
      throw new Error(`Invalid email format: ${email}`);
    }

    const [, domain] = email.split("@");

    if (!result[domain]) {
      result[domain] = [];
    }

    result[domain].push(recipient);
  }

  return result;
}
