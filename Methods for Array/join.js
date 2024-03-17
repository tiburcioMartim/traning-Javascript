//join
const list = [{ name: 'Martim' }, { name: 'Marcelly' }, { name: 'Davi' }];

console.log(
    list.map((e) => e.name)
        .filter((e) => e.startsWith('M'))
        .join(', ')
);

console.log(
    list.filter((e) => e.name.startsWith('M'))
    .map((e) => `<li>${e.name}</li>`)
    .join('')
);