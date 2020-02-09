<?php
	if(!empty($_POST)){
		if(!empty($_POST['ppdb_options'])){
			update_option('ppdb_options', $_POST['ppdb_options']);
		}
	}

	$option_ppdb = get_option('ppdb_options');
	if(empty($option_ppdb)){
		$option_page = '';
		update_option('ppdb_options', array(
			'bukti_pendaftaran' => 0
		));
		$option_ppdb = get_option('ppdb_options');
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
            </tbody>
        </table>
        <p class="submit">
            <input class="button button-primary" id="submit" name="submit" type="submit" value="Save Changes">
        </p>
    </form>
    <div class="clear">
    </div>
</div>