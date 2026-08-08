const STORAGE_KEY = "studybuddy_state_v1";
const views = [
  ["dashboard", "Dashboard", "DB"],
  ["learn", "Learn", "LN"],
  ["playground", "Playground", "PG"],
  ["ai", "AI Tutor", "AI"],
  ["missions", "Daily Mission", "DM"],
  ["achievements", "Achievements", "AC"],
  ["leaderboard", "Leaderboard", "LB"],
  ["profile", "Profile", "PF"],
  ["settings", "Settings", "ST"]
];

const languages = {
  c: {
    name: "C Programming",
    short: "C",
    sample: `#include <stdio.h>\n\nint main() {\n    int age = 18;\n    printf("Age: %d\\n", age);\n    return 0;\n}`,
    topics: ["Introduction", "Variables", "Data Types", "Operators", "Input Output", "Conditional Statements", "Loops", "Arrays", "Functions", "Strings", "Pointers", "Structures"]
  },
  cpp: {
    name: "C++",
    short: "C++",
    sample: `#include <iostream>\nusing namespace std;\n\nint main() {\n    string name = "CodeZ";\n    cout << "Hello " << name << endl;\n    return 0;\n}`,
    topics: ["Introduction", "Variables", "Data Types", "Operators", "Input Output", "Decision Making", "Loops", "Arrays", "Functions", "Classes and Objects", "Inheritance", "STL Basics"]
  },
  python: {
    name: "Python",
    short: "Py",
    sample: `name = "CodeZ"\nfor i in range(3):\n    print(f"{i + 1}. Hello {name}")`,
    topics: ["Introduction", "Variables", "Data Types", "Operators", "Input Output", "Conditionals", "Loops", "Lists", "Functions", "Strings", "Dictionaries", "File Handling"]
  },
  java: {
    name: "Java",
    short: "Java",
    sample: `public class Main {\n    public static void main(String[] args) {\n        int marks = 85;\n        System.out.println("Marks: " + marks);\n    }\n}`,
    topics: ["Introduction", "Variables", "Data Types", "Operators", "Input Output", "If Else", "Loops", "Arrays", "Methods", "Classes and Objects", "Inheritance", "Exception Handling"]
  },
  mysql: {
    name: "MySQL",
    short: "SQL",
    sample: `CREATE TABLE students (\n  id INT PRIMARY KEY,\n  name VARCHAR(50),\n  marks INT\n);\n\nSELECT name, marks FROM students WHERE marks >= 80;`,
    topics: ["Introduction", "Databases and Tables", "Data Types", "CREATE and ALTER", "INSERT Data", "SELECT Queries", "WHERE Filtering", "Sorting and Limits", "Aggregate Functions", "Joins", "Subqueries", "Normalization"]
  }
};

const conceptBank = {
  "Introduction": "sets up the purpose, program structure, tools, and the habit of reading errors calmly.",
  "Variables": "teaches how values are named, stored, changed, and used in small programs.",
  "Data Types": "explains how different values need suitable containers so memory and operations make sense.",
  "Operators": "covers arithmetic, comparison, logical, and assignment operators used to build expressions.",
  "Input Output": "shows how a program receives user input and displays clear output.",
  "Conditional Statements": "helps a program make decisions using conditions and branches.",
  "Decision Making": "helps a program choose between paths using if, else if, else, and switch.",
  "Conditionals": "helps a program choose between paths using if, elif, and else.",
  "If Else": "helps a program choose between paths using if, else if, and else.",
  "Loops": "repeats a block of code while a condition or counter controls the flow.",
  "Arrays": "stores multiple values of the same style together and accesses them by position.",
  "Lists": "stores ordered values that can grow, shrink, and be processed with loops.",
  "Functions": "groups reusable logic into named blocks with inputs and returned results.",
  "Methods": "groups reusable behavior inside Java classes using parameters and return values.",
  "Strings": "works with text, characters, indexing, searching, and formatting.",
  "Pointers": "introduces memory addresses and indirect access, a core C idea that needs care.",
  "Structures": "groups related C values into one custom record-like type.",
  "Classes and Objects": "models real-world data and behavior using objects created from class blueprints.",
  "Inheritance": "reuses and extends behavior from a parent class in a clean object-oriented way.",
  "STL Basics": "introduces ready-made C++ containers and algorithms for faster problem solving.",
  "Dictionaries": "stores key-value pairs for quick lookup and readable data organization.",
  "File Handling": "reads and writes files so programs can keep data after they stop running.",
  "Exception Handling": "handles runtime errors gracefully instead of crashing suddenly.",
  "Databases and Tables": "explains how relational data is stored in tables with rows, columns, and keys.",
  "CREATE and ALTER": "builds and changes table structure using SQL schema commands.",
  "INSERT Data": "adds new rows into tables with clean values and column order.",
  "SELECT Queries": "retrieves useful columns and rows from one or more tables.",
  "WHERE Filtering": "narrows query results using conditions.",
  "Sorting and Limits": "orders result sets and controls how many rows are returned.",
  "Aggregate Functions": "summarizes data using COUNT, SUM, AVG, MIN, and MAX.",
  "Joins": "combines related rows from multiple tables.",
  "Subqueries": "uses a query result inside another query.",
  "Normalization": "organizes tables to reduce duplication and improve consistency."
};

const achievements = [
  ["firstLesson", "First Lesson", "Complete any lesson", "FL"],
  ["quizMaster", "Quiz Master", "Score 80% or higher in any quiz", "QM"],
  ["cBeginner", "C Beginner", "Complete 3 C lessons", "CB"],
  ["pythonExplorer", "Python Explorer", "Complete 3 Python lessons", "PX"],
  ["javaRookie", "Java Rookie", "Complete 3 Java lessons", "JR"],
  ["sqlLearner", "SQL Learner", "Complete 3 MySQL lessons", "SL"],
  ["streak7", "7 Day Streak", "Reach a 7 day streak", "7D"],
  ["streak30", "30 Day Streak", "Reach a 30 day streak", "30"],
  ["xp1000", "1000 XP", "Earn 1000 XP", "1K"],
  ["codingFan", "Coding Enthusiast", "Run code 10 times", "CE"]
];

const missionTemplates = [
  ["lesson", "Complete one lesson", 1, 40],
  ["mcq", "Solve five MCQs", 5, 35],
  ["code", "Practice one coding problem", 1, 30],
  ["ai", "Ask AI one question", 1, 20],
  ["quiz80", "Score above 80% in a quiz", 1, 60],
  ["login", "Maintain login streak", 1, 25]
];

const defaultLeaderboard = [
  ["Aarav Sharma", 8, 1420, 12], ["Priya Singh", 7, 1290, 9], ["Rohan Das", 7, 1180, 6],
  ["Ananya Roy", 6, 980, 14], ["Rahul Verma", 6, 930, 4], ["Neha Gupta", 5, 820, 7],
  ["Aditya Kumar", 5, 780, 5], ["Sneha Paul", 4, 640, 3], ["Arjun Mehta", 4, 590, 2],
  ["Karan Patel", 3, 450, 1]
].map((row, index) => ({ id: uid(), rank: index + 1, name: row[0], level: row[1], xp: row[2], streak: row[3] }));

let state = loadState();
let currentView = "dashboard";
let activeLang = state.preferences.language || "python";
let activeLessonIndex = 0;
let activeQuiz = null;
let lessonSearch = "";

function loadState() {
  const today = new Date().toDateString();
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  const base = saved || {
    xp: 0,
    level: 1,
    streak: 1,
    lastLogin: today,
    profile: { avatar: "A", name: "Arsh Student", bio: "Learning programming one small win at a time.", college: "My College", year: "Second Year", favorite: "Python" },
    preferences: { theme: "light", language: "python", sound: true, notifications: true, focusMode: false, animations: true, aiStyle: "coach", premiumPlan: "free" },
    completed: {},
    quizzes: {},
    bookmarks: [],
    recentlyViewed: [],
    achievements: {},
    missionDate: today,
    missions: createMissions(),
    leaderboard: defaultLeaderboard,
    codeRuns: 0,
    playgroundOutput: "",
    notes: "",
    weeklyGoal: 5
  };
  normalizeState(base);

  if (base.lastLogin !== today) {
    base.streak = daysBetween(base.lastLogin, today) === 1 ? base.streak + 1 : 1;
    base.lastLogin = today;
    addXpTo(base, 15, "Daily login");
  }
  if (base.missionDate !== today) {
    base.missionDate = today;
    base.missions = createMissions();
  }
  base.level = calcLevel(base.xp).level;
  return base;
}

function normalizeState(base) {
  base.profile ||= { avatar: "A", name: "Arsh Student", bio: "", college: "", year: "Second Year", favorite: "Python" };
  base.preferences ||= {};
  base.preferences.theme ||= "light";
  base.preferences.language ||= "python";
  if (typeof base.preferences.sound !== "boolean") base.preferences.sound = true;
  if (typeof base.preferences.notifications !== "boolean") base.preferences.notifications = true;
  if (typeof base.preferences.focusMode !== "boolean") base.preferences.focusMode = false;
  if (typeof base.preferences.animations !== "boolean") base.preferences.animations = true;
  base.preferences.aiStyle ||= "coach";
  base.preferences.premiumPlan ||= "free";
  base.completed ||= {};
  base.quizzes ||= {};
  base.bookmarks ||= [];
  base.recentlyViewed ||= [];
  base.achievements ||= {};
  base.leaderboard ||= defaultLeaderboard;
  base.missions ||= createMissions();
  base.messages ||= [{ role: "ai", text: "Hi, I am CodeZ Tutor. Ask me for explanations, errors, examples, study plans, weak topics, or exam prep. Mention any language or topic and I will adapt." }];
  base.playgroundOutput ||= "";
  base.notes ||= "";
  base.weeklyGoal ||= 5;
  base.codeRuns ||= 0;
}

function createMissions() {
  return missionTemplates.map(([id, title, target, xp]) => ({ id, title, target, xp, progress: id === "login" ? 1 : 0, claimed: false }));
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  syncTopbar();
}

function daysBetween(a, b) {
  return Math.round((new Date(b) - new Date(a)) / 86400000);
}

function calcLevel(xp) {
  let level = 1;
  let current = 0;
  let next = 150;
  while (xp >= next) {
    level += 1;
    current = next;
    next += Math.round(150 + level * level * 45);
  }
  return { level, current, next, pct: Math.min(100, ((xp - current) / (next - current)) * 100) };
}

function addXpTo(target, amount) {
  target.xp = (target.xp || 0) + amount;
  target.level = calcLevel(target.xp).level;
}

function addXp(amount, reason) {
  const before = state.level;
  state.xp += amount;
  state.level = calcLevel(state.xp).level;
  toast(`+${amount} XP - ${reason}`);
  if (state.level > before) {
    toast(`Level up! You reached Level ${state.level}`);
    launchConfetti();
  }
  checkAchievements();
  save();
  render();
}

function progressMission(id, count = 1) {
  const mission = state.missions.find(m => m.id === id);
  if (!mission || mission.claimed) return;
  mission.progress = Math.min(mission.target, mission.progress + count);
  save();
}

function checkAchievements() {
  const doneCount = Object.values(state.completed).filter(Boolean).length;
  const langDone = lang => languages[lang].topics.filter((_, i) => state.completed[`${lang}-${i}`]).length;
  const unlock = id => {
    if (!state.achievements[id]) {
      state.achievements[id] = true;
      toast(`Achievement unlocked: ${achievements.find(a => a[0] === id)?.[1] || id}`);
    }
  };
  if (doneCount >= 1) unlock("firstLesson");
  if (Object.values(state.quizzes).some(q => q.score >= 80)) unlock("quizMaster");
  if (langDone("c") >= 3) unlock("cBeginner");
  if (langDone("python") >= 3) unlock("pythonExplorer");
  if (langDone("java") >= 3) unlock("javaRookie");
  if (langDone("mysql") >= 3) unlock("sqlLearner");
  if (state.streak >= 7) unlock("streak7");
  if (state.streak >= 30) unlock("streak30");
  if (state.xp >= 1000) unlock("xp1000");
  if (state.codeRuns >= 10) unlock("codingFan");
}

function buildLessons(langKey) {
  const lang = languages[langKey];
  return lang.topics.map((topic, index) => {
    const concept = conceptBank[topic] || `builds confidence with ${topic.toLowerCase()} through small examples.`;
    const syntax = syntaxFor(langKey, topic);
    return {
      title: topic,
      concept: `${topic} in ${lang.name} ${concept} Beginners should focus on what each line does, then change one value and run again.`,
      syntax,
      example: exampleFor(langKey, topic),
      mistakes: mistakesFor(langKey, topic),
      tips: `Write a tiny program first, trace it by hand, then improve it. Keep variable names clear and test one idea at a time.`,
      summary: `You learned the role of ${topic.toLowerCase()} in ${lang.name}, its basic syntax, a starter example, and the common traps to avoid.`,
      practice: [
        `Explain ${topic.toLowerCase()} to a friend in three lines.`,
        `Modify the example and predict the output before running it.`,
        `Create one beginner program that uses ${topic.toLowerCase()} with input and output.`
      ],
      coding: `Build a small ${lang.name} program using ${topic.toLowerCase()} and print a clear result.`,
      project: miniProjectFor(langKey, index),
      revision: `${index + 1}. ${topic}: know the purpose, syntax pattern, example output, and one common mistake.`
    };
  });
}

function syntaxFor(lang, topic) {
  if (lang === "mysql") {
    const map = {
      "CREATE and ALTER": "CREATE TABLE table_name (...); ALTER TABLE table_name ADD column type;",
      "INSERT Data": "INSERT INTO table_name (column1, column2) VALUES (value1, value2);",
      "SELECT Queries": "SELECT column1, column2 FROM table_name;",
      "WHERE Filtering": "SELECT * FROM table_name WHERE condition;",
      "Sorting and Limits": "SELECT * FROM table_name ORDER BY column DESC LIMIT 5;",
      "Aggregate Functions": "SELECT COUNT(*), AVG(marks) FROM students;",
      "Joins": "SELECT s.name, c.title FROM students s JOIN courses c ON s.course_id = c.id;",
      "Subqueries": "SELECT name FROM students WHERE marks > (SELECT AVG(marks) FROM students);"
    };
    return map[topic] || "-- SQL commands end with semicolons and use clauses in a readable order.";
  }
  if (lang === "python") return topic === "Functions" ? "def function_name(parameter):\n    return value" : "name = value\nif condition:\n    print(name)";
  if (lang === "java") return topic === "Classes and Objects" ? "class Student { String name; void study() {} }" : "type variableName = value;\nSystem.out.println(variableName);";
  if (lang === "cpp") return topic === "Classes and Objects" ? "class Student { public: string name; void study() {} };" : "type variableName = value;\ncout << variableName << endl;";
  return topic === "Pointers" ? "int x = 10;\nint *ptr = &x;" : "type variable_name = value;\nprintf(\"%d\", variable_name);";
}

function exampleFor(lang, topic) {
  if (lang === "mysql") return `-- ${topic} example\nSELECT topic, progress\nFROM study_plan\nWHERE progress >= 50\nORDER BY progress DESC;`;
  if (lang === "python") return `# ${topic} example\nscore = 82\nif score >= 80:\n    print("Great progress")\nelse:\n    print("Keep practicing")`;
  if (lang === "java") return `// ${topic} example\nint score = 82;\nif (score >= 80) {\n    System.out.println("Great progress");\n}`;
  if (lang === "cpp") return `// ${topic} example\nint score = 82;\nif (score >= 80) {\n    cout << "Great progress" << endl;\n}`;
  return `// ${topic} example\nint score = 82;\nif (score >= 80) {\n    printf("Great progress\\n");\n}`;
}

function mistakesFor(lang, topic) {
  const semicolon = lang === "python" ? "using inconsistent indentation" : "forgetting semicolons or braces";
  return [`Memorizing syntax without understanding the flow.`, semicolon, `Changing many lines at once and then struggling to find the bug.`];
}

function miniProjectFor(lang, index) {
  const ideas = ["personal intro card", "marks calculator", "unit converter", "simple bill splitter", "login checker", "number guessing helper", "pattern printer", "student list", "grade function", "text analyzer", "mini contact book", "revision tracker"];
  return `${languages[lang].name} mini project: ${ideas[index]}.`;
}

function generateQuiz(lang, lesson) {
  const questions = [
    [`What is the main goal of ${lesson.title}?`, `To use ${lesson.title.toLowerCase()} correctly in a program`, "To decorate the editor", "To avoid writing code", "Only to create comments"],
    ["Which habit helps beginners debug faster?", "Change one thing at a time", "Ignore errors", "Delete all code", "Guess randomly"],
    ["Why should examples be modified?", "It proves you understand the idea", "It makes code longer only", "It hides bugs", "It removes syntax"],
    ["What should a good variable or table name be?", "Clear and meaningful", "Always one letter", "A random symbol", "As long as possible"],
    ["What is a common beginner mistake?", "Skipping small practice", "Reading output carefully", "Testing simple cases", "Writing comments"],
    ["When should you ask for help?", "After reading the error and trying a small fix", "Before reading the question", "Never", "Only after deleting files"],
    [`In ${lang.name}, syntax matters because`, "the computer follows exact rules", "it likes pretty colors", "comments run first", "spaces are always ignored"],
    ["What should practice questions include?", "A tiny real task", "Only theory words", "No output", "Hidden answers"],
    ["What does a summary help with?", "Quick revision before practice", "Replacing all lessons", "Avoiding quizzes", "Changing the language"],
    ["Best next step after this lesson?", "Solve the exercise and take the quiz", "Close the app", "Skip all examples", "Only copy code"]
  ];
  return questions.map((q, i) => ({
    prompt: q[0],
    options: shuffle(q.slice(1).map((text, idx) => ({ text, correct: idx === 0 }))),
    explanation: i === 0 ? `${lesson.title} is useful when you can apply it in a small working example.` : "The best answer supports careful, beginner-friendly practice."
  }));
}

function shuffle(items) {
  return items.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(v => v[1]);
}

const allLessons = Object.fromEntries(Object.keys(languages).map(key => [key, buildLessons(key)]));

function syncTopbar() {
  const levelInfo = calcLevel(state.xp);
  document.body.classList.toggle("dark", state.preferences.theme === "dark");
  document.body.classList.toggle("focus-mode", state.preferences.focusMode);
  document.body.classList.toggle("no-animations", !state.preferences.animations);
  document.getElementById("xpTop").textContent = state.xp;
  document.getElementById("levelTop").textContent = levelInfo.level;
  document.getElementById("streakTop").textContent = state.streak;
  document.getElementById("avatarTop").textContent = state.profile.avatar || state.profile.name.slice(0, 1).toUpperCase();
}

function init() {
  document.getElementById("sideNav").innerHTML = views.map(([id, label, icon]) => `<button class="nav-item" data-view="${id}"><span class="avatar-sm">${icon}</span>${label}</button>`).join("");
  document.body.addEventListener("click", handleClick);
  document.body.addEventListener("input", handleInput);
  document.getElementById("overlay").addEventListener("click", () => toggleSidebar(false));
  setTimeout(() => document.getElementById("splash").classList.add("hide"), 2500);
  checkAchievements();
  syncTopbar();
  render();
}

function handleClick(event) {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.id === "notifyBtn") return toast("No new alerts. Today is a good day to finish one lesson.");
  if (button.dataset.lessonHelp) return askLessonTutor(button.dataset.lessonHelp);
  const view = button.dataset.view;
  if (view) return navigate(view);
  if (button.id === "menuBtn") return toggleSidebar(true);
  if (button.id === "closeSidebar" || button.id === "overlay") return toggleSidebar(false);
  if (button.dataset.lang) { activeLang = button.dataset.lang; state.preferences.language = activeLang; save(); render(); }
  if (button.dataset.lesson) { activeLessonIndex = Number(button.dataset.lesson); openLesson(activeLang, activeLessonIndex); render(); }
  if (button.dataset.bookmark) toggleBookmark(button.dataset.bookmark);
  if (button.dataset.complete) completeLesson(button.dataset.complete);
  if (button.dataset.quiz) startQuiz(button.dataset.quiz);
  if (button.dataset.answer) answerQuiz(Number(button.dataset.answer));
  if (button.dataset.mission) claimMission(button.dataset.mission);
  if (button.dataset.sample) loadSample(button.dataset.sample);
  if (button.dataset.run) runCode();
  if (button.dataset.resetCode) resetCode();
  if (button.dataset.clearCode) document.getElementById("codeEditor").value = "";
  if (button.dataset.copyCode) copyCode();
  if (button.dataset.ask) askTutor();
  if (button.dataset.quick) askTutor(button.dataset.quick);
  if (button.dataset.saveProfile) saveProfile();
  if (button.dataset.addPlayer) addPlayer();
  if (button.dataset.removePlayer) removePlayer(button.dataset.removePlayer);
  if (button.dataset.resetLeaderboard) resetLeaderboard();
  if (button.dataset.theme) setTheme(button.dataset.theme);
  if (button.dataset.setting) toggleSetting(button.dataset.setting);
  if (button.dataset.resetProgress) resetProgress();
  if (button.dataset.buyPlan) buyPlan(button.dataset.buyPlan);
  if (button.dataset.aiStyle) setAiStyle(button.dataset.aiStyle);
}

function handleInput(event) {
  if (event.target.id === "lessonSearch") {
    lessonSearch = event.target.value;
    render();
    const search = document.getElementById("lessonSearch");
    search?.focus();
    search?.setSelectionRange(search.value.length, search.value.length);
  }
  if (event.target.dataset.playerField) {
    const player = state.leaderboard.find(p => p.id === event.target.dataset.playerId);
    if (player) {
      const field = event.target.dataset.playerField;
      player[field] = field === "name" ? event.target.value : Number(event.target.value);
      save();
    }
  }
  if (event.target.id === "weeklyGoal") {
    state.weeklyGoal = Number(event.target.value) || 1;
    save();
  }
  if (event.target.id === "studyNotes") {
    state.notes = event.target.value;
    save();
  }
}

function navigate(view) {
  currentView = view;
  toggleSidebar(false);
  activeQuiz = null;
  render();
}

function toggleSidebar(open) {
  document.getElementById("sidebar").classList.toggle("open", open);
  document.getElementById("overlay").classList.toggle("show", open);
}

function render() {
  syncTopbar();
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === currentView));
  const app = document.getElementById("app");
  const routes = { dashboard: renderDashboard, learn: renderLearn, playground: renderPlayground, ai: renderAI, missions: renderMissions, achievements: renderAchievements, leaderboard: renderLeaderboard, profile: renderProfile, settings: renderSettings };
  app.innerHTML = routes[currentView]();
  enhanceAccessibility();
  requestAnimationFrame(() => document.querySelectorAll("[data-progress]").forEach(el => el.style.width = `${el.dataset.progress}%`));
}

function enhanceAccessibility() {
  document.querySelectorAll("button").forEach(button => {
    const label = button.getAttribute("aria-label") || button.textContent.trim() || button.title || "CodeZ action";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  });
  document.querySelectorAll("input, textarea, select").forEach(field => {
    const label = field.getAttribute("aria-label") || field.placeholder || field.id || "CodeZ field";
    field.setAttribute("aria-label", label);
  });
}

function renderDashboard() {
  const level = calcLevel(state.xp);
  const langProgress = languageProgress(activeLang);
  return `
    <section class="hero-grid">
      <div class="panel welcome">
        <p class="eyebrow">Mobile-first programming practice</p>
        <h1>CodeZ makes programming practice feel doable.</h1>
        <p style="max-width:620px;margin-top:14px">Built for BTech students: continue ${languages[activeLang].name}, ask for hints, run beginner programs, and collect XP while building real confidence.</p>
        <div class="actions">
          <button class="btn primary" data-view="learn">Continue Learning</button>
          <button class="btn" data-view="ai">Ask AI Tutor</button>
        </div>
      </div>
      <div class="panel level-box">
        <div class="meta-row"><h2>Level ${level.level}</h2><strong>${state.xp} XP</strong></div>
        <div class="progress-track"><div class="progress-fill" data-progress="${level.pct}"></div></div>
        <p>${level.next - state.xp} XP to Level ${level.level + 1}</p>
        <div class="grid two-col">
          <div class="card"><h3>Daily Streak</h3><p><strong>${state.streak}</strong> days active</p></div>
          <div class="card"><h3>${languages[activeLang].short}</h3><p><strong>${langProgress.percent}%</strong> completed</p></div>
        </div>
      </div>
    </section>
    <section class="grid cards">
      ${[
        ["learn", "Learn Programming", "12 lessons per language", "LN"],
        ["playground", "Playground", "Run beginner code", "PG"],
        ["ai", "AI Tutor", "Hints and learning path", "AI"],
        ["missions", "Daily Mission", "Earn bonus XP", "DM"],
        ["leaderboard", "Leaderboard", "Compete with friends", "LB"],
        ["achievements", "Achievements", "Unlock badges", "AC"],
        ["profile", "Profile", "Edit student details", "PF"],
        ["settings", "Settings", "Theme and resets", "ST"]
      ].map(c => `<button class="card" data-view="${c[0]}"><span class="icon">${c[3]}</span><h3>${c[1]}</h3><p>${c[2]}</p></button>`).join("")}
    </section>
    <section class="grid two-col">
      <div class="panel">
        <div class="section-title"><h2>Recently Viewed</h2><button class="btn" data-view="learn">Open Lessons</button></div>
        ${state.recentlyViewed.length ? state.recentlyViewed.slice(0, 4).map(item => `<div class="list-row content-block"><strong>${item.title}</strong><span class="muted">${languages[item.lang].name}</span></div>`).join("") : `<p>No lessons viewed yet. Start with Python Introduction or C Variables.</p>`}
      </div>
      <div class="panel">
        <h2>Coding Tip</h2>
        <p>${tipOfDay()}</p>
        <div class="content-block" style="margin-top:12px"><strong>Quote:</strong> Small programs become strong fundamentals.</div>
        <div class="content-block" style="margin-top:12px"><strong>Fact:</strong> SQL is declarative: you describe what data you want, not every step to get it.</div>
        <div class="content-block" style="margin-top:12px"><strong>Weekly Goal:</strong> Finish ${state.weeklyGoal} lessons this week.</div>
      </div>
    </section>`;
}

function renderLearn(search = lessonSearch) {
  const lessons = allLessons[activeLang];
  const filtered = lessons.map((l, i) => ({ ...l, i })).filter(l => l.title.toLowerCase().includes(search.toLowerCase()) || l.concept.toLowerCase().includes(search.toLowerCase()));
  const selected = lessons[activeLessonIndex] || lessons[0];
  const key = `${activeLang}-${activeLessonIndex}`;
  const p = languageProgress(activeLang);
  const nextTopic = weakTopics(activeLang)[0] || "Revision";
  return `
    <section class="panel">
      <div class="section-title"><div><p class="eyebrow">BTech foundation tracks</p><h2>Choose a Code Path</h2></div><button class="btn" data-view="playground">Open Playground</button></div>
      <div class="course-path-grid">
        ${Object.keys(languages).map(k => coursePathCard(k)).join("")}
      </div>
      <div class="active-course-strip">
        <div>
          <strong>${languages[activeLang].name}</strong>
          <p>${p.lessons}/12 lessons done, ${p.quizzes} quizzes completed, next focus: ${nextTopic}</p>
        </div>
        <div class="progress-track"><div class="progress-fill" data-progress="${p.percent}"></div></div>
      </div>
      <input id="lessonSearch" class="input searchbar" placeholder="Search lessons, topics, notes..." value="${escapeHtml(search)}" />
    </section>
    <section class="lesson-layout" style="margin-top:16px">
      <aside class="lesson-list panel">
        <h3>${languages[activeLang].name} Roadmap</h3>
        ${filtered.map(l => `<button class="lesson-btn ${l.i === activeLessonIndex ? "active" : ""}" data-lesson="${l.i}">
          <div class="lesson-head"><strong>${l.i + 1}. ${l.title}</strong><span>${state.completed[`${activeLang}-${l.i}`] ? "Done" : "Start"}</span></div>
          <small class="muted">${quizLabel(activeLang, l.i)}</small>
        </button>`).join("")}
      </aside>
      <article class="panel lesson-content">
        <div class="lesson-head">
          <div><p class="eyebrow">Lesson ${activeLessonIndex + 1}</p><h2>${selected.title}</h2></div>
          <button class="btn" data-bookmark="${key}">${state.bookmarks.includes(key) ? "Bookmarked" : "Bookmark"}</button>
        </div>
        ${lessonBlock("Concept explanation", selected.concept)}
        ${codeBlock("Syntax", selected.syntax)}
        ${codeBlock("Example", selected.example)}
        ${listBlock("Common mistakes", selected.mistakes)}
        ${lessonBlock("Tip", selected.tips)}
        <div class="content-block"><h3>Visual diagram</h3><div class="diagram"><span>Input</span><span>${selected.title}</span><span>Output</span></div></div>
        ${lessonBlock("Summary", selected.summary)}
        ${listBlock("Practice questions", selected.practice)}
        ${lessonBlock("Coding exercise", selected.coding)}
        ${lessonBlock("Mini project", selected.project)}
        ${lessonBlock("Revision note", selected.revision)}
        <div class="actions">
          <button class="btn primary" data-complete="${key}">${state.completed[key] ? "Lesson Completed" : "Mark Complete +50 XP"}</button>
          <button class="btn" data-quiz="${key}">Start 10 MCQ Quiz</button>
          <button class="btn" data-lesson-help="Make a study plan for ${languages[activeLang].name} ${selected.title}">Ask Tutor About This</button>
        </div>
        ${activeQuiz ? renderQuiz() : ""}
      </article>
    </section>`;
}

function languageTabs() {
  return `<div class="language-tabs">${Object.keys(languages).map(k => `<button class="tab ${k === activeLang ? "active" : ""}" data-lang="${k}">${languages[k].name}</button>`).join("")}</div>`;
}

function progressCard(k) {
  const p = languageProgress(k);
  return `<div class="card"><div class="meta-row"><h3>${languages[k].name}</h3><strong>${p.percent}%</strong></div><p>${p.lessons}/12 lessons, ${p.quizzes} quizzes, ${p.practice} practice runs</p><div class="progress-track" style="margin-top:12px"><div class="progress-fill" data-progress="${p.percent}"></div></div></div>`;
}

function coursePathCard(k) {
  const p = languageProgress(k);
  const next = weakTopics(k)[0] || "Revision Notes";
  return `<button class="course-path-card ${k === activeLang ? "active" : ""}" data-lang="${k}">
    <span class="course-code">${languages[k].short}</span>
    <span class="course-copy"><strong>${languages[k].name}</strong><small>${p.percent}% complete - next: ${next}</small></span>
    <span class="mini-ring" style="--pct:${p.percent}"><em>${p.percent}%</em></span>
  </button>`;
}

function languageProgress(k) {
  const lessons = languages[k].topics.length;
  const completed = languages[k].topics.filter((_, i) => state.completed[`${k}-${i}`]).length;
  const quizzes = languages[k].topics.filter((_, i) => state.quizzes[`${k}-${i}`]).length;
  return { lessons: completed, quizzes, practice: state.codeRuns, percent: Math.round((completed / lessons) * 100), xp: completed * 50 + quizzes * 40 };
}

function lessonBlock(title, text) {
  return `<div class="content-block"><h3>${title}</h3><p>${escapeHtml(text)}</p></div>`;
}

function listBlock(title, items) {
  return `<div class="content-block"><h3>${title}</h3><ul>${items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul></div>`;
}

function codeBlock(title, code) {
  return `<div class="content-block"><h3>${title}</h3><pre><code>${escapeHtml(code)}</code></pre></div>`;
}

function openLesson(lang, index) {
  const item = { lang, title: allLessons[lang][index].title };
  state.recentlyViewed = [item, ...state.recentlyViewed.filter(r => r.lang !== lang || r.title !== item.title)].slice(0, 8);
  save();
}

function completeLesson(key) {
  if (state.completed[key]) return toast("Lesson already completed.");
  state.completed[key] = true;
  progressMission("lesson");
  addXp(50, "Lesson completed");
}

function toggleBookmark(key) {
  state.bookmarks = state.bookmarks.includes(key) ? state.bookmarks.filter(k => k !== key) : [...state.bookmarks, key];
  save();
  render();
}

function startQuiz(key) {
  const [lang] = key.split("-");
  const index = Number(key.split("-")[1]);
  activeQuiz = { key, questions: generateQuiz(languages[lang], allLessons[lang][index]), index: 0, correct: 0, answered: false };
  render();
}

function renderQuiz() {
  const q = activeQuiz.questions[activeQuiz.index];
  if (!q) return `<div class="content-block"><h3>Quiz finished</h3><p>Score: ${activeQuiz.correct}/10</p></div>`;
  return `<div class="content-block quiz-card"><div class="meta-row"><h3>Question ${activeQuiz.index + 1}/10</h3><strong>${activeQuiz.correct} correct</strong></div><p>${q.prompt}</p>${q.options.map((o, i) => `<button class="option" data-answer="${i}">${escapeHtml(o.text)}</button>`).join("")}</div>`;
}

function answerQuiz(answerIndex) {
  const q = activeQuiz.questions[activeQuiz.index];
  if (q.options[answerIndex].correct) {
    activeQuiz.correct += 1;
    progressMission("mcq");
    toast("Correct answer.");
  } else {
    toast(`Not quite. ${q.explanation}`);
  }
  activeQuiz.index += 1;
  if (activeQuiz.index >= activeQuiz.questions.length) {
    const score = Math.round((activeQuiz.correct / activeQuiz.questions.length) * 100);
    state.quizzes[activeQuiz.key] = { score, date: new Date().toISOString() };
    if (score >= 80) progressMission("quiz80");
    addXp(score >= 80 ? 80 : 35, `Quiz score ${score}%`);
    activeQuiz = null;
  } else render();
}

function quizLabel(lang, index) {
  const q = state.quizzes[`${lang}-${index}`];
  return q ? `Quiz ${q.score}%` : "Quiz pending";
}

function renderPlayground() {
  return `<section class="panel">
    <div class="section-title"><div><p class="eyebrow">Educational simulator</p><h2>Interactive Playground</h2></div>${languageTabs()}</div>
    <div class="playground">
      <div>
        <textarea id="codeEditor" class="input editor" spellcheck="false">${escapeHtml(localStorage.getItem(`code_${activeLang}`) || languages[activeLang].sample)}</textarea>
        <div class="actions">
          <button class="btn primary" data-run="1">Run</button>
          <button class="btn" data-reset-code="1">Reset</button>
          <button class="btn" data-clear-code="1">Clear</button>
          <button class="btn" data-copy-code="1">Copy Code</button>
        </div>
      </div>
      <aside class="grid">
        <div class="card"><h3>Input</h3><textarea id="programInput" class="input" placeholder="Optional input for beginner simulations"></textarea></div>
        <div class="card"><h3>Sample Programs</h3>${Object.keys(languages).map(k => `<button class="btn" style="margin:4px" data-sample="${k}">${languages[k].name}</button>`).join("")}</div>
        <div class="card"><h3>Output Console</h3><pre id="outputConsole" class="console">${escapeHtml(state.playgroundOutput || `Ready to run ${languages[activeLang].name} code.`)}</pre></div>
        <div class="card"><h3>Practice Challenge</h3><p>Change the sample so it uses input, a condition, and one loop. Then ask the AI Tutor to review it.</p><button class="btn" data-lesson-help="Review my ${languages[activeLang].name} playground code and suggest improvements">Review With AI</button></div>
      </aside>
    </div>
  </section>`;
}

function loadSample(lang) {
  activeLang = lang;
  state.preferences.language = lang;
  save();
  render();
}

function resetCode() {
  document.getElementById("codeEditor").value = languages[activeLang].sample;
}

function copyCode() {
  navigator.clipboard?.writeText(document.getElementById("codeEditor").value);
  toast("Code copied.");
}

function runCode() {
  const code = document.getElementById("codeEditor").value;
  localStorage.setItem(`code_${activeLang}`, code);
  const input = document.getElementById("programInput").value.trim();
  state.playgroundOutput = simulateOutput(activeLang, code, input);
  document.getElementById("outputConsole").textContent = state.playgroundOutput;
  state.codeRuns += 1;
  progressMission("code");
  addXp(10, "Coding practice");
}

function simulateOutput(lang, code, input) {
  if (!code.trim()) return "No code to run. Write a small program first.";
  const printed = [];
  const regex = lang === "python" ? /print\((.*?)\)/g : /(printf|cout|System\.out\.println)\((.*?)\)|cout\s*<<\s*["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(code)) && printed.length < 6) {
    printed.push((match[3] || match[2] || match[1]).replace(/[;"']/g, "").replace(/\\n/g, "\n").trim());
  }
  const notes = [`Simulated ${languages[lang].name} run`, "Status: success for beginner learning"];
  if (input) notes.push(`Input received: ${input}`);
  notes.push(printed.length ? `Output:\n${printed.join("\n")}` : "Output:\nProgram ran. Add a print statement to show results.");
  return notes.join("\n");
}

function renderAI() {
  return `<section class="panel">
    <div class="section-title"><div><p class="eyebrow">Smart study guidance</p><h2>CodeZ AI Tutor</h2><p>Mention Python, C++, Java, MySQL, or a topic. The tutor will detect it automatically.</p></div></div>
    <div class="chat">
      <div>
        <div id="messages" class="messages">${renderMessages()}</div>
        <div class="actions">
          <textarea id="aiInput" class="input" placeholder="Ask for a study plan, code explanation, error help, exam prep, project ideas, or next lesson..."></textarea>
          <button class="btn primary" data-ask="1">Ask</button>
        </div>
      </div>
      <aside class="grid">
        <div class="card"><h3>Quick Prompts</h3>
          ${["Make my 7 day study plan", "Explain pointers with example", "Generate Java mini project", "Find error in my code", "Prepare me for viva"].map(q => `<button class="btn" style="margin:4px" data-quick="${q}">${q}</button>`).join("")}
        </div>
        <div class="card"><h3>Personalized Path</h3><p>${learningPath()}</p></div>
        <div class="card"><h3>Study Coach Mode</h3><p>${state.preferences.aiStyle === "strict" ? "Strict mode: direct tasks, deadlines, and revision checks." : "Coach mode: friendly hints, small steps, and confidence building."}</p></div>
      </aside>
    </div>
  </section>`;
}

function renderMessages() {
  const messages = state.messages || [{ role: "ai", text: "Hi! Choose a language and ask me anything. I can explain syntax, find simple errors, and suggest what to study next." }];
  return messages.map(m => `<div class="bubble ${m.role === "user" ? "user" : ""}">${escapeHtml(m.text)}</div>`).join("");
}

function askTutor(quick) {
  const input = document.getElementById("aiInput");
  const text = quick || input.value.trim();
  if (!text) return;
  state.messages = state.messages || [];
  state.messages.push({ role: "user", text });
  state.messages.push({ role: "ai", text: tutorReply(text) });
  progressMission("ai");
  save();
  render();
}

function askLessonTutor(prompt) {
  currentView = "ai";
  state.messages = state.messages || [];
  state.messages.push({ role: "user", text: prompt });
  state.messages.push({ role: "ai", text: tutorReply(prompt) });
  progressMission("ai");
  save();
  render();
}

function tutorReply(text) {
  const langKey = inferLanguageFromText(text) || activeLang;
  const lang = languages[langKey];
  const topic = inferTopicFromText(text, langKey);
  const lower = text.toLowerCase();
  const p = languageProgress(langKey);
  const next = weakTopics(langKey)[0] || "Revision Notes";
  const tone = state.preferences.aiStyle === "strict" ? "Target" : "Good direction";

  if (/study plan|schedule|timetable|routine|guide|roadmap|path|next|recommend/.test(lower)) {
    return `${tone}: here is a realistic ${lang.name} plan for a BTech student. Day 1: revise ${next} and write 2 small examples. Day 2: solve 10 MCQs and note mistakes. Day 3: practice one coding problem from ${topic}. Day 4: explain the concept aloud like viva prep. Day 5: take the quiz and aim for 80%+. Day 6: build a mini project. Day 7: revise weak topics and update your notes. Current progress: ${p.percent}% complete, ${p.quizzes} quizzes done.`;
  }

  if (/error|bug|debug|fix|not working|wrong output/.test(lower)) {
    const hints = [];
    if (/[{}]/.test(text) && !balanced(text, "{", "}")) hints.push("Your braces look unbalanced. Match every opening brace with one closing brace.");
    if (langKey !== "python" && /printf|cout|System\.out/.test(text) && !/[;]/.test(text)) hints.push("Check missing semicolons after statements.");
    if (langKey === "python" && /\t| {2,}/.test(text)) hints.push("Python is indentation-sensitive, so keep each block aligned.");
    if (/=/.test(text) && /if\s*\(.+=.+\)/.test(text)) hints.push("Inside conditions, use comparison like == instead of assignment =.");
    return `${lang.name} debugging checklist: read the first error first, check syntax around the previous line, verify variable names, then test with tiny input. ${hints.length ? hints.join(" ") : `For ${topic}, print intermediate values and confirm each step before moving ahead.`}`;
  }

  if (/generate|write|program|project|code for|example/.test(lower)) {
    return `Here is a beginner-friendly ${lang.name} idea for ${topic}: build a student marks helper. It should take marks, calculate average, print grade, and give a short message. Start from this pattern:\n\n${starterCode(langKey, topic)}\n\nChallenge: add one extra condition and test 3 inputs.`;
  }

  if (/explain|what is|why|syntax|concept|meaning/.test(lower)) {
    const lesson = allLessons[langKey].find(l => l.title === topic) || allLessons[langKey][0];
    return `${topic} in ${lang.name}: ${lesson.concept} Syntax pattern:\n${lesson.syntax}\n\nCommon mistake: ${lesson.mistakes[0]} Best practice: ${lesson.tips}`;
  }

  if (/viva|exam|interview|important|question/.test(lower)) {
    return `For ${lang.name} viva/exam prep, focus on these: define ${topic}, write syntax without seeing notes, explain one example line by line, mention one common mistake, and solve one output question. Expected question: "Why do we use ${topic.toLowerCase()}?" Answer in simple words, then give a tiny code example.`;
  }

  return `I understood this as a ${lang.name} question about ${topic}. Best next step: read the ${topic} lesson, run one small example in Playground, then ask me to check your code or create a 7 day study plan.`;
}

function inferLanguageFromText(text) {
  const lower = text.toLowerCase();
  if (/\bc\+\+|\bcpp\b/.test(lower)) return "cpp";
  if (/\bmysql\b|\bsql\b|\bdatabase\b|\bquery\b|\btable\b/.test(lower)) return "mysql";
  if (/\bpython\b|\bpy\b|print\(|def\s+\w+/.test(lower)) return "python";
  if (/\bjava\b|system\.out|public\s+class/.test(lower)) return "java";
  if (/\bc programming\b|\bc language\b|#include\s*<stdio|printf\(/.test(lower)) return "c";
  return null;
}

function inferTopicFromText(text, langKey) {
  const lower = text.toLowerCase();
  const topics = languages[langKey].topics;
  return topics.find(topic => lower.includes(topic.toLowerCase())) ||
    topics.find(topic => lower.includes(topic.toLowerCase().split(" ")[0])) ||
    weakTopics(langKey)[0] ||
    topics[0];
}

function starterCode(langKey, topic) {
  if (langKey === "mysql") return "SELECT name, marks,\nCASE WHEN marks >= 80 THEN 'Great' ELSE 'Practice' END AS feedback\nFROM students;";
  if (langKey === "python") return "marks = [78, 86, 91]\naverage = sum(marks) / len(marks)\nprint('Average:', average)\nprint('Grade:', 'A' if average >= 80 else 'Keep practicing')";
  if (langKey === "java") return "int marks = 86;\nif (marks >= 80) {\n    System.out.println(\"Great progress\");\n} else {\n    System.out.println(\"Keep practicing\");\n}";
  if (langKey === "cpp") return "int marks = 86;\nif (marks >= 80) {\n    cout << \"Great progress\" << endl;\n} else {\n    cout << \"Keep practicing\" << endl;\n}";
  return "int marks = 86;\nif (marks >= 80) {\n    printf(\"Great progress\\n\");\n} else {\n    printf(\"Keep practicing\\n\");\n}";
}

function balanced(text, open, close) {
  return text.split(open).length === text.split(close).length;
}

function weakTopics(lang) {
  return languages[lang].topics.filter((_, i) => !state.completed[`${lang}-${i}`]).slice(0, 3);
}

function learningPath() {
  const weak = weakTopics(activeLang);
  const scores = Object.entries(state.quizzes).filter(([k]) => k.startsWith(`${activeLang}-`)).map(([, v]) => v.score);
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  return `Your ${languages[activeLang].name} path: finish ${weak[0] || "revision"}, practice ${weak[1] || "one coding problem"}, then take a quiz. Quiz average: ${avg || "not started"}%. Spend 20 minutes daily and ask for hints when stuck.`;
}

function renderMissions() {
  return `<section class="panel"><div class="section-title"><div><p class="eyebrow">Refreshes daily</p><h2>Daily Mission</h2></div><strong>${new Date().toDateString()}</strong></div>
    <div class="grid two-col">${state.missions.map(m => {
      const pct = Math.round((m.progress / m.target) * 100);
      return `<div class="card"><div class="meta-row"><h3>${m.title}</h3><strong>+${m.xp} XP</strong></div><p>${m.progress}/${m.target} completed</p><div class="progress-track" style="margin:12px 0"><div class="progress-fill" data-progress="${pct}"></div></div><button class="btn ${pct >= 100 && !m.claimed ? "primary" : ""}" data-mission="${m.id}">${m.claimed ? "Claimed" : pct >= 100 ? "Claim Reward" : "In Progress"}</button></div>`;
    }).join("")}</div>
    <div class="grid three-col" style="margin-top:16px">
      <div class="card"><h3>Daily Streak</h3><p>${state.streak} days</p></div>
      <div class="card"><h3>Weekly Streak</h3><p>${Math.min(7, state.streak)} / 7 days</p></div>
      <div class="card"><h3>Monthly Progress</h3><p>${Math.min(30, state.streak)} / 30 days</p></div>
      <div class="card"><h3>Bonus Rule</h3><p>Complete any 3 missions in a day and use the momentum for a mini project.</p></div>
      <div class="card"><h3>College Habit</h3><p>Pair one lesson with one notebook summary for better exam recall.</p></div>
      <div class="card"><h3>Placement Prep</h3><p>Turn one topic into a viva answer and one coding problem.</p></div>
    </div></section>`;
}

function claimMission(id) {
  const mission = state.missions.find(m => m.id === id);
  if (!mission || mission.claimed || mission.progress < mission.target) return;
  mission.claimed = true;
  addXp(mission.xp, mission.title);
}

function renderAchievements() {
  const next = achievements.find(a => !state.achievements[a[0]]);
  return `<section class="panel"><div class="section-title"><div><p class="eyebrow">Badges and milestones</p><h2>Achievements</h2></div><strong>${Object.values(state.achievements).filter(Boolean).length}/${achievements.length}</strong></div>
    <div class="content-block" style="margin-bottom:14px"><strong>Next badge:</strong> ${next ? `${next[1]} - ${next[2]}` : "All badges unlocked. That is a serious grind."}</div>
    <div class="grid badge-grid">${achievements.map(a => `<div class="card badge ${state.achievements[a[0]] ? "" : "locked"}"><div class="medal">${a[3]}</div><h3>${a[1]}</h3><p>${a[2]}</p></div>`).join("")}</div></section>`;
}

function renderLeaderboard() {
  const sorted = [...state.leaderboard].sort((a, b) => b.xp - a.xp);
  return `<section class="panel"><div class="section-title"><div><p class="eyebrow">Editable local board</p><h2>Leaderboard</h2></div><button class="btn primary" data-add-player="1">Add Player</button></div>
    <div class="content-block" style="margin-bottom:14px"><strong>Classroom mode:</strong> edit names and XP during a lab session, then save the board locally for friendly competition.</div>
    <div class="table-wrap"><table><thead><tr><th>Rank</th><th>Avatar</th><th>Name</th><th>Level</th><th>XP</th><th>Streak</th><th></th></tr></thead><tbody>
      ${sorted.map((p, i) => `<tr><td>${i + 1}</td><td><span class="avatar-sm">${p.name.slice(0,1)}</span></td><td><input class="input" data-player-id="${p.id}" data-player-field="name" value="${escapeAttr(p.name)}"></td><td><input class="input" type="number" data-player-id="${p.id}" data-player-field="level" value="${p.level}"></td><td><input class="input" type="number" data-player-id="${p.id}" data-player-field="xp" value="${p.xp}"></td><td><input class="input" type="number" data-player-id="${p.id}" data-player-field="streak" value="${p.streak}"></td><td><button class="btn danger" data-remove-player="${p.id}">Remove</button></td></tr>`).join("")}
    </tbody></table></div><div class="actions"><button class="btn danger" data-reset-leaderboard="1">Reset Leaderboard</button></div></section>`;
}

function addPlayer() {
  state.leaderboard.push({ id: uid(), name: "New Student", level: 1, xp: 0, streak: 0 });
  save();
  render();
}

function removePlayer(id) {
  state.leaderboard = state.leaderboard.filter(p => p.id !== id);
  save();
  render();
}

function resetLeaderboard() {
  state.leaderboard = defaultLeaderboard.map(p => ({ ...p, id: uid() }));
  save();
  render();
}

function renderProfile() {
  const p = state.profile;
  const done = Object.values(state.completed).filter(Boolean).length;
  const scores = Object.values(state.quizzes).map(q => q.score);
  const acc = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  return `<section class="panel"><div class="section-title"><div><p class="eyebrow">Editable student profile</p><h2>${escapeHtml(p.name)}</h2></div><span class="avatar-sm">${escapeHtml(p.avatar)}</span></div>
    <div class="form-grid">
      ${profileInput("avatar", "Avatar Letters", p.avatar)}
      ${profileInput("name", "Name", p.name)}
      ${profileInput("college", "College", p.college)}
      ${profileInput("year", "Year", p.year)}
      ${profileInput("favorite", "Favorite Programming Language", p.favorite)}
      <label>Bio<textarea id="profile_bio" class="input">${escapeHtml(p.bio)}</textarea></label>
    </div>
    <div class="actions"><button class="btn primary" data-save-profile="1">Save Profile</button></div>
    <div class="grid three-col" style="margin-top:16px">
      <div class="card"><h3>Current Level</h3><p>${state.level}</p></div>
      <div class="card"><h3>Total XP</h3><p>${state.xp}</p></div>
      <div class="card"><h3>Completed Lessons</h3><p>${done}</p></div>
      <div class="card"><h3>Achievements</h3><p>${Object.values(state.achievements).filter(Boolean).length}</p></div>
      <div class="card"><h3>Quiz Accuracy</h3><p>${acc}%</p></div>
      <div class="card"><h3>Coding Progress</h3><p>${state.codeRuns} runs</p></div>
      <div class="card"><h3>Study Identity</h3><p>${escapeHtml(p.year)} BTech student focused on ${escapeHtml(p.favorite)}.</p></div>
    </div></section>`;
}

function profileInput(id, label, value) {
  return `<label>${label}<input id="profile_${id}" class="input" value="${escapeAttr(value)}"></label>`;
}

function saveProfile() {
  ["avatar", "name", "college", "year", "favorite"].forEach(k => state.profile[k] = document.getElementById(`profile_${k}`).value.trim());
  state.profile.bio = document.getElementById("profile_bio").value.trim();
  save();
  toast("Profile saved locally.");
  render();
}

function renderSettings() {
  return `<section class="panel">
    <div class="section-title"><div><p class="eyebrow">Control center</p><h2>Settings & Premium</h2><p>Personalize CodeZ for college study, projects, and placement prep.</p></div></div>
    <div class="grid two-col">
      <div class="card">
        <h3>Appearance</h3>
        <div class="segmented"><button class="tab ${state.preferences.theme === "light" ? "active" : ""}" data-theme="light">Light Mode</button><button class="tab ${state.preferences.theme === "dark" ? "active" : ""}" data-theme="dark">Dark Mode</button></div>
        ${settingRow("animations", "Smooth Animations", "Keep transitions, loaders, and reward effects enabled.")}
        ${settingRow("focusMode", "Focus Mode", "Reduce visual noise while studying lessons.")}
      </div>
      <div class="card">
        <h3>Study Preferences</h3>
        <label>Weekly Lesson Goal<input id="weeklyGoal" class="input" type="number" min="1" max="30" value="${state.weeklyGoal}"></label>
        <div class="segmented"><button class="tab ${state.preferences.aiStyle === "coach" ? "active" : ""}" data-ai-style="coach">Coach AI</button><button class="tab ${state.preferences.aiStyle === "strict" ? "active" : ""}" data-ai-style="strict">Strict AI</button></div>
        ${settingRow("sound", "Sound Effects", "Play short reward sounds when enabled.")}
        ${settingRow("notifications", "Notifications", "Show local progress reminders and reward toasts.")}
      </div>
    </div>
    <div class="grid two-col" style="margin-top:16px">
      <div class="card">
        <h3>Study Notes</h3>
        <textarea id="studyNotes" class="input" placeholder="Write quick exam notes, weak topics, or project ideas...">${escapeHtml(state.notes)}</textarea>
      </div>
      <div class="card">
        <h3>Data Management</h3>
        <p>Progress, theme, profile, leaderboard, achievements, quizzes, and settings are saved locally in this browser.</p>
        <div class="actions"><button class="btn danger" data-reset-progress="1">Reset Progress</button><button class="btn danger" data-reset-leaderboard="1">Reset Leaderboard</button></div>
      </div>
    </div>
    <div class="section-title"><div><p class="eyebrow">Upgrade option</p><h2>CodeZ Premium</h2></div><strong>Current: ${planLabel(state.preferences.premiumPlan)}</strong></div>
    <div class="premium-grid">
      ${premiumPlan("weekly", "Weekly", "₹79", "Best for exam week", ["Unlimited AI questions", "Viva prep cards", "Smart revision planner", "Priority hints"])}
      ${premiumPlan("monthly", "Monthly", "₹199", "Most popular for semester study", ["Unlimited AI tutor", "Project idea generator", "Weak-topic analytics", "Downloadable notes"])}
      ${premiumPlan("yearly", "Yearly", "₹1499", "Best for full BTech year", ["Everything in monthly", "Placement roadmap", "Advanced mini projects", "Certificate-style progress report"])}
    </div>
  </section>`;
}

function settingRow(key, title, desc) {
  return `<div class="switch-row"><div><h3>${title}</h3><p>${desc}</p></div><button class="toggle ${state.preferences[key] ? "on" : ""}" data-setting="${key}" aria-label="${title}"><span></span></button></div>`;
}

function setTheme(theme) {
  state.preferences.theme = theme;
  save();
  render();
}

function setAiStyle(style) {
  state.preferences.aiStyle = style;
  save();
  render();
}

function buyPlan(plan) {
  state.preferences.premiumPlan = plan;
  save();
  toast(`CodeZ Premium ${planLabel(plan)} activated for demo.`);
  render();
}

function premiumPlan(id, name, price, highlight, features) {
  const active = state.preferences.premiumPlan === id;
  return `<div class="card plan-card ${active ? "active" : ""}">
    <div class="meta-row"><h3>${name}</h3><strong>${price}</strong></div>
    <p>${highlight}</p>
    <ul>${features.map(f => `<li>${f}</li>`).join("")}</ul>
    <button class="btn ${active ? "" : "primary"}" data-buy-plan="${id}">${active ? "Active Plan" : `Buy ${name}`}</button>
  </div>`;
}

function planLabel(plan) {
  return ({ free: "Free", weekly: "Weekly", monthly: "Monthly", yearly: "Yearly" })[plan] || "Free";
}

function toggleSetting(key) {
  state.preferences[key] = !state.preferences[key];
  save();
  render();
}

function resetProgress() {
  const keepTheme = state.preferences.theme;
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  state.preferences.theme = keepTheme;
  save();
  toast("Progress reset.");
  navigate("dashboard");
}

function tipOfDay() {
  const tips = ["Trace loops with a table of variable values.", "Read compiler errors from the first error downward.", "Practice with tiny examples before mini projects.", "Name variables for meaning, not for speed.", "A failed quiz is a map, not a verdict."];
  return tips[new Date().getDate() % tips.length];
}

function uid() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") return globalThis.crypto.randomUUID();
  return `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function toast(message) {
  const host = document.getElementById("toastHost");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  host.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  const size = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
  size();
  const pieces = Array.from({ length: 90 }, () => ({ x: Math.random() * canvas.width, y: -20, s: 4 + Math.random() * 6, v: 2 + Math.random() * 5, c: ["#3d73dd", "#24a68a", "#f4a62a", "#7865d8"][Math.floor(Math.random() * 4)] }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => { p.y += p.v; p.x += Math.sin((frame + p.y) / 18); ctx.fillStyle = p.c; ctx.fillRect(p.x, p.y, p.s, p.s * 1.5); });
    frame += 1;
    if (frame < 120) requestAnimationFrame(draw); else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[ch]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

init();
