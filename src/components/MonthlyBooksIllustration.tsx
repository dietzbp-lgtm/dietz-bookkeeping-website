import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Layers3, ReceiptText } from 'lucide-react';

/**
 * A small, entirely illustrative bookkeeping story. It is ordinary SSR-friendly
 * HTML/CSS (not an image, canvas, video, charting library or external embed).
 * Do not use real client records or suggest these numbers are typical results.
 */
type Category = 'income' | 'costs' | 'expenses';

type ExampleEntry = {
  id: string;
  label: string;
  amount: number;
  category: Category;
};

const entries: ExampleEntry[] = [
  { id: 'income-1', label: 'Payment', amount: 3200, category: 'income' },
  { id: 'income-2', label: 'Deposit', amount: 1850, category: 'income' },
  { id: 'income-3', label: 'Payment', amount: 4400, category: 'income' },
  { id: 'income-4', label: 'Invoice paid', amount: 2750, category: 'income' },
  { id: 'income-5', label: 'Payment', amount: 3600, category: 'income' },
  { id: 'income-6', label: 'Deposit', amount: 1900, category: 'income' },
  { id: 'income-7', label: 'Invoice paid', amount: 4150, category: 'income' },
  { id: 'income-8', label: 'Payment', amount: 3150, category: 'income' },
  { id: 'cost-1', label: 'Materials', amount: 2150, category: 'costs' },
  { id: 'cost-2', label: 'Supplies', amount: 1280, category: 'costs' },
  { id: 'cost-3', label: 'Subcontract', amount: 1570, category: 'costs' },
  { id: 'expense-1', label: 'Rent', amount: 2400, category: 'expenses' },
  { id: 'expense-2', label: 'Insurance', amount: 910, category: 'expenses' },
  { id: 'expense-3', label: 'Software', amount: 640, category: 'expenses' },
  { id: 'expense-4', label: 'Marketing', amount: 1350, category: 'expenses' },
  { id: 'expense-5', label: 'Vehicle', amount: 1820, category: 'expenses' },
  { id: 'expense-6', label: 'Phone', amount: 380, category: 'expenses' },
  { id: 'expense-7', label: 'Office pay', amount: 5500, category: 'expenses' },
];

const sections: { category: Category; heading: string; totalLabel: string }[] = [
  { category: 'income', heading: 'Income', totalLabel: 'Service income' },
  { category: 'costs', heading: 'Direct costs', totalLabel: 'Direct job costs' },
  { category: 'expenses', heading: 'Operating expenses', totalLabel: 'Operating expenses' },
];

const totals = {
  income: entries.filter((entry) => entry.category === 'income').reduce((sum, entry) => sum + entry.amount, 0),
  costs: entries.filter((entry) => entry.category === 'costs').reduce((sum, entry) => sum + entry.amount, 0),
  expenses: entries.filter((entry) => entry.category === 'expenses').reduce((sum, entry) => sum + entry.amount, 0),
};

const netIncome = totals.income - totals.costs - totals.expenses;
const formatDollars = (amount: number) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
}).format(amount);

// Representative slips only: the organized view contains the complete sample.
const scattered: { id: string; x: number; y: number; rotate: number; delay: number }[] = [
  { id: 'expense-1', x: 29, y: 13, rotate: -5, delay: 0.0 },
  { id: 'income-1', x: 59, y: 17, rotate: 3, delay: 0.4 },
  { id: 'expense-6', x: 67, y: 7, rotate: -3, delay: 0.8 },
  { id: 'income-5', x: 62, y: 29, rotate: -4, delay: 0.2 },
  { id: 'cost-3', x: 32, y: 35, rotate: 4, delay: 1.2 },
  { id: 'expense-2', x: 43, y: 25, rotate: 8, delay: 0.5 },
  { id: 'expense-5', x: 39, y: 48, rotate: -5, delay: 0.9 },
  { id: 'income-7', x: 64, y: 51, rotate: 5, delay: 0.3 },
  { id: 'expense-7', x: 18, y: 64, rotate: 4, delay: 1.1 },
  { id: 'cost-1', x: 64, y: 67, rotate: -4, delay: 0.6 },
  { id: 'income-3', x: 23, y: 77, rotate: -3, delay: 0.1 },
  { id: 'cost-2', x: 53, y: 84, rotate: 6, delay: 1.4 },
];

export default function MonthlyBooksIllustration() {
  const [organized, setOrganized] = useState(false);
  const [userSelected, setUserSelected] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Tell the story once, after it becomes visible. Never override a visitor's
  // own selection, play offscreen, or autoplay for reduced-motion preferences.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || userSelected || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer: number | null = null;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && timer === null) {
        timer = window.setTimeout(() => {
          setOrganized(true);
          timer = null;
          observer.disconnect();
        }, 4000);
      } else if (!entry.isIntersecting && timer !== null) {
        window.clearTimeout(timer);
        timer = null;
      }
    }, { threshold: 0.25 });

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (timer !== null) window.clearTimeout(timer);
    };
  }, [userSelected]);

  const chooseView = (nextOrganized: boolean) => {
    setUserSelected(true);
    setOrganized(nextOrganized);
  };

  return (
    <section ref={sectionRef} className="bg-[#f3f5fa] py-16 sm:py-20" aria-labelledby="bookkeeping-demo-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-12">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
            See what organized books can do
          </p>
          <h2 id="bookkeeping-demo-title" className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            One month of business, made clearer.
          </h2>
          <p className="mb-7 text-lg leading-relaxed text-slate-700">
            Deposits, purchases and bills can look like a pile of disconnected details.
            A consistent bookkeeping routine helps organize those records so you can
            review income, expenses and the questions that still need attention.
          </p>
          <ul className="mb-7 space-y-3">
            {[
              'Understand what each transaction represents',
              'Compare records with bank and card statements',
              'Review a clearer profit-and-loss picture',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mb-4 text-sm font-semibold text-slate-800">Watch the example organize itself, or choose a view:</p>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Choose a bookkeeping example view">
            <button
              type="button"
              aria-pressed={!organized}
              aria-controls="bookkeeping-demo-board"
              onClick={() => chooseView(false)}
              className={[
                'inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700',
                !organized ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-300 bg-white text-slate-800 hover:border-blue-400',
              ].join(' ')}
            >
              <ReceiptText aria-hidden="true" className="h-4 w-4" />
              As it arrives
            </button>
            <button
              type="button"
              aria-pressed={organized}
              aria-controls="bookkeeping-demo-board"
              onClick={() => chooseView(true)}
              className={[
                'inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700',
                organized ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-300 bg-white text-slate-800 hover:border-blue-400',
              ].join(' ')}
            >
              <Layers3 aria-hidden="true" className="h-4 w-4" />
              Books organized
            </button>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Fictional numbers for illustration only—not client records, promised results
            or an automatic reconciliation. <Link to="/quickbooks-profit-and-loss-report/" className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800">Read our profit-and-loss guide</Link>.
          </p>
        </div>

        <div id="bookkeeping-demo-board" className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_-16px_rgba(15,23,42,0.24)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-2 text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                {organized ? <Layers3 aria-hidden="true" className="h-4 w-4" /> : <ReceiptText aria-hidden="true" className="h-4 w-4" />}
              </span>
              <h3 className="text-base font-bold sm:text-lg">
                {organized ? 'A clearer monthly picture' : 'This month, as it arrives'}
              </h3>
            </div>
            <span className="text-xs font-medium text-slate-500">
              {organized ? 'Entries grouped for review' : 'Payments, deposits and bills'}
            </span>
          </div>

          {organized ? (
            <div className="p-4 sm:p-6" aria-label="Illustrative organized bookkeeping entries">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-3">
                {sections.map((section) => {
                  const groupEntries = entries.filter((entry) => entry.category === section.category);
                  return (
                    <div key={section.category} className={'db-example-group db-example-group--' + section.category}>
                      <h4 className="mb-3 border-b-2 pb-2 text-xs font-extrabold uppercase tracking-[0.04em]">{section.heading}</h4>
                      <ul className="space-y-2">
                        {groupEntries.map((entry) => (
                          <li key={entry.id} className="flex min-w-0 items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs shadow-sm">
                            <span className="min-w-0 truncate font-medium text-slate-700" title={entry.label}>{entry.label}</span>
                            <span className="shrink-0 font-extrabold tabular-nums">{section.category === 'income' ? '+' : '−'}{formatDollars(entry.amount)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-200 pt-5 sm:grid-cols-4">
                {sections.map((section) => (
                  <div key={section.category} className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs font-semibold leading-snug text-slate-500">{section.totalLabel}</p>
                    <p className="mt-1 text-lg font-extrabold tabular-nums text-slate-900">{formatDollars(totals[section.category])}</p>
                  </div>
                ))}
                <div className="rounded-xl bg-blue-50 p-3">
                  <p className="text-xs font-semibold leading-snug text-blue-800">Illustrative net income</p>
                  <p className="mt-1 text-lg font-extrabold tabular-nums text-blue-800">{formatDollars(netIncome)}</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Sample P&amp;L view only; actual reports depend on complete records, accounting methods and review.
              </p>
            </div>
          ) : (
            <div className="db-example-scatter relative isolate overflow-hidden bg-[radial-gradient(circle_at_48%_50%,#ffffff_5%,#f6f8fc_80%)]" aria-label="Illustration of assorted, unsorted business transactions">
              <div className="pointer-events-none absolute inset-0 db-example-dots" aria-hidden="true" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl" aria-hidden="true" />
              {scattered.map((pos) => {
                const entry = entries.find((item) => item.id === pos.id);
                if (!entry) return null;
                return (
                  <div
                    key={pos.id}
                    aria-hidden="true"
                    className={'db-example-slip db-example-slip--' + entry.category}
                    style={{
                      left: pos.x + '%',
                      top: pos.y + '%',
                      transform: 'translate(-50%, -50%) rotate(' + pos.rotate + 'deg)',
                      animationDelay: pos.delay + 's',
                    }}
                  >
                    <span className="truncate">{entry.label}</span>
                    <span className="shrink-0 font-extrabold tabular-nums">{entry.category === 'income' ? '+' : '−'}{formatDollars(entry.amount)}</span>
                  </div>
                );
              })}
              <div className="absolute bottom-5 left-0 right-0 text-center text-xs font-semibold text-slate-500">
                A small sample of the month's incoming activity
              </div>
            </div>
          )}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-white px-5 py-4 text-xs font-medium text-slate-600 sm:px-7">
            <span>{organized ? 'A starting point for reviewing your reports' : 'The details need sorting and review'}</span>
            <span className="font-semibold text-blue-700">{organized ? 'Example organized ✓' : 'Select “Books organized” to see the difference'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
