# Chemistry PYQs — CBSE Class 12

A premium ed-tech web app for browsing CBSE Class 12 Chemistry Previous Year Questions (2013–2025), chapter-wise with solutions.

## Features

- **1,400+ questions** extracted from 22 board papers and chapter PDFs
- **Chapter-wise navigation** for all 16 CBSE Class 12 Chemistry chapters
- **Show/Hide answers** with smooth animations
- **Bulk reveal** — reveal all answers on a page at once
- **Search** — instant search across questions, answers, and chapter names
- **Filters** — by year, marks, difficulty, question type, and source
- **Bookmarks** — save questions for later (persisted in localStorage)
- **Solved tracker** — mark questions as solved with progress bars
- **Repeated questions** — highlights questions that appear across multiple years
- **Chemical notation** — subscripts, superscripts, reaction arrows, Greek letters
- **MCQ formatting** — multiple-choice options rendered on separate lines
- **Responsive** — works on mobile and desktop

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **Lucide React** — icons

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Data Source

Questions extracted from:
- Chapter-wise Important Questions PDFs (Chapters 1–10 mapped to CBSE syllabus)
- CBSE Board Papers: Solved Papers 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2022 Term I, 2023, 2024, 2025

All data is embedded in `src/data/questions.json` — no backend required.

## Chapter Coverage

| # | Chapter |
|---|---------|
| 1 | The Solid State |
| 2 | Solutions |
| 3 | Electrochemistry |
| 4 | Chemical Kinetics |
| 5 | Surface Chemistry |
| 6 | General Principles and Processes of Isolation of Elements |
| 7 | The p-Block Elements |
| 8 | The d and f Block Elements |
| 9 | Coordination Compounds |
| 10 | Haloalkanes and Haloarenes |
| 11 | Alcohols, Phenols and Ethers |
| 12 | Aldehydes, Ketones and Carboxylic Acids |
| 13 | Amines |
| 14 | Biomolecules |
| 15 | Polymers |
| 16 | Chemistry in Everyday Life |
