import { 
  BarChart3, 
  Calculator, 
  CreditCard, 
  DollarSign, 
  FileText, 
  PieChart, 
  TrendingUp, 
  Users 
} from 'lucide-react';

export const services = [
  {
    id: 'monthly-bookkeeping',
    title: 'Monthly Bookkeeping',
    slug: '/monthly-bookkeeping',
    description: 'Ongoing transaction organization, account reconciliation and financial reports for small businesses in Tampa and across the United States.',
    icon: Calculator,
    image: '/images/tampa-financial-reporting.webp',
    content: {
      heading: 'Know where your business stands each month',
      subheading: 'A consistent routine for your books, with Bryan as your point of contact.',
      benefits: ['Categorize business transactions using the records you provide', 'Reconcile agreed bank and credit card accounts', 'Review profit and loss and balance sheet reports', 'Flag missing records and questions for your review'],
      details: 'Monthly bookkeeping helps keep daily business activity from turning into a year-end backlog. We review your accounting setup, discuss the accounts and transaction volume involved, and agree on a recurring scope. You provide statements, receipts and answers to transaction questions; we organize the records and prepare reports so you can see income, expenses and account balances. If earlier periods need attention, cleanup work is scoped separately before ongoing support begins.',
      cta: 'Discuss Monthly Bookkeeping'
    },
    monthlyDetail: {
      process: [
        {
          heading: 'Review your current books',
          text: 'We discuss your accounting software, transaction volume, bank and credit card accounts, and any months that need attention. You receive a scope-based proposal before work begins.'
        },
        {
          heading: 'Arrange access without sharing passwords',
          text: 'We agree on the accounting records and statements needed. When supported, use your software’s invited-user or accountant-access feature instead of sending credentials.'
        },
        {
          heading: 'Organize transactions and reconcile accounts',
          text: 'We categorize activity, compare agreed accounts with the available statements, and send questions about transactions that need your input.'
        },
        {
          heading: 'Review monthly reports and open questions',
          text: 'We prepare the agreed reports and explain what they show. Outstanding items, missing documents and next steps are communicated so you can make informed decisions.'
        }
      ],
      reports: [
        {
          heading: 'Profit and loss statement',
          text: 'Summarizes recorded revenue and expenses over a period so you can see how the business performed.'
        },
        {
          heading: 'Balance sheet',
          text: 'Shows recorded assets, liabilities and equity at a specific date; accuracy depends on complete, reconciled records.'
        },
        {
          heading: 'Reconciliation and follow-up',
          text: 'We identify outstanding differences or missing documentation for the accounts included in your agreed scope.'
        }
      ],
      pricingFactors: [
        'Monthly transaction volume and the number of bank or credit card accounts',
        'Whether earlier months require separate catch-up or cleanup work',
        'The accounting software in use and the condition of existing records',
        'Additional responsibilities such as invoicing, bills or payroll coordination'
      ],
      faqs: [
        {
          question: 'Can you handle bookkeeping remotely if my business is not in Florida?',
          answer: 'Yes. Dietz Bookkeeping is based in Tampa and works with small businesses remotely throughout the United States. We discuss access, documents and communication during the initial consultation.'
        },
        {
          question: 'Do I need to use QuickBooks?',
          answer: 'Tell us which accounting software you use today. We will review whether your current setup is appropriate for the requested work before agreeing on a service scope. Software subscriptions or migrations are discussed separately if needed.'
        },
        {
          question: 'Is bookkeeping cleanup part of the monthly fee?',
          answer: 'Not automatically. When prior periods are incomplete, we review the backlog and provide a separate cleanup scope or proposal before ongoing monthly work starts.'
        },
        {
          question: 'Are tax returns, payroll and bill payments included?',
          answer: 'Monthly bookkeeping focuses on transaction records, reconciliations and agreed financial reports. Tax advice and return filing belong with your tax professional; payroll support, accounts payable and receivable are discussed as additional services if required.'
        },
        {
          question: 'How much does online monthly bookkeeping cost?',
          answer: 'Pricing depends on the amount and condition of work involved, not a single national flat rate. We review transactions, accounts, software and any additional services before preparing a personalized estimate.'
        }
      ]
    }
  },
  {
    id: 'bank-reconciliation',
    title: 'Bank Reconciliation',
    slug: '/tampa-bank-reconciliation',
    description: 'Compare business bank and credit card statements with your bookkeeping records, identify unmatched activity and review differences before closing each period.',
    icon: BarChart3,
    image: '/images/tampa-bank-reconciliation.webp',
    content: {
      heading: 'Know why your account balances agree—or do not',
      subheading: 'Statement-by-statement reviews for the business accounts included in your scope.',
      benefits: [
        'Review deposits, withdrawals and account transfers against statements',
        'Identify missing, duplicate or uncleared entries needing investigation',
        'Reconcile agreed bank and card accounts by statement period',
        'Document unresolved transactions and questions for your review'
      ],
      details: `Bank reconciliation compares recorded activity with the statement for a specific business account and period. Different balances can point to transactions recorded in the wrong month, missing activity, processor fees or earlier unreconciled items. We review the available source statements and bookkeeping file, investigate discrepancies and ask for explanations when necessary. The included accounts and periods are established before we begin; reconciliation does not replace a financial audit or guarantee fraud detection.`,
      cta: 'Discuss Account Reconciliation'
    }
  },
  {
    id: 'cleanup-bookkeeping',
    title: 'Cleanup Bookkeeping',
    slug: '/tampa-cleanup-bookkeeping',
    description: 'Catch up on unfinished bookkeeping periods with a records review, historical transaction organization and reconciliation plan tailored to your backlog.',
    icon: FileText,
    image: '/images/tampa-cleanup-bookkeeping.webp',
    content: {
      heading: 'A sensible starting point for overdue bookkeeping',
      subheading: 'Review the backlog before committing to a cleanup scope.',
      benefits: [
        'Identify the months and accounts that need attention',
        'Review unrecorded transactions and missing statements',
        'Investigate duplicate entries, transfers and uncertain categories',
        'Agree on historical cleanup separately from monthly bookkeeping'
      ],
      details: `Cleanup begins with an assessment of the accounting file, available statements and periods affected. One business may have a few months of uncategorized expenses, while another may have missing deposits or old reconciliation differences. We propose work based on the source records, accounts and questions that need attention, then work through the agreed historical periods. Complex or missing records may require additional input; tax return corrections and tax advice belong with a qualified tax professional.`,
      cta: 'Discuss Bookkeeping Cleanup'
    }
  },
  {
    id: 'accounts-payable',
    title: 'Accounts Payable',
    slug: '/tampa-accounts-payable',
    description: 'Organize vendor invoices, due dates and unpaid balances so Tampa-area and remote businesses can review obligations and payment approval responsibilities.',
    icon: CreditCard,
    image: '/images/tampa-accounts-payable.webp',
    content: {
      heading: 'Track vendor bills before they become overdue',
      subheading: 'An organized bill workflow helps owners review upcoming obligations.',
      benefits: [
        'Maintain consistent vendor and invoice records',
        'Track due dates, credits and unpaid balances',
        'Identify duplicate or disputed invoices for review',
        'Clarify who reviews and authorizes payments'
      ],
      details: `Accounts payable work starts with the vendor bills, credit notes and due dates recorded in your accounting system. We can discuss a practical way to collect documents, identify duplicate invoices, enter or review bills and prepare an aging report of open obligations. Payment release, bank access and vendor contact are not assumed: responsibilities and approval permissions must be explicitly agreed. An accurate view of payables depends on receiving complete and timely invoices from the business.`,
      cta: 'Review Your Payables Workflow'
    }
  },
  {
    id: 'accounts-receivable',
    title: 'Accounts Receivable',
    slug: '/tampa-accounts-receivable',
    description: 'Review customer invoices, partial payments and overdue balances with an accounts receivable workflow based on your bookkeeping and payment records.',
    icon: DollarSign,
    image: '/images/tampa-accounts-receivable.webp',
    content: {
      heading: 'Understand which customer invoices remain open',
      subheading: 'Clear receivables records support better payment follow-up decisions.',
      benefits: [
        'Review invoices, terms and customer balances',
        'Match recorded payments, partial payments and available deposit records',
        'Identify unapplied credits or overdue invoices needing attention',
        'Use aging reports to discuss unpaid balances'
      ],
      details: `Accounts receivable records connect invoices issued to customers with the payments and credits applied to them. We review the invoicing system and available deposit information, help identify unmatched or partial payments and discuss the open-balance report. Optional invoice creation, reminders and customer communication must be included in an agreed scope; we do not promise collection results. Businesses using different accounting methods may need different record-handling approaches.`,
      cta: 'Discuss Customer Invoices'
    }
  },
  {
    id: 'payroll-support',
    title: 'Payroll Support',
    slug: '/tampa-payroll-support',
    description: "Coordinate payroll-provider reports with your bookkeeping records, review payroll journal entries and investigate unmatched payroll withdrawals.",
    icon: Users,
    image: '/images/tampa-payroll-support.webp',
    content: {
      heading: "Make payroll records easier to reconcile",
      subheading: "Bookkeeping coordination alongside your designated payroll provider.",
      benefits: [
        "Review provider summaries and payroll-related accounting entries",
        "Compare payroll withdrawals with recorded wages, taxes and other amounts",
        "Identify unexplained balances for owner or provider follow-up",
        "Clarify payroll processing, filing and payment responsibilities in advance"
      ],
      details: "Payroll bookkeeping support connects your payroll provider's summary reports with the accounts in your bookkeeping file. We discuss gross wages, employee deductions, employer costs and how provider withdrawals are recorded, then flag differences for appropriate review. Payroll processing, employee setup, tax deposits and payroll tax filings are separate responsibilities and are not automatically included. Sensitive employee records must be shared only through agreed secure methods.",
      cta: "Discuss Payroll Bookkeeping Support"
    }
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting',
    slug: '/tampa-financial-reporting',
    description: "Understand recorded revenue, expenses and balances through agreed financial reports supported by current bookkeeping and reconciled records.",
    icon: PieChart,
    image: '/images/tampa-financial-reporting.webp',
    content: {
      heading: "Read the story behind your monthly numbers",
      subheading: "Clear profit-and-loss and balance-sheet reports for your business discussions.",
      benefits: [
        "Review recorded income and expenses over the chosen reporting period",
        "Understand balance-sheet accounts and unresolved bookkeeping items",
        "Compare periods when reports use consistent source records",
        "Discuss optional cash flow or category reports where the scope allows"
      ],
      details: "A profit-and-loss statement summarizes recorded revenue and expenses, while a balance sheet shows recorded assets, liabilities and equity at a point in time. The usefulness of each report depends on the underlying bookkeeping records and their completeness. We can discuss the reports and comparisons that suit your accounting system, review major differences and flag open questions. Additional cash flow or customized views are defined in the proposal; bookkeeping reports are not independent audited or reviewed financial statements.",
      cta: "Discuss Financial Reports"
    }
  },
  {
    id: 'tax-preparation-support',
    title: 'Tax Preparation Support',
    slug: '/tampa-tax-preparation-support',
    description: "Organize year-end bookkeeping records, statements and open questions for your tax professional without treating bookkeeping as tax advice or tax filing.",
    icon: Calculator,
    image: '/images/tampa-tax-preparation-support.webp',
    content: {
      heading: "A clearer bookkeeping handoff for tax season",
      subheading: "Organize the books and questions your tax preparer will need to review.",
      benefits: [
        "Identify missing statements and incomplete bookkeeping periods",
        "Organize income, expenses and available supporting records",
        "Review reconciliations and unresolved owner transactions",
        "Prepare agreed reports and questions for your tax professional"
      ],
      details: "Tax preparation support here means preparing bookkeeping records for a qualified tax professional. We review the state of the books, discuss outstanding bank reconciliations, organize available transaction documentation and prepare the agreed year-end reports. Your tax professional determines deductions, tax classifications, filings and deadlines. Older unreconciled periods may require a separately quoted cleanup project, and organized records do not guarantee a particular filing timeline or tax outcome.",
      cta: "Discuss Your Year-End Bookkeeping"
    }
  },
  {
    id: 'budgeting-forecasting',
    title: 'Budgeting & Forecasting',
    slug: '/tampa-budgeting-forecasting',
    description: "Explore small-business budgets and cash flow scenarios using historical bookkeeping, documented assumptions and periodic comparisons.",
    icon: TrendingUp,
    image: '/images/budgeting-forecasting.webp',
    content: {
      heading: "Plan with assumptions you can revisit",
      subheading: "Practical budgets and scenarios based on available business records.",
      benefits: [
        "Review recent income, expenses and recurring obligations",
        "Identify assumptions about seasonality, capacity and upcoming costs",
        "Discuss budget and cash flow scenarios for different outcomes",
        "Compare actual recorded activity with the plan when included"
      ],
      details: "Budgets help outline expected income and expenses, while forecasts update expectations as circumstances change. We can discuss historical records, known costs, likely payment timing and owner assumptions to develop a practical plan or scenario within the agreed scope. Clear assumptions make a projection easier to revisit later. Forecasts are estimates, not guaranteed revenue, cash availability or business results, and they do not replace specialized financial advice.",
      cta: "Discuss a Budget or Forecast"
    }
  }
];
