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

use Carbon_Fields\Container;
use Carbon_Fields\Field;

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

	private $functions;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name, $version, $functions) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		$this->functions = $functions;

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
		wp_enqueue_style($this->plugin_name . 'bootstrap', plugin_dir_url(__FILE__) . 'css/bootstrap.min.css', array(), $this->version, 'all');
		wp_enqueue_style($this->plugin_name . 'datatables', plugin_dir_url(__FILE__) . 'css/jquery.dataTables.min.css', array(), $this->version, 'all');

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
		wp_enqueue_script($this->plugin_name . 'bootstrap', plugin_dir_url(__FILE__) . 'js/bootstrap.bundle.min.js', array('jquery'), $this->version, false);
		wp_enqueue_script($this->plugin_name . 'datatables', plugin_dir_url(__FILE__) . 'js/jquery.dataTables.min.js', array('jquery'), $this->version, false);
		wp_localize_script($this->plugin_name, 'ppdb', array(
			'api_key' => get_option(PPDB_APIKEY)
		));

	}

	public function crb_attach_ppdb_options(){
		global $wpdb;

		$notif_role = '';
		$option_ppdb = get_option('ppdb_options');
		if(empty($option_ppdb)){
	        $option_ppdb = array(
	            'bukti_pendaftaran' => 0
	        );
	    }
	    if(empty($option_ppdb['id_ppdb'])){
	        $option_ppdb['id_ppdb'] = '';
	    }

	    $id_ppdb = get_option('_crb_id_ppdb');
	    if(!empty($id_ppdb)){
	    	$roles = wp_roles()->roles;
	        // print_r($roles); die();

	    	$id_ppdb_enc = 'calon_siswa_baru_'.base64_encode($id_ppdb);
	    	$cek_role = false;
	        foreach ($roles as $role => $v) {
	            if ($role == $id_ppdb_enc) {
	                $cek_role = $v['name'];
	            }
	        }
	        // print_r($cek_role); die();
	        if(false == $cek_role){
	        	$cek_role = 'Calon Siswa Baru '.$id_ppdb;
	            $result = add_role( 
	                $id_ppdb_enc, 
	                $cek_role, 
	                array( 
	                    'read' => true,
	                ) 
	            );
	            if ( null !== $result ) {
	                $notif_role .= "Success: {$result->name} user role created.";
	                $roles = wp_roles()->roles;
	            }else {
	                $notif_role .= 'Failure: user role already exists.';
	                $cek_role = false;
	            }
	        }

	        $default_role = $roles[get_option('default_role')]['name'];
	        if($default_role != $cek_role){
	        	update_option('default_role', $id_ppdb_enc);
	        	$default_role = $roles[get_option('default_role')]['name'];
		        if($default_role != $cek_role){
		            $notif_role .= ' <span style="color: red">Default role pendaftaran tidak sama dengan ID nomor urut pendaftaran. ('.$default_role.' != '.$cek_role.')<span>';
		        }
	        }
	    }

	    if(empty($option_ppdb['no_pendaftaran_otomatis'])){
	        $option_ppdb['no_pendaftaran_otomatis'] = false;
	    }else{
	        $option_ppdb['no_pendaftaran_otomatis'] = 'yes';
	    }
	    if(empty($option_ppdb['no_awal_pendaftar'])){
	        $option_ppdb['no_awal_pendaftar'] = 1;
	    }
		if(empty($option_ppdb['no_pendaftaran'])){
			$option_ppdb['no_pendaftaran'] = '';
		}
		if(empty($option_ppdb['tempat_lahir'])){
			$option_ppdb['tempat_lahir'] = 'tempat-lahir';
		}
		if(empty($option_ppdb['tanggal_lahir'])){
			$option_ppdb['tanggal_lahir'] = 'tanggal-lahir';
		}
		if(empty($option_ppdb['jenis_kelamin'])){
			$option_ppdb['jenis_kelamin'] = 'jenis-kelamin';
		}
		if(empty($option_ppdb['asal_sekolah'])){
			$option_ppdb['asal_sekolah'] = 'sekolah_asal';
		}
		if(empty($option_ppdb['nisn'])){
			$option_ppdb['nisn'] = 'nisn';
		}
		if(empty($option_ppdb['alamat'])){
			$option_ppdb['alamat'] = 'alamat-calon-siswa';
		}
		if(empty($option_ppdb['no_tlp'])){
			$option_ppdb['no_tlp'] = 'phone_number';
		}
	    $option_ppdb['no_pendaftaran'] = 'no_pendaftaran';

	    $beranda = $this->functions->generatePage(array(
			'nama_page' => 'Halaman Muka PPDB',
			'content' => '[beranda-ppdb]',
			'show_header' => 1,
			'no_key' => 1,
			'post_status' => 'publish'
		));
	    $hubungi_admin = $this->functions->generatePage(array(
			'nama_page' => 'Hubungi Admin PPDB',
			'content' => '[customer-service-ppdb]',
			'show_header' => 1,
			'no_key' => 1,
			'post_status' => 'publish'
		));
	    $bukti_pendaftaran = $this->functions->generatePage(array(
			'nama_page' => 'Bukti Pendaftaran Siswa Baru',
			'content' => '[bukti-pendaftaran]',
			'show_header' => 1,
			'no_key' => 1,
			'post_status' => 'private'
		));
	    $daftar_siswa = $this->functions->generatePage(array(
			'nama_page' => 'Daftar Pendaftaran Siswa Baru',
			'content' => '[daftar-siswa]',
			'show_header' => 1,
			'no_key' => 1,
			'post_status' => 'private'
		));
	    $all_field = array(
	    	Field::make('html', 'crb_shortcode_ppdb', 'Shortcode PPDB')
			->set_html('
				<h3>Halaman Terkait</h3>
				<ul>
					<li><a href="'.$beranda['url'].'" target="_blank">'.$beranda['title'].'</a></li>
					<li><a href="'. $hubungi_admin['url'].'" target="_blank">'. $hubungi_admin['title'].'</a></li>
					<li><a href="'.$bukti_pendaftaran['url'].'" target="_blank">'.$bukti_pendaftaran['title'].'</a></li>
					<li><a href="'.$daftar_siswa['url'].'" target="_blank">'.$daftar_siswa['title'].'</a></li>
				</ul>
			'),
	   		Field::make('text', 'crb_apikey_ppdb', 'API KEY')
				->set_default_value($this->functions->generateRandomString())
				->set_help_text('Wajib diisi. API KEY digunakan untuk integrasi data.')
		);
	    if(!empty($notif_role)){
	    	$all_field[] = Field::make('html', 'crb_ppdb_notif_role_hide_sidebar')
				->set_html($notif_role);
	    }
	    $all_field[] = Field::make('text', 'crb_id_ppdb', 'ID nomor urut pendaftaran')
			->set_default_value($option_ppdb['id_ppdb'])
			->set_help_text('ID unik untuk nomor urut pendaftaran siswa baru. Contoh 2024/GEL/1, 2024/GEL/2 dst. (Tidak boleh menggunakan karakter underscore <b>_</b>)');
	    $all_field[] = Field::make('checkbox', 'crb_no_pendaftaran_otomatis', 'Nomor pendaftar otomatis')
			->set_default_value($option_ppdb['no_pendaftaran_otomatis'])
			->set_option_value( 'yes' )
			->set_help_text('Jika dichecklist maka nomor urut pendaftaran akan berformat (tahun,bulan,tanggal)');
	    $all_field[] = Field::make('text', 'crb_no_awal_pendaftar', 'Nomor awal pendaftar')
	    	->set_attribute( 'type', 'number' )
			->set_default_value($option_ppdb['no_awal_pendaftar'])
			->set_help_text('Nomor awal pendaftar defaultnya dimulai dari angka 1.');
	    $all_field[] = Field::make('text', 'crb_no_pendaftaran_meta_key', 'No Pendaftaran')
			->set_default_value($option_ppdb['no_pendaftaran'])
	    	->set_attribute( 'readOnly', 'true' )
			->set_help_text('Meta key yang digunakan di form pendaftaran ultimate member.');
	    $all_field[] = Field::make('text', 'crb_tempat_lahir_meta_key', 'Tempat Lahir')
			->set_default_value($option_ppdb['tempat_lahir'])
			->set_help_text('Meta key yang digunakan di form pendaftaran ultimate member.');
	    $all_field[] = Field::make('text', 'crb_tanggal_lahir_meta_key', 'Tanggal Lahir')
			->set_default_value($option_ppdb['tanggal_lahir'])
			->set_help_text('Meta key yang digunakan di form pendaftaran ultimate member.');
	    $all_field[] = Field::make('text', 'crb_jenis_kelamin_meta_key', 'Jenis Kelamin')
			->set_default_value($option_ppdb['jenis_kelamin'])
			->set_help_text('Meta key yang digunakan di form pendaftaran ultimate member.');
	    $all_field[] = Field::make('text', 'crb_asal_sekolah_meta_key', 'Asal Sekolah')
			->set_default_value($option_ppdb['asal_sekolah'])
			->set_help_text('Meta key yang digunakan di form pendaftaran ultimate member.');
	    $all_field[] = Field::make('text', 'crb_nisn_meta_key', 'NISN')
			->set_default_value($option_ppdb['nisn'])
			->set_help_text('Meta key yang digunakan di form pendaftaran ultimate member.');
	    $all_field[] = Field::make('text', 'crb_alamat_meta_key', 'Alamat')
			->set_default_value($option_ppdb['alamat'])
			->set_help_text('Meta key yang digunakan di form pendaftaran ultimate member.');
	    $all_field[] = Field::make('text', 'crb_no_tlp_meta_key', 'No. Tlp.')
			->set_default_value($option_ppdb['no_tlp'])
			->set_help_text('Meta key yang digunakan di form pendaftaran ultimate member.');

		$info_developer = '';
		if(get_option('_crb_credit_ppdb') == 1){
		    $all_field[] = Field::make('select', 'crb_credit_ppdb', 'Sembunyikan credit developer')
				->set_default_value('1')
			    ->add_options(array(
			    	'1' => 'Tampil',
			    	'2' => 'Sembunyikan informasi tentang developer'
			    ))
				->set_help_text('Untuk menyembunyikan informasi tentang pengembangan aplikasi ini di menu Dokumentasi.');
			$info_developer = '<li>Source code berasal dari repo <a href="https://github.com/agusnurwanto/ppdb-online" target="_blank">https://github.com/agusnurwanto/ppdb-online</a> atau bisa hubungi <a href="https://api.whatsapp.com/send?phone=6289629796473&text=Aplikasi%20PPDB-Online">Agus Nurwanto (0896-2979-6473)</a></li>';
		}

		$basic_options_container = Container::make('theme_options', __('PPDB Settings'))
			->set_page_menu_position(6)
			->set_icon('dashicons-media-spreadsheet')
			->add_fields($all_field);

		Container::make('theme_options', __('Beranda'))
			->set_page_parent($basic_options_container)
			->add_fields(array(
				Field::make( 'image', 'crb_ppdb_logo', 'Logo Beranda' )
    				->set_value_type( 'url' ),
				Field::make('text', 'crb_ppdb_no_wa_1', 'Nomor WA Admin 1')
	    			->set_attribute( 'type', 'number' ),
				Field::make('text', 'crb_ppdb_nama_wa_1', 'Nama WA Admin 1'),
				Field::make('text', 'crb_ppdb_pesan_wa_1', 'Generate pesan WA Admin 1')
					->set_default_value('assalamualaikum warahmatullahi wabarakatuh. Saya mau tanya tentang pendaftaran siswa baru.')
					->set_help_text('Template pesan yang akan ditampilkan saat user menekan tombol hubungi admin.'),
				Field::make('text', 'crb_ppdb_no_wa_2', 'Nomor WA Admin 2')
	    			->set_attribute( 'type', 'number' ),
				Field::make('text', 'crb_ppdb_nama_wa_2', 'Nama WA Admin 2'),
				Field::make('text', 'crb_ppdb_pesan_wa_2', 'Generate pesan WA Admin 2')
					->set_default_value('assalamualaikum warahmatullahi wabarakatuh. Saya mau tanya tentang pendaftaran siswa baru.')
					->set_help_text('Template pesan yang akan ditampilkan saat user menekan tombol hubungi admin.'),
		));

		Container::make('theme_options', __('Dokumentasi'))
			->set_page_parent($basic_options_container)
			->add_fields(array(
				Field::make('html', 'crb_ppdb_dokumentasi_hide_sidebar')
					->set_html('
						<style>
							.postbox-container { display: none; }
							#poststuff #post-body.columns-2 { margin: 0 !important; }
						</style>
						<h3>Membuat Tahun Ajaran Baru</h3>
						<ol>
							<li>
								Tambah tahun ajaran baru
								<ul>
									<li>PPDB Online > Pilih Tahun Ajaran (belum)</li>
								</ul>
							</li>
							<li>
								Membuat User Role baru misal "Calon Siswa Baru [tahun ajaran]". (Ganti tahun ajaran dengan tahun ajaran yang berlaku)
								<ul>
									<li>Ultimate Member > User Roles > Add New</li>
								</ul>
							</li>
							<li>
								Setting default user registration
								<ul>
									<li>Rubah settingan global wordpress di: Settings > General > New User Default Role</li>
									<li>Pastikan settingan user registration di plugin Ultimate Member juga sudah sesuai: Ultimate Member > Settings > Apperance > Registration Form > Registration Default Role</li>
								</ul>
							</li>
						</ol>
						<h3>Catatan</h3>
						<ul>
							<li>Proses penambahan fitur download all data user</li>
							<li>Proses penambahan fitur tambah id gelombang pendaftaran (merubah id nomor urut)</li>
							<li>Plugin ini masih dalam pengembangan</li>
							'.$info_developer.'
						</ul>
					')
			));
	}

	function after_register_siswa($user_id){
		global $wpdb;
    	$id_ppdb = date('Y');
    	$option_ppdb = get_option('ppdb_options');
    	if(!empty($option_ppdb['no_pendaftaran_otomatis'])){
			$id_ppdb = date('Ymd');
	    }else if(!empty($option_ppdb['id_ppdb'])){
    		$id_ppdb = $option_ppdb['id_ppdb'];
    	}
		
    	$zero = 0;
	    $query = $wpdb->prepare( 
	        "SELECT max( cast( meta_value as UNSIGNED ) ) FROM {$wpdb->usermeta} WHERE meta_key='no_pendaftaran' and meta_value like '".$id_ppdb."%'"
	    );
    	$max_no = $wpdb->get_var( $query );

    	if(empty($max_no)){
    		$max_no = $zero;
    	}else{
    	    $max_no = str_replace($id_ppdb, '', $max_no) * 1;
    	}

    	if($max_no < $option_ppdb['no_awal_pendaftar']){
    		$max_no = ($option_ppdb['no_awal_pendaftar'])-1;
    	}
    	
    	update_usermeta($user_id, 'no_pendaftaran', $id_ppdb.$this->CekNull($max_no+1, 4));
    	return $user_id;
	}
	
	public function CekNull($number, $length=2){
        $l = strlen($number);
        $ret = '';
        for($i=0; $i<$length; $i++){
            if($i+1 > $l){
                $ret .= '0';
            }
        }
        $ret .= $number;
        return $ret;
    }

    function um_add_default_field_to_form() {
	    // Nama form Ultimate Member yang akan diperiksa
	    $form_id = 'account'; // Atau 'profile', sesuai kebutuhan.

	    // Periksa apakah form sudah ada
	    if (um_form_exists($form_id)) {
	        // Ambil data form saat ini
	        $fields = UM()->form()->get_form_fields($form_id);

	        // Default field yang akan ditambahkan jika belum ada
	        $default_field = array(
	            'meta_key' => 'custom_field', // Ganti dengan meta_key yang Anda inginkan
	            'title'    => 'Custom Field', // Label untuk field
	            'type'     => 'text',         // Jenis field, bisa 'text', 'checkbox', dll.
	            'required' => 0,              // Set 1 jika wajib diisi
	        );

	        // Periksa apakah field sudah ada di form
	        $field_exists = false;

	        foreach ($fields as $field) {
	            if ($field['meta_key'] === $default_field['meta_key']) {
	                $field_exists = true;
	                break;
	            }
	        }

	        // Jika field belum ada, tambahkan ke form
	        if (!$field_exists) {
	            UM()->form()->save_form_fields(
	                $form_id,
	                array_merge($fields, array($default_field))
	            );

	            // Notifikasi berhasil
	            add_action('admin_notices', function () {
	                echo '<div class="notice notice-success is-dismissible">
	                    <p>Field default telah ditambahkan ke form Account/Profile.</p>
	                </div>';
	            });
	        }
	    }
	}
}
