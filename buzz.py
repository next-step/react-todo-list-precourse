def check_buzz(n):
    if n % 5 == 0:
        return "Buzz"
    else:
        return str(n)  

# 테스트
for i in range(1, 100):
    print(check_buzz(i))
