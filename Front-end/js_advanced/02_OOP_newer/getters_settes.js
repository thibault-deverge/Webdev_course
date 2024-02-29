class Circle {
    static allowedColors = new Set(["red", "green", "blue"]);

    constructor(radius, color) {
        this._radius = radius;
        this._color = color;
    }

    // Getters
    get radius() {
        return this._radius;
    }

    get color() {
        return this._color;
    }

    // Setter for radius
    set radius(value) {
        if (value <= 0) {
            throw new Error("Radius cannot be negative.");
        }
        else {
            this._radius = value;
        }
    }

    set color(newColor) {
        if (Circle.allowedColors.has(newColor)) {
            this._color = newColor;
        }
        else {
            throw new Error("That color is not allowed.");
        }
    }

}

circle = new Circle(20, "green");
console.log(circle.diameter);