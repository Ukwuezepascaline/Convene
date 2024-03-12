# Event Manager API

The Event Manager API is a Flask-based web service designed to facilitate the management of events, user authentication, RSVPs, questions, and comments within an event management application. It provides endpoints for user signup, login, event creation, RSVPs, question submission, comment submission, and more.

## Features

- User signup and login with JWT authentication.
- Creation of events by admin users.
- RSVP functionality for regular users.
- Submission of questions by users attending an event.
- Upvoting and downvoting questions.
- Adding comments to questions.
- Ranking questions based on upvote and downvote counts.
- Display of event statistics including total questions, attendees, and more.
- User profile information including number of questions posted, number of comments, and upcoming event feed.

## Technologies Used

- Flask: A lightweight WSGI web application framework.
- SQLAlchemy: An SQL toolkit and Object-Relational Mapping (ORM) library for Python.
- Flask-JWT-Extended: A Flask extension that adds support for JSON Web Tokens (JWT).
- SQLite: A lightweight relational database management system.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your/repository.git
    cd repository
    ```

2. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Set up the database:

    ```bash
    python
    >>> from app import db
    >>> db.create_all()
    ```

4. Run the application:

    ```bash
    python app.py
    ```

## API Endpoints

### User

- `POST /signup`: Register a new user.
- `POST /login`: Log in with username and password.
- `POST /logout`: Log out the current user.

### Event

- `POST /events`: Create a new event.
- `GET /events/<event_id>`: Get details of a specific event.
- `GET /events`: Get a list of all events.

### RSVP

- `POST /events/<event_id>/rsvp`: RSVP to an event.
- `DELETE /events/<event_id>/rsvp`: Cancel RSVP to an event.

### Question

- `POST /events/<event_id>/questions`: Submit a question for an event.
- `GET /events/<event_id>/questions`: Get questions for a specific event.
- `PUT /questions/<question_id>/upvote`: Upvote a question.
- `PUT /questions/<question_id>/downvote`: Downvote a question.

### Comment

- `POST /questions/<question_id>/comments`: Add a comment to a question.

## Authentication

JWT (JSON Web Tokens) are used for authentication. When a user successfully logs in, a JWT is generated and returned. This token should be included in the header of subsequent requests as follows:

```http
Authorization: Bearer <token>
```

## Contribution

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create your feature branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -am 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a new pull request.

## Licence

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.