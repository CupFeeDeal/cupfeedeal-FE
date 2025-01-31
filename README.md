<div align="center">
 
#  [CupfeeDeal](https://cupfeedeal-intro.vercel.app)
CEOS 20th<br/><br/>

</div>

## ☕서비스 소개

> 하루 한 잔 만나는 소소한 행복 <b>'CupfeeDeal'</b> <br/>

<p align="center">
 <img src="https://github.com/user-attachments/assets/241ddf6a-4ea2-41d3-a2e2-83a001b2a8f5" width="1080"/>
</p>
<p align="center">
 <img src="https://github.com/user-attachments/assets/fe9b157a-154f-4b08-8294-41009ae09107" width="1080"/>
</p>
<p align="center">
 <img src="https://github.com/user-attachments/assets/2538f3a6-5049-4133-9033-6fb04c8aa065" width="1080"/>
</p>
<br/>
<br/>

## 💻주요 기능

### 🏠HOME

<p>
 <img src="https://github.com/user-attachments/assets/0ec33d70-4077-4923-b695-e51a69114af2" width="1080"/>
</p>

- 홈 배너는 로그인 여부와 구독권 개수 여부에 따라 동적으로 바뀌며, 키우고 있는 컵캣 표시
- 지도 그래픽을 통해 탐색 페이지로 이동
- 추천 카페와 새로 오픈한 카페 표시(스켈레톤 이미지 적용), 상세정보 페이지 라우팅
- 푸터의 약관이나 정보처리방침 등은 외부 페이지 연결로 확인 가능하며, 카카오 버튼을 누를 경우 카카오 채널 채팅방으로 연결

<br/><br/>

### 🔍탐색

<p>
 <img src="https://github.com/user-attachments/assets/9a315311-daad-412e-9f9a-a3f8bf070856" width="1080"/>
</p>

- 네이버 지도 API v3을 이용한 지도 탐색
- 사용자의 현위치로 이동 가능하며, 해당 위치 기준으로 가까운 카페 리스트 정렬
- 비로그인한 유저의 경우, 카페 검색기능 및 바텀시트를 통한 상세 정보 제공
- 로그인 유저의 경우, 특정 카페를 즐겨찾기로 저장한 후 저장한 카페를 필터링하여 탐색 가능
- 탐색 페이지 진입 시 구독 가능한 카페는 원두 마커로, 즐겨찾기 한 카페는 하트 마커로, 현재 선택된 카페는 말풍선 원두 마커로 구분하여 표기
- 페이지 진입과 바텀시트에 스켈레톤 적용으로 사용자 경험 개선
  <br/><br/>

### 💸구독권 구매

<p>
 <img src="https://github.com/user-attachments/assets/716c0121-fa33-4113-988c-1c469f61a3b4" width="1080"/>
</p>

- 사용자의 현위치로부터 카페의 거리 표기 및 상세 정보 표시
- 즐겨찾기 설정/해제 기능
- 유저의 구독여부, 구독권 개수에 따라 구독하기 버튼 비활성화 및 안내
  - 이미 구독중이에요 버튼 / 이미 3개의 구독권을 이용중이에요 안내 모달 렌더링
- 구매, 연장에 따라 다르게 보이는 결제 페이지
  - 구매: 2주권, 4주권 선택 후 달력에서 시작일을 선택
  - 연장: 2주권, 4주권을 선택하면 자동으로 달력에서 만료일 다음으로 시작일을 계산해서 보여줌 (달이 넘어갈 경우 달력 자동 넘김)
  - 버튼도 구매일 경우, 연장일 경우를 나누어 텍스트를 다르게 띄움
  - 시작일과 만료일이 설정되면 달력에서 해당 기간 사이의 배경을 표시
- 결제는 토스페이먼츠로 진행 (현재는 공개 클라이언트 키)
- 결제 성공 여부, 구독/연장 여부에 따라 적절한 안내 모달 렌더링
- /payment?type=new&id={현재 구독 중인 카페 id}, 혹은 /payment?type=extend&id={현재 구독 중이지 않은 카페 id}로 접근할 경우 에러 페이지 렌더링

<br/><br/>

### 🗃️구독권 사용

<p>
 <img src="https://github.com/user-attachments/assets/22fed4b8-af52-442f-8b66-b223be1c892b" width="1080"/>
</p>

- 현재 구독 중인 구독권들과 그 정보 표시
- 구독권은 총 3개까지만 가능하며 1개/2개/3개일 때 각각 케이스에 맞는 디자인으로 보여짐
- 카드들이 겹쳐있는 형상으로, 기본적으로는 가장 앞의 것이 활성화되어 있지만 뒤의 카드를 선택면 앞의 카드들이 내려가고 선택한 카드가 활성화됨
  - 활성화 된 카드: 카페 이름, 구독 정보, 혜택 본 정도(있을 때만), 사용버튼(or 사용 완료 스탬프), 관리 버튼 표시
  - 활성화되지 않은 카드: 카페 이름, 관리 버튼 표시
- 사용하기 버튼을 누를 경우 사용 완료 스탬프가 찍히며 그 날 하루는 해당 구독권을 사용할 수 없음. 다음 날에 다시 사용 버튼 활성화
- 발자국을 찍은 카드(혜택을 본 첫 시점부터 발자국 생성 및 모달 렌더링)가 있는 경우 배경에 발자국이 보여지며, 발자국 개수에 따라 1~3개까지 적절히 표시
- 첫 발자국을 찍은 이후엔 이득 본 정도를 컵 수와 문구로 카드에 표시
- 관리 버튼을 누르면 구독의 연장과 취소 가능. 취소의 경우엔 금액과 관련된 안내 모달 이후 승인 시 바로 적용되고 연장의 경우엔 위에서 서술한 결제 페이지로 이동

<br/><br/>

### 👩🏻‍💻마이페이지

<p>
 <img src="https://github.com/user-attachments/assets/ec3459cf-661f-47b8-bbd6-d2fdcf2e8305" width="1080"/>
</p>

- 현재 유저의 레벨과 그에 따른 컵캣을 마이페이지 배너에서 표기
- 구독권 구매에 따른 레벨 상승 관련 정보 안내
- 구독 내역의 경우 자신이 지금까지 구매한 (사용 완료/ 사용 중/ 사용 예정) 구독권들을 모아 볼 수 있으며, 검색 및 사용 가능 구독권만 보기 필터링 제공
- 구독 내역에서 만료된 구독권은 다시 구독을, 구독 중인 카페는 연장 또는 취소 페이지로 이동
- 지나간 컵캣에서는 구독권 구매에 따라 획득한 컵캣을 카페 이름과 함께 모아보도록 표시
- 1일 뒤 재변경 가능한 닉네임 변경 기능
- 메일과 문의 유형, 내용을 입력하여 전송하는 문의하기 기능
- 로그아웃 및 회원탈퇴

<br/><br/>

## 💁‍♀️배포 링크

[커피 구독하러 가기 →](https://cupfeedeal.xyz/)<br/>

<p>
 <img src="https://github.com/user-attachments/assets/494a04dc-4df5-4470-89d7-590249e61da3" width="800">
</p>

<br/><br/>

## 🧙‍♂️팀원 소개

### 프론트엔드 개발

|                                                        송유선                                                         |                                                         최지원                                                         |
| :-------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/281dd200-27a1-44a3-b007-6f52474800d0" width="170" height="170"/> | <img src= "https://github.com/user-attachments/assets/f4658b95-d0c7-46d8-a3a9-f5fd2b28d730" width="150" height="150"/> |
|                         (auth) + onboarding/ <br /> home/ <br/> payment/ <br/> subscription/                          |                 search/(?id=#) <br /> search/nearList/ <br /> mypage/ <br/> previous, history, ask, +@                 |

<br/>

<br/>

## 🛠️ 사용 스택

##### Environment

<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

##### Development

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/zustand-000000.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"/>
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"/>

##### Deployment

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white" alt="Vercel Badge" />
<br/>
<br/>

## 📜 컨벤션

### Git Flow

```
- main: 배포용 브랜치
- dev: 개발용 브랜치 (각 기능 브랜치에서 작업한 내용 통합)
- feat-issue#-{기능명}: 개인별 기능 개발 브랜치
- hotfix: 기능 브랜치 생성 후 버그가 생겼을 경우 수정하는 브랜치
```

1. 작업 전 구현할 내용을 정리하여 이슈 템플릿에 따라 이슈 생성
2. 해당 이슈번호로 브랜치 생성 ex. feat-12-탐색-api
3. 각 브랜치에서 작업 후 PR 생성 및 dev로 Merge

### Commit

| Type     | Description                         |
| -------- | ----------------------------------- |
| feat     | 새로운 기능 추가                    |
| fix      | 버그 수정                           |
| docs     | README 수정                         |
| style    | 기능 수정 없는 코드 스타일 변경     |
| refactor | 코드 리팩토링                       |
| chore    | 패키지 매니저 수정, 그 외 기타 수정 |
| design   | CSS 등 디자인 변경                  |
| init     | 개발 환경 세팅                      |

<br/>

## 🗂️ 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📂client
 ┃ ┣ 📂server
 ┃ ┣ 📜client.ts
 ┃ ┣ 📜server.ts
 ┃ ┗ 📜token.ts
 ┣ 📂app
 ┃ ┣ 🔐(auth)
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┣ 📂oauth/callback/kakao
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 🏠home
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 👩🏻‍💻mypage
 ┃ ┃ ┣ 📂@modal
 ┃ ┃ ┣ 📂ask
 ┃ ┃ ┣ 📂history
 ┃ ┃ ┣ 📂level
 ┃ ┃ ┣ 📂nickname
 ┃ ┃ ┣ 📂quit
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ ☕onboarding
 ┃ ┃ ┣ 📜OnboardingContent.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 💸payment
 ┃ ┃ ┣ 📂_clients
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┣ 📂_hook
 ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┗ 📜PaymentWrapper.tsx
 ┃ ┣ 🔍search
 ┃ ┃ ┣ 📂nearList
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┣ 📂_constants
 ┃ ┃ ┣ 📂_hooks
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 💳subscription
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┣ 📂_utils
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜error.tsx
 ┃ ┣ 📜font.ts
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜not-found.tsx
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┗ 📂json
 ┣ 📂common
 ┣ 📂hooks
 ┣ 📂store
 ┗ 📂types
```

<br>
