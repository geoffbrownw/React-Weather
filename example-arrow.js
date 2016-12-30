var names = ['Andrew', 'Geoff', 'Tina'];

names.forEach(function (name) {
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Geoff'));

