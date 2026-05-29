# ==========     ========= #
#          =  N  =         #
# ==========     ========= #

def palindromChack(text):
    if not isinstance(text, str):
        return "insert text"

    letterP = text.lower(),
    if letterP == letterP[:: -1]:
        return True

    else:
        return False


print(palindromChack("dad"))
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
