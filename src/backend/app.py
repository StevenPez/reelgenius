# app.py
from flask import Flask, render_template
from flask import jsonify
from flask import request
from flask_cors import CORS, cross_origin

# --------------------------------------------------------------------------------------------------------------------------- #

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def machineLearning(userPrefs):
    # name: jsonData.movie_title[i], rating: 1, id: "1", img: jsonData.Poster[i]}
    recommended_movies = [["101 Dalmatians", "4.0", "https://m.media-amazon.com/images/I/81TDd2PNTXL._SY445_.jpg"], ["17 Again", "2.2", "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NTI1Mzg3N15BMl5BanBnXkFtZTcwMjYwNjAzMg@@._V1_UX182_CR0,0,182,268_AL_.jpg"]]
    return(recommended_movies)

@app.route('/')
@cross_origin()
def default():
    return "<p>This is the Default Route</p>"

@app.route("/test")
@cross_origin()
def test():
    return "Test"

@app.route('/post_json', methods=['POST'])
@cross_origin()
def post_json():
    data = request.json
    print()
    print(data)
    print()
    # send to ML
    recs = machineLearning(data)
    response_body = jsonify({
        "recs": recs
    })
    return response_body