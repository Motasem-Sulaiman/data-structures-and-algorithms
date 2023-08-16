const {mergeSort} = require("./challenge27");

describe("Mergesort", () => {
  it("should correctly sort the array", () => {
    const inputArray = [8, 4, 23, 42, 16, 15];
    mergeSort(inputArray);
    expect(inputArray).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
