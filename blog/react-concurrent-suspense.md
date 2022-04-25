---
title: React Concurrent suspense
date: 2022-03-17
tags: [react]
keywords:
  [
    "react 18",
    "react",
    "concurrent mode",
    "suspense",
    "Lagacy Suspense",
    "Concurrent Suspense",
  ]
---

이번에는 React v18에 추가된 Concurrent suspense에 대해 소개하려고 합니다.

이전 포스팅인 [React v18 Concurrent mode](https://kooku0.github.io/blog/react18-concurrent-mode/)와 이어지는 내용이기도 하고, 많은 프론트엔드 개발자분들이 관심있게 보고 다루었던 주제입니다. 관련 유튜브 영상이나 블로그 글도 많이 있구요.

Concurrent suspense는 React v18의 Concurrent mode 매커니즘을 통해 구현된 기능입니다. 정확히는 **Concurrent mode의 Intentional Loading Sequences**를 구현했죠.

<!--truncate-->

:::tip

실제 Concurrent Suspense가 개발된건 오래되었습니다. [Building Great User Experiences with Concurrent Mode and Suspense](https://ko.reactjs.org/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense.html) 하지만 React 팀에서는 1년간 검증과 테스트를 하였죠.

:::

이전의 Suspense는 v16.6에 추가된 React.lazy와 함께 동작하는 Lazy Suspense 였습니다. React.lazy로 감싼 컴포넌트가 렌더링될 때의 fallback을 보여주었습니다.

v18에 정식으로 릴리즈되는 Concurrent suspense는 concurrent mode의 소개에서도 보았듯이 data fetching이 완료되어 충분한 상태가 될때까지 기다린 후 memory에서 렌더링을 완료하여 보여주게 하는 기능이 가능합니다.

다음 코드를 통해 관련 주요기능들을 설명하겠습니다.

```jsx
const SUSPENSE_CONFIG = { timeoutMs: 2000 };

function App() {
  const [resource, setResource] = useState(initialResource);
  /* highlight-next-line */
  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);
  return (
    <>
      <button
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            const nextUserId = getNextId(resource.userId);
            setResource(fetchProfileData(nextUserId));
          });
        }}
      >
        Next
      </button>
      {isPending ? " Loading..." : null}
      {/* highlight-next-line */}
      <Suspense fallback={<Spinner />}>
        <ProfilePage resource={resource} />
      </Suspense>
    </>
  );
}
```

Susponse로 감싼 ProfilePage의 경우 내부에 data-fetching하는 로직이 들어있습니다. data-fetching중일 경우에는 Suspense의 fallback인 `spinner`가 보여질꺼라고 예상할 수 있습니다. 하지만 React 팀은 버튼을 클릭하거나 화면이 전환될 때 loading이나 spinner 등을 보여주는게 사용자 입장에서 더 오래 기다린다 라는 느낌을 받기에 이를 해결하려고 했습니다. 이 해결방안이 **의도된 지연로딩**입니다. **의도된 지연로딩은** data fetching이 1초 안에 거의 완료되는 점에 착안하여 fetching중일 때 어느 정도(예를 들어 1초)기간은 이전 화면을 보여주고(loading or spinner는 보여주지 않음) 정한 시간이 지난후에 data-fetching이 완료되어 렌더링이 다 된 화면을 보여주는 기법입니다.

이때 사용하는 것이 `useTransition` 으로 이번에 새로 나오는 hooks입니다~!

Concurrent suspense로 인해 UX 측면에서도 크게 향상되었고 코드를 짜는 개발자 입장에서도 엄청난 코드개선을 이뤄낼 수 있습니다.

유저는 새로운 화면이나 버튼을 클릭했을 때 매번 loading이나 spinner를 보지않아도되고, 개발자 입장에서는 loading과 관련된 다른 상태에 대한 분기처리를 따로 해주지 않아도 됩니다. 위의 코드를 예로 들자면 Suspense가 없었더라면 `ProfilePage`에서 fetching 중일때 Spinner를 보여주고 실패할 때는 실패 컴포넌트를 구현해야하지만 Concurrent suspense를 도입함에 따라 `ProfilePage` 컴포넌트에서는 항상 성공상태의 코드만 작성하면 됩니다. 컴포넌트의 실제 역할에 대한 로직만 구현하면 되는거죠.

### 마무리

이번 v18은 react hooks가 처음 나왔을 때처럼 React 개발진영에서 많은 센세이션을 불러일으킬 것 같습니다.
