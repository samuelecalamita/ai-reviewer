# Dependency Rules

## D001
### Title
Avoid unnecessary new dependencies

### Why
Each new dependency adds maintenance, security, and bundle-size cost.

### Detect
Newly added dependency without clear necessity, especially when equivalent capability already exists in the project or platform APIs.

### Severity
`warning`

### False Positive Guard
Do not report when the PR includes explicit rationale and no reasonable in-project alternative exists.

### Suggested Fix
Use existing dependencies/internal utilities when possible, or add a short technical rationale for the new package.

### Examples
`bad`: adding a utility package for behavior already available in current stack.
`good`: reusing existing utility or documenting clear necessity for the new package.

## D002
### Title
Use dependencies according to project standards

### Why
Misused libraries create inconsistent patterns and harder maintenance.

### Detect
Dependency usage that conflicts with intended library patterns or duplicates established project-standard solutions.

### Severity
`warning`

### False Positive Guard
Do not report when a migration plan or explicit architectural exception is present.

### Suggested Fix
Align usage with project-approved patterns for that dependency.

### Examples
`bad`: introducing a second pattern where one standard already exists.
`good`: following the existing dependency usage pattern in the repo.

