export type ManType = {
  name: string
  age: number
}

const people: Array<ManType> = [
  {name: "Andrew Ivanov", age: 33},
  {name: "Alexander Petrov", age: 24},
  {name: "Dmitry Sidorov", age: 18},
]

const dimychTransformator = (man: ManType) => {
  return {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
  }
}

const devs = [
  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Andrew",
    lastName: "Ivanov"
  },

  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Alexander",
    lastName: "Petrov"
  },

  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Dmitry",
    lastName: "Sidorov"
  }
]

const devs2 = [
  dimychTransformator(people[0]),
  dimychTransformator(people[1]),
  dimychTransformator(people[2]),
]

const devs3 = people.map(p => ({
  stack: ["css", "html", "js", "tdd", "react"],
  firstName: p.name.split(" ")[0],
  lastName: p.name.split(" ")[1]
})) // вернется массив в точности как devs 20 строка
// можно в map передать .map(dimychTransformator) будет тоже самое

export const creatingGreetingMessage = (people: ManType[]) => {
  return people.map(p => `Hello ${p.name.split(' ')[0]}. Welcome to IT-Incubator!`)
}