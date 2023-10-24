/**
 * NetWork/PacketRegister.js
 *
 * Link all packets with their ID and the controller to use them
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */

define( ['./PacketStructure' ], function( PACKET )
{
	'use strict';

	return {
		0x69: PACKET.AC.ACCEPT_LOGIN, // ok
		0x6a: PACKET.AC.REFUSE_LOGIN, // ok
		0x6b: PACKET.HC.ACCEPT_ENTER_NEO_UNION, // ok
		0x6c: PACKET.HC.REFUSE_ENTER, // ok
		0x6d: PACKET.HC.ACCEPT_MAKECHAR_NEO_UNION, // ok
		0x6e: PACKET.HC.REFUSE_MAKECHAR, // ok
		0x6f: PACKET.HC.ACCEPT_DELETECHAR,  // ok
		0x70: PACKET.HC.REFUSE_DELETECHAR, // ok
		0x71: PACKET.HC.NOTIFY_ZONESVR, // ok
		0x73: PACKET.ZC.ACCEPT_ENTER, // ok
		0x74: PACKET.ZC.REFUSE_ENTER, // ok
		0x75: PACKET.ZC.NOTIFY_INITCHAR,
		0x76: PACKET.ZC.NOTIFY_UPDATECHAR,
		0x77: PACKET.ZC.NOTIFY_UPDATEPLAYER,
		0x78: PACKET.ZC.NOTIFY_STANDENTRY, // ok
		0x79: PACKET.ZC.NOTIFY_NEWENTRY, // ok
		0x7a: PACKET.ZC.NOTIFY_ACTENTRY, // ok
		0x7b: PACKET.ZC.NOTIFY_MOVEENTRY, // ok
		0x7c: PACKET.ZC.NOTIFY_STANDENTRY_NPC, // ok
		0x7f: PACKET.ZC.NOTIFY_TIME, // ok
		0x80: PACKET.ZC.NOTIFY_VANISH, // ok
		0x81: PACKET.SC.NOTIFY_BAN,  // ok
		0x83: PACKET.ZC.ACCEPT_QUIT, // ok
		0x84: PACKET.ZC.REFUSE_QUIT, // ok
		0x86: PACKET.ZC.NOTIFY_MOVE, // ok
		0x87: PACKET.ZC.NOTIFY_PLAYERMOVE, // ok
		0x88: PACKET.ZC.STOPMOVE, // ok
		0x8a: PACKET.ZC.NOTIFY_ACT, // ok
		0x8b: PACKET.ZC.NOTIFY_ACT_POSITION,
		0x8d: PACKET.ZC.NOTIFY_CHAT, // ok
		0x8e: PACKET.ZC.NOTIFY_PLAYERCHAT, // ok
		0x8f: PACKET.ZC.ENTRY_ACK,
		0x91: PACKET.ZC.NPCACK_MAPMOVE, // ok
		0x92: PACKET.ZC.NPCACK_SERVERMOVE, // ok
		0x93: PACKET.ZC.NPCACK_ENABLE,
		0x95: PACKET.ZC.ACK_REQNAME, // ok
		0x97: PACKET.ZC.WHISPER, // ok
		0x96: PACKET.ZC.UNK1,
		0x98: PACKET.ZC.ACK_WHISPER, // ok
		0x9a: PACKET.ZC.BROADCAST, // ok
		0x9c: PACKET.ZC.CHANGE_DIRECTION, // ok
		0x9d: PACKET.ZC.ITEM_ENTRY, // ok
		0x9e: PACKET.ZC.ITEM_FALL_ENTRY, // ok
		0xa0: PACKET.ZC.ITEM_PICKUP_ACK, // partially
		0xa1: PACKET.ZC.ITEM_DISAPPEAR, // ok
		0xa3: PACKET.ZC.NORMAL_ITEMLIST, // ok
		0xa4: PACKET.ZC.EQUIPMENT_ITEMLIST, // ok
		0xa5: PACKET.ZC.STORE_NORMAL_ITEMLIST, // ok
		0xa6: PACKET.ZC.STORE_EQUIPMENT_ITEMLIST, // ok
		0xa8: PACKET.ZC.USE_ITEM_ACK, // ok
		0xaa: PACKET.ZC.REQ_WEAR_EQUIP_ACK, // ok
		0xac: PACKET.ZC.REQ_TAKEOFF_EQUIP_ACK, // ok
		0xaf: PACKET.ZC.ITEM_THROW_ACK, // ok
		0xb0: PACKET.ZC.PAR_CHANGE, // ok
		0xb1: PACKET.ZC.LONGPAR_CHANGE, // ok
		0xb3: PACKET.ZC.RESTART_ACK, // ok
		0xb4: PACKET.ZC.SAY_DIALOG, // ok
		0xb5: PACKET.ZC.WAIT_DIALOG, // ok
		0xb6: PACKET.ZC.CLOSE_DIALOG, // ok
		0xb7: PACKET.ZC.MENU_LIST, // ok
		0xbc: PACKET.ZC.STATUS_CHANGE_ACK, // ok
		0xbd: PACKET.ZC.STATUS, // ok
		0xbe: PACKET.ZC.STATUS_CHANGE, // ok
		0xc0: PACKET.ZC.EMOTION, // ok
		0xc2: PACKET.ZC.USER_COUNT, // ok
		0xc3: PACKET.ZC.SPRITE_CHANGE, // ok
		0xc4: PACKET.ZC.SELECT_DEALTYPE, // ok
		0xc6: PACKET.ZC.PC_PURCHASE_ITEMLIST, // ok
		0xc7: PACKET.ZC.PC_SELL_ITEMLIST, // ok
		0xca: PACKET.ZC.PC_PURCHASE_RESULT, // ok
		0xcb: PACKET.ZC.PC_SELL_RESULT, // ok
		0xcd: PACKET.ZC.ACK_DISCONNECT_CHARACTER, // ok
		0xd1: PACKET.ZC.SETTING_WHISPER_PC,
		0xd2: PACKET.ZC.SETTING_WHISPER_STATE,
		0xd4: PACKET.ZC.WHISPER_LIST,
		0xd6: PACKET.ZC.ACK_CREATE_CHATROOM, // ok
		0xd7: PACKET.ZC.ROOM_NEWENTRY, // ok
		0xd8: PACKET.ZC.DESTROY_ROOM, // ok
		0xda: PACKET.ZC.REFUSE_ENTER_ROOM, // ok
		0xdb: PACKET.ZC.ENTER_ROOM, // ok
		0xdc: PACKET.ZC.MEMBER_NEWENTRY, // ok
		0xdd: PACKET.ZC.MEMBER_EXIT, // ok
		0xdf: PACKET.ZC.CHANGE_CHATROOM, // ok
		0xe1: PACKET.ZC.ROLE_CHANGE, // ok
		0xe5: PACKET.ZC.REQ_EXCHANGE_ITEM, // ok
		0xe7: PACKET.ZC.ACK_EXCHANGE_ITEM, //ok
		0xe9: PACKET.ZC.ADD_EXCHANGE_ITEM, // ok
		0xea: PACKET.ZC.ACK_ADD_EXCHANGE_ITEM, // ok
		0xec: PACKET.ZC.CONCLUDE_EXCHANGE_ITEM, // ok
		0xee: PACKET.ZC.CANCEL_EXCHANGE_ITEM, // ok
		0xf0: PACKET.ZC.EXEC_EXCHANGE_ITEM, // ok
		0xf1: PACKET.ZC.EXCHANGEITEM_UNDO,
		0xf2: PACKET.ZC.NOTIFY_STOREITEM_COUNTINFO, // ok
		0xf4: PACKET.ZC.ADD_ITEM_TO_STORE, // ok
		0xf6: PACKET.ZC.DELETE_ITEM_FROM_STORE, // ok
		0xf8: PACKET.ZC.CLOSE_STORE, // ok
		0xfa: PACKET.ZC.ACK_MAKE_GROUP, // ok
		0xfb: PACKET.ZC.GROUP_LIST, // ok
		0xfd: PACKET.ZC.ACK_REQ_JOIN_GROUP, // ok
		0xfe: PACKET.ZC.REQ_JOIN_GROUP,
		0x101: PACKET.ZC.GROUPINFO_CHANGE, // ok
		0x104: PACKET.ZC.ADD_MEMBER_TO_GROUP, // ok
		0x105: PACKET.ZC.DELETE_MEMBER_FROM_GROUP, // ok
		0x106: PACKET.ZC.NOTIFY_HP_TO_GROUPM, // ok
		0x107: PACKET.ZC.NOTIFY_POSITION_TO_GROUPM, // ok
		0x109: PACKET.ZC.NOTIFY_CHAT_PARTY, // ok
		0x10a: PACKET.ZC.MVP_GETTING_ITEM,
		0x10b: PACKET.ZC.MVP_GETTING_SPECIAL_EXP,
		0x10c: PACKET.ZC.MVP,
		0x10d: PACKET.ZC.THROW_MVPITEM,
		0x10e: PACKET.ZC.SKILLINFO_UPDATE, // ok
		0x10f: PACKET.ZC.SKILLINFO_LIST, // ok
		0x110: PACKET.ZC.ACK_TOUSESKILL, // ok
		0x111: PACKET.ZC.ADD_SKILL, // ok
		0x114: PACKET.ZC.NOTIFY_SKILL, // ok
		0x115: PACKET.ZC.NOTIFY_SKILL_POSITION, // ok
		0x117: PACKET.ZC.NOTIFY_GROUNDSKILL, // ok
		0x119: PACKET.ZC.STATE_CHANGE, // ok
		0x11a: PACKET.ZC.USE_SKILL, // partially
		0x11c: PACKET.ZC.WARPLIST, // ok
		0x11e: PACKET.ZC.ACK_REMEMBER_WARPPOINT, // ok
		0x11f: PACKET.ZC.SKILL_ENTRY, // ok
		0x120: PACKET.ZC.SKILL_DISAPPEAR, // ok
		0x121: PACKET.ZC.NOTIFY_CARTITEM_COUNTINFO, // ok
		0x122: PACKET.ZC.CART_EQUIPMENT_ITEMLIST,
		0x123: PACKET.ZC.CART_NORMAL_ITEMLIST,
		0x124: PACKET.ZC.ADD_ITEM_TO_CART,
		0x125: PACKET.ZC.DELETE_ITEM_FROM_CART,
		0x12b: PACKET.ZC.CARTOFF,
		0x12c: PACKET.ZC.ACK_ADDITEM_TO_CART,
		0x12d: PACKET.ZC.OPENSTORE,
		0x131: PACKET.ZC.STORE_ENTRY, // ok
		0x132: PACKET.ZC.DISAPPEAR_ENTRY, // ok
		0x133: PACKET.ZC.PC_PURCHASE_ITEMLIST_FROMMC, // ok
		0x135: PACKET.ZC.PC_PURCHASE_RESULT_FROMMC, // ok
		0x136: PACKET.ZC.PC_PURCHASE_MYITEMLIST,
		0x137: PACKET.ZC.DELETEITEM_FROM_MCSTORE,
		0x139: PACKET.ZC.ATTACK_FAILURE_FOR_DISTANCE,
		0x13a: PACKET.ZC.ATTACK_RANGE, // ok
		0x13b: PACKET.ZC.ACTION_FAILURE, // ok
		0x13c: PACKET.ZC.EQUIP_ARROW, // ok
		0x13d: PACKET.ZC.RECOVERY, // ok
		0x13e: PACKET.ZC.USESKILL_ACK, // partially
		0x141: PACKET.ZC.COUPLESTATUS, // ok
		0x142: PACKET.ZC.OPEN_EDITDLG, // ok
		0x144: PACKET.ZC.COMPASS, // ok
		0x145: PACKET.ZC.SHOW_IMAGE, // ok
		0x147: PACKET.ZC.AUTORUN_SKILL, // ok
		0x148: PACKET.ZC.RESURRECTION, // ok
		0x14a: PACKET.ZC.ACK_GIVE_MANNER_POINT,
		0x14b: PACKET.ZC.NOTIFY_MANNER_POINT_GIVEN,
		0x14c: PACKET.ZC.MYGUILD_BASIC_INFO, // ok
		0x14e: PACKET.ZC.ACK_GUILD_MENUINTERFACE, // ok
		0x150: PACKET.ZC.GUILD_INFO, // ok
		0x152: PACKET.ZC.GUILD_EMBLEM_IMG, // ok
		0x154: PACKET.ZC.MEMBERMGR_INFO, // ok
		0x156: PACKET.ZC.ACK_REQ_CHANGE_MEMBERS, // ok
		0x158: PACKET.ZC.ACK_OPEN_MEMBER_INFO,
		0x15a: PACKET.ZC.ACK_LEAVE_GUILD, // ok
		0x15c: PACKET.ZC.ACK_BAN_GUILD, // ok
		0x15e: PACKET.ZC.ACK_DISORGANIZE_GUILD_RESULT, // ok
		0x15f: PACKET.ZC.ACK_DISORGANIZE_GUILD,
		0x160: PACKET.ZC.POSITION_INFO, // ok
		0x162: PACKET.ZC.GUILD_SKILLINFO,
		0x163: PACKET.ZC.BAN_LIST, // ok
		0x164: PACKET.ZC.OTHER_GUILD_LIST,
		0x166: PACKET.ZC.POSITION_ID_NAME_INFO, // ok
		0x167: PACKET.ZC.RESULT_MAKE_GUILD, // ok
		0x169: PACKET.ZC.ACK_REQ_JOIN_GUILD, // ok
		0x16a: PACKET.ZC.REQ_JOIN_GUILD, // ok
		0x16c: PACKET.ZC.UPDATE_GDID, // ok
		0x16d: PACKET.ZC.UPDATE_CHARSTAT, // ok
		0x16f: PACKET.ZC.GUILD_NOTICE, // ok
		0x171: PACKET.ZC.REQ_ALLY_GUILD, // ok
		0x173: PACKET.ZC.ACK_REQ_ALLY_GUILD, // ok
		0x174: PACKET.ZC.ACK_CHANGE_GUILD_POSITIONINFO, // ok
		0x176: PACKET.ZC.ACK_GUILD_MEMBER_INFO, // ok
		0x177: PACKET.ZC.ITEMIDENTIFY_LIST, // ok
		0x179: PACKET.ZC.ACK_ITEMIDENTIFY, // ok
		0x17b: PACKET.ZC.ITEMCOMPOSITION_LIST, // ok
		0x17d: PACKET.ZC.ACK_ITEMCOMPOSITION, // ok
		0x17f: PACKET.ZC.GUILD_CHAT, // ok
		0x181: PACKET.ZC.ACK_REQ_HOSTILE_GUILD, // ok
		0x182: PACKET.ZC.MEMBER_ADD,
		0x184: PACKET.ZC.DELETE_RELATED_GUILD, // ok
		0x185: PACKET.ZC.ADD_RELATED_GUILD, // ok
		0x186: PACKET.ZC.COLLECTORDEAD,
		0x187: PACKET.HC.PING, // ok
		0x188: PACKET.ZC.ACK_ITEMREFINING, // ok
		0x189: PACKET.ZC.NOTIFY_MAPINFO, // ok
		0x18b: PACKET.ZC.ACK_REQ_DISCONNECT,
		0x18c: PACKET.ZC.MONSTER_INFO,
		0x18d: PACKET.ZC.MAKABLEITEMLIST,
		0x18e: PACKET.CZ.REQMAKINGITEM,
		0x18f: PACKET.ZC.ACK_REQMAKINGITEM,
		0x191: PACKET.ZC.TALKBOX_CHATCONTENTS,
		0x192: PACKET.ZC.UPDATE_MAPINFO,
		0x194: PACKET.ZC.ACK_REQNAME_BYGID,
		0x195: PACKET.ZC.ACK_REQNAMEALL, // ok
		0x196: PACKET.ZC.MSG_STATE_CHANGE, // ok
		0x199: PACKET.ZC.NOTIFY_MAPPROPERTY,
		0x19a: PACKET.ZC.NOTIFY_RANKING,
		0x19b: PACKET.ZC.NOTIFY_EFFECT, // ok
		0x19e: PACKET.ZC.START_CAPTURE, // ok
		0x1a0: PACKET.ZC.TRYCAPTURE_MONSTER, // ok
		0x1a2: PACKET.ZC.PROPERTY_PET,
		0x1a3: PACKET.ZC.FEED_PET,
		0x1a4: PACKET.ZC.CHANGESTATE_PET,
		0x1a6: PACKET.ZC.PETEGG_LIST, // ok
		0x1aa: PACKET.ZC.PET_ACT,
		0x1ab: PACKET.ZC.PAR_CHANGE_USER,
		0x1ac: PACKET.ZC.SKILL_UPDATE,
		0x1ad: PACKET.ZC.MAKINGARROW_LIST,
		0x1ae: PACKET.CZ.REQ_MAKINGARROW, // ok
		0x1b0: PACKET.ZC.NPCSPRITE_CHANGE,
		0x1b1: PACKET.ZC.SHOWDIGIT,
		0x1b3: PACKET.ZC.SHOW_IMAGE2, // ok
		0x1b4: PACKET.ZC.CHANGE_GUILD,
		0x1b5: PACKET.SC.BILLING_INFO,
		0x1b6: PACKET.ZC.GUILD_INFO2, // ok
		0x1b8: PACKET.ZC.GUILD_ZENY_ACK,
		0x1b9: PACKET.ZC.DISPEL, // ok
		0x1be: PACKET.AC.ASK_PNGAMEROOM,
		0x1c1: PACKET.ZC.REPLY_REMAINTIME,
		0x1c2: PACKET.ZC.INFO_REMAINTIME,
		0x1c3: PACKET.ZC.BROADCAST2, // ok
		0x1c4: PACKET.ZC.ADD_ITEM_TO_STORE2, // ok
		0x1c5: PACKET.ZC.ADD_ITEM_TO_CART2,
		0x1c7: PACKET.SC.ACK_ENCRYPTION,
		0x1c8: PACKET.ZC.USE_ITEM_ACK2, // ok
		0x1c9: PACKET.ZC.SKILL_ENTRY2, // ok
		0x1cc: PACKET.ZC.MONSTER_TALK,
		0x1cd: PACKET.ZC.AUTOSPELLLIST, // ok
		0x1cf: PACKET.ZC.DEVOTIONLIST,
		0x1d0: PACKET.ZC.SPIRITS,
		0x1d1: PACKET.ZC.BLADESTOP,
		0x1d2: PACKET.ZC.COMBODELAY,
		0x1d3: PACKET.ZC.SOUND, // ok
		0x1d4: PACKET.ZC.OPEN_EDITDLGSTR, // ok
		0x1d6: PACKET.ZC.NOTIFY_MAPPROPERTY2,
		0x1d7: PACKET.ZC.SPRITE_CHANGE2, // ok
		0x1d8: PACKET.ZC.NOTIFY_STANDENTRY2, // ok
		0x1d9: PACKET.ZC.NOTIFY_NEWENTRY2, // ok
		0x1da: PACKET.ZC.NOTIFY_MOVEENTRY2, // ok
		0x1dc: PACKET.AC.ACK_HASH,
		0x1de: PACKET.ZC.NOTIFY_SKILL2, // ok
		0x1e0: PACKET.ZC.ACK_ACCOUNTNAME,
		0x1e1: PACKET.ZC.SPIRITS2,
		0x1e2: PACKET.ZC.REQ_COUPLE,
		0x1e4: PACKET.ZC.START_COUPLE,
		0x1e6: PACKET.ZC.COUPLENAME,
		0x1e9: PACKET.ZC.ADD_MEMBER_TO_GROUP2, // ok
		0x1ea: PACKET.ZC.CONGRATULATION,
		0x1eb: PACKET.ZC.NOTIFY_POSITION_TO_GUILDM, // ok
		0x1ec: PACKET.ZC.GUILD_MEMBER_MAP_CHANGE,
		0x1ee: PACKET.ZC.NORMAL_ITEMLIST2, // ok
		0x1ef: PACKET.ZC.CART_NORMAL_ITEMLIST2,
		0x1f0: PACKET.ZC.STORE_NORMAL_ITEMLIST2, // ok
		0x1f1: PACKET.AC.NOTIFY_ERROR,
		0x1f2: PACKET.ZC.UPDATE_CHARSTAT2, // ok
		0x1f3: PACKET.ZC.NOTIFY_EFFECT2, // ok
		0x1f4: PACKET.ZC.REQ_EXCHANGE_ITEM2, // ok
		0x1f5: PACKET.ZC.ACK_EXCHANGE_ITEM2, // ok
		0x1f6: PACKET.ZC.REQ_BABY,
		0x1f8: PACKET.ZC.START_BABY,
		0x1fc: PACKET.ZC.REPAIRITEMLIST,
		0x1fe: PACKET.ZC.ACK_ITEMREPAIR,
		0x1ff: PACKET.ZC.HIGHJUMP,
		0x201: PACKET.ZC.FRIENDS_LIST, // ok
		0x205: PACKET.ZC.DIVORCE,
		0x206: PACKET.ZC.FRIENDS_STATE, // ok
		0x207: PACKET.ZC.REQ_ADD_FRIENDS, // ok
		0x209: PACKET.ZC.ADD_FRIENDS_LIST, // ok
		0x20a: PACKET.ZC.DELETE_FRIENDS, // ok
		0x20d: PACKET.HC.BLOCK_CHARACTER,
		0x20e: PACKET.ZC.STARSKILL,
		0x210: PACKET.ZC.ACK_PVPPOINT,
		0x211: PACKET.ZH.MOVE_PVPWORLD,
		0x214: PACKET.ZC.ACK_STATUS_GM,
		0x215: PACKET.ZC.SKILLMSG,
		0x216: PACKET.ZC.BABYMSG,
		0x219: PACKET.ZC.BLACKSMITH_RANK,
		0x21a: PACKET.ZC.ALCHEMIST_RANK,
		0x21b: PACKET.ZC.BLACKSMITH_POINT,
		0x21c: PACKET.ZC.ALCHEMIST_POINT,
		0x21e: PACKET.ZC.LESSEFFECT,
		0x21f: PACKET.ZC.NOTIFY_PKINFO,
		0x220: PACKET.ZC.NOTIFY_CRAZYKILLER,
		0x221: PACKET.ZC.NOTIFY_WEAPONITEMLIST, // ok
		0x222: PACKET.CZ.REQ_WEAPONREFINE, // ok
		0x223: PACKET.ZC.ACK_WEAPONREFINE, // ok
		0x224: PACKET.ZC.TAEKWON_POINT,
		0x226: PACKET.ZC.TAEKWON_RANK,
		0x227: PACKET.ZC.GAME_GUARD,
		0x229: PACKET.ZC.STATE_CHANGE3, // ok
		0x22a: PACKET.ZC.NOTIFY_STANDENTRY3, // ok
		0x22b: PACKET.ZC.NOTIFY_NEWENTRY3, // ok
		0x22c: PACKET.ZC.NOTIFY_MOVEENTRY3, // ok
		0x22d: PACKET.CZ.COMMAND_MER,
		0x22e: PACKET.ZC.PROPERTY_HOMUN,
		0x22f: PACKET.ZC.FEED_MER,
		0x230: PACKET.ZC.CHANGESTATE_MER,
		0x235: PACKET.ZC.MER_SKILLINFO_LIST,
		0x239: PACKET.ZC.MER_SKILLINFO_UPDATE,
		0x23a: PACKET.ZC.REQ_STORE_PASSWORD,
		0x23b: PACKET.CZ.ACK_STORE_PASSWORD,
		0x23c: PACKET.ZC.RESULT_STORE_PASSWORD,
		0x23d: PACKET.AC.EVENT_RESULT,
		0x23e: PACKET.HC.REQUEST_CHARACTER_PASSWORD,
		0x240: PACKET.ZC.MAIL_REQ_GET_LIST,
		0x242: PACKET.ZC.MAIL_REQ_OPEN,
		0x245: PACKET.ZC.MAIL_REQ_GET_ITEM,
		0x249: PACKET.ZC.MAIL_REQ_SEND,
		0x24a: PACKET.ZC.MAIL_RECEIVE,
		0x250: PACKET.ZC.AUCTION_RESULT,
		0x252: PACKET.ZC.AUCTION_ITEM_REQ_SEARCH,
		0x253: PACKET.ZC.STARPLACE,
		0x255: PACKET.ZC.ACK_MAIL_ADD_ITEM,
		0x256: PACKET.ZC.ACK_AUCTION_ADD_ITEM,
		0x257: PACKET.ZC.ACK_MAIL_DELETE,
		0x259: PACKET.AC.ACK_GAME_GUARD,
		0x25a: PACKET.ZC.MAKINGITEM_LIST,
		0x25e: PACKET.ZC.AUCTION_ACK_MY_SELL_STOP,
		0x25f: PACKET.ZC.AUCTION_WINDOWS,
		0x260: PACKET.ZC.MAIL_WINDOWS,
		0x261: PACKET.AC.REQ_LOGIN_OLDEKEY,
		0x262: PACKET.AC.REQ_LOGIN_NEWEKEY,
		0x263: PACKET.AC.REQ_LOGIN_CARDPASS,
		0x267: PACKET.AC.ACK_EKEY_FAIL_NOTEXIST,
		0x268: PACKET.AC.ACK_EKEY_FAIL_NOTUSESEKEY,
		0x269: PACKET.AC.ACK_EKEY_FAIL_NOTUSEDEKEY,
		0x26a: PACKET.AC.ACK_EKEY_FAIL_AUTHREFUSE,
		0x26b: PACKET.AC.ACK_EKEY_FAIL_INPUTEKEY,
		0x26c: PACKET.AC.ACK_EKEY_FAIL_NOTICE,
		0x26d: PACKET.AC.ACK_EKEY_FAIL_NEEDCARDPASS,
		0x26e: PACKET.AC.ACK_AUTHEKEY_FAIL_NOTMATCHCARDPASS,
		0x26f: PACKET.AC.ACK_FIRST_LOGIN,
		0x270: PACKET.AC.REQ_LOGIN_ACCOUNT_INFO,
		0x272: PACKET.AC.ACK_PT_ID_INFO,
		0x274: PACKET.ZC.ACK_MAIL_RETURN,
		0x276: PACKET.AC.ACCEPT_LOGIN2,
		0x278: PACKET.ZC.NOTIFY_PCBANG,
		0x27a: PACKET.ZC.HUNTINGLIST,
		0x27b: PACKET.ZC.PCBANG_EFFECT,
		0x27d: PACKET.ZC.PROPERTY_MERCE,
		0x27e: PACKET.ZC.SHANDA_PROTECT,
		0x280: PACKET.ZC.GANGSI_POINT,
		0x282: PACKET.ZC.GANGSI_RANK,
		0x283: PACKET.ZC.AID, // ok
		0x284: PACKET.ZC.NOTIFY_EFFECT3, // ok
		0x285: PACKET.ZC.DEATH_QUESTION,
		//0x287: PACKET.ZC.PC_CASH_POINT_ITEMLIST,
		0x289: PACKET.ZC.PC_CASH_POINT_UPDATE,
		0x28a: PACKET.ZC.NPC_SHOWEFST_UPDATE,
		0x28e: PACKET.HC.ACK_IS_VALID_CHARNAME,
		0x290: PACKET.HC.ACK_CHANGE_CHARNAME,
		0x291: PACKET.ZC.MSG, // ok
		0x293: PACKET.ZC.BOSS_INFO,
		0x294: PACKET.ZC.READ_BOOK,
		0x295: PACKET.ZC.EQUIPMENT_ITEMLIST2, // ok
		0x296: PACKET.ZC.STORE_EQUIPMENT_ITEMLIST2, // ok
		0x297: PACKET.ZC.CART_EQUIPMENT_ITEMLIST2,
		0x298: PACKET.ZC.CASH_TIME_COUNTER,
		0x299: PACKET.ZC.CASH_ITEM_DELETE,
		0x29a: PACKET.ZC.ITEM_PICKUP_ACK2, // partially
		0x29b: PACKET.ZC.MER_INIT,
		0x29c: PACKET.ZC.MER_PROPERTY,
		// 0x29d: PACKET.ZC.MER_SKILLINFO_LIST,
		0x29e: PACKET.ZC.MER_SKILLINFO_UPDATE,
		0x2a2: PACKET.ZC.MER_PAR_CHANGE,
		0x2a3: PACKET.ZC.GAMEGUARD_LINGO_KEY,
		0x2aa: PACKET.ZC.REQ_CASH_PASSWORD,
		0x2ac: PACKET.ZC.RESULT_CASH_PASSWORD,
		0x2ad: PACKET.AC.REQUEST_SECOND_PASSWORD,
		0x2b1: PACKET.ZC.ALL_QUEST_LIST,
		0x2b2: PACKET.ZC.ALL_QUEST_MISSION,
		0x2b3: PACKET.ZC.ADD_QUEST,
		0x2b4: PACKET.ZC.DEL_QUEST,
		0x2b5: PACKET.ZC.UPDATE_MISSION_HUNT,
		0x2b7: PACKET.ZC.ACTIVE_QUEST,
		0x2b8: PACKET.ZC.ITEM_PICKUP_PARTY,
		0x2b9: PACKET.ZC.SHORTCUT_KEY_LIST,
		0x2bb: PACKET.ZC.EQUIPITEM_DAMAGED,
		0x2bc: PACKET.ZC.NOTIFY_PCBANG_PLAYING_TIME,
		0x2bf: PACKET.ZC.SRPACKETR2_INIT,
		0x2c1: PACKET.ZC.NPC_CHAT,
		0x2c2: PACKET.ZC.FORMATSTRING_MSG,
		0x2c4: PACKET.CZ.PARTY_JOIN_REQ,
		0x2c5: PACKET.ZC.PARTY_JOIN_REQ_ACK, // ok
		0x2c6: PACKET.ZC.PARTY_JOIN_REQ, // ok
		0x2c9: PACKET.ZC.PARTY_CONFIG, // ok
		0x2ca: PACKET.HC.REFUSE_SELECTCHAR,
		0x2cb: PACKET.ZC.MEMORIALDUNGEON_SUBSCRIPTION_INFO,
		0x2cc: PACKET.ZC.MEMORIALDUNGEON_SUBSCRIPTION_NOTIFY,
		0x2cd: PACKET.ZC.MEMORIALDUNGEON_INFO,
		0x2ce: PACKET.ZC.MEMORIALDUNGEON_NOTIFY,
		0x2d0: PACKET.ZC.EQUIPMENT_ITEMLIST3, // ok
		0x2d1: PACKET.ZC.STORE_EQUIPMENT_ITEMLIST3, // ok
		0x2d2: PACKET.ZC.CART_EQUIPMENT_ITEMLIST3,
		0x2d3: PACKET.ZC.NOTIFY_BIND_ON_EQUIP,
		0x2d4: PACKET.ZC.ITEM_PICKUP_ACK3, // partially
		0x2d5: PACKET.ZC.ISVR_DISCONNECT,
		0x2d7: PACKET.ZC.EQUIPWIN_MICROSCOPE,
		0x2d9: PACKET.ZC.CONFIG, // ok
		0x2da: PACKET.ZC.CONFIG_NOTIFY, // ok
		0x2dc: PACKET.ZC.BATTLEFIELD_CHAT,
		0x2dd: PACKET.ZC.BATTLEFIELD_NOTIFY_CAMPINFO,
		0x2de: PACKET.ZC.BATTLEFIELD_NOTIFY_POINT,
		0x2df: PACKET.ZC.BATTLEFIELD_NOTIFY_POSITION,
		0x2e0: PACKET.ZC.BATTLEFIELD_NOTIFY_HP,
		0x2e1: PACKET.ZC.NOTIFY_ACT2, // ok
		0x2e7: PACKET.ZC.MAPPROPERTY,
		0x2e8: PACKET.ZC.NORMAL_ITEMLIST3, // ok
		0x2e9: PACKET.ZC.CART_NORMAL_ITEMLIST3,
		0x2ea: PACKET.ZC.STORE_NORMAL_ITEMLIST3, // ok
		0x2eb: PACKET.ZC.ACCEPT_ENTER2,
		0x2ec: PACKET.ZC.NOTIFY_MOVEENTRY4, // ok
		0x2ed: PACKET.ZC.NOTIFY_NEWENTRY4, // ok
		0x2ee: PACKET.ZC.NOTIFY_STANDENTRY4, // ok
		0x2ef: PACKET.ZC.NOTIFY_FONT,
		0x2f0: PACKET.ZC.PROGRESS, // ok
		0x2f2: PACKET.ZC.PROGRESS_CANCEL, // ok
		0x35d: PACKET.ZC.SIMPLE_CASHSHOP_POINT_ITEMLIST,
		0x35f: PACKET.CZ.REQUEST_MOVE2,
		0x360: PACKET.CZ.REQUEST_TIME2,
		0x361: PACKET.CZ.CHANGE_DIRECTION2,
		0x362: PACKET.CZ.ITEM_PICKUP2,
		0x363: PACKET.CZ.ITEM_THROW2,
		0x364: PACKET.CZ.MOVE_ITEM_FROM_BODY_TO_STORE2,
		0x365: PACKET.CZ.MOVE_ITEM_FROM_STORE_TO_BODY2,
		0x366: PACKET.CZ.USE_SKILL_TOGROUND2,
		0x368: PACKET.CZ.REQNAME2,
		0x369: PACKET.CZ.REQNAME_BYGID2,
		0x3dd: PACKET.AHC.GAME_GUARD,
		0x3de: PACKET.CAH.ACK_GAME_GUARD,
		0x436: PACKET.CZ.ENTER2,
		0x437: PACKET.CZ.REQUEST_ACT2,
		0x438: PACKET.CZ.USE_SKILL2,
		0x43d: PACKET.ZC.SKILL_POSTDELAY,
		0x43e: PACKET.ZC.SKILL_POSTDELAY_LIST,
		0x43f: PACKET.ZC.MSG_STATE_CHANGE2, // ok
		0x440: PACKET.ZC.MILLENNIUMSHIELD,
		0x441: PACKET.ZC.SKILLINFO_DELETE,
		0x442: PACKET.ZC.SKILL_SELECT_REQUEST,
		0x444: PACKET.ZC.SIMPLE_CASH_POINT_ITEMLIST,
		0x446: PACKET.ZC.QUEST_NOTIFY_EFFECT,
		0x448: PACKET.HC.CHARACTER_LIST,
		0x449: PACKET.ZC.HACKSH_ERROR_MSG,
		0x7d0: PACKET.ZC.ES_RESULT,
		0x7d2: PACKET.ZC.ES_LIST,
		0x7d5: PACKET.ZC.ES_READY,
		0x7d6: PACKET.ZC.ES_GOTO,
		0x7d7: PACKET.CZ.GROUPINFO_CHANGE_V2,
		0x7d8: PACKET.ZC.REQ_GROUPINFO_CHANGE_V2, // ok
		0x7d9: PACKET.ZC.SHORTCUT_KEY_LIST_V2,
		0x7db: PACKET.ZC.HO_PAR_CHANGE,
		0x7dd: PACKET.ZC.SEEK_PARTY,
		0x7df: PACKET.ZC.SEEK_PARTY_MEMBER,
		0x7e0: PACKET.ZC.ES_NOTI_MYINFO,
		0x7e1: PACKET.ZC.SKILLINFO_UPDATE2, // ok
		0x7e2: PACKET.ZC.MSG_VALUE,
		0x7e3: PACKET.ZC.ITEMLISTWIN_OPEN,
		0x7e4: PACKET.CZ.ITEMLISTWIN_RES,
		0x7e6: PACKET.ZC.MSG_SKILL,
		0x7e8: PACKET.HC.CHECKBOT,
		0x7e9: PACKET.HC.CHECKBOT_RESULT,
		0x7eb: PACKET.ZC.BATTLE_FIELD_LIST,
		0x7ed: PACKET.ZC.JOIN_BATTLE_FIELD,
		0x7ef: PACKET.ZC.CANCEL_BATTLE_FIELD,
		0x7f1: PACKET.ZC.ACK_BATTLE_STATE_MONITOR,
		0x7f2: PACKET.ZC.BATTLE_NOTI_START_STEP,
		0x7f3: PACKET.ZC.BATTLE_JOIN_NOTI_DEFER,
		0x7f4: PACKET.ZC.BATTLE_JOIN_DISABLE_STATE,
		0x7f6: PACKET.ZC.NOTIFY_EXP,
		0x7f7: PACKET.ZC.NOTIFY_MOVEENTRY5, // ok
		0x7f8: PACKET.ZC.NOTIFY_NEWENTRY5, // ok
		0x7f9: PACKET.ZC.NOTIFY_STANDENTRY5, // ok
		0x7fa: PACKET.ZC.DELETE_ITEM_FROM_BODY, // ok
		0x7fb: PACKET.ZC.USESKILL_ACK2, // partially
		0x7fc: PACKET.ZC.CHANGE_GROUP_MASTER,
		0x7fe: PACKET.ZC.PLAY_NPC_BGM, // ok
		0x7ff: PACKET.ZC.DEFINE_CHECK,
		0x800: PACKET.ZC.PC_PURCHASE_ITEMLIST_FROMMC2, // ok
		0x802: PACKET.CZ.PARTY_BOOKING_REQ_REGISTER,
		0x802: PACKET.CZ.PARTY_BOOKING_REQ_REGISTER,
		0x803: PACKET.ZC.PARTY_BOOKING_ACK_REGISTER,
		0x805: PACKET.ZC.PARTY_BOOKING_ACK_SEARCH,
		0x807: PACKET.ZC.PARTY_BOOKING_ACK_DELETE,
		0x809: PACKET.ZC.PARTY_BOOKING_NOTIFY_INSERT,
		0x80a: PACKET.ZC.PARTY_BOOKING_NOTIFY_UPDATE,
		0x80b: PACKET.ZC.PARTY_BOOKING_NOTIFY_DELETE,
		0x80d: PACKET.ZC.SIMPLE_CASH_BTNSHOW,
		0x80e: PACKET.ZC.NOTIFY_HP_TO_GROUPM_R2, // ok
		0x80f: PACKET.ZC.ADD_EXCHANGE_ITEM2, // ok
		0x810: PACKET.ZC.OPEN_BUYING_STORE,
		0x811: PACKET.CZ.REQ_OPEN_BUYING_STORE,
		0x812: PACKET.ZC.FAILED_OPEN_BUYING_STORE_TO_BUYER,
		0x813: PACKET.ZC.MYITEMLIST_BUYING_STORE,
		0x814: PACKET.ZC.BUYING_STORE_ENTRY, // ok
		0x815: PACKET.CZ.REQ_CLOSE_BUYING_STORE,
		0x816: PACKET.ZC.DISAPPEAR_BUYING_STORE_ENTRY, // ok
		0x817: PACKET.CZ.REQ_CLICK_TO_BUYING_STORE,
		0x818: PACKET.ZC.ACK_ITEMLIST_BUYING_STORE,
		0x819: PACKET.CZ.REQ_TRADE_BUYING_STORE,
		0x827: PACKET.CH.DELETE_CHAR3_RESERVED,
		0x829: PACKET.CH.DELETE_CHAR3,
		0x81a: PACKET.ZC.FAILED_TRADE_BUYING_STORE_TO_BUYER,
		0x81b: PACKET.ZC.UPDATE_ITEM_FROM_BUYING_STORE,
		0x81c: PACKET.ZC.ITEM_DELETE_BUYING_STORE,
		0x81d: PACKET.ZC.EL_INIT,
		0x81e: PACKET.ZC.EL_PAR_CHANGE,
		0x81f: PACKET.ZC.BROADCAST4,
		0x820: PACKET.ZC.COSTUME_SPRITE_CHANGE,
		0x821: PACKET.AC.OTP_USER,
		0x823: PACKET.AC.OTP_AUTH_ACK,
		0x824: PACKET.ZC.FAILED_TRADE_BUYING_STORE_TO_SELLER,
		0x826: PACKET.AC.SSO_LOGIN_ACK,
		0x828: PACKET.HC.DELETE_CHAR3_RESERVED,
		0x82a: PACKET.HC.DELETE_CHAR3,
		0x82b: PACKET.CH.DELETE_CHAR3_CANCEL,
		0x82c: PACKET.HC.DELETE_CHAR3_CANCEL,
		0x82d: PACKET.HC.ACCEPT_ENTER_NEO_UNION_HEADER,  // ok
		0x835: PACKET.CZ.SEARCH_STORE_INFO,
		0x836: PACKET.ZC.SEARCH_STORE_INFO_ACK,
		0x837: PACKET.ZC.SEARCH_STORE_INFO_FAILED,
		0x838: PACKET.CZ.SEARCH_STORE_INFO_NEXT_PAGE,
		0x839: PACKET.ZC.ACK_BAN_GUILD_SSO, // ok
		0x83a: PACKET.ZC.OPEN_SEARCH_STORE_INFO,
		0x83d: PACKET.ZC.SSILIST_ITEM_CLICK_ACK,
		0x83e: PACKET.AC.REFUSE_LOGIN_R2,  // ok
		0x840: PACKET.HC.NOTIFY_ACCESSIBLE_MAPNAME, // ok
		0x84b: PACKET.ZC.ITEM_FALL_ENTRY2, // ok
		0x856: PACKET.ZC.NOTIFY_MOVEENTRY6, // ok
		0x857: PACKET.ZC.NOTIFY_NEWENTRY6, // ok
		0x858: PACKET.ZC.NOTIFY_STANDENTRY6, // ok
		0x859: PACKET.ZC.EQUIPWIN_MICROSCOPE2,
		0x8b3: PACKET.ZC.SHOWSCRIPT, // ok
		//0x8B7: PACKET.HC.SECOND_PASSWD_REQ,
		//0x8B8: PACKET.CH.SECOND_PASSWD_ACK,
		0x8b9: PACKET.HC.SECOND_PASSWD_LOGIN, // ok
		//0x8BA: PACKET.CH.MAKE_SECOND_PASSWD,
		//0x8BB: PACKET.HC.MAKE_SECOND_PASSWD,
		//0x8BC: PACKET.CH.DELETE_SECOND_PASSWD,
		//0x8BD: PACKET.HC.DELETE_SECOND_PASSWD,
		//0x8BE: PACKET.CH.EDIT_SECOND_PASSWD,
		//0x8BF: PACKET.HC.EDIT_SECOND_PASSWD,
		0x8c7: PACKET.ZC.SKILL_ENTRY3, // ok
		0x8c8: PACKET.ZC.NOTIFY_ACT3, // ok
		0x8d0: PACKET.ZC.REQ_WEAR_EQUIP_ACK2, // ok
		0x8d1: PACKET.ZC.REQ_TAKEOFF_EQUIP_ACK2, // ok
		0x8d2: PACKET.ZC.FASTMOVE, // ok
		0x8d6: PACKET.ZC.CLOSE_SCRIPT, // ok
		0x8fe: PACKET.ZC.UPDATE_MISSION_HUNT2, // ok
		0x8ff: PACKET.ZC.MSG_STATE_CHANGE3, // ok
		0x908: PACKET.ZC.ITEM_FAVORITE,
		0x90f: PACKET.ZC.NOTIFY_STANDENTRY7, // ok
		0x914: PACKET.ZC.NOTIFY_MOVEENTRY7, // ok
		0x915: PACKET.ZC.NOTIFY_NEWENTRY7, // ok
		0x977: PACKET.ZC.NOTIFY_MONSTER_HP, // ok
		0x97a: PACKET.ZC.ALL_QUEST_LIST_V2, // ok
		0x97b: PACKET.ZC.PERSONAL_INFOMATION, // ? (exp)
		0x983: PACKET.ZC.MSG_STATE_CHANGE4, // ok
		0x984: PACKET.ZC.MSG_STATE_CHANGE5, // ok
		0x990: PACKET.ZC.ITEM_PICKUP_ACK5, // partially
		0x991: PACKET.ZC.NORMAL_ITEMLIST4, // ok
		0x992: PACKET.ZC.EQUIPMENT_ITEMLIST4, // ok
		0x993: PACKET.ZC.CART_NORMAL_ITEMLIST4,
		0x994: PACKET.ZC.CART_EQUIPMENT_ITEMLIST4,
		0x995: PACKET.ZC.STORE_NORMAL_ITEMLIST4, // ok
		0x996: PACKET.ZC.STORE_EQUIPMENT_ITEMLIST4, // ok
		0x997: PACKET.ZC.EQUIPWIN_MICROSCOPE_V5,
		0x999: PACKET.ZC.ACK_WEAR_EQUIP_V5, // ok
		0x99a: PACKET.ZC.ACK_TAKEOFF_EQUIP_V5, // ok
		0x99b: PACKET.ZC.NOTIFY_MAPPROPERTY2,
		0x99f: PACKET.ZC.SKILL_ENTRY4, //ok
/*
        bgqueue_ackType = 0x8d8,
        bgqueue_notice_deleteType = 0x8db,
        bgqueue_registerType = 0x8d7,
        bgqueue_updateinfoType = 0x8d9,
        bgqueue_checkstateType = 0x90a,
        bgqueue_revokereqType = 0x8da,
        bgqueue_battlebeginackType = 0x8e0,
        bgqueue_notify_entryType = 0x8d9,
        bgqueue_battlebeginsType = 0x8df,
*/
		0x99d: PACKET.HC.ACCEPT_ENTER_NEO_UNION_LIST,  // ok
		0x9a0: PACKET.HC.CHARLIST_NOTIFY,
		0x9a6: PACKET.ZC.BANKING_CHECK,
		0x9a7: PACKET.CZ.REQ_BANKING_DEPOSIT,
		0x9a8: PACKET.ZC.ACK_BANKING_DEPOSIT,
		0x9a9: PACKET.CZ.REQ_BANKING_WITHDRAW,
		0x9aa: PACKET.ZC.ACK_BANKING_WITHDRAW,
		0x9ab: PACKET.CZ.REQ_BANKING_CHECK,
		0x9b6: PACKET.CZ.REQ_BANK_OPEN,
		0x9b7: PACKET.ZC.ACK_OPEN_BANKING,
		0x9b8: PACKET.CZ.REQ_BANK_CLOSE,
		0x9b9: PACKET.ZC.ACK_CLOSE_BANKING,
		0x9ca: PACKET.ZC.SKILL_ENTRY5, // ok
		0x9cb: PACKET.ZC.USE_SKILL2,
		// 0x9d5: npcmarketopenType
		// 0x9d7: npcmarketresultackType
		0x9db: PACKET.ZC.NOTIFY_MOVEENTRY8, // ok
		0x9dc: PACKET.ZC.NOTIFY_STANDENTRY8, // ok
		0x9dd: PACKET.ZC.NOTIFY_NEWENTRY8, // ok
		0x9df: PACKET.ZC.ACK_WHISPER2,
		0x9e5: PACKET.ZC.DELETEITEM_FROM_MCSTORE2,
		0x9e7: PACKET.ZC.RODEX_ICON, // rodexicon ?
		0x9f7: PACKET.ZC.PROPERTY_HOMUN2,
		0x9f8: PACKET.ZC.ALL_QUEST_LIST_V3, // ok
		0x9f9: PACKET.ZC.ADD_QUEST2, // ok
		0x9fa: PACKET.ZC.UPDATE_MISSION_HUNT3, // ok
		0x9fd: PACKET.ZC.NOTIFY_MOVEENTRY9, // ok
		0x9fe: PACKET.ZC.NOTIFY_STANDENTRY9, // ok
		0x9ff: PACKET.ZC.NOTIFY_NEWENTRY9, // ok
		//0x9d5: npcmarketopenType
		//0x9d7: npcmarketresultackType
		0xa00: PACKET.ZC.SHORTCUT_KEY_LIST_V3, // ok
		0xa07: PACKET.ZC.ACK_REMOVE_ITEM_MAIL, // PACKET.ZC.ACK_REMOVE_RODEX_ITEM
		0xa08: PACKET.CZ.REQ_OPEN_WRITE_MAIL,
		0xa09: PACKET.ZC.ADD_EXCHANGE_ITEM3,
		0xa0b: PACKET.ZC.ADD_ITEM_TO_CART3,
		0xa0a: PACKET.ZC.ADD_ITEM_TO_STORE3, //
		0xa0c: PACKET.ZC.ITEM_PICKUP_ACK6, // ok (Thapakorn)
		0xa0d: PACKET.ZC.EQUIPMENT_ITEMLIST5, // ok (Thapakorn)
		// 0xa0f: PACKET.ZC.CART_EQUIPMENT_ITEMLIST5, // !!!!!!!!!!!!! not work
		0xa10: PACKET.ZC.STORE_EQUIPMENT_ITEMLIST5, //
		0xa18: PACKET.ZC.ACCEPT_ENTER3, // ok
		0xa23: PACKET.ZC.ALL_ACH_LIST, // ?
		0xa24: PACKET.ZC.ACH_UPDATE,
		0xa25: PACKET.CZ.REQ_ACH_REWARD,
		0xa26: PACKET.ZC.REQ_ACH_REWARD_ACK,
		0xa27: PACKET.ZC.RECOVERY2, // ok
		0xa30: PACKET.ZC.ACK_REQNAMEALL2, // not tested yet (Thapakorn)
		0xa37: PACKET.ZC.ITEM_PICKUP_ACK7,
		0xa39: PACKET.CH.MAKE_CHAR3,
		0xa3b: PACKET.ZC.HAT_EFFECT,
		0xa43: PACKET.ZC.ADD_MEMBER_TO_GROUP3, // ok
		0xa44: PACKET.ZC.GROUP_LIST2, // ok
		0xa68: PACKET.CZ.UI_OPEN, //ok
		0xa84: PACKET.ZC.GUILD_INFO3, // ok
		0xa9b: PACKET.ZC.SEND_SWAP_EQUIPITEM_INFO,
		0xaa5: PACKET.ZC.MEMBERMGR_INFO2, //
		0xab2: PACKET.ZC.GROUP_ISALIVE,
		0xac4: PACKET.AC.ACCEPT_LOGIN3, // ok
		0xac5: PACKET.HC.NOTIFY_ZONESVR2, // ok
		0xacb: PACKET.ZC.LONGPAR_CHANGE2, // ok
		0xacc: PACKET.ZC.NOTIFY_EXP2,
		0xaef: PACKET.CZ.REQ_CHECK_ATTENDANCE, // ok
		0xaf4: PACKET.CZ.USE_SKILL_TOGROUND3,
		0xafe: PACKET.ZC.UPDATE_MISSION_HUNT4, // ok
		0xaff: PACKET.ZC.ALL_QUEST_LIST_V4, // ok
		0xadd: PACKET.ZC.ITEM_FALL_ENTRY3, // ok
		0xade: PACKET.ZC.RECOVER_PENALTY_OVERWEIGHT,
		0xadf: PACKET.ZC.ACK_REQNAMEALL3,
		0xae4: PACKET.ZC.ADD_MEMBER_TO_GROUP4, // ok
		0xae5: PACKET.ZC.GROUP_LIST3, // ok
		0xb08: PACKET.ZC.SPLIT_SEND_ITEMLIST_SET,
		0xb09: PACKET.ZC.SPLIT_SEND_ITEMLIST_NORMAL,
		0xb0a: PACKET.ZC.SPLIT_SEND_ITEMLIST_EQUIP,
		0xb0b: PACKET.ZC.SPLIT_SEND_ITEMLIST_RESULT,
		0xb0c: PACKET.ZC.ADD_QUEST3, // ok
		0xb18: PACKET.ZC.EXTEND_BODYITEM_SIZE,
		0xb1b: PACKET.ZC.NOTIFY_ACTORINIT2,
		0xb20: PACKET.ZC.SHORTCUT_KEY_LIST_V4,
		0xb25: PACKET.ZC.PAR_4JOB_CHANGE,
		0xb21: PACKET.CZ.SHORTCUT_KEY_CHANGE2,
		0xb39: PACKET.ZC.SPLIT_SEND_ITEMLIST_EQUIP2,
		0xb41: PACKET.ZC.ITEM_PICKUP_ACK8,
		0xb44: PACKET.ZC.ADD_ITEM_TO_STORE4,
		0xb45: PACKET.ZC.ADD_ITEM_TO_CART4,
		0xb65: PACKET.ZC.REPAIRITEMLIST2,
		0xb67: PACKET.ZC.ITEM_PICKUP_PARTY2,
		0xb72: PACKET.HC.ACCEPT_ENTER_NEO_UNION_LIST2,
		0xb77: PACKET.ZC.PC_PURCHASE_ITEMLIST2,
		0xb6f: PACKET.HC.ACCEPT_MAKECHAR,
		0xb8d: PACKET.ZC.REPUTE_INFO,

		//CASH SHOP OPEN
		0x0b6e: PACKET.ZC.SE_CASHSHOP_OPEN,
		0x0a2b: PACKET.ZC.SE_CASHSHOP_OPEN2,
		0x0845: PACKET.ZC.SE_CASHSHOP_OPEN3,
		0x0844: PACKET.CZ.SE_CASHSHOP_OPEN1,
		0x0b6d: PACKET.CZ.SE_CASHSHOP_OPEN2,
		//CASH SHOP LIST ITEM
		0x8c9: PACKET.CZ.PC_CASH_POINT_ITEMLIST,
		0x287: PACKET.ZC.PC_CASH_POINT_ITEMLIST,
		0x35c: PACKET.CZ.OPEN_SIMPLE_CASHSHOP_ITEMLIST,
		0x8ca: PACKET.ZC.ACK_SCHEDULER_CASHITEM,
		0x846: PACKET.CZ.REQ_SE_CASH_TAB_CODE,
		0x8c0: PACKET.ZC.ACK_SE_CASH_ITEM_LIST2,
		//CASH SHOP PURCHASE
		0X848: PACKET.CZ.SE_PC_BUY_CASHITEM_LIST,
		0x849: PACKET.ZC.SE_PC_BUY_CASHITEM_RESULT,
		0x288: PACKET.CZ.PC_BUY_CASH_POINT_ITEM,
		0x84a: PACKET.CZ.CASH_SHOP_CLOSE,
		0x84a: PACKET.CZ.NPC_TRADE_QUIT,
		0xae2: PACKET.ZC.UI_OPEN,
		0x9cd: PACKET.ZC.MSG_COLOR
	};
});
