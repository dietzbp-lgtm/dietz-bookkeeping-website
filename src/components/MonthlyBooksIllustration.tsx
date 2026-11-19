import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers3, ReceiptText } from 'lucide-react';

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

const storySteps = [
  {
    label: 'Reliable bookkeeping',
    detail: 'First, we organize the activity and compare the agreed accounts with source statements. Anything unclear becomes a question to resolve, not a guess.',
  },
  {
    label: 'Clean financials',
    detail: 'Next, the records can support a useful Profit and Loss summary showing where income came from and what it cost to earn.',
  },
  {
    label: 'Better decisions',
    detail: 'Finally, we look beyond the totals. The right questions can help you spot unusual costs and understand changes from one month to the next.',
  },
] as const;

const reviewQuestions = [
  'Which expenses changed most, and what actually caused those changes?',
  'Were material costs, card fees and customer payments recorded in the right places?',
  'How do this month’s results compare with previous complete periods?',
];

const stageTitles = [
  'The month arrives in pieces',
  'Transactions brought into focus',
  'A Profit and Loss snapshot',
  'What would you ask next?',
];

const stageSubtitles = [
  'Example income and expenses',
  'Organized for further review',
  'Fictional service-business month',
  'Questions to discuss with your bookkeeper',
];

const stageFooters = [
  'Incoming records need review',
  'Categories are a starting point—not proof of reconciliation',
  'Revenue less direct costs and operating expenses',
  'Turn the numbers into useful conversations',
];

const formatSignedDollars = (amount: number, isIncome: boolean) =>
  (isIncome ? '+' : '−') + formatDollars(amount);

function ScatteredEntries() {
  return (
    <div className="db-example-scatter relative isolate overflow-hidden bg-[radial-gradient(circle_at_48%_50%,#ffffff_5%,#f6f8fc_80%)]" aria-label="Fictional unsorted bookkeeping transactions">
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
            <span className="shrink-0 font-extrabold tabular-nums">{formatSignedDollars(entry.amount, entry.category === 'income')}</span>
          </div>
        );
      })}
      <p className="absolute bottom-4 left-4 right-4 text-center text-xs font-medium text-slate-500">
        Individual deposits, expenses and purchases before review
      </p>
    </div>
  );
}

function OrganizedEntries() {
  return (
    <div className="db-example-stage overflow-y-auto p-4 sm:p-6" aria-label="Fictional transaction categories">
      <div className="grid gap-5 sm:grid-cols-3 sm:gap-3">
        {sections.map((section) => (
          <div key={section.category} className={'db-example-group db-example-group--' + section.category}>
            <h4 className="mb-3 border-b-2 pb-2 text-xs font-extrabold uppercase tracking-[0.04em]">{section.heading}</h4>
            <ul className="space-y-2">
              {entries.filter((entry) => entry.category === section.category).map((entry) => (
                <li key={entry.id} className="flex min-w-0 items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs shadow-sm">
                  <span className="min-w-0 truncate font-medium text-slate-700" title={entry.label}>{entry.label}</span>
                  <span className="shrink-0 font-extrabold tabular-nums">{formatSignedDollars(entry.amount, section.category === 'income')}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-xl bg-blue-50 px-4 py-3 text-xs leading-relaxed text-blue-900">
        Organized records help identify what belongs in each report. Account balances still need to be checked against statements and unresolved items investigated.
      </p>
    </div>
  );
}

function ProfitLossSummary({ showQuestions }: { showQuestions: boolean }) {
  const rows = [
    { label: 'Income from services', amount: totals.income },
    { label: 'Direct job costs', amount: -totals.costs },
    { label: 'Gross profit', amount: totals.income - totals.costs, emphasis: true },
    { label: 'Operating expenses', amount: -totals.expenses },
    { label: 'Illustrative net income', amount: netIncome, emphasis: true, total: true },
  ];

  return (
    <div className="db-example-stage overflow-y-auto px-4 py-5 sm:px-7 sm:py-7" aria-label={showQuestions ? 'Example profit and loss report with review questions' : 'Example profit and loss report'}>
      <div className="rounded-xl bg-slate-50 p-3 sm:p-5">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-700">Sample monthly statement</p>
        <dl className="divide-y divide-slate-200">
          {rows.map((row) => (
            <div key={row.label} className={'flex items-center justify-between gap-3 py-3 ' + (row.total ? 'border-t-2 border-slate-400' : '')}>
              <dt className={(row.emphasis ? 'font-bold text-slate-900 ' : 'font-medium text-slate-700 ') + 'text-sm'}>{row.label}</dt>
              <dd className={'shrink-0 font-bold tabular-nums ' + (row.total ? 'text-2xl text-blue-700' : 'text-sm text-slate-900')}>
                {row.amount < 0 ? '(' + formatDollars(-row.amount) + ')' : formatDollars(row.amount)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {showQuestions ? (
        <div className="mt-4">
          <h4 className="mb-2 text-sm font-bold text-slate-900">Three questions worth exploring</h4>
          <ul className="space-y-2">
            {reviewQuestions.map((question) => (
              <li key={question} className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2.5">
                <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">?</span>
                <span className="text-xs leading-relaxed text-slate-800">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          This example summarizes recorded activity. Real reports depend on complete source records and the accounting method used.
        </p>
      )}
    </div>
  );
}

export default function MonthlyBooksIllustration() {
  const [stage, setStage] = useState(0);
  const [manualMode, setManualMode] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Cycle only while visible and the browser tab is active; clicking any step
  // permanently switches this visit to manual control. Do not autoplay for
  // reduced-motion users, and always clean up intervals and observers.
  useEffect(() => {
    const element = sectionRef.current;
    if (!element || manualMode || !('IntersectionObserver' in window)) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    let inView = false;
    let cycle: number | undefined;

    const syncCycle = () => {
      const canPlay = inView && document.visibilityState === 'visible' && !reducedMotion.matches;
      if (canPlay && cycle === undefined) {
        cycle = window.setInterval(() => setStage((current) => (current + 1) % 4), 4800);
      } else if (!canPlay && cycle !== undefined) {
        window.clearInterval(cycle);
        cycle = undefined;
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.25;
      syncCycle();
    }, { threshold: [0, 0.25, 0.5] });

    observer.observe(element);
    document.addEventListener('visibilitychange', syncCycle);
    reducedMotion.addEventListener('change', syncCycle);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncCycle);
      reducedMotion.removeEventListener('change', syncCycle);
      if (cycle !== undefined) window.clearInterval(cycle);
    };
  }, [manualMode]);

  const selectStage = (next: number) => {
    setManualMode(true);
    setStage(next);
  };

  return (
    <section ref={sectionRef} className="bg-[#f3f5fa] py-16 sm:py-20" aria-labelledby="bookkeeping-demo-title">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.13em] text-blue-700">
            Bookkeeping, illustrated
          </p>
          <h2 id="bookkeeping-demo-title" className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            From daily transactions to clearer decisions.
          </h2>
          <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            A month of business can generate dozens of separate records. See how reviewing
            them, putting them in context and reading the resulting reports can help you understand your numbers.
          </p>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              aria-pressed={stage === 0}
              aria-controls="bookkeeping-demo-board"
              onClick={() => selectStage(0)}
              className={'rounded-full border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ' +
                (stage === 0 ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-blue-400')}
            >
              Start with incoming activity
            </button>
            <span className="text-xs font-medium text-slate-600">
              {manualMode ? 'You are controlling the example' : 'Automatically explores each stage while in view'}
            </span>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200" role="group" aria-label="Bookkeeping walkthrough stages">
            {storySteps.map((step, index) => {
              const stepIndex = index + 1;
              const active = stage === stepIndex;
              return (
                <div key={step.label} className="py-3.5">
                  <button
                    type="button"
                    aria-controls="bookkeeping-demo-board"
                    aria-pressed={active}
                    onClick={() => selectStage(stepIndex)}
                    className="flex w-full items-start gap-3 text-left focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    <span aria-hidden="true" className={'mt-1 inline-block h-3.5 w-3.5 shrink-0 rounded-full border-2 ' +
                      (active ? 'border-blue-700 bg-blue-700' : stage > stepIndex ? 'border-slate-900 bg-slate-900' : 'border-slate-400 bg-transparent')} />
                    <span className={'font-bold tracking-wide ' + (active ? 'text-slate-900' : 'text-slate-500')}>{step.label}</span>
                  </button>
                  {active && (
                    <p className="ml-[26px] mt-2 text-sm leading-relaxed text-slate-600">
                      {step.detail}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Made-up numbers from an imaginary service business. This is an illustration, not a
            customer file, audited report or promise of results. For more detail, see our{' '}
            <Link to="/quickbooks-profit-and-loss-report/" className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800">
              Profit and Loss guide
            </Link>.
          </p>
        </div>

        <div id="bookkeeping-demo-board" className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_-16px_rgba(15,23,42,0.24)]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3 text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                {stage === 0 ? <ReceiptText aria-hidden="true" className="h-4 w-4" /> :
                  <Layers3 aria-hidden="true" className="h-4 w-4" />}
              </span>
              <h3 className="text-base font-bold sm:text-lg">{stageTitles[stage]}</h3>
            </div>
            <span className="text-xs font-medium text-slate-500">{stageSubtitles[stage]}</span>
          </div>

          {stage === 0 ? <ScatteredEntries /> :
            stage === 1 ? <OrganizedEntries /> :
              <ProfitLossSummary showQuestions={stage === 3} />}

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-white px-5 py-3.5 text-xs font-medium text-slate-600 sm:px-7">
            <span>{stageFooters[stage]}</span>
            <span className="font-semibold text-blue-700">{stage + 1} of 4 {manualMode ? '· Manual' : '· Auto'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
