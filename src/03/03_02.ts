import {CityType, GovernmentBuildingsType, HouseType} from "../02/02";

export const addMoneyToBudget = (city: GovernmentBuildingsType, budget: number) => {
  city.budget += budget;
}

export const repairHouse = (house: HouseType) => {
  house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, number: number) => {
  building.staffCount -= number
}

export const toHireStaff = (building: GovernmentBuildingsType, number: number) => {
  building.staffCount += number
}

export const createMessage = (city: CityType) => {
  // return "Hello " + city.title + " citizens. I want you be happy. All " + city.citizensNumber + " men"
  return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}