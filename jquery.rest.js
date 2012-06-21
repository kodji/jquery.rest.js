/*
 * File: jquery.rest.js
 * небольшая обертка для jQuery, добавляющая методы put и delete
 */

(function(jQuery) {
 
    function put(options)
    {
        options = jQuery.extend(options, {type: "PUT"});
        return jQuery.ajax(options);
    }
   
    function del(options)
    {
        options = jQuery.extend(options, {type: "DELETE"});
        return jQuery.ajax(options);
    }
   
    $.extend({
        'put': put,
        'delete': del
    });
   
 })(jQuery);