import ObjectHelper from '../../utils/ObjectHelper'
import { PatientsRegister } from 'hospital-lib'

const setStorage = (key: string, report:Array<{before: PatientsRegister, after:PatientsRegister}>) => {
  const newReport = report
  localStorage.setItem(key, JSON.stringify(newReport))
}

const getStorage = (key: string) => {
  const data = localStorage.getItem(key)

  return data ? JSON.parse(data) : null
}

const concatWithStorage = (key: string, report:{before: PatientsRegister, after:PatientsRegister}) => {
  const newReport = report
  const storage = getStorage(key)
  if (storage) {
    if (storage.length === 10) {
      storage.shift()
    }
    storage.push(newReport)
    setStorage(key, storage)
  } else {
    setStorage(key, [newReport])
  }
  return !storage ? [newReport] : storage
}

const aggregateReports = (report: {before: PatientsRegister, after:PatientsRegister}) => {
  const aggregateReports = concatWithStorage('Reports', report)
  const pairs = {
    F: 'Fever',
    D: 'Diabetics',
    T: 'Tuberculosis',
    X: 'Dead',
    H: 'Healthy'
  }

  console.log(aggregateReports)

  aggregateReports.forEach((report: {before: PatientsRegister, after:PatientsRegister}) => {
    Object.entries(pairs).forEach(entry => {
      const [key, value] = entry
      ObjectHelper.renameField(key, value, report.before)
      ObjectHelper.renameField(key, value, report.after)
    })
  })

  return aggregateReports
}

export {
  aggregateReports
}
