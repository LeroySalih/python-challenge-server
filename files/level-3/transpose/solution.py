
def transpose (text):

  cypher = ""

  for i in range(1, len(text), 2):
    cypher = cypher + text[i] + text[i-1]
  
  if len(text) % 2 ==1:
    cypher = cypher + text[-1]

  return cypher



if __name__ == "__main__":
  # Add your code below.
  # remember to indent!
  
  result = transpose ("ABCDE")
  print(result)

  print(transpose(result))

