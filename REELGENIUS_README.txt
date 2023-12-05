ReelGenius: Senior Project at the University of Florida
Contributors: Caroline Rogers, Sydney Opyrchal, Steven Perez

How to Run:
1. Open a terminal
2. Navigate to the folder containing the project, should be called "reelgenius"
3. Navigate to src/backend
4. Type "flask run --host=0.0.0.0" + Enter
5. Repeat steps 1 and 2
6. Type "npm start" + Enter

The IP Address needs to be changed in the RunML.js file.
Change it from "192.168.19.1" to whatever you have on your local machine and network.

Additionally, many libraries are necessary for our machine learning algorithm. 
These may need to be installed using "pip install ____"
These may include:
flask
jsonify
request
flask_cors
tensorflow
keras
scikit-learn
sklearn
pandas
numpy
re
nltk