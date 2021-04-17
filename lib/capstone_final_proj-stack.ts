import * as cdk from '@aws-cdk/core';
import dynamodb = require('@aws-cdk/aws-dynamodb');
import { CfnOutput } from "@aws-cdk/core";

export class CapstoneFinalProjStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    //  - uuid for everything
    // assign roles in cognito, no passwords in ddb
    // make IAM roles, be very specific with them
    // add more composite keys

    //NOTE: With DynamoDB tables and its NoSQL nature, cannot predefine attributes outside of keys
    //all attributes listed will have to be manually defined with each PutItem request

    // =====================================================================================
    // Customer DynamoDB table
    // =====================================================================================
    
    
    // Attributes:
    //  - email: string (primary/partition key)
    //  - password: string
    //  - cardNumber: string
    const custTable = new dynamodb.Table(this, 'Customers', {
      partitionKey: { name: 'email', type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    new cdk.CfnOutput(this, 'customerTable', { value: custTable.tableName });

    // =====================================================================================
    // Restaurant DynamoDB table
    // This will be completely public for now
    // =====================================================================================
    
    //Attributes:
    //  - restaurantId: string (primary/partition key)
    //  - restaurantName: string
    //  - restuarantEmployees: [{employeeId: string, employeeName: string, role: string}]
    const restTable = new dynamodb.Table(this, 'Restaurants', {
      partitionKey: { name: 'restId', type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    new cdk.CfnOutput(this, 'restaurantTable', { value: restTable.tableName });

    // =====================================================================================
    // Restuarant DynamoDB table for transactions
    // This will not be public, only owner can look at this
    // =====================================================================================
    
    //Attributes:
    //   - restuarantId: string (primary/partition key)
    //   - password: string
    //   - transactions: [{amount: double, timestamp: date, payers: [{email: string, amt: double}]}]
    const restTranTable = new dynamodb.Table(this, 'Transactions', {
      partitionKey: { name: 'restId', type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    new cdk.CfnOutput(this, 'transactionTable', { value: restTranTable.tableName });


    // =====================================================================================
    // Waiter DynamoDB table
    // may also double as chef account for v1
    // =====================================================================================
    
    //Attributes:
    //  - employeeId: string (primary/partition key)
    //  - restaurantId: string (potential secondary/sort key)
    //  - name: string
    //  - password: string
    //  - tips: [{amount: double, timestamp: date, payer: str}]
    const empTable = new dynamodb.Table(this, 'Waiters', {
      partitionKey: { name: 'empId', type: dynamodb.AttributeType.STRING },
      sortKey: {name: 'restId', type: dynamodb.AttributeType.STRING},
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    new cdk.CfnOutput(this, 'waiterTable', { value: empTable.tableName });

    
    // =====================================================================================
    // Active Bill Split DynamoDB table 
    // Will need to set up DDB stream (w/ lambda function processor) between this
    // and transaction table

    // Option 2:
    // When pressing finish button, API call made
    // that is hooked up to lambda, that takes final split breakdown
    // =====================================================================================
    
    //Attributes:
    //  - tableId: string (primary/partition key)
    //  - restuarantId: string (secondary/sort key)
    //  - composite key primary (tableId+restaurantId)

    //  - activeSession: bool
    //  - currentAmt: double
    //  - sessionLeader: str (this will be emailId)
    //  - breakdown: [{payerId: str, amt: double}]
    const sessionTable = new dynamodb.Table(this, 'SessionTable', {
      partitionKey: { name: 'tableId', type: dynamodb.AttributeType.STRING },
      sortKey: {name: 'restId', type: dynamodb.AttributeType.STRING},
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    new cdk.CfnOutput(this, 'sessionTable', { value: sessionTable.tableName });

  }
}
