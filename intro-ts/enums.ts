enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
}

function moveTo(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log('Move to ' + Direction.LEFT)
      break
    case Direction.RIGHT:
      console.log('Move to ' + Direction.RIGHT)
      break
    case Direction.TOP:
      console.log('Move to ' + Direction.TOP)
      break
    case Direction.BOTTOM:
      console.log('Move to ' + Direction.BOTTOM)
      break
    default:
      console.log("I don't know where to go :(")
  }
}

moveTo(Direction.RIGHT)
