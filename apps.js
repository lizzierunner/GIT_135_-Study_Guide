// GIT 135 Study App - Main Application Logic
// EXTREMELY ADHD-Friendly Study App 🧠✨
// Confetti, combos, dark mode, keyboard shortcuts, XP levels, dopamine hits!

// ========== STATE MANAGEMENT ==========
let currentView = 'dashboard';
let currentQuizType = null; // 'adobe', 'plp', 'mod2', or 'random'
let currentFlashcardIndex = 0;
let currentQuestionIndex = 0;
let quizScore = 0;
let currentQuizQuestions = [];
let selectedAnswer = null;
let currentFlashcards = [];
let filteredFlashcards = [];
let isFlashcardFlipped = false;
let missedQuestions = [];
let comboCount = 0;
let maxCombo = 0;
let darkMode = false;
let timerTotalDuration = 25 * 60;

// Timer state
let timerDuration = 25 * 60;
let timerInterval = null;
let timerRunning = false;

// Progress tracking
let progressData = {
  streak: 0,
  points: 0,
  level: 1,
  quizzesCompleted: 0,
  totalCorrect: 0,
  totalQuestions: 0,
  lastStudyDate: null,
  quizResults: [],
  badges: [],
  flashcardsReviewed: 0,
  totalCombo: 0
};

// Level thresholds
const LEVELS = [
  { level: 1, xp: 0, title: 'Newbie', emoji: '🌱' },
  { level: 2, xp: 50, title: 'Learner', emoji: '📚' },
  { level: 3, xp: 150, title: 'Student', emoji: '✏️' },
  { level: 4, xp: 300, title: 'Scholar', emoji: '🎓' },
  { level: 5, xp: 500, title: 'Expert', emoji: '⭐' },
  { level: 6, xp: 750, title: 'Master', emoji: '🏆' },
  { level: 7, xp: 1000, title: 'Legend', emoji: '👑' },
  { level: 8, xp: 1500, title: 'Design God', emoji: '🔥' }
];

// Motivational messages
const MOTIVATION = [
  "You showed up. That's literally the hardest part. 💪",
  "Your future self is gonna THANK you for this. 🙌",
  "One question at a time. You got this! 🧠",
  "ADHD brain = creative brain = designer brain! ✨",
  "Even 5 minutes of study counts. Let's go! ⚡",
  "You're building knowledge neurons RIGHT NOW! 🧬",
  "Progress > perfection. Always. 💜",
  "The fact that you opened this app? Already winning. 🏆",
  "Brains are like muscles. Yours is getting SWOLE. 💪🧠",
  "Plot twist: you actually know more than you think! 🎭"
];

const CORRECT_REACTIONS = [
  "YESSS! 🔥", "Nailed it! 💅", "BIG BRAIN! 🧠", "Unstoppable! 🚀",
  "That's what I'm talking about! 💪", "SHEEEESH! ✨", "On fire! 🔥🔥",
  "Too easy for you! 😎", "Genius alert! 🚨", "Slay! 💅✨",
  "Main character energy! 🌟", "No notes! Perfect! 📝"
];

const WRONG_REACTIONS = [
  "Almost! You'll get it next time! 💪", "Learning moment! That's growth! 🌱",
  "Now you'll NEVER forget this one! 🧠", "Plot twist for your brain! 🎭",
  "Oopsie! But now you know! ✨", "That's how brains learn — mistakes! 🔬",
  "Shake it off! Next one's yours! 💃", "Knowledge unlocked for next time! 🔓"
];

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
  loadProgress();
  loadDarkMode();
  updateDashboard();
  navigateTo('dashboard');
  setupKeyboardShortcuts();
});

// ========== DARK MODE ==========
function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  const btn = document.getElementById('darkModeToggle');
  btn.textContent = darkMode ? '☀️' : '🌙';
  localStorage.setItem('git135DarkMode', darkMode);
}

function loadDarkMode() {
  const saved = localStorage.getItem('git135DarkMode');
  if (saved === 'true') {
    darkMode = true;
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeToggle').textContent = '☀️';
  }
}

// ========== KEYBOARD SHORTCUTS ==========
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Don't trigger if typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch(currentView) {
      case 'flashcards':
        if (e.code === 'Space') { e.preventDefault(); flipCard(); }
        if (e.code === 'ArrowRight' || e.code === 'KeyN') nextFlashcard();
        if (e.code === 'ArrowLeft' || e.code === 'KeyP') previousFlashcard();
        if (e.code === 'Digit1') markConfidence('hard');
        if (e.code === 'Digit2') markConfidence('ok');
        if (e.code === 'Digit3') markConfidence('easy');
        break;
      case 'quiz':
        if (e.code === 'Digit1') selectAnswer(0);
        if (e.code === 'Digit2') selectAnswer(1);
        if (e.code === 'Digit3') selectAnswer(2);
        if (e.code === 'Digit4') selectAnswer(3);
        if (e.code === 'Enter' && selectedAnswer !== null) nextQuestion();
        break;
    }

    // Global shortcuts
    if (e.code === 'KeyD' && !e.ctrlKey && !e.metaKey) {
      if (currentView === 'dashboard') toggleDarkMode();
    }
  });
}

// ========== NAVIGATION ==========
function navigateTo(view) {
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  const viewElement = document.getElementById(view + 'View');
  if (viewElement) {
    viewElement.style.display = 'block';
  }
  currentView = view;
  updateHeader(view);
  if (view === 'dashboard') {
    updateDashboard();
  }
  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateHeader(view) {
  const backBtn = document.getElementById('backBtn');
  const headerTitle = document.getElementById('headerTitle');
  const headerStats = document.getElementById('headerStats');

  if (view === 'dashboard') {
    backBtn.style.display = 'none';
    headerTitle.textContent = 'GIT 135 Study App';
    headerStats.style.display = 'none';
  } else {
    backBtn.style.display = 'inline-block';
    headerStats.style.display = 'flex';
    updateHeaderStats();

    const typeLabels = {
      'adobe': 'Adobe Essentials',
      'mod2': 'Design Principles',
      'mod3': 'Balance & Alignment',
      'plp': 'Point Line Plane',
      'random': 'Random Mix'
    };
    const label = typeLabels[currentQuizType] || 'Study';

    switch(view) {
      case 'quizSelection':
        headerTitle.textContent = 'Choose Your Quest ⚔️';
        break;
      case 'flashcards':
        headerTitle.textContent = label + ' 🗂️';
        break;
      case 'quiz':
        headerTitle.textContent = label + ' Quiz 📝';
        break;
      case 'results':
        headerTitle.textContent = 'Results! 🏆';
        break;
    }
  }
}

function updateHeaderStats() {
  document.getElementById('streakDisplay').textContent = '🔥 ' + progressData.streak;
  document.getElementById('pointsDisplay').textContent = '⭐ ' + progressData.points;
  const lvl = getCurrentLevel();
  document.getElementById('levelDisplay').textContent = 'Lv ' + lvl.level + ' ' + lvl.emoji;
}

// Back button handler
document.getElementById('backBtn').addEventListener('click', function() {
  if (currentView === 'results') {
    navigateTo('quizSelection');
  } else if (currentView === 'quiz' || currentView === 'flashcards') {
    if (confirm('Leave? Your progress on this quiz won\'t be saved. 🥺')) {
      navigateTo('quizSelection');
    }
  } else {
    navigateTo('dashboard');
  }
});

// ========== DASHBOARD ==========
function updateDashboard() {
  document.getElementById('dashStreakValue').textContent = progressData.streak;
  document.getElementById('dashPointsValue').textContent = progressData.points;
  document.getElementById('dashCompletedValue').textContent = progressData.quizzesCompleted;

  const accuracy = progressData.totalQuestions > 0
    ? Math.round((progressData.totalCorrect / progressData.totalQuestions) * 100) : 0;
  document.getElementById('dashAccuracyValue').textContent = accuracy + '%';

  // Update level display
  const lvl = getCurrentLevel();
  const nextLvl = getNextLevel();
  document.getElementById('dashLevel').textContent = 'Level ' + lvl.level + ' ' + lvl.emoji + ' ' + lvl.title;
  if (nextLvl) {
    const xpNeeded = nextLvl.xp - progressData.points;
    document.getElementById('dashNextLevel').textContent = xpNeeded + ' XP to Level ' + nextLvl.level;
    const progress = ((progressData.points - lvl.xp) / (nextLvl.xp - lvl.xp)) * 100;
    document.getElementById('levelFill').style.width = Math.min(progress, 100) + '%';
  } else {
    document.getElementById('dashNextLevel').textContent = 'MAX LEVEL! 👑';
    document.getElementById('levelFill').style.width = '100%';
  }

  // Motivation banner
  const banner = document.getElementById('motivationBanner');
  if (banner) {
    banner.textContent = MOTIVATION[Math.floor(Math.random() * MOTIVATION.length)];
  }

  // Welcome message based on time
  const hour = new Date().getHours();
  const welcomeTitle = document.getElementById('welcomeTitle');
  if (hour < 12) welcomeTitle.textContent = 'Good Morning! ☀️';
  else if (hour < 17) welcomeTitle.textContent = 'Good Afternoon! 🌤️';
  else if (hour < 21) welcomeTitle.textContent = 'Evening Study Sesh! 🌆';
  else welcomeTitle.textContent = 'Late Night Grind! 🌙';

  updateStreak();
}

function showTimer() {
  const timerSection = document.getElementById('timerSection');
  timerSection.style.display = timerSection.style.display === 'none' ? 'block' : 'none';
  if (timerSection.style.display === 'block') {
    timerSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ========== LEVELS ==========
function getCurrentLevel() {
  let current = LEVELS[0];
  for (const lvl of LEVELS) {
    if (progressData.points >= lvl.xp) current = lvl;
  }
  return current;
}

function getNextLevel() {
  const current = getCurrentLevel();
  const idx = LEVELS.indexOf(current);
  return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
}

function checkLevelUp() {
  const newLevel = getCurrentLevel();
  if (newLevel.level > (progressData.level || 1)) {
    progressData.level = newLevel.level;
    showToast('🎉 LEVEL UP! You\'re now ' + newLevel.title + ' ' + newLevel.emoji + '!', 4000);
    fireConfetti();
    saveProgress();
  }
}

function awardXP(amount, reason) {
  progressData.points += amount;
  showXPPopup('+' + amount + ' XP ' + (reason || ''));
  checkLevelUp();
  saveProgress();
  updateHeaderStats();
}

// ========== TOAST NOTIFICATIONS ==========
function showToast(message, duration) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration || 3000);
}

// ========== XP POPUP ==========
function showXPPopup(text) {
  const popup = document.getElementById('xpPopup');
  popup.textContent = text;
  popup.classList.remove('show');
  void popup.offsetWidth; // force reflow
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 1500);
}

// ========== CONFETTI ==========
function fireConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const particles = [];
  const colors = ['#667eea', '#f5576c', '#f093fb', '#00f2fe', '#fbbf24', '#10b981', '#ef4444', '#8b5cf6'];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 2,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2,
      drift: (Math.random() - 0.5) * 2
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;
      p.angle += p.spin;
      if (p.y < canvas.height + 20) alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (alive && frame < 180) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }
  animate();
}

// Mini confetti burst for correct answers
function miniConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const particles = [];
  const colors = ['#10b981', '#fbbf24', '#667eea', '#f093fb'];
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 3;

  for (let i = 0; i < 30; i++) {
    const angle = (Math.PI * 2 * i) / 30;
    const speed = Math.random() * 4 + 2;
    particles.push({
      x: centerX, y: centerY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15;
      p.life -= 0.02;
      if (p.life > 0) {
        alive = true;
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.globalAlpha = 1;
    frame++;
    if (alive && frame < 60) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }
  animate();
}

// ========== TIMER ==========
function setTimer(minutes) {
  if (timerRunning) return;
  timerDuration = minutes * 60;
  timerTotalDuration = timerDuration;
  updateTimerDisplay();
  updateTimerRing();

  document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('timerStatus').textContent = 'Ready to focus! 🎯';
}

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  timerTotalDuration = timerDuration;
  document.getElementById('startTimerBtn').style.display = 'none';
  document.getElementById('pauseTimerBtn').style.display = 'inline-block';
  document.getElementById('timerStatus').textContent = 'Focusing... you got this! 💪';

  timerInterval = setInterval(function() {
    timerDuration--;
    updateTimerDisplay();
    updateTimerRing();

    if (timerDuration <= 0) {
      pauseTimer();
      showToast('⏰ Time\'s up! Amazing focus session! +15 XP!', 5000);
      awardXP(15, '⏱️');
      fireConfetti();
      document.getElementById('timerStatus').textContent = 'Done! You\'re amazing! 🎉';
    }
  }, 1000);
}

function pauseTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
  document.getElementById('startTimerBtn').style.display = 'inline-block';
  document.getElementById('pauseTimerBtn').style.display = 'none';
  if (timerDuration > 0) {
    document.getElementById('timerStatus').textContent = 'Paused — take a breather! 🧘';
  }
}

function resetTimer() {
  pauseTimer();
  const activeBtn = document.querySelector('.preset-btn.active');
  const minutes = activeBtn ? parseInt(activeBtn.textContent) : 25;
  timerDuration = minutes * 60;
  timerTotalDuration = timerDuration;
  updateTimerDisplay();
  updateTimerRing();
  document.getElementById('timerStatus').textContent = 'Ready to focus! 🎯';
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerDuration / 60);
  const seconds = timerDuration % 60;
  document.getElementById('timerDisplay').textContent =
    minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

function updateTimerRing() {
  const ring = document.getElementById('timerRingProgress');
  if (!ring) return;
  const circumference = 2 * Math.PI * 90;
  const progress = timerTotalDuration > 0 ? timerDuration / timerTotalDuration : 1;
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference * (1 - progress);
}

// ========== QUIZ SELECTION ==========
function startQuiz(type) {
  currentQuizType = type;
  if (type === 'adobe') currentQuizQuestions = shuffleArray([...adobeQuizQuestions]);
  else if (type === 'mod2') currentQuizQuestions = shuffleArray([...mod2QuizQuestions]);
  else if (type === 'mod3') currentQuizQuestions = shuffleArray([...mod3QuizQuestions]);
  else currentQuizQuestions = shuffleArray([...plpQuizQuestions]);

  currentQuestionIndex = 0;
  quizScore = 0;
  comboCount = 0;
  maxCombo = 0;
  missedQuestions = [];
  navigateTo('quiz');
  loadQuestion();
}

function startMiniQuiz(type) {
  currentQuizType = type;
  let pool;
  if (type === 'adobe') pool = [...adobeQuizQuestions];
  else if (type === 'mod2') pool = [...mod2QuizQuestions];
  else if (type === 'mod3') pool = [...mod3QuizQuestions];
  else pool = [...plpQuizQuestions];

  currentQuizQuestions = shuffleArray(pool).slice(0, 5);
  currentQuestionIndex = 0;
  quizScore = 0;
  comboCount = 0;
  maxCombo = 0;
  missedQuestions = [];
  showToast('⚡ Quick 5 mode! Let\'s speedrun this!', 2000);
  navigateTo('quiz');
  loadQuestion();
}

function startRandomQuiz() {
  currentQuizType = 'random';
  const allQuestions = [
    ...adobeQuizQuestions,
    ...plpQuizQuestions,
    ...mod2QuizQuestions,
    ...mod3QuizQuestions
  ];
  currentQuizQuestions = shuffleArray(allQuestions).slice(0, 5);
  currentQuestionIndex = 0;
  quizScore = 0;
  comboCount = 0;
  maxCombo = 0;
  missedQuestions = [];
  showToast('🎲 Random 5! A little bit of everything!', 2000);
  navigateTo('quiz');
  loadQuestion();
}

function retryMissed() {
  if (missedQuestions.length === 0) return;
  currentQuizQuestions = shuffleArray([...missedQuestions]);
  currentQuestionIndex = 0;
  quizScore = 0;
  comboCount = 0;
  maxCombo = 0;
  missedQuestions = [];
  showToast('🔄 Retry mode! You\'ve seen these before — crush it!', 2500);
  navigateTo('quiz');
  loadQuestion();
}

function startFlashcards(type) {
  currentQuizType = type;
  if (type === 'adobe') currentFlashcards = [...adobeFlashcards];
  else if (type === 'mod2') currentFlashcards = [...mod2Flashcards];
  else if (type === 'mod3') currentFlashcards = [...mod3Flashcards];
  else currentFlashcards = [...plpFlashcards];

  filteredFlashcards = [...currentFlashcards];
  currentFlashcardIndex = 0;
  navigateTo('flashcards');
  loadFlashcard();
  setupTopicFilters();

  // Show tap hint briefly
  const hint = document.getElementById('tapHint');
  if (hint) {
    hint.style.display = 'block';
    setTimeout(() => { hint.style.display = 'none'; }, 3000);
  }
}

// ========== FLASHCARDS ==========
function loadFlashcard() {
  if (filteredFlashcards.length === 0) return;

  const flashcard = filteredFlashcards[currentFlashcardIndex];
  const flashcardInner = document.getElementById('flashcardInner');

  // Reset flip
  flashcardInner.classList.remove('flipped');
  isFlashcardFlipped = false;

  document.getElementById('flashcardQuestion').textContent = flashcard.question;
  document.getElementById('flashcardAnswer').textContent = flashcard.answer;

  const typeLabels = { 'adobe': 'Adobe Essentials', 'mod2': 'Design Principles', 'mod3': 'Balance & Alignment', 'plp': 'Point Line Plane' };
  document.getElementById('flashcardTitle').textContent =
    (typeLabels[currentQuizType] || 'Study') + ' — ' + flashcard.topic;
  document.getElementById('flashcardCounter').textContent =
    (currentFlashcardIndex + 1) + ' / ' + filteredFlashcards.length;

  // Update progress bar
  const fill = document.getElementById('flashcardProgressFill');
  if (fill) {
    fill.style.width = ((currentFlashcardIndex + 1) / filteredFlashcards.length * 100) + '%';
  }

  document.getElementById('prevFlashcard').disabled = currentFlashcardIndex === 0;
  document.getElementById('nextFlashcard').textContent =
    currentFlashcardIndex === filteredFlashcards.length - 1 ? '🎉 Finish' : 'Next →';

  // Add bounce animation
  const card = document.getElementById('flashcard');
  card.classList.remove('card-enter');
  void card.offsetWidth;
  card.classList.add('card-enter');
}

function flipCard() {
  const flashcardInner = document.getElementById('flashcardInner');
  flashcardInner.classList.toggle('flipped');
  isFlashcardFlipped = !isFlashcardFlipped;
}

function nextFlashcard() {
  if (currentFlashcardIndex < filteredFlashcards.length - 1) {
    currentFlashcardIndex++;
    loadFlashcard();
  } else {
    progressData.flashcardsReviewed += filteredFlashcards.length;
    awardXP(10, '🗂️');
    showToast('🎉 All cards reviewed! +10 XP!', 3000);
    fireConfetti();
    navigateTo('quizSelection');
  }
}

function previousFlashcard() {
  if (currentFlashcardIndex > 0) {
    currentFlashcardIndex--;
    loadFlashcard();
  }
}

function markConfidence(level) {
  const msgs = {
    'hard': '😅 Marked hard — we\'ll focus on this!',
    'ok': '🤔 Getting there!',
    'easy': '😎 Easy peasy! You know this!'
  };
  showToast(msgs[level], 1500);
  // Auto-advance after marking
  setTimeout(() => nextFlashcard(), 600);
}

function setupTopicFilters() {
  const topicFilters = document.getElementById('topicFilters');
  topicFilters.innerHTML = '';
  const topics = [...new Set(currentFlashcards.map(f => f.topic))];
  topics.forEach(topic => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = topic;
    btn.onclick = () => filterFlashcards(topic);
    topicFilters.appendChild(btn);
  });
}

function filterFlashcards(topic) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if ((topic === 'all' && btn.textContent === 'All') || btn.textContent === topic) {
      btn.classList.add('active');
    }
  });
  filteredFlashcards = topic === 'all' ? [...currentFlashcards] : currentFlashcards.filter(f => f.topic === topic);
  currentFlashcardIndex = 0;
  loadFlashcard();
}

// ========== QUIZ ==========
function loadQuestion() {
  if (currentQuestionIndex >= currentQuizQuestions.length) {
    showResults();
    return;
  }

  const question = currentQuizQuestions[currentQuestionIndex];
  selectedAnswer = null;

  const progress = (currentQuestionIndex / currentQuizQuestions.length) * 100;
  document.getElementById('quizProgressFill').style.width = progress + '%';
  document.getElementById('quizCounter').textContent =
    'Question ' + (currentQuestionIndex + 1) + ' / ' + currentQuizQuestions.length;
  document.getElementById('quizScore').textContent = 'Score: ' + quizScore;

  document.getElementById('questionTopic').textContent = question.topic;
  document.getElementById('questionText').textContent = question.question;

  // Update combo display
  const comboEl = document.getElementById('comboDisplay');
  if (comboCount >= 2) {
    comboEl.style.display = 'flex';
    document.getElementById('comboCount').textContent = comboCount;
    comboEl.classList.remove('combo-pulse');
    void comboEl.offsetWidth;
    comboEl.classList.add('combo-pulse');
  } else {
    comboEl.style.display = 'none';
  }

  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.innerHTML = '<span class="option-number">' + (index + 1) + '</span> ' + option;
    button.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(button);
  });

  document.getElementById('explanationCard').style.display = 'none';

  // Animate question in
  const qCard = document.querySelector('.question-card');
  qCard.classList.remove('card-enter');
  void qCard.offsetWidth;
  qCard.classList.add('card-enter');
}

function selectAnswer(answerIndex) {
  if (selectedAnswer !== null) return;

  selectedAnswer = answerIndex;
  const question = currentQuizQuestions[currentQuestionIndex];
  const isCorrect = answerIndex === question.correctAnswer;

  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correctAnswer) {
      btn.classList.add('correct');
    } else if (index === answerIndex && !isCorrect) {
      btn.classList.add('incorrect');
      btn.classList.add('shake');
    }
  });

  if (isCorrect) {
    quizScore++;
    comboCount++;
    if (comboCount > maxCombo) maxCombo = comboCount;

    // Combo multiplier for XP
    let xp = 10;
    if (comboCount >= 5) xp = 20;
    else if (comboCount >= 3) xp = 15;
    awardXP(xp);
    miniConfetti();

    progressData.totalCorrect++;
  } else {
    comboCount = 0;
    missedQuestions.push(question);
  }

  progressData.totalQuestions++;
  showExplanation(isCorrect, question.explanation);
  saveProgress();
  updateHeaderStats();

  // Update combo display
  const comboEl = document.getElementById('comboDisplay');
  if (comboCount >= 2) {
    comboEl.style.display = 'flex';
    document.getElementById('comboCount').textContent = comboCount;
    comboEl.classList.remove('combo-pulse');
    void comboEl.offsetWidth;
    comboEl.classList.add('combo-pulse');
  } else {
    comboEl.style.display = 'none';
  }
}

function showExplanation(isCorrect, explanation) {
  const explanationCard = document.getElementById('explanationCard');
  const explanationIcon = document.getElementById('explanationIcon');
  const explanationTitle = document.getElementById('explanationTitle');
  const explanationText = document.getElementById('explanationText');

  if (isCorrect) {
    const reaction = CORRECT_REACTIONS[Math.floor(Math.random() * CORRECT_REACTIONS.length)];
    explanationIcon.textContent = '✅';
    explanationTitle.textContent = reaction;
    explanationTitle.className = 'explanation-title correct';
    if (comboCount >= 3) {
      explanationTitle.textContent = '🔥 ' + comboCount + 'x COMBO! ' + reaction;
    }
  } else {
    const reaction = WRONG_REACTIONS[Math.floor(Math.random() * WRONG_REACTIONS.length)];
    explanationIcon.textContent = '💡';
    explanationTitle.textContent = reaction;
    explanationTitle.className = 'explanation-title incorrect';
  }

  explanationText.textContent = explanation;
  explanationCard.style.display = 'block';
  explanationCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

// ========== RESULTS ==========
function showResults() {
  const totalQuestions = currentQuizQuestions.length;
  const percentage = Math.round((quizScore / totalQuestions) * 100);
  const incorrect = totalQuestions - quizScore;
  const pointsEarned = quizScore * 10;

  progressData.quizzesCompleted++;
  if (maxCombo > progressData.totalCombo) progressData.totalCombo = maxCombo;

  progressData.quizResults.push({
    type: currentQuizType,
    score: quizScore,
    total: totalQuestions,
    percentage: percentage,
    date: new Date().toISOString()
  });

  saveProgress();

  // Big confetti for good scores
  if (percentage >= 70) fireConfetti();

  document.getElementById('resultsFinalScore').textContent = quizScore + '/' + totalQuestions;
  document.getElementById('resultsPercentage').textContent = percentage + '%';
  document.getElementById('resultsCorrect').textContent = quizScore;
  document.getElementById('resultsIncorrect').textContent = incorrect;
  document.getElementById('resultsPoints').textContent = pointsEarned;

  // Retry missed button
  const retryBtn = document.getElementById('retryMissedBtn');
  if (retryBtn) {
    retryBtn.style.display = missedQuestions.length > 0 ? 'block' : 'none';
    retryBtn.textContent = '🔄 Retry ' + missedQuestions.length + ' Missed Questions';
  }

  let icon, title, message;
  if (percentage === 100) {
    icon = '👑'; title = 'PERFECT SCORE!';
    message = 'You are literally a genius. Not even exaggerating. 🧠✨';
  } else if (percentage >= 90) {
    icon = '🎉'; title = 'Almost Perfect!';
    message = 'You basically own this material. Incredible! 🔥';
  } else if (percentage >= 75) {
    icon = '🌟'; title = 'Great Job!';
    message = 'You\'re solidly in the zone! A little more review and you\'ll ace it! 💪';
  } else if (percentage >= 60) {
    icon = '👍'; title = 'Getting There!';
    message = 'Good foundation! Hit those flashcards and try the missed questions! 📚';
  } else if (percentage >= 40) {
    icon = '💪'; title = 'Building!';
    message = 'You\'re learning! Every wrong answer is a lesson. Try the missed Qs! 🌱';
  } else {
    icon = '📚'; title = 'Study Time!';
    message = 'No shame! Check the flashcards first, then retry. You\'ll improve fast! 🚀';
  }

  // Combo badge
  const badgesEl = document.getElementById('resultsBadges');
  if (badgesEl) {
    badgesEl.innerHTML = '';
    if (maxCombo >= 3) {
      badgesEl.innerHTML += '<span class="result-badge">🔥 Max Combo: ' + maxCombo + '</span>';
    }
    if (percentage === 100) {
      badgesEl.innerHTML += '<span class="result-badge">👑 Perfect Score!</span>';
    }
    if (currentQuizQuestions.length <= 5) {
      badgesEl.innerHTML += '<span class="result-badge">⚡ Quick Quiz</span>';
    }
  }

  document.getElementById('resultsIcon').textContent = icon;
  document.getElementById('resultsTitle').textContent = title;
  document.getElementById('resultsMessage').textContent = message;

  navigateTo('results');
}

// ========== PROGRESS TRACKING ==========
function loadProgress() {
  const saved = localStorage.getItem('git135Progress');
  if (saved) {
    const parsed = JSON.parse(saved);
    progressData = { ...progressData, ...parsed };
  }
}

function saveProgress() {
  localStorage.setItem('git135Progress', JSON.stringify(progressData));
}

function updateStreak() {
  const today = new Date().toDateString();
  const lastStudy = progressData.lastStudyDate;

  if (lastStudy !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastStudy === yesterday.toDateString()) {
      progressData.streak++;
    } else if (lastStudy !== null) {
      progressData.streak = 1;
    } else {
      progressData.streak = 1;
    }

    progressData.lastStudyDate = today;
    saveProgress();
  }
}

// ========== UTILITY FUNCTIONS ==========
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
