import Link from 'next/link';
import type { CaseStudy } from '@/lib/types';
import EmptyState from './EmptyState';

export default function CaseStudyList({ caseStudies }: { caseStudies: CaseStudy[] }) {
  if (caseStudies.length === 0) {
    return (
      <EmptyState
        onLight
        eyebrow="Case Studies"
        title="Case studies will appear here"
        body="Each case study documents the client, industry, challenge, strategy, execution and results behind a real campaign, published as a full editorial page."
      />
    );
  }

  return (
    <div className="case-list">
      {caseStudies.map((cs) => (
        <Link href={`/case-studies/${cs.slug}`} key={cs.id} className="case-slot">
          <div>
            {cs.industry && <span className="tag">{cs.industry}</span>}
            <h3>{cs.title}</h3>
            {cs.results && <p>{cs.results}</p>}
            <div className="case-fields">
              {cs.client && <span>{cs.client}</span>}
              {cs.challenge && <span>Challenge</span>}
              {cs.strategy && <span>Strategy</span>}
              {cs.execution && <span>Execution</span>}
              {cs.results && <span>Results</span>}
            </div>
          </div>
          <span className="btn btn-dark">Read Case Study</span>
        </Link>
      ))}
    </div>
  );
}
