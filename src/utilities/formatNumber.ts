const formatNumber = (num?: number) => {
  if(num===undefined) return '--'
  if(num < 1000) return "" + num;
  return (Math.floor(num / 100) / 10) + "k"
}

export default formatNumber
