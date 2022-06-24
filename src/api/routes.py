"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Lesson_Content, Teacher, Student
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask import Flask
from flask_cors import CORS, cross_origin
from flask_jwt_extended import current_user
from hmac import compare_digest,new

api = Blueprint('api', __name__)

@api.route('/users/<id>', methods=['DELETE'])
def user_delete(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return jsonify({ "User Deleted": True}), 200

@api.route('/users/<id>', methods=['PUT'])
def user_update(id):
    user = User.query.get(id)

    is_teacher = request.json["is_teacher"]
    email = request.json["email"]
    password = request.json["password"]

    user.is_teacher = is_teacher
    user.email = email
    user.password = password

    db.session.commit()

    return jsonify({ "User Updated": True}), 200



@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
   
    users = User.query.filter_by(email=email).one_or_none()
    # print(users.serializeUser())

    if email !=  users.serializeUser()['email'] or password !=  users.serializeUser()['password']:
        return jsonify("Wrong email or password"), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/updatepassword", methods=["POST"])
def updatepassword():
    id = request.json.get("id", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(id=id).first()
    user.update(password)

    return jsonify('results'),200
   


@api.route("/forgetpassword", methods=["POST"])
def forgetpassword():
    email = request.json.get("email", None)
    web_link = request.json.get("web_link", None)

    users = User.query.filter_by(email=email).one_or_none()

    
    if not users: 
        return jsonify({"msg": "Email is not exist"}), 401

    return jsonify(link=web_link+str(users.serializeUser()['id']))





@api.route('/users', methods=['GET'])
def handle_hello():

    users = User.query.all()
    response_body = {
        #"message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request",
        "users": []
    }

    for user in users:
        response_body['users'].append(user.serializeUser())

    return jsonify(response_body), 200

@api.route('/users', methods=['POST'])
def add_user():

    # User.append(newmember)
    body_request = request.get_json()
    email_request = body_request.get("email", None)
    password_request = body_request.get("password", None)
    is_teacher_request = body_request.get("is_teacher", False)


    new_user = User(
        email = email_request,
        password = password_request, 
        is_teacher = is_teacher_request
    )

    print(new_user)
    new_user.create()
    # db.session.add(new_user)
    # db.session.commit()
    return "User Added", 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    print( email)
    print(password)
   
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/lessons', methods=['GET'])
def handle_lessons():

    lessons = Lesson_Content.query.all()
    response_body = {
        #"message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request",
        "lessons": []
    }

    for lesson in lessons:
        response_body['lessons'].append(lesson.serializeLessons())

    return jsonify(response_body), 200

@api.route('/lessons', methods=['POST'])
def add_lesson():

    # User.append(newmember)
    body_request = request.get_json()
    title_request = body_request.get("title", None)
    subject_request = body_request.get("subject", None)
    introduction_request = body_request.get("introduction", None)
    content_request = body_request.get("written_content", None)
    summary_request = body_request.get("summary", None)
    image_request = body_request.get("image", None)
    date_request = body_request.get("date", None)
    key_word1_request = body_request.get("key_word1", None)
    key_word2_request = body_request.get("key_word2", None)
    key_word3_request = body_request.get("key_word3", None)
    question1_request = body_request.get("question1", None)
    question2_request = body_request.get("question2", None)
    question3_request = body_request.get("question3", None)
    question4_request = body_request.get("question4", None)


    new_content = Lesson_Content(
        title = title_request,
        subject = subject_request,
        introduction = introduction_request,
        written_content = content_request,
        summary = summary_request,
        image = image_request,
        date = date_request, 
        key_word1 = key_word1_request,
        key_word2 = key_word2_request,
        key_word3 = key_word3_request,
        question1 = question1_request,
        question2 = question2_request,
        question3 = question3_request,
        question4 = question4_request
    )

    db.session.add(new_content)
    db.session.commit()
    return "Lesson Content Added", 200

@api.route('/lessons/<id>', methods=['PUT'])
def lesson_update(id):
    lesson = Lesson_Content.query.get(id)

    title = request.json["title"]
    subject = request.json["subject"]
    introduction = request.json["introduction"]
    written_content = request.json["written_content"]
    summary = request.json["summary"]
    key_word1 = request.json["key_word1"]
    key_word2 = request.json["key_word2"]
    key_word3 = request.json["key_word3"]
    question1 = request.json["question1"]
    question2 = request.json["question2"]
    question3 = request.json["question3"]
    question4 = request.json["question4"]
    # image = request.json["image"]
    date = request.json["date"] 

    lesson.title = title
    lesson.subject = subject
    lesson.introduction = introduction
    lesson.written_content = written_content
    lesson.summary = summary
    lesson.key_word1 = key_word1
    lesson.key_word2 = key_word2
    lesson.key_word3 = key_word3
    lesson.question1 = question1
    lesson.question2 = question2
    lesson.question3 = question3
    lesson.question4 = question4
    # lesson.image = image
    lesson.date = date

    db.session.commit()

    return jsonify({ "Lesson Updated": True}), 200

@api.route('/lessons/<id>', methods=['DELETE'])
def lesson_delete(id):
    lesson = Lesson_Content.query.get(id)
    db.session.delete(lesson)
    db.session.commit()

    return jsonify({ "Lesson Deleted": True}), 200

@api.route('/teacher', methods=['GET'])
def handle_teacher():

    teachers = Teacher.query.all()
    response_body = {
        #"message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request",
        "teachers": []
    }

    for teacher in teachers:
        response_body['teachers'].append(teacher.serializeTeacher())

    return jsonify(response_body), 200

@api.route('/teacher', methods=['POST'])
def add_teacher():

    # User.append(newmember)
    body_request = request.get_json()
    email_request = body_request.get("email", None)
    avatar_request = body_request.get("avatar", None)
    first_name_request = body_request.get("first_name", None)
    last_name_request = body_request.get("last_name", None)
    subjects_request = body_request.get("subjects", None)
    why_you_teach_request = body_request.get("why_you_teach", None)
    years_experience_request = body_request.get("years_experience", None)
    fun_info_request = body_request.get("fun_info", None)
    password_request = body_request.get("password", None)

    # lessons_request = body_request.get("lessons", None)

    new_teacher = Teacher(
        email = email_request,
        avatar = avatar_request,
        first_name = first_name_request,
        last_name = last_name_request,
        subjects = subjects_request,
        why_you_teach = why_you_teach_request,
        years_experience = years_experience_request,
        fun_info = fun_info_request, 

        password = password_request,
        # lessons = lessons_request
    )

    db.session.add(new_teacher)
    db.session.commit()
    return "Teacher Added", 200

@api.route('/teacher/<id>', methods=['PUT'])
def teacher_update(id):
    teacher = Teacher.query.get(id)

    # email = request.json["email"]
    # password = request.json["password"]
    # avatar = request.json["avatar"]
    first_name = request.json["first_name"]
    last_name = request.json["last_name"]
    subjects1 = request.json["subjects1"]
    subjects2 = request.json["subjects2"]
    subjects3 = request.json["subjects3"]
    subjects4 = request.json["subjects4"]
    why_you_teach = request.json["why_you_teach"]
    years_experience = request.json["years_experience"]
    fun_info = request.json["fun_info"]

    # teacher.email = email
    # teacher.password = password
    # teacher.avatar = avatar
    teacher.first_name = first_name
    teacher.last_name = last_name
    teacher.subjects1 = subjects1
    teacher.subjects2 = subjects2
    teacher.subjects3 = subjects3
    teacher.subjects4 = subjects4
    teacher.why_you_teach = why_you_teach
    teacher.years_experience = years_experience
    teacher.fun_info = fun_info

    db.session.commit()

    return jsonify({ "Teacher Updated": True}), 200


@api.route('/student', methods=['GET'])
def handle_student():

    students = Student.query.all()
    response_body = {
        #"message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request",
        "students": []
    }

    for student in students:
        response_body['students'].append(student.serializeStudent())

    return jsonify(response_body), 200

@api.route('/student', methods=['POST'])
def add_student():

    body_request = request.get_json()
    email_request = body_request.get("email", None)
    password_request = body_request.get("password", None)
    first_name_request = body_request.get("first_name", None)
    last_name_request = body_request.get("last_name", None)


    new_student = Student(
        email = email_request,
        password = password_request,
        first_name = first_name_request,
        last_name = last_name_request,
    )

    db.session.add(new_student)
    db.session.commit()
    return "Student Added", 200

@api.route('/student/<id>', methods=['PUT'])
def student_update(id):
    student = Student.query.get(id)

    email = request.json["email"]
    password = request.json["password"]
    first_name = request.json["first_name"]
    last_name = request.json["last_name"]

    student.email = email
    student.password = password
    student.first_name = first_name
    student.last_name = last_name

    db.session.commit()

    return jsonify({ "Student Updated": True}), 200