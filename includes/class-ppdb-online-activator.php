<?php

/**
 * Fired during plugin activation
 *
 * @link       maremjaya.com
 * @since      1.0.0
 *
 * @package    Ppdb_Online
 * @subpackage Ppdb_Online/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Ppdb_Online
 * @subpackage Ppdb_Online/includes
 * @author     Agus Nurwanto <agusnurwantomuslim@gmail.com>
 */
class Ppdb_Online_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		if (!is_plugin_active('ultimate-member/ultimate-member.php')) {
	        // Batalkan aktivasi plugin
	        deactivate_plugins(plugin_basename(__FILE__));

	        // Tampilkan pesan error
	        wp_die(
	            'Plugin ini memerlukan Ultimate Member untuk diaktifkan. Silakan aktifkan Ultimate Member terlebih dahulu.',
	            'Kesalahan Aktivasi Plugin',
	            array('back_link' => true)
	        );
	    }
	}

}
