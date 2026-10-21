# Contributing to Cloudalign Surveyor

Thank you for contributing to **Cloudalign Surveyor**.

Cloudalign Surveyor is a technical site-survey platform for planning, conducting, reviewing and reporting surveys such as Wi-Fi installations, solar installations, UPS installations, generator installations, network infrastructure, CCTV, access control, server rooms and data centres.

This guide explains how Cloudalign team members and approved collaborators should propose, develop, test, document and submit changes to the project.

> By contributing, you agree to protect Cloudalign and customer information, follow the project's standards and submit work for review before it is merged.

---

## Table of Contents

- [Before You Contribute](#before-you-contribute)
- [Ways to Contribute](#ways-to-contribute)
- [Contribution Workflow](#contribution-workflow)
- [Issues](#issues)
- [Branches](#branches)
- [Development Standards](#development-standards)
- [Survey Template Contributions](#survey-template-contributions)
- [Testing](#testing)
- [Commits](#commits)
- [Pull Requests](#pull-requests)
- [Documentation](#documentation)
- [Security and Confidentiality](#security-and-confidentiality)
- [Database and Data Model Changes](#database-and-data-model-changes)
- [Dependencies](#dependencies)
- [User Experience and Accessibility](#user-experience-and-accessibility)
- [Definition of Done](#definition-of-done)
- [Review and Approval](#review-and-approval)
- [Contributor Conduct](#contributor-conduct)
- [Intellectual Property](#intellectual-property)
- [Getting Help](#getting-help)

---

## Before You Contribute

Before starting work:

1. Read the repository `README.md`.
2. Review the open issues and pull requests to avoid duplicating work.
3. Confirm that the proposed work is within the approved project scope.
4. Create or select an issue for the work.
5. Discuss significant product, architecture, security or data-model changes before implementation.
6. Never use confidential customer data or production credentials during development.

Do not begin a major feature solely from an informal request. The expected outcome and acceptance criteria should first be recorded in an issue.

---

## Ways to Contribute

Contributions may include:

- New application features
- Bug fixes
- Survey templates
- Validation rules
- Calculation logic
- Report layouts
- User-interface improvements
- Accessibility improvements
- Automated tests
- Security improvements
- Performance improvements
- Documentation
- Architecture Decision Records
- Data-model improvements
- Development tooling
- Continuous integration workflows

Cloudalign retains control of product direction, priorities, branding and release decisions.

---

## Contribution Workflow

Use the following workflow for all changes:

1. Identify or create an issue.
2. Agree on the scope and acceptance criteria.
3. Assign the issue or indicate that work has started.
4. Create a branch from the repository's default branch.
5. Implement a focused change.
6. Add or update tests.
7. Test the change locally.
8. Update related documentation.
9. Review the change for security and privacy risks.
10. Commit the work using clear commit messages.
11. Push the branch to the repository.
12. Open a pull request.
13. Respond to review comments.
14. Obtain the required approval.
15. Merge only after required checks pass.
16. Delete the branch after the pull request is merged.

Small, focused pull requests are preferred over large pull requests containing unrelated changes.

---

## Issues

Every material contribution should relate to an issue.

### A good issue should include

- A clear title
- The problem being solved
- The affected user or role
- The expected outcome
- Acceptance criteria
- Relevant survey type
- Screenshots or examples, where useful
- Dependencies
- Security or privacy implications
- Known constraints

### Example feature issue

```markdown
Title: Add battery runtime fields to the UPS survey

Problem:
The current UPS survey does not capture the required backup runtime or battery autonomy assumptions.

User:
Surveyor and reviewing engineer

Expected outcome:
The surveyor can record the required runtime, existing battery information and relevant load assumptions.

Acceptance criteria:
- Required runtime can be entered in minutes or hours.
- Existing battery quantity, voltage and capacity can be recorded.
- Invalid negative values are rejected.
- The values appear in the survey review page.
- The values appear in the generated survey report.
- Automated tests cover the validation rules.
```

### Bug reports

A bug report should include:

- Steps to reproduce the problem
- Expected behaviour
- Actual behaviour
- Application version or commit
- Browser or device information
- Relevant logs with secrets and customer data removed
- Screenshots with confidential information removed
- Frequency of the problem

Do not disclose suspected security vulnerabilities in a public issue. Follow the repository's `SECURITY.md` process.

---

## Branches

Create branches from the current default branch.

Use the following naming convention:

```text
feature/short-description
fix/short-description
docs/short-description
refactor/short-description
test/short-description
security/short-description
chore/short-description
```

Examples:

```text
feature/ups-load-assessment
feature/solar-roof-photo-capture
fix/survey-draft-validation
docs/update-contribution-guide
security/restrict-file-uploads
refactor/survey-response-service
```

Branch names should:

- Use lowercase letters
- Use hyphens between words
- Be short but descriptive
- Describe one main change
- Avoid personal names

Do not commit directly to the protected default branch.

---

## Development Standards

Contributors should follow the standards established for the selected technology stack.

At a minimum:

- Use the repository's formatter and linting configuration.
- Follow existing naming and folder conventions.
- Keep functions and components focused.
- Avoid unnecessary duplication.
- Validate all untrusted input.
- Handle expected errors clearly.
- Do not hide failures or silently discard data.
- Keep business rules separate from presentation logic where practical.
- Use configuration rather than hard-coded customer or site values.
- Add explanatory comments only where the reason for the implementation is not obvious.
- Do not leave commented-out code in submitted changes.
- Remove development-only logging before requesting review.
- Preserve backward compatibility unless a breaking change has been approved.

### Domain terminology

Use consistent names throughout the code and documentation:

- Customer
- Project
- Site
- Survey Request
- Survey
- Survey Template
- Survey Section
- Survey Question
- Survey Response
- Measurement
- Asset
- Photograph
- Attachment
- Finding
- Risk
- Recommendation
- Installation Requirement
- Bill of Materials
- Review
- Approval
- Report
- Audit Log

If a new domain term is required, define it in the relevant documentation and use it consistently.

### Measurements and units

- Store a measurement value and its unit separately where practical.
- Do not assume a unit when ambiguity could affect technical decisions.
- Validate numeric ranges.
- Preserve the original entered value where conversion is performed.
- Document calculation formulas and rounding rules.
- Add tests for boundary values and unit conversions.

### Dates and time

- Store timestamps using an agreed standard such as UTC.
- Display dates and times in the user's applicable timezone.
- Do not rely on a device clock for security-sensitive decisions without validation.

---

## Survey Template Contributions

Survey templates are core product assets and require technical review.

A new or changed survey template should include:

- Template name
- Survey purpose
- Intended service area
- Intended user
- Template sections
- Questions and instructions
- Response type for each question
- Required and optional fields
- Measurement units
- Conditional logic
- Validation rules
- Required evidence
- Calculation rules
- Review requirements
- Report-mapping requirements
- Template version

### Survey question guidance

Questions should be:

- Clear and technically precise
- Focused on one item at a time
- Appropriate for field use
- Consistent with the required design or installation decision
- Free from unnecessary jargon
- Explicit about required units

Avoid vague questions such as:

```text
Is the site suitable?
```

Prefer structured questions such as:

```text
Is a protected indoor location available for the UPS?

If yes:
- Record the available width, depth and height.
- Record the ambient temperature.
- Attach at least one photograph.

If no:
- Record the installation constraint.
- Add a recommendation.
```

### Template versioning

- Published templates should be versioned.
- Completed surveys must remain linked to the template version used.
- Changes to a template must not silently alter completed surveys.
- Breaking template changes require review and migration planning.
- The reason for each material template change should be documented.

### Technical calculations

Calculations such as UPS sizing, battery autonomy, solar capacity or network equipment quantities must:

- State input assumptions
- State the formula or method used
- Validate missing and invalid inputs
- Include unit handling
- Include boundary tests
- Produce an explainable result
- Remain subject to qualified technical review

Automatically generated recommendations must not be presented as final engineering approval.

---

## Testing

All contributions should be tested at the appropriate level.

Depending on the change, testing may include:

- Unit tests
- Integration tests
- API tests
- Component tests
- End-to-end tests
- Permission tests
- Validation tests
- Report-generation tests
- Mobile-responsive tests
- Accessibility tests
- Security tests
- User acceptance testing

### Minimum testing expectations

A feature should test:

- The expected successful workflow
- Required-field validation
- Invalid values
- Boundary values
- Permission restrictions
- Error handling
- Data persistence
- Relevant report output

A bug fix should include a regression test where practical.

### Survey-specific testing

For survey features, test that:

- Draft responses can be saved.
- Required questions prevent premature submission.
- Conditional questions appear correctly.
- Measurements retain the correct units.
- Photographs remain associated with the correct question, asset or finding.
- Review comments remain traceable.
- Approved surveys cannot be changed through ordinary editing.
- Report output matches approved survey information.

Do not request review while known relevant tests are failing.

---

## Commits

Use clear, focused and action-oriented commit messages.

Recommended format:

```text
<type>: <short description>
```

Suggested types:

```text
feat
fix
docs
test
refactor
security
chore
```

Examples:

```text
feat: add UPS load assessment section
fix: preserve units when saving measurements
docs: add solar survey template guidance
test: cover survey approval permissions
security: restrict executable file uploads
refactor: simplify survey response validation
```

Commit messages should describe what the commit changes, not merely that work was performed.

Avoid messages such as:

```text
update
changes
fix stuff
work in progress
```

Use work-in-progress commits only on personal branches and clean up the history before final merge where the repository's merge policy permits it.

---

## Pull Requests

A pull request should be ready for review, focused and understandable without requiring reviewers to reconstruct the contributor's intent.

### Pull request title

Use a clear title, for example:

```text
Add UPS installation survey template
Fix photograph association in survey reports
Improve validation for solar roof dimensions
```

### Pull request description

Use the following template:

```markdown
## Summary

Briefly describe the change.

## Related Issue

Closes #<issue-number>

## Reason for the Change

Explain the user or business problem addressed.

## Changes Made

- Change one
- Change two
- Change three

## Testing Completed

Describe the tests performed and their results.

## Screenshots

Add screenshots for user-interface changes. Remove confidential information.

## Security and Privacy

Describe any effect on authentication, permissions, files, photographs, customer data, logs or exports.

## Database or Configuration Changes

List migrations, environment variables or deployment changes.

## Documentation

List the documentation added or updated.

## Known Limitations

List any known limitation or follow-up issue.

## Checklist

- [ ] The change is linked to an approved issue.
- [ ] Acceptance criteria are satisfied.
- [ ] Tests have been added or updated.
- [ ] Relevant tests pass.
- [ ] Formatting and linting checks pass.
- [ ] Documentation has been updated.
- [ ] No credentials or confidential data are included.
- [ ] Security and privacy implications were reviewed.
- [ ] User-interface changes were checked on supported screen sizes.
```

### Pull request scope

A pull request should normally address one issue or one closely related group of changes.

Separate unrelated:

- Features
- Refactoring
- Dependency upgrades
- Formatting changes
- Database changes

A large pull request may be returned for separation before detailed review.

### Draft pull requests

Use a draft pull request when early feedback is needed. Clearly state what remains incomplete. A draft pull request must not be merged.

---

## Documentation

Update documentation whenever a change affects:

- User workflows
- Survey questions
- Validation rules
- Calculations
- Permissions
- APIs
- Configuration
- Database structure
- Architecture
- Deployment
- Security controls
- Reports

Significant technical decisions should be recorded as Architecture Decision Records in the agreed documentation location.

A decision record should explain:

- Context
- Decision
- Alternatives considered
- Consequences
- Status

Documentation should be changed in the same pull request as the related code whenever practical.

---

## Security and Confidentiality

Cloudalign Surveyor may process sensitive customer and infrastructure information. Security is therefore part of every contribution.

### Never commit

- Passwords
- API keys
- Access tokens
- Private keys or certificates
- Connection strings containing secrets
- Production environment files
- Production database exports
- Customer network configurations
- Customer electrical diagrams
- Confidential site layouts
- Unapproved site photographs
- Personal information
- Real customer survey records used as test fixtures

### Secrets

- Use the project's approved secret-management method.
- Provide safe placeholder values in example configuration files.
- Never print secrets in logs or error messages.
- Revoke and report any secret accidentally committed.

### Test data

Use synthetic or approved anonymised data. Test data must not reproduce confidential customer information.

### File uploads

Changes involving photographs or documents should consider:

- Allowed file types
- File-size limits
- Filename handling
- Malware scanning
- Storage permissions
- Download authorisation
- Retention
- Metadata exposure
- Audit logging

### Permissions

Features must enforce authorisation on the server side. Hiding an action in the user interface is not an access-control mechanism.

Test that users cannot access projects, sites, surveys, photographs or reports outside their authorised scope.

### Vulnerabilities

Do not report suspected vulnerabilities through public issues, discussions or pull-request comments. Follow `SECURITY.md` or contact the designated Cloudalign security contact privately.

---

## Database and Data Model Changes

Database changes require careful review because survey records must remain accurate and traceable.

A database change should include:

- A migration
- A rollback or recovery approach where supported
- Updated schema documentation
- Test coverage
- Data migration logic where required
- An assessment of existing-record impact
- An assessment of reporting impact

Do not:

- Edit an already-applied shared migration without approval.
- Delete production data through an ordinary feature migration without an approved plan.
- Rename or remove fields without considering existing surveys and reports.
- change survey history in a way that weakens the audit trail.

Use stable identifiers for records and preserve links between surveys, responses, evidence, findings, approvals and reports.

---

## Dependencies

Before adding or upgrading a dependency:

1. Confirm that the dependency is necessary.
2. Review its licence.
3. Review its maintenance status.
4. Review known security issues.
5. Consider package size and performance impact.
6. Consider whether the same capability already exists in the project.
7. Document material architecture implications.

Avoid adding a large dependency for a small convenience function.

Dependency upgrades should be separated from unrelated feature work unless the dependency change is essential to the feature.

---

## User Experience and Accessibility

Cloudalign Surveyor is intended for use in the field, often on mobile devices.

User-interface contributions should:

- Work on supported phone, tablet and desktop sizes.
- Use clear labels and instructions.
- Show measurement units beside relevant fields.
- Provide useful validation messages.
- Avoid requiring excessive field typing.
- Preserve draft data when an expected recoverable error occurs.
- Make required fields clear.
- Support keyboard navigation where applicable.
- Use accessible form labels.
- Maintain sufficient colour contrast.
- Avoid using colour as the only status indicator.
- Provide alternative text or descriptions for meaningful images where appropriate.
- Make destructive actions explicit and confirm them where appropriate.

Test workflows under realistic field conditions, including small screens and intermittent connectivity where the feature supports offline behaviour.

---

## Definition of Done

A contribution is complete when:

- The work addresses an approved issue.
- Acceptance criteria are satisfied.
- The implementation follows project conventions.
- Relevant tests have been added or updated.
- Required tests pass.
- Formatting and linting checks pass.
- Validation and error handling are included.
- Permission boundaries have been tested where applicable.
- Security and privacy implications have been reviewed.
- Documentation has been updated.
- Database migrations and configuration changes are documented.
- No credentials or confidential information are present.
- User-interface changes work on supported screen sizes.
- Report output has been checked where affected.
- Review comments have been addressed.
- The required reviewer has approved the pull request.

---

## Review and Approval

At least one authorised reviewer should approve a pull request before it is merged. Additional specialist review may be required.

### Examples of specialist review

- Survey content: Cloudalign subject-matter expert
- Electrical, solar, UPS or generator calculations: qualified technical reviewer
- Wi-Fi or network logic: network specialist
- Security controls: security reviewer
- Data-model changes: architecture or backend reviewer
- User-interface changes: product or user-experience reviewer
- Legal, privacy or licensing matters: authorised governance or legal reviewer

Contributors must not approve their own pull requests as the only approval.

Reviewers should check:

- Alignment with requirements
- Technical correctness
- Maintainability
- Test coverage
- Security
- Privacy
- Data integrity
- User experience
- Documentation
- Backward compatibility

Approval means the reviewer considers the contribution suitable to merge. It does not replace required release or production approval.

---

## Contributor Conduct

Contributors should:

- Communicate professionally and respectfully.
- Focus feedback on the work rather than the individual.
- Give clear and actionable review comments.
- Respond constructively to feedback.
- Respect different levels of experience.
- Avoid discriminatory, abusive, threatening or harassing conduct.
- Protect Cloudalign and customer information.
- Disclose material conflicts of interest.

Maintainers may restrict participation where conduct threatens the project, contributors, customers or Cloudalign.

---

## Intellectual Property

Unless Cloudalign formally states otherwise, the repository and its contents are proprietary and confidential to Cloudalign.

Contributors must:

- Submit only work they are authorised to contribute.
- Respect third-party licences and intellectual property.
- Avoid copying code, templates, diagrams or content without appropriate rights.
- Identify third-party code and its licence.
- Follow any contributor or contractor agreement applicable to their work.

Submitting a contribution does not automatically make the project open source.

---

## Getting Help

If guidance is required:

1. Review the `README.md` and project documentation.
2. Search existing issues and discussions.
3. Comment on the relevant issue.
4. Contact the assigned maintainer or project owner through the approved Cloudalign communication channel.

Do not share credentials, security vulnerabilities or confidential customer information in public discussions.

---

## Final Checklist for Contributors

Before requesting review, confirm:

- [ ] The issue and acceptance criteria are clear.
- [ ] The branch contains one focused contribution.
- [ ] The code follows project conventions.
- [ ] The feature works as intended.
- [ ] Relevant tests pass.
- [ ] Survey calculations and units are verified.
- [ ] Permissions are enforced on the server side.
- [ ] Documentation is current.
- [ ] Screenshots contain no confidential data.
- [ ] No secrets or customer data are committed.
- [ ] Security and privacy implications are documented.
- [ ] The pull request description is complete.

Thank you for helping build Cloudalign Surveyor into a secure, reliable and practical platform for Cloudalign's technical site surveys.
