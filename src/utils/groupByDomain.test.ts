import type { Recipient } from "../types/recipient";
import { groupByDomain } from "./groupByDomain";

describe("groupByDomain", () => {
  it("should group emails by domain correctly", () => {
    const recipients: Recipient[] = [
      { email: "test1@foo.com", isSelected: false },
      { email: "test2@foo.com", isSelected: false },
      { email: "test3@bar.com", isSelected: false },
      { email: "test4@foo.com", isSelected: false },
      { email: "test5@baz.com", isSelected: false },
    ];

    const result = groupByDomain(recipients);

    expect(result).toEqual({
      "foo.com": [
        { email: "test1@foo.com", isSelected: false },
        { email: "test2@foo.com", isSelected: false },
        { email: "test4@foo.com", isSelected: false },
      ],
      "bar.com": [{ email: "test3@bar.com", isSelected: false }],
      "baz.com": [{ email: "test5@baz.com", isSelected: false }],
    });
  });

  it("should handle an empty array", () => {
    const recipients: Recipient[] = [];

    const result = groupByDomain(recipients);

    expect(result).toEqual({});
  });

  it("should handle a single email", () => {
    const recipients: Recipient[] = [
      { email: "single@test.com", isSelected: false },
    ];

    const result = groupByDomain(recipients);

    expect(result).toEqual({
      "test.com": [{ email: "single@test.com", isSelected: false }],
    });
  });

  it("should handle emails with the same domain", () => {
    const recipients: Recipient[] = [
      { email: "test1@same.com", isSelected: false },
      { email: "test2@same.com", isSelected: false },
      { email: "test3@same.com", isSelected: false },
    ];

    const result = groupByDomain(recipients);

    expect(result).toEqual({
      "same.com": [
        { email: "test1@same.com", isSelected: false },
        { email: "test2@same.com", isSelected: false },
        { email: "test3@same.com", isSelected: false },
      ],
    });
  });

  it("should throw an error for invalid email format", () => {
    const recipients: Recipient[] = [
      { email: "test1@foo.com", isSelected: false },
      { email: "invalidEmail", isSelected: false },
    ];

    expect(() => groupByDomain(recipients)).toThrow();
  });
});
