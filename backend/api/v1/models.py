from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import ForeignKey
from flask_login import UserMixin

db = SQLAlchemy()


class User(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    events = relationship('Event', secondary='rsvp', backref='attendees')
    questions = relationship('Question', backref='user')
    comments = relationship('Comment', backref='user')


class Event(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    creator_id = db.Column(db.Integer, ForeignKey('users.id'))


class RSVP(db.Model):
    __tablename__ = 'rsvp'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    event_id = db.Column(db.Integer, ForeignKey('events.id'))


class Question(db.Model):
    __tablename__ = 'questions'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    upvotes = db.Column(db.Integer, default=0)
    downvotes = db.Column(db.Integer, default=0)
    event_id = db.Column(db.Integer, ForeignKey('events.id'))
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    comments = relationship('Comment', backref='question')


class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    question_id = db.Column(db.Integer, ForeignKey('questions.id'))
