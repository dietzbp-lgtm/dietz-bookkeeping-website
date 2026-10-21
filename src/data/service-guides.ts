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
  }
};
