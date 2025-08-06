## API Overview

The MoviesDatabase API provides access to a huge collection of movies, shows, and series. It allows developers to search for titles, filter results by year or genre, get detailed information about each movie, and browse trending or popular content.

## Version

v1.0

## Available Endpoints

- `/titles` - Fetches a list of movies or shows. Supports filtering by year and genre.
- `/titles/search/title/{title}` - Search for a movie by its title.
- `/titles/{id}` - Get detailed information for a specific movie using its ID.
- `/titles/utils/genres` - Get a list of all available movie genres.

## Request and Response Format

### Request:
- Method: GET
- Headers:
  - `X-RapidAPI-Key`: Your API key
  - `X-RapidAPI-Host`: moviesdatabase.p.rapidapi.com

### Example:
```http
GET /titles?year=2023&genre=Action
Host: moviesdatabase.p.rapidapi.com
Headers:
  X-RapidAPI-Key: YOUR_API_KEY

{
  "results": [
    {
      "id": "tt1234567",
      "titleText": { "text": "Example Movie" },
      "releaseYear": { "year": 2023 },
      "genres": { "genres": [{ "text": "Action" }] }
    }
  ]
}


---

#### ✅ Section: Authentication

```md
## Authentication

All requests to the MoviesDatabase API require an API key. You must include the following headers in each request:

- `X-RapidAPI-Key`: Your personal API key from RapidAPI
- `X-RapidAPI-Host`: moviesdatabase.p.rapidapi.com

Keep your API key secret by storing it in an environment variable like `.env.local`.

## Error Handling

If something goes wrong, the API will return an error response. Common error codes:

- `401 Unauthorized`: API key is missing or invalid
- `403 Forbidden`: Access denied, usually due to rate limits
- `404 Not Found`: The movie or endpoint doesn't exist
- `500 Internal Server Error`: Something broke on the server

Use `try/catch` in your code and check the response status before using the data.

## Usage Limits and Best Practices

- The API is rate-limited. Avoid making too many requests in a short time.
- Use pagination to load small chunks of data.
- Cache results locally when possible.
- Always handle loading and error states in your app.
- Keep your API key secret. Do not expose it to the frontend.

