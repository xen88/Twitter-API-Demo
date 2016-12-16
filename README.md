# Twitter API Demo
### Twitter API search tag demo

A basic example app created using Meteor / NodeJs and the Twitter API.
To run the app:

1) Create a settings.json file in the top level directory.
```
{
    "public"     : {

    },
    "private"    : {
      "twitter": {
        "consumerKey": "",
        "consumerSecret": "",
        "accessToken": "",
        "accessTokenSecret": ""
      }

    }
}
```
2) Run the app with: ```meteor --settings settings.json```
