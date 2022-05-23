/* eslint-disable prettier/prettier */
let func = null;
function setShow(val) {
    func = val;
}
function show(flag = true) {
    func(flag);
}

export default {
    show,
    setShow,
}