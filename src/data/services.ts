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
    id: 'bank-reconciliation',
    title: 'Bank Reconciliation',
    slug: '/tampa-bank-reconciliation',
    description: 'Accurate matching of bank and credit card transactions to keep financial records clean and error-free.',
    icon: BarChart3,
    image: '/images/tampa-bank-reconciliation.webp',
    content: {
      heading: 'Precision in Every Transaction',
      subheading: 'Never worry about mismatched records again.',
      benefits: [
        'Identify errors and unauthorized transactions immediately',
        'Ensure your financial statements are 100% accurate',
        'Simplify tax preparation with clean records',
        'Track cash flow with real-time precision'
      ],
      details: `Bank reconciliation is the foundation of a healthy business. We meticulously match your internal records with your bank and credit card statements to ensure every penny is accounted for. This process not only keeps your books clean but also helps detect fraud, bank errors, or lost checks before they become major issues.`,
      cta: 'Get Your Books in Order'
    }
  },
  {
    id: 'cleanup-bookkeeping',
    title: 'Cleanup Bookkeeping',
    slug: '/tampa-cleanup-bookkeeping',
    description: 'Fixing months or years of messy or incomplete books so your financials are reliable again.',
    icon: FileText,
    image: '/images/tampa-cleanup-bookkeeping.webp',
    content: {
      heading: 'Restore Confidence in Your Numbers',
      subheading: 'Messy books? We specialize in financial rescue missions.',
      benefits: [
        'Catch up on months or years of backlog',
        'Reclassify transactions for maximum tax deductions',
        'Eliminate stress before tax season',
        'Get a clear picture of your true financial health'
      ],
      details: `Falling behind on bookkeeping happens to the best business owners. Whether you have a few months of backlog or years of messy data, our cleanup service is designed to bring you up to date quickly and accurately. We'll organize your historical data, reconcile accounts, and give you a fresh start.`,
      cta: 'Start Your Cleanup'
    }
  },
  {
    id: 'accounts-payable',
    title: 'Accounts Payable',
    slug: '/tampa-accounts-payable',
    description: 'Tracking bills, managing due dates, and keeping vendors paid on time to protect cash flow.',
    icon: CreditCard,
    image: '/images/tampa-accounts-payable.webp',
    content: {
      heading: 'Streamlined Vendor Payments',
      subheading: 'Maintain great relationships and protect your cash flow.',
      benefits: [
        'Avoid late fees and interest charges',
        'Optimize cash flow by managing payment timing',
        'Maintain positive vendor relationships',
        'Digital record keeping for easy auditing'
      ],
      details: `Managing bills can be time-consuming and stressful. Our Accounts Payable service ensures your bills are recorded accurately and paid on time. We help you implement approval workflows, track due dates, and manage cash flow so you're never caught off guard by a surprise expense.`,
      cta: 'Optimize Your Payables'
    }
  },
  {
    id: 'accounts-receivable',
    title: 'Accounts Receivable',
    slug: '/tampa-accounts-receivable',
    description: 'Creating invoices, tracking customer payments, and helping businesses get paid faster.',
    icon: DollarSign,
    image: '/images/tampa-accounts-receivable.webp',
    content: {
      heading: 'Get Paid Faster',
      subheading: 'Professional invoicing and follow-up to boost your cash flow.',
      benefits: [
        'Professional, branded invoices sent promptly',
        'Systematic follow-up on overdue payments',
        'Reduced days sales outstanding (DSO)',
        'Improved cash flow predictability'
      ],
      details: `Cash flow is the lifeblood of your business. We manage your entire invoicing process, from creating and sending invoices to tracking payments and following up on past-due accounts. Our goal is to shorten your payment cycle and ensure you have the cash you need to grow.`,
      cta: 'Improve Your Cash Flow'
    }
  },
  {
    id: 'payroll-support',
    title: 'Payroll Support',
    slug: '/tampa-payroll-support',
    description: 'Assisting with payroll setup, reports, and coordination so employees are paid correctly.',
    icon: Users,
    image: '/images/tampa-payroll-support.webp',
    content: {
      heading: 'Seamless Payroll Management',
      subheading: 'Happy employees, compliant business.',
      benefits: [
        'Accurate and timely employee payments',
        'Compliance with federal and state payroll taxes',
        'Integration with your accounting software',
        'Detailed payroll reporting'
      ],
      details: `Payroll is one area where you can't afford mistakes. We work with your payroll provider to ensure seamless integration with your bookkeeping system. From setting up new employees to reconciling payroll runs and tax filings, we ensure your team is paid correctly and your compliance is rock solid.`,
      cta: 'Simplify Payroll'
    }
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting',
    slug: '/tampa-financial-reporting',
    description: 'Clear monthly reports (P&L, Balance Sheet, Cash Flow) to help you make data-driven decisions.',
    icon: PieChart,
    image: '/images/tampa-financial-reporting.webp',
    content: {
      heading: 'Clarity for Better Decisions',
      subheading: 'Turn numbers into actionable insights.',
      benefits: [
        'Monthly Profit & Loss and Balance Sheet analysis',
        'Customized reports for your specific KPIs',
        'Trend analysis to spot opportunities and risks',
        'Investor-ready financial statements'
      ],
      details: `Don't drive your business blind. Our financial reporting service provides you with clear, accurate, and timely financial statements every month. We don't just send you a spreadsheet; we help you understand what the numbers mean so you can make informed decisions about hiring, investing, and growing.`,
      cta: 'Get Clear Insights'
    }
  },
  {
    id: 'tax-preparation-support',
    title: 'Tax Preparation Support',
    slug: '/tampa-tax-preparation-support',
    description: 'Organizing clean, tax-ready books for CPAs to reduce stress and maximize deductions.',
    icon: Calculator,
    image: '/images/tampa-tax-preparation-support.webp',
    content: {
      heading: 'Stress-Free Tax Season',
      subheading: 'We prepare the books; your CPA loves the results.',
      benefits: [
        'Year-round tax readiness, not just at year-end',
        'Maximize deductions with accurate categorization',
        'Reduce CPA billable hours with clean records',
        'Avoid filing extensions and penalties'
      ],
      details: `Tax season doesn't have to be a nightmare. We work throughout the year to ensure your books are tax-ready at all times. By maintaining clean records and proper categorization, we make it easy for your CPA to file your returns efficiently, potentially saving you thousands in tax liability and professional fees.`,
      cta: 'Prepare for Tax Season'
    }
  },
  {
    id: 'budgeting-forecasting',
    title: 'Budgeting & Forecasting',
    slug: '/tampa-budgeting-forecasting',
    description: 'Planning future income, expenses, and cash flow so you can grow with confidence.',
    icon: TrendingUp,
    image: '/images/budgeting-forecasting.webp',
    content: {
      heading: 'Plan for Future Growth',
      subheading: 'Stop guessing and start strategizing.',
      benefits: [
        'Create realistic budgets based on historical data',
        'Forecast cash flow scenarios',
        'Set and track financial goals',
        'Identify capital requirements for growth'
      ],
      details: `Growth requires a plan. We help you look forward with detailed budgeting and forecasting services. Whether you're planning an expansion, hiring new staff, or simply want to improve profitability, we build financial models that give you a roadmap to success.`,
      cta: 'Plan Your Future'
    }
  }
];
