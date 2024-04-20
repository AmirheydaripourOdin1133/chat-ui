$(function () {
// Timer Step 2 Signup
function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
	
			if (seconds < "10") { seconds = "0" + seconds; }
			$("#seconds").html("<span>00 : </span>" + seconds);		

	}

	setInterval(function() { makeTimer(); }, 100);


    /**
     * Some examples of how to use features.
     *
     **/

    var ChatosExamle = {
        Message: {
            add: function (message, type) {
                var chat_body = $('.layout .content .chat .chat-body');
                if (chat_body.length > 0) {

                    type = type ? type : '';
                    message = message ? message : 'پیام شما به ما ارسال شد.';

                    $('.layout .content .chat .chat-body .messages').append('<div class="message-item ' + type + '"><div class="message-content">' + message + '</div><div class="message-action">بعد ظهر 14:25 ' + (type ? '<i class="ti-check"></i>' : '') + '</div></div>');

                    chat_body.scrollTop(chat_body.get(0).scrollHeight, -1).niceScroll({
                        cursorcolor: 'rgba(66, 66, 66, 0.20)',
                        cursorwidth: "4px",
                        cursorborder: '0px'
                    });
                }
            }
        }
    };

    setTimeout(function () {
        ChatosExamle.Message.add();
    }, 1000);

    setTimeout(function () {
        // $('#disconnected').modal('show');
        $('#call').modal('show');
    }, 2000);

    $(document).on('submit', '.layout .content .chat .chat-footer form', function (e) {
        e.preventDefault();

        var input = $(this).find('input[type=text]');
        var message = input.val();

        message = $.trim(message);

        if (message) {
            ChatosExamle.Message.add(message, 'outgoing-message');
            input.val('');
        } else {
            input.focus();
        }
    });

    $(document).on('click', '.layout .content .sidebar-group .sidebar .list-group-item', function () {
        if (jQuery.browser.mobile) {
            $(this).closest('.sidebar-group').removeClass('mobile-open');
        }
    });

});