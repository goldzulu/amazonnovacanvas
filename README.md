# Goldzulu - Amazon Nova Canvas Article Tutorial Code Samples

This repository contains code that are used for the Exploring Amazon Nova Canvas Exploration Series article in Javascript (.js) formats.

The files are taken or modified and curated from the AWS-Samples repository located at https://github.com/aws-samples/amazon-nova-samples/tree/main/multimodal-generation/image-generation/javascript to specifically focus on the arcticle.

## Setup - Permissions and Model Entitlement

### Prerequisites

- Your AWS account has been allow-listed for access to the model.
- You have installed the AWS CLI.
- You have configured the AWS CLI **default profile** to use the credentials for your allow-listed account

### One-time setup

The following steps only need to be performed once during your initial setup.

#### Add necessary AWS permissions to your user profile

Using Nova Canvas requires that you have permissions allowing access to the following AWS Actions:

- "bedrock:InvokeModel"

The required permissions are listed below. If the user you've set as your AWS CLI default already has these permissions, there is no need to take any action. Otherwise, attach the following premissions policy to that user in the AWS console. (This guide assumes you know how to appy permissions policies through the console.)

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "NovaCanvasUserPermissions",
            "Effect": "Allow",
            "Action": ["bedrock:InvokeModel", "bedrock:PutFoundationModelEntitlement"],
            "Resource": ["arn:aws:bedrock:*::foundation-model/*"]
        }
    ]
}
```

After applying the policy, it may take a couple minutes for the policy to take effect. If you receive a permissions error when running the notebooks/scripts, wait a couple minutes and try again.

#### Enable the model on Amazon Bedrock

Best way to do this is via the AWS Console.

Make sure you have the model enabled in your account for amazon.nova-reel-v1:0

Optionally, you can use the python script in this repository entitlement.py

Run the following cell to enable access to the Nova Canvas model in your account.

```bash
python entitlement.py us-east-1 amazon.nova-reel-v1:0
```

## Setup - Javascript

To run the Javascript scripts, you'll first need to install the required packages by running the following command:

```bash
npm install
```

You will then be able to run the scripts as follows:

```bash
node GenerateImage-COMPLETED.js
```


# Next Steps

Look at AWS-Samples repository for more examples on how to use Amazon Nova Canvas.

https://github.com/aws-samples/amazon-nova-samples/tree/main/multimodal-generation/image-generation/javascript

Explore the Amazon Nova Reel model via the examples

https://github.com/aws-samples/amazon-nova-samples/tree/main/multimodal-generation/video-generation/javascript

