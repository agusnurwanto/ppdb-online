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

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

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

	}

	public function daftar_siswa_shortcode() { 
		$users = get_users( array( 'fields' => array( 'ID' ) ) );
    	$option_ppdb = get_option('ppdb_options');
		$body = '';
		foreach($users as $user_id){
	        $metas = get_user_meta ( $user_id->ID);
			// print_r($metas); die();
			$no_pendaftaran = '';
		    if(!empty($option_ppdb['no_pendaftaran']) && !empty($metas[$option_ppdb['no_pendaftaran']])){
		        $no_pendaftaran = $metas[$option_ppdb['no_pendaftaran']][0];
		    }
		    $asal_sekolah = '';
		    if(!empty($option_ppdb['asal_sekolah']) && !empty($metas[$option_ppdb['asal_sekolah']])){
		        $asal_sekolah = $metas[$option_ppdb['asal_sekolah']][0];
		    }
	        $body.='
	        	<tr>
	        		<td>'.$no_pendaftaran.'</td>
	        		<td style="text-align: left;">'.$metas['nickname'][0].'</td>
	        		<td style="text-align: left;">'.$asal_sekolah.'</td>
	        	</tr>
	        ';
	    }
		$return = '
		<table>
			<thead>
				<tr>
					<th style="width: 150px;">No Pendaftaran</th>
					<th>Nama</th>
					<th style="width: 60%;">Asal Sekolah</th>
				</tr>
			</thead>
			<tbody>
				'.$body.'
			</tbody>
		</table
		'; 
		return $return;
	} 

	public function bukti_pendaftaran() {
		$ret = plugin_dir_path( dirname( __FILE__ ) ) .'public/partials/bukti-pendaftaran.php';
		require_once $ret;
	}

	function menu_bukti_pendaftaran( $args ) {
		$option_ppdb = get_option('ppdb_options');
		$url_bukti_pendaftaran = 'Halaman bukti pendaftaran belum di setting. Harap hubungi administrator!';
		if(!empty($option_ppdb['bukti_pendaftaran'])){
			$url_bukti_pendaftaran = '
			<div style="text-align: center; padding: 10px;">
				<a href="'.esc_url( get_page_link( $option_ppdb['bukti_pendaftaran'] ) ).'?user_id='.um_user( 'ID' ).'" target="_blank">
					<button class="button button-primary">Cetak Bukti Pendaftaran</button>
				</a>
			</div>
			';
		}
		echo $url_bukti_pendaftaran;
	}

}
