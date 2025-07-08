# 새로운 프로젝트 소개
backend/
├── build.gradle
├── settings.gradle
├── gradlew
├── gradlew.bat
├── README.md
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/demo/
│   │   │       ├── DemoApplication.java
│   │   │       ├── config/          # 설정 관련 클래스들 (Security, CORS, Redis 등)
│   │   │       ├── domain/          # 엔티티와 도메인 로직
│   │   │       │   ├── member/      # 도메인 별로 구성 (ex. 회원, 게시판 등)
│   │   │       │   │   ├── entity/
│   │   │       │   │   ├── repository/
│   │   │       │   │   └── service/
│   │   │       ├── dto/             # DTO 클래스들 (Request/Response)
│   │   │       ├── exception/       # 예외 처리 관련 클래스들
│   │   │       └── controller/      # RestController 들
│   │   └── resources/
│   │       ├── application.properties (또는 .yml)
│   │       ├── static/
│   │       └── templates/
│   └── test/
│       └── java/
│           └── com/example/demo/
│               └── ... 테스트 코드들
----------------------------------------------------------------------------------------------------
frontend/
src/
├── apis/              # API 호출 관련 함수들 (axios 등)
│   └── memberApi.ts
│   └── boardApi.ts
├── assets/            # 이미지, 폰트, SVG 등 정적 자산
│   └── images/
│   └── icons/
├── components/        # 재사용 가능한 UI 컴포넌트들 (Button, Modal 등)
│   └── common/
│   └── layout/
│   └── form/
├── features/          # 기능(도메인) 단위로 관리되는 실제 페이지 구성 요소
│   └── member/
│       ├── MemberPage.tsx
│       ├── MemberForm.tsx
│       ├── memberSlice.ts (redux/toolkit 사용 시)
│   └── board/
│       └── ...
├── hooks/             # 커스텀 훅 모음
│   └── useInput.ts
├── layouts/           # 페이지 전체 레이아웃 구성 (예: Navbar, Footer 포함)
│   └── MainLayout.tsx
├── pages/             # 라우팅에 사용되는 최상위 페이지들
│   └── Home.tsx
│   └── Login.tsx
├── routes/            # react-router-dom 설정 (v6 기준)
│   └── index.tsx
├── store/             # 전역 상태 관리 (Redux, Recoil 등)
│   └── index.ts
├── types/             # TypeScript 인터페이스, 타입 정의
├── utils/             # 유틸 함수들
│   └── validator.ts
│   └── formatter.ts
├── App.tsx
├── main.tsx
└── vite-env.d.ts
