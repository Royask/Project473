var SERVER_URL = 'http://localhost:3002';

var saveComment = function(data) {

    $.post(SERVER_URL + '/' + 'commentsArray', data);
    return data;
};


function getIDComments() {
    var id = $.cookie("id");
    console.log(id);

    $.get(SERVER_URL + '/posts/' + id + '/commentsArray').then(function(response) {
        $('#comments-container').comments({
            profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/user_profiles/user-icon.png',
            currentUserId: 1,
            roundProfilePictures: true,
            textareaRows: 1,
            enableAttachments: false,
            enableHashtags: true,
            enablePinging: true,
            enableEditing: false,
            enableReplying: false,
            enableUpvoting: false,
            getComments: function(success, error) {
                setTimeout(function() {
                    success(response);
                }, 500);
            },
            postComment: function(data, success, error) {
                setTimeout(function() {
                    data.postId = $.cookie("id");
                    console.log('posting');
                    success(saveComment(data));
                }, 500);
            },
            putComment: function(data, success, error) {
                setTimeout(function() {
                    success(saveComment(data));
                    console.log(data);
                }, 500);
            },
            deleteComment: function(data, success, error) {
                setTimeout(function() {
                    success();
                }, 500);
            },
            upvoteComment: function(data, success, error) {
                setTimeout(function() {
                    success(data);
                }, 500);
            },
            uploadAttachments: function(dataArray, success, error) {
                setTimeout(function() {
                    success(dataArray);
                }, 500);
            },
        });
    });
};

function bossName() {
    var id = $.cookie("id");
    $.get(SERVER_URL + '/posts/' + id, function(response) {
        var first = response.firstName;
        var last = response.lastName;
        first = first.charAt(0).toUpperCase() + first.substr(1).toLowerCase();
        last = last.charAt(0).toUpperCase() + last.substr(1).toLowerCase();
        $('#bossname').text('Snarking On ' + first + ' ' + last);
    });
};

function changeBoss(valueId) {
    $.cookie("id", valueId);
    console.log($.cookie("id"));
    getIDComments();
    bossName();
};


$(function() {
    getIDComments();
    bossName();

    var bossArray = [];

    $.get(SERVER_URL + '/posts/', function(response) {
        $.each(response, function(key, value) {
            var id = this.id;
            var first = this.firstName;
            var last = this.lastName;
            first = first.charAt(0).toUpperCase() + first.substr(1).toLowerCase();
            last = last.charAt(0).toUpperCase() + last.substr(1).toLowerCase();
            bossArray.push({
                value: first + ' ' + last,
                id: id
            });
        });
    });

    console.log(bossArray);
    $("#tags").autocomplete({
        source: bossArray,
        select: function(event, ui) {
            changeBoss(ui.item.id);
        }
    });
});
