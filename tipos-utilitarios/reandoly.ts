// readonly (keyword) e ReadOnly (type utility)

interface Todo {
  title: string
  description: string
  done: boolean
}

const task: Todo = {
  title: 'Learn React',
  description: 'learn the best web framework (library?)',
  done: false,
}

console.log(task)
task.title = 'Learn TypeScript'

console.log(task)
