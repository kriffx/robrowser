/**
 * DB/Items/ItemRandomOptionTable.js
 *
 * Item Random Options table
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 * @author Vincent Thibault, Thapakorn Tantirattanapong
 */

define(function () {
  "use strict";


  return {
    1: "MaxHP +{0}", //Max HP: ^000088+{0}^000000",
    2: "MaxSP +{0}", //Max SP: ^000088+{0}^000000",
    3: "STR +{0}", //Str: ^000088+{0}^000000",
    4: "AGI +{0}", //Agi: ^000088+{0}^000000",
    5: "VIT +{0}", //Vit: ^000088+{0}^000000",
    6: "INT +{0}", //Int: ^000088+{0}^000000",
    7: "DEX +{0}", //Dex: ^000088+{0}^000000",
    8: "LUK +{0}", //Luk: ^000088+{0}^000000",
    9: "MaxHP +{0}%", //RDMOPT_VAR_MAXHPPERCENT",
    10: "MaxSP +{0}%", //"RDMOPT_VAR_MAXSPPERCENT",
    11: "HP regen +{0}%", //"RDMOPT_VAR_HPACCELERATION",
    12: "SP regen +{0}%", //"RDMOPT_VAR_SPACCELERATION",
    13: "ATK +{0}%", //"RDMOPT_VAR_ATKPERCENT",
    14: "MATK +{0}%", //"RDMOPT_VAR_MAGICATKPERCENT",
    15: "ASPD +{0}", //"RDMOPT_VAR_PLUSASPD",
    16: "Delay after attack -{0}%", //"RDMOPT_VAR_PLUSASPDPERCENT",
    17: "ATK +{0}", //"RDMOPT_VAR_ATTPOWER",
    18: "HIT +{0}", //"RDMOPT_VAR_HITSUCCESSVALUE",
    19: "MATK +{0}", //"RDMOPT_VAR_ATTMPOWER",
    20: "DEF +{0}", //"RDMOPT_VAR_ITEMDEFPOWER",
    21: "MDEF +{0}", //"RDMOPT_VAR_MDEFPOWER",
    22: "FLEE +{0}", //"RDMOPT_VAR_AVOIDSUCCESSVALUE",
    23: "Perfect dodge +{0}", //"RDMOPT_VAR_PLUSAVOIDSUCCESSVALUE",
    24: "CRIT +{0}", //"RDMOPT_VAR_CRITICALSUCCESSVALUE",
    25: "Neutral elemental resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_NOTHING",
    26: "Water elemental resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_WATER",
    27: "Earth elemental resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_GROUND",
    28: "Fire elemental resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_FIRE",
    29: "Wind elemental resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_WIND",
    30: "Poison elemental resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_POISON",
    31: "Holy elemental resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_SAINT",
    32: "Shadow elemental resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_DARKNESS",
    33: "Ghost elemental resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_TELEKINESIS",
    34: "Undead elemental resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_UNDEAD",
    35: "All elementals resistance +{0}%", //"RDMOPT_ATTR_TOLERACE_ALL",
    36: "DEF against Neutral monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_NOTHING_USER",
    37: "ATK against Neutral monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_NOTHING_TARGET",
    38: "DEF against from Water monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_WATER_USER",
    39: "ATK against Water monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_WATER_TARGET",
    40: "DEF against Earth monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_GROUND_USER",
    41: "ATK against Earth monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_GROUND_TARGET",
    42: "DEF against Fire monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_FIRE_USER",
    43: "ATK against Fire monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_FIRE_TARGET",
    44: "DEF against Wind monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_WIND_USER",
    45: "ATK against Wind monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_WIND_TARGET",
    46: "DEF against Poison monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_POISON_USER",
    47: "ATK against Poison monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_POISON_TARGET",
    48: "DEF against Holy monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_SAINT_USER",
    49: "ATK against Holy monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_SAINT_TARGET",
    50: "DEF against Shadow monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_DARKNESS_USER",
    51: "ATK against Shadow monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_DARKNESS_TARGET",
    52: "DEF against Ghost monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_TELEKINESIS_USER",
    53: "ATK against Ghost monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_TELEKINESIS_TARGET",
    54: "DEF against Undead monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_UNDEAD_USER",
    55: "ATK against Undead monster +{0}%", //"RDMOPT_DAMAGE_PROPERTY_UNDEAD_TARGET",
    56: "MDEF against Neutral monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_NOTHING_USER",
    57: "MATK against Neutral monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_NOTHING_TARGET",
    58: "MDEF against Water monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_WATER_USER",
    59: "MATK against Water monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_WATER_TARGET",
    60: "MDEF against Earth monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_GROUND_USER",
    61: "MATK against Earth monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_GROUND_TARGET",
    62: "MDEF against Fire monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_FIRE_USER",
    63: "MATK against Fire monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_FIRE_TARGET",
    64: "MDEF against Wind monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_WIND_USER",
    65: "MATK against Wind monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_WIND_TARGET",
    66: "MDEF against Poison monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_POISON_USER",
    67: "MATK against Poison monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_POISON_TARGET",
    68: "MDEF against Holy monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_SAINT_USER",
    69: "MATK against Holy monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_SAINT_TARGET",
    70: "MDEF against Shadow monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_DARKNESS_USER",
    71: "MATK against Shadow monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_DARKNESS_TARGET",
    72: "MDEF against Ghost monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_TELEKINESIS_USER",
    73: "MATK against Ghost monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_TELEKINESIS_TARGET",
    74: "MDEF against Undead monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_UNDEAD_USER",
    75: "MATK against Undead monster +{0}%", //"RDMOPT_MDAMAGE_PROPERTY_UNDEAD_TARGET",
    76: "Armor element: Neutral", //"RDMOPT_BODY_ATTR_NOTHING",
    77: "Armor element: Water", //"RDMOPT_BODY_ATTR_WATER",
    78: "Armor element: Earth", //"RDMOPT_BODY_ATTR_GROUND",
    79: "Armor element: Fire", //"RDMOPT_BODY_ATTR_FIRE",
    80: "Armor element: Wind", //"RDMOPT_BODY_ATTR_WIND",
    81: "Armor element: Poison", //"RDMOPT_BODY_ATTR_POISON",
    82: "Armor element: Holy", //"RDMOPT_BODY_ATTR_SAINT",
    83: "Armor element: Shadow", //"RDMOPT_BODY_ATTR_DARKNESS",
    84: "Armor element: Ghost", //"RDMOPT_BODY_ATTR_TELEKINESIS",
    85: "Armor element: Undead", //"RDMOPT_BODY_ATTR_UNDEAD",
    86: "RDMOPT_BODY_ATTR_ALL", //"RDMOPT_BODY_ATTR_ALL",
    87: "DEF against Formless monster +{0}%", //"RDMOPT_RACE_TOLERACE_NOTHING",
    88: "DEF against Undead monster +{0}%", //"RDMOPT_RACE_TOLERACE_UNDEAD",
    89: "DEF against Brute monster +{0}%", //"RDMOPT_RACE_TOLERACE_ANIMAL",
    90: "DEF against Plant monster +{0}%", //"RDMOPT_RACE_TOLERACE_PLANT",
    91: "DEF against Insect monster +{0}%", //"RDMOPT_RACE_TOLERACE_INSECT",
    92: "DEF against Fish monster +{0}%", //"RDMOPT_RACE_TOLERACE_FISHS",
    93: "DEF against Demon monster +{0}%", //"RDMOPT_RACE_TOLERACE_DEVIL",
    94: "DEF against Demihuman monster +{0}%", //"RDMOPT_RACE_TOLERACE_HUMAN",
    95: "DEF against Angel monster +{0}%", //"RDMOPT_RACE_TOLERACE_ANGEL",
    96: "DEF against Dragon monster +{0}%", //"RDMOPT_RACE_TOLERACE_DRAGON",
    97: "ATK against Formless monster +{0}%", //"RDMOPT_RACE_DAMAGE_NOTHING",
    98: "ATK against Undead monster +{0}%", //"RDMOPT_RACE_DAMAGE_UNDEAD",
    99: "ATK against Brute monster +{0}%", //"RDMOPT_RACE_DAMAGE_ANIMAL",
    100: "ATK against Plant monster +{0}%", // "RDMOPT_RACE_DAMAGE_PLANT",
    101: "ATK against Insect monster +{0}%", // "RDMOPT_RACE_DAMAGE_INSECT",
    102: "ATK against Fish monster +{0}%", // "RDMOPT_RACE_DAMAGE_FISHS",
    103: "ATK against Demon monster +{0}%", // "RDMOPT_RACE_DAMAGE_DEVIL",
    104: "ATK against Demihuman monster +{0}%", // "RDMOPT_RACE_DAMAGE_HUMAN",
    105: "ATK against Angel monster +{0}%", // "RDMOPT_RACE_DAMAGE_ANGEL",
    106: "ATK against Dragon monster +{0}%", // "RDMOPT_RACE_DAMAGE_DRAGON",
    107: "MATK against Formless monster +{0}%", // "RDMOPT_RACE_MDAMAGE_NOTHING",
    108: "MATK against Undead monster +{0}%", // "RDMOPT_RACE_MDAMAGE_UNDEAD",
    109: "MATK against Brute monster +{0}%", // "RDMOPT_RACE_MDAMAGE_ANIMAL",
    110: "MATK against Plant monster +{0}%", // "RDMOPT_RACE_MDAMAGE_PLANT",
    111: "MATK against Insect monster +{0}%", // "RDMOPT_RACE_MDAMAGE_INSECT",
    112: "MATK against Fish monster +{0}%", // "RDMOPT_RACE_MDAMAGE_FISHS",
    113: "MATK against Devil monster +{0}%", // "RDMOPT_RACE_MDAMAGE_DEVIL",
    114: "MATK against Demihuman monster +{0}%", // "RDMOPT_RACE_MDAMAGE_HUMAN",
    115: "MATK against Angel monster +{0}%", // "RDMOPT_RACE_MDAMAGE_ANGEL",
    116: "MATK against Dragon monster +{0}%", // "RDMOPT_RACE_MDAMAGE_DRAGON",
    117: "CRIT +{0} against Formless monster", // "RDMOPT_RACE_CRI_PERCENT_NOTHING",
    118: "CRIT +{0} against Undead monster", // "RDMOPT_RACE_CRI_PERCENT_UNDEAD",
    119: "CRIT +{0} against Brute monster", // "RDMOPT_RACE_CRI_PERCENT_ANIMAL",
    120: "CRIT +{0} against Plant monster", // "RDMOPT_RACE_CRI_PERCENT_PLANT",
    121: "CRIT +{0} against Insect monster", // "RDMOPT_RACE_CRI_PERCENT_INSECT",
    122: "CRIT +{0} against Fish monster", // "RDMOPT_RACE_CRI_PERCENT_FISHS",
    123: "CRIT +{0} against Demon monster", // "RDMOPT_RACE_CRI_PERCENT_DEVIL",
    124: "CRIT +{0} against Demihuman monster", // "RDMOPT_RACE_CRI_PERCENT_HUMAN",
    125: "CRIT +{0} against Angel monster", // "RDMOPT_RACE_CRI_PERCENT_ANGEL",
    126: "CRIT +{0} against Dragon monster", // "RDMOPT_RACE_CRI_PERCENT_DRAGON",
    127: "Ignores {0}% DEF of Formless monster", // "RDMOPT_RACE_IGNORE_DEF_PERCENT_NOTHING",
    128: "Ignores {0}% DEF of Undead monster", // "RDMOPT_RACE_IGNORE_DEF_PERCENT_UNDEAD",
    129: "Ignores {0}% DEF of Brute monster", // "RDMOPT_RACE_IGNORE_DEF_PERCENT_ANIMAL",
    130: "Ignores {0}% DEF of Plant monster", // "RDMOPT_RACE_IGNORE_DEF_PERCENT_PLANT",
    131: "Ignores {0}% DEF of Insect monster", // "RDMOPT_RACE_IGNORE_DEF_PERCENT_INSECT",
    132: "Ignores {0}% DEF of Fish monster", // "RDMOPT_RACE_IGNORE_DEF_PERCENT_FISHS",
    133: "Ignores {0}% DEF of Demon monster", // "RDMOPT_RACE_IGNORE_DEF_PERCENT_DEVIL",
    134: "Ignores {0}% DEF of Demihuman monster", // "RDMOPT_RACE_IGNORE_DEF_PERCENT_HUMAN",
    135: "Ignores {0}% DEF of Angel monster", // "RDMOPT_RACE_IGNORE_DEF_PERCENT_ANGEL",
    136: "Ignores {0}% DEF of Dragon monster", // "RDMOPT_RACE_IGNORE_DEF_PERCENT_DRAGON",
    137: "Ignores {0}% MDEF of Formless monster", // "RDMOPT_RACE_IGNORE_MDEF_PERCENT_NOTHING",
    138: "Ignores {0}% MDEF of Undead monster", // "RDMOPT_RACE_IGNORE_MDEF_PERCENT_UNDEAD",
    139: "Ignores {0}% MDEF of Brute monster", // "RDMOPT_RACE_IGNORE_MDEF_PERCENT_ANIMAL",
    140: "Ignores {0}% MDEF of Plant monster", // "RDMOPT_RACE_IGNORE_MDEF_PERCENT_PLANT",
    141: "Ignores {0}% MDEF of Insect monster", // "RDMOPT_RACE_IGNORE_MDEF_PERCENT_INSECT",
    142: "Ignores {0}% MDEF of Fish monster", // "RDMOPT_RACE_IGNORE_MDEF_PERCENT_FISHS",
    143: "Ignores {0}% MDEF of Demon monster", // "RDMOPT_RACE_IGNORE_MDEF_PERCENT_DEVIL",
    144: "Ignores {0}% MDEF of Demihuman monster", // "RDMOPT_RACE_IGNORE_MDEF_PERCENT_HUMAN",
    145: "Ignores {0}% MDEF of Angel monster", // "RDMOPT_RACE_IGNORE_MDEF_PERCENT_ANGEL",
    146: "Ignores {0}% MDEF of Dragon monster", // "RDMOPT_RACE_IGNORE_MDEF_PERCENT_DRAGON",
    147: "ATK against Normal monster +{0}%", // "RDMOPT_CLASS_DAMAGE_NORMAL_TARGET",
    148: "ATK against Boss monster +{0}%", // "RDMOPT_CLASS_DAMAGE_BOSS_TARGET",
    149: "DEF against Normal monster +{0}%", // "RDMOPT_CLASS_DAMAGE_NORMAL_USER",
    150: "DEF against Boss monster +{0}%", // "RDMOPT_CLASS_DAMAGE_BOSS_USER",
    151: "MATK against Normal monster +{0}%", // "RDMOPT_CLASS_MDAMAGE_NORMAL",
    152: "MATK against Boss monster +{0}%", // "RDMOPT_CLASS_MDAMAGE_BOSS",
    153: "Ignores {0}% DEF of Normal monster", // "RDMOPT_CLASS_IGNORE_DEF_PERCENT_NORMAL",
    154: "Ignores {0}% DEF of Boss monster", // "RDMOPT_CLASS_IGNORE_DEF_PERCENT_BOSS",
    155: "Ignores {0}% MDEF of Normal monster", // "RDMOPT_CLASS_IGNORE_MDEF_PERCENT_NORMAL",
    156: "Ignores {0}% MDEF of Boss monster", // "RDMOPT_CLASS_IGNORE_MDEF_PERCENT_BOSS",
    157: "ATK against Small size monster +{0}%", // "โจมตีศัตรู^880088ขนาดเล็ก^000000แรงขึ้น ^000088+{0}%^000000", //RDMOPT_DAMAGE_SIZE_SMALL_TARGET
    158: "ATK against Medium size monster +{0}%", // "โจมตีศัตรู^880088ขนาดกลาง^000000แรงขึ้น ^000088+{0}%^000000", //RDMOPT_DAMAGE_SIZE_MIDIUM_TARGET
    159: "ATK against Large size monster +{0}%", // "โจมตีศัตรู^880088ขนาดใหญ่^000000แรงขึ้น ^000088+{0}%^000000", //RDMOPT_DAMAGE_SIZE_LARGE_TARGET
    160: "DEF against Small size monster +{0}%", // "RDMOPT_DAMAGE_SIZE_SMALL_USER",
    161: "DEF against Medium size monster +{0}%", // "RDMOPT_DAMAGE_SIZE_MIDIUM_USER",
    162: "DEF against Large size monster +{0}%", // "RDMOPT_DAMAGE_SIZE_LARGE_USER",
    163: "Nullify weapon's damage size penalty", // "RDMOPT_DAMAGE_SIZE_PERFECT",
    164: "Critical attack +{0}%", // "RDMOPT_DAMAGE_CRI_TARGET",
    165: "Critical damage -{0}%", // "RDMOPT_DAMAGE_CRI_USER",
    166: "Long range physical attack +{0}%", // "RDMOPT_RANGE_ATTACK_DAMAGE_TARGET",
    167: "Long range physical damage -{0}%", // "RDMOPT_RANGE_ATTACK_DAMAGE_USER",
    168: "Healing skills +{0}%", // "RDMOPT_HEAL_VALUE",
    169: "Restoration gained from Healing skills +{0}%", // "RDMOPT_HEAL_MODIFY_PERCENT",
    170: "Variable cast time -{0}%", // "RDMOPT_DEC_SPELL_CAST_TIME",
    171: "After cast delay -{0}%", // "RDMOPT_DEC_SPELL_DELAY_TIME",
    172: "Reduces SP cost by {0}%", // "RDMOPT_DEC_SP_CONSUMPTION",
    173: "RDMOPT_HP_DRAIN", // "RDMOPT_HP_DRAIN",
    174: "RDMOPT_SP_DRAIN", // "RDMOPT_SP_DRAIN",
    175: "Weapon element: Neutral", // "RDMOPT_WEAPON_ATTR_NOTHING",
    176: "Weapon element: Water", // "RDMOPT_WEAPON_ATTR_WATER",
    177: "Weapon element: Earth", // "RDMOPT_WEAPON_ATTR_GROUND",
    178: "Weapon element: Fire", // "RDMOPT_WEAPON_ATTR_FIRE",
    179: "Weapon element: Wind", // "RDMOPT_WEAPON_ATTR_WIND",
    180: "Weapon element: Poison", // "RDMOPT_WEAPON_ATTR_POISON",
    181: "Weapon element: Holy", // "RDMOPT_WEAPON_ATTR_SAINT",
    182: "Weapon element: Shadow", // "RDMOPT_WEAPON_ATTR_DARKNESS",
    183: "Weapon element: Ghost", // "RDMOPT_WEAPON_ATTR_TELEKINESIS",
    184: "Weapon element: Undead", // "RDMOPT_WEAPON_ATTR_UNDEAD",
    185: "Indestructible in battle", // "RDMOPT_WEAPON_INDESTRUCTIBLE",
    186: "Indestructible in battle", // "RDMOPT_BODY_INDESTRUCTIBLE",
    187: "MATK against Small size monster +{0}%", // "RDMOPT_MDAMAGE_SIZE_SMALL_TARGET",
    188: "MATK against Medium size monster +{0}%", // "RDMOPT_MDAMAGE_SIZE_MIDIUM_TARGET",
    189: "MATK against Large size monster +{0}%", // "RDMOPT_MDAMAGE_SIZE_LARGE_TARGET",
    190: "MDEF against Small size monster +{0}%", // "RDMOPT_MDAMAGE_SIZE_SMALL_USER",
    191: "MDEF against Medium size monster +{0}%", // "RDMOPT_MDAMAGE_SIZE_MIDIUM_USER",
    192: "MDEF against Large size monster +{0}%", // "RDMOPT_MDAMAGE_SIZE_LARGE_USER",
  };
});
