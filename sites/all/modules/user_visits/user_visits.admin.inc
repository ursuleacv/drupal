<?php
/**
 * User visits 
 *
 * @author Valentin Ursuleac
 * 
 */

/**
 * Settings page
 */
function user_visits_settings() {
  $form['user_activity'] = array(
    '#type' => 'fieldset',
    '#title' => t('Display settings'),
    '#description' => t("Choose if you want the visitors to be displayed on the admin's profile page or not. Alternatively you may use the provided !blocks to display a user's visitors.", array('!blocks' => l('blocks', 'admin/build/block'))),
  );
  $form['user_activity']['user_visits_display'] = array(
    '#type' => 'radios',
    '#default_value' => variable_get('user_visits_display', 1),
    '#options' => array(t("Don't display."), t('Display on Admin profile page')),
  );
  //return system_settings_form_submit($form,&$form_state);
  return system_settings_form($form);
}