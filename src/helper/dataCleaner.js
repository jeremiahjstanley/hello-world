export const dataCleaner = (graphData) => {
    const data = graphData.dataset.data.map(dataPoint => {
       return {x: dataPoint[0].substring(0, 4), y: dataPoint[1]}
    }).reverse();
    return data;
};
