# ==========     ========= #
#          =  Q  =         #
# ==========     ========= #


def hasProperty(obj, key):
    for k in obj:
        if k == key:
            return True
    return False


print(hasProperty({"name": "BMW"}, "name"))

# ==========     ========= #
#          =  p  =         #
# ==========     ========= #

# def objectToArray(obj):
#     if not isinstance(obj, dict):
#         return "insert an object"

#     return list(obj.items())


# print(objectToArray({"a": 10, "b": 20}))

# output
# ('a', 10), ('b', 20)]
# =====
# obj.keys()    # dict_keys(['a', 'b'])
# obj.values()  # dict_values([10, 20])
# obj.items()   # dict_items([('a', 10), ('b', 20)])
# keys() → only keys
# values() → only values
# items() → key and value together
# items() gives us access to both the key and the value at the same time, making the conversion easy:


# ==========     ========= #
#          =  O  =         #
# ==========     ========= #

# def calculate_sum_of_numbers(arr):
#     if not isinstance(arr, list):
#         return "Please provide a list"

#     total = 0

#     for item in arr:
#         if isinstance(item, (int, float)) and not isinstance(item, bool):
#             total += item

#     return total


# print(calculate_sum_of_numbers([10, "10", {"son": 10}, True, 35]))  # 45


# ==========     ========= #
#          Standards         #
# ==========     ========= #
#  Project standards:
#  -Login standards: => morgan orqali login/ kirib kelgan get requestini turiva ahamiyatini bilib oladigan boldik
# Naming Standards:
#  function, method, variables ==> CAMEL
#  class ==> PASCAL
#  folder ==>  KEBAB
# css ==> SNAKE

# Traditional API
# Rest API
# GraphQrl API
#  -Error handling

# ===== =====
# Traditional FD   => BSSR (admin panel)        =>   EJS [Django, Laravel, Spring]
# Modern FD        => SPA (users' application)  =>   React [Angular, Vue]

#  ===   SESSION OUTPUT   ===  #
# 1) REQUEST JOIN
# 2) SELF DESTROY
#  ===   SESSION OUTPUT   ===  #

# ==========     ========= #
#          =  N  =         #
# ==========     ========= #

# def palindromChack(text):
#     if not isinstance(text, str):
#         return "insert text"

#     letterP = text.lower(),
#     if letterP == letterP[:: -1]:
#         return True

#     else:
#         return False


# print(palindromChack("dad"))
# ==========     ========= #
#          =  M  =         #
# ==========     ========= #

# def getSquareNumber(arr):

#     if not isinstance(arr, list):
#         return "insert array"

#     result = []

#     for x in arr:
#         result.append({
#             "number": x,
#             "square": x ** 2
#         })

#     return result


# print(getSquareNumber([1, 2, 3, 4]))

# ==========     ========= #
#          =  L  =         #
# ==========     ========= #

# def reverseSentence(text):

#     if not isinstance(text, str):
#         return "insert a string"

#     words = text.split()

#     reversed_words = []

#     for word in words:
#         reversed_words.append(word[::-1])

#     return " ".join(reversed_words)


# checking = reverseSentence("I like uzbekistan")
# print(checking)


# ========= ======== =========
# try:
#     print("passed here")

#     result = reverseSentence("Hello World")
#     print("result:", result)

# except Exception as err:
#     print("General err checking", err)

# else:
#     print("executed successfully")

# finally:
#     print("final closing logic")
