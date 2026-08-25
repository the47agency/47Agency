import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import { getProjectBySlug, getProjects } from '@/lib/queries';

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.description ?? `${project.title} — a project by 47 Agency.`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <section className="page-hero page-hero-pad">
        <div className="wrap">
          <Reveal>
            {project.category && <span className="eyebrow">{project.category}</span>}
            <h1>{project.title}</h1>
            {project.description && <p>{project.description}</p>}
          </Reveal>

          <Reveal delay={1} className="project-hero-media">
            {project.cover_image ? (
              <Image src={project.cover_image} alt={project.title} fill sizes="100vw" style={{ objectFit: 'cover' }} />
            ) : (
              <span>[PROJECT IMAGE]</span>
            )}
          </Reveal>

          <Reveal delay={2} className="project-meta">
            {project.client && (
              <div className="project-meta-item">
                <div className="label">Client</div>
                <div className="value">{project.client}</div>
              </div>
            )}
            {project.category && (
              <div className="project-meta-item">
                <div className="label">Category</div>
                <div className="value">{project.category}</div>
              </div>
            )}
            {project.services && project.services.length > 0 && (
              <div className="project-meta-item">
                <div className="label">Services</div>
                <div className="value">{project.services.join(', ')}</div>
              </div>
            )}
            {project.external_url && (
              <div className="project-meta-item">
                <div className="label">Link</div>
                <div className="value">
                  <a href={project.external_url} target="_blank" rel="noopener noreferrer">
                    Visit project ↗
                  </a>
                </div>
              </div>
            )}
          </Reveal>

          {project.results && (
            <Reveal delay={3} className="project-body">
              <p>{project.results}</p>
            </Reveal>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <Reveal delay={4} className="project-gallery">
              {project.gallery.map((src, i) => (
                <Image key={src + i} src={src} alt={`${project.title} — image ${i + 1}`} width={640} height={480} />
              ))}
            </Reveal>
          )}
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="wrap">
          <Reveal as="section">
            <h2>Have a similar project in mind?</h2>
          </Reveal>
          <Reveal delay={1} className="cta-btns">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link href="/work" className="btn btn-ghost">
              Back to Work
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
