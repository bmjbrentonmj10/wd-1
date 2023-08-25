function car(cname,model,year) {
    this.cname = cname,
    this.model = model,
    this.year = year
}
const car1 = new car ("toyota","corolla",2022);
const car2 = new car ("honda","civic",2021);
console.log(car1.cname);
console.log(car2.year);