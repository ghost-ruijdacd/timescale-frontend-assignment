import "./AddRecipientForm.css";

interface AddRecipientFormProps {
  onAddRecipient: (email: string) => void;
}

export function AddRecipientForm(props: AddRecipientFormProps) {
  const { onAddRecipient } = props;

  return (
    <form
      className="add-recipient-form"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(form);

        const email = formData.get("email") as string;

        if (email) {
          onAddRecipient(email);
        }

        form.reset();
      }}
    >
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        required
      />

      <button type="submit">Add recipient</button>
    </form>
  );
}
