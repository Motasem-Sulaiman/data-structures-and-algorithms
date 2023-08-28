const Hashtable = require("./hashtable");

describe("Hashtable", () => {
  it("Setting a key/value", () => {
    const hashtable = new Hashtable(100);
    hashtable.set("Cat", "Meow");
    hashtable.set("Dog", "Woof");

    expect(hashtable.get("Cat")).toEqual("Meow");
    expect(hashtable.get("Dog")).toEqual("Woof");
  });

  it("should return true for existing keys and false for non-existing keys in has method", () => {
    const hashtable = new Hashtable(100);
    hashtable.set("Cat", "Meow");

    expect(hashtable.has("Cat")).toEqual(true);
    expect(hashtable.has("Dog")).toEqual(false);
  });

  it("Successfully returns a list of all unique keys", () => {
    const hashtable = new Hashtable(100);
    hashtable.set("Cat", "Meow");
    hashtable.set("Dog", "Woof");

    const keys = hashtable.keys();
    expect(keys).toEqual(["Dog", "Cat"]);
  });

  it("Finds the first repeated word in a string", () => {
    const hashtable = new Hashtable(100);

    expect(
      hashtable.repeatedWord(
        "Once upon a time, there was a brave princess who..."
      )
    ).toEqual("a");
    expect(
      hashtable.repeatedWord(
        "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs..."
      )
    ).toEqual("summer");
    expect(hashtable.repeatedWord("No repeated words here.")).toEqual(
      "No repeated"
    );
  });
});
