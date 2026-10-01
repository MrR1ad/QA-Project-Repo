TITLE: Application is saved even when the user sees an error, causing duplicate applications

ENVIRONMENT: Windows 11, Chrome, backend (localhost:3000) and frontend (localhost:8080) running locally

PRECONDITIONS:
- User studentuser@middlebury.edu is logged in
- Email sending is failing (backend shows "Transporter Error: Invalid login")

STEPS TO REPRODUCE:
1. Open http://localhost:8080 and log in
2. Open opportunity #1
3. Click "Apply Now"
4. Click "Submit" in the application form
5. Repeat steps 3–4

EXPECTED RESULT:
What the user sees matches what is saved: either the application is saved and a
success message is shown, or nothing is saved and an error is shown.

ACTUAL RESULT:
- The user sees a red error message after each submission
- applicationsData.json contains 2 new applications (user s-1, opportunity 1)

SEVERITY / PRIORITY: High / High
Why: Users are told their application failed when it was actually saved, so they
retry and create duplicates. Recruiters receive repeated applications, and
users can't trust the result they see. This affects every application while
email sending is down.

EVIDENCE:
- Backend log: "Application saved successfully" is followed by
  "Error handling application: Invalid login" (happened twice)
- applicationsData.json: entries 1790858593868 and 1790858607807
- Screenshot: test-results/.../test-failed-1.png (red error box)