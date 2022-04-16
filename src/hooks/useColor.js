export const useColor = () => {
  const colorArr = [
    '#1d9ce2',
    '#c73844',
    '#4db2ad',
    '#d42b7b',
    '#e05a1f',
    '#ffc800',
    '#40bf5b',
    '#213ade',
    '#6518e7',
  ];
  let num = 0;
  const randomNumber = Math.floor(Math.random() * 8);
  const enterColor = (e) => {
    num = (num + randomNumber) % colorArr.length;
    const colors = colorArr[num];
    e.target.style.color = colors;
    e.target.style.opacity = 0.8;
  };
  const leaveColor = (e) => {
    e.target.style.color = '#fff';
    e.target.style.opacity = 1;

    num++;
  };
  return {
    enterColor,
    leaveColor,
  };
};
