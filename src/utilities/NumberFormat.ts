const numberFormater = (num: number|undefined) => (
  num===undefined ? '--' :
  num < 1000 ? "" + num :
  (Math.floor(num / 100) / 10) + "k"
)

export default numberFormater
