export const getSelectedElementStyle = (id: number | string, state: number | string, styles: string) => {
  return id === state ? styles : '';
};
