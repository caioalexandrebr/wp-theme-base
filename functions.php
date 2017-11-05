<?php
    require_once "modules/is-debug.php";

    // Post types
    require_once "posttypes.php";

    // Removendo Barra Administrativa no WordPress
    function my_function_admin_bar(){
        return false;
    }
    add_filter( 'show_admin_bar' , 'my_function_admin_bar');
?>