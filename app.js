/* ==============================================================
   1. 선물 추천 데이터베이스 (성별 및 4가지 가격대별 구체적 상품군)
   ============================================================== */
const GIFT_DATABASE = [
  // -------------------------------------------------------------
  // [1만 원 이하]
  // -------------------------------------------------------------
  {
    id: "honey_stick_set",
    title: "국내산 야생화꿀 & 아카시아꿀 휴대용 스틱 15포 세트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만 원 이하",
    situations: ["감사", "응원"],
    relationships: ["선배·동료", "친구", "선생님·상사"],
    ageGroups: ["20대", "30대", "40~50대", "잘 모르겠어요"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "1만 원 안에서 이지컷 스틱 포장 15포 세트 찾아보기",
    reason: "피곤할 때 가방에서 한 포씩 쏙 꺼내 짜먹기 좋아 주는 사람도 받는 사람도 부담 없는 꿀템이에요.",
    tip: "설탕을 먹여 키운 사양꿀이 아닌 탄소동위원소비 -22.5‰ 이하의 천연 벌꿀인지 확인하세요.",
    message: "“달콤한 꿀 한 포 드시고 오늘 하루의 피로를 싹 날려버리세요!”",
    rudolph: "한 입 쪼옥 짜먹으면 꿀벌처럼 윙윙 에너지가 솟아나요!"
  },
  {
    id: "mini_book_light",
    title: "책장에 꽂아 쓰는 초경량 클립형 미니 북라이트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만 원 이하",
    situations: ["응원", "생일"],
    relationships: ["형제자매", "친구"],
    ageGroups: ["10대 이하", "20대"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "1만 원 이하에서 50g 이하 USB 충전식 북라이트 찾아보기",
    reason: "방 불을 켜지 않고도 내 책만 환하게 비춰 야간 독서나 공부할 때 집중력을 높여줘요.",
    tip: "책 페이지가 구겨지지 않게 클립 안쪽에 실리콘 패드가 부착된 제품을 선택하세요.",
    message: "“너의 노력과 꿈이 늦은 밤 책장 위에서 활짝 피어나길 응원해!”",
    rudolph: "책 위에 딱 꽂아두면 나만의 미니 도서관 개관!"
  },
  {
    id: "cute_diary_pen_set",
    title: "만년형 하드커버 일러스트 다이어리와 저중심 젤펜 세트",
    gender: ["여성", "성별 무관"],
    priceCategory: "1만 원 이하",
    situations: ["생일", "크리스마스", "응원"],
    relationships: ["형제자매", "친구"],
    ageGroups: ["10대 이하", "20대"],
    moods: ["기억에 남는", "실용적인", "기분 전환용"],
    budgetGuide: "1만 원 안팎에서 스티커와 책갈피 끈이 포함된 다이어리 세트 찾아보기",
    reason: "소중한 일상과 계획을 자유롭게 기록하며 나만의 취향을 담아내기 참 좋아요.",
    tip: "날짜가 인쇄되지 않아 언제든 시작할 수 있는 만년형에 필기감이 부드러운 펜을 짝지어주세요.",
    message: "“네가 써 내려갈 반짝반짝 빛나는 꿈들을 언제나 응원해!”",
    rudolph: "비밀 일기도, 낙서도 모두 환영! 상상력을 맘껏 펼쳐봐요."
  },
  {
    id: "hand_cream_pocket",
    title: "시어버터 고보습 포켓 핸드크림 (30mL 2종)",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만 원 이하",
    situations: ["감사", "응원", "크리스마스"],
    relationships: ["친구", "선배·동료", "형제자매"],
    ageGroups: ["10대 이하", "20대", "30대", "40~50대", "잘 모르겠어요"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "1만 원 안에서 파우치 쏙 미니 사이즈 2개입 찾아보기",
    reason: "손 씻고 건조할 때마다 꺼내 바르기 좋아 누구에게나 호불호 없이 유용한 가성비 선물이에요.",
    tip: "향이 짙지 않은 은은한 베이비파우더나 시트러스 코튼 향을 추천해요.",
    message: "“찬 바람 부는 날씨에도 손끝까지 촉촉하고 따뜻하길 바라!”",
    rudolph: "가방에서 꺼낼 때마다 선물한 분 생각이 몽글몽글 날 거예요."
  },
  {
    id: "cozy_sleep_socks",
    title: "도톰한 극세사 밍크 수면양말 2켤레 선물상자",
    gender: ["여성", "성별 무관"],
    priceCategory: "1만 원 이하",
    situations: ["크리스마스", "응원", "생일"],
    relationships: ["친구", "형제자매", "연인"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["기분 전환용", "실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "1만 원 안에서 발목 밴딩이 짱짱한 밍크 극세사 2켤레 세트",
    reason: "추운 밤 잠자리에 들 때 발을 포근하게 감싸주어 체온을 따뜻하게 지켜줘요.",
    tip: "자국이 남지 않는 무압박 밴딩과 털 빠짐이 적은 고밀도 극세사를 고르세요.",
    message: "“올겨울 발 시리지 말고 포근하고 따뜻한 밤 보내!”",
    rudolph: "구름을 신고 잠드는 것 같은 보들보들 감촉!"
  },
  {
    id: "metal_pen_leather_case",
    title: "황동 저중심 메탈 볼펜과 슬림 가죽 펜 슬리브",
    gender: ["남성", "성별 무관"],
    priceCategory: "1만 원 이하",
    situations: ["응원", "감사", "생일"],
    relationships: ["선배·동료", "친구", "형제자매"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "1만 원 안에서 묵직한 필기감의 메탈 볼펜과 인조가죽 슬리브 세트",
    reason: "회의나 스케줄 메모 시 품격을 더해주고 펜 슬리브가 있어 펜촉과 옷을 깔끔하게 보호해요.",
    tip: "국제 규격 겔 리필심 호환 여부와 그립부에 미끄럼 방지 홈이 있는지 확인하세요.",
    message: "“중요한 계약과 멋진 아이디어들이 이 펜 끝에서 쏟아지길!”",
    rudolph: "슥삭슥삭 메모하는 모습이 왠지 모르게 스마트해 보여요!"
  },

  // -------------------------------------------------------------
  // [1만~5만 원]
  // -------------------------------------------------------------
  {
    id: "kitchen_towel",
    title: "고리 달린 면 주방 타월 세트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["집들이", "감사", "생일"],
    relationships: ["친구", "형제자매", "선배·동료"],
    ageGroups: ["20대", "30대", "40~50대", "잘 모르겠어요"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "3만 원 안에서 2~3장 구성 찾아보기",
    reason: "새집에서 바로 쓸 수 있고, 같은 색으로 몇 장 묶어 주면 선물 느낌도 나요.",
    tip: "걸어두기 편한 고리형에 아이보리나 연회색처럼 무난한 색을 골라보세요.",
    message: "“새집에서 맛있는 거 많이 해 먹어! 다음에 또 놀러 갈게.”",
    rudolph: "주방 수건은 많을수록 행복지수가 올라간답니다, 딸랑!"
  },
  {
    id: "baked_pastry_set",
    title: "버터 풍미 가득한 수제 구움과자 6구 세트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["생일", "크리스마스", "응원", "감사"],
    relationships: ["친구", "연인", "선배·동료", "선생님·상사"],
    ageGroups: ["10대 이하", "20대", "30대", "잘 모르겠어요"],
    moods: ["기분 전환용", "실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "2~3만 원 안에서 휘낭시에와 마들렌 혼합 6구 세트 찾아보기",
    reason: "달콤한 디저트는 받는 순간 누구나 기분이 풀리고 커피나 차와 곁들이기 아주 좋아요.",
    tip: "개별 포장되어 하나씩 꺼내 먹기 편하고 유통기한이 넉넉한 것을 골라보세요.",
    message: "“당 충전하고 오늘 하루도 활짝 웃는 일만 가득하길 바라!”",
    rudolph: "휘낭시에 한 입 베어 물면 루돌프 썰매처럼 기분이 붕 떠오를 거예요!"
  },
  {
    id: "insulated_tumbler",
    title: "가방에 넣기 좋은 350mL 보온 텀블러",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["생일", "응원", "크리스마스"],
    relationships: ["친구", "형제자매", "선배·동료"],
    ageGroups: ["10대 이하", "20대", "30대", "잘 모르겠어요"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "3만 원 안팎에서 완전 밀폐 뚜껑 구조 제품 찾아보기",
    reason: "매일 들고 다니며 물과 커피를 따뜻하게 마실 수 있어 사계절 내내 실용적이에요.",
    tip: "가방 안에서 샐 염려 없는 완전 밀폐형인지와 가벼운 무게(200g대)를 확인하세요.",
    message: "“따뜻한 음료 챙겨 마시면서 언제나 건강 챙기자!”",
    rudolph: "겨울엔 따뜻한 차, 여름엔 얼음 찰랑! 매일 그대 곁을 지킬 거예요."
  },
  {
    id: "forest_room_spray",
    title: "은은한 숲향의 패브릭 룸 스프레이",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["집들이", "생일", "크리스마스"],
    relationships: ["친구", "연인", "형제자매"],
    ageGroups: ["20대", "30대", "잘 모르겠어요"],
    moods: ["기분 전환용", "기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "3~4만 원 선에서 150~200mL 유리병 패키지 찾아보기",
    reason: "외출 전 침구나 커튼에 가볍게 칙 뿌려두면 공간 분위기가 단숨에 포근해져요.",
    tip: "호불호가 적은 편백나무나 소나무, 은은한 풀꽃 계열의 자연스러운 향을 추천해요.",
    message: "“집에 머무는 모든 시간이 향기롭고 편안하길 바라.”",
    rudolph: "숲속 요정이 방금 다녀간 것 같은 상쾌한 마법을 부려줄게요!"
  },
  {
    id: "heating_pad",
    title: "부드러운 극세사 온열 찜질팩",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["응원", "감사", "생일", "크리스마스"],
    relationships: ["부모님", "선생님·상사", "형제자매"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "3~4만 원 선에서 어깨와 허리 겸용 넓은 사이즈 찾아보기",
    reason: "하루 일과를 마치고 목과 어깨, 허리에 얹어두면 뭉친 피로가 사르르 녹아내려요.",
    tip: "전자레인지로 간편하게 데울 수 있는 천연 팥이나 곡물 충전재 제품이 안심돼요.",
    message: "“늘 고생 많으셨어요. 따뜻하게 찜질하시고 푹 주무세요!”",
    rudolph: "뜨끈뜨끈한 찜질팩 하나면 루돌프 코보다 더 훈훈해진답니다."
  },
  {
    id: "wireless_mood_light",
    title: "감성적인 터치형 무선 무드등",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["집들이", "크리스마스", "생일"],
    relationships: ["친구", "연인", "형제자매"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["기억에 남는", "기분 전환용", "루돌프에게 맡길래요"],
    budgetGuide: "3~4만 원 선에서 3단계 밝기 조절 및 C타입 충전형 찾아보기",
    reason: "침대 맡이나 거실 선반에 두면 밤마다 아늑하고 따뜻한 감성을 선물할 수 있어요.",
    tip: "눈부심이 적은 전구색(웜화이트) 조명에 가볍게 터치해 켜지는 방식을 골라보세요.",
    message: "“오늘 밤도 은은한 불빛처럼 따뜻하고 편안한 꿈 꿔!”",
    rudolph: "루돌프의 코처럼 은은하게 방을 밝혀줄 꼬마 등불이에요!"
  },
  {
    id: "traditional_snack_set",
    title: "도라지 정과와 수제 호두강정 세트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["감사", "생일", "응원"],
    relationships: ["부모님", "선생님·상사"],
    ageGroups: ["40~50대", "60대 이상"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "4~5만 원 선에서 단정한 한지나 보자기 포장 구성 찾아보기",
    reason: "달지 않고 건강한 간식으로, 정성스러운 포장 덕분에 공손한 감사 인사를 전하기 제격이에요.",
    tip: "어르신 치아에 부담 없도록 콩고물이 묻어 쫀득하고 부드러운 정과를 선택하세요.",
    message: "“언제나 베풀어주신 은혜에 감사드립니다. 늘 건강하고 평안하세요.”",
    rudolph: "어르신들 입맛을 저격하는 달콤 쌉싸름한 효도 특급 배송!"
  },
  {
    id: "ceramic_mug_set",
    title: "묵직한 도자기 머그잔 2인 세트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["집들이", "크리스마스", "생일"],
    relationships: ["연인", "친구", "형제자매"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "3~4만 원 안에서 손잡이 그립감이 좋은 핸드메이드 2구 세트 찾아보기",
    reason: "식탁 위에 올려만 두어도 예쁘고, 둘이서 도란도란 따뜻한 차를 나눠 마시기 좋아요.",
    tip: "유행을 타지 않는 오트밀이나 샌드 베이지 색상의 무광 도자기 재질을 추천해요.",
    message: "“함께하는 시간에 따뜻한 온기가 항상 머물기를 바라.”",
    rudolph: "커피를 담아도, 코코아를 담아도 식탁 위가 카페가 되는 마법!"
  },
  {
    id: "coffee_dripbag_box",
    title: "핸드드립 커피 드립백 버라이어티 15구 세트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["응원", "감사", "생일"],
    relationships: ["선배·동료", "친구", "선생님·상사"],
    ageGroups: ["20대", "30대", "40~50대", "잘 모르겠어요"],
    moods: ["실용적인", "기분 전환용", "루돌프에게 맡길래요"],
    budgetGuide: "2~3만 원 안에서 산미/고소한 맛 균형 잡힌 15~20입 구성 찾아보기",
    reason: "사무실이나 집에서 뜨거운 물만 부으면 갓 내린 카페 핸드드립 풍미를 즐길 수 있어요.",
    tip: "호불호가 갈릴 수 있는 단일 원두보다 여러 산지의 원두가 골고루 섞인 패키지가 안전해요.",
    message: "“바쁜 일상 중에도 향긋한 커피 한 잔의 여유는 꼭 챙기세요!”",
    rudolph: "오후 3시 졸릴 때 한 잔 내리면 눈이 번쩍 뜨일 거예요!"
  },
  {
    id: "slim_leather_cardholder_men",
    title: "천연 소가죽 슬림 포켓 카드지갑",
    gender: ["남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["생일", "크리스마스", "응원"],
    relationships: ["연인", "형제자매", "선배·동료", "친구"],
    ageGroups: ["20대", "30대"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "4만 원대에서 카드 4장+지폐 포켓 수납 구조 찾아보기",
    reason: "두꺼운 지갑 대신 주머니나 미니백에 쏙 들어가 매일 가볍게 들고 다닐 수 있어요.",
    tip: "손에 쥐었을 때 질감이 부드러운 소가죽 재질에 스티치 마감이 견고한 것을 고르세요.",
    message: "“새 지갑에 좋은 일과 행운만 차곡차곡 가득 쌓이길 바랄게!”",
    rudolph: "머니머니해도 지갑이 얇아야 주머니가 가벼운 법이죠!"
  },
  {
    id: "car_air_vent_diffuser",
    title: "차량용 알루미늄 메탈 통풍구 방향제 (리필 2개 포함)",
    gender: ["남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["생일", "집들이", "응원", "감사"],
    relationships: ["선배·동료", "친구", "부모님", "연인"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "기분 전환용", "루돌프에게 맡길래요"],
    budgetGuide: "3~4만 원 선에서 메탈 마감 본체와 세라믹 리필 구성 찾아보기",
    reason: "차 문을 열 때마다 기분 좋은 향기가 반겨주고 대시보드 인테리어에도 깔끔하게 어울려요.",
    tip: "액체 누수 걱정이 없는 고체 세라믹 도넛 형태의 리필 제품을 선택하세요.",
    message: "“언제나 안전 운전하시고, 운전하는 시간마다 기분 좋은 일만 가득하세요!”",
    rudolph: "드라이브할 때마다 꽃길을 달리는 기분이 들게 해드릴게요."
  },
  {
    id: "bath_bomb_set",
    title: "천연 아로마 거품 입욕제 배스밤 4구 세트",
    gender: ["여성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["생일", "크리스마스", "응원"],
    relationships: ["연인", "친구", "형제자매"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["기분 전환용", "기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "2~3만 원 안에서 다채로운 컬러와 향으로 구성된 4개 세트 찾아보기",
    reason: "욕조 가득 풍성한 거품과 은은한 향을 풀고 피로를 녹이는 특별한 힐링 시간을 선물해요.",
    tip: "욕조에 착색되지 않는 천연 색소 제품인지, 피부가 건조해지지 않는 보습 오일 함유 제품인지 확인하세요.",
    message: "“오늘 하루만큼은 모든 걱정 내려놓고 보글보글 힐링 타임 보내!”",
    rudolph: "향긋한 거품 속에서 둥둥 떠다니면 여기가 바로 천국!"
  },
  {
    id: "rechargeable_hand_warmer",
    title: "조약돌 모양의 양면 발열 충전식 전기 손난로 (5000mAh)",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["크리스마스", "생일", "응원"],
    relationships: ["친구", "연인", "형제자매", "선배·동료"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["실용적인", "기분 전환용", "루돌프에게 맡길래요"],
    budgetGuide: "2~3만 원 안에서 스마트폰 보조배터리 겸용 모델 찾아보기",
    reason: "추운 출퇴근길 손안에 쥐고 있으면 3초 만에 따뜻해지고 비상시 스마트폰 충전도 가능해요.",
    tip: "온도 과승 방지 KC 안전 인증을 획득했고 3단계 온도 조절이 되는지 확인하세요.",
    message: "“추운 겨울 외출할 때 주머니에 쏙 넣고 따뜻하게 다녀!”",
    rudolph: "루돌프 코보다 더 뜨끈뜨끈! 겨울철 필수 생존템이랍니다."
  },
  {
    id: "olive_oil_balsamic_set",
    title: "고급 엑스트라 버진 올리브오일 & 발사믹 2종 세트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["집들이", "감사", "생일"],
    relationships: ["선생님·상사", "선배·동료", "부모님", "친구"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "4~5만 원 선에서 냉압착 오일과 숙성 발사믹 세트 찾아보기",
    reason: "샐러드나 빵, 요리에 품격을 더해주며 내 돈 주고 사기엔 살짝 망설여지는 센스 만점 선물이에요.",
    tip: "산도 0.2% 이하의 냉압착 엑스트라 버진 올리브유와 포도 농축액 함량이 높은 발사믹을 고르세요.",
    message: "“맛있는 음식과 함께 매일의 식탁이 더욱 풍성하고 건강하시길 바랍니다.”",
    rudolph: "식빵 하나 찍어 먹어도 고급 이탈리안 레스토랑으로 순간이동!"
  },
  {
    id: "daily_nuts_premium_set",
    title: "프리미엄 구운 견과류 하루 한 포 30일 선물세트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "1만~5만 원",
    situations: ["감사", "생일", "응원"],
    relationships: ["부모님", "선생님·상사", "선배·동료"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "3~4만 원 선에서 마카다미아와 피칸이 포함된 25g x 30포 구성 찾아보기",
    reason: "바쁜 아침 간편하게 영양을 챙길 수 있어 부모님이나 직장인 모두에게 부담 없는 선물이에요.",
    tip: "눅눅하지 않도록 질소 포장되어 있고 건포도나 설탕 크랜베리 비중이 적은 견과 위주를 고르세요.",
    message: "“매일 건강 잘 챙기시고 언제나 활기찬 하루 보내세요!”",
    rudolph: "오독오독 씹을수록 고소함이 팡팡! 두뇌 회전도 빨라져요."
  },

  // -------------------------------------------------------------
  // [5만~10만 원]
  // -------------------------------------------------------------
  {
    id: "mini_massage_gun",
    title: "목과 어깨 휴대용 미니 무선 마사지건",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "5만~10만 원",
    situations: ["생일", "응원", "감사"],
    relationships: ["부모님", "선배·동료", "선생님·상사", "형제자매"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "5~7만 원 선에서 400g 이하 경량 헤드 교체형 찾아보기",
    reason: "장시간 컴퓨터 작업이나 가사노동으로 뭉친 승모근과 팔다리를 시원하게 풀어줘요.",
    tip: "어르신이나 여성분도 한 손으로 부담 없이 쥘 수 있는 미니 경량형 모델을 고르세요.",
    message: "“늘 애쓰시는 어깨의 짐이 조금이나마 가벼워지셨으면 좋겠습니다.”",
    rudolph: "두두두두! 뭉친 근육을 루돌프 발굽 마사지보다 더 시원하게 털어드려요."
  },
  {
    id: "cashmere_muffler",
    title: "캐시미어 블렌드 소프트 체크 머플러",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "5만~10만 원",
    situations: ["크리스마스", "생일", "감사"],
    relationships: ["연인", "부모님", "친구"],
    ageGroups: ["20대", "30대", "40~50대", "60대 이상"],
    moods: ["기억에 남는", "기분 전환용", "루돌프에게 맡길래요"],
    budgetGuide: "5~7만 원 선에서 울&캐시미어 혼방 도톰한 기장 찾아보기",
    reason: "겨울철 외출할 때마다 목을 포근하게 감싸주며 선물한 사람의 따뜻한 마음이 전해져요.",
    tip: "어떤 외투에도 튀지 않고 잘 어울리는 베이지나 차콜, 은은한 타탄체크를 추천해요.",
    message: "“올겨울 바람이 아무리 차가워도 따뜻하고 훈훈하게 보내길 바라.”",
    rudolph: "이 목도리를 두르면 영하 10도 북극바람도 거뜬하답니다!"
  },
  {
    id: "silver_engraved_bracelet",
    title: "925 실버 심플 체인 팔찌 (미니 바 펜던트)",
    gender: ["여성"],
    priceCategory: "5만~10만 원",
    situations: ["크리스마스", "생일"],
    relationships: ["연인"],
    ageGroups: ["20대", "30대"],
    moods: ["기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "5~7만 원 선에서 변색 방지 로듐 도금된 925 법정 순은 제품 찾아보기",
    reason: "매일 손목에 차고 다니며 서로를 기억할 수 있는 깔끔하고 부담 없는 데일리 주얼리예요.",
    tip: "손목 둘레에 맞게 조절할 수 있는 여유 체인이 달렸는지, 알레르기 방지 처리인지 보세요.",
    message: "“늘 내 곁에서 환하게 웃어줘서 고마워. 우리 예쁜 추억 많이 만들자!”",
    rudolph: "손목 위에서 반짝반짝! 볼 때마다 얼굴에 미소가 번질 거예요."
  },
  {
    id: "leather_document_folder",
    title: "A4 슬림 마그네틱 자석 잠금 가죽 서류 파일 홀더",
    gender: ["남성", "성별 무관"],
    priceCategory: "5만~10만 원",
    situations: ["감사", "응원", "생일"],
    relationships: ["선생님·상사", "선배·동료"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "5~6만 원 선에서 사피아노 또는 빈티지 가죽 질감의 자석 클립형",
    reason: "회의나 미팅 때 중요한 서류를 구김 없이 단정하게 챙겨 다닐 수 있어 격식이 돋보여요.",
    tip: "A4 용지 30장 이상과 명함, 펜꽂이가 내부에 깔끔하게 정돈된 구조를 선택하세요.",
    message: "“선배님의 꼼꼼한 가르침 덕분에 많이 배웁니다. 늘 든든하고 감사해요.”",
    rudolph: "회의실 문 열고 들어갈 때 신뢰도가 200% 상승하는 아이템!"
  },
  {
    id: "memory_foam_pillow",
    title: "C자 커브를 지지해주는 경추 인체공학 메모리폼 베개",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "5만~10만 원",
    situations: ["생일", "감사", "응원"],
    relationships: ["부모님", "선생님·상사"],
    ageGroups: ["40~50대", "60대 이상"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "6~8만 원 선에서 고밀도 오픈셀 메모리폼 및 텐셀 커버 구성 찾아보기",
    reason: "자고 일어났을 때 목과 어깨 뻐근함을 줄여주어 편안한 숙면을 선물할 수 있어요.",
    tip: "옆으로 누워도 귀가 눌리지 않는 양측 홈 설계와 통기성 커버 제품을 선택하세요.",
    message: "“늘 자식 걱정에 지친 부모님, 오늘 밤은 목 편안하게 깊은 잠 주무세요.”",
    rudolph: "베개에 머리를 대자마자 꿀잠의 세계로 스르륵 모셔다드릴게요!"
  },
  {
    id: "agarwood_pill_set",
    title: "전통 배합 침향과 녹용이 함유된 건강 환 10환 세트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "5만~10만 원",
    situations: ["감사", "생일", "응원"],
    relationships: ["부모님", "선생님·상사"],
    ageGroups: ["40~50대", "60대 이상"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "6~8만 원 선에서 황금 보자기로 포장된 10~15환 세트 찾아보기",
    reason: "기력이 떨어지기 쉬운 부모님께 하루 한 알씩 씹어 드시며 활력을 북돋워 주는 정성 가득한 선물이에요.",
    tip: "침향 분말 함량이 15% 이상인지, 사양벌꿀로 부드럽게 반죽해 씹기 편한지 확인하세요.",
    message: "“키워주신 은혜 늘 기억하고 있습니다. 부디 아프지 마시고 건강하세요.”",
    rudolph: "부모님 활력 충전 100%! 호랑이 기운이 솟아나실 거예요."
  },
  {
    id: "fountain_pen_ink_set",
    title: "입문용 메탈 바디 만년필과 시그니처 딥블루 병잉크 세트",
    gender: ["남성", "성별 무관"],
    priceCategory: "5만~10만 원",
    situations: ["응원", "생일", "감사"],
    relationships: ["선생님·상사", "선배·동료", "부모님"],
    ageGroups: ["20대", "30대", "40~50대", "60대 이상"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "6~8만 원 선에서 F촉(세필) 메탈 바디 만년필과 컨버터 포함 세트 찾아보기",
    reason: "손글씨를 쓸 때마다 전해지는 특유의 사각거림과 고급스러움으로 품격을 높여줘요.",
    tip: "처음 쓰는 분도 다루기 쉬운 F닙이나 EF닙인지, 카트리지와 병잉크 호환이 되는지 확인하세요.",
    message: "“선생님께서 써 내려가실 귀한 발걸음을 항상 존경하고 응원합니다.”",
    rudolph: "사각사각 종이 위를 달리는 만년필 촉에서 깊은 멋이 느껴져요."
  },
  {
    id: "eye_massager_premium",
    title: "공기압 지압과 온열 기능이 탑재된 접이식 무선 눈 마사지기",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "5만~10만 원",
    situations: ["생일", "감사", "응원"],
    relationships: ["부모님", "선생님·상사", "연인"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "8~9만 원 선에서 관자놀이 공기압 마사지와 힐링 멜로디 지원 모델",
    reason: "모니터와 스마트폰으로 충혈되고 피로해진 눈가를 따뜻한 온열과 부드러운 공기압으로 지압해줘요.",
    tip: "얼굴에 닿는 부위가 오염에 강하고 부드러운 단백질 가죽 소재로 닦아내기 쉬운지 보세요.",
    message: "“종일 수고한 눈에 온전한 휴식을 선물해 드립니다. 편안한 밤 되세요.”",
    rudolph: "15분 눈 마사지 받고 나면 세상이 HD 고화질로 맑아져요!"
  },

  // -------------------------------------------------------------
  // [10만 원 이상]
  // -------------------------------------------------------------
  {
    id: "cashmere_100_scarf",
    title: "몽골산 천연 캐시미어 100% 솔리드 롱 머플러",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "10만 원 이상",
    situations: ["생일", "크리스마스", "감사"],
    relationships: ["부모님", "연인", "선생님·상사"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    budgetGuide: "10~15만 원 선에서 원사 인증 라벨이 있는 캐시미어 100% 머플러",
    reason: "깃털처럼 가볍고 따뜻함이 남달라 한 번 두르면 겨울마다 가장 먼저 손이 가는 명품 선물이에요.",
    tip: "얼굴빛을 화사하게 살려주는 오트밀 멜란지나 클래식 카멜 색상을 추천해요.",
    message: "“가장 귀하고 따뜻한 온기만 담아 전해드립니다. 늘 건강하고 행복하세요.”",
    rudolph: "보들보들 천상의 촉감! 목에 닿는 순간 감탄사가 절로 나와요."
  },
  {
    id: "red_ginseng_extract_set",
    title: "6년근 고려홍삼 정과와 농축액 스틱 프리미엄 세트",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "10만 원 이상",
    situations: ["감사", "생일", "응원"],
    relationships: ["부모님", "선생님·상사"],
    ageGroups: ["40~50대", "60대 이상"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "10~15만 원 선에서 진세노사이드 함량이 높은 6년근 건강기능식품 세트",
    reason: "원기 회복과 면역력 증진에 탁월하여 부모님이나 은사님께 감사와 공경의 마음을 전하기 최고예요.",
    tip: "기타가공품이 아닌 식약처 인증 '건강기능식품' 마크와 진세노사이드 10mg 이상을 확인하세요.",
    message: "“언제나 건강하시고 오래오래 곁에서 든든하게 계셔주세요. 사랑합니다.”",
    rudolph: "지친 기운을 번쩍 깨워줄 대한민국 대표 보약 특급 배송!"
  },
  {
    id: "daily_14k_necklace",
    title: "14K 로즈골드 원포인트 큐빅 데일리 목걸이",
    gender: ["여성"],
    priceCategory: "10만 원 이상",
    situations: ["생일", "크리스마스"],
    relationships: ["연인"],
    ageGroups: ["20대", "30대"],
    moods: ["기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "12~16만 원 선에서 데일리로 착용하기 좋은 심플 14K 정품 보증서 포함 제품",
    reason: "변색 없이 샤워할 때도 착용 가능하며, 쇄골 라인을 은은하게 빛내주는 로맨틱한 선물이에요.",
    tip: "체인 두께가 너무 얇지 않고 42cm 표준 길이에 여유 조절 고리가 있는 것을 고르세요.",
    message: "“반짝이는 목걸이보다 더 빛나는 너의 미소를 매일 볼 수 있어 행복해.”",
    rudolph: "목걸이를 걸어주는 순간 두 사람 사이가 더욱 달콤해질 거예요!"
  },
  {
    id: "mens_leather_belt_wallet",
    title: "이태리 베지터블 소가죽 자동 버클 벨트 & 반지갑 세트",
    gender: ["남성"],
    priceCategory: "10만 원 이상",
    situations: ["생일", "감사", "응원"],
    relationships: ["연인", "부모님", "선배·동료"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "10~14만 원 선에서 고급 하드케이스 포장의 천연가죽 2종 기프트 세트",
    reason: "출근룩과 일상룩 어디에나 필수적인 실용 품목으로, 남성분들의 품격을 단번에 올려줘요.",
    tip: "허리둘레 조절이 간편한 미세조절 자동 버클과 스크래치에 강한 사피아노 가죽을 추천해요.",
    message: "“어디서든 당당하고 멋진 너의 발걸음을 언제나 응원해!”",
    rudolph: "벨트와 지갑을 맞추면 정장 핏이 두 배로 살아납니다!"
  },
  {
    id: "air_circulator_heater",
    title: "사계절 저소음 공기순환 에어서큘레이터 겸용 온풍기",
    gender: ["여성", "남성", "성별 무관"],
    priceCategory: "10만 원 이상",
    situations: ["집들이", "생일"],
    relationships: ["친구", "형제자매", "선배·동료"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    budgetGuide: "11~15만 원 선에서 BLDC 모터 탑재 및 3D 입체회전 리모컨 모델",
    reason: "새 보금자리의 공기를 쾌적하게 순환시켜주고 계절 상관없이 삶의 질을 획기적으로 올려줘요.",
    tip: "전기세 부담이 적은 고효율 BLDC 모터인지와 분리 세탁이 쉬운 안전망 구조인지 보세요.",
    message: "“새집에서 사계절 내내 쾌적하고 행복한 바람만 가득하길!”",
    rudolph: "집안 공기가 숲속처럼 상쾌해지는 마법의 바람!"
  }
];

/* ==============================================================
   2. 상태 관리 (State)
   ============================================================== */
const state = {
  gender: null,    // '여성', '남성', '성별 무관'
  age: null,       // '10대 이하', '20대', '30대', '40~50대', '60대 이상', '잘 모르겠어요'
  relation: null,  // '부모님', '형제자매', '친구', '연인', '선배·동료', '선생님·상사'
  situation: null, // '생일', '크리스마스', '집들이', '응원', '감사'
  budget: null,    // '1만 원 이하', '1만~5만 원', '5만~10만 원', '10만 원 이상'
  mood: null,      // '실용적인', '기분 전환용', '기억에 남는', '루돌프에게 맡길래요'
  matchedList: [],
  currentIndex: 0
};

/* ==============================================================
   3. 화면 전환 함수
   ============================================================== */
function showSection(sectionId) {
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goHome() {
  showSection('heroView');
}

function goToForm() {
  showSection('formView');
}

/* ==============================================================
   4. 옵션 선택 핸들러
   ============================================================== */
function selectOption(category, value, buttonEl) {
  const parentGrid = buttonEl.parentElement;
  const buttons = parentGrid.querySelectorAll('.select-btn, .price-option-btn');
  
  if (category === 'mood' && state[category] === value) {
    state[category] = null;
    buttonEl.classList.remove('active');
    return;
  }

  buttons.forEach(btn => btn.classList.remove('active'));
  buttonEl.classList.add('active');
  state[category] = value;

  hideValidationError();
}

/* ==============================================================
   5. 유효성 검사 및 안내
   ============================================================== */
function validateInputs() {
  // 1. 성별
  if (!state.gender) {
    showValidationError('groupGender', '선물 받는 분의 [성별]을 선택해주세요!');
    return false;
  }
  // 2. 나이대
  if (!state.age) {
    showValidationError('groupAge', '받는 분의 [나이대]를 골라주세요!');
    return false;
  }
  // 3. 관계
  if (!state.relation) {
    showValidationError('groupRelation', '받는 분과의 [관계]를 선택해주세요!');
    return false;
  }
  // 4. 상황
  if (!state.situation) {
    showValidationError('groupSituation', '선물하는 [상황]을 선택해주세요!');
    return false;
  }
  // 5. 가격대
  if (!state.budget) {
    showValidationError('groupBudget', '원하시는 [가격대]를 선택해주세요!');
    return false;
  }
  return true;
}

function showValidationError(targetGroupId, message) {
  const toast = document.getElementById('validationToast');
  const toastMsg = document.getElementById('validationToastMsg');
  toastMsg.textContent = message;
  toast.classList.add('show');

  const groupEl = document.getElementById(targetGroupId);
  if (groupEl) {
    groupEl.classList.remove('shake-error');
    void groupEl.offsetWidth;
    groupEl.classList.add('shake-error');
    groupEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function hideValidationError() {
  const toast = document.getElementById('validationToast');
  toast.classList.remove('show');
  document.querySelectorAll('.input-group').forEach(el => {
    el.classList.remove('shake-error');
  });
}

/* ==============================================================
   6. 추천 알고리즘 (Scoring & Sorting)
   ============================================================== */
function getRecommendations() {
  const { gender, age, relation, situation, budget, mood } = state;

  // 1) 1차 필터링: 선택한 가격대(budget) 일치 아이템 우선
  let pool = GIFT_DATABASE.filter(item => item.priceCategory === budget);

  if (pool.length === 0) {
    pool = [...GIFT_DATABASE];
  }

  // 2) 점수 계산 (Scoring)
  const scoredItems = pool.map(item => {
    let score = 0;

    // [성별 적합도: 35점]
    if (gender === "성별 무관") {
      score += 30;
    } else if (item.gender.includes(gender)) {
      score += 35;
    } else if (item.gender.includes("성별 무관")) {
      score += 25;
    } else {
      score -= 20; // 다른 성별 전용 제품 감점
    }

    // [상황 매칭: 40점] - 상황에 따라 다른 결과 최우선
    if (item.situations.includes(situation)) {
      score += 40;
    }

    // [관계 매칭: 30점]
    if (item.relationships.includes(relation)) {
      score += 30;
    }

    // [나이대 매칭: 20점]
    if (age === "잘 모르겠어요") {
      score += 15;
    } else if (item.ageGroups.includes(age) || item.ageGroups.includes("잘 모르겠어요")) {
      score += 20;
    }

    // [선물 느낌: 15점]
    if (mood && mood !== "루돌프에게 맡길래요") {
      if (item.moods.includes(mood)) {
        score += 15;
      }
    } else {
      score += 10;
    }

    return { ...item, score };
  });

  // 점수 내림차순 정렬
  scoredItems.sort((a, b) => b.score - a.score);
  return scoredItems;
}

/* ==============================================================
   7. 결과 렌더링 및 인터랙션
   ============================================================== */
function handleRecommend() {
  if (!validateInputs()) return;

  const results = getRecommendations();
  if (results.length === 0) {
    alert("조건에 맞는 선물을 찾을 수 없습니다. 조건을 조금 넓혀보세요!");
    return;
  }

  state.matchedList = results;
  state.currentIndex = 0;

  showSection('loadingView');
  const giftBox = document.getElementById('animatedGiftBox');
  giftBox.classList.remove('open-lid');

  setTimeout(() => {
    giftBox.classList.add('open-lid');
  }, 350);

  setTimeout(() => {
    renderCard(state.matchedList[state.currentIndex]);
    showSection('resultView');
  }, 1050);
}

function renderCard(item) {
  if (!item) return;

  // 요약 뱃지 텍스트: 예) 20대 여성 친구 · 집들이 · 1만~5만 원 · 실용적인
  const moodText = state.mood && state.mood !== "루돌프에게 맡길래요" ? ` · ${state.mood}` : "";
  const genderText = state.gender === "성별 무관" ? "" : `${state.gender} `;
  const summary = `${state.age} ${genderText}${state.relation} · ${state.situation} · ${state.budget}${moodText}`;
  
  document.getElementById('cardConditionSummary').textContent = summary;

  const currentNo = state.currentIndex + 1;
  const totalNo = state.matchedList.length;
  document.getElementById('candidateCountBadge').textContent = `추천 ${currentNo} / ${totalNo}`;

  document.getElementById('cardProductTitle').textContent = item.title;
  document.getElementById('cardBudgetGuide').textContent = item.budgetGuide;
  document.getElementById('cardReason').textContent = item.reason;
  document.getElementById('cardTip').textContent = item.tip;
  document.getElementById('cardMessage').textContent = item.message;
  document.getElementById('cardRudolphComment').textContent = item.rudolph;

  const noMoreBox = document.getElementById('noMoreNotice');
  const nextBtn = document.getElementById('btnNextGift');

  if (state.currentIndex >= totalNo - 1) {
    nextBtn.style.display = 'none';
    noMoreBox.style.display = 'block';
  } else {
    nextBtn.style.display = 'flex';
    noMoreBox.style.display = 'none';
    nextBtn.innerHTML = `<span>다른 선물 보기 🔄</span> <small style="opacity: 0.8; font-size: 13px;">(남은 후보 ${totalNo - currentNo}개)</small>`;
  }
}

function showNextGift() {
  if (state.currentIndex < state.matchedList.length - 1) {
    state.currentIndex++;
    
    const card = document.getElementById('recommendationCard');
    card.style.opacity = '0';
    card.style.transform = 'translateY(6px)';
    
    setTimeout(() => {
      renderCard(state.matchedList[state.currentIndex]);
      card.style.transition = 'all 0.25s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 150);
  }
}

function editConditions() {
  // 이전 선택값 유지된 채로 폼으로 이동
  showSection('formView');
}

/* ==============================================================
   8. 편의 기능 (메시지 복사)
   ============================================================== */
function copyCardMessage() {
  const msg = document.getElementById('cardMessage').textContent.replace(/^“|”$/g, '');
  navigator.clipboard.writeText(msg).then(() => {
    showToast("메시지가 클립보드에 복사되었어요! 💌");
  }).catch(() => {
    const textArea = document.createElement("textarea");
    textArea.value = msg;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showToast("메시지가 복사되었어요! 💌");
  });
}

function showToast(text) {
  const toast = document.getElementById('toastPopup');
  toast.textContent = text;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2200);
}