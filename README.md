# 모아장부 웹앱 (지인 공유용)

내 휴대폰에만 저장되는 가계부예요. 로그인과 초대가 없고, 링크를 받은 사람마다 자기 휴대폰에 자기 장부가 따로 생겨요. 장부 데이터는 어디로도 전송되지 않아서 만든 사람도 볼 수 없어요.

## 폴더 안 파일

| 파일 | 역할 |
| --- | --- |
| index.html | 앱 본체 |
| manifest.webmanifest | 홈 화면에 추가할 때 쓰는 앱 이름과 아이콘 정보 |
| sw.js | 인터넷이 없어도 열리게 하는 파일 |
| icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png | 앱 아이콘 |

7개 파일을 모두 함께 올려야 해요. 이 폴더는 PAMO 소스(`source`)와 분리되어 있어요.

## 처음 올리기 (GitHub Pages, 무료, 약 5분)

1. github.com에 로그인하고 오른쪽 위 **+** → **New repository**를 누릅니다.
2. Repository name에 `moajangbu`를 적고 **Public**을 고른 뒤 **Create repository**를 누릅니다.
   - 무료 계정은 Public 저장소만 Pages를 쓸 수 있어요. 올라가는 건 앱 코드뿐이라 장부 데이터는 공개되지 않아요.
3. 새 저장소 화면에서 **uploading an existing file**을 누르고, 이 폴더의 파일 7개(README.md는 선택)를 끌어다 놓은 뒤 **Commit changes**를 누릅니다.
4. 저장소의 **Settings** → 왼쪽 **Pages** → Source를 **Deploy from a branch**, Branch를 **main** / **(root)**로 고르고 **Save**를 누릅니다.
5. 1~2분 뒤 같은 화면 위쪽에 주소가 나와요. 형식은 `https://<GitHub 아이디>.github.io/moajangbu/`예요.
6. 그 주소를 지인들에게 보내면 끝이에요.

## 고친 버전 올리기

1. 저장소에서 **Add file** → **Upload files**로 바뀐 파일을 다시 올립니다(같은 이름이면 덮어써요).
2. `sw.js` 첫 부분의 `VERSION = "moajangbu-v1"`을 `v2`, `v3`처럼 올려서 같이 올립니다. 그래야 이미 설치한 사람들도 새 버전을 받아요.
3. 사용자 장부 데이터는 그대로 남아요.

## 받는 사람 안내 (그대로 복사해서 보내도 돼요)

> 모아장부 링크예요: (주소)
> 아이폰: Safari로 열고 공유 버튼 → 홈 화면에 추가 → '웹 앱으로 열기' 켜고 추가
> 갤럭시: 삼성 인터넷이나 Chrome으로 열고 메뉴 → 홈 화면에 추가
> 장부는 내 휴대폰에만 저장돼요. 자산 탭 → 백업에서 2주에 한 번쯤 백업 파일을 저장해 두세요.

## 알아둘 점

- 휴대폰을 바꾸거나 브라우저 데이터를 지우면 장부가 사라져요. 백업 파일로 옮겨야 해요.
- 같은 사람이라도 Safari와 홈 화면 앱, 휴대폰과 PC의 장부는 서로 따로예요.
- 신한카드·신한은행 문자는 자동으로 읽어요. 다른 카드사 문자와 캡처 읽기는 이 버전에는 없어요(claude.ai 버전에만 있음).
- 통계 탭의 PAMO 월간 요약 파일은 PAMO-Household의 `monthly_summary_YYYY-MM.json`과 같은 형식이에요.
