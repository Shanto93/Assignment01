{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true) {
      return input.toUpperCase();
    } else if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  formatString("Hello", true);
}

{
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items
      .filter((item) => item.rating >= 4.0)
      .map((item) => {
        return { title: item.title, rating: item.rating };
      });
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  filterByRating(books);
}

{
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, array) => acc.concat(array, []));
  }

  concatenateArrays(["a", "b"], ["c", "d"], ["e", "f"]);
}

{
  class Vehicle {
    private _make: string;
    private _year: number;
    constructor(_make: string, _year: number) {
      this._make = _make;
      this._year = _year;
    }
    getInfo(): string {
      return `Make: ${this._make}, Year: ${this._year}`;
    }
  }

  class Car extends Vehicle {
    private _model: string;
    constructor(_make: string, _year: number, _model: string) {
      super(_make, _year);
      this._model = _model;
    }
    getModel(): string {
      return `Model: ${this._model}`;
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();
  myCar.getModel();
}

{
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  processValue(10);
}

{
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
    let mostExpensiveProduct = products[0];
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensiveProduct.price) {
        mostExpensiveProduct = products[i];
      }
    }
    return mostExpensiveProduct;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  getMostExpensiveProduct(products);
}

{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  getDayType(Day.Friday);
}

{
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        reject(new Error("Error: Negative number not allowed"));
      } else {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      }
    });
  }

  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}