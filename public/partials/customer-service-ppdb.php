<?php
if (!defined('WPINC')) {
    die;
}
?>
<style type="text/css">

</style>
<div class="container" style="width: 500px;">
    <div class="row text-center" style="margin-bottom: 20px;">
        <div class="col-md-12">
            <h3 class="text-center">WA Admin PPDB</h3>
        </div>
    </div>
    <div class="row text-center" style="margin-bottom: 20px;">
        <div class="col-md-6">
            <a target="_blank" href="<?php echo $this->functions->generateWALink(get_option('_crb_ppdb_no_wa_1'), get_option('_crb_ppdb_pesan_wa_1')); ?>" class="btn btn-success btn-custom"><?php echo get_option('_crb_ppdb_nama_wa_1'); ?></a>
        </div>
        <div class="col-md-6">
            <a target="_blank" href="<?php echo $this->functions->generateWALink(get_option('_crb_ppdb_no_wa_2'), get_option('_crb_ppdb_pesan_wa_2')); ?>" class="btn btn-success btn-custom"><?php echo get_option('_crb_ppdb_nama_wa_2'); ?></a>
        </div>
    </div>
</div>
