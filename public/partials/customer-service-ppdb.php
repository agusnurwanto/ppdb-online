<?php
if (!defined('WPINC')) {
    die;
}
?>
<style type="text/css">
    .btn-custom {
        padding: 7px 25px;
        border-radius: 25px;
        font-weight: bold;
    }
    .btn-custom span {
        font-size: 25px;
    }
</style>
<div class="container" style="width: 500px;">
    <div class="row text-center" style="margin-bottom: 20px;">
        <div class="col-md-12">
            <h3 class="text-center btn btn-primary text-white" style="border-radius: 25px; margin: 20px; padding: 25px;">WA Admin PPDB</h3>
        </div>
    </div>
    <div class="row text-center" style="margin-bottom: 20px;">
        <div class="col-md-6">
            <a target="_blank" href="<?php echo $this->functions->generateWALink(get_option('_crb_ppdb_no_wa_1'), get_option('_crb_ppdb_pesan_wa_1')); ?>" class="btn btn-success btn-custom"><span class="dashicons dashicons-whatsapp"></span><br><?php echo get_option('_crb_ppdb_nama_wa_1'); ?></a>
        </div>
        <div class="col-md-6">
            <a target="_blank" href="<?php echo $this->functions->generateWALink(get_option('_crb_ppdb_no_wa_2'), get_option('_crb_ppdb_pesan_wa_2')); ?>" class="btn btn-success btn-custom"><span class="dashicons dashicons-whatsapp"></span><br><?php echo get_option('_crb_ppdb_nama_wa_2'); ?></a>
        </div>
    </div>
</div>
