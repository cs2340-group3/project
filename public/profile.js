$(document).ready(function() {
    
    $.fn.editable.defaults.mode = 'popup';     
    
    $('#username').editable({
        type: 'select',
        title: 'Select status',
        placement: 'right',
        value: 2,
        source: [
            {value: 1, text: 'status 1'},
            {value: 2, text: 'status 2'},
            {value: 3, text: 'status 3'}
        ]
       
    });
});
