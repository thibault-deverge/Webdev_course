function* evens() {
    while (true) {
        yield n;
        n += 2;
    }
}

function* myCats() {
    yield "Blue";
    yield "Kitty";
    yield "Cream";
    yield "Creedence";
}

const catGenerator = myCats()

// catGenerator.next() // Blue
// catGenerator.next() // Kitty
// catGenerator.next() // Cream

// Exemple
const allImages = Array.from(
    { length: 1000 },
    (_, i) => `https://placeimg.com/640/480/any?image=${i}`
);

function* getBatchOfImages(images, batchSize = 10) {
    let currIndex = 0;

    while (currIndex < images.length) {
        yield images.slice(currIndex, currIndex + batchSize)
        currIndex += batchSize;
    }
}

const imageGen = getBatchOfImages(allImages)
imageGen.next()