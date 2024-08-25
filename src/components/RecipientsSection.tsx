import "./RecipientsSection.css";

interface RecipientsSectionProps {
  title: string;

  children: React.ReactNode;
}

export function RecipientsSection(props: RecipientsSectionProps) {
  const { title, children } = props;

  return (
    <section className="recipients-section">
      <h2 className="recipients-title">{title}</h2>

      {children}
    </section>
  );
}
