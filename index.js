var kittens = ["Milo","Otis","Garfield"];
function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten() {
  var newArr = [...kittens,"Broom"]
  return newArr
}

function prependKitten() {
  var newArrs = ["Arnold",...kittens]
  return newArrs
}

function removeLastKitten() {
  var newArrs1 = kittens.shift()
  return newArrs1
}