<?php
if (!defined('WPINC')) {
    die;
}
$daftar_siswa = $this->functions->generatePage(array(
    'nama_page' => 'Daftar Pendaftaran Siswa Baru',
    'content' => '[daftar-siswa]',
    'show_header' => 1,
    'post_status' => 'private'
));
$hubungi_admin = $this->functions->generatePage(array(
    'nama_page' => 'Hubungi Admin PPDB',
    'content' => '[customer-service-ppdb]',
    'show_header' => 1,
    'no_key' => 1,
    'post_status' => 'public'
));

$options = UM()->options();

$page_id = $options->get( 'core_login' );
$login_url = get_permalink( $page_id );

$page_id = $options->get( 'core_register' );
$register_url = get_permalink( $page_id );
?>
<style type="text/css">
    .circle-logo {
        text-align: center;
        margin: 0 auto 20px;
    }
</style>
<h1 class="text-center"><?php echo get_bloginfo('name'); ?></h1>
<div class="container" style="width: 500px;">
    <!-- Logo -->
    <div class="row">
        <div class="circle-logo">
            <img src="<?php echo get_option('_crb_ppdb_logo'); ?>" alt="Logo PPDB beranda">
        </div>
    </div>
    <div class="row text-center" style="margin-bottom: 20px;">
        <div class="col-6">
            <a href="<?php echo $register_url; ?>" class="btn btn-primary btn-custom">Daftar PPDB</a>
        </div>
        <div class="col-6">
            <a href="<?php echo $daftar_siswa['url']; ?>" class="btn btn-primary btn-custom">Data Pendaftar</a>
        </div>
    </div>
    <div class="row text-center" style="margin-bottom: 20px;">
        <div class="col-6">
            <a href="<?php echo $login_url; ?>" class="btn btn-primary btn-custom">Login Akun</a>
        </div>
        <div class="col-6">
            <a href="<?php echo $hubungi_admin['url']; ?>" class="btn btn-primary btn-custom">WA Admin PPDB</a>
        </div>
    </div>
</div>