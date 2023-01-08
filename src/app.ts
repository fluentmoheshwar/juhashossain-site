const currYear: number = new Date().getFullYear();
const age: number = currYear - 2006;
document.querySelector<HTMLSpanElement>("#age")!.innerHTML = age.toString();

export {};
