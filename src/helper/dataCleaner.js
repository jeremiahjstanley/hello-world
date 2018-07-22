export const goveranceIndicatorCleaner = (estimates, numberOfSources, percentileRank, standardError) => {
  const cleanEstimates = estimates.dataset.data.map(dataPoint => {
    return {"name": dataPoint[0], "Estimate": dataPoint[1]}
  });
  const cleanNumberOfSources = numberOfSources.dataset.data.map((dataPoint, index) => {
    return {...cleanEstimates[index], "name": dataPoint[0], "Number of Sources": dataPoint[1]}
  })
  const cleanPercentileRank = percentileRank.dataset.data.map((dataPoint, index) => {
    return {...cleanNumberOfSources[index], "name": dataPoint[0], "Percentile Rank": dataPoint[1]}
  })
  const cleanStandardError = standardError.dataset.data.map((dataPoint, index) => {
    return {...cleanPercentileRank[index], "name": dataPoint[0], "Standard Error": dataPoint[1]}
  })
  return cleanStandardError
}