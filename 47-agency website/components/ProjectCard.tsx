import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="work-card">
      <div className="work-media">
        {project.cover_image ? (
          <Image src={project.cover_image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        ) : (
          <span>[PROJECT IMAGE]</span>
        )}
      </div>
      <div className="work-info">
        {project.category && <span className="cat">{project.category}</span>}
        <h3>{project.title}</h3>
        {project.description && <p>{project.description}</p>}
      </div>
    </Link>
  );
}
