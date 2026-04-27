function saveData() {
    localStorage.setItem('lionsData', JSON.stringify(lions));
}

let lions = JSON.parse(localStorage.getItem('lionsData')) || [    {
        name : "이채연", track : "Backend", introduction : "열심히 배우는 프론트엔드 개발자입니다!",
        img : "업로드용 이미지.jpg", detailsIntroduction : "중부대학교 26학번 인공지능학과 이채연입니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "HTML/CSS, JavaScript, React (학습 중)", word : "...", my : "true"
    },
    {
        name : "박아기사자", track : "Backend", introduction : "안정적인 서버 구조에 관심이 많습니다.",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "안정적인 서버 구조에 관심이 많습니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "Spring, JavaScript, React (학습 중)", word : "...", my : "false"
    },
    {
        name : "이아기사자", track : "Design", introduction : "사용자 관점에서 디자인을 고민합니다.",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "사용자 관점에서 디자인을 고민합니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "Figma, JavaScript, React (학습 중)", word : "...", my : "false"
    },
    {
        name : "최아기사자", track : "Backend", Frontend : "열심히 배우는 프론트엔드 개발자입니다!",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "중부대학교 26학번 인공지능학과 이채연입니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "HTM, JavaScript, React (학습 중)", word : "...", my : "false"
    },
    {
        name : "이채연", track : "Backend", introduction : "열심히 배우는 프론트엔드 개발자입니다!",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "중부대학교 26학번 인공지능학과 이채연입니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "HTM, JavaScript, React (학습 중)", word : "...", my : "false"
    },
    {
        name : "이채연", track : "Backend", introduction : "열심히 배우는 프론트엔드 개발자입니다!",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "중부대학교 26학번 인공지능학과 이채연입니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "HTM, JavaScript, React (학습 중)", word : "...", my : "false"
    }
];

const profileBoxes = document.querySelector('.profileBoxes');
const profileDetailsBoxes = document.querySelector('.profileDetailsBoxes');
const totalText = document.getElementById('total');

function renderDashboard() {
    totalText.innerText = `총 ${lions.length}명`;
    profileBoxes.innerHTML = '';
    profileDetailsBoxes.innerHTML = '';

    lions.forEach(lion => {
        let techList = lion.interest.split(',').map(t => t.trim());
        let firstTech = techList[0];

        profileBoxes.innerHTML += `
            <div class="profileBox ${lion.my === "true" ? 'my' : ''}">
                <div class="imageWrapper">
                    <span class="badge">${firstTech}</span>
                    <img src="${lion.img}" alt="프로필">
                </div>
                <div class="text">
                    <h4 class="profileName">${lion.name}</h4>
                    <h5 class="track">${lion.track}</h5>
                    <p class="introduction">${lion.introduction}</p>
                </div>
            </div>
        `;

        let techHTML = techList.map(t => `<li>${t}</li>`).join('');

        profileDetailsBoxes.innerHTML += `
            <div class="profileDetailsBox">
                <h2 class="name">${lion.name}</h2>
                <h5 class="track">${lion.track}</h5>
                <h5 class="clubName">LIKE LION</h5>
                <br>
                <h5>자기소개</h5>
                <p class="introduction">${lion.detailsIntroduction}</p>
                <br>
                <h5>연락처</h5>
                <ul class="list">
                    <li>Email: ${lion.email}</li>
                    <li>Phone: ${lion.phone}</li>
                    <li>Website: ${lion.Website}</li>
                </ul>
                <br>
                <h5>관심기술</h5>
                <ul class="list">${techHTML}</ul>
                <br>
                <h5>한 마디</h5>
                <h6 class="introduction">${lion.word}</h6>
            </div>
        `;
    });
}

const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const addFormSection = document.getElementById('addFormSection');
const addLionForm = document.getElementById('addLionForm');
const cancelBtn = document.getElementById('cancelBtn');

addBtn.addEventListener('click', () => {
    addFormSection.classList.toggle('hidden');
});

cancelBtn.addEventListener('click', () => {
    addLionForm.reset();
    addFormSection.classList.add('hidden');
});

addLionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newLion = {
        name: document.getElementById('fName').value,
        track: document.getElementById('fTrack').value,
        interest: document.getElementById('fTech').value,
        introduction: document.getElementById('fShort').value,
        detailsIntroduction: document.getElementById('fDetail').value,
        email: document.getElementById('fEmail').value,
        phone: document.getElementById('fPhone').value,
        img: "업로드용 이미지-2.jpg",
        Website: "www.google.com",
        word: "...",
        my: "false"
    };

    lions.push(newLion);
    saveData();
    renderDashboard();
    addLionForm.reset();
    addFormSection.classList.add('hidden');
});

deleteBtn.addEventListener('click', () => {
    if (lions.length > 0) {
        lions.pop();
        saveData();
        renderDashboard();
    }
});

renderDashboard();

if (!localStorage.getItem('lionsData')) {
    localStorage.setItem('lionsData', JSON.stringify(lions));
}