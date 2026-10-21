/**
 * Distinct, practical service explanations for existing Tampa service pages.
 * These are descriptions of possible bookkeeping workflows, not promises that
 * every step, accounting tool, payment action or tax service is included.
 */
export type ServiceGuide = {
  heading: string;
  introduction: string;
  steps: { heading: string; text: string }[];
  recordsHeading: string;
  recordsIntro: string;
  records: string[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

export const serviceGuides: Record<string, ServiceGuide> = {
  '/tampa-bank-reconciliation': {
    heading: 'How bank and credit card reconciliation works',
    introduction: 'A reconciliation compares the balance and activity in your accounting records with a statement for the same period. When the numbers do not agree, the goal is to identify what needs review—not to force the accounts to match.',
    steps: [
      { heading: 'Gather each statement', text: 'Identify the bank, credit card and payment accounts included in the engagement. Confirm the statement period, opening balance and any unreconciled earlier months.' },
      { heading: 'Compare transactions', text: 'Review deposits, withdrawals, fees, transfers and recorded payments against the source statements. Look for duplicates, omissions and transactions posted in a different period.' },
      { heading: 'Investigate and document differences', text: 'Flag uncleared items, unexplained balances and questions about personal or business use. Changes that need owner input are reviewed before completion.' }
    ],
    recordsHeading: 'What to have ready for reconciliation',
    recordsIntro: 'The actual documents depend on your accounts and software. These examples help us assess the work before quoting it.',
    records: [
      'Statements for each business bank and credit card account in scope',
      'Access to the existing bookkeeping file through supported invited-user access',
      'Information about transfers between accounts, loan payments or merchant deposits',
      'Receipts or explanations for transactions that cannot be identified from the bank description'
    ],
    faqs: [
      { question: 'Is reconciliation the same as categorizing transactions?', answer: 'No. Categorizing assigns activity to appropriate bookkeeping accounts. Reconciliation checks recorded account balances and activity against a statement. Monthly bookkeeping may include both when agreed.' },
      { question: 'Can you reconcile accounts if several months were skipped?', answer: 'We can assess the missing periods and propose a catch-up or cleanup scope. Earlier reconciliation differences sometimes need to be addressed before current statements can be completed.' },
      { question: 'What if my bank deposit does not match the customer invoice?', answer: 'Payment processors may deduct fees or group payments together. We review available processor statements, invoices and bank activity to identify possible explanations and request missing information.' },
      { question: 'Can you work with a business outside Tampa?', answer: 'Yes. Dietz Bookkeeping is based in Tampa and supports U.S. businesses remotely. Local meetings are by appointment, and accounting access is discussed during onboarding.' }
    ],
    related: [
      { href: '/monthly-bookkeeping', label: 'Monthly bookkeeping and reconciliations' },
      { href: '/tampa-cleanup-bookkeeping', label: 'Cleanup for unreconciled prior months' },
      { href: '/bookkeeping-for-real-estate-agents', label: 'Bookkeeping for real estate agents' }
    ]
  },
  '/tampa-cleanup-bookkeeping': {
    heading: 'A practical plan for catching up on unfinished books',
    introduction: 'Bookkeeping cleanup is different from routine monthly service. Before making corrections, we need to understand which months, accounts and source documents are missing or unreliable. The backlog determines the scope.',
    steps: [
      { heading: 'Review the starting point', text: 'Discuss the accounting software, months affected, bank and card accounts, outstanding balances and available statements. Identify the periods to be assessed.' },
      { heading: 'Organize the missing activity', text: 'Review transactions, supporting documents and account categories. Request explanations for uncertain entries, duplicated transfers or personal spending recorded in the business file.' },
      { heading: 'Reconcile and hand off open questions', text: 'Work through agreed statements and prepare a list of unresolved items for owner review. Once the historical records are understood, discuss an ongoing monthly routine.' }
    ],
    recordsHeading: 'What helps us estimate a cleanup project',
    recordsIntro: 'We do not quote cleanup solely by the age of the books. The work also depends on activity volume, missing statements and the condition of the starting balances.',
    records: [
      'The date range you believe is incomplete, such as the last three months or prior tax year',
      'Bank and credit card statements for the affected periods',
      'Existing accounting reports, unpaid invoices, vendor bills and receipts if available',
      'Information about transfers, loans, owner contributions and duplicate accounts'
    ],
    faqs: [
      { question: 'How far back can cleanup bookkeeping go?', answer: 'We can discuss older periods after reviewing available records. We do not promise a fixed turnaround or a complete reconstruction when supporting information is unavailable.' },
      { question: 'What if I have a mix of personal and business charges?', answer: 'We flag unclear entries and request your explanation. We organize the bookkeeping records; your tax professional should determine tax treatment when needed.' },
      { question: 'Do you file amended tax returns as part of cleanup?', answer: 'No. This service focuses on bookkeeping records. Tax advice, amendments and return preparation are handled by your qualified tax professional.' },
      { question: 'Can monthly bookkeeping start after cleanup?', answer: 'Yes, if the records and proposed scope support it. We discuss monthly service separately so that historical cleanup fees are not assumed to be part of the recurring rate.' }
    ],
    related: [
      { href: '/tampa-bank-reconciliation', label: 'Bank reconciliation' },
      { href: '/monthly-bookkeeping', label: 'Ongoing monthly bookkeeping' },
      { href: '/bookkeeping-for-cleaning-businesses', label: 'Cleaning business bookkeeping' }
    ]
  },
  '/tampa-accounts-payable': {
    heading: 'Organize what your business owes vendors',
    introduction: 'Accounts payable tracks bills received and amounts still due. An organized bill workflow makes it easier for an owner to see upcoming obligations and avoid confusing an unpaid bill with a completed payment.',
    steps: [
      { heading: 'Collect and review bills', text: 'Gather vendor invoices and credit notes, check invoice dates, due dates and amounts, and flag duplicates or invoices needing clarification.' },
      { heading: 'Record obligations and approvals', text: 'Enter or review bills in the agreed accounting system, use consistent vendor records and identify who is authorized to approve payments.' },
      { heading: 'Review aging and payment status', text: 'Use the accounts payable aging report to discuss overdue and upcoming bills. Match recorded payments to bank activity when that work is included.' }
    ],
    recordsHeading: 'What an accounts payable workflow may need',
    recordsIntro: 'We tailor the workflow to your existing invoicing and accounting software; payment authorization is never assumed.',
    records: [
      'Vendor invoices showing amounts, dates, due dates and invoice numbers',
      'Vendor credits, disputed charges or duplicate bill details',
      'Your approval process and the person authorized to release payments',
      'Accounting software access and related bank activity if payment matching is in scope'
    ],
    faqs: [
      { question: 'Will Dietz Bookkeeping pay vendors directly?', answer: 'Not automatically. We can discuss bill organization, review and payment coordination, but approvals and actual payment authority must be specifically agreed before any related action.' },
      { question: 'What is an accounts payable aging report?', answer: 'It groups unpaid vendor bills by how long they have been outstanding. It can help identify overdue bills and planned obligations, provided the recorded invoices are complete.' },
      { question: 'How are duplicate vendor bills handled?', answer: 'We can flag invoices with overlapping numbers, amounts or dates for review. We do not delete or change disputed records without understanding the source documents and agreed permissions.' },
      { question: 'Can contractors get help tracking material invoices?', answer: 'We can discuss organizing vendor bills and purchases for contracting businesses. Job-level cost reporting requires suitable source records, software and a separately agreed scope.' }
    ],
    related: [
      { href: '/tampa-bank-reconciliation', label: 'Reconcile recorded bill payments' },
      { href: '/bookkeeping-for-contractors', label: 'Bookkeeping for contractors and handymen' },
      { href: '/monthly-bookkeeping', label: 'Monthly bookkeeping support' }
    ]
  },
  '/tampa-accounts-receivable': {
    heading: 'See what customers owe and which payments arrived',
    introduction: 'Accounts receivable tracks invoices sent to customers and payments not yet matched to them. Clear records help a business owner understand outstanding balances without assuming every invoice has been paid.',
    steps: [
      { heading: 'Review how invoices are issued', text: 'Discuss your existing invoicing system, payment terms, customers and whether invoices are prepared by your team or included in our agreed scope.' },
      { heading: 'Match recorded payments', text: 'Compare available customer payments and bank or processor deposits with open invoices. Ask about partial payments, credits or deposits that do not identify a customer.' },
      { heading: 'Review outstanding balances', text: 'Use an accounts receivable aging report to identify invoices requiring owner review. Reminder messages and customer collection activity are separate options to agree on.' }
    ],
    recordsHeading: 'Information useful for reviewing receivables',
    recordsIntro: 'We can assess your existing invoice records before deciding which invoicing or follow-up activities belong in the proposed service.',
    records: [
      'Customer invoice list with dates, amounts and agreed payment terms',
      'Customer payment records, processor deposits and credit notes',
      'Open invoice or receivables aging report from the accounting system',
      'Details of disputes, partial payments, write-offs or unapplied customer credits'
    ],
    faqs: [
      { question: 'Is an invoice considered paid when I send it?', answer: 'No. Issuing an invoice records an amount due under a typical accrual-based workflow. We review the selected accounting method and payment records when determining the bookkeeping process.' },
      { question: 'Can you send reminders for overdue invoices?', answer: 'Potentially, if customer communication is included in the agreed scope and you approve the process. Reminders, collections and payment guarantees are not included automatically.' },
      { question: 'Why can my deposit be smaller than the invoice total?', answer: 'Payment processing fees, partial payments, refunds or grouped deposits can affect the amount received. We compare source records to understand the difference.' },
      { question: 'How does receivables support work for recurring cleaning clients?', answer: 'We can discuss recurring invoices, customer deposits and unpaid balances for cleaning companies. The method depends on your invoicing software and the records you provide.' }
    ],
    related: [
      { href: '/bookkeeping-for-cleaning-businesses', label: 'Cleaning business invoices and deposits' },
      { href: '/tampa-bank-reconciliation', label: 'Bank and payment reconciliation' },
      { href: '/monthly-bookkeeping', label: 'Ongoing monthly bookkeeping' }
    ]
  },
  "/tampa-payroll-support": {
    "heading": "Keep payroll activity aligned with your bookkeeping",
    "introduction": "Payroll bookkeeping support focuses on recording and reconciling payroll activity produced by an employer's payroll provider. A payroll register may show gross wages, taxes, deductions and net pay, while the bank shows separate withdrawals. We discuss what records you have and who is responsible for processing payroll before agreeing on the bookkeeping work.",
    "steps": [
      {
        "heading": "Review the provider and payroll records",
        "text": "Identify the payroll service, pay periods, summary registers, tax and benefit liability reports, and the accounting accounts used to record each payroll run."
      },
      {
        "heading": "Compare entries with cash movements",
        "text": "Discuss how gross pay, employer costs, employee withholdings and separate provider withdrawals are represented in the books. Flag unexplained differences for review."
      },
      {
        "heading": "Clarify corrections and responsibilities",
        "text": "Share unresolved payroll-record questions with the owner or provider. Payroll processing, employee setup, tax deposits and filing stay with the responsible authorized party unless expressly covered by a separate agreement."
      }
    ],
    "recordsHeading": "Documents that help with payroll bookkeeping",
    "recordsIntro": "Payroll records contain sensitive employee information. We establish an appropriate secure sharing method and the limited access needed for the agreed bookkeeping tasks.",
    "records": [
      "Payroll summary or register for the periods being reviewed",
      "Payroll provider reports for employer taxes, benefits, deductions and liabilities, as applicable",
      "Related bank withdrawals or journal entries and the accounting chart of accounts",
      "Details of voids, corrections or off-cycle runs that may affect reconciliation"
    ],
    "faqs": [
      {
        "question": "Will you process employee paychecks or send payroll tax filings?",
        "answer": "Those duties are not automatically included in bookkeeping support. The employer and its payroll provider remain responsible for processing, deposits and filings unless a separate engagement specifically assigns authorized tasks."
      },
      {
        "question": "Why can payroll bank withdrawals exceed employee net pay?",
        "answer": "A provider may withdraw employee net pay, payroll taxes, fees or benefit amounts separately or together. We use the available register and provider reports to understand how those movements relate to the accounting entries."
      },
      {
        "question": "Can you review an old payroll liability balance?",
        "answer": "We can discuss comparing the recorded liability with provider reports and known payments. Corrections requiring a payroll provider or tax professional are referred to the appropriate responsible party."
      },
      {
        "question": "Do you need employee Social Security numbers or passwords?",
        "answer": "Please do not send employee identifiers, payroll logins or other sensitive personal information through a website form. We discuss secure, minimum-necessary access during onboarding."
      }
    ],
    "related": [
      {
        "href": "/monthly-bookkeeping",
        "label": "Monthly bookkeeping and payroll-related entries"
      },
      {
        "href": "/tampa-bank-reconciliation",
        "label": "Reconciliation of payroll bank activity"
      },
      {
        "href": "/tampa-financial-reporting",
        "label": "Reporting payroll expenses"
      }
    ]
  },
  "/tampa-financial-reporting": {
    "heading": "Understand what your bookkeeping reports show",
    "introduction": "Financial reports organize recorded business activity into views such as profit and loss and a balance sheet. They are most useful when the underlying transactions and account reconciliations are reasonably complete. We agree on the reports and review frequency that fit your business.",
    "steps": [
      {
        "heading": "Confirm the reporting period and records",
        "text": "Discuss the accounting basis, fiscal period, account structure and whether balances are reconciled. Identify missing entries or prior-period issues that could affect comparisons."
      },
      {
        "heading": "Prepare the agreed statements",
        "text": "Review a profit-and-loss statement for income and expenses and a balance sheet for recorded assets, liabilities and equity. Additional cash flow or segment views depend on your records, software and service scope."
      },
      {
        "heading": "Review trends and unresolved questions",
        "text": "Compare periods where appropriate, explain what major line items represent and point out unusual changes that deserve the owner's attention. Reports support decisions but do not predict outcomes."
      }
    ],
    "recordsHeading": "Information needed for useful financial reports",
    "recordsIntro": "A reliable comparison starts with consistent dates and complete bookkeeping information—not with a polished chart alone.",
    "records": [
      "Current bookkeeping file and agreed reporting dates",
      "Reconciled bank and credit card statements for periods in scope",
      "Information about loans, owner contributions and outstanding bills or invoices, as relevant",
      "Any questions about departments, projects or reporting categories you would like to discuss"
    ],
    "faqs": [
      {
        "question": "What is the difference between a profit-and-loss statement and a balance sheet?",
        "answer": "A profit-and-loss statement summarizes income and expenses over a period. A balance sheet shows the recorded assets, liabilities and equity on a particular date. Both depend on how complete the books are."
      },
      {
        "question": "Can you prepare a cash flow statement?",
        "answer": "We can discuss whether a cash flow report is appropriate and available from the software and records you use. It is not automatically included in every engagement."
      },
      {
        "question": "Why might a profitable month still leave little cash in the bank?",
        "answer": "Profit and cash are different measures. Timing of customer collections, payments, loan principal, equipment purchases or owner withdrawals can affect cash without matching the month's reported profit."
      },
      {
        "question": "Are these reports reviewed or audited financial statements?",
        "answer": "No. Bookkeeping reports are not an independent audit, review, assurance engagement or tax opinion. We can organize information for your accountant or other qualified adviser as agreed."
      }
    ],
    "related": [
      {
        "href": "/tampa-bank-reconciliation",
        "label": "Reconcile balances before reporting"
      },
      {
        "href": "/tampa-budgeting-forecasting",
        "label": "Use historical reports in a budget"
      },
      {
        "href": "/monthly-bookkeeping",
        "label": "Monthly bookkeeping and recurring reports"
      }
    ]
  },
  "/tampa-tax-preparation-support": {
    "heading": "Prepare organized bookkeeping records for tax season",
    "introduction": "Bookkeeping support for tax preparation means helping an owner and their tax professional start from better-organized records. It is not tax return preparation or tax advice. We can review transaction categories, reconcile agreed accounts and identify questions to settle before handing over bookkeeping reports.",
    "steps": [
      {
        "heading": "Identify the year and open bookkeeping periods",
        "text": "Confirm the reporting period, accounting file, outstanding statements and whether earlier months need cleanup before a year-end package can be prepared."
      },
      {
        "heading": "Review categories and reconcile included accounts",
        "text": "Organize available income and expense records, investigate unmatched bank activity and compile questions about owner transactions, loan balances or unsupported entries."
      },
      {
        "heading": "Prepare the agreed handoff",
        "text": "Provide the agreed financial reports and a list of unresolved bookkeeping questions for the business owner and tax professional. The tax professional determines deductions, elections, returns and filing requirements."
      }
    ],
    "recordsHeading": "What to gather for a bookkeeping handoff",
    "recordsIntro": "Your tax adviser may ask for additional information. This checklist covers bookkeeping source materials, not every tax form required for a return.",
    "records": [
      "Bank and credit card statements for the tax year and any unclosed earlier periods",
      "Sales, invoices, merchant processor records and major expense documentation",
      "Loan, asset-purchase and owner-contribution information when relevant to the bookkeeping file",
      "Prior-year closing figures and questions already raised by your tax professional, if available"
    ],
    "faqs": [
      {
        "question": "Will Dietz Bookkeeping prepare or file my business tax return?",
        "answer": "No tax return filing, tax planning or legal advice is assumed here. We focus on bookkeeping records and reports; a qualified tax professional handles tax treatment, returns, deadlines and filings."
      },
      {
        "question": "Can you tell me which expenses are tax deductible?",
        "answer": "We can categorize expenses in the books based on supporting records and agreed accounting practices. Whether an expense is deductible is a tax question for your qualified tax professional."
      },
      {
        "question": "What if the books have not been reconciled for most of the year?",
        "answer": "We can assess the backlog and propose separate cleanup work. The quality of a tax-season handoff depends on completing the necessary records and resolving open questions."
      },
      {
        "question": "Will organized bookkeeping guarantee a faster or lower-cost tax return?",
        "answer": "No. Better-organized records may help the owner and tax preparer review information, but timing, pricing and tax outcomes depend on the individual situation and the tax professional's work."
      }
    ],
    "related": [
      {
        "href": "/tampa-cleanup-bookkeeping",
        "label": "Catch up on unfinished bookkeeping"
      },
      {
        "href": "/tampa-bank-reconciliation",
        "label": "Reconcile statements before year end"
      },
      {
        "href": "/monthly-bookkeeping",
        "label": "Maintain organized books throughout the year"
      }
    ]
  },
  "/tampa-budgeting-forecasting": {
    "heading": "Build budgets and scenarios from the numbers you have",
    "introduction": "A budget is a spending and income plan; a forecast updates expectations as new information arrives. For small service businesses, either can help frame questions about seasonality, staffing, recurring expenses and upcoming purchases. Forecasts depend on assumptions and are not guarantees of future revenue or cash.",
    "steps": [
      {
        "heading": "Review your historical starting point",
        "text": "Look at the available financial reports, recurring bills, recent sales activity and the reliability of your bookkeeping records. Identify any gaps that would weaken a baseline."
      },
      {
        "heading": "Document assumptions and possible scenarios",
        "text": "Discuss expected workload, payment timing, supply costs, overhead and planned changes. Compare a base case with reasonable alternatives instead of presenting one certain outcome."
      },
      {
        "heading": "Compare actuals against the plan",
        "text": "When ongoing support is agreed, review differences between recorded results and earlier assumptions. Adjust the scenario as circumstances change and note decisions that belong to the business owner."
      }
    ],
    "recordsHeading": "Inputs for a useful budget discussion",
    "recordsIntro": "A forecast is only as helpful as its source information and assumptions. We discuss the level of detail your existing accounting records can support.",
    "records": [
      "Historical profit-and-loss reports and recent cash or bank balances",
      "Known recurring expenses, upcoming bills, loan payments and major planned purchases",
      "Expected customer demand, sales cycles or seasonal slow periods",
      "Owner assumptions about pricing, capacity, staffing or other planned changes"
    ],
    "faqs": [
      {
        "question": "What is the difference between a budget and a forecast?",
        "answer": "A budget sets out a financial plan for a period. A forecast revises expected results using the information and assumptions currently available. Both need regular review to stay useful."
      },
      {
        "question": "Can a forecast guarantee that I will have enough cash to hire?",
        "answer": "No. A forecast is a scenario, not a guarantee. It can help examine payment timing and expected costs, but hiring, financing and business decisions remain yours and may require other professional advice."
      },
      {
        "question": "Can you model seasonal income for a cleaning or contracting business?",
        "answer": "Potentially, if the historical records and owner assumptions provide a reasonable basis. We can discuss seasonal scenarios as part of an agreed budgeting or forecasting scope."
      },
      {
        "question": "Do I need accurate books before you build a budget?",
        "answer": "Complete, reconciled records generally improve a budget's starting point. We can assess the quality of the available information and discuss whether cleanup or a simpler preliminary plan makes sense."
      }
    ],
    "related": [
      {
        "href": "/tampa-financial-reporting",
        "label": "Review historical financial reports"
      },
      {
        "href": "/monthly-bookkeeping",
        "label": "Maintain current monthly records"
      },
      {
        "href": "/bookkeeping-for-contractors",
        "label": "Bookkeeping for contractors and handymen"
      }
    ]
  }
};
