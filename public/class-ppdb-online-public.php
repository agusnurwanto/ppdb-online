<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       maremjaya.com
 * @since      1.0.0
 *
 * @package    Ppdb_Online
 * @subpackage Ppdb_Online/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Ppdb_Online
 * @subpackage Ppdb_Online/public
 * @author     Agus Nurwanto <agusnurwantomuslim@gmail.com>
 */
class Ppdb_Online_Public {

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

	private $functions;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name, $version, $functions) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		$this->functions = $functions;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
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

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/ppdb-online-public.css', array(), $this->version, 'all' );
		wp_enqueue_style($this->plugin_name . 'bootstrap', plugin_dir_url(__FILE__) . 'public/css/bootstrap.min.css', array(), $this->version, 'all');
		wp_enqueue_style($this->plugin_name . 'datatables', plugin_dir_url(__FILE__) . 'css/jquery.dataTables.min.css', array(), $this->version, 'all');

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
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

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/ppdb-online-public.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script($this->plugin_name . 'bootstrap', plugin_dir_url(__FILE__) . 'js/bootstrap.bundle.min.js', array('jquery'), $this->version, false);
		wp_enqueue_script($this->plugin_name . 'datatables', plugin_dir_url(__FILE__) . 'js/jquery.dataTables.min.js', array('jquery'), $this->version, false);

	}

	public function bukti_pendaftaran() {
		$ret = plugin_dir_path( dirname( __FILE__ ) ) .'public/partials/bukti-pendaftaran.php';
		require_once $ret;
	}

	public function beranda_ppdb() {
		$ret = plugin_dir_path( dirname( __FILE__ ) ) .'public/partials/beranda-ppdb.php';
		require_once $ret;
	}

	public function customer_service_ppdb() {
		$ret = plugin_dir_path( dirname( __FILE__ ) ) .'public/partials/customer-service-ppdb.php';
		require_once $ret;
	}

	public function daftar_siswa_shortcode() { 
		$ret = plugin_dir_path( dirname( __FILE__ ) ) .'public/partials/daftar-siswa.php';
		require_once $ret;
	}

	function get_um_file( $user_id, $image_filename ) {
	  	$upload_dir = wp_upload_dir();
		$image_url = esc_url( $upload_dir['baseurl'] . '/ultimatemember/' . $user_id . '/' . $image_filename );
		return $image_url;
	}

	function menu_bukti_pendaftaran( $args ) {
		$url_bukti_pendaftaran = 'Halaman bukti pendaftaran belum di setting. Harap hubungi administrator!';
		$bukti_pendaftaran = $this->functions->generatePage(array(
			'nama_page' => 'Bukti Pendaftaran Siswa Baru',
			'content' => '[bukti-pendaftaran]',
			'show_header' => 1,
			'post_status' => 'private'
		));
		$url_bukti_pendaftaran = '
		<div style="text-align: center; padding: 10px;">
			<a href="'.$this->functions->add_param_get($bukti_pendaftaran['url'], '&user_id='.get_current_user_id()).'" target="_blank">
				<button class="button button-primary">Cetak Bukti Pendaftaran</button>
			</a>
		</div>
		';
		echo $url_bukti_pendaftaran;
	}

}
