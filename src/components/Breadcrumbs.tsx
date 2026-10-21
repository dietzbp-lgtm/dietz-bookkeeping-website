import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import breadcrumbLabels from '../data/breadcrumbs.json';

/**
 * Visible site hierarchy matching the server-rendered BreadcrumbList JSON-LD.
 * We use this on service and industry pages, not on the homepage.
 */
export default function Breadcrumbs({ path }: { path: string }) {
  const label = breadcrumbLabels[path as keyof typeof breadcrumbLabels];
  if (!label) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-slate-600">
        <li>
          <Link to="/" className="font-medium hover:text-blue-700 underline-offset-4 hover:underline">Home</Link>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
          <Link to="/services" className="font-medium hover:text-blue-700 underline-offset-4 hover:underline">Services</Link>
        </li>
        <li className="flex min-w-0 items-center gap-2" aria-current="page">
          <ChevronRight className="h-4 w-4 text-slate-400 shrink-0" aria-hidden="true" />
          <span className="font-semibold text-slate-800">{label}</span>
        </li>
      </ol>
    </nav>
  );
}
