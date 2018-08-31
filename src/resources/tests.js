import t from 'tcomb-form-native'; // 0.6.9

export const id = t.refinement(t.Number, function (n) {
    const reg = /^(\d){8,9}$/;
    return reg.test(n);
});
export const phone = t.refinement(t.Number, function (n) {
    const reg = /^(\d){9,10}$/;
    return reg.test(n);
});
export const password = t.refinement(t.String, (password) => {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return reg.test(password);
});
export const kidName = t.refinement(t.String, (name) => {
    console.log(name.length)
    console.log(name.length> 1)
    
    return name.length > 1;
});