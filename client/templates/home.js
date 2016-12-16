Template.home.onCreated(() => {
  tweets = new ReactiveVar();
})
Template.home.helpers({
  ready: function() {
    return true
  },
  tweets: function() {
    return tweets.get()
  }
});
Template.home.events({
  'submit form': function (e) {
    e.preventDefault();
    let query = $('input#query').val();
    Meteor.call('getTweets', query, (err,res) => {
      console.log(res)
      tweets.set(res.statuses);
    })

  }
})
