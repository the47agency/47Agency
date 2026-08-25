import type { Project } from '@/lib/types';
import ProjectCard from './ProjectCard';
import EmptyState from './EmptyState';

export default function WorkGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <EmptyState
        eyebrow="Selected Work"
        title="Projects will appear here"
        body="Projects are stored as structured records in Supabase — title, client, category, description and media — ready to publish once added."
      />
    );
  }

  return (
    <div className="work-grid">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
