## Production 빌드하기

빌드 : 코드와 애플리케이션이 사용하는 이미지, css 파일 등의 파일을 모두 모아서 패키징하는 과정

<br />

### 빌드 과정에서 소프트웨어 보안 및 성능 최적화를 위해 사용되는 기술
- 난독화(Obfuscation)
    
    - 목적 : 코드를 읽거나 분석하기 어렵게 만들어서 소프트웨어를 해킹이나 역공학으로부터 보호하는 것이 주된 목적
    - 동작 : 코드의 구조를 변형하거나 재배치하여 기존 코드를 어렵게 만듦. 변수와 함수명을 의미없는 문자열로 바꾸거나, 코드 흐름을 복잡하게 만들어서 분석이 어렵게 함.

- 축소(Shrinking or Minification)

    - 목적 : 코드 크기를 최소화하여 다운로드 및 실행 속도를 향상시키는 것이 주된 목적으로, 특히 웹 애플리케이션의 경우 작은 파일의 크기는 빠른 로딩을 가능하게 함
    - 동작: 코드에서 주석, 공백, 줄 바꿈 등을 제거하고, 변수와 함수명을 짧은 이름으로 바꾸는 등의 최적화 작업을 수행함
    - 예시)

        JavaScript 최적화 도구:

        [UglifyJS]

        UglifyJS는 JavaScript 코드를 축소화하고 난독화하는 도구입니다.

        주석, 공백, 줄 바꿈 등을 제거하고 변수명, 함수명을 짧은 이름으로 변경하여 코드 크기를 최소화합니다.

        예시 명령어: uglifyjs input.js -o output.js

        [Terser]

        Terser는 UglifyJS의 후속 버전으로 더 빠르고 효율적인 최적화를 제공합니다.

        ES6+ 문법을 지원하며, 코드를 난독화하고 축소화할 수 있습니다.
        
        예시 명령어: terser input.js -o output.js
        
        <br />

        CSS 최적화 도구:

        [CSSNano]
        
        CSSNano는 CSS 코드를 최적화하는 도구로, 공백, 줄 바꿈, 주석을 제거하고 선택자, 속성명을 축소합니다.
        
        예시 명령어: cssnano input.css -o output.css
        
        [CleanCSS]
       
        CleanCSS는 CSS 코드를 최적화하고 축소화하는 데 사용되며, 선택적으로 코드를 난독화할 수 있습니다.
       
        예시 명령어: cleancss input.css -o output.css
        
        <br />

        HTML 최적화 도구:

        [HTMLMinifier]
        HTMLMinifier는 HTML 코드를 최적화하는 도구로, 불필요한 공백, 줄 바꿈, 주석을 제거하고 코드를 축소화합니다.
        예시 명령어: html-minifier input.html -o output.html

<br />

여튼, 이렇게 최종적으로 만들어진 파일들은 build 폴더에 모이게 되는데, 


### build

먼저! 빌드를 하기 위해서는 터미널을 열어 아래와 같이 명령어를 실행해야 함. 

```terminal
npm run build
```

명령이 실행되면 빌드가 진행되고, 완료된 이후에는 build 폴더가 생성됨. 

이 build 폴더 내에는 index.html 파일, 이미지, css 파일과 javascript bundle 파일이 static 폴더 안에 각각 들어감 

<br />

이제 생성된 빌드 파일들을 이용해서 웹 애플리케이션을 실행하기 위해! serve라는 패키지를 설치해줌

### serve

```terminal
npm install -g serve
```

serve는 이름 그대로 static 파일들을 서빙해주는 역할을 하는 프로그램. 

`-g` 옵션을 넣어 글로벌 모드로 serve 패키지를 설치하게 되면 각 프로젝트 폴더 내에 설치되는 것이 아니라, 현재 사용 중인 컴퓨터의 다른 경로 어디에서든지 사용할 수 있게 됨. 

<br />

```terminal
serve -s build
```

serve를 설치한 이후에 위와 같이 `serve -s build` 명령어를 실행하여 build 폴더를 기반으로 웹 애플리케이션을 서빙함