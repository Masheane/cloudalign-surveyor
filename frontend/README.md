# Cloudalign Surveyor Platform

## 🔑 Testing Credentials & Role-Based Routing

The platform features automated role-based routing from the sign-in portal:

### A. Team Lead Portal (Operations & Assignments)
* **Email to use**: `tsepo.masita@cloudalign.co.ls` (or any email containing `lead`, `manager`, `admin`)
* **Password**: Any dummy password (e.g., `123456`)
* **Route**: Redirects to `/dashboard`
* **Features**: Oversees project pipelines, assigns tasks to engineers, tracks site reports.

### B. Field Engineer Portal (On-Site Execution)
* **Email to use**: `letjamela@cloudalign.co.ls` (or any standard engineer email)
* **Password**: Any dummy password (e.g., `123456`)
* **Route**: Redirects to `/engineer/dashboard`
* **Features**: View assigned site visits, launch mobile-first technical checklists, and capture on-site survey data.

---

## 🛠️ Project Directory Structure

```text
cloudalign-surveyor/
├── frontend/
│   └── src/
│       ├── app/
│       │   ├── page.tsx               # Login & Role-Based Routing Portal
│       │   ├── dashboard/             # Team Lead Operations Dashboard
│       │   │   └── page.tsx
│       │   └── engineer/
│       │       └── dashboard/         # Field Engineer Workspace
│       │           └── page.tsx
│       └── components/
│           ├── Navbar.tsx             # Shared Navigation Header
│           └── SurveyChecklistModal.tsx # Mobile-First Technical Survey Form
└── docs/
    └── ARCHITECTURE.md