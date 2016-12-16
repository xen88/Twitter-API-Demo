# Twitter API Demo
### Twitter API search tag demo

A basic example app created using Meteor / NodeJs and the Twitter API.

To run the app:

1) Install Meteor ( https://www.meteor.com/install )

2) Clone this repo

3) Create a settings.json file in the top level directory and enter your Twitter API settings. ( https://apps.twitter.com )
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

4) Run the app with: ```meteor --settings settings.json```
