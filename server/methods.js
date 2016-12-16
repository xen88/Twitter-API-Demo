import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

    var Future = Npm.require('fibers/future');

    Meteor.methods({

        getTweets: function(query) {
            //Check query type as String else return
            check(query, String)

            // Create future instance.
            var future = new Future();

            // Initiate Twit instance ( https://github.com/ttezel/twit )
            const Twitter = new Twit({
                consumer_key: Meteor.settings.private.twitter.consumerKey,
                consumer_secret: Meteor.settings.private.twitter.consumerSecret,
                access_token: Meteor.settings.private.twitter.accessToken,
                access_token_secret: Meteor.settings.private.twitter.accessTokenSecret
            });

            // Make API call with query passed to method from client
            // limit query to 20 tweets
            Twitter.get('search/tweets', {
                q: query,
                count: 20
            }, function(err, data, response) {

                if (err) {
                    future.return(err);
                } else {
                    future.return(data);
                }

            })

            return future.wait();
        }
    })
});
