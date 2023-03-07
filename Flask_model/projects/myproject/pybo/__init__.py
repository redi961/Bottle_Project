from flask import Flask, request
import shutil

# 제일 처음 실행되는 코드로써 내부 함수들을 호출하는 역할
def create_app():
    app = Flask(__name__)   # 모듈명이 담기는 곳

    from .model import mod_test
    app.register_blueprint(mod_test.bp)

    # @app.route('/')   # 플라스크 url매핑
    # def hello_pybo():
    #     return 'Hello, pybo!'
    
    return app