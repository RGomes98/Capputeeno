export const getElementConditionalStyles = (
  condition: 'equality' | 'relational',
  elementId: number | string,
  currentState: number | string,
  enabledClassName: string
) => {
  if (condition === 'equality') return elementId === currentState ? enabledClassName : '';
  if (condition === 'relational') return elementId > currentState ? enabledClassName : '';
};
