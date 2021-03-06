import { Query } from '@data/poe'
import { Language } from './language.type'
import { StatType } from './stat.type'

export interface Item {
  source?: string
  rarity?: ItemRarity
  category?: ItemCategory
  nameId?: string
  name?: string
  typeId?: string
  type?: string
  level?: ItemValue
  corrupted?: boolean
  unidentified?: boolean
  veiled?: boolean
  blighted?: boolean
  damage?: ItemWeaponDamage
  sockets?: ItemSocket[]
  properties?: ItemProperties
  requirements?: ItemRequirements
  stats?: ItemStat[]
  influences?: ItemInfluences
  note?: string
}

export interface ItemValue {
  text: string
  value?: number
  min?: number
  max?: number
  tier?: ItemValueTier
}

export interface ItemValueTier {
  min?: number
  max?: number
}

export enum ItemRarity {
  Normal = 'normal',
  Magic = 'magic',
  Rare = 'rare',
  Unique = 'unique',
  Currency = 'currency',
  Gem = 'gem',
  DivinationCard = 'divinationcard',
  NonUnique = 'nonunique',
}

export enum ItemCategory {
  Weapon = 'weapon',
  WeaponOne = 'weapon.one',
  WeaponOneMelee = 'weapon.onemelee',
  WeaponTwoMelee = 'weapon.twomelee',
  WeaponBow = 'weapon.bow',
  WeaponClaw = 'weapon.claw',
  WeaponDagger = 'weapon.dagger',
  WeaponRunedagger = 'weapon.runedagger',
  WeaponOneAxe = 'weapon.oneaxe',
  WeaponOneMace = 'weapon.onemace',
  WeaponOneSword = 'weapon.onesword',
  WeaponSceptre = 'weapon.sceptre',
  WeaponStaff = 'weapon.staff',
  WeaponWarstaff = 'weapon.warstaff',
  WeaponTwoAxe = 'weapon.twoaxe',
  WeaponTwoMace = 'weapon.twomace',
  WeaponTwoSword = 'weapon.twosword',
  WeaponWand = 'weapon.wand',
  WeaponRod = 'weapon.rod',
  Armour = 'armour',
  ArmourChest = 'armour.chest',
  ArmourBoots = 'armour.boots',
  ArmourGloves = 'armour.gloves',
  ArmourHelmet = 'armour.helmet',
  ArmourShield = 'armour.shield',
  ArmourQuiver = 'armour.quiver',
  Accessory = 'accessory',
  AccessoryAmulet = 'accessory.amulet',
  AccessoryBelt = 'accessory.belt',
  AccessoryRing = 'accessory.ring',
  AccessoryTrinket = 'accessory.trinket',
  Gem = 'gem',
  GemActivegem = 'gem.activegem',
  GemSupportGem = 'gem.supportgem',
  GemSupportGemplus = 'gem.supportgemplus',
  Jewel = 'jewel',
  JewelBase = 'jewel.base',
  JewelAbyss = 'jewel.abyss',
  JewelCluster = 'jewel.cluster',
  Flask = 'flask',
  Map = 'map',
  MapFragment = 'map.fragment',
  MapScarab = 'map.scarab',
  Watchstone = 'watchstone',
  Leaguestone = 'leaguestone',
  Prophecy = 'prophecy',
  Card = 'card',
  MonsterBeast = 'monster.beast',
  MonsterSample = 'monster.sample',
  HeistEquipment = 'heistequipment',
  HeistGear = 'heistequipment.heistweapon',
  HeistTool = 'heistequipment.heisttool',
  HeistCloak = 'heistequipment.heistutility',
  HeistUtility = 'heistequipment.heistreward',
  HeistMission = 'heistmission',
  HeistContract = 'heistmission.contract',
  HeistBlueprint = 'heistmission.blueprint',
  Currency = 'currency',
  CurrencyPiece = 'currency.piece',
  CurrencyResonator = 'currency.resonator',
  CurrencyFossil = 'currency.fossil',
  CurrencyIncubator = 'currency.incubator',
  CurrencyHeistTarget = 'currency.heistobjective',
  CurrencySeed = 'currency.seed',
  CurrencyWildSeed = 'currency.wildseed',
  CurrencyVividSeed = 'currency.vividseed',
  CurrencyPrimalSeed = 'currency.primalseed',
  CurrencySeedBooster = 'currency.seedbooster',
}

export interface ItemWeaponDamage {
  dps?: ItemValue
  edps?: ItemValue
  pdps?: ItemValue
}

export enum ItemSocketColor {
  Red = 'R',
  Green = 'G',
  Blue = 'B',
  White = 'W',
  Abyss = 'A',
}

export interface ItemSocket {
  color: ItemSocketColor
  linked: boolean
}

export interface ItemProperties {
  weaponPhysicalDamage?: ItemValueProperty
  weaponElementalDamage?: ItemValueProperty[]
  weaponChaosDamage?: ItemValueProperty
  weaponCriticalStrikeChance?: ItemValueProperty
  weaponAttacksPerSecond?: ItemValueProperty
  weaponRange?: ItemProperty
  shieldBlockChance?: ItemValueProperty
  armourArmour?: ItemValueProperty
  armourEvasionRating?: ItemValueProperty
  armourEnergyShield?: ItemValueProperty
  stackSize?: ItemProperty
  gemLevel?: ItemValueProperty
  gemQualityType?: ItemGemQualityType
  quality?: ItemValueProperty
  qualityType?: ItemQualityType
  gemExperience?: ItemValueProperty
  mapTier?: ItemProperty
  mapQuantity?: ItemProperty
  mapRarity?: ItemProperty
  mapPacksize?: ItemProperty
  prophecyText?: string
  durability?: ItemValueProperty
  storedExperience?: ItemValueProperty
}

export interface ItemProperty {
  value: string
  augmented: boolean
}

export interface ItemValueProperty {
  value: ItemValue
  augmented: boolean
}

export enum ItemQualityType {
  Default = 0,
  ElementalDamage = 1,
  CasterModifiers = 2,
  AttackModifiers = 3,
  DefenceModifiers = 4,
  LifeAndManaModifiers = 5,
  ResistanceModifiers = 6,
  AttributeModifiers = 7,
}

export enum ItemGemQualityType {
  Default = 0,
  Anomalous = 1,
  Divergent = 2,
  Phantasmal = 3,
}

export interface ItemStat {
  id: string
  predicate: string
  tradeId: string
  mod: string
  negated: boolean
  type: StatType
  values: ItemValue[]
  option: boolean
  indistinguishable: string
}

export interface ItemRequirements {
  level?: number
  int?: number
  str?: number
  dex?: number
}

export interface ItemInfluences {
  shaper?: boolean
  crusader?: boolean
  hunter?: boolean
  elder?: boolean
  redeemer?: boolean
  warlord?: boolean
}

export interface ItemsMap {
  label: string
  items: Item[]
}

export interface ExportedItem {
  sections: Section[]
}

export interface Section {
  content: string
  lines: string[]
}

export enum ItemSection {
  Corrupted,
  Unidentified,
  Influences,
  ItemLevel,
  Note,
  Properties,
  Rartiy,
  Requirements,
  Sockets,
  Stats,
  Veiled,
  Flask,
  Prophecy,
  Experience,
}

export interface ItemSectionParserService {
  section: ItemSection
  optional: boolean
  parse(item: ExportedItem, target: Item): Section | Section[]
}

export interface ItemSearchFiltersService {
  add(item: Item, language: Language, query: Query): void
}
