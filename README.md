# Dialex

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-663399?style=flat&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-0078D4?style=flat)

Dialex is a working product name for a proposed AI voice-agent service for Australian solar installation businesses. This repository contains a local customer-workspace prototype and a partner presentation covering the offer, illustrative pricing, customer break-even and early revenue scenarios.

## Explore the prototype

[Open the hosted Dialex prototype](https://rohingosling.github.io/dialex-mvp-1/) in any modern browser. No installation or sign-in is required.

Open [index.html](docs/presentations/dialex-prototype/index.html) in a browser after cloning or downloading the repository. On Windows, double-click **Open Dialex.cmd** in the same folder. The prototype works locally without installation or an internet connection.

The workspace includes:

- An overview of solar quote enquiries, site visits and agent status.
- Editable agent configuration, guided setup and a simulated conversation.
- Searchable solar call history: quotes, visits, callbacks, human handoff, installation questions and off-grid enquiries.
- Proposed subscription plans and sample usage in AUD.

To serve it at a local web address with Node.js installed:

```powershell
node docs/presentations/dialex-prototype/server.mjs
```

Then open [Dialex on this computer](http://127.0.0.1:4173). The optional `DIALEX_PORT` environment variable selects another port. The server listens only on the loopback interface.

## Presentation and files

| File | Contents |
|---|---|
| [Partner briefing](docs/presentations/output/Dialex-Partner-Briefing-Solar.pptx) | 11 editable solar-focused PowerPoint slides with prototype screenshots |
| [Commercial assumptions](docs/presentations/output/Dialex-Commercial-Assumptions.md) | Pricing inputs, delivery costs and scenario calculations |
| [Portable prototype](docs/presentations/output/Dialex-Local-Prototype.zip) | Extract and open `index.html` locally |
| [Screenshots](docs/presentations/output/screenshots/) | Interface images for presentations and discussion |
| [Prototype instructions](docs/presentations/dialex-prototype/START-HERE.md) | Demo flow and local launch details |

## Scope

All businesses, people and activity are fictional. Calls, AI assistance, voice tests and calendar bookings are simulated; the prototype does not authenticate, access a microphone, make calls, send messages or collect payments. Changes remain in the current tab until reload.

The initial proposed service handles solar and battery enquiries, quote qualification, site-visit requests and human handoff. Direct booking requires a connected calendar and confirmation from the scheduling system. Booking records in this prototype are fictional. Support and outbound agents are later concepts. All financial figures are illustrative AUD amounts excluding GST, not approved prices or supplier quotes.
