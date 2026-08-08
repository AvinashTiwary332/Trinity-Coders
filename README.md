# CodeZ

CodeZ is a responsive AI-powered programming learning platform for BTech students and beginners. It includes structured lessons for C, C++, Python, Java, and MySQL, a simulated coding playground, AI tutor, quiz flow, XP/levels, achievements, daily missions, profile editing, premium settings, and an editable local leaderboard.

## Run locally

```bash
python server.py
```

Then open:

```text
http://127.0.0.1:8000
```

If port `8000` is already busy, run with another port:

```bash
PORT=8001 python server.py
```

PowerShell:

```powershell
$env:PORT = "8001"
python server.py
```

The app is offline-first. User profile, theme, XP, progress, quizzes, missions, achievements, playground code, and leaderboard are stored in browser localStorage.

## Backend and database

`server.py` provides a small Python backend scaffold with health and progress endpoints.

`schema.sql` contains a MySQL schema for users, lessons, quiz scores, achievements, and leaderboard data.
