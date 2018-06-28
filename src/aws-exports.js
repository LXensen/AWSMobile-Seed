// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_app_analytics': 'enable',
    'aws_cognito_identity_pool_id': 'us-east-1:f44da31b-617f-44b2-853c-08f6772c2b7a',
    'aws_cognito_region': 'us-east-1',
    'aws_content_delivery': 'enable',
    'aws_content_delivery_bucket': 'xaccountpoc-hosting-mobilehub-1215335158',
    'aws_content_delivery_bucket_region': 'us-east-1',
    'aws_content_delivery_cloudfront': 'enable',
    'aws_content_delivery_cloudfront_domain': 'di5k4enlagtby.cloudfront.net',
    'aws_dynamodb': 'enable',
    'aws_dynamodb_all_tables_region': 'us-east-1',
    'aws_dynamodb_table_schemas': [{"tableName":"xaccountpoc-mobilehub-1215335158-AWSMobileTable","attributes":[{"name":"teamId","type":"S"},{"name":"personId","type":"S"},{"name":"email","type":"S"},{"name":"personName","type":"S"},{"name":"phone","type":"S"}],"indexes":[{"indexName":"personName-index","hashKey":"teamId","rangeKey":"personName"}],"region":"us-east-1","hashKey":"teamId","rangeKey":"personId"},{"tableName":"xaccountpoc-mobilehub-1215335158-XAccountPOCTable","attributes":[{"name":"Id","type":"S"},{"name":"UserName","type":"S"}],"indexes":[],"region":"us-east-1","hashKey":"Id"}],
    'aws_mandatory_sign_in': 'enable',
    'aws_mobile_analytics_app_id': 'fa88674294504194ab73bf3339e88c30',
    'aws_mobile_analytics_app_region': 'us-east-1',
    'aws_project_id': 'ddab71a2-205b-4f60-b1e3-9e7bb1dcc5b1',
    'aws_project_name': 'XAccountPOC',
    'aws_project_region': 'us-east-1',
    'aws_resource_name_prefix': 'xaccountpoc-mobilehub-1215335158',
    'aws_sign_in_enabled': 'enable',
    'aws_user_pools': 'enable',
    'aws_user_pools_id': 'us-east-1_1CqZDMkp7',
    'aws_user_pools_mfa_type': 'OFF',
    'aws_user_pools_web_client_id': '6tcmndjqhkko31dm94vng96ltg',
}

export default awsmobile;