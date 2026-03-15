type TechnologiesType = {
  id: number
  title: string
}

type CityType = {
  title: string
  countryTitle: string
}

type AddressType = {
  streetTitle: string
  city: CityType
}

export type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: TechnologiesType[]
}

export const addSkill = (student: any, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export const makeStudentActive = (student: StudentType) => {
  student.isActive = true
}

export const changeStudentLive = (student: StudentType, cityName: string) => {
  return student.address.city.title === cityName
}

