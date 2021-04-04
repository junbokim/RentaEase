$( function() {
    $( "#datepicker" ).datepicker(
      { 
        dateFormat: 'dd/mm/yy',
        minDate: 0, maxDate: "+6M" 
      }
    );
  } 
);

$( function() {
    $( "#datepicker2" ).datepicker(
        {dateFormat: 'dd/mm/yy',minDate: 0, maxDate: "+6M"}
    );
  }
);