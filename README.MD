Schlüsselgenerierung:

1. Wähle zwei große Primzahlen p und q
2. Berechne N = p * q
3. Berechne Eulerschen Phi-Funktion Ф(p * q) = (p - 1) * (q - 1)
4. Wähle e mit 1 < e < Ф(N), ggT(e, Ф(N)) = 1
5. Berechne d mit e * d = 1 mod Ф(N)
6. Öffentlicher Schlüssel = (e, N)
7. Privater Schlüssel = (p, q, d)

Verschlüsselung:

1. c = m^e mod N

Entschlüsselung:

1. m = c^d mod N