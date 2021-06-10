# 必要機能のインポート
from re import A
from flask import Flask ,render_template
# 名前をつける
from flask.templating import render_template, render_template_string
from werkzeug.utils import append_slash_redirect

app = Flask(__name__)

# @app.route("/")
# def helloWold():
#     return "Hello World"

# @app.route("/<name>")
# def greet(name):
#     return name + "さん、ハロー！"

@app.route("/template")
def template():
    py_name = "はれ"
    return render_template("index.html",name = py_name)











if __name__ == "__main__":

    app.run(debug=True)