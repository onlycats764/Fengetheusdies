-- Covers numeric literals and operations that must not be changed by opaque
-- predicates or number representation mutation.
local large = 4503599627370495
local fraction = 0.3377740061710911
local negative = -2147483648
local signedZero = -0.0
local quotient = large / 3
local modulo = -17 % 5
print(large, fraction, negative, 1 / signedZero, quotient, modulo)
return large, fraction, negative, 1 / signedZero, quotient, modulo
