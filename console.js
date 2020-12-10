console.log('My %s has %d years', 'cat', 2);

// console.clear();

const oranges = ['orange', 'orange','apple']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

const function2 = () => console.trace()
const function1 = () => function2()
function1()

const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()


const chalk = require('chalk')
console.log(chalk.yellow('hi!'))

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 30 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)