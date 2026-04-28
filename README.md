# Task Management System

A responsive **Angular 16** application for managing tasks assigned to employees or teams. It includes a searchable task list, reactive add/edit forms, task detail views with mocked activity history, and reusable UI building blocks.

## Features

### Task list (`/tasks`)

- Table columns: **Task title**, **Assigned to**, **Priority** (High / Medium / Low), **Status** (Pending / In Progress / Completed), **Due date**, **Created date**
- **Search** by title (debounced)
- **Filters** by assignee and status
- **Sortable** columns
- **Pagination** (5 tasks per page)
- Summary counts for the current filter set (matching, pending, in progress, completed)
- Row click opens the **task detail** page

### Add / edit task (`/tasks/new`, `/tasks/:id/edit`)

- **Reactive forms** with validation (required title, length limits, required assignee and dates)
- **Cross-field rule:** due date cannot be before start date
- **Error handling** for load failures and simulated save failures
- **Edit** loads existing task data from the in-memory store (with optional `localStorage` persistence)

### Task detail (`/tasks/:id`)

- Full task fields
- **Assignee** profile (name, role, department, email)
- **Activity history** (mocked timeline from the service)

### Architecture highlights

- **Lazy-loaded** `TasksModule` under `/tasks`
- **`TaskExistsGuard`** on detail and edit routes when an `:id` is present
- **`TaskService`** with RxJS streams (`BehaviorSubject` + `shareReplay` for the task list), async-style `Observable` APIs, and optional simulated network errors on save
- **Reusable components:** `app-data-table`, `app-confirm-dialog` (+ service), `app-status-badge`, `app-form-field`

## Tech stack

- [Angular](https://angular.io/) 16
- [RxJS](https://rxjs.dev/) 7
- TypeScript 5.1
- CSS (design tokens, responsive layout)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (bundled with Node)

### Install

```bash
npm install
```

### Development server

```bash
npm start
```

Or:

```bash
npx ng serve
```

Open **http://localhost:4200/** — the app redirects to `/tasks`.

### Production build

```bash
npm run build
```

Output is written to `dist/taskmanagement/`.

### Unit tests

```bash
npm test
```

## Project structure (high level)

```
src/app/
├── app.component.*          # App shell, navigation, global confirm dialog host
├── app-routing.module.ts    # Lazy route to tasks feature
├── core/
│   ├── guards/               # TaskExistsGuard
│   ├── models/               # Task, user, table column types
│   ├── services/             # TaskService (CRUD + mock users/activities)
│   └── validators/           # Due-after-start validator
├── features/tasks/
│   ├── task-list/            # List, filters, sort, pagination
│   ├── task-form/            # Create / edit reactive form
│   ├── tasks-routing.module.ts
│   └── tasks.module.ts
└── shared/
    ├── components/           # Data table, dialog, badge, form field
    ├── services/             # ConfirmDialogService
    └── shared.module.ts
```

## Assignment / submission checklist

Typical coursework deliverables:

1. **GitHub repository** — push this project to a public or private repo as required by your instructor.
2. **README** — this file (overview, how to run, features).
3. **Short screen recording (2–3 minutes)** — walk through: list (search, filter, sort, pagination), create or edit a task (validation + date rule), open detail, optional delete with confirm dialog.

## License

Private / educational use unless you add your own license.
