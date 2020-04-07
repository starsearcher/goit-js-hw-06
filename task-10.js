import users from "./users.js";

const getSortedUniqueSkills = users =>
    users.reduce((acc, el) => {
        acc.push(...el.skills);
        return acc;
    }, [])
    .sort()
    .filter((el, ind, arr) => arr.indexOf(el) === ind);
console.log(getSortedUniqueSkills(users));

// Получить массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//     // твой код
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]