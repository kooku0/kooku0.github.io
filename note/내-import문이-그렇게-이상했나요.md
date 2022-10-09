---
title: 내 import 문이 그렇게 이상했나요?
speaker: 토스, 박서진
description: "프론트엔드 개발자에게 있어 import 문은 더 이상 낯선 개념이 아닙니다. 그런데 잘 살펴보면 그렇게 작성된 import 문은 JavaScript 표준과는 거리가 있을 가능성이 높습니다.

표준 모듈 시스템인 ECMAScript Modules에 대해 소개하면서, 왜 ESM으로 가야 하는지, 어떻게 갈 수 있는지 소개합니다."
---

## 우리의 Import 문은 왜 이상할까?
### CommonJS

모듈 시스템 없는 JavaScrip, script tag를 Import하면 라이브러리를 쓰면 전역 변수를 참조한다.

변수의 이름이 겹칠 수 있다. 파일을 하나씩 가져오려면 수천개씩 가져오게 된다.

해결하기 위해 commonJs 모듈 시스템이 생겼다.

```js
const jQuery = require('jQeury');
```

도입이 되면서 함수를 가져오는게 쉬워졌다. 

- "파일 단위"의 개발
- 수백개, 수천 개 JS 파일로 분리 가능
- 손쉬운 라이브러리 함수 재사용

우리는 import export 쓰는데 왜 nodeJs는 commonjs를 사용할까?

ts, babel 때문이다.

ts-compiler, babel을 쓰면 import/export가 require가 된다.

우리는 import/export 쓰지만 사실 require 쓰는거랑 같다.

commonJS는 표준이 아니라서 지원하지 않는 곳에서는 사용할 수 없다.

#### 문제점 1. 정적 분석의 어려움

```js
if (SOME_COMDITION) {
  React = require('react');
}
```

어떤 코드가 임포트되는지 정적 분석에 어렵다. 그래서 트리 쉐이킹같은게 commonjs 시스템에서는 어렵다.

#### 문제점 2. 비동기 모듈 정의 불가능

commonJs는 초기화 되었는지 확인한 후에 사용이 가능한다.

#### 문제점 3. 조용한 require 함수 재정의


### ECMAScript Modules (ESM)

표준임.

#### 쉬운 정적 분석
조건문으로 임포트할 수 없다. 

import export가 키워드라 다른 변수처럼 재할당이 불가능 하다.

#### 쉬운 비동기 모듈

기본적으로 비동기 적으로 동작하기에 가능하다.

#### 언어 표준

Node.js 뿐만 아니라 브라우저, Deno 등에서도 쉽게 사용할 수 있음

#### 정리

##### CommonJS
- require
- 정적 분석 어려움
- 동기
- 언어 표준이 아님

##### ESM
- import / export
- 정적 분석 쉬움
- 비동기
- 언어 표준

### Node.js 생태계는 ESM으로 가고 있다.

하지만 에러 메시지들의 원인이 되고 있다.

#### 동기-비동기
- 비동기 -> 동기 사용가능
- 동기 -> 비동기 사용하기 어려움
---
- ESM -> 기존 CommonJS 사용가능
- 기존 CommonJS -> ESM 사용가능 어려움

ESM은 require 불가능

ESM으로 모두 바꾸면 해결가능

## 어떻게 하면 올바른 import 문을 사용할 수 있을까?

nodejs는 너무 많은 CommonJS 라이브러리들이 많다.

packages.json type: module 이건 ESM으로 동작한다. 그러면 모두 바뀌게 된다. 

commonJS가 ESM으로 바뀌게 된다. > 패키지 하위가 모두 import가 된다.

default는 commonJS

.js 파일은 가장 가까운 package.json을 참고한다.

.cjs는 항상 CommonJS, .mjs는 항상 ESM이다.

.cjs -> 항상 require()

.mjs -> 항상 import

type: module이더라도 파일이 cjs 확장자면 commonjs로 바뀐다.

---

### ESM으로 옮기는 길의 난관

1. 우리가 사용하는 가짜 ESM
2. 성숙하지 않은 생태계

#### 문제가 있는 코드

```js
import { Component } from './MyComponent'
```

#### 문제가 없는 코드

```js
import { Component } from './MyComponent.js'
```

Node.js require는 순회를 하면서 확장자를 알아서 붙혀준다.

내가 Node.js에서 후회하는 10가지

ESM에서는 import 하는 확장자가 명시되기를 원한다.

import export가 tsc, babel은 트렌스파일러는 어쩔 수 없지만 확장자를 정확하게 명시해야 한다.

### TypeScript 4.7

정식 버전에서 ESM 지원 시작

ts파일만 있다고 하더라도 js 확장자로 임포트해야 한다.

이렇게 되면 웹팩같은거랑 궁합이 맞지 않다. 장기적으로는 달라질수있지만 현재는 이렇다.

### TS의 CJS-ESM

라이브러리 지원 subpath import 

next/app 해당

cmj는 잘되는데 esm 는 안됨.. 이유는 esm는 확장자는 제대로 넣어줘야 하기에. 그래서 이렇게 써야함

```js
await import('next/app.js')
```

```js
{
  exports: {
    './app': {
      "import": "./app.js"
    }
  }
}
```

이렇게 명시해주면 된다.

하지만 next는 아직 지원안한다.

jest, ts-node, yarn은 모두 require의 동작을 바꾼다.

jest를 쓰면 jest.mock으로 mocking한다.
jst require 한후 몽키패칭하여 사용한다.

esm에서는 잘 동작하지 않는다.

### 지금은 어떤 서비스를 옮길 수 있을까?

- typescript를 사용하지 않을때
- ...

### 서비스 ESM으로 옮기기

#### 패키지를 ESM으로 바꾸기

type: module

- 파일 확장자 추가
- require() 호출 삭제
- `__dirname` 같은 전역변수 사용하지 않기
- 최후의 수단 require를 어쩔 수 없이 사용하는 경우는 createRequire 사용하면 된다


