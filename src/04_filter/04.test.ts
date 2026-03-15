import {chipPredicate, predicate} from "./04";

export type CourseType = {title: string, price: number}

test("should take old men older then 90", () => {
  const ages = [18, 20, 22, 1, 100, 90, 14]

  const oldAges = ages.filter(predicate)

  expect(oldAges.length).toBe(1);
  expect(oldAges[0]).toBe(100);
});

test("should take courses chipper", () => {
  const courses: CourseType[] = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150},
  ]

  const oldAges = courses.filter(chipPredicate)

  expect(oldAges.length).toBe(2);
  expect(oldAges[0].title).toBe("CSS");
  expect(oldAges[1].title).toBe("REACT");
});

test("get only completed tasks", () => {
  const tasks = [
    {id: 1, title: 'Bread', isDone: false},
    {id: 2, title: 'Milk', isDone: true},
    {id: 3, title: 'Salt', isDone: false},
    {id: 4, title: 'Sugar', isDone: true},
  ]

  const completedTasks = tasks.filter(task => task.isDone)

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].title).toBe('Milk');
  expect(completedTasks[1].title).toBe('Sugar');
})

test("get only uncompleted tasks", () => {
  const tasks = [
    {id: 1, title: 'Bread', isDone: false},
    {id: 2, title: 'Milk', isDone: true},
    {id: 3, title: 'Salt', isDone: false},
    {id: 4, title: 'Sugar', isDone: true},
  ]

  const uncompletedTasks = tasks.filter(task => !task.isDone)

  expect(uncompletedTasks.length).toBe(2);
  expect(uncompletedTasks[0].title).toBe('Bread');
  expect(uncompletedTasks[1].title).toBe('Salt');
  expect(uncompletedTasks[0].id).toBe(1);
  expect(uncompletedTasks[1].id).toBe(3);
})

