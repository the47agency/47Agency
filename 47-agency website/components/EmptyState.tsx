interface EmptyStateProps {
  eyebrow: string;
  title: string;
  body: string;
  onLight?: boolean;
}

export default function EmptyState({ eyebrow, title, body, onLight }: EmptyStateProps) {
  return (
    <div className={`empty-state ${onLight ? 'on-light' : ''}`}>
      <span className={`eyebrow ${onLight ? 'on-light' : ''}`}>{eyebrow}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
