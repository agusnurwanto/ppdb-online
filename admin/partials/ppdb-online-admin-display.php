<?php
	if(!empty($_POST)){
		if(!empty($_POST['ppdb_options'])){
			update_option('ppdb_options', $_POST['ppdb_options']);
		}
	}

	$option_ppdb = get_option('ppdb_options');
	if(empty($option_ppdb)){
		$option_ppdb = array(
			'bukti_pendaftaran' => 0
		);
		update_option('ppdb_options', $option_ppdb);
	}
	if(empty($option_ppdb['no_pendaftaran'])){
		$option_ppdb['no_pendaftaran'] = '';
		update_option('ppdb_options', $option_ppdb);
	}
	if(empty($option_ppdb['tempat_lahir'])){
		$option_ppdb['tempat_lahir'] = '';
		update_option('ppdb_options', $option_ppdb);
	}
	if(empty($option_ppdb['tanggal_lahir'])){
		$option_ppdb['tanggal_lahir'] = '';
		update_option('ppdb_options', $option_ppdb);
	}
	if(empty($option_ppdb['jenis_kelamin'])){
		$option_ppdb['jenis_kelamin'] = '';
		update_option('ppdb_options', $option_ppdb);
	}
	if(empty($option_ppdb['asal_sekolah'])){
		$option_ppdb['asal_sekolah'] = '';
		update_option('ppdb_options', $option_ppdb);
	}
	if(empty($option_ppdb['nisn'])){
		$option_ppdb['nisn'] = '';
		update_option('ppdb_options', $option_ppdb);
	}
	if(empty($option_ppdb['alamat'])){
		$option_ppdb['alamat'] = '';
		update_option('ppdb_options', $option_ppdb);
	}
	if(empty($option_ppdb['no_tlp'])){
		$option_ppdb['no_tlp'] = '';
		update_option('ppdb_options', $option_ppdb);
	}

	$mypages = get_pages( array( 'sort_column' => 'post_date', 'sort_order' => 'desc' ) );
	// print_r($option_ppdb); die();
	$option_page = '';
	$cek = false;
	foreach( $mypages as $page ) {
		$selected = '';
		if($page->ID == $option_ppdb['bukti_pendaftaran']){
			$cek = true;
			$selected = 'selected';
		}
		$option_page .= '<option value="'.$page->ID.'" '.$selected.'>'.$page->post_title.'</option>';
    }
    if(false == $cek){
		$option_page = '<option value="0" selected>Select Page</option>'.$option_page;
    }
    $option_ppdb['no_pendaftaran'] = 'no_pendaftaran';
?>

<div class="wrap">
    <h2>
        PPDB Online - Settings
    </h2>
    <h2 class="nav-tab-wrapper">
        <a class="nav-tab nav-tab-active" href="#">
            General
        </a>
        <a class="nav-tab " href="#">
            Access
        </a>
    </h2>
    <div>
        <ul class="subsubsub">
            <a class="current" href="#">
                Pages
            </a>
            |
            <a class="" href="#">
                Users
            </a>
        </ul>
    </div>
    <form action="" method="post" name="ppdb-settings-form">
        <input name="ppdb-settings-action" type="hidden" value="save">
        <input class="ppdb-forms-field " data-field_id="pages_settings" id="ppdb_options_pages_settings" name="ppdb_options[pages_settings]" type="hidden" value="1">
        <table class="form-table ppdb-form-table ppdb_options-- ppdb-third-colppdbn">
            <tbody>
                <tr class="ppdb-forms-line">
                    <th>
                        <label for="ppdb_options_core_user">
                            Shortcode Bukti Pendaftaran
                        </label>
                    </th>
                    <td>
                        [bukti-pendaftaran]
                    </td>
                </tr>
                <tr class="ppdb-forms-line">
                    <th>
                        <label for="ppdb_options_core_user">
                            Shortcode Daftar Siswa
                        </label>
                    </th>
                    <td>
                        [daftar-siswa]
                    </td>
                </tr>
                <tr class="ppdb-forms-line" data-field_type="select" data-prefix="ppdb_options">
                    <th>
                        <label for="ppdb_options_core_user">
                            Bukti Pendaftaran page
                        </label>
                    </th>
                    <td>
                        <select class="ppdb-forms-field ppdb-small-field" data-field_id="bukti_pendaftaran" id="ppdb_options_core_user" name="ppdb_options[bukti_pendaftaran]">
                            <?php echo $option_page; ?>
                        </select>
                    </td>
                </tr>
                <tr class="ppdb-forms-line" data-field_type="select" data-prefix="ppdb_options">
                    <th>
                        <label for="ppdb_options_core_user">
                            No Pendaftaran (meta key)
                        </label>
                    </th>
                    <td>
                        <input type="text" class="ppdb-forms-field ppdb-small-field" readonly="true" name="ppdb_options[no_pendaftaran]" value="<?php echo $option_ppdb['no_pendaftaran']; ?>">
                    </td>
                </tr>
                <tr class="ppdb-forms-line" data-field_type="select" data-prefix="ppdb_options">
                    <th>
                        <label for="ppdb_options_core_user">
                            Tempat Lahir (meta key)
                        </label>
                    </th>
                    <td>
                        <input type="text" class="ppdb-forms-field ppdb-small-field" name="ppdb_options[tempat_lahir]" value="<?php echo $option_ppdb['tempat_lahir']; ?>">
                    </td>
                </tr>
                <tr class="ppdb-forms-line" data-field_type="select" data-prefix="ppdb_options">
                    <th>
                        <label for="ppdb_options_core_user">
                            Tanggal Lahir (meta key)
                        </label>
                    </th>
                    <td>
                        <input type="text" class="ppdb-forms-field ppdb-small-field" name="ppdb_options[tanggal_lahir]" value="<?php echo $option_ppdb['tanggal_lahir']; ?>">
                    </td>
                </tr>
                <tr class="ppdb-forms-line" data-field_type="select" data-prefix="ppdb_options">
                    <th>
                        <label for="ppdb_options_core_user">
                            Jenis Kelamin (meta key)
                        </label>
                    </th>
                    <td>
                        <input type="text" class="ppdb-forms-field ppdb-small-field" name="ppdb_options[jenis_kelamin]" value="<?php echo $option_ppdb['jenis_kelamin']; ?>">
                    </td>
                </tr>
                <tr class="ppdb-forms-line" data-field_type="select" data-prefix="ppdb_options">
                    <th>
                        <label for="ppdb_options_core_user">
                            Asal Sekolah (meta key)
                        </label>
                    </th>
                    <td>
                        <input type="text" class="ppdb-forms-field ppdb-small-field" name="ppdb_options[asal_sekolah]" value="<?php echo $option_ppdb['asal_sekolah']; ?>">
                    </td>
                </tr>
                <tr class="ppdb-forms-line" data-field_type="select" data-prefix="ppdb_options">
                    <th>
                        <label for="ppdb_options_core_user">
                            NISN (meta key)
                        </label>
                    </th>
                    <td>
                        <input type="text" class="ppdb-forms-field ppdb-small-field" name="ppdb_options[nisn]" value="<?php echo $option_ppdb['nisn']; ?>">
                    </td>
                </tr>
                <tr class="ppdb-forms-line" data-field_type="select" data-prefix="ppdb_options">
                    <th>
                        <label for="ppdb_options_core_user">
                            Alamat (meta key)
                        </label>
                    </th>
                    <td>
                        <input type="text" class="ppdb-forms-field ppdb-small-field" name="ppdb_options[alamat]" value="<?php echo $option_ppdb['alamat']; ?>">
                    </td>
                </tr>
                <tr class="ppdb-forms-line" data-field_type="select" data-prefix="ppdb_options">
                    <th>
                        <label for="ppdb_options_core_user">
                            No. Tlp. (meta key)
                        </label>
                    </th>
                    <td>
                        <input type="text" class="ppdb-forms-field ppdb-small-field" name="ppdb_options[no_tlp]" value="<?php echo $option_ppdb['no_tlp']; ?>">
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="submit">
            <input class="button button-primary" id="submit" name="submit" type="submit" value="Save Changes">
        </p>
    </form>
    <div class="clear">
    </div>
</div>