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

	public function bukti_pendaftaran() {
		$ret = plugin_dir_path( dirname( __FILE__ ) ) .'public/partials/bukti-pendaftaran.php';
		require_once $ret;
	}

	public function daftar_siswa_shortcode() { 
		$default_role = get_option('default_role');
		$users = get_users( array( 
			'fields' => array( 'ID' ),
			'role'	=> $default_role,
			'meta_key'	=>  'no_pendaftaran',
			'orderby'	=>  'meta_value_num',
			'order'	=>  'ASC'
		) );
    	$option_ppdb = array(
		    'no_pendaftaran' => get_option('_crb_no_pendaftaran_meta_key'),
		    'tempat_lahir' => get_option('_crb_tempat_lahir_meta_key'),
		    'tanggal_lahir' => get_option('_crb_tanggal_lahir_meta_key'),
		    'jenis_kelamin' => get_option('_crb_jenis_kelamin_meta_key'),
		    'asal_sekolah' => get_option('_crb_asal_sekolah_meta_key'),
		    'nisn' => get_option('_crb_nisn_meta_key'),
		    'alamat' => get_option('_crb_alamat_meta_key'),
		    'no_tlp' => get_option('_crb_no_tlp_meta_key')
		);
    	$current_user = wp_get_current_user();
		$body = '';
		foreach($users as $user_id){
	        $metas = get_user_meta ( $user_id->ID);
			// print_r($metas); die();
			$no_pendaftaran = '';
		    if(!empty($option_ppdb['no_pendaftaran']) && !empty($metas[$option_ppdb['no_pendaftaran']])){
		        $no_pendaftaran = $metas[$option_ppdb['no_pendaftaran']][0];
		    }
		    $tempat_lahir = '';
		    if(!empty($option_ppdb['tempat_lahir']) && !empty($metas[$option_ppdb['tempat_lahir']])){
		        $tempat_lahir = $metas[$option_ppdb['tempat_lahir']][0];
		    }
		    $tanggal_lahir = '';
		    if(!empty($option_ppdb['tanggal_lahir']) && !empty($metas[$option_ppdb['tanggal_lahir']])){
		        $tanggal_lahir = $metas[$option_ppdb['tanggal_lahir']][0];
		    }
		    $jenis_kelamin = '';
		    if(!empty($option_ppdb['jenis_kelamin']) && !empty($metas[$option_ppdb['jenis_kelamin']])){
		        $jenis_kelamin = unserialize($metas[$option_ppdb['jenis_kelamin']][0]);
		        $jenis_kelamin = $jenis_kelamin[0];
		    }
		    $asal_sekolah = '';
		    if(!empty($option_ppdb['asal_sekolah']) && !empty($metas[$option_ppdb['asal_sekolah']])){
		        $asal_sekolah = $metas[$option_ppdb['asal_sekolah']][0];
		    }
		    $alamat_sekolah = '';
		    if(!empty($metas['alamat-asal-sekolah'])){
		        $alamat_sekolah = $metas['alamat-asal-sekolah'][0];
		    }
		    $nisn = '';
		    if(!empty($option_ppdb['nisn']) && !empty($metas[$option_ppdb['nisn']])){
		        $nisn = $metas[$option_ppdb['nisn']][0];
		    }
		    $alamat = '';
		    if(!empty($option_ppdb['alamat']) && !empty($metas[$option_ppdb['alamat']])){
		        $alamat = $metas[$option_ppdb['alamat']][0];
		    }
		    $no_tlp = '';
		    if(!empty($option_ppdb['no_tlp']) && !empty($metas[$option_ppdb['no_tlp']])){
		        $no_tlp = $metas[$option_ppdb['no_tlp']][0];
		    }
		    $agama = '';
		    if(!empty($metas['agama'])){
		        $agama = $metas['agama'][0];
		    }
		    $nama_ayah = '';
		    if(!empty($metas['nama_ayah'])){
		        $nama_ayah = $metas['nama_ayah'][0];
		    }
		    $pekerjaan_ayah = '';
		    if(!empty($metas['pekerjaan_ayah'])){
		        $pekerjaan_ayah = $metas['pekerjaan_ayah'][0];
		    }
		    $penghasilan_ayah = '';
		    if(!empty($metas['penghasilan_ayah'])){
		        $penghasilan_ayah = unserialize($metas['penghasilan_ayah'][0]);
		        $penghasilan_ayah = $penghasilan_ayah[0];
		    }
		    $nama_ibu = '';
		    if(!empty($metas['nama_ibu'])){
		        $nama_ibu = $metas['nama_ibu'][0];
		    }
		    $pekerjaan_ibu = '';
		    if(!empty($metas['pekerjaan_ibu'])){
		        $pekerjaan_ibu = $metas['pekerjaan_ibu'][0];
		    }
		    $penghasilan_ibu = '';
		    if(!empty($metas['penghasilan_ibu'])){
		        $penghasilan_ibu = unserialize($metas['penghasilan_ibu'][0]);
		        $penghasilan_ibu = $penghasilan_ibu[0];
		    }
		    $nama_wali = '';
		    if(!empty($metas['nama_wali'])){
		        $nama_wali = $metas['nama_wali'][0];
		    }
		    $pekerjaan_wali = '';
		    if(!empty($metas['pekerjaan_wali'])){
		        $pekerjaan_wali = $metas['pekerjaan_wali'][0];
		    }
		    $penghasilan_wali = '';
		    if(!empty($metas['penghasilan_wali'])){
		        $penghasilan_wali = unserialize($metas['penghasilan_wali'][0]);
		        $penghasilan_wali = $penghasilan_wali[0];
		    }
		    $sertifikat = '';
		    if(!empty($metas['sertifikat'])){
		        $sertifikat_url = $this->get_um_file($user_id->ID, $metas['sertifikat'][0]);
		        $sertifikat = '<a href="'.$sertifikat_url.'" target="_blank"><img src="'.$sertifikat_url.'" style="min-width: 300px;"></a>';
		    }
			$data_admin = '';
			if (user_can( $current_user, 'administrator' )) {
				$data_admin = '
					<td style="text-align: left;">'.$alamat_sekolah.'</td>
					<td style="text-align: left;">'.$tempat_lahir.', '.$tanggal_lahir.'</td>
					<td style="text-align: center;">'.$jenis_kelamin.'</td>
					<td style="text-align: left;">'.$alamat.'</td>
					<td style="text-align: center;">'.$no_tlp.'</td>
					<td style="text-align: center;">'.$agama.'</td>
					<td style="text-align: left;">'.$nama_ayah.'</td>
					<td style="text-align: left;">'.$pekerjaan_ayah.'</td>
					<td style="text-align: left;">'.$penghasilan_ayah.'</td>
					<td style="text-align: left;">'.$nama_ibu.'</td>
					<td style="text-align: left;">'.$pekerjaan_ibu.'</td>
					<td style="text-align: left;">'.$penghasilan_ibu.'</td>
					<td style="text-align: left;">'.$nama_wali.'</td>
					<td style="text-align: left;">'.$pekerjaan_wali.'</td>
					<td style="text-align: left;">'.$penghasilan_wali.'</td>
					<td style="text-align: left;">'.$sertifikat.'</td>
				';
			}
	        $body.='
	        	<tr>
	        		<td>'.$no_pendaftaran.'</td>
	        		<td style="text-align: left;">'.$metas['first_name'][0].'</td>
	        		<td style="text-align: left;">'.$asal_sekolah.'</td>
					<td style="text-align: center;">'.$nisn.'</td>
	        		'.$data_admin.'
	        	</tr>
	        ';
	    }
	    $return = '';
	    if(empty($_GET) || empty($_GET['download'])){
	    	$return .= '<a target="_blank" href="'.admin_url('admin-ajax.php').'?action=data_pendaftar&download=1"><button class="button button-primary" style="margin-bottom:10px;">Excel</button></a>';	
	    }
		$th_admin = '';
		if (user_can( $current_user, 'administrator' )) {
			$th_admin = '
				<th>Alamat Sekolah</th>
				<th>Tempat Tanggal Lahir</th>
				<th>Jenis Kelamin</th>
				<th>Alamat Rumah</th>
				<th>No. Tlp.</th>
				<th>Agama</th>
				<th>Ayah Kandung</th>
				<th>Pekerjaan Ayah</th>
				<th>Penghasilan Ayah</th>
				<th>Ibu Kandung</th>
				<th>Pekerjaan Ibu</th>
				<th>Penghasilan Ibu</th>
				<th>Wali</th>
				<th>Pekerjaan Wali</th>
				<th>Penghasilan Wali</th>
				<th>Sertifikat</th>
			';
		}
		$return .= '
		<table>
			<thead>
				<tr>
					<th style="width: 150px;">No Pendaftaran</th>
					<th>Nama</th>
					<th style="width: 60%;">Asal Sekolah</th>
					<th>NISN</th>
					'.$th_admin.'
				</tr>
			</thead>
			<tbody>
				'.$body.'
			</tbody>
		</table>
		';
		if(!empty($_GET) && !empty($_GET['download'])){
			$filename = "data_pendaftar_".date("Y-m-d_H-i",time());
		    header("Content-type: application/octet-stream");
			header( "Content-disposition: filename=".$filename.".xls");
			header("Pragma: no-cache");
			header("Expires: 0");
		    die($return);
		}
		return $return;
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
