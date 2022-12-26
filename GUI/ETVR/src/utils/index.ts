export const ActiveStatus = (activeStatus: string) => {
  switch (activeStatus) {
    case 'active':
      return '#1FDD00'
    case 'loading':
      return '#F9AA33'
    default:
      return '#DD0000'
  }
}

export const GenerateMatrixShadow = (activeStatus: string) => {
  switch (activeStatus) {
    case 'active':
      return '0 0 0 0 0.121333  0 0 0 0 0.866667  0 0 0 0 0  0 0 0 1 0'
    case 'loading':
      return '0 0 0 0 1  0 0 0 0 0.20166699999999999  0 0 0 0 -1.878667  0 0 0 1 0'
    default:
      return '0 0 0 0 1.966667  0 0 0 0 0  0 0 0 0 -0.04366700000000001  0 0 0 1 0'
  }
}
