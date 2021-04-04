import styled from '@emotion/styled';

const FlexContainer = styled.div<{ column?: boolean; row?: boolean }>`
  display: flex;
  flex-direction: ${({ column, row }) => (row && 'row') || (column && 'column') || 'column'};
`;

export default FlexContainer;
