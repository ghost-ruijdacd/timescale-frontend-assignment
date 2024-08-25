import { act, renderHook } from "@testing-library/react";
import { useRecipients } from "./useRecipients";

describe("useRecipients", () => {
  const initialRecipients = [
    { email: "test1@example.com", isSelected: false },
    { email: "test2@example.com", isSelected: false },
    { email: "test3@otherdomain.com", isSelected: false },
  ];

  it("should initialize with the provided recipients", () => {
    const { result } = renderHook(() => useRecipients(initialRecipients));

    expect(result.current.recipients).toEqual(initialRecipients);
  });

  it("should add a new recipient with isSelected set to false", () => {
    const initialRecipients = [{ email: "test@example.com", isSelected: true }];

    const { result } = renderHook(() => useRecipients(initialRecipients));

    act(() => {
      result.current.addRecipient("new@example.com");
    });

    expect(result.current.recipients).toEqual([
      { email: "test@example.com", isSelected: true },
      { email: "new@example.com", isSelected: false },
    ]);
  });

  it("should add a recipient to an empty list", () => {
    const { result } = renderHook(() => useRecipients([]));

    act(() => {
      result.current.addRecipient("first@example.com");
    });

    expect(result.current.recipients).toEqual([
      { email: "first@example.com", isSelected: false },
    ]);
  });

  it("should add multiple recipients", () => {
    const { result } = renderHook(() => useRecipients([]));

    act(() => {
      result.current.addRecipient("one@example.com");
      result.current.addRecipient("two@example.com");
      result.current.addRecipient("three@example.com");
    });

    expect(result.current.recipients).toEqual([
      { email: "one@example.com", isSelected: false },
      { email: "two@example.com", isSelected: false },
      { email: "three@example.com", isSelected: false },
    ]);
  });

  it("should not modify existing recipients when adding a new one", () => {
    const initialRecipients = [
      { email: "existing@example.com", isSelected: true },
    ];

    const { result } = renderHook(() => useRecipients(initialRecipients));

    act(() => {
      result.current.addRecipient("new@example.com");
    });

    expect(result.current.recipients[0]).toEqual({
      email: "existing@example.com",
      isSelected: true,
    });
  });

  it("should select a recipient", () => {
    const { result } = renderHook(() => useRecipients(initialRecipients));

    act(() => {
      result.current.selectRecipient("test1@example.com");
    });

    expect(result.current.recipients[0].isSelected).toBe(true);
  });

  it("should deselect a recipient", () => {
    const { result } = renderHook(() => useRecipients(initialRecipients));

    act(() => {
      result.current.selectRecipient("test1@example.com");
      result.current.deselectRecipient("test1@example.com");
    });

    expect(result.current.recipients[0].isSelected).toBe(false);
  });

  it("should select recipients by domain", () => {
    const { result } = renderHook(() => useRecipients(initialRecipients));

    act(() => {
      result.current.selectRecipientByDomain("@example.com");
    });

    expect(result.current.recipients[0].isSelected).toBe(true);
    expect(result.current.recipients[1].isSelected).toBe(true);
    expect(result.current.recipients[2].isSelected).toBe(false);
  });

  it("should deselect recipients by domain", () => {
    const { result } = renderHook(() => useRecipients(initialRecipients));

    act(() => {
      result.current.selectRecipientByDomain("@example.com");
      result.current.deselectRecipientByDomain("@example.com");
    });

    expect(result.current.recipients[0].isSelected).toBe(false);
    expect(result.current.recipients[1].isSelected).toBe(false);
    expect(result.current.recipients[2].isSelected).toBe(false);
  });

  it("should not modify other recipients when selecting or deselecting", () => {
    const { result } = renderHook(() => useRecipients(initialRecipients));

    act(() => {
      result.current.selectRecipient("test1@example.com");
    });

    expect(result.current.recipients[1].isSelected).toBe(false);
    expect(result.current.recipients[2].isSelected).toBe(false);
  });
});
