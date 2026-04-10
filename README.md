# 🦅 HBA Season 3 Quiz App
**Hyderabad Bird Atlas · Feb 2026 Closing Ceremony**

A free, self-hosted live quiz that works like Mentimeter —
participants join on their phones, answers sync in real time,
word clouds and leaderboards update live on the host screen.

---

## ⚡ Quick Setup (20 minutes total)

### STEP 1 — Create a free Firebase project (10 min)

1. Go to **https://console.firebase.google.com**
2. Click **"Add project"** → give it any name (e.g. `hba-quiz`) → Continue → Continue
3. Once the project is created, click the **`</>`** (Web) icon on the project homepage
4. Give the app any nickname (e.g. `hba-quiz-web`) → click **Register app**
5. You'll see a block of code starting with `firebaseConfig = {`. **Copy all of it.**
6. Open **`config.js`** in this folder and paste your values replacing the placeholder text

Then set up the database:

7. In the left sidebar → **Build → Realtime Database → Create database**
8. Choose any region (e.g. Asia-Southeast) → click **Next**
9. Select **"Start in test mode"** → click **Enable**
10. Done! Your database URL will look like: `https://your-project-default-rtdb.region.firebasedatabase.app`
    Make sure this matches `databaseURL` in your config.js

---

### STEP 2 — Pick your questions (5 min)

Open **`questions.js`** and delete or comment out questions you don't want.

**Recommended format:** 5 word cloud (survey experience) + 12 MCQ (competitive)

To remove a question, delete its entire `{ ... },` block.

---

### STEP 3 — Put it on GitHub Pages (5 min)

1. Go to **https://github.com/new** → create a new **public** repository (e.g. `hba-quiz`)
2. Upload all 4 files: `host.html`, `player.html`, `config.js`, `questions.js`
3. Go to repository **Settings → Pages → Source → Deploy from branch → main → / (root) → Save**
4. After 1-2 minutes your app will be live at:
   `https://YOUR-GITHUB-USERNAME.github.io/hba-quiz/`

Your two URLs will be:
- **Host screen:** `https://YOUR-USERNAME.github.io/hba-quiz/host.html`
- **Participants:** `https://YOUR-USERNAME.github.io/hba-quiz/player.html`

---

## 🎮 On Event Day

### Host laptop (project this on the big screen)
1. Open `host.html` in Chrome
2. Click **"Start as Host"**
3. A QR code and room code will appear — this is what participants scan/enter

### Participants (their phones)
1. Scan the QR code OR open the player URL in their browser
2. Enter their name + the room code → Join
3. They'll see questions appear automatically when you advance them

### Hosting the quiz
- **▶ Start Quiz** — begins the first question
- **👁 Reveal Answer** — shows correct answer + awards points automatically
- **⏭ Next** — moves to the next question
- **🏆 Leaderboard** — shows scores between questions (great for suspense!)
- **🎉 Final Results** — podium + full leaderboard at the end

---

## 📁 Files

| File | Purpose |
|------|---------|
| `host.html` | Host/presenter screen — project on big screen |
| `player.html` | Participant screen — opens on phones |
| `config.js` | Your Firebase credentials — **edit this first** |
| `questions.js` | All quiz questions — edit to pick your set |
| `README.md` | This file |

---

## 🛡️ Security Note

The Firebase test mode rules allow anyone to read/write to your database.
This is fine for a one-day event. After the event, you can delete the
Firebase project or change the rules to disable all access.

---

## 🐦 Features

- ✅ Word cloud questions (open text, live updates)
- ✅ MCQ questions with live response counts
- ✅ Auto-scoring with speed bonus
- ✅ Real-time leaderboard
- ✅ Podium view for final results
- ✅ QR code for easy joining
- ✅ Works on any phone browser — no app download
- ✅ 100+ participants supported
- ✅ Completely free

---

*Built for HBA Season 3 Closing Ceremony · Feb 2026*
*Mapping Birds. Building Awareness. 🦅*
