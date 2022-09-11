# First Part of the Assignment

# def pyKata():
#     user_input = input('Please Enter Your Number: ')
#     parsed = int(user_input)

#     if parsed == 1:
#         print(1)
#     elif parsed == 2:
#         print(2)
#     elif parsed == 3: 
#         print("Pepsi")
#     elif parsed == 5:
#         print("Coke")


# Second Part of the Assignment

def pyKata():
    user_input = input('Please Enter Your Number: ')
    parsed = int(user_input)

    if parsed == 0:
        return()
    elif parsed == 1:
        print(1)
    elif parsed == 2:
        print(2)
    elif parsed % 3 == 0 and not parsed % 5 == 0: 
        print("Pepsi")
    elif parsed % 5 == 0 and not parsed % 3 == 0: 
        print("Coke")
    elif parsed % 3 == 0 and parsed % 5 == 0:
        print("PepsiCoke")

    pyKata()

pyKata()