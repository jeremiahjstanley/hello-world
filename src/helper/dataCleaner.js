export const dataCleaner = (graphData) => {
  if (!graphData) {
    return;
  }
  const dataPoints = graphData.dataset.data.map(dataPoint => {
    return ({
      x: dataPoint[0].substring(0, 4), 
      y: dataPoint[1], 
      label: (
        `year: ${dataPoint[0].substring(0, 4)}
        value: ${dataPoint[1]};`
      )});
  }).reverse();
  return dataPoints;
};
