import base64
from datetime import datetime
from types import NoneType
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
app = Flask(__name__)
app.config["SECRET_KEY"] = 'jp0?ad[1-=-0-`94mpgf-pjmwr3;2owdakdnw'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

'''
from db import db
db.create_all()
exit()
'''


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(500), nullable=True)
    photo = db.relationship('Posts', backref='users')

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password
        db.session.add(self)
        db.session.commit()

    def loginning(email, password):
        user = Users.query.filter_by(email=email, password=password).first()
        try:
            return [user.username, user.email]
        except AttributeError: 
            return None

    def update_psw(email, new_password):
        user = Users.query.filter_by(email=email).first()
        user.password = new_password
        db.session.commit()

    def return_user_to_db(email):
        user = Users.query.filter_by(email=email).first()
        return user

def registration(username, email, password):
    user = Users.query.filter_by(email=email).first()
    if type(user) == NoneType:
        user = Users(username=username, email=email, password=password)
        return f'Зарегестрирован новый пользователь {username}\nEmail: {email}'
    else:
        return 'Пользователь с таким Email уже существует!'

        
class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('users.id'))
    post_title = db.Column(db.String(100))
    phone_number = db.Column(db.Integer)
    category = db.Column(db.Integer)
    cost = db.Column(db.String(500), nullable=True)
    description = db.Column(db.String(8000), nullable=True)
    post_date = db.Column(db.DateTime)
    deactivate_date = db.Column(db.DateTime)
    whatsapp_link = db.Column(db.String(100))
    status = db.Column(db.Boolean, default=False, nullable=False)
    photo = db.relationship('Photos', backref='posts')

    def __init__(self, user, post_title, phone_number, category, cost, description, post_date, deactivate_date, whatsapp_link, status):
        self.user = user.id
        self.post_title = post_title
        self.phone_number = phone_number
        self.category = category
        self.cost = cost
        self.description = description
        self.post_date = post_date
        self.deactivate_date = deactivate_date
        self.whatsapp_link = whatsapp_link
        self.status = status
        db.session.add(self)
        db.session.commit()

    
    def show_posts_of_user(email):
        user = Users.query.filter_by(email=email).first()
        user_id = user.id
        posts = Posts.query.filter_by(user=user_id).all()
        postss = []
        for i in range(len(posts)):
            title = posts[i].post_title
            phone_number = posts[i].phone_number
            category = posts[i].category
            cost = posts[i].cost
            description = posts[i].description
            post_date = posts[i].post_date
            deactivate_date = posts[i].deactivate_date
            whatsapp_link = posts[i].whatsapp_link
            status = posts[i].status
            photos = []
            for j in range(len(posts[i].photo)):
                photos.append(base64.b64encode(posts[i].photo[j].data).decode('ascii'))
            postss.append({'title': title, 'phone_number':phone_number, 'category':category, "cost":cost, 'description':description, 'post_date':post_date, 'deactivate_date':deactivate_date, 'whatsapp_link':whatsapp_link, 'photos':photos})
        return postss

    def post_activation(post_id):
        posts = Posts.query.filter_by(id=post_id).first()
        posts.status = True
        db.session.commit()

    def post_deactivation(today):
        posts = Posts.query.order_by(Posts.deactivate_date).all()
        for i in posts:
            if posts[i.id-1].deactivate_date <= today:
                posts[i.id-1].status = False
                db.session.commit()
      



class Photos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.LargeBinary)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))

    def __init__(self, data, post_id):
        self.data = data
        self.post_id = post_id.id
        db.session.add(self)
        db.session.commit()


# print(Posts.show_posts_of_user('dakee088@gmail.com'))
# След. шаг: Выводить в пост его данные + фотографии
# Данные для поста: 
# Photos, user, title, phone_number, category, cost, description, post_date, link