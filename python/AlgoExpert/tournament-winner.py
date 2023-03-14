def tournamentWinner(competitions, results):
    # Write your code here.
    pointsTable = {}
    winner = ""
    top_score = 0

    for i in range(len(competitions)):
      homeTeam = competitions[i][0]
      awayTeam = competitions[i][1]

      if results[i] == 1:
        if homeTeam in pointsTable:
         pointsTable[homeTeam] += 3
        else:
         pointsTable[homeTeam] = 3

        if awayTeam not in pointsTable:
          pointsTable[awayTeam] = 0

      if results[i] == 0:
        if awayTeam in pointsTable:
          pointsTable[awayTeam] += 3
        else:
          pointsTable[awayTeam] = 3
        
        if homeTeam not in pointsTable:
         pointsTable[homeTeam] = 0


    for i in pointsTable:
      if pointsTable[i] > top_score:
        winner = i
        top_score = pointsTable[i]


    return winner


competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]

results = [0, 0, 1]

print(tournamentWinner(competitions, results))
