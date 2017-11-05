<?php

    // Registro Post Type
    function custom_post_type() {
        
        $labels = array(
            'name'                => _x( 'post type', 'Post Type General Name', 'text_domain' ),
            'singular_name'       => _x( 'Post Type', 'Post Type Singular Name', 'text_domain' ),
            'menu_name'           => __( 'Post Types', 'text_domain' ),
            'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
            'all_items'           => __( 'Todos os posts', 'text_domain' ),
            'view_item'           => __( 'View Item', 'text_domain' ),
            'add_new_item'        => __( 'Adicionar novo post', 'text_domain' ),
            'add_new'             => __( 'Adicionar novo', 'text_domain' ),
            'edit_item'           => __( 'Editar post', 'text_domain' ),
            'update_item'         => __( 'Atualizar post', 'text_domain' ),
            'search_items'        => __( 'Procurar post', 'text_domain' ),
            'not_found'           => __( 'Not found', 'text_domain' ),
            'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
        );
        $args = array(
            'label'               => __( 'Post Type', 'text_domain' ),
            'description'         => __( 'Post Type Description', 'text_domain' ),
            'labels'              => $labels,
            'supports'            => array( ),
            'taxonomies'          => array( 'category', 'post_tag' ),
            'hierarchical'        => false,
            'public'              => true,
            'show_ui'             => true,
            'show_in_menu'        => true,
            'show_in_nav_menus'   => true,
            'show_in_admin_bar'   => true,
            'menu_position'       => 5,
            //'menu_icon'           => 'dashicons-cart',
            'can_export'          => true,
            'has_archive'         => true,
            'exclude_from_search' => false,
            'publicly_queryable'  => true,
            'capability_type'     => 'page',
        );
        register_post_type( 'Post Type', $args );
        
    }
    
   // Inicializa o Post Type
   add_action( 'init', 'custom_post_type', 0 );

?>