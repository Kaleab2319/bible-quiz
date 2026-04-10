// 1. DATABASE (Combined & Corrected)
const quizData = [
    // መጽሐፍ ቅዱስ - Level 1
    { question: "መጽሐፍ ቅዱስ በስንት ዋና ዋና ክፍሎች ይከፈላል?", options: ["2 (ብሉይና ሐዲስ)", "3", "4", "5"], correct: 0, category: "መጽሐፍ ቅዱስ", difficulty: 1 },
    { question: "የመጀመሪያው የሐዲስ ኪዳን መጽሐፍ የቱ ነው?", options: ["ማቴዎስ", "ማርቆስ", "ሉቃስ", "ዮሐንስ"], correct: 0, category: "መጽሐፍ ቅዱስ", difficulty: 1 },
    { question: "በብሉይ ኪዳን ረጅም ዕድሜ የኖረው ሰው ማነው?", options: ["ማቱሳላ", "አዳም", "ኖኅ", "ሄኖክ"], correct: 0, category: "መጽሐፍ ቅዱስ", difficulty: 1 },
    { question: "ኖኅ መርከቡን የሠራው ከምን ነበር?", options: ["ከማይበሰብስ እንጨት", "ከድንጋይ", "ከብረት", "ከሸክላ"], correct: 0, category: "መጽሐፍ ቅዱስ", difficulty: 1 },
    { question: "ባህሩን በከዘራው የከፈለው ነቢይ ማነው?", options: ["ሙሴ", "አሮን", "ኢያሱ", "ሳሙኤል"], correct: 0, category: "መጽሐፍ ቅዱስ", difficulty: 1 },
    
    // 5ቱ አዕማደ ምሥጢር - Level 1
    { question: "አምስቱ አዕማደ ምስጢር ምን ይባላሉ?", options: ["የሃይማኖት መሠረቶች", "የቤተክርስቲያን ሕግ", "ተረት", "ምሳሌ"], correct: 0, category: "5ቱ አዕማደ ምሥጢር", difficulty: 1 },
    { question: "እግዚአብሔር በስንት አካል ይመለካል?", options: ["በ3", "በ1", "በ2", "በ7"], correct: 0, category: "5ቱ አዕማደ ምሥጢር", difficulty: 1 },
    { question: "ጥምቀት በስንት ይደገማል?", options: ["አይደገምም (1 ጊዜ)", "2 ጊዜ", "3 ጊዜ", "እንደ አስፈላጊነቱ"], correct: 0, category: "5ቱ አዕማደ ምሥጢር", difficulty: 1 },

    // ነገረ ቅዱሳን - Level 1
    { question: "የመላእክት አለቃ ተብሎ የሚጠራው ማነው?", options: ["ቅዱስ ሚካኤል", "ቅዱስ ጳውሎስ", "አዳም", "ዮሐንስ"], correct: 0, category: "ነገረ ቅዱሳን", difficulty: 1 },
    { question: "እመቤታችን ቅድስት ድንግል ማርያም የማን እናት ናት?", options: ["የአምላክ እናት", "የመላእክት", "የነቢያት", "የተራ ሰው"], correct: 0, category: "ነገረ ቅዱሳን", difficulty: 1 },
    { question: "ቅዱስ ገብርኤል ለማን ምስራች ነገረ?", options: ["ለእመቤታችን", "ለኤልሳቤጥ", "ለሣራ", "ለሔዋን"], correct: 0, category: "ነገረ ቅዱሳን", difficulty: 1 },

    // ነገረ ሃይማኖት - Level 1
    { question: "ሊሻሻል የማይችል መለኮታዊ እውነት ምን ይባላል?", options: ["ዶግማ", "ቀኖና", "ትውፊት", "ልምድ"], correct: 0, category: "ነገረ ሃይማኖት", difficulty: 1 },
    { question: "ለቤተክርስቲያን ሥርዓትና አስተዳደር የሚወጣ ሕግ ምን ይባላል?", options: ["ቀኖና", "ዶግማ", "ታሪክ", "ምሳሌ"], correct: 0, category: "ነገረ ሃይማኖት", difficulty: 1 },
    { question: "ጾም በቤተክርስቲያን ውስጥ የትኛው ክፍል ነው?", options: ["ቀኖና (ሥርዓት)", "ዶግማ", "የግል ምርጫ", "ባህል"], correct: 0, category: "ነገረ ሃይማኖት", difficulty: 1 },

    // መጽሐፍ ቅዱስ - Level 2
    { question: "በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን የመጽሐፍ ቅዱስ ቁጥር ስንት ነው?", options: ["81", "66", "73", "45"], correct: 0, category: "መጽሐፍ ቅዱስ", difficulty: 2 },
    { question: "ቅዱስ ጳውሎስ ስንት መልእክታትን ጽፏል?", options: ["14", "12", "7", "21"], correct: 0, category: "መጽሐፍ ቅዱስ", difficulty: 2 },
    { question: "ጴጥሮስ ማለት ምን ማለት ነው?", options: ["አለት", "መሪ", "እረኛ", "ብርሃን"], correct: 0, category: "መጽሐፍ ቅዱስ", difficulty: 2 },

    // 5ቱ አዕማደ ምሥጢር - Level 2
    { question: "የአብ ግብር ምንድነው?", options: ["መውለድና ማስረፅ", "መወለድ", "መስረፅ", "መፍጠር"], correct: 0, category: "5ቱ አዕማደ ምሥጢር", difficulty: 2 },
    { question: "ወንድ ልጅ በስንት ቀኑ ይጠመቃል?", options: ["በ40 ቀን", "በ80 ቀን", "በ30 ቀን", "በ7 ቀን"], correct: 0, category: "5ቱ አዕማደ ምሥጢር", difficulty: 2 },

    // ነገረ ቅዱሳን - Level 2
    { question: "አቡነ ተክለ ሃይማኖት ስንት ክንፍ ተሰጣቸው ይባላል?", options: ["6", "2", "4", "8"], correct: 0, category: "ነገረ ቅዱሳን", difficulty: 2 },
    { question: "እመቤታችን በቤተ መቅደስ ስንት ዓመት ኖረች?", options: ["12 ዓመት", "3 ዓመት", "7 ዓመት", "15 ዓመት"], correct: 0, category: "ነገረ ቅዱሳን", difficulty: 2 },

    // ነገረ ሃይማኖት - Level 2
    { question: "ትውፊት በስንት ይከፈላል?", options: ["በ2 (መጽሐፋዊና ቃላዊ)", "በ3", "በ4", "በ5"], correct: 0, category: "ነገረ ሃይማኖት", difficulty: 2 },
    { question: "ዶግማ መነሻው ምንድነው?", options: ["መለኮታዊ መገለጥ", "የሰው ፍልስፍና", "የሳይንስ ግኝት", "የንጉሥ ትዕዛዝ"], correct: 0, category: "ነገረ ሃይማኖት", difficulty: 2 },

    // መጽሐፍ ቅዱስ - Level 3
    { question: "የሉቃስ ወንጌል የተጻፈው ለማን ነበር?", options: ["ለክብሩ ቴዎፍሎስ", "ለሮሜ ሰዎች", "ለቆሮንቶስ", "ለአይሁድ"], correct: 0, category: "መጽሐፍ ቅዱስ", difficulty: 3 },
    { question: "የዮሐንስ ራእይ የተጻፈው በየትኛው ደሴት ነው?", options: ["በፍጥሞ", "በቆጵሮስ", "በቀርጤስ", "በኤፌሶን"], correct: 0, category: "መጽሐፍ ቅዱስ", difficulty: 3 },

    // 5ቱ አዕማደ ምሥጢር - Level 3
    { question: "ተዋሕዶ ማለት ምን ማለት ነው?", options: ["መለኮትና ትስብእት አንድ መሆናቸው", "መከፋፈል", "መቀላቀል", "መለወጥ"], correct: 0, category: "5ቱ አዕማደ ምሥጢር", difficulty: 3 },
    { question: "ክርስቶስ ስንት ባሕርይ አለው?", options: ["አንድ (የተዋሐደ)", "ሁለት", "ሦስት", "አራት"], correct: 0, category: "5ቱ አዕማደ ምሥጢር", difficulty: 3 },

    // ነገረ ቅዱሳን - Level 3
    { question: "የመላእክት ሰራዊት በስንት ይከፈላሉ?", options: ["በ10 ነገድ", "በ3 ነገድ", "በ5 ነገድ", "በ12 ነገድ"], correct: 0, category: "ነገረ ቅዱሳን", difficulty: 3 },
    { question: "ቅዱስ ኤፍሬም ሶርያዊ ምን ተብሎ ይጠራል?", options: ["የድንግል ማርያም አዝማሪ", "ነቢይ", "ሐዋርያ", "ንጉሥ"], correct: 0, category: "ነገረ ቅዱሳን", difficulty: 3 },

    // ነገረ ሃይማኖት - Level 3
    { question: "ትውፊት ከመጽሐፍ ቅዱስ ይቀድማል ወይስ ይከተላል?", options: ["ይቀድማል (መጽሐፍ ቅዱስ ከመጻፉ በፊት ትውፊት ነበር)", "ይከተላል", "እኩል ናቸው", "አይገናኙም"], correct: 0, category: "ነገረ ሃይማኖት", difficulty: 3 },
    { question: "አንድ ቀኖና ከዶግማ ጋር ቢቃረን ምን ይሆናል?", options: ["ቀኖናው ውድቅ ይደረጋል", "ዶግማው ይለወጣል", "ሁለቱም ይቆያሉ", "አይከሰትም"], correct: 0, category: "ነገረ ሃይማኖት", difficulty: 3 }
];

// 2. STATE & PERSISTENCE
let userProfile = JSON.parse(localStorage.getItem('bibleAppProfile')) || {
    totalPoints: 0,
    weakTopics: {}, 
    level: "ጀማሪ (Beginner)"
};

let selectedDifficulty = 1;
let currentQuestions = [];
let currentQuestionIndex = 0;
let sessionScore = 0;
let timeLeft = 15;
let timerInterval;

// 3. UI CONTROLLERS
function showDifficultySelection() {
    document.body.className = "";
    document.getElementById("progress-wrapper").style.display = "none";
    document.getElementById("timer-container").style.display = "none";
    clearInterval(timerInterval);
    
    // Save Level Logic
    if (userProfile.totalPoints >= 1000) userProfile.level = "ሊቅ (Master)";
    else if (userProfile.totalPoints >= 500) userProfile.level = "አንባቢ (Scholar)";
    else if (userProfile.totalPoints >= 200) userProfile.level = "ተማሪ (Student)";
    localStorage.setItem('bibleAppProfile', JSON.stringify(userProfile));

    document.getElementById("quiz-content").innerHTML = `
        <div class="stats-grid">
            <div class="stat-card"><span class="stat-value">${userProfile.totalPoints}</span><span class="stat-label">ነጥብ</span></div>
            <div class="stat-card"><span class="stat-value" style="font-size:0.9rem;">${userProfile.level}</span><span class="stat-label">ደረጃ</span></div>
        </div>
        <h3 style="color:#1a5f7a;">ደረጃ ይምረጡ</h3>
        <button class="answer-btn" onclick="setDifficulty(1)">ጀማሪ (Level 1)</button>
        <button class="answer-btn" onclick="setDifficulty(2)">መካከለኛ (Level 2)</button>
        <button class="answer-btn" onclick="setDifficulty(3)">ሊቅ (Level 3)</button>
        <p onclick="resetProgress()" style="font-size:0.7rem; color:#999; cursor:pointer; text-decoration:underline; margin-top:20px;">ነጥብ አጽዳ (Reset)</p>
    `;
}

function resetProgress() {
    if (confirm("ሁሉንም ነጥቦች ማጥፋት ትፈልጋለህ?")) {
        localStorage.removeItem('bibleAppProfile');
        location.reload();
    }
}

function setDifficulty(level) {
    selectedDifficulty = level;
    document.body.className = `theme-${level}`;
    const categories = [...new Set(quizData.filter(q => q.difficulty === level).map(q => q.category))];
    
    let html = `<h2>ርዕስ ይምረጡ</h2>`;
    categories.forEach(cat => {
        html += `<button class="answer-btn" onclick="prepareQuiz('${cat}')">${cat}</button>`;
    });
    html += `<button class="answer-btn" style="background:#eee; border:none;" onclick="showDifficultySelection()">← ተመለስ</button>`;
    document.getElementById("quiz-content").innerHTML = html;
}

// 4. CORE ENGINE (With Shuffle Fix)
function prepareQuiz(category) {
    currentQuestions = quizData
        .filter(q => q.category === category && q.difficulty === selectedDifficulty)
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

    currentQuestionIndex = 0;
    sessionScore = 0;
    document.getElementById("progress-wrapper").style.display = "block";
    document.getElementById("timer-container").style.display = "block";
    renderQuizSkeleton();
    loadQuestion();
}

function renderQuizSkeleton() {
    document.getElementById("quiz-content").innerHTML = `
        <p id="question" style="font-weight:600; margin-bottom:20px; min-height:60px;"></p>
        <div id="answers"></div>
        <p id="result" style="font-weight:bold; margin-top:10px; min-height:30px;"></p>
    `;
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById("progress-bar").style.width = (currentQuestionIndex / currentQuestions.length) * 100 + "%";
    document.getElementById("question").innerText = q.question;
    
    // SHUFFLE OPTIONS
    let options = q.options.map((text, i) => ({ text, isCorrect: i === q.correct }));
    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById("answers");
    container.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.innerText = opt.text;
        btn.onclick = () => checkAnswer(opt.isCorrect, btn);
        container.appendChild(btn);
    });

    document.getElementById("result").innerText = "";
    document.getElementById("quiz-container").classList.remove("shake");
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 15;
    const circle = document.querySelector(".timer-circle-prog");
    const text = document.getElementById("timer-text");
    circle.classList.remove("timer-low");
    
    timerInterval = setInterval(() => {
        timeLeft--;
        text.innerText = timeLeft;
        circle.style.strokeDashoffset = 176 - (timeLeft / 15) * 176;
        if (timeLeft <= 5) circle.classList.add("timer-low");
        if (timeLeft <= 0) { clearInterval(timerInterval); handleTimeOut(); }
    }, 1000);
}

function handleTimeOut() {
    document.getElementById("result").innerText = "ጊዜ አልቋል! ⏰";
    document.querySelectorAll(".answer-btn").forEach(b => b.disabled = true);
    document.getElementById("quiz-container").classList.add("shake");
    setTimeout(nextOrEnd, 2000);
}

function checkAnswer(isCorrect, btn) {
    clearInterval(timerInterval);
    document.querySelectorAll(".answer-btn").forEach(b => b.disabled = true);
    
    if (isCorrect) {
        sessionScore++;
        userProfile.totalPoints += (10 * selectedDifficulty);
        btn.classList.add("correct-glow");
        document.getElementById("result").innerText = "ትክክል! ✨";
    } else {
        btn.classList.add("wrong-red");
        document.getElementById("quiz-container").classList.add("shake");
        document.getElementById("result").innerText = "ተሳስተሃል! ❌";
    }
    localStorage.setItem('bibleAppProfile', JSON.stringify(userProfile));
    setTimeout(nextOrEnd, 1500);
}

function nextOrEnd() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) loadQuestion();
    else {
        document.getElementById("quiz-content").innerHTML = `
            <h2>ተጠናቋል!</h2>
            <p>ውጤት: ${sessionScore}/${currentQuestions.length}</p>
            <button class="answer-btn" onclick="showDifficultySelection()">ወደ ዋና ገጽ</button>
        `;
    }
}

showDifficultySelection();