{
  //Problem 1
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
  //Problem 2
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
  //Problem 3
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, array) => acc.concat(array, []));
  }

  concatenateArrays(["a", "b"], ["c", "d"], ["e", "f"]);
}

{
  //Problem 4
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
  //Problem 5
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  processValue(10);
}
