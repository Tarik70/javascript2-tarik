const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,

  description() {
    return `Deze auto is een ${this.brand} ${this.name}.`;
  },

  isOld() {
    return this.year < 2010;
  },

  drive(km) {
    this.mileage += km;
    return this.mileage;
  },
};

document.getElementById('output-1').textContent = car.description();

document.getElementById('output-2').textContent = car.isOld();

document.getElementById('output-3').textContent = car.drive(100);