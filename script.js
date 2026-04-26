const defaultData = [
    {
        name : "이채연", track : "Backend", introduction : "열심히 배우는 프론트엔드 개발자입니다!",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "중부대학교 26학번 인공지능학과 이채연입니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "HTML/CSS, JavaScript, React (학습 중)", word : "...", my : "true"
    },
    {
        name : "박아기사자", track : "Backend", introduction : "안정적인 서버 구조에 관심이 많습니다.",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "안정적인 서버 구조에 관심이 많습니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "Spring, JavaScript, React (학습 중)", word : "...", my : "true"
    },
    {
        name : "이아기사자", track : "Design", introduction : "사용자 관점에서 디자인을 고민합니다.",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "사용자 관점에서 디자인을 고민합니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "Figma, JavaScript, React (학습 중)", word : "...", my : "true"
    },
    {
        name : "최아기사자", track : "Backend", Frontend : "열심히 배우는 프론트엔드 개발자입니다!",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "중부대학교 26학번 인공지능학과 이채연입니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "HTM, JavaScript, React (학습 중)", word : "...", my : "true"
    },
    {
        name : "이채연", track : "Backend", introduction : "열심히 배우는 프론트엔드 개발자입니다!",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "중부대학교 26학번 인공지능학과 이채연입니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "HTM, JavaScript, React (학습 중)", word : "...", my : "true"
    },
    {
        name : "이채연", track : "Backend", introduction : "열심히 배우는 프론트엔드 개발자입니다!",
        img : "업로드용 이미지-2.jpg", detailsIntroduction : "중부대학교 26학번 인공지능학과 이채연입니다.",
        email : "yds06143@gmail.com", phone : "010-7261-2352", Website : "www.google.com",
        interest : "HTM, JavaScript, React (학습 중)", word : "...", my : "true"
    }
];

function printName()  {
  const name = document.getElementById('name').value;
  document.getElementById("result").innerText = name;
}

