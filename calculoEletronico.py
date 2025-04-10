import cmath
import os
import math

def lei_de_ohm():
    print("Escolha o que você deseja calcular:")
    print("1. Tensão (V = R * I)")
    print("2. Corrente (I = V / R)")
    print("3. Resistência (R = V / I)")
    choice = input("Digite o número da escolha: ")

    if choice == '1':
        R = float(input("Digite o valor da resistência (em ohms): "))
        I = float(input("Digite o valor da corrente (em amperes): "))
        V = R * I
        os.system('cls')
        print(f"Tensão (V) = {V} V")
    elif choice == '2':
        V = float(input("Digite o valor da tensão (em volts): "))
        R = float(input("Digite o valor da resistência (em ohms): "))
        I = V / R
        os.system('cls')
        print(f"Corrente (I) = {I} A")
    elif choice == '3':
        V = float(input("Digite o valor da tensão (em volts): "))
        I = float(input("Digite o valor da corrente (em amperes): "))
        R = V / I
        os.system('cls')
        print(f"Resistência (R) = {R} Ohms")
    else:
        os.system('cls')
        print("Opção inválida.")

def potencia_eletrica():
    print("Escolha o que você deseja calcular:")
    print("1. Potência (P = V * I)")
    print("2. Potência (P = I^2 * R)")
    print("3. Potência (P = V^2 / R)")
    choice = input("Digite o número da escolha: ")

    if choice == '1':
        V = float(input("Digite o valor da tensão (em volts): "))
        I = float(input("Digite o valor da corrente (em amperes): "))
        P = V * I
        os.system('cls')
        print(f"Potência (P) = {P} W")
    elif choice == '2':
        I = float(input("Digite o valor da corrente (em amperes): "))
        R = float(input("Digite o valor da resistência (em ohms): "))
        P = I**2 * R
        os.system('cls')
        print(f"Potência (P) = {P} W")
    elif choice == '3':
        V = float(input("Digite o valor da tensão (em volts): "))
        R = float(input("Digite o valor da resistência (em ohms): "))
        P = V**2 / R
        os.system('cls')
        print(f"Potência (P) = {P} W")
    else:
        os.system('cls')
        print("Opção inválida.")

def divisores_tensao():
    V_in = float(input("Digite o valor da tensão de entrada (V): "))
    R1 = float(input("Digite o valor de R1 (em ohms): "))
    R2 = float(input("Digite o valor de R2 (em ohms): "))
    V_out = V_in * (R2 / (R1 + R2))
    os.system('cls')
    print(f"Tensão de saída (V_out) = {V_out} V")

def divisores_corrente():
    I_total = float(input("Digite o valor da corrente total (em amperes): "))
    R1 = float(input("Digite o valor de R1 (em ohms): "))
    R2 = float(input("Digite o valor de R2 (em ohms): "))
    I_R = I_total * (R2 / (R1 + R2))
    os.system('cls')
    print(f"Corrente em R2 (I_R) = {I_R} A")

def capacitancia():
    print("Escolha o que você deseja calcular:")
    print("1. Capacitância em série")
    print("2. Capacitância em paralelo")
    choice = input("Digite o número da escolha: ")

    if choice == '1':
        n = int(input("Digite o número de capacitores em série: "))
        recip_sum = 0
        for i in range(n):
            C = float(input(f"Digite o valor do capacitor {i+1} (em Farad): "))
            recip_sum += 1 / C
        C_total = 1 / recip_sum
        os.system('cls')
        print(f"Capacitância total (C_total) = {C_total} F")
    elif choice == '2':
        n = int(input("Digite o número de capacitores em paralelo: "))
        C_total = 0
        for i in range(n):
            C = float(input(f"Digite o valor do capacitor {i+1} (em Farad): "))
            C_total += C
        os.system('cls')
        print(f"Capacitância total (C_total) = {C_total} F")
    else:
        os.system('cls')
        print("Opção inválida.")

def indutancia():
    print("Escolha o que você deseja calcular:")
    print("1. Indutância em série")
    print("2. Indutância em paralelo")
    choice = input("Digite o número da escolha: ")

    if choice == '1':
        n = int(input("Digite o número de indutores em série: "))
        L_total = 0
        for i in range(n):
            L = float(input(f"Digite o valor do indutor {i+1} (em Henry): "))
            L_total += L
        os.system('cls')
        print(f"Indutância total (L_total) = {L_total} H")
    elif choice == '2':
        n = int(input("Digite o número de indutores em paralelo: "))
        recip_sum = 0
        for i in range(n):
            L = float(input(f"Digite o valor do indutor {i+1} (em Henry): "))
            recip_sum += 1 / L
        L_total = 1 / recip_sum
        os.system('cls')
        print(f"Indutância total (L_total) = {L_total} H")
    else:
        os.system('cls')
        print("Opção inválida.")

def associacao_resistores():
    print("Escolha o tipo de associação:")
    print("1. Série")
    print("2. Paralelo")
    choice = input("Digite o número da escolha: ")

    if choice == '1':
        n = int(input("Digite o número de resistores: "))
        R_total = sum(float(input(f"Resistor {i+1} (Ohms): ")) for i in range(n))
        os.system('cls')
        print(f"Resistência total em série: {R_total} Ohms")
    elif choice == '2':
        n = int(input("Digite o número de resistores: "))
        recip_sum = 0
        for i in range(n):
            R = float(input(f"Resistor {i+1} (Ohms): "))
            recip_sum += 1 / R
        R_total = 1 / recip_sum
        os.system('cls')
        print(f"Resistência total em paralelo: {R_total} Ohms")
    else:
        os.system('cls')
        print("Opção inválida.")

def energia_eletrica():
    P = float(input("Digite a potência (em Watts): "))
    t = float(input("Digite o tempo (em segundos): "))
    E = P * t
    os.system('cls')
    print(f"Energia consumida: {E} Joules")

def impedancia_rlc():
    R = float(input("Digite a resistência (em ohms): "))
    L = float(input("Digite a indutância (em Henry): "))
    C = float(input("Digite a capacitância (em Farads): "))
    f = float(input("Digite a frequência (em Hz): "))

    X_L = 2 * math.pi * f * L
    X_C = 1 / (2 * math.pi * f * C)
    Z = math.sqrt(R**2 + (X_L - X_C)**2)

    os.system('cls')
    print(f"Impedância total (Z) = {Z} Ohms")

def main():
    while True:
        print("\n----- Menu de Cálculos -----\n")
        print("1. Lei de Ohm")
        print("2. Potência Elétrica")
        print("3. Divisores de Tensão")
        print("4. Divisores de Corrente")
        print("5. Cálculo de Capacitância")
        print("6. Cálculo de Indutância")
        print("7. Associação de Resistores")
        print("8. Energia Elétrica")
        print("9. Impedância Total (RLC)")
        print("10. Sair \n")

        try:
            opt = int(input("Escolha uma opção (1-10): "))

            match opt:
                case 1:
                    os.system('cls')
                    lei_de_ohm()
                case 2:
                    os.system('cls')
                    potencia_eletrica()
                case 3:
                    os.system('cls')
                    divisores_tensao()
                case 4:
                    os.system('cls')
                    divisores_corrente()
                case 5:
                    os.system('cls')
                    capacitancia()
                case 6:
                    os.system('cls')
                    indutancia()
                case 7:
                    os.system('cls')
                    associacao_resistores()
                case 8:
                    os.system('cls')
                    energia_eletrica()
                case 9:
                    os.system('cls')
                    impedancia_rlc()
                case 10:
                    os.system('cls')
                    break
                case _:
                    os.system('cls')
                    print("Opção inválida!")
        except ValueError as ex:
            os.system('cls')
            print(f'Ocorrência de erro: {type(ex)}')
            print(f'O valor digitado não corresponde a uma opção numérica.')

if __name__ == "__main__":
    main()
