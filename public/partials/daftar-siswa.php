<?php
if (!defined('WPINC')) {
    die;
}

if(!empty($_GET) && !empty($_GET['role'])){
	$default_role = $_GET['role'];
}else{
	$default_role = get_option('default_role');
}
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
			<td style="text-align: center;">'.$nisn.'</td>
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
    		'.$data_admin.'
    	</tr>
    ';
}
$return = '';
if(
	empty($_GET) 
	|| empty($_GET['download'])
){
	$roles = wp_roles()->roles;
    // print_r($roles); die();

	$role_siswa_baru = '<option value="">Pilih Jenis Data</option>';
    foreach ($roles as $role => $v) {
        if (strpos($role, 'calon_siswa_baru_') !== false) {
        	$selected = '';
        	if($role == $default_role){
        		$selected = 'selected';
        	}
            $role_siswa_baru .= '<option '.$selected.' value="'.$role.'">'.$v['name'].'</option>';
        }
    }
	$return .= '
		<h1 class="text-center">Daftar Pendaftar</h1>
		<div class="aksi-ppdb text-center" style="margin-bottom: 20px;">
			<label>Pilih Jenis Data</label> <select class="form-control" id="jenis_data_ppdb" onchange="filter_role();" style="max-width: 400px; display: inline-block;">'.$role_siswa_baru.'</select>
			<a target="_blank" href="'.admin_url('admin-ajax.php').'?action=data_pendaftar&download=1" class="btn btn-primary" style="margin: 0px 0px 3px 20px;">Excel</a>
		</div>
		<script>
			function filter_role(){
				var currentUrl = new URL(window.location.href);
			    currentUrl.searchParams.set("role", jQuery("#jenis_data_ppdb").val());
			    window.location = currentUrl.href;
			}
		</script>';
}

$th_admin = '';
if (user_can( $current_user, 'administrator' )) {
	$th_admin = '
		<th>NISN</th>
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
<style>
.container-ppdb{	
    overflow: auto;
    max-height: 90vh;
    max-width: 98vw;
    margin: auto;
}
</style>
<div class="container-ppdb">
	<table class="table table-bordered">
		<thead>
			<tr>
				<th style="width: 150px;">No Pendaftaran</th>
				<th>Nama</th>
				<th style="width: 60%;">Asal Sekolah</th>
				'.$th_admin.'
			</tr>
		</thead>
		<tbody>
			'.$body.'
		</tbody>
	</table>
</div>
';
if(!empty($_GET) && !empty($_GET['download'])){
	$filename = "data_pendaftar_".date("Y-m-d_H-i",time());
    header("Content-type: application/octet-stream");
	header( "Content-disposition: filename=".$filename.".xls");
	header("Pragma: no-cache");
	header("Expires: 0");
    die($return);
}
echo $return;