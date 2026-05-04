class TestDataStorage<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0]!;
    }

    getAll(): T[] {
        return this.items;
    }

    count(): number {
        return this.items.length;
    }
}

let codeStore = new TestDataStorage<number>();
let testStore = new TestDataStorage<string>();

codeStore.add(200)
codeStore.add(201)
codeStore.add(500)

console.log(codeStore.getAll())
console.log(codeStore.getFirst())
console.log(codeStore.count())

testStore.add("Login test")
testStore.add("Dashboard test")
testStore.add("logout test")

console.log(testStore.getAll())
console.log(testStore.getFirst())
console.log(testStore.count())
