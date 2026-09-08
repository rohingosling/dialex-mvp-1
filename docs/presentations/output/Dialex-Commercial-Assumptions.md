# Dialex solar commercial assumptions

All amounts are illustrative Australian dollars, excluding GST. These are planning inputs, not published prices, supplier quotes or validated market evidence. The business is intended to target Australian solar installers first.

## Plans

| Plan | Monthly fee | Included minutes | Agents | Additional minute |
|---|---:|---:|---:|---:|
| Starter | $399 | 500 | 1 | $0.35 |
| Growth | $799 | 1,500 | 3 | $0.30 |
| Scale | $1,499 | 3,500 | 5 | $0.25 |

One-off setup is $799 for one standard solar agent configuration, testing and handover. Additional setup and integrations need separate scoping. Minutes are pooled per account per month.

## Growth unit economics

| Input or result | Amount |
|---|---:|
| Subscription | $799/month |
| Assumed voice delivery cost | $0.20/minute |
| Voice cost at 1,500 minutes | $300/month |
| Support and account operations allowance | $100/month |
| Total delivery cost | $400/month |
| Recurring gross profit | $399/month |
| Recurring gross margin | 49.94% |
| Assumed setup delivery cost | $300/customer |
| Setup gross profit | $499/customer |

Gross profit excludes fixed overheads, founder pay, acquisition expense and tax. Calendar-provider fees, API access and additional booking support have not yet been costed and may reduce the margin. Voice cost is a planning allowance, not a supplier quote. Extra minutes on Growth add $0.10 gross profit per minute before additional support costs. At an assumed $3,000 monthly fixed overhead, eight Growth customers cover that overhead before founder pay, acquisition expense and taxes.

## Customer break-even

The solar example assumes **$1,000 contribution per additional completed installation**. This is an illustrative input, not a measured industry average or a claim about typical solar margins. Replace it with the installer's own figure before using a numerical sales claim.

Contribution is the installation revenue, excluding GST, less the costs that vary because that extra installation is delivered. Include equipment, installation labour or subcontractors, job-specific fees, variable sales commissions and other incremental costs. It is the amount available for fixed overheads and profit. It is neither total sales revenue nor net profit after all business expenses. It may differ from accounting gross profit because cost classifications differ. [Contribution methodology](https://www.accaglobal.com/uk/en/student/exam-support-resources/fundamentals-exams-study-resources/f5/technical-articles/CVP-analysis.html).

For example only, $8,000 installation revenue minus $7,000 variable job costs leaves $1,000 contribution. These figures are not market estimates.

| Additional completed installations per month | 1 | 2 | 3 |
|---|---:|---:|---:|
| Contribution after variable job costs | $1,000 | $2,000 | $3,000 |
| Growth subscription | $799 | $799 | $799 |
| Benefit after the recurring Dialex fee | $201 | $1,201 | $2,201 |

Monthly break-even is ceiling($799 / contribution per installation). First-month break-even is ceiling(($799 monthly fee + $799 setup) / contribution per installation).

| Illustrative contribution per installation | Extra installs to cover monthly fee | Extra installs to cover first month and setup |
|---|---:|---:|
| $500 | 2 | 4 |
| $1,000 | 1 | 2 |
| $2,000 | 1 | 1 |

At the central $1,000 assumption, two extra installations leave $402 after the $1,598 first-month charge. Later months with two extra installations leave $1,201 after the recurring subscription. These are contributions after the Dialex fee, before any additional overhead or tax.

The previous generic $200-per-job assumption produced four jobs for monthly break-even and eight for the first month. It was not based on solar installation economics.

Count only additional completed installations attributable to Dialex. A quote request, callback or site visit is an earlier sales stage. Allow for quote conversion, time to installation, cancellations and actual payment timing. Extra minutes, booking-provider fees and additional customer operating costs raise break-even. No labour savings have been added.

## Proposed core sales offer

Help solar installers capture enquiries they would otherwise miss while the team is on the roof, on the road or with a customer. Progress those enquiries to quotes, site assessments and a useful follow-up record.

The conditional numerical pitch is: **At $1,000 contribution per additional completed installation, one recovered installation covers the $799 monthly Growth fee. Two cover the first month and $799 setup.** This is a break-even illustration, not a guarantee that Dialex will produce a particular number of installations.

The proposed 30-day pilot measures missed calls, qualified enquiries, site visits, quotes and attributable installations. Continue tracking completions if the sales cycle extends beyond the pilot. No free trial, discount, refund promise or performance guarantee has been approved.

## Setup pricing

Retain the working $799 setup fee for now. Matching Growth's monthly price is a pricing choice, not evidence that it improves conversion. Test whether customers understand and value the work covered: a solar greeting, qualification questions, approved process answers, escalation rules, a test call and team handover.

Show the total upfront price clearly: $799 setup plus $799 for the first Growth month equals $1,598, excluding GST and extras. The concern to test is the upfront commitment and perceived setup value, rather than the matching numbers alone. Price custom calendar or CRM work separately until its delivery cost is known.


## First-year scenarios

Start with zero customers. Add 1, 2 or 4 customers at the beginning of each month; all are on Growth, pay a full first month and pay setup once. Assume no cancellations, discounts, refunds, free trials or collection delays. Assume full included-minute usage for costs.

| Result | Conservative | Base | Optimistic |
|---|---:|---:|---:|
| New customers per month | 1 | 2 | 4 |
| Customer-months in year 1 | 78 | 156 | 312 |
| Customers at month 12 | 12 | 24 | 48 |
| Month-12 recurring revenue | $9,588 | $19,176 | $38,352 |
| Year-1 subscription revenue | $62,322 | $124,644 | $249,288 |
| Year-1 setup revenue | $9,588 | $19,176 | $38,352 |
| Year-1 total revenue | $71,910 | $143,820 | $287,680 |
| Year-1 gross profit | $37,110 | $74,220 | $148,440 |

Gross profit includes setup delivery costs and recurring account costs; it excludes fixed overheads and other expenses described above. Monthly recurring revenue is a run rate, not annual revenue. These are arithmetic scenarios, not established demand forecasts.

## Product scope and prototype

The first proposed offer is an inbound solar enquiry agent with quote qualification, site-assessment requests, approved process answers, human handoff and a customer workspace. Direct site-visit booking is a proposed capability that requires a connected calendar and successful booking confirmation. Otherwise the agent collects preferred times for staff to confirm. Support and outbound follow-up agents are later concepts. Authentication, live voice, telephony routing, production AI, payments and external integrations are not connected in the local prototype. All activity and businesses in screenshots are fictional.

Design references: [Microsoft Fluent shapes](https://fluent2.microsoft.design/shapes), [colour](https://fluent2.microsoft.design/color) and [material](https://fluent2.microsoft.design/material).
