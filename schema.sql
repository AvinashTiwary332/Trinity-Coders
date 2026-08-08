CREATE DATABASE IF NOT EXISTS studybuddy;
USE studybuddy;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  bio TEXT,
  college VARCHAR(120),
  year_label VARCHAR(40),
  favorite_language VARCHAR(40),
  avatar VARCHAR(8),
  xp INT DEFAULT 0,
  level_no INT DEFAULT 1,
  streak INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE languages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(30) UNIQUE NOT NULL,
  name VARCHAR(80) NOT NULL
);

CREATE TABLE lessons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  language_id INT NOT NULL,
  lesson_no INT NOT NULL,
  title VARCHAR(120) NOT NULL,
  concept TEXT,
  syntax_note TEXT,
  example_code TEXT,
  revision_note TEXT,
  FOREIGN KEY (language_id) REFERENCES languages(id)
);

CREATE TABLE user_lesson_progress (
  user_id INT NOT NULL,
  lesson_id INT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  bookmarked BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP NULL,
  PRIMARY KEY (user_id, lesson_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);

CREATE TABLE quiz_scores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  lesson_id INT NOT NULL,
  score INT NOT NULL,
  taken_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);

CREATE TABLE achievements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(40) UNIQUE NOT NULL,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE user_achievements (
  user_id INT NOT NULL,
  achievement_id INT NOT NULL,
  unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, achievement_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (achievement_id) REFERENCES achievements(id)
);

CREATE TABLE leaderboard (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  level_no INT DEFAULT 1,
  xp INT DEFAULT 0,
  streak INT DEFAULT 0
);

INSERT INTO languages (slug, name) VALUES
('c', 'C Programming'),
('cpp', 'C++'),
('python', 'Python'),
('java', 'Java'),
('mysql', 'MySQL')
ON DUPLICATE KEY UPDATE name = VALUES(name);
