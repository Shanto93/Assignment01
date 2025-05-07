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

  const result = formatString("Hello", true);
  console.log(result);
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

  const result = filterByRating(books);
  console.log(result);
}
