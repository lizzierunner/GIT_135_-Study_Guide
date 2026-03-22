// GIT 135 Study App - Main Application Logic
// ADHD-Friendly Study App with Flashcards, Quizzes, and Progress Tracking

// ========== STATE MANAGEMENT ==========
let currentView = 'dashboard';
let currentQuizType = null; // 'adobe', 'plp', or 'mod2'
let currentFlashcardIndex = 0;
let currentQuestionIndex = 0;
let quizScore = 0;
let currentQuizQuestions = [];
let selectedAnswer = null;
let currentFlashcards = [];
let filteredFlashcards = [];
let isFlashcardFlipped = false;

// Timer state
let timerDuration = 25 * 60; // 25 minutes in seconds
let timerInterval = null;
let timerRunning = false;

// Progress tracking
let progressData = {
  streak: 0,
  points: 0,
  quizzesCompleted: 0,
  totalCorrect: 0,
  totalQuestions: 0,
  lastStudyDate: null,
  quizResults: []
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
  loadProgress();
  updateDashboard();
  navigateTo('dashboard');
});

// ========== NAVIGATION ==========
function navigateTo(view) {
  // Hide all views
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  
  // Show selected view
  const viewElement = document.getElementById(view + 'View');
  if (viewElement) {
    viewElement.style.display = 'block';
  }
  
  currentView = view;
  
  // Update header
  updateHeader(view);
  
  // Update dashboard if navigating to it
  if (view === 'dashboard') {
    updateDashboard();
  }
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
    
    switch(view) {
      case 'quizSelection':
        headerTitle.textContent = 'Choose Quiz';
        break;
      case 'flashcards':
        headerTitle.textContent = currentQuizType === 'adobe' ? 'Adobe Essentials' : 
                                   currentQuizType === 'mod2' ? 'Design Principles' : 'Point Line Plane';
        break;
      case 'quiz':
        headerTitle.textContent = currentQuizType === 'adobe' ? 'Adobe Essentials Quiz' : 
                                   currentQuizType === 'mod2' ? 'Design Principles Quiz' : 'Point Line Plane Quiz';
        break;
      case 'results':
        headerTitle.textContent = 'Quiz Results';
        break;
    }
  }
}

function updateHeaderStats() {
  document.getElementById('streakDisplay').textContent = `🔥 ${progressData.streak}`;
  document.getElementById('pointsDisplay').textContent = `⭐ ${progressData.points}`;
}

// Back button handler
document.getElementById('backBtn').addEventListener('click', function() {
  if (currentView === 'results') {
    navigateTo('quizSelection');
  } else if (currentView === 'quiz' || currentView === 'flashcards') {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
      navigateTo('quizSelection');
    }
  } else {
    navigateTo('dashboard');
  }
});

// ========== DASHBOARD ==========
function updateDashboard() {
  // Update stats
  document.getElementById('dashStreakValue').textContent = progressData.streak;
  document.getElementById('dashPointsValue').textContent = progressData.points;
  document.getElementById('dashCompletedValue').textContent = progressData.quizzesCompleted;
  
  // Calculate accuracy
  const accuracy = progressData.totalQuestions > 0 
    ? Math.round((progressData.totalCorrect / progressData.totalQuestions) * 100)
    : 0;
  document.getElementById('dashAccuracyValue').textContent = accuracy + '%';
  
  // Update streak
  updateStreak();
}

function showTimer() {
  const timerSection = document.getElementById('timerSection');
  timerSection.style.display = timerSection.style.display === 'none' ? 'block' : 'none';
}

// ========== TIMER ==========
function setTimer(minutes) {
  timerDuration = minutes * 60;
  updateTimerDisplay();
  
  // Update active preset button
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

function startTimer() {
  if (timerRunning) return;
  
  timerRunning = true;
  document.getElementById('startTimerBtn').style.display = 'none';
  document.getElementById('pauseTimerBtn').style.display = 'inline-block';
  
  timerInterval = setInterval(function() {
    timerDuration--;
    updateTimerDisplay();
    
    if (timerDuration <= 0) {
      pauseTimer();
      alert('⏰ Time\'s up! Great study session!');
      // Award points for completing timer
      progressData.points += 10;
      saveProgress();
      updateHeaderStats();
    }
  }, 1000);
}

function pauseTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
  document.getElementById('startTimerBtn').style.display = 'inline-block';
  document.getElementById('pauseTimerBtn').style.display = 'none';
}

function resetTimer() {
  pauseTimer();
  const activeBtn = document.querySelector('.preset-btn.active');
  const minutes = activeBtn ? parseInt(activeBtn.textContent) : 25;
  timerDuration = minutes * 60;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerDuration / 60);
  const seconds = timerDuration % 60;
  const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timerDisplay').textContent = display;
}

// ========== QUIZ SELECTION ==========
function startQuiz(type) {
  currentQuizType = type;
  
  // Get quiz questions based on type
  if (type === 'adobe') {
    currentQuizQuestions = shuffleArray([...adobeQuizQuestions]);
  } else if (type === 'mod2') {
    currentQuizQuestions = shuffleArray([...mod2QuizQuestions]);
  } else {
    currentQuizQuestions = shuffleArray([...plpQuizQuestions]);
  }
  
  // Reset quiz state
  currentQuestionIndex = 0;
  quizScore = 0;
  
  // Navigate to quiz
  navigateTo('quiz');
  loadQuestion();
}

function startFlashcards(type) {
  currentQuizType = type;
  
  // Get flashcards based on type
  if (type === 'adobe') {
    currentFlashcards = [...adobeFlashcards];
  } else if (type === 'mod2') {
    currentFlashcards = [...mod2Flashcards];
  } else {
    currentFlashcards = [...plpFlashcards];
  }
  
  filteredFlashcards = [...currentFlashcards];
  currentFlashcardIndex = 0;
  
  // Navigate to flashcards
  navigateTo('flashcards');
  loadFlashcard();
  setupTopicFilters();
}

// ========== FLASHCARDS ==========
function loadFlashcard() {
  if (filteredFlashcards.length === 0) {
    return;
  }
  
  const flashcard = filteredFlashcards[currentFlashcardIndex];
  const flashcardInner = document.getElementById('flashcardInner');
  
  // Reset flip state
  flashcardInner.classList.remove('flipped');
  isFlashcardFlipped = false;
  
  // Update content
  document.getElementById('flashcardQuestion').textContent = flashcard.question;
  document.getElementById('flashcardAnswer').textContent = flashcard.answer;
  document.getElementById('flashcardTitle').textContent = 
    `${currentQuizType === 'adobe' ? 'Adobe Essentials' : currentQuizType === 'mod2' ? 'Design Principles' : 'Point Line Plane'} - ${flashcard.topic}`;
  document.getElementById('flashcardCounter').textContent = 
    `${currentFlashcardIndex + 1} / ${filteredFlashcards.length}`;
  
  // Update navigation buttons
  document.getElementById('prevFlashcard').disabled = currentFlashcardIndex === 0;
  document.getElementById('nextFlashcard').textContent = 
    currentFlashcardIndex === filteredFlashcards.length - 1 ? 'Finish' : 'Next →';
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
    // Finished all flashcards
    progressData.points += 5;
    saveProgress();
    alert('🎉 Great job! You\'ve reviewed all flashcards! +5 points');
    navigateTo('quizSelection');
  }
}

function previousFlashcard() {
  if (currentFlashcardIndex > 0) {
    currentFlashcardIndex--;
    loadFlashcard();
  }
}

function setupTopicFilters() {
  const topicFilters = document.getElementById('topicFilters');
  topicFilters.innerHTML = '';
  
  // Get unique topics
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
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent === topic || topic === 'all') {
      if (topic === 'all' && btn.textContent === 'All') {
        btn.classList.add('active');
      } else if (btn.textContent === topic) {
        btn.classList.add('active');
      }
    }
  });
  
  if (topic === 'all') {
    filteredFlashcards = [...currentFlashcards];
  } else {
    filteredFlashcards = currentFlashcards.filter(f => f.topic === topic);
  }
  
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
  
  // Update progress bar
  const progress = ((currentQuestionIndex) / currentQuizQuestions.length) * 100;
  document.getElementById('quizProgressFill').style.width = progress + '%';
  
  // Update counter
  document.getElementById('quizCounter').textContent = 
    `Question ${currentQuestionIndex + 1} / ${currentQuizQuestions.length}`;
  document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
  
  // Update question
  document.getElementById('questionTopic').textContent = question.topic;
  document.getElementById('questionText').textContent = question.question;
  
  // Update options
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option;
    button.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(button);
  });
  
  // Hide explanation
  document.getElementById('explanationCard').style.display = 'none';
}

function selectAnswer(answerIndex) {
  if (selectedAnswer !== null) return; // Already answered
  
  selectedAnswer = answerIndex;
  const question = currentQuizQuestions[currentQuestionIndex];
  const isCorrect = answerIndex === question.correctAnswer;
  
  // Update buttons
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correctAnswer) {
      btn.classList.add('correct');
    } else if (index === answerIndex && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });
  
  // Update score
  if (isCorrect) {
    quizScore++;
    progressData.points += 10;
  }
  
  // Update progress
  progressData.totalQuestions++;
  if (isCorrect) {
    progressData.totalCorrect++;
  }
  
  // Show explanation
  showExplanation(isCorrect, question.explanation);
  
  // Save progress
  saveProgress();
  updateHeaderStats();
}

function showExplanation(isCorrect, explanation) {
  const explanationCard = document.getElementById('explanationCard');
  const explanationIcon = document.getElementById('explanationIcon');
  const explanationTitle = document.getElementById('explanationTitle');
  const explanationText = document.getElementById('explanationText');
  
  if (isCorrect) {
    explanationIcon.textContent = '✓';
    explanationTitle.textContent = 'Correct!';
    explanationTitle.className = 'explanation-title correct';
  } else {
    explanationIcon.textContent = '✗';
    explanationTitle.textContent = 'Not quite!';
    explanationTitle.className = 'explanation-title incorrect';
  }
  
  explanationText.textContent = explanation;
  explanationCard.style.display = 'block';
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
  
  // Update completion count
  progressData.quizzesCompleted++;
  
  // Save quiz result
  progressData.quizResults.push({
    type: currentQuizType,
    score: quizScore,
    total: totalQuestions,
    percentage: percentage,
    date: new Date().toISOString()
  });
  
  saveProgress();
  
  // Update results display
  document.getElementById('resultsFinalScore').textContent = `${quizScore}/${totalQuestions}`;
  document.getElementById('resultsPercentage').textContent = percentage + '%';
  document.getElementById('resultsCorrect').textContent = quizScore;
  document.getElementById('resultsIncorrect').textContent = incorrect;
  document.getElementById('resultsPoints').textContent = pointsEarned;
  
  // Update icon and message based on percentage
  let icon, message;
  if (percentage >= 90) {
    icon = '🎉';
    message = 'Outstanding! You\'re a master!';
  } else if (percentage >= 75) {
    icon = '🌟';
    message = 'Great job! Keep it up!';
  } else if (percentage >= 60) {
    icon = '👍';
    message = 'Good effort! Review and try again!';
  } else {
    icon = '📚';
    message = 'Keep studying! You\'ll get there!';
  }
  
  document.getElementById('resultsIcon').textContent = icon;
  document.getElementById('resultsTitle').textContent = 'Quiz Complete!';
  document.getElementById('resultsMessage').textContent = message;
  
  // Navigate to results
  navigateTo('results');
}

// ========== PROGRESS TRACKING ==========
function loadProgress() {
  const saved = localStorage.getItem('git135Progress');
  if (saved) {
    progressData = JSON.parse(saved);
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
      // Consecutive day
      progressData.streak++;
    } else if (lastStudy !== null) {
      // Streak broken
      progressData.streak = 1;
    } else {
      // First time
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
