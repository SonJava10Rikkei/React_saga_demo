function* love_girl() {
    console.log('Hoc va lam tai NB');
    yield "tro ve VN"
    console.log('Hoc va lam tai RA');
    yield "Moi tinh dep"
    console.log('Cuoi');
    yield "Quay lai NB"
}
let loveGirl = love_girl();
console.log(loveGirl.next());
console.log(loveGirl.next());
console.log(loveGirl.next());
console.log(loveGirl.next());


// node generator_function.js