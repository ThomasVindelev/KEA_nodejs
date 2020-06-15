let my_array = []

my_array.push({ name: 'Jeff', last_name: 'Yes' })

console.log(my_array[0])

my_array[0].last_name = 'No'

console.log(my_array)

for (i = 0; i < 10; i++) {
    console.log("hello")
}

isTrue = true

function my_func() {
    function func_1() {
        console.log(`I'm function ${func_1.name}`)
    }
    function func_2() {
        console.log(`I'm function ${func_2.name}`)
    }
    if (isTrue) {
        func_1()
    } else {
        func_2()
    }
}

my_func()

let abc = 'hello'

console.log(abc[0])

let array_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array_2.splice(0, 2)

console.log(array_2)

let number = array_2.shift()

console.log(number)

console.log(array_2)

let slicer = array_2.slice(0, 3)

console.log(slicer)

console.log(array_2)

function my_new_function(name, lastname, array) {
    array.push(name, lastname)
    return array
}

name_array = my_new_function('Thomas', 'Vindelev', [])

console.log(name_array)