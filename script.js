<script>
        $(function() {
            $( "#imageListId" ).sortable({
            update: function(event, ui) {
                getIdsOfImages();
            }//end update         
            })
        });
    </script>
