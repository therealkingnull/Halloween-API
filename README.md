<p align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="assets/halloweenAPI.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">🎃👻🕯️ Halloween API 🕯️👻🎃</h3>
  

<p align="center">The official repository for the Halloween API.</p>

# Data

## Main Site:
[https://halloweenapi.herokuapp.com/](https://halloweenapi.herokuapp.com/)

### Return A Random Halloween Joke:
[https://halloweenapi.herokuapp.com/halloween_joke](https://halloweenapi.herokuapp.com/halloween_joke)


### Return A Random Halloween Fact:
[https://halloweenapi.herokuapp.com/halloween_fact](https://halloweenapi.herokuapp.com/halloween_fact)


### Return A Random Halloween Related Image:

[https://halloweenapi.herokuapp.com/halloween_image](https://halloweenapi.herokuapp.com/halloween_image)


### Return A Random Halloween Movie:

[https://halloweenapi.herokuapp.com/halloween_movie](https://halloweenapi.herokuapp.com/halloween_movie)

***


### Add To Our Data

Submit a Pull Request. Make sure to follow this format for the different endpoints:

### Joke

Open halloween/index.json

```javascript
{
  "id": joke id before + 1,
  "setup": "Why is Halloween cool?",
  "punchline": "Becuase it is!"
}
```

### Fact

Open halloween/facts.json

```javascript
{
  "id": fact id before + 1,
  "fact": "Halloween is cool!"
}
```

### Image

Open halloween/images.json
```javascript
{
  "id": image id before + 1,
  "url": "https://i.pinimg.com/originals/68/22/b2/6822b23e0d3ff55d17a11fef0381a42c.jpg",
  "title": "Scary pumpkin",
  "format": "jpg"
  }
```

### Movie

Open halloween/movies.json
```javascript
 {
      "id": movie id before +1,
      "name": "Goosebumps",
      "description": "Upset about moving from the big city to a small town, young Zach Cooper (Dylan Minnette) finds a silver lining when he meets his beautiful neighbor Hannah (Odeya Rush). The teen is surprised to learn that Hannah's mysterious father is R.L. Stine (Jack Black), the famous author of the best-selling 'Goosebumps' series. When Zach accidentally unleashes the monsters from the fantastic tales, it's up to Stine, his daughter and Cooper to return the beasts back to the books where they belong.",
      "runtime": "1h 43m",
      "release-date": "October 16, 2015",
      "mpaa-rating": "PG",
      "mpaa-description": "Rated PG for scary and intense creature action and images, and for some rude humor.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4k8uWafC44xM2Tf-0aCE-_4xj6qHaq86WKMIDMYQVvWnvNmL1"
    }
```

***

## Updates

Updates will be added frequently, so make sure to stay tuned for those.

***

Thanks for checking out the api, and happy Halloween! 🎃
