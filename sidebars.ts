import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  books: [
    'books/index',
    {
      type: 'category',
      label: '클린코드',
      items: ['books/clean-code/introduction'],
    },
    {
      type: 'category',
      label: '오브젝트',
      items: [
        'books/object/introduction',
        'books/object/preface',
        'books/object/01',
        'books/object/02',
        'books/object/03',
        'books/object/04',
      ],
    },
    {
      type: 'category',
      label: '프레임워크 없는 프론트엔드 개발',
      items: [
        'books/frameworkless-front-end-development/introduction',
        'books/frameworkless-front-end-development/01',
        'books/frameworkless-front-end-development/02',
        'books/frameworkless-front-end-development/03',
        'books/frameworkless-front-end-development/05',
        'books/frameworkless-front-end-development/06',
        'books/frameworkless-front-end-development/07',
        'books/frameworkless-front-end-development/08',
      ],
    },
    {
      type: 'category',
      label: '만들면서 배우는 클린 아키텍처',
      items: [
        'books/get-your-hands-dirty-on-clean-architecture/introduction',
        'books/get-your-hands-dirty-on-clean-architecture/01',
        'books/get-your-hands-dirty-on-clean-architecture/02',
        'books/get-your-hands-dirty-on-clean-architecture/03',
        'books/get-your-hands-dirty-on-clean-architecture/04',
        'books/get-your-hands-dirty-on-clean-architecture/05',
        'books/get-your-hands-dirty-on-clean-architecture/06',
        'books/get-your-hands-dirty-on-clean-architecture/07',
        'books/get-your-hands-dirty-on-clean-architecture/08',
        'books/get-your-hands-dirty-on-clean-architecture/09',
        'books/get-your-hands-dirty-on-clean-architecture/10',
        'books/get-your-hands-dirty-on-clean-architecture/11',
        'books/get-your-hands-dirty-on-clean-architecture/12',
      ],
    },
    {
      type: 'category',
      label: '스칼라로 배우는 함수형 프로그래밍',
      items: ['books/functional-programming-in-scala/introduction', 'books/functional-programming-in-scala/04'],
    },
    {
      type: 'category',
      label: '이펙티브 타입스크립트',
      items: [
        'books/effective-typescript/introduction',
        'books/effective-typescript/03',
        'books/effective-typescript/04',
      ],
    },
    {
      type: 'category',
      label: '실용주의 프로그래머',
      items: [
        'books/the-pragmatic-programmer/introduction',
        'books/the-pragmatic-programmer/preface',
        'books/the-pragmatic-programmer/01',
        'books/the-pragmatic-programmer/02',
      ],
    },
    {
      type: 'category',
      label: '테스트 주도 개발',
      items: [
        'books/test-driven-development/introduction',
        'books/test-driven-development/preface',
        'books/test-driven-development/01',
        'books/test-driven-development/01',
      ],
    },
    {
      type: 'category',
      label: '함수형 자바스크립트',
      items: [
        'books/functional-programming-in-javascript/introduction',
        'books/functional-programming-in-javascript/preface',
        'books/functional-programming-in-javascript/01',
        'books/functional-programming-in-javascript/02',
        'books/functional-programming-in-javascript/03',
        'books/functional-programming-in-javascript/04',
        'books/functional-programming-in-javascript/05',
        'books/functional-programming-in-javascript/06',
        'books/functional-programming-in-javascript/07',
        'books/functional-programming-in-javascript/08',
      ],
    },
    {
      type: 'category',
      label: '디자이너를 위한 웹 성능 최적화 기법',
      items: [
        'books/designing-for-performance/introduction',
        'books/designing-for-performance/01',
        'books/designing-for-performance/02',
        'books/designing-for-performance/03',
        'books/designing-for-performance/04',
      ],
    },
    {
      type: 'category',
      label: '쏙쏙 들어오는 함수형 코딩',
      items: [
        'books/grokking-simplicity/introduction',
        'books/grokking-simplicity/01',
        'books/grokking-simplicity/02',
        'books/grokking-simplicity/03',
        'books/grokking-simplicity/04',
        'books/grokking-simplicity/05',
        'books/grokking-simplicity/06',
        'books/grokking-simplicity/07',
        'books/grokking-simplicity/08',
        'books/grokking-simplicity/10',
        'books/grokking-simplicity/15',
        'books/grokking-simplicity/16',
        'books/grokking-simplicity/17',
        'books/grokking-simplicity/18',
        'books/grokking-simplicity/19',
      ],
    },
    {
      type: 'category',
      label: '단위 테스트',
      items: ['books/unit-testing/01', 'books/unit-testing/02'],
    },
    {
      type: 'category',
      label: '아주 작은 습관의 힘',
      items: [
        'books/atomic-habit/09',
        'books/atomic-habit/10',
        'books/atomic-habit/11',
        'books/atomic-habit/12',
        'books/atomic-habit/13',
        'books/atomic-habit/14',
        'books/atomic-habit/15',
      ],
    },
  ],
  smartfarm: [
    'smartfarm/index',
    'smartfarm/plan',
    {
      type: 'category',
      label: 'article',
      items: ['smartfarm/article/01', 'smartfarm/article/02'],
    },
    {
      type: 'category',
      label: 'study',
      items: [
        {
          type: 'category',
          label: 'hydroponics',
          items: ['smartfarm/study/hydroponics/hydroponics', 'smartfarm/study/hydroponics/hydroponics-pros-cons'],
        },
        {
          type: 'category',
          label: 'light',
          items: [
            'smartfarm/study/light/food-crops',
            'smartfarm/study/light/growing-underground',
            'smartfarm/study/light/light-spectrum',
            'smartfarm/study/light/light-point',
          ],
        },
        {
          type: 'category',
          label: 'photosynthesis',
          items: [
            'smartfarm/study/photosynthesis/01',
            'smartfarm/study/photosynthesis/02',
            'smartfarm/study/photosynthesis/03',
            'smartfarm/study/photosynthesis/04',
          ],
        },
        {
          type: 'category',
          label: 'co2',
          items: ['smartfarm/study/co2/01'],
        },
        {
          type: 'category',
          label: 'plant',
          items: ['smartfarm/study/plant/01'],
        },
      ],
    },
  ],
  stock: [
    'stock/financial-statements',
    {
      type: 'category',
      label: '기업분석',
      items: ['stock/corp-analysis/nvda'],
    },
  ],
};

export default sidebars;
