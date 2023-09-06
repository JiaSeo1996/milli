$(document).ready(() => {
    const stocks = ["주린이가 가장 알고 싶은 최다질문 TOP77", "주린이도 술술 읽는 친절한 주식책", "난생 처음 주식 투자", "만화 주식투자 무작정 따라하기", "슈퍼개미의 왕초보 주식수업", "내 인생의 첫 주식 공부", "한 권으로 끝내는 배당주 투자"];

    for (let idxStocks in stocks) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: {
                Authorization: "KakaoAK a3a1490ac19313cf79a482f4d55eb9d1"
            },
            data: {
                query: stocks[idxStocks],
                sort: "latest",
                size: 1
            }
        })
            .done((result) => {
                let item = `<div class="item"><img src="${result.documents[0].thumbnail}"><h3>${result.documents[0].title}</h3><p class="publisher">${result.documents[0].publisher}</p>`

                $("#index-bestseller-list-stock").append(item);
            })
    }

    const englishes = ["야나두 영어회화", "혼자 공부하는 영어 습관의 힘", "나 혼자만 알고 싶은 영어책", "한국인 화자 시점 영어회화", "사용빈도 1억 영어회화 표현", "영어, 이제는 잘 할 때도 됐다", "나 혼자 끝내는 독학 영어 첫걸음"];

    for (let idxEnglishes in englishes) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: {
                Authorization: "KakaoAK a3a1490ac19313cf79a482f4d55eb9d1"
            },
            data: {
                query: englishes[idxEnglishes],
                sort: "latest",
                size: 1
            }
        })
            .done((result) => {
                let item = `<div class="item"><img src="${result.documents[0].thumbnail}"><h3>${result.documents[0].title}</h3><p class="publisher">${result.documents[0].publisher}</p>`

                $("#index-bestseller-list-english").append(item);
            })
    }

    const classics = ["까라마조프 씨네 형제들 (상)", "이방인", "인간실격", "우동한그릇", "시골의사", "에디터스 컬렉션", "마지막"];

    for (let idxClassics in classics) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: {
                Authorization: "KakaoAK a3a1490ac19313cf79a482f4d55eb9d1"
            },
            data: {
                query: classics[idxClassics],
                sort: "latest",
                size: 1
            }
        })
            .done((result) => {
                let item = `<div class="item"><img src="${result.documents[0].thumbnail}"><h3>${result.documents[0].title}</h3><p class="publisher">${result.documents[0].publisher}</p>`

                $("#index-bestseller-list-classic").append(item);
            })
    }

    const interiors = ["블루체크의 코바늘 손뜨개 수업", "패브릭 손뜨개", "코코지니의 친절한 재봉틀 교실", "로제의 모티브 손뜨개 소품", "까막의 감성 인테리어 손뜨개", "낭만 가득 프랑스 자수", "로제의 빈티지 손뜨개"];

    for (let idxInteriors in interiors) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: {
                Authorization: "KakaoAK a3a1490ac19313cf79a482f4d55eb9d1"
            },
            data: {
                query: interiors[idxInteriors],
                sort: "latest",
                size: 1
            }
        })
            .done((result) => {
                let item = `<div class="item"><img src="${result.documents[0].thumbnail}"><h3>${result.documents[0].title}</h3><p class="publisher">${result.documents[0].publisher}</p>`

                $("#index-bestseller-list-interior").append(item);
            })
    }

    const diets = ["헬스의 정석 : 근력운동 편", "죄수 운동법", "근육저승사자 양치승의 지옥 트레이닝", "불량헬스", "닥치고 데스런 스트레칭", "근육이 튼튼한 여자가 되고 싶어", "헬스보이의 지속가능한 운동법"];

    for (let idxDiets in diets) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            headers: {
                Authorization: "KakaoAK a3a1490ac19313cf79a482f4d55eb9d1"
            },
            data: {
                query: diets[idxDiets],
                sort: "latest",
                size: 1
            }
        })
            .done((result) => {
                let item = `<div class="item"><img src="${result.documents[0].thumbnail}"><h3>${result.documents[0].title}</h3><p class="publisher">${result.documents[0].publisher}</p>`

                $("#index-bestseller-list-diet").append(item);

            })
    }
})
