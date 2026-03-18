export type ManType = {
  name: string
  age: number
  lessons: {title: string}[]
  address: {
    street: {
      title: string
    }
  }
}

let props: ManType

beforeEach(() => {
  props = {
    name: 'Daniyel',
    age: 29,
    lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
    address: {
      street: {
        title: 'Nezavisimosti street'
      }
    }
  }
})

test("obj", () => {
  const {age, name} = props
  const {title} = props.address.street
  // const {lessons, address: {street: {title}}} = props
  // const {age: myAge, name: firstName} = props

  expect(age).toBe(29)
  expect(name).toBe('Daniyel')
  expect(title).toBe('Nezavisimosti street')

})

test("arr", () => {
  const l1 = props.lessons[0]
  const l2 = props.lessons[1]

  const [ls1, ls2] = props.lessons
  const [,,ls3] = props.lessons
  // [ls1, ...restLessons] = props.lessons

  expect(l1.title).toBe('1')
  expect(l2.title).toBe('2')

  expect(ls1.title).toBe('1')
  expect(ls2.title).toBe('2')
  expect(ls3.title).toBe('3')

  // expect(restLessons.length).toBe(3)
  // expect(restLessons[1].title).toBe('2')
})