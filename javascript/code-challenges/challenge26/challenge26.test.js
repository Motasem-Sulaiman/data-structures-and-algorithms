const { InsertionSort } = require("./challenge26"); 

describe("InsertionSort", () => {
  it("should correctly sort the array", () => {
    const inputArray = [8, 4, 23, 42, 16, 15];
    const sortedArray = InsertionSort(inputArray);
    expect(sortedArray).toEqual([4, 8, 15, 16, 23, 42]); 
  });
});