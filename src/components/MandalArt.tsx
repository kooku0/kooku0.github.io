/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';

import styles from './MandalArt.module.css';

const MandalArt: FC = () => {
  return (
    <div>
      <OuterTable data={mandalArt} />
    </div>
  );
};

export default MandalArt;

const OuterTable = ({ data }: { data: string[][][][] }) => {
  return (
    <table className={styles.outerTable}>
      <tbody>
        {data.map((row, i) => (
          <tr key={`outer-row-${i}`}>
            {row.map((innerTableData, j) => (
              <td key={`outer-cell-${i}-${j}`}>
                <InnerTable key={`inner-table-${i}-${j}`} data={innerTableData} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const InnerTable = ({ data }: { data: string[][] }) => {
  return (
    <table className={styles.innerTable}>
      <tbody>
        {data.map((row, i) => (
          <tr key={`inner-row-${i}`}>
            {row.map((cell, j) => (
              <td key={`inner-cell-${i}-${j}`}>
                <span>{cell}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mandalArt = [
  [
    [
      ['7시간 자기', '매일 1시간 운동', '하루 20분 명상'],
      ['야식 안먹기', '건강', '많이 걷기'],
      ['간식 안먹기', '매일 공복 18시간 유지하기', '6시에 일어나기'],
    ],
    [
      ['매일 두 시간 이상 공부하기', '개발서적 두달에 한 권 읽기', '자기계발서적 두달에 한 권 읽기'],
      ['블로그 한달에 한편쓰기', '커리어', '매일 아침 개발 뉴스 20분 보기'],
      [
        '공부한 내용을 글로 정리하기',
        '공부한 내용을 잘 설명할 수 있는 능력 기르기',
        '배우거나 트러블 슈팅한 내용 잘 정리하기',
      ],
    ],
    [
      ['주식 매일 한시간 공부하기 & 분석하기', '충동구매 줄이기 (한달 고민하기)', '차트프로 완강하기'],
      ['머신러닝 공부하기', '돈', '데이터 분석 공부하기'],
      [
        '주식으로 오백만원 이상 수익을 달성하기',
        '추세 50% 정확도가 넘는 주식예측 모델 만들기',
        '나의 자산을 정확히 분석하고 있기',
      ],
    ],
  ],
  [
    [
      ['배려있게 말하기 & 행동하기', '인사하기', '웃으면서, 눈을 보며 대화하기'],
      ['비난하거나 잘못을 들추지 않기', '좋은 동료가 되기', '이해하고 존중하기'],
      ['비하하거나 비아냥거리지 않기 (그렇게 느껴지지도 않게)', '겸손하게 대화하기', '격려하고 칭찬을 많이하기'],
    ],
    [
      ['건강', '커리어', '돈'],
      ['좋은 동료가 되기', '후회없는 삶', '취미'],
      ['', '', ''],
    ],
    [
      [
        '한달에 와인 두 병이상 마시기',
        '와인 전문가 자격증 Level3 최고등급 따기',
        '향을 정확히 분석할 수 있는 능력 기르기',
      ],
      ['와인 테이스팅 노트 책 읽기', '취미', '신대륙 와인과 친해지기'],
      ['품종과 나라를 80% 맞추기', '정기적으로 와인을 마실 수 있는 모임 만들기', '음식 페어링에 대한 지식 쌓기'],
    ],
  ],
  [
    [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
  ],
];
