from github_contributions import GithubContributions

# Remplace avec ton nom d'utilisateur GitHub
username = "vincebmmrt"

# Générer la grille de contributions et l'enregistrer sous forme de GIF
gc = GithubContributions(username)
gc.generate_gif(output_path='.github/snake/github-contribution-grid-snake.svg')
