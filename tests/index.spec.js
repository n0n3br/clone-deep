import { expect } from "chai";
import cloneDepp from "../src/main";
import cloneDeep from "../src/main";

describe("Main", () => {
  it("should clone primitive types", () => {
    let a = 3;
    let b = cloneDepp(a);
    a = 5;
    expect(a).to.be.equal(5);
    expect(b).to.be.equal(3);
    let c = "a";
    let d = cloneDeep(c);
    c = "b";
    expect(c).to.equal("b");
    expect(d).to.equal("a");
  });
  it("should clone a array", () => {
    let a = [1, 2, "a", true];
    let b = cloneDeep(a);
    a[0] = 2;
    a[2] = "b";
    a[3] = false;
    expect(a).to.deep.equal([2, 2, "b", false]);
    expect(b).to.deep.equal([1, 2, "a", true]);
  });
  it("should clone a array of objects", () => {
    let a = [{ a: 1 }, { b: 2 }, { c: 3 }];
    let b = cloneDeep(a);
    a[0].a = 2;
    expect(a).to.deep.equal([{ a: 2 }, { b: 2 }, { c: 3 }]);
    expect(b).to.deep.equal([{ a: 1 }, { b: 2 }, { c: 3 }]);
  });
  it("should clone a object with arrays", () => {
    let a = { a: [1, 2, 3], b: [4, 5, 6] };
    let b = cloneDeep(a);
    a.a[0] = 2;
    expect(a).to.deep.equal({ a: [2, 2, 3], b: [4, 5, 6] });
    expect(b).to.deep.equal({ a: [1, 2, 3], b: [4, 5, 6] });
  });
  it("should clone more than 2 levels", () => {
    let a = { a: { c: [1, 2, 3], d: [4, 5, 6] }, b: [4, 5, 6] };
    let b = cloneDeep(a);
    a.a.c[0] = 2;
    a.a.d[0] = 5;
    a.b[0] = 5;
    expect(a).to.deep.equal({
      a: { c: [2, 2, 3], d: [5, 5, 6] },
      b: [5, 5, 6]
    });
    expect(b).to.deep.equal({
      a: { c: [1, 2, 3], d: [4, 5, 6] },
      b: [4, 5, 6]
    });
  });
});
