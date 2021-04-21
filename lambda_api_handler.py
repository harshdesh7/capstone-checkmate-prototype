import json
import boto3
import os
from decimal import Decimal


"""
Active User table schema:
    - username (primary/partition key)
    - current amt: double
    - current table (string - sort key)
    - if username not in db, then not in active session
    - delete when session is finished
    
Table Session table schema:
    - tableId (primary key)
    - current users: List[String] (list of users in current session)
    - total amount: double
    - when user wants to finish session, will check if total = sum
    - of all the amounts in the Active User table
"""

dynamo = boto3.resource('dynamodb')
usrTabName = os.environ['UserTable']
sessionTabName = os.environ['SessionTable']


response = {}
response['headers'] = {}
response['headers']['Content-Type']= "application/json"
response['headers']['Access-Control-Allow-Origin'] = "*" #For CORS enabling

# will need to add response['statusCode'] and response['body']
# in the functions below

# to get parameters from API, do event['queryStringParameters']

def lambda_handler(event, context):
    
    print(event['queryStringParameters'])
    
    try:
        action = event['queryStringParameters']['action'].lower()
        
        sc = -1
        body = {}
        
        if action == "adduser":
            try:
                sc, body = addUser(event['queryStringParameters']['username'], event['queryStringParameters']['tablename'])
            except:
                sc = 400
                body['message'] = "Invalid parameters for adding user"
        
        elif action == "finish":
            try:
                # TODO: write code...
                sc, body = finish(event['queryStringParameters']['tablename'])
            except:
                sc = 400
                body['message'] = "Invalid parameters for finshing session"
        
        elif action == "changeamt":
            try:
                sc, body = changeAmt(event['queryStringParameters']['username'],event['queryStringParameters']['amount'])
            except:
                sc = 400
                body['message'] = "Invalid parameters for updating personal amount"
            
        elif action == "additem":
            try:
                sc, body = addDelItem(event['queryStringParameters']['tablename'],event['queryStringParameters']['amount'], True)
            except:
                sc = 400
                body['message'] = "Invalid parameters for updating table amount"
            
        elif action == "deleteitem":
            try:
                sc, body = addDelItem(event['queryStringParameters']['tablename'],event['queryStringParameters']['amount'], False)
            except:
                sc = 400
                body['message'] = "Invalid parameters for updating table amount"
        
        elif action == "total":
            try:
                # TODO: write code...
                sc, body = getTotal(event['queryStringParameters']['tablename'])
            except:
                sc = 400
                body['message'] = "Invalid parameters for getting total amount"
                
        elif action == "breakdown":
            try:
                # TODO: write code...
                sc, body = getPriceBreakdown(event['queryStringParameters']['tablename'])
            except:
                sc = 400
                body['message'] = "Invalid parameters for getting breakdown"
            
        else:
            sc = 400
            body['message'] = "Invalid Action given"
        
        response['statusCode'] = sc
        response['body'] = json.dumps(body)
        
    except:
        response['statusCode'] = 404
        body = {}
        body['message'] = "action not detected"
        response['body'] = json.dumps(body)
    
    return response
    
    
# adds a user to a restaurant table session. If the user is not in the system, add the user to the system too    
def addUser(uname, tid):
    
    body = {}
    
    usrTable = dynamo.Table(usrTabName)
    sessionTable = dynamo.Table(sessionTabName)
    
    # first check that table id is in the db
    
    try:
        
        tableRes = None
        
        response = sessionTable.get_item(Key={'tableId': tid})
        
        if 'Item' not in response:
            body['message'] = "Table is not in DB"
            return (404, body)
            
        tableRes = response
            
        # then check if user is in the db, check if user is in active session
        
        try:
            response = usrTable.get_item(Key={'Username': uname})
            
            print(response)
            
            if 'Item' not in response or (response['Item']['tableId'] == "none" and response['Item']['currAmt'] == Decimal(-1)):
                try:
                    res = usrTable.put_item(Item={
                        'Username': uname,
                        'tableId': tid,
                        'currAmt': 0
                    })
                    
                    
                    print(tableRes)
                    
                    actUsr = tableRes['Item']['currUsrs'] #L (List)
                    actUsr.append(uname)
                    
                    print(actUsr)
                    
                    tot = tableRes['Item']['totalAmt'] #N (number)
                    
                    print(tot)
                    
                    try:
                        res = sessionTable.put_item(Item={
                            'tableId': tid,
                            'totalAmt': tot,
                            'currUsrs':actUsr
                        })
                        
                        body['message'] = "Successfully added/updated user to the databases!"
                        return (200, body)
                    except Exception as e:
                        body['message'] = "Cannot add active active user to table db"
                        print(e)
                        return (500, body)
                    
                except Exception as e:
                    body['message'] = "Cannot add active user to user table"
                    print(e)
                    return (500, body)
            else:
                body['message'] = "User already in active session"
                return (403, body)
                
        except Exception as e:
            body['message'] = "User Search Broken"
            print(e)
            return (500, body)
            
    except Exception as e:
        body['message'] = "Table Search Broken"
        print(e)
        return (500, body)
        
# if a user is in an active restaurant table session, then allow the user to change what amount to
# contribute to the bill
def changeAmt(uname, amt):
    
    body = {}
    
    if Decimal(amt) < 0:
        body['message'] = "Amount entered must not be negative!"
        return (403, body)
    
    usrTable = dynamo.Table(usrTabName)
    
    
    try:
        # TODO: write code...
        response = usrTable.get_item(Key={'Username': uname})
        
        if 'Item' not in response or (response['Item']['tableId'] == "none" and response['Item']['currAmt'] == Decimal(-1)):
            body['message'] = "User not in active session"
            return (403, body)
            
        try:
            # TODO: write code...
            usrTable.update_item(
                Key={
                    'Username': uname
                },
                UpdateExpression='SET currAmt = :val1',
                ExpressionAttributeValues={
                ':val1': Decimal(amt)
                }
            )
            
            body['message'] = "Successfully updated value!"
            return (200, body)
            
        except Exception as e:
            body['message'] = "User Update Broken"
            print(e)
            return (500, body)
        
    except Exception as e:
        body['message'] = "User Search Broken"
        print(e)
        return (500, body)
    
    
# a user in an active restaurant table session can add or delete a menu item which will be added to the
# total bill
def addDelItem(tid, amt, isAdd):
    
    body = {}
    
    if Decimal(amt) < Decimal('0'):
        body['message'] = "Must enter a positive value"
        return (403, message)
    
    print("Positive Value")
    
    sessionTable = dynamo.Table(sessionTabName)
    
    try:
        
        print("Before response")
        
        response = sessionTable.get_item(Key={'tableId': tid})
        newAmt = Decimal(response['Item']['totalAmt'])
        
        print(response, newAmt)
        
        if 'Item' not in response:
            body['message'] = "Table id is not in DB"
            return (404, body)
        elif not isAdd and newAmt - Decimal(amt) < Decimal('0'):
            body['message'] = "Subtraction Below Zero"
            return (403, body)
        
        
        try:
            # add or delete an item
            if isAdd:
                newAmt += Decimal(amt)
            else:
                newAmt -= Decimal(amt)
            
            sessionTable.update_item(
                Key={
                    'tableId': tid
                },
                UpdateExpression='SET totalAmt = :val1',
                ExpressionAttributeValues={
                ':val1': newAmt
                }
            )
            
            body['message'] = "Successfully updated total table value!"
            return (200, body)
            
        except Exception as e:
            body['message'] = "User Update Broken"
            print(e)
            return (500, body)
        
        
    except Exception as e:
        body['message'] = "Table Search Broken"
        print(e)
        return (500, body)
    
    
# closes out active restaurant table session, checks if amount that all users are contributing is
# equal to total bill, returns final bill splt
def finish(tid):
    
    body = {}
    
    sessionTable = dynamo.Table(sessionTabName)
    usrTable = dynamo.Table(usrTabName)
    
    try:
        # TODO: write code...
        
        response = sessionTable.get_item(Key={'tableId': tid})
        
        total = Decimal(response['Item']['totalAmt'])
        
        users = response['Item']['currUsrs']
        
        body['finalSplit'] = {}
        
        addUp = Decimal('0')
        
        for u in users:
            try:
                # TODO: write code..
                response = usrTable.get_item(Key={'Username': u})
                
                addUp += response['Item']['currAmt']
                
                body['finalSplit'][u] = float(response['Item']['currAmt'])
                
            except Exception as e:
                msg = f'User search broken for user {u}'
                body['message'] = msg
                print(e)
                return (500, body)
        
        if addUp != total:
            body['message'] = "Bill Split is not equal to total amount"
            return (403, body)
        
        for u in users:
            try:
                # TODO: write code...
                
                usrTable.update_item(
                    Key={
                        'Username': u
                    },
                    UpdateExpression='SET currAmt = :val1, tableId = :val2',
                    ExpressionAttributeValues={
                        ':val1': Decimal('-1'),
                        ':val2': "none"
                    }
                )
                
            except Exception as e:
                msg = f'User Update Broken for User {u}'
                body["message"] = msg
                print(e)
                return (500, body)
        
        try:
            # TODO: write code...
            sessionTable.update_item(
                Key={
                    'tableId': tid
                },
                UpdateExpression='SET totalAmt = :val1, currUsrs = :val2',
                ExpressionAttributeValues={
                    ':val1': Decimal('0'),
                    ':val2': []
                }
            )
            
            return (200, body)
            
        except Exception as e:
            body['message'] = "Update Table Entry Broken"
            print(e)
            return (500, body)
        
    except Exception as e:
        body['message'] = "Table Search Broken"
        print(e)
        return (500, body)

# gets current bill split breakdown of all active users in an active restaurant table session
def getPriceBreakdown(tid):
    
    body = {}
    
    sessionTable = dynamo.Table(sessionTabName)
    usrTable = dynamo.Table(usrTabName)
    
    try:
        
        response = sessionTable.get_item(Key={'tableId': tid})
        
        users = response['Item']['currUsrs']
        
        body['users'] = {}
        
        for u in users:
            try:
                # TODO: write code...
                
                response = usrTable.get_item(Key={'Username': u})
                
                body['users'][u] = float(response['Item']['currAmt'])
                
            except Exception as e:
                msg = f'User Update Search for User {u}'
                body["message"] = msg
                print(e)
                return (500, body)
        
        return (200, body)
        
    except Exception as e:
        body['message'] = "Table Search Broken"
        print(e)
        return (500, body)
        
# gets current total bill at an active restaurant table session
def getTotal(tid):
    
    body = {}
    
    sessionTable = dynamo.Table(sessionTabName)
    
    try:
        # TODO: write code...
        
        response = sessionTable.get_item(Key={'tableId': tid})
        
        body['total'] = float(response['Item']['totalAmt'])
        
        return (200, body)
        
    except Exception as e:
        body['message'] = 'Table Search Broken'
        print(e)
        return (500, body)
    
    
    
    
    
    
    
    


    
