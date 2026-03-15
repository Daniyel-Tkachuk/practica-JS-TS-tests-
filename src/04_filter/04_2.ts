import {CityType, GovernmentBuildingsType, HouseType} from "../02/02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
  city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], number: number) => {
  return buildings.filter(building => building.staffCount > number)
}

export const getHousesOnTheStreet = (houses: HouseType[], street: string) => {
  return houses.filter(house => house.address.street.title === street)
}