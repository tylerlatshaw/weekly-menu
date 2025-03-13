# Weekly Menu Creator

## Technology Used

### Backend:

<a href="https://www.npmjs.com/package/next" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Ftylerlatshaw%2Fweekly-menu%2Fraw%2Fmain%2Fpackage.json&query=%24.dependencies.next&logo=npm&label=NextJS&color=red&style=for-the-badge" alt="Next Badge">
</a>
<a href="https://www.npmjs.com/package/typescript" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Ftylerlatshaw%2Fweekly-menu%2Fraw%2Fmain%2Fpackage.json&query=%24.devDependencies.typescript&logo=typescript&logoColor=blue&label=TypeScript&color=blue&style=for-the-badge" alt="TypeScript Badge">
</a>

### Design:

<a href="https://www.npmjs.com/package/tailwindcss" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Ftylerlatshaw%2Fweekly-menu%2Fraw%2Fmain%2Fpackage.json&query=%24.devDependencies.tailwindcss&logo=tailwindcss&label=Tailwind&style=for-the-badge" alt="Tailwind Badge">
</a>
<a href="https://www.npmjs.com/package/@mui/icons-material" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Ftylerlatshaw%2Fweekly-menu%2Fraw%2Fmain%2Fpackage.json&query=%24.dependencies%5B%22%40mui%2Ficons-material%22%5D&logo=mui&label=Material%20Icons&color=blue&style=for-the-badge" alt="Material Icons Badge">
</a>

### Interactivity: 

<a href="https://www.npmjs.com/package/react-hook-form" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Ftylerlatshaw%2Fweekly-menu%2Fraw%2Fmain%2Fpackage.json&query=%24.dependencies%5B%22react-hook-form%22%5D&logo=react-hook-form&logoColor=F9C7EF&label=React%20Hook%20Form&color=EC598F&style=for-the-badge" alt="React Hook Form Badge">
</a>
<a href="https://www.npmjs.com/package/@react-pdf/renderer" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Ftylerlatshaw%2Fweekly-menu%2Fraw%2Fmain%2Fpackage.json&query=%24.dependencies%5B%22%40react-pdf%2Frenderer%22%5D&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMzY4LjAwMDAwMHB0IiBoZWlnaHQ9IjMzMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDM2OC4wMDAwMDAgMzMwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMzMwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTI1NDUgMzI5MiBjLTE2OSAtMTcgLTQ1OSAtMTIzIC02MjggLTIyOSAtMzUgLTIyIC00MSAtMjMgLTU1IC0xMAotMzQgMzAgLTMwMCAxNTcgLTM5MCAxODYgLTE4NiA2MSAtMzQ4IDY3IC00NTUgMTggLTE3NyAtODEgLTI4OCAtMzE4IC0zMTIKLTY2NyAtNCAtNTIgLTggLTExMyAtMTAgLTEzNSAtMiAtMzkgLTUgLTQxIC04MSAtODMgLTQxMSAtMjI3IC02MzYgLTQ5NyAtNjAxCi03MjUgMjkgLTE5NCAyMjMgLTQwNiA1NTQgLTYwOCBsNzMgLTQ0IDAgLTExNSBjMSAtNDQ1IDEwOSAtNzQ1IDMwMiAtODM4IDE2NQotODEgMzk4IC00MSA3MzYgMTI1IGwxNTIgNzUgOTggLTU1IGMyMzUgLTEzMyA0NjMgLTE5OCA2MTggLTE3NiAyNTUgMzYgMzk2CjI3NyA0MzQgNzM3IDQgNTcgMTAgMTA1IDEyIDEwNiAxIDEgNjIgMzUgMTMzIDc2IDE2MSA5MCAyNTYgMTYxIDM2MSAyNjUgMTE5CjExOSAxNzQgMjE0IDE4OCAzMjcgMTIgOTEgLTQwIDIzNiAtMTIxIDMzOCAtODEgMTAxIC0yNTAgMjQ0IC00MDcgMzQzIGwtNjcKNDIgLTMgMjI1IGMtMyAxODMgLTggMjQ1IC0yNiAzMzAgLTU2IDI3MSAtMTU5IDQyMCAtMzI1IDQ3MyAtNTIgMTYgLTEyOSAyNAotMTgwIDE5eiBtLTMzMCAtODk0IGMyMDQgLTIxNiA0NzUgLTU3MSA0NzUgLTYyMyAwIC0yNSAtODIgLTI3MCAtMTM1IC00MDUKLTQ0IC0xMTIgLTE2MiAtMzU2IC0yMDMgLTQyMCAtMjYgLTQxIC0zNCAtNDYgLTg4IC01OCAtMjA5IC00NiAtNDM2IC04MCAtNTg5Ci04OSBsLTExMCAtNSAtOTIgOTMgYy01MCA1MiAtMTA4IDExNCAtMTI4IDEzOSAtMjAgMjUgLTQyIDUwIC00OSA1NSAtMTMgMTEKLTk5IDExOCAtMTg0IDIzMCAtMjEgMjggLTU3IDgxIC04MCAxMTggbC00MyA2OCAyNiA4NyBjNzAgMjMyIDE0OCA0MzggMjMwCjYwNyA4MSAxNjcgODUgMTcxIDE0NyAxODQgMjkgNyA4MCAxOSAxMTMgMjcgNjUgMTUgMjE2IDQyIDI4MCA1MCAyMiAzIDQ2IDcKNTIgOSA3IDIgNjEgNyAxMjAgMTEgNjAgMyAxMTAgOCAxMTIgMTAgMiAyIDE3IDQgMzIgNCAyMSAwIDQ2IC0yMCAxMTQgLTkyeiIvPgo8cGF0aCBkPSJNMTcxMiAxOTUzIGMtNTYgLTIwIC0xNDcgLTEwNCAtMTgwIC0xNjcgLTI0IC00NSAtMjcgLTYyIC0yNyAtMTQ2IDAKLTExNyAyMCAtMTY2IDk3IC0yNDQgNzMgLTczIDE0NCAtOTkgMjUzIC05NCAxMjkgNSAyMzAgNzEgMjg2IDE4NSAzMyA2NiAzOQoxOTEgMTMgMjY1IC0yNiA3MyAtMTI5IDE3OCAtMTk4IDIwMSAtNjIgMjEgLTE4NSAyMSAtMjQ0IDB6Ii8+CjwvZz4KPC9zdmc+Cg==&logoColor=red&label=React PDF Renderer&color=darkred&style=for-the-badge" alt="React PDF Badge">
</a>

<hr />

&copy; 2025 Tyler J. Latshaw. All rights reserved.