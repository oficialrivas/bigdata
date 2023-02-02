import logging
import os
import requests

from flask import Flask, request, jsonify
from flask_restx import Resource, Api, reqparse
from functools import wraps
from gevent.pywsgi import WSGIServer
from mongocon import *


# Conexion a la base datos mongoDB
# db_conn = mongoconn(localhost,8888)

app = Flask(__name__)


api = Api(app)
args_parser = reqparse.RequestParser()


@api.route('/consulta/persona')
def p_consulta():
    cedula = request.args.get('cedula')
    collection = 'persona'  # placeholder
    c_qry = {'cedula': cedula}
    return jsonify(dbquery(collection, c_qry))


if __name__ == '__main__':
    try:
        host = '0.0.0.0'
        port = 5000
        print = (f'Starting Server on {host}:{port}')
        app_server = WSGIServer((host, port), app)
        app_server.serve_forever()
        # app.run(host=host, port=port)
    except KeyboardInterrupt:
        print(f'Closing server on {host}:{port}')
    except Exception as e:
        print(f'Exception on app.run {e}')
