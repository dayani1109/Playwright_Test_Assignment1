# Playwright_Test_Assignment1 Project Description, Setup & Test Execution

This project implements an automated testing framework for the SwiftTranslator web application using Playwright. The objective is to evaluate the system through Positive Functional Testing, Negative Functional Testing, UI Testing, and Recorded Test Scenarios in a structured and academic manner aligned with IT3040 – IT Project Management.

All test cases are organized separately for clarity, maintainability, and traceability. Tests created using Playwright Codegen (Recorder) are stored under the Record folder.

⚙️Prerequisites

- Node.js (v18 or later)
- npm
- Playwright
- A modern browser (Chrome / Firefox / Edge)

📦Install Dependencies

--------From the project root directory, run:  -> # npm install
--------If Playwright browsers are not installed: ->  # npx playwright install

▶️ Run Test Suites (Headed Mode)

- Negative Functional Tests       ->     #   npx playwright test tests/negative.spec.js --headed 
- UI Tests                        ->     #   npx playwright test tests/ui.spec.js --headed  
- Positive Functional Tests       ->     #   npx playwright test tests/positive.spec.js --headed 
- Recorded UI Tests               ->     #   npx playwright test tests/Record/uiRecord.spec.js --headed 
- Recorded Positive Tests         ->     #   npx playwright test tests/Record/positiveRecord.spec.js --headed 
- Recorded Negative Tests         ->     #   npx playwright test tests/Record/negativeRecord.spec.js --headed 

🎥 How to Record Tests Using Playwright

To record test actions using Playwright Codegen:
   -> npx playwright codegen https://www.swifttranslator.com/


  - Perform the required actions on the browser
  - Playwright automatically generates test code
  - Save the recorded script inside the tests/Record/ folder
  - Refactor recorded code by adding proper assertions (expect())

📊 View Test Report

After running any test, generate and view the HTML report using:     ->    npx playwright show-report

The report includes:
  - Passed and failed test cases
  - Execution time
  - Error traces
  - Screenshots (if failures occur)

🛠️ Tools & Technologies

- Playwright
- JavaScript (ES6)
- Node.js & npm
- Playwright Codegen
- Visual Studio Code

🎓 Academic Context

Developed for:
  BSc (Hons) in Information Technology
  Year 3 – Semester 1
  IT3040 – IT Project Management

👩‍💻 Author    -    Dayani De Silva
