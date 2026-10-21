# Cloudalign Surveyor

> Technical site surveys, digitized.

Cloudalign Surveyor is a digital site assessment platform being developed to standardize how Cloudalign conducts technical surveys, site assessments, inspections, and design readiness evaluations.

The platform will enable surveyors, engineers, project managers, and approved collaborators to collect accurate site information, capture evidence, identify risks, and generate professional survey reports that support solution design, costing, and project delivery.

---

# Vision

To provide Cloudalign with a single platform for conducting, managing, reviewing, and reporting technical site surveys across all Cloudalign service offerings.

Cloudalign Surveyor will become the starting point for every Cloudalign project.

```text
Opportunity
    ↓
Site Survey
    ↓
Assessment Report
    ↓
Solution Design
    ↓
Bill of Materials
    ↓
Proposal
    ↓
Project Delivery
```

---

# Primary Use Cases

The platform should support surveys such as:

- Wi-Fi Installation Surveys
- Solar Installation Surveys
- UPS Installation Surveys
- Generator Installation Surveys
- Network Infrastructure Surveys
- CCTV Surveys
- Access Control Surveys
- Server Room Surveys
- Data Centre Assessments
- Building Management System (BMS) Surveys
- Telecom Site Surveys
- Energy-as-a-Service Assessments
- Preventive Maintenance Inspections
- Asset Condition Assessments

---

# Objectives

Cloudalign Surveyor should:

- Standardize survey methodologies
- Improve data quality and completeness
- Eliminate paper-based surveys
- Improve collaboration between teams
- Reduce repeated site visits
- Improve solution design accuracy
- Enable faster proposal generation
- Maintain historical survey records
- Capture structured technical information
- Generate professional survey reports

---

# Core Features

## Customer Management

- Customer records
- Customer contacts
- Customer sites
- Project history

## Project Management

- Projects and opportunities
- Survey requests
- Survey assignments
- Survey scheduling
- Survey status tracking

## Site Management

- Site registration
- GPS coordinates
- Site contacts
- Site photographs
- Site access requirements
- Survey history

## Survey Templates

Configurable templates for different survey types:

- Solar
- UPS
- Wi-Fi
- Generator
- CCTV
- Access Control
- Network Infrastructure
- Server Room
- Data Centre

## Data Collection

Support for:

- Text responses
- Numeric measurements
- Multiple-choice questions
- Checklists
- GPS locations
- Photographs
- File attachments
- Asset records
- Signatures

## Asset Capture

Record:

- Manufacturer
- Model
- Serial Number
- Capacity
- Ratings
- Condition
- Status
- Photographs

## Findings & Recommendations

Capture:

- Site constraints
- Risks
- Defects
- Recommendations
- Severity ratings
- Required actions

## Reporting

Generate professional reports containing:

- Customer details
- Site details
- Survey results
- Measurements
- Asset inventories
- Photographs
- Findings
- Recommendations
- Installation requirements

---

# Example Survey Workflows

## Wi-Fi Survey

Capture:

- Floor plans
- Building dimensions
- User counts
- Existing network infrastructure
- Coverage requirements
- Mounting locations
- Power availability
- Cable routes

Output:

- Access point recommendations
- Installation requirements
- Coverage considerations

## Solar Survey

Capture:

- Energy consumption
- Roof dimensions
- Roof orientation
- Roof condition
- Shading information
- Electrical infrastructure
- Backup requirements

Output:

- Preliminary system sizing
- Equipment recommendations
- Installation constraints

## UPS Survey

Capture:

- Connected loads
- Runtime requirements
- Existing electrical infrastructure
- Distribution boards
- Environmental conditions

Output:

- UPS sizing recommendation
- Battery sizing recommendation
- Installation requirements

---

# User Roles

| Role | Responsibility |
|--------|----------------|
| Administrator | System management |
| Project Manager | Survey planning and coordination |
| Surveyor | Conduct surveys and collect data |
| Engineer | Technical review |
| Reviewer | Quality review |
| Approver | Final approval |
| Collaborator | Specialist contributions |

---

# Survey Lifecycle

```text
Draft
    ↓
Requested
    ↓
Assigned
    ↓
Scheduled
    ↓
In Progress
    ↓
Submitted for Review
    ↓
Returned for Correction
    ↓
Approved
    ↓
Report Issued
    ↓
Closed
```

---

# MVP Scope

The first release should include:

- User authentication
- Customer management
- Site management
- Project management
- Survey templates
- Survey assignment
- Mobile-responsive forms
- Photo uploads
- Asset capture
- Findings and recommendations
- Review workflow
- Approval workflow
- PDF report generation

---

# Suggested Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- ASP.NET Core
- Node.js
- PostgreSQL

### Authentication

- Microsoft Entra ID
- OAuth 2.0

### Storage

- Azure Blob Storage

### Reporting

- PDF Generation
- Microsoft Word Export

### Hosting

- Microsoft Azure

---

# Future Enhancements

- Offline mobile capability
- QR code scanning
- Barcode scanning
- Asset tagging
- AI-assisted report writing
- Automated recommendations
- Automated bill of materials generation
- Microsoft 365 integration
- Power BI dashboards
- GIS mapping
- Asset lifecycle management
- Maintenance management
- Work order generation

---

# Development Principles

## Mobile First

The platform should be optimized for field work.

## Configuration Over Hard-Coding

Survey templates and workflows should be configurable.

## Security By Design

Security must be considered from the start.

## Evidence Based

Recommendations should be supported by survey evidence.

## Reusable Data

Survey information should be reusable across future projects.

## Human Review

Technical recommendations must remain subject to engineering review.

---

# Repository Structure

```text
cloudalign-surveyor/
│
├── docs/
├── frontend/
├── backend/
├── mobile/
├── database/
├── tests/
├── .github/
│
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

---

# Getting Started

The initial focus is to:

1. Define survey requirements.
2. Create the first survey template.
3. Design the data model.
4. Build the survey engine.
5. Develop customer and site management.
6. Implement reporting.
7. Deliver the first end-to-end survey workflow.

---

# Contributing

Contributions are welcome from Cloudalign team members and approved collaborators.

Before contributing:

1. Review the project documentation.
2. Select or create an issue.
3. Create a feature branch.
4. Submit a pull request.
5. Obtain review approval before merging.

---

# Product Principles

Cloudalign Surveyor is built on six principles:

1. Standardize
2. Simplify
3. Capture
4. Verify
5. Report
6. Improve

---

# Closing Statement

Cloudalign Surveyor is intended to become the digital front door for Cloudalign projects by transforming site surveys from a manual process into a structured, repeatable, and data-driven workflow that supports design, delivery, operations, and long-term asset management.
