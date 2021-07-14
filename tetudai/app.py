from flask import Flask,render_template,request,redirect
import sqlite3,datetime
app = Flask(__name__)



import datetime

dt_now = datetime.datetime.now()

print(dt_now)
# 2019-02-04 21:04:15.412854

print(type(dt_now))
# <class 'datetime.datetime'>

if __name__ == "__main__":

    app.run(debug=True)