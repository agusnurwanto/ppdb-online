<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       maremjaya.com
 * @since      1.0.0
 *
 * @package    Ppdb_Online
 * @subpackage Ppdb_Online/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Ppdb_Online
 * @subpackage Ppdb_Online/admin
 * @author     Agus Nurwanto <agusnurwantomuslim@gmail.com>
 */
class Ppdb_Online_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Ppdb_Online_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Ppdb_Online_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/ppdb-online-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Ppdb_Online_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Ppdb_Online_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/ppdb-online-admin.js', array( 'jquery' ), $this->version, false );

	}

	function admin_menu_pbdb() {
	    add_menu_page(
	        __( 'PPDB Online', 'textdomain' ),
	        'PPDB Online',
	        'manage_options', // https://wordpress.org/plugins/members/ => untuk membuat role dan capability
	        'setting_ppdb', //slug
	        array($this, 'setting_ppdb_page'), // nama fungsi
	        'dashicons-media-spreadsheet', // https://developer.wordpress.org/resource/dashicons/ atau link ke icon
	        6
	    );

	    // https://developer.wordpress.org/reference/functions/add_submenu_page/
	    add_submenu_page(
	        'setting_ppdb',
	        __( 'Detail', 'textdomain' ),
	        __( 'Detail', 'textdomain' ),
	        'manage_options',
	        'tentang_ppdb',
	        array($this, 'tentang_ppdb_page')
	    );
	}

	function setting_ppdb_page(){
		$path = plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/ppdb-online-admin-display.php';
		require_once $path;
	}

	function tentang_ppdb_page(){
		$path = plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/tentang-ppdb.php';
		require_once $path;
	}

	function after_register_siswa($user_id){
		global $wpdb;
    	$id_ppdb = date('Y');
    	$option_ppdb = get_option('ppdb_options');
    	if(!empty($option_ppdb['id_ppdb'])){
    		$id_ppdb = $option_ppdb['id_ppdb'];
    	}
	    $query = $wpdb->prepare( 
	        "SELECT max( cast( meta_value as UNSIGNED ) ) FROM {$wpdb->usermeta} WHERE meta_key='no_pendaftaran' and meta_value like '".$id_ppdb."%'"
	    );
    	$max_no = $wpdb->get_var( $query );
    	if(empty($max_no)){
    		// $max_no = ($id_ppdb.date('md'))*10000;
    		$max_no = ($id_ppdb)*10000;
    	}
    	update_usermeta($user_id, 'no_pendaftaran', $max_no+1);
    	return $user_id;
	}
}
