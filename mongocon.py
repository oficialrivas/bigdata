from pymongo import MongoClient


def mongoconn(host, port):
    """
    Se conecta a una base de datos mongoDB de la forma \n
    mongodb://host:port/ \n 
    y retorna esto como variable del tipo MongoClient
    """

    try:
        conn = MongoClient(f'mongodb://{host}:{port}/')
        print('Database Connection Successful.')
    except:
        print('Database Connection Failed.')
    return conn


def mongodb(connection, database, collection):
    """
    Se conecta a la base de datos y colección especificada
    """
    db = connection[f"{database}"]
    mdb_col = db[f"{collection}"]
    return mdb_col


def dbquery(collection, query):
    """
    La peticion debe puede ser de las siguientes formas: \n
    { "address": "Park Lane 38" } \n
    { "address": { "$gt": "S" } } \n
    { "address": { "$regex": "^S" } }
    Luego lo itera y saca cada uno
    """
    qry = collection.find(query)
    result = [document for document in qry]
    return result
