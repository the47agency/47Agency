import Image from 'next/image';
import type { Client } from '@/lib/types';
import EmptyState from './EmptyState';

export default function ClientsGrid({ clients }: { clients: Client[] }) {
  if (clients.length === 0) {
    return (
      <EmptyState
        onLight
        eyebrow="Trusted By"
        title="Partner logos will appear here"
        body="Client logos are added as real partnerships are confirmed — no placeholder names are shown as real clients."
      />
    );
  }

  return (
    <div className="clients-grid">
      {clients.map((c) => (
        <div className="client-cell" key={c.id}>
          {c.logo_url ? (
            <Image src={c.logo_url} alt={c.name} width={120} height={40} style={{ objectFit: 'contain', height: 'auto', width: 'auto' }} />
          ) : (
            <span>{c.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
