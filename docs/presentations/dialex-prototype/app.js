// ---------------------------------------------------------------------------------------------------------------------
// Project: Dialex customer prototype
// Version: 1.0
// Date: 2026-09-09
// Author: Rohin Gosling
// Description: Local sample workspace. All interactions are simulated and remain in memory.
// ---------------------------------------------------------------------------------------------------------------------

"use strict";

const ICON_PATHS =
{
    overview: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    agent: '<rect x="4" y="6" width="16" height="14" rx="4"/><path d="M12 3v3M8 12h.01M16 12h.01M9 16h6M1 11v5M23 11v5"/>',
    phone: '<path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 5a2 2 0 0 1 2-2Z"/>',
    billing: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M7 15h4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    chevron: '<path d="m9 5 7 7-7 7"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 11h18M8 15h2M14 15h2"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    handoff: '<path d="M4 7h12M12 3l4 4-4 4M20 17H8M12 13l-4 4 4 4"/>',
    play: '<path d="m8 4 12 8-12 8Z"/>',
    microphone: '<rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',
    spark: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
    save: '<path d="M4 3h13l4 4v14H3V3h1Z"/><path d="M7 3v6h10V3M7 21v-8h10v8"/>',
    shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z"/><path d="m8 12 3 3 5-6"/>'
};

const NAVIGATION =
[
    { id: "overview", title: "Overview", icon: "overview" },
    { id: "agents", title: "Voice agents", icon: "agent" },
    { id: "calls", title: "Call history", icon: "phone" },
    { id: "usage", title: "Usage & plan", icon: "billing" }
];

const AGENTS =
[
    { id: "harper", name: "Harper", role: "Solar enquiries", type: "Inbound", status: "Active", voice: "Australian English · Warm", hours: "After hours + missed calls", instructions: "Welcome callers to Harbour Solar. Ask for their name, property suburb, solar or battery interest, and preferred callback time. Capture quote enquiries and site-visit requests. If an approved booking calendar is connected, offer available assessment slots and confirm only after the booking succeeds. Otherwise record preferred times for the team. Use approved answers about the installation process. Hand technical design, off-grid suitability, final prices and requests for a human to the team." },
    { id: "morgan", name: "Morgan", role: "Installation support", type: "Support", status: "Draft", voice: "Australian English · Clear", hours: "Business hours", instructions: "Explain the approved solar installation process and capture questions about existing projects. Ask for the customer's project reference and callback preference. A team member confirms project dates and changes. Escalate technical advice, system sizing and off-grid design to a solar specialist." },
    { id: "riley", name: "Riley", role: "Quote follow-up", type: "Outbound", status: "Draft", voice: "Australian English · Warm", hours: "Business hours", instructions: "Follow up only with solar prospects who requested a callback. Confirm their solar or battery interest and offer a site-assessment time from an approved connected calendar. If booking is unavailable, capture preferred times for the team. Do not promise savings, a final quote or off-grid suitability." }
];

const CALLS =
[
    { id: "call-1", name: "Sarah W.", initials: "SW", time: "10:42 am", duration: "2m 18s", outcome: "Quote requested", tone: "blue", suburb: "Marrickville", topic: "Solar and battery quote", summary: "Sarah wants a quote for rooftop solar and a battery at her Marrickville home. Harper captured her interest in reducing grid use and her preferred callback after 3 pm. The team will request an electricity bill and assess the property before preparing a quote.", request: "Could I get a quote for solar panels and a battery? I would like to use less electricity from the grid.", response: "I can collect the details for our solar team. Which suburb is the property in, and when would you like an adviser to call? They will assess your usage and property before recommending a system.", nextStep: "Solar adviser to call after 3 pm and arrange the information needed for a quote." },
    { id: "call-2", name: "Daniel K.", initials: "DK", time: "10:16 am", duration: "3m 05s", outcome: "Site visit booked", tone: "yellow", suburb: "Leichhardt", topic: "Book a solar site assessment", summary: "Daniel asked for a site visit to discuss rooftop solar. In this connected-calendar scenario, Harper offered an available assessment slot and recorded a confirmed visit with Jamie for 10 September, 10:00–10:45 am AEST. This is a fictional booking, with no calendar event or notification sent.", request: "Can someone come out and assess the roof? Tomorrow morning would suit me.", response: "The sample calendar has tomorrow at 10 am available for a 45-minute site assessment. Does that suit you? Once the booking succeeds, I can confirm the visit details.", nextStep: "Demo booking: 10 September, 10:00–10:45 am AEST, Leichhardt. A production booking requires a connected calendar and successful confirmation." },
    { id: "call-3", name: "Priya R.", initials: "PR", time: "9:58 am", duration: "1m 42s", outcome: "Callback requested", tone: "blue", suburb: "Newtown", topic: "Battery addition to existing solar", summary: "Priya has an existing solar system and wants to discuss adding a battery. She requested a callback tomorrow afternoon. The team needs to check the existing equipment and battery compatibility.", request: "We already have solar panels. Could someone call me tomorrow afternoon about adding a battery?", response: "Of course. I will record your preferred time and ask our solar team to discuss your existing system and what you want the battery to do.", nextStep: "Solar team to call tomorrow afternoon and check the existing system details." },
    { id: "call-4", name: "James T.", initials: "JT", time: "9:35 am", duration: "2m 51s", outcome: "Handed to team", tone: "yellow", suburb: "Balmain", topic: "Speak to a solar adviser", summary: "James asked to speak to a person about the solar proposal he received. Harper recognised the request for a human and handed the sample conversation to the sales team.", request: "I have a few questions about the proposal. Can I speak to a person, please?", response: "Certainly. I will try the solar sales team now. If no one is available, I can arrange a callback at a time that suits you.", nextStep: "The sample call was handed to a solar adviser for a discussion of the proposal." },
    { id: "call-5", name: "Ella M.", initials: "EM", time: "9:12 am", duration: "1m 55s", outcome: "Question answered", tone: "neutral", suburb: "Glebe", topic: "Solar installation process", summary: "Ella asked what happens between the first enquiry and installation. Harper outlined Harbour Solar's sample process: discuss energy needs, assess the property, prepare a design and quote, then arrange applicable approvals, installation and handover. The team confirms dates and requirements for each property.", request: "How does the solar installation process work? What happens after I ask for a quote?", response: "Our sample process starts with your energy needs and a property assessment. The team prepares a design and quote, then arranges the required approvals, installation and handover. Your adviser confirms the steps and timing for your property.", nextStep: "No follow-up requested. The installer confirms the process and timing for each property." },
    { id: "call-6", name: "Noah B.", initials: "NB", time: "8:54 am", duration: "3m 22s", outcome: "Specialist callback", tone: "blue", suburb: "Galston", topic: "Off-grid solar and battery assessment", summary: "Noah wants to explore going off-grid at a rural property. Harper captured the location, current grid connection and need for a specialist assessment. No system size, price or guarantee of off-grid capability was given.", request: "What would I need to get off-grid? Would solar panels and a battery be enough?", response: "That needs a specialist design based on your energy use, seasonal solar generation, storage and backup needs. I can arrange a callback to discuss the property and the loads you need to run.", nextStep: "Off-grid specialist to assess energy use, site conditions, storage and backup requirements." },
    { id: "call-7", name: "Olivia C.", initials: "OC", time: "8:31 am", duration: "2m 04s", outcome: "Site visit requested", tone: "neutral", suburb: "Ryde", topic: "Site visit awaiting confirmation", summary: "Olivia requested a Friday afternoon solar assessment. Calendar availability was unavailable in this sample scenario, so Harper recorded the preferred time for staff to confirm. No appointment was booked.", request: "Could you book someone to visit on Friday afternoon?", response: "I can record Friday afternoon as your preference. I cannot confirm availability right now, so the team will call you to agree a time.", nextStep: "Awaiting staff confirmation. Preferred time: Friday afternoon. No confirmed booking." }
];

const PLANS =
[
    { name: "Starter", monthly: 399, minutes: 500, agents: "1 voice agent", overage: "0.35" },
    { name: "Growth", monthly: 799, minutes: 1500, agents: "3 voice agents", overage: "0.30" },
    { name: "Scale", monthly: 1499, minutes: 3500, agents: "5 voice agents", overage: "0.25" }
];

const applicationState =
{
    page: "overview",
    selectedAgent: "harper",
    agentTab: "configuration",
    selectedCall: "call-1",
    search: "",
    assistantResponse: "",
    testRunning: false,
    testFinished: false,
    testTimer: null,
    toastTimer: null
};

function icon ( name, size = 18 )
{
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS [ name ] || ICON_PATHS.overview}</svg>`;
}

function escapeHTML ( value )
{
    return String ( value ).replace ( /[&<>"']/g, function ( character )
    {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } [ character ];
    } );
}

function money ( amount )
{
    return new Intl.NumberFormat ( "en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 } ).format ( amount );
}

function status ( label, tone = "" )
{
    return `<span class="status ${tone}">${escapeHTML ( label )}</span>`;
}

function heading ( title, subtitle, actions = "" )
{
    return `<div class="page-heading"><div><h1>${title}</h1><p>${subtitle}</p></div><div class="heading-actions">${actions}</div></div>`;
}

function metric ( label, value, description, iconName )
{
    return `<article class="metric"><div class="metric-heading"><span>${label}</span>${icon ( iconName )}</div><div class="metric-value">${value}</div><div class="metric-description">${description}</div></article>`;
}

function showToast ( message )
{
    clearTimeout ( applicationState.toastTimer );
    const toast = document.getElementById ( "toast" );
    toast.textContent = message;
    toast.classList.add ( "visible" );
    applicationState.toastTimer = setTimeout ( function ()
    {
        toast.classList.remove ( "visible" );
    }, 4200 );
}

function renderNavigation ()
{
    document.getElementById ( "navigation" ).innerHTML = NAVIGATION.map ( function ( item )
    {
        return `<a href="#${item.id}" class="navigation-item ${applicationState.page === item.id ? "active" : ""}" ${applicationState.page === item.id ? 'aria-current="page"' : ""}>${icon ( item.icon )}<span>${item.title}</span>${item.id === "agents" ? `<span class="navigation-count">${AGENTS.length}</span>` : ""}</a>`;
    } ).join ( "" );
    document.getElementById ( "breadcrumb-current" ).textContent = NAVIGATION.find ( function ( item )
    {
        return item.id === applicationState.page;
    } ).title;
}

function overviewPage ()
{
    const activityValues = [ 12, 19, 16, 9, 22, 26, 24 ];
    const dayLabels      = [ "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed" ];

    return heading ( "Your workspace, at a glance", "Welcome back, Alex. Here’s how your solar enquiries are progressing.", `<span class="button">${icon ( "calendar", 16 )}3–9 Sep 2026</span><button class="button primary" data-action="create-agent">${icon ( "plus", 16 )}Create agent</button>` ) +
    `<section class="status-banner"><div class="status-icon">${icon ( "shield", 21 )}</div><div><strong>Harper is ready for your next solar enquiry</strong><p>Solar enquiries · After-hours and missed-call coverage</p></div><button class="button" data-action="open-test">${icon ( "play", 14 )}Test your agent</button></section>
    <section class="metrics" aria-label="Sample activity for 3 to 9 September">
        ${metric ( "Calls handled", "128", '<span class="positive">↑ 18%</span> vs previous 7 days', "phone" )}
        ${metric ( "Quote enquiries", "34", "Solar and battery opportunities", "phone" )}
        ${metric ( "Site visits booked", "12", "Sample calendar confirmations", "calendar" )}
        ${metric ( "Average call length", "2m 18s", "Across all handled calls", "clock" )}
    </section>
    <div class="overview-grid">
        <section class="panel panel-padding"><div class="panel-heading"><div><h2>Call activity</h2><p class="panel-subtitle">Solar enquiries across the week</p></div><span class="chart-legend"><span class="legend-square"></span>Handled calls</span></div><div class="bar-chart" role="img" aria-label="128 calls across seven days: 12, 19, 16, 9, 22, 26, and 24"><div class="chart-scale"><span>30</span><span>15</span><span>0</span></div>${activityValues.map ( function ( value, index )
        {
            return `<div class="bar-column"><div class="chart-bar ${index === 6 ? "highlight" : ""}" style="height:${value / 30 * 100}%" title="${dayLabels [ index ]}: ${value} calls"></div></div>`;
        } ).join ( "" )}</div><div class="chart-labels"><span></span>${dayLabels.map ( function ( day )
        {
            return `<span>${day}</span>`;
        } ).join ( "" )}</div><div class="activity-summary"><strong>34</strong>solar and battery quote enquiries captured</div></section>
        <section class="panel panel-padding"><div class="panel-heading"><h2>Your voice agents</h2><a class="button quiet" href="#agents">Manage ${icon ( "chevron", 13 )}</a></div>${AGENTS.slice ( 0, 2 ).map ( function ( agent, index )
        {
            return `<div class="agent-row"><span class="agent-avatar ${index ? "yellow" : ""}">${icon ( "agent", 21 )}</span><div><h3>${escapeHTML ( agent.name )}</h3><p>${escapeHTML ( agent.role )}</p></div>${status ( agent.status, index ? "neutral" : "" )}</div>`;
        } ).join ( "" )}<p class="agent-note">Keep answers consistent with your business, and hand the conversation to a person when needed.</p></section>
    </div>
    <section class="panel recent-panel"><div class="panel-heading"><h2>Recent conversations</h2><a class="button quiet" href="#calls">View all calls ${icon ( "chevron", 13 )}</a></div><div class="table-scroll"><table><thead><tr><th>Caller</th><th>Agent</th><th>Outcome</th><th>Duration</th><th>Today</th><th><span class="period-label">Details</span></th></tr></thead><tbody>${CALLS.slice ( 0, 3 ).map ( function ( call )
    {
        return `<tr><td><span class="caller-name"><span class="caller-dot">${call.initials}</span>${call.name}</span></td><td class="muted">Harper</td><td>${status ( call.outcome, call.tone )}</td><td class="muted">${call.duration}</td><td class="muted">${call.time}</td><td><button class="row-button" data-call="${call.id}" aria-label="View call from ${call.name}">View ${icon ( "chevron", 12 )}</button></td></tr>`;
    } ).join ( "" )}</tbody></table></div></section>`;
}

function selectedOptions ( values, selectedValue )
{
    return values.map ( function ( value )
    {
        return `<option ${value === selectedValue ? "selected" : ""}>${escapeHTML ( value )}</option>`;
    } ).join ( "" );
}

function agentConfiguration ( agent )
{
    return `<form id="agent-form"><div class="form-grid">
        <label class="field">Agent name<input name="name" value="${escapeHTML ( agent.name )}" required maxlength="35"></label>
        <label class="field">Agent type<select name="type">${selectedOptions ( [ "Inbound", "Support", "Outbound" ], agent.type )}</select></label>
        <label class="field">Voice<select name="voice">${selectedOptions ( [ "Australian English · Warm", "Australian English · Clear" ], agent.voice )}</select></label>
        <label class="field">Coverage<select name="hours">${selectedOptions ( [ "After hours + missed calls", "Business hours", "All day" ], agent.hours )}</select></label>
        <label class="field full-width">What should this agent do?<textarea name="instructions" required maxlength="1500">${escapeHTML ( agent.instructions )}</textarea><span class="field-hint">Give clear instructions, including when to hand the conversation to your team.</span></label>
    </div><div class="form-footer"><p>Try your changes in a sample conversation.</p><button class="button primary" type="submit">${icon ( "save", 15 )}Save changes</button></div></form>`;
}

function agentAssistant ( agent )
{
    return `<div class="assistant-intro"><span class="agent-avatar">${icon ( "spark", 22 )}</span><div><h3>Let’s give ${escapeHTML ( agent.name )} a clear role</h3><p style="margin-top:8px">Describe how you would like your calls handled. I’ll turn that into a starting set of instructions.</p><div class="suggestions"><button class="suggestion" data-suggestion="after-hours">Handle after-hours enquiries</button><button class="suggestion" data-suggestion="support">Answer common questions</button></div></div></div>
        <form id="assistant-form"><label class="field">Tell me about your business<textarea id="assistant-prompt" required maxlength="1000" placeholder="For example: We install solar panels and batteries in Sydney. Capture quote enquiries, arrange site assessments and hand technical questions to our advisers."></textarea></label><div class="form-footer"><p>Guided setup · sample response</p><button class="button primary" type="submit">${icon ( "spark", 15 )}Suggest instructions</button></div></form>
        ${applicationState.assistantResponse ? `<div class="assistant-response">${escapeHTML ( applicationState.assistantResponse )}</div><button class="button" data-action="apply-instructions">Use these instructions</button>` : ""}`;
}

function agentTest ( agent )
{
    return `<div class="test-layout"><div class="test-stage"><div class="voice-symbol">${icon ( "microphone", 34 )}</div><h3>${applicationState.testRunning ? "Sample conversation…" : applicationState.testFinished ? "Test complete" : `Try a call with ${escapeHTML ( agent.name )}`}</h3><p>Preview the greeting, caller request and agent response in a typical enquiry.</p><button class="button accent" data-action="run-test" ${applicationState.testRunning ? "disabled" : ""}>${icon ( "play", 15 )}${applicationState.testFinished ? "Run sample again" : "Run sample conversation"}</button><p style="margin-bottom:0">Simulated transcript · no microphone or live call</p></div><div><div class="panel-heading"><h3>Conversation preview</h3>${status ( "Sample", "neutral" )}</div><div class="transcript" aria-live="polite">${applicationState.testFinished ? `<div class="transcript-line"><strong>${escapeHTML ( agent.name )}</strong>Thanks for calling Harbour Solar. I’m ${escapeHTML ( agent.name )}, the virtual assistant. How can I help?</div><div class="transcript-line customer"><strong>Caller</strong>I’d like a quote for solar panels and a battery. Could someone visit the property?</div><div class="transcript-line"><strong>${escapeHTML ( agent.name )}</strong>I can help arrange a solar assessment. Which suburb is the property in? With a connected calendar I can offer available times. Otherwise, I can record your preferred time for the team.</div>` : `<p class="empty-transcript">${applicationState.testRunning ? "Preparing the sample conversation…" : "Run a sample to see the greeting, caller request and agent response here."}</p>`}</div></div></div><div class="notice">This sample demonstrates the conversation pattern. A connected product would test the saved instructions, voice and business knowledge.</div>`;
}

function agentsPage ()
{
    const agent = AGENTS.find ( function ( item )
    {
        return item.id === applicationState.selectedAgent;
    } );
    const tabs  = [ [ "configuration", "Configuration" ], [ "assistant", "Guided setup" ], [ "test", "Test agent" ] ];

    return heading ( "Voice agents", "Solar enquiries, site assessments and customer support.", `<button class="button primary" data-action="create-agent">${icon ( "plus", 16 )}Create agent</button>` ) +
        `<div class="split-workspace"><section class="panel agent-list" aria-label="Your agents"><div class="list-caption">YOUR AGENTS · ${AGENTS.length}</div>${AGENTS.map ( function ( item, index )
        {
            return `<button class="agent-select ${item.id === agent.id ? "selected" : ""}" data-agent="${item.id}" aria-pressed="${item.id === agent.id}"><span class="agent-avatar ${index === 1 ? "yellow" : ""}">${icon ( "agent", 20 )}</span><span><strong>${escapeHTML ( item.name )}</strong><small>${escapeHTML ( item.role )}</small></span></button>`;
        } ).join ( "" )}<p class="agent-list-footer">Start with one clear task.<br>Test the conversation before going live.</p></section><section class="panel panel-padding"><div class="agent-detail-header"><span class="agent-avatar">${icon ( "agent", 24 )}</span><div><h2>${escapeHTML ( agent.name )}</h2><p>${escapeHTML ( agent.role )} · Australian English</p></div>${status ( agent.status, agent.status === "Draft" ? "neutral" : "" )}</div><div class="tabs" role="tablist" aria-label="Agent settings">${tabs.map ( function ( tab )
        {
            return `<button class="tab" id="tab-${tab [ 0 ]}" role="tab" aria-selected="${applicationState.agentTab === tab [ 0 ]}" aria-controls="agent-tab-content" tabindex="${applicationState.agentTab === tab [ 0 ] ? 0 : -1}" data-tab="${tab [ 0 ]}">${tab [ 1 ]}</button>`;
        } ).join ( "" )}</div><div id="agent-tab-content" role="tabpanel" aria-labelledby="tab-${applicationState.agentTab}">${applicationState.agentTab === "configuration" ? agentConfiguration ( agent ) : applicationState.agentTab === "assistant" ? agentAssistant ( agent ) : agentTest ( agent )}</div></section></div>`;
}

function callDetail ( call )
{
    return `<div class="panel-heading"><div><h2>${call.name}</h2><p class="panel-subtitle">9 September 2026 · ${call.time} AEST</p></div>${status ( call.outcome, call.tone )}</div><div class="detail-metadata"><span>Agent<strong>Harper</strong></span><span>Duration<strong>${call.duration}</strong></span><span>Suburb<strong>${call.suburb}</strong></span></div><div class="detail-summary"><strong>CALL SUMMARY</strong>${call.summary}</div><div class="panel-heading"><h3>Transcript excerpt</h3><span class="period-label">Sample data</span></div><div class="transcript"><div class="transcript-line customer"><strong>Caller</strong>${call.request}</div><div class="transcript-line"><strong>Harper</strong>${call.response}</div></div><div class="notice">${call.nextStep}</div>`;
}

function callList ()
{
    const matchingCalls = CALLS.filter ( function ( call )
    {
        return `${call.name} ${call.outcome} ${call.suburb} ${call.topic} ${call.summary}`.toLowerCase ().includes ( applicationState.search.toLowerCase () );
    } );

    return matchingCalls.length ? matchingCalls.map ( function ( call )
    {
        return `<button class="call-select ${call.id === applicationState.selectedCall ? "selected" : ""}" data-select-call="${call.id}" aria-pressed="${call.id === applicationState.selectedCall}"><span class="caller-dot">${call.initials}</span><div><strong>${call.name}</strong><small>Harper · ${call.suburb}</small></div><div>${status ( call.outcome, call.tone )}<small>${call.time} · ${call.duration}</small></div></button>`;
    } ).join ( "" ) : '<p class="empty-state">No sample calls match your search.</p>';
}

function callsPage ()
{
    const call = CALLS.find ( function ( item )
    {
        return item.id === applicationState.selectedCall;
    } );
    return heading ( "Call history", "Quotes, site visits, callbacks and solar questions.", `<button class="button" data-action="export-calls">${icon ( "download", 16 )}Export sample calls</button>` ) +
        `<div class="call-layout"><section class="panel"><div class="call-list-heading"><label class="search-field">${icon ( "search", 16 )}<input id="call-search" type="search" placeholder="Search names, topics or outcomes" aria-label="Search sample calls" value="${escapeHTML ( applicationState.search )}"></label></div><div id="call-list">${callList ()}</div></section><section class="panel panel-padding" id="call-detail">${callDetail ( call )}</section></div>`;
}

function usagePage ()
{
    return heading ( "Usage & plan", "A clear view of your minutes and monthly costs.", '<span class="button">AUD · excluding GST</span>' ) +
        `<section class="plan-grid">${PLANS.map ( function ( plan )
        {
            return `<article class="panel plan ${plan.name === "Growth" ? "current" : ""}"><div class="plan-title"><h2>${plan.name}</h2>${plan.name === "Growth" ? status ( "Current plan", "blue" ) : ""}</div><div class="price">${money ( plan.monthly )}<span> / month</span></div><p>${plan.name === "Starter" ? "A first agent for solar enquiries." : plan.name === "Growth" ? "More coverage for solar and battery leads." : "Higher call volumes across your team."}</p><div class="plan-features"><span>${icon ( "check", 15 )}${plan.minutes.toLocaleString ( "en-AU" )} included minutes</span><span>${icon ( "check", 15 )}${plan.agents}</span><span>${icon ( "check", 15 )}$${plan.overage} / additional minute</span><span>${icon ( "check", 15 )}Call summaries &amp; handoff rules</span></div><button class="button ${plan.name === "Growth" ? "" : "primary"}" data-plan="${plan.name}" style="width:100%">${plan.name === "Growth" ? "View current plan" : `Explore ${plan.name}`}</button></article>`;
        } ).join ( "" )}</section>
        <section class="panel panel-padding usage-panel"><div><h3>September usage</h3><div class="usage-total"><strong>684 minutes</strong><span>of 1,500 included</span></div><progress value="684" max="1500" aria-label="684 of 1500 minutes used"></progress><p>816 minutes remaining. Usage resets on 1 October.<br>Additional minutes on Growth cost $0.30 each.</p></div><div><h3>Estimated monthly bill</h3><div class="billing-line"><span>Growth subscription</span><strong>$799.00</strong></div><div class="billing-line"><span>Additional usage so far</span><strong>$0.00</strong></div><div class="billing-line total"><span>Current estimate</span><strong>$799.00</strong></div><p>Excluding GST. Final usage may change this amount.</p></div></section>
        <div class="notice">Illustrative pricing for discussion. A one-off $799 setup fee includes one standard agent setup and handover. Additional setup or integrations would be scoped separately. No payment is collected in this prototype.</div>`;
}

function render ()
{
    renderNavigation ();
    const pages = { overview: overviewPage, agents: agentsPage, calls: callsPage, usage: usagePage };
    document.getElementById ( "main-content" ).innerHTML = pages [ applicationState.page ] ();
    bindPageEvents ();
}

function navigate ( page )
{
    if ( applicationState.page === page )
    {
        render ();
    }
    else
    {
        location.hash = page;
    }
}

function createAgent ()
{
    const agentId = `agent-${AGENTS.length + 1}`;
    AGENTS.push ( { id: agentId, name: "New agent", role: "Solar enquiries", type: "Inbound", status: "Draft", voice: "Australian English · Warm", hours: "After hours + missed calls", instructions: "Welcome solar and battery enquiries, capture the property suburb and arrange a callback or site-assessment request." } );
    applicationState.selectedAgent     = agentId;
    applicationState.agentTab          = "assistant";
    applicationState.assistantResponse = "";
    applicationState.testFinished      = false;
    navigate ( "agents" );
    showToast ( "Draft agent created for this demo. Start with guided setup." );
}

function runTest ()
{
    applicationState.testRunning  = true;
    applicationState.testFinished = false;
    render ();
    clearTimeout ( applicationState.testTimer );
    applicationState.testTimer = setTimeout ( function ()
    {
        applicationState.testRunning  = false;
        applicationState.testFinished = true;
        render ();
        showToast ( "Sample complete. Review the conversation preview." );
    }, 1400 );
}

function exportCalls ()
{
    const rows = [ [ "Sample data only", "Caller", "Agent", "Suburb", "Topic", "Outcome", "Duration", "Time AEST", "Next step" ], ...CALLS.map ( function ( call )
    {
        return [ "Simulated", call.name, "Harper", call.suburb, call.topic, call.outcome, call.duration, call.time, call.nextStep ];
    } ) ];
    const csv  = rows.map ( function ( row )
    {
        return row.map ( function ( value )
    {
        return `"${value.replace ( /"/g, '""' )}"`;
    } ).join ( "," );
    } ).join ( "\r\n" );
    const url  = URL.createObjectURL ( new Blob ( [ csv ], { type: "text/csv;charset=utf-8;" } ) );
    const link = document.createElement ( "a" );
    link.href = url;
    link.download = "dialex-sample-calls.csv";
    link.click ();
    setTimeout ( function ()
    {
        URL.revokeObjectURL ( url );
    }, 1000 );
    showToast ( "Sample call history exported." );
}

function bindPageEvents ()
{
    document.querySelectorAll ( "[data-action]" ).forEach ( function ( button )
    {
        button.addEventListener ( "click", function ()
        {
            const action = button.dataset.action;
            if ( action === "create-agent" )
            {
                createAgent ();
            }
            if ( action === "open-test" )
            {
                applicationState.selectedAgent = "harper";
                applicationState.agentTab = "test";
                navigate ( "agents" );
            }
            if ( action === "run-test" )
            {
                runTest ();
            }
            if ( action === "export-calls" )
            {
                exportCalls ();
            }
            if ( action === "apply-instructions" )
            {
                AGENTS.find ( function ( item )
                {
                    return item.id === applicationState.selectedAgent;
                } ).instructions = applicationState.assistantResponse;
                applicationState.agentTab = "configuration";
                render ();
                showToast ( "Suggested instructions applied to this demo agent." );
            }
        } );
    } );

    document.querySelectorAll ( "[data-agent]" ).forEach ( function ( button )
    {
        button.addEventListener ( "click", function ()
        {
            applicationState.selectedAgent     = button.dataset.agent;
            applicationState.assistantResponse = "";
            applicationState.testFinished      = false;
            applicationState.testRunning       = false;
            clearTimeout ( applicationState.testTimer );
            render ();
        } );
    } );

    document.querySelectorAll ( "[data-tab]" ).forEach ( function ( button )
    {
        button.addEventListener ( "click", function ()
        {
            applicationState.agentTab = button.dataset.tab;
            render ();
            document.getElementById ( `tab-${applicationState.agentTab}` ).focus ();
        } );
        button.addEventListener ( "keydown", function ( event )
        {
            const tabs = [ "configuration", "assistant", "test" ];
            let index  = tabs.indexOf ( applicationState.agentTab );
            if ( ![ "ArrowRight", "ArrowLeft", "Home", "End" ].includes ( event.key ) )
            {
                return;
            }
            event.preventDefault ();
            if ( event.key === "ArrowRight" )
            {
                index = ( index + 1 ) % tabs.length;
            }
            if ( event.key === "ArrowLeft" )
            {
                index = ( index + tabs.length - 1 ) % tabs.length;
            }
            if ( event.key === "Home" )
            {
                index = 0;
            }
            if ( event.key === "End" )
            {
                index = tabs.length - 1;
            }
            applicationState.agentTab = tabs [ index ];
            render ();
            document.getElementById ( `tab-${applicationState.agentTab}` ).focus ();
        } );
    } );

    document.querySelectorAll ( "[data-call]" ).forEach ( function ( button )
    {
        button.addEventListener ( "click", function ()
        {
            applicationState.selectedCall = button.dataset.call;
            navigate ( "calls" );
        } );
    } );

    const callListElement = document.getElementById ( "call-list" );
    if ( callListElement )
    {
        callListElement.addEventListener ( "click", function ( event )
        {
            const button = event.target.closest ( "[data-select-call]" );
            if ( !button )
            {
                return;
            }
            applicationState.selectedCall = button.dataset.selectCall;
            callListElement.innerHTML = callList ();
            document.getElementById ( "call-detail" ).innerHTML = callDetail ( CALLS.find ( function ( call )
            {
                return call.id === applicationState.selectedCall;
            } ) );
        } );
    }

    const callSearch = document.getElementById ( "call-search" );
    if ( callSearch )
    {
        callSearch.addEventListener ( "input", function ()
        {
            applicationState.search = callSearch.value;
            document.getElementById ( "call-list" ).innerHTML = callList ();
        } );
    }

    const agentForm = document.getElementById ( "agent-form" );
    if ( agentForm )
    {
        agentForm.addEventListener ( "submit", function ( event )
        {
            event.preventDefault ();
            const values = new FormData ( agentForm );
            const agent  = AGENTS.find ( function ( item )
            {
                return item.id === applicationState.selectedAgent;
            } );
            for ( const field of [ "name", "type", "voice", "hours", "instructions" ] )
            {
                agent [ field ] = values.get ( field ).trim ();
            }
            agent.role = { Inbound: "Solar enquiries", Support: "Installation support", Outbound: "Quote follow-up" } [ agent.type ];
            render ();
            showToast ( "Changes saved for this demo session." );
        } );
    }

    document.querySelectorAll ( "[data-suggestion]" ).forEach ( function ( button )
    {
        button.addEventListener ( "click", function ()
        {
            document.getElementById ( "assistant-prompt" ).value = button.dataset.suggestion === "after-hours" ? "We are a Sydney solar installation business. Answer after-hours calls, capture solar and battery quote enquiries and arrange site-assessment requests." : "Explain our solar installation process and service areas. Pass system sizing, off-grid design and requests for a human to our solar advisers.";
            document.getElementById ( "assistant-prompt" ).focus ();
        } );
    } );

    const assistantForm = document.getElementById ( "assistant-form" );
    if ( assistantForm )
    {
        assistantForm.addEventListener ( "submit", function ( event )
        {
            event.preventDefault ();
            const request = document.getElementById ( "assistant-prompt" ).value.trim ();
            applicationState.assistantResponse = `Business context: ${request}\n\nIntroduce yourself as the virtual assistant for the solar team. Ask for the caller’s name, property suburb and solar or battery enquiry. Offer site-assessment slots only from an approved connected calendar, and confirm only after booking succeeds. Otherwise collect preferred times for staff to confirm. Explain the approved installation process. Hand off-grid design, technical advice, final quotes and requests for a human to the team.`;
            render ();
        } );
    }

    document.querySelectorAll ( "[data-plan]" ).forEach ( function ( button )
    {
        button.addEventListener ( "click", function ()
        {
            const plan = PLANS.find ( function ( item )
            {
                return item.name === button.dataset.plan;
            } );
            showToast ( `${plan.name}: ${money ( plan.monthly )}/month, ${plan.minutes.toLocaleString ( "en-AU" )} minutes. Illustrative only; no plan change or payment.` );
        } );
    } );
}

function handleRoute ()
{
    const route = location.hash.slice ( 1 ).split ( "/" ) [ 0 ];
    applicationState.page = NAVIGATION.some ( function ( item )
    {
        return item.id === route;
    } ) ? route : "overview";
    render ();
}

const informationDialog = document.getElementById ( "information-dialog" );
document.getElementById ( "help-button" ).addEventListener ( "click", function ()
{
    informationDialog.showModal ();
} );
document.getElementById ( "close-dialog" ).addEventListener ( "click", function ()
{
    informationDialog.close ();
} );
document.getElementById ( "dismiss-dialog" ).addEventListener ( "click", function ()
{
    informationDialog.close ();
} );
window.addEventListener ( "hashchange", handleRoute );
handleRoute ();
