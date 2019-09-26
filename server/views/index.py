import os
import shutil
import tempfile
import flask
from flask import send_from_directory
import server
import time
from server.model import get_db

@server.app.route('/', methods=['GET', 'POST'])
def show_timeline():
	"""Main Timeline Route."""
	if flask.request.method == 'POST':
		timestamp = time.time() * 1000
		text = flask.request.data
		text = text.decode('UTF-8')
		print(text)
		last_pos = text.rfind('"')
		text = text[9:last_pos]
		print(text)
		sql = ''' 
			INSERT INTO posts(id, text)
			VALUES(?, ?)
				'''
		vals= [int(timestamp), text]
		get_db().cursor().execute(sql, vals)
	context = {}
	posts1 = get_db().cursor().execute('''SELECT * FROM posts''').fetchall()
	context["posts"] = posts1.copy()
	return flask.jsonify(**context)