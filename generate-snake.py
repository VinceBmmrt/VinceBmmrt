import requests

# Remplace "VinceBmmrt" par ton vrai nom d'utilisateur GitHub
username = "VinceBmmrt"
url = f"https://github.com/{username}.github.io/github-contribution-grid-snake/"

response = requests.get(url)
gif_url = response.json()["url"]

# Sauvegarde le GIF dans le bon répertoire
with open(".github/snake/github-contribution-grid-snake.svg", "wb") as f:
    f.write(requests.get(gif_url).content)
