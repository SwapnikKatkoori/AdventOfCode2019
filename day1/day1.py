"""
Day 1 puzzle of advent of code 2019.
"""
def calculate_total_fuel(data_list):
    total_fuel = 0
    for mass in data_list:
        try:
            int_mass = int(mass)

            #Takes into account the fuel that is being added
            module_fuel = 0
            fuel_needed = (int_mass // 3) - 2
            while fuel_needed > 0:
                module_fuel += fuel_needed
                fuel_needed = (fuel_needed // 3) - 2

            #For part 1 the, while loop is not needed
            #Just do total_fuel += (int_mass//3)-2
            total_fuel += module_fuel

        except:
            continue

    return total_fuel


def main():
    data = my_string = open('day1_input.txt').read()
    data_list = data.split("\n")

    print(calculate_total_fuel(data_list))
main()
