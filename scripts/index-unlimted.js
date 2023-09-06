$(document).ready(() => {
    const unlimited01 = [
        "세이노의 가르침",
        "아기 판다 푸바오",
        "역행자",
        "꿀벌의 예언 1",
        "나는 죽을 때까지 지적이고 싶다",
        "메리골드 마음 세탁소",
        "K 배터리 레볼루션"
    ],
        unlimited02 = [
            "매스커레이드 게임",
            "상처받지 않는 관계의 비밀",
            "연남동 빙굴빙굴 빨래방",
            "공부하고 있다는 착각",
            "나는 너랑 노는 게 제일 좋아",
            "넷플릭스 세계사",
            "일만 번의 다이빙"
        ],
        unlimited03 = [
            "세이노의 가르침",
            "데일 카네기 인간관계론",
            "불편한 편의점",
            "알아두면 쓸데있는 신 잡학상식",
            "사는 게 고통일 때, 쇼펜하우어",
            "K 배터리 레볼루션",
            "그대 늙어가는 것이 아니라 익어가는 것이다"
        ];

    for (let idxUL01 in unlimited01) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: {
                Authorization: "KakaoAK a3a1490ac19313cf79a482f4d55eb9d1"
            },
            data: {
                query: unlimited01[idxUL01],
                sort: "latest",
                size: 1
            }
        })
            .done((result) => {
                let item = `<div class="item"><img src="${result.documents[0].thumbnail}"><h3>${result.documents[0].title}</h3><p class="author">${result.documents[0].authors[0]}</p>`

                $("#index-unlimited .item-wrap:nth-of-type(1) > .list").append(item);
            })
    }

    for (let idxUL02 in unlimited02) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: {
                Authorization: "KakaoAK a3a1490ac19313cf79a482f4d55eb9d1"
            },
            data: {
                query: unlimited02[idxUL02],
                sort: "latest",
                size: 1
            }
        })
            .done((result) => {
                let item = `<div class="item"><img src="${result.documents[0].thumbnail}"><h3>${result.documents[0].title}</h3><p class="author">${result.documents[0].authors[0]}</p>`

                $("#index-unlimited .item-wrap:nth-of-type(2) > .list").append(item);
            })
    }

    for (let idxUL03 in unlimited03) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: {
                Authorization: "KakaoAK a3a1490ac19313cf79a482f4d55eb9d1"
            },
            data: {
                query: unlimited03[idxUL03],
                sort: "latest",
                size: 1
            }
        })
            .done((result) => {
                let item = `<div class="item"><img src="${result.documents[0].thumbnail}"><h3>${result.documents[0].title}</h3><p class="author">${result.documents[0].authors[0]}</p>`

                $("#index-unlimited .item-wrap:nth-of-type(3) > .list").append(item);
            })
    }
})
