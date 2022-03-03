---
title: Data Fetching Library 어떻게 사용해야할까?
date: 2021-07-22
cover: ../images/data-fetching-library-cover.png
tags: ["라이브러리"]
keywords: ["data fetching library", "react-query", "라이브러리"]
---

Data fetching library가 탄생하게된 배경과 장점

<!--truncate-->

## 기존 상태관리 라이브러리들의 문제점

### 1. 데이터 일관성 (Consistency)

많은 Frontend Project들이 React, Vue 등을 이용해 SPA로 개발되고 있습니다. 이러한 SPA는 Application의 데이터가 Frontend와 Backend 두 곳에 있다는 것을 의미했습니다. Redux와 같은 상태관리 라이브러리를 사용할 때 Store를 Backend 상태에 대한 Data Cache로 사용하는 경우가 대부분이기 때문입니다. 데이터를 fetching 한 후 store에 저장하여 필요한 곳에서 사용하는 것이죠. 하지만 fetching 해온 데이터의 경우 시간이 지날수록 Backend 데이터와 일관성이 깨지기 때문에 데이터를 최신으로 유지하기 위해 주기적으로 호출함(refetching)으로써 Frontend, Backend 두 곳에 존재하는 데이터 상태를 동기화하여 데이터 일관성을 최대한 보장해주려고 노력합니다. 그리고 이는 추가적인 많은 코드작성이 필요하다는 것을 의미하기도 했습니다.

### 2. 비동기 미들웨어 사용의 복잡함

Redux에서 데이터를 비동기적으로 fetching 해오기 위해 redux-saga와 같은 미들웨어를 사용하는 경우가 많이 있습니다. 그리고 위에서 말한 문제점인 데이터 일관성의 문제를 해결하기 위해 데이터 패칭과 관련 상태와 액션들을 모두 정의하고 주기적인 refetching 로직이 추가됨에 따라 안그래도 거대한 Layer가 더욱 비대하고 복잡해졌습니다. Redux가 너무 많은 일들을 하게 된 것이죠.

## Data fetching library를 사용함으로써 얻을 수 있는 것들

- **Server-state** library (Redux, Mobx등은 **client-state** library로 비동기 데이터를 저장하는데 사용할 수 있지만 비효율적)
- Server 와 Client간의 비동기 작업 관리

### 1. Data Synchronization

Data fetching library를 사용하게 되면 데이터 일관성의 문제를 해결하는 역할이 개발자가 아닌 라이브러리로 바뀌게 됩니다. fetching 해온 데이터는 캐싱하여 관리하고 오래된 데이터는 background에서 자동으로 업데이트합니다.

#### 자동으로 background에서 refetching 하는 경우

- query가 mount 되었을 때
- window가 refocuse 되었을 때
- network가 재연결 되었을 떄
- query configure로 refetch interval를 설정했을 때

### 2. Simple

일일히 정의해줘야할 data-fetching과 관련된 상태(status, data, isFetching, isSuccess, isError)를 한꺼번에 제어할 수 있으며 데이터 동기화 로직과 redux-saga에서 작업하는 비동기 로직을 완전히 걷어낼 수 있습니다.

## 어떻게 사용해야할까?

:::note
예시로 react-query를 이용하겠습니다.
:::

기본적으로 api call을 해와서 사용해야하는 모든 데이터들은 server-state-library를 사용해야합니다. api call을 해온 데이터는 서버에서 내려주는 데이터이기 때문에 client에서 서버의 데이터와 동기화를 하기 위해서 입니다. 그렇다면 컴포넌트에서 바로 사용하는 것일까요?

```tsx title="/src/components/TodoList.tsx"
function TodoList() {
  // highlight-start
  const { status, data, error } = useQuery("todos", fetchTodoList, {
    suspense: true,
    staleTime: 5 * 60 * 1000,
  });
  // highlight-end

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data
        .filter((item) => item.enabled)
        .map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
    </ul>
  );
}
```

보통 외부 라이브러리를 사용할 경우 바로 사용하는 것 보다 hooks로 감싸줘 컴포넌트와 인터페이스로 소통하면 좋습니다. 그래야 테스트코드도 짜기 쉽고 외부 라이브러리와의 의존성도 낮아지게 됩니다. 훅스를 사용해 각 api 마다 다르게 해줘야할 셋팅도 해줄 수 있죠. 예를 들면 몇 초마다 pulling 해올지, cache-key 등등...  
이렇게 받은 데이터는 각 컴포넌트에서 바로 사용하지 않고 select를 이용해 가공한다던가 순수 함수를 이용해 각 컴포넌트에 맞게 가공해서 사용하면 됩니다.

```tsx title="/src/hooks/useTodos"
function useTodos() {
  return useQuery("todos", fetchTodoList, {
    select: (todos: Todo[]) => {
      todos.filter(item => item.enabled);
    }
    suspense: true,
    staleTime: 5 * 60 * 1000,
  });
}

export default useTodos
```

```tsx title="/src/components/TodoList.tsx"
import useTodos from "src/hooks/useTodos";

function TodoList() {
  // highlight-next-line
  const { status, data, error } = useTodos();

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data
        .filter((item) => item.enabled)
        .map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
    </ul>
  );
}
```

## reference

- [리덕스 잘 쓰고 계시나요?](https://ridicorp.com/story/how-to-use-redux-in-ridi/)
- [Does React Query replace Redux, MobX or other global state managers?](https://react-query.tanstack.com/guides/does-this-replace-client-state)
- [How and Why You Should Use React Query](https://blog.bitsrc.io/how-to-start-using-react-query-4869e3d5680d)
- [React Query 살펴보기](https://maxkim-j.github.io/posts/react-query-preview)
- [React Query로 서버 상태 관리하기](https://blog.rhostem.com/posts/2021-02-01T00:00:00.000Z)
- [Why I Stopped Using Redux](https://dev.to/g_abud/why-i-quit-redux-1knl)
- [CAP 정리](https://ko.wikipedia.org/wiki/CAP_%EC%A0%95%EB%A6%AC)
