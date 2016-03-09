(window.OctoBoot_plugins = window.OctoBoot_plugins || {}).comments = function() {
    var template = $(this).children('.comment')
    var wrapper = $(this).children('.comments_wrapper')
    var form = $(this).find('form')
    var id = $(this).attr('id')

    wrapper.html('')

    $.get('http://octoboot.soizen.ovh/comments/' + id, function(data) {
        if (data) {
            template.parent().find('.header').show()

            data = JSON.parse(data)
            data.forEach(function(comment) {
                var com = template.clone()
                com.find('.author').html(comment.name)
                com.find('.date').html(new Date(comment.time).toLocaleString())
                com.find('.rating span').html(comment.like + ' Likes')
                com.find('.text').html(comment.message)
                com.find('.like').click(function() {
                    $.get('http://octoboot.soizen.ovh/comments/' + id + '/' + comment.time + '/like', function() {
                        com.find('.rating span').html((comment.like + 1) + ' Likes')
                    })
                })
                com.css('display', 'block')

                // add a remove to allow admin to remove comment
                if (window.top.location.host === 'octoboot.soizen.ovh') {
                    com.append('<i class="remove icon" style="position:absolute;top:0;right:0;cursor:pointer"></i>')
                    com.find('i.remove').click(function() {
                        $.get('http://octoboot.soizen.ovh/comments/' + id + '/' + comment.time + '/delete', function() {
                            com.remove()
                        })
                    })
                }

                wrapper.append(com)
            })
        }
    })
}

$(document).ready(function() {
    $('.comments').each(OctoBoot_plugins.comments)
    $('.comments .submit').click(function() {
        $(this).parent().submit()
    })
})