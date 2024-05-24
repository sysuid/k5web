import localeMessageBox from '@/components/message-box/locale/en-US';
import localeLogin from '@/views/login/locale/en-US';

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';

import localeMonitor from '@/views/dashboard/monitor/locale/en-US';

import localeSearchTable from '@/views/list/search-table/locale/en-US';
import localeCardList from '@/views/list/card/locale/en-US';

import localeStepForm from '@/views/form/step/locale/en-US';
import localeGroupForm from '@/views/form/group/locale/en-US';

import localeBasicProfile from '@/views/profile/basic/locale/en-US';

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/en-US';
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/en-US';

import localeSuccess from '@/views/result/success/locale/en-US';
import localeError from '@/views/result/error/locale/en-US';

import locale403 from '@/views/exception/403/locale/en-US';
import locale404 from '@/views/exception/404/locale/en-US';
import locale500 from '@/views/exception/500/locale/en-US';

import localeUserInfo from '@/views/user/info/locale/en-US';
import localeUserSetting from '@/views/user/setting/locale/en-US';

import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'CPS',
  'menu.cps.channel': 'Channel',
  'menu.cps.settings': 'Settings',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.list': 'Tools',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': 'FAQ',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
  'navbar.author': 'Author: BD8DFN',
  'navbar.connect': 'Connect',
  'navbar.disconnect': 'Disconnect',
  'navbar.qa': 'Feedback',
  'global.8kb': '8KB (64Kbit)',
  'global.128kb': '128KB (1Mbit)',
  'global.256kb': '256KB (2Mbit)',
  'global.512kb': '512KB (4Mbit)',
  'menu.rb': 'Backup/Restore',
  'menu.flash': 'Flasher',
  'menu.image': 'Startup Image',
  'menu.font': 'Set Patch',
  'menu.satellite': 'Satcom',
  'global.onStart': ' (Put the UV-K5 into normral mode)',
  'global.onBoot': ' (Put the UV-K5 into programming mode)',
  'cps.onDeviceRead': 'Read from device',
  'cps.onDeviceWrite': 'Write to device',
  'cps.downloadImportTemplate': 'Download Import Templates',
  'cps.import': 'Import',
  'cps.export': 'Export',
  'cps.save': 'Save',
  'cps.load': 'Load',
  'cps.line1': 'First line of text on startup screen',
  'cps.line2': 'Second line of text on startup screen',
  'cps.mdclocplay': 'Local MDC Play (Only support my firmware)',
  'cps.sort': 'Sort',
  'cps.name': 'Name',
  'cps.bandwidth': 'Bandwidth',
  'cps.tx': 'TX Frequency',
  'cps.rx': 'RX Frequency',
  'cps.power': 'Power',
  'cps.rxToneType': 'RX Tone Type',
  'cps.rxToneCTCSS': 'RX CTCSS（Hz）',
  'cps.rxToneDCS': 'RX DCS',
  'cps.txToneType': 'TX Tone Type',
  'cps.txToneCTCSS': 'TX CTCSS（Hz）',
  'cps.txToneDCS': 'TX DCS',
  'cps.step': 'Frequency Step',
  'cps.reverse': 'Reverse',
  'cps.scramb': 'Scramb',
  'cps.busy': 'Busy',
  'cps.pttid': 'PTTID',
  'cps.mode': 'Mode',
  'cps.dtmf': 'DTMF Decode',
  'cps.scanlist': 'Scanlist',
  'cps.operate': 'Operate',
  'cps.clear': 'Clear',
  'tool.quickbackup': 'Quick Backup',
  'tool.fullbackup': 'Full Backup',
  'tool.cleardata': 'Clear EEPROM',
  'tool.backupConfig': 'Backup Config',
  'tool.restoreConfig': 'Restore Config',
  'tool.backupCalibration': 'Backup Calibration',
  'tool.restoreCalibration': 'Restore Calibration',
  'tool.backup': 'Backup',
  'tool.restore': 'Restore',
  'tool.autocheck': 'AUTO',
  'tool.selectSize': 'Select EEPROM size',
  'tool.first': 'Warning ',
  'tool.firstTitle': '',
  'tool.last': '（LAST WARNING）',
  'tool.clearMessage': 'This will clear the EEPROM of all contents, including configuration and calibration data!!!!',
  'tool.selectFirmware': 'Select Firmware',
  'tool.flash': 'FLASH',
  'tool.selectImage': 'Select Image',
  'tool.write': 'Write to device',
  'tool.fontwrite': 'LOSEHU Firmware Character Set Write',
  'tool.pinyinwrite': 'LOSEHU H Firmware Pinyin Set Write',
  'tool.writefontwrite': 'Character Set Write',
  'tool.writepinyin': 'Pinyin Set Write',
  'tool.brtime': 'Browser Time',
  'tool.selectSatellite': 'Select satellite',
  'tool.longitude': 'Longitude',
  'tool.latitude': 'Latitude',
  'tool.altitude': 'Altitude',
  'tool.brlonlat': 'Get browser location',
  'tool.phonelonlat': 'Get phone location',
  'tool.satpasstime': 'Get satellite pass time',
  'tool.selectPassTime': 'Select pass time',
  'tool.txFreq': 'TX Frequency',
  'tool.txTone': 'TX Tone',
  'tool.rxFreq': 'RX Frequency',
  'tool.rxTone': 'RX Tone',
  'tool.writeData': 'Write to device',
  'tool.off': 'Off',
  'tool.scanqr': 'Scan QR Code',
  'tool.scannotice': 'Uploaded location information will be cached by the server for 10 minutes',
  'tool.scaned': 'Scanned and uploaded',
  'global.nosupport': 'Current browser does not support WebSerial function, please use Chrome, Edge, Opera browser.',
  'global.connectFail': 'Connect Fail',
  'menu.workshop': 'Workshop',
  'menu.firmware': 'Firmware',
  'global.use': 'Use',
  'tool.ssbpatch': 'LOSEHU S Firmware SI4732 SSB Patch',
  'tool.writessbpatch': 'SSB Patch Write',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,

  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,
  ...localeStepForm,
  ...localeGroupForm,
  ...localeBasicProfile,
  ...localeDataAnalysis,
  ...localeMultiDAnalysis,
  ...localeSuccess,
  ...localeError,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeUserInfo,
  ...localeUserSetting,
};
