// pour diminuer le code on peut suppr la ligne d'affectation de variable et mettre directement le nombre dans console.log
// voir correction 2eme console.log de chaque nb

let nb1 = 0x123
console.log(nb1.toString(10))
// correction sofiane:
console.log(`nb1= ${nb1}`)

let nb2 = 0123
console.log(nb2.toString(10))
console.log(`nb2= ${nb2}`)

let nb3 = 0b10011001
console.log(nb3.toString(10))
console.log(`nb3= ${nb3}`)

let nb4 = 0xdeadbeef
console.log(nb4.toString(10))
console.log(`nb4= ${nb4}`)

let nb5 = 0xea7beef
console.log(nb5.toString(10))
console.log(`nb5= ${nb5}`)

let nb6 = 0b1111111111111111
console.log(nb6.toString(10))
console.log(`nb6= ${nb6}`)

let nb7 = 0777
console.log(nb7.toString(10))
console.log(`nb7= ${nb7}`)
