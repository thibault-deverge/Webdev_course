# Define a class
class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def moves(self):
        print('Move along..')

    def get_make_model(self):
        print(f"I'm a {self.make} {self.model}.")

# Create first car
my_car = Vehicle('Tesla', 'Model 3')
my_car.get_make_model()
my_car.moves()

# Create a second car
your_car = Vehicle('Cadillac', 'Escalade')
your_car.get_make_model()
your_car.moves()

# --------- INHERITANCE ----------
# Using same method overwrite from parent class
class Airplane(Vehicle):
    def __init__(self, make, model, faa_id):
        super().__init__(make, model)
        self.faa_id = faa_id

    def moves(self):
        print('Flies along...')

class Truck(Vehicle):
    def moves(self):
        print("Rumbles along...")

class GolfCart(Vehicle):
    pass

# Create object
cessna = Airplane('Cessna', "Skyhawk", 'N-12345')
mack = Truck('Mack', "Pinnacle")
golfwagon = GolfCart('Yamaha', "GC100")

cessna.get_make_model()
cessna.moves()
mack.get_make_model()
mack.moves()
golfwagon.get_make_model()
golfwagon.moves()

print("\n\n")

# Call methods on differents instances
for v in (my_car, your_car, cessna, mack, golfwagon):
    v.get_make_model()
    v.moves()