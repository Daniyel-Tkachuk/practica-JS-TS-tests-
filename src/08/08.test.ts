import {incrAge, UserType} from "./08";

test('reference type test', () => {
  const user: UserType = {
    name: 'Daniyel',
    age: 29,
    address: {
      title: 'Minsk'
    }
  }

  incrAge(user)

  expect(user.age).toBe(30)

  const superman = user
  superman.name = 'Dimych'
  expect(user.name).toBe('Dimych')
  expect(superman.name).toBe('Dimych')
})

test('reference type test_2', () => {
  const user: UserType = {
    name: 'Daniyel',
    age: 29,
    address: {
      title: 'Minsk'
    }
  }

  const user2: UserType = {
    name: 'Vika',
    age: 29,
    address: user.address
  }

  user2.address.title = 'Kanary'

  expect(user.address.title).toBe('Kanary')
  expect(user2.address.title).toBe('Kanary')
  expect(user2.address).toBe(user.address)
})

test('array test', () => {
  const users: UserType[] = [
    {
      name: 'Daniyel',
      age: 29,
      address: {
        title: 'Minsk'
      }
    },
    {
      name: 'Dimych',
      age: 32,
      address: {
        title: 'Ostrovec'
      }
    }
  ]

  let admins = users
  admins.push({name: 'Bandyugan', age: 10, address: {title: 'Minsk'}})

  expect(users.length).toBe(3)
  expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
  expect(admins[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('value type test', () => {
  let usersCount = 100

  let adminsCount = usersCount
  adminsCount++

  expect(adminsCount).toBe(101)
  expect(usersCount).toBe(100)
})

test('reference array test', () => {
  const address = {
    title: 'Minsk'
  }

  const user: UserType = {
    name: 'Danila',
    age: 29,
    address: address
  }

  const user2: UserType = {
    name: 'Vika',
    age: 29,
    address: address
  }

  const users = [user, user2, {name: 'Zahar', age: '4', address: address}]

  const admins = [user, user2]

  admins[0].name = 'Daniyel'

  expect(users[0].name).toBe('Daniyel')
  expect(user.name).toBe('Daniyel')
  expect(admins[0].name).toBe('Daniyel')
})

test('sort array test', () => {
  const letters = ['c', 'd', 'a', 'z', 'e']

  letters.sort()

  expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})