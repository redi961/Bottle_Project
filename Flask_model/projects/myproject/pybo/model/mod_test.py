from flask import Blueprint, request, jsonify
from PIL import Image
import os
import subprocess
import shutil

bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('/test')
def hello_pybo():

    # 원본 이미지 위치
    img = "..\/..\/"+request.args.get("path")
    # 원본 이미지 이름
    Nm = request.args.get("name")
    # 저장할 위치
    new_link = "../../../front_End/public/new_images/" + Nm

    # 폴더 내부 관리용 삭제코드
    def delete_folder(path):
        if os.path.exists(path):
            file_count = sum([len(files) for r, d, files in os.walk(path)])
            if file_count >= 15:
                print(f"{path} contains {file_count} files. Removing the folder...")
                for root, dirs, files in os.walk(path, topdown=False):
                    for file in files:
                        os.remove(os.path.join(root, file))
                    for folder in dirs:
                        os.rmdir(os.path.join(root, folder))
                os.rmdir(path)
            else:
                print(f"{path} contains {file_count} files. Nothing to remove.")
        else:
            print(f"{path} does not exist.")
    # Yolov5 사용코드
    def Useing_Yolo():
        # run폴더 관리
        delete_folder('C:/Users/user/Desktop/Pro_Seoreu/Flask_model/projects/myproject/yolov5/runs/detect')
        # 파일 경로 호출
        file_path = os.path.abspath(img)

        # yolov5 사용
        cmd = f"python C:/Users/user/Desktop/Pro_Seoreu/Flask_model/projects/myproject/yolov5/detect.py \
                --weights C:/Users/user/Desktop/Pro_Seoreu/Flask_model/projects/myproject/Model/best.pt \
                --img 512 --source {file_path} --save-txt"
        subprocess.run(cmd, shell=True)

        # 이미지 열명 및 횟수 초기화
        class_names = ['beer', 'soju', 'whisky', 'wine']
        class_count = {class_name: 0 for class_name in class_names}

        
        # yolov5에 있는 특정 경로(txt파일 & img파일) 찾기
        def txts():
            global path
            # 전체 중복 경로
            path = "C:/Users/user/Desktop/Pro_Seoreu/Flask_model/projects/myproject/yolov5/runs/detect/"
            
            p_txt = ''
            i_txt = ''
            m_txt = ''
            
            # 마지막 저장경로 exp파일 탐색
            for i, j, k in os.walk(path):
                p_txt += j[-1]
                break
            
            # 기존경로 + exp파일위치 : labels + jpg파일
            txt = path + p_txt

            # jpg파일 탐색 및 새로운 경로에 저장
            for i, j , k in os.walk(txt):
                i_txt = k
                break   
            img_save = txt +'/'+i_txt[-1]
            img_open = Image.open(img_save)
            img_open.save(new_link)

            # txt 탐색(경로 return)
            for i, j , k in os.walk(txt):
                m_txt = '/' + k[-1]
            txt_path = txt  + '/labels' + m_txt
            
            return txt_path

        # 위 함수 실행 : txt_path 저장
        txt_path = txts()

        def count():
            # 파일 읽어오기
            with open(txt_path, 'r') as f:
                lines = f.readlines()
                print(lines)

            # 병 갯수 카운트 구간
            for line in lines:
                class_id = int(line.split()[0])
                class_name = class_names[class_id]
                class_count[class_name] += 1

            result = ''
            for class_name, count in class_count.items():
                print(f'{class_name}: {count}')
                result += f'{class_name}: {count},'
                w_list = result.split(',')
                w_list = w_list[:-1]

            return w_list
        
        w_list = count()
        return w_list
    
    w_use = Useing_Yolo()

    return jsonify({'count':w_use, 'url':new_link})


@bp.route('/')
def index():
    return 'Pybo index'