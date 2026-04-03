export type FactorioDataDump = {
  sprite: Partial<Record<string, SpritePrototype>>;
  item: Partial<Record<string, ItemPrototype<"item">>>;
  recipe: Partial<Record<string, RecipePrototype>>;
  quality: Partial<Record<string, QualityPrototype>>;
  fluid: Partial<Record<string, FluidPrototype>>;
  tile: Partial<Record<string, unknown>>;
  "space-location": Partial<
    Record<string, SpaceLocationPrototype<"space-location">>
  >;
  "asteroid-chunk": Partial<Record<string, AsteroidChunkPrototype>>;
  "recipe-category": Partial<Record<string, RecipeCategory>>;
  "burner-usage": Partial<Record<string, BurnerUsagePrototype>>;
  "damage-type": Partial<Record<string, DamageType>>;
  container: Partial<Record<string, ContainerPrototype<"container">>>;
  "simple-entity": Partial<Record<string, unknown>>;
  furnace: Partial<Record<string, FurnacePrototype>>;
  fish: Partial<Record<string, unknown>>;
  boiler: Partial<Record<string, BoilerPrototype>>;
  "electric-pole": Partial<Record<string, unknown>>;
  generator: Partial<Record<string, GeneratorPrototype>>;
  "offshore-pump": Partial<Record<string, OffshorePumpPrototype>>;
  inserter: Partial<Record<string, InserterPrototype>>;
  pipe: Partial<Record<string, unknown>>;
  "pipe-to-ground": Partial<Record<string, unknown>>;
  "assembling-machine": Partial<
    Record<string, AssemblingMachinePrototype<"assembling-machine">>
  >;
  wall: Partial<Record<string, unknown>>;
  lab: Partial<Record<string, LabPrototype>>;
  car: Partial<Record<string, unknown>>;
  gate: Partial<Record<string, unknown>>;
  "solar-panel": Partial<Record<string, SolarPanelPrototype>>;
  accumulator: Partial<Record<string, AccumulatorPrototype>>;
  "land-mine": Partial<Record<string, unknown>>;
  "logistic-container": Partial<Record<string, LogisticContainerPrototype>>;
  "rocket-silo": Partial<Record<string, RocketSiloPrototype>>;
  "rocket-silo-rocket": Partial<Record<string, RocketSiloRocketPrototype>>;
  "cargo-landing-pad": Partial<Record<string, unknown>>;
  roboport: Partial<Record<string, unknown>>;
  "storage-tank": Partial<Record<string, StorageTankPrototype>>;
  pump: Partial<Record<string, PumpPrototype>>;
  valve: Partial<Record<string, unknown>>;
  beacon: Partial<Record<string, BeaconProtptype>>;
  "smoke-with-trigger": Partial<Record<string, unknown>>;
  sticker: Partial<Record<string, unknown>>;
  reactor: Partial<Record<string, ReactorPrototype>>;
  "heat-pipe": Partial<Record<string, unknown>>;
  "spider-vehicle": Partial<Record<string, unknown>>;
  "burner-generator": Partial<Record<string, unknown>>;
  "cargo-pod": Partial<Record<string, unknown>>;
  "temporary-container": Partial<Record<string, unknown>>;
  "transport-belt": Partial<Record<string, TransportBeltPrototype>>;
  "underground-belt": Partial<Record<string, UndergroundBeltPrototype>>;
  splitter: Partial<Record<string, SplitterPrototype>>;
  loader: Partial<Record<string, unknown>>;
  "loader-1x1": Partial<Record<string, unknown>>;
  "linked-belt": Partial<Record<string, unknown>>;
  "lane-splitter": Partial<Record<string, unknown>>;
  "delayed-active-trigger": Partial<Record<string, unknown>>;
  fire: Partial<Record<string, unknown>>;
  "mining-drill": Partial<Record<string, MiningDrillPrototype>>;
  stream: Partial<Record<string, unknown>>;
  resource: Partial<Record<string, ResourceEntityPrototype>>;
  turret: Partial<Record<string, unknown>>;
  "ammo-turret": Partial<Record<string, unknown>>;
  "electric-turret": Partial<Record<string, unknown>>;
  "artillery-turret": Partial<Record<string, unknown>>;
  unit: Partial<Record<string, unknown>>;
  "unit-spawner": Partial<Record<string, unknown>>;
  "spider-unit": Partial<Record<string, unknown>>;
  "straight-rail": Partial<Record<string, unknown>>;
  "half-diagonal-rail": Partial<Record<string, unknown>>;
  "curved-rail-a": Partial<Record<string, unknown>>;
  "curved-rail-b": Partial<Record<string, unknown>>;
  "rail-ramp": Partial<Record<string, unknown>>;
  "elevated-straight-rail": Partial<Record<string, unknown>>;
  "elevated-half-diagonal-rail": Partial<Record<string, unknown>>;
  "elevated-curved-rail-a": Partial<Record<string, unknown>>;
  "elevated-curved-rail-b": Partial<Record<string, unknown>>;
  "rail-support": Partial<Record<string, unknown>>;
  locomotive: Partial<Record<string, unknown>>;
  "cargo-wagon": Partial<Record<string, unknown>>;
  "fluid-wagon": Partial<Record<string, unknown>>;
  "artillery-wagon": Partial<Record<string, unknown>>;
  tree: Partial<Record<string, unknown>>;
  "combat-robot": Partial<Record<string, unknown>>;
  "construction-robot": Partial<Record<string, unknown>>;
  "logistic-robot": Partial<Record<string, unknown>>;
  capsule: Partial<Record<string, unknown>>;
  "repair-tool": Partial<Record<string, unknown>>;
  tool: Partial<Record<string, ToolPrototype<"tool">>>;
  module: Partial<Record<string, ModulePrototype>>;
  ammo: Partial<Record<string, AmmoItemPrototype>>;
  gun: Partial<Record<string, GunPrototype>>;
  armor: Partial<Record<string, ArmorPrototype>>;
  "item-group": Partial<Record<string, ItemGroup>>;
  "item-subgroup": Partial<Record<string, ItemSubGroup>>;
  "ammo-category": Partial<Record<string, AmmoCategory>>;
  "fuel-category": Partial<Record<string, FuelCategory>>;
  "resource-category": Partial<Record<string, ResourceCategory>>;
  "module-category": Partial<Record<string, ModuleCategory>>;
  "equipment-grid": Partial<Record<string, unknown>>;
  "equipment-category": Partial<Record<string, unknown>>;
  projectile: Partial<Record<string, unknown>>;
  "artillery-projectile": Partial<Record<string, unknown>>;
  beam: Partial<Record<string, unknown>>;
  technology: Partial<Record<string, TechnologyPrototype>>;
  "build-entity-achievement": Partial<Record<string, unknown>>;
  "research-achievement": Partial<Record<string, unknown>>;
  "use-entity-in-energy-production-achievement": Partial<
    Record<string, unknown>
  >;
  "produce-achievement": Partial<Record<string, unknown>>;
  "complete-objective-achievement": Partial<Record<string, unknown>>;
  "group-attack-achievement": Partial<Record<string, unknown>>;
  "construct-with-robots-achievement": Partial<Record<string, unknown>>;
  "deconstruct-with-robots-achievement": Partial<Record<string, unknown>>;
  "deliver-by-robots-achievement": Partial<Record<string, unknown>>;
  "train-path-achievement": Partial<Record<string, unknown>>;
  "player-damaged-achievement": Partial<Record<string, unknown>>;
  "deplete-resource-achievement": Partial<Record<string, unknown>>;
  "produce-per-hour-achievement": Partial<Record<string, unknown>>;
  "dont-use-entity-in-energy-production-achievement": Partial<
    Record<string, unknown>
  >;
  "research-with-science-pack-achievement": Partial<Record<string, unknown>>;
  "kill-achievement": Partial<Record<string, unknown>>;
  "destroy-cliff-achievement": Partial<Record<string, unknown>>;
  "shoot-achievement": Partial<Record<string, unknown>>;
  "combat-robot-count-achievement": Partial<Record<string, unknown>>;
  "dont-kill-manually-achievement": Partial<Record<string, unknown>>;
  "dont-craft-manually-achievement": Partial<Record<string, unknown>>;
  "dont-build-entity-achievement": Partial<Record<string, unknown>>;
  achievement: Partial<Record<string, unknown>>;
  "airborne-pollutant": Partial<Record<string, AirbornePollutantPrototype>>;
  "fluid-turret": Partial<Record<string, unknown>>;
  "arithmetic-combinator": Partial<Record<string, unknown>>;
  "decider-combinator": Partial<Record<string, unknown>>;
  "constant-combinator": Partial<Record<string, unknown>>;
  "programmable-speaker": Partial<Record<string, unknown>>;
  "power-switch": Partial<Record<string, unknown>>;
  "display-panel": Partial<Record<string, unknown>>;
  "selector-combinator": Partial<Record<string, unknown>>;
  "night-vision-equipment": Partial<Record<string, unknown>>;
  "energy-shield-equipment": Partial<Record<string, unknown>>;
  "battery-equipment": Partial<Record<string, unknown>>;
  "solar-panel-equipment": Partial<Record<string, unknown>>;
  "generator-equipment": Partial<Record<string, unknown>>;
  "active-defense-equipment": Partial<Record<string, unknown>>;
  "movement-bonus-equipment": Partial<Record<string, unknown>>;
  "roboport-equipment": Partial<Record<string, unknown>>;
  "belt-immunity-equipment": Partial<Record<string, unknown>>;
  planet: Partial<Record<string, PlanetPrototype>>;
  "surface-property": Partial<Record<string, SurfacePropertyPrototype>>;
  "deliver-category": Partial<Record<string, unknown>>;
  "chain-active-trigger": Partial<Record<string, unknown>>;
  "space-platform-hub": Partial<Record<string, SpacePlatformHubPrototype>>;
  "cargo-bay": Partial<Record<string, CargoBayPrototype>>;
  "asteroid-collector": Partial<Record<string, unknown>>;
  thruster: Partial<Record<string, ThrusterPrototype>>;
  "agricultural-tower": Partial<Record<string, unknown>>;
  "lightning-attractor": Partial<Record<string, unknown>>;
  "fusion-generator": Partial<Record<string, FusionGeneratorPrototype>>;
  "fusion-reactor": Partial<Record<string, FusionReactorPrototype>>;
  lightning: Partial<Record<string, unknown>>;
  "segmented-unit": Partial<Record<string, unknown>>;
  segment: Partial<Record<string, unknown>>;
  plant: Partial<Record<string, PlantPrototype>>;
  "capture-robot": Partial<Record<string, unknown>>;
  asteroid: Partial<Record<string, AsteroidPrototype>>;
  "space-platform-starter-pack": Partial<
    Record<string, SpacePlatformStarterPackPrototype>
  >;
  "create-platform-achievement": Partial<Record<string, unknown>>;
  "change-surface-achievement": Partial<Record<string, unknown>>;
  "space-connection-distance-traveled-achievement": Partial<
    Record<string, unknown>
  >;
  "dont-research-before-researching-achievement": Partial<
    Record<string, unknown>
  >;
  "module-transfer-achievement": Partial<Record<string, unknown>>;
  "equip-armor-achievement": Partial<Record<string, unknown>>;
  "use-item-achievement": Partial<Record<string, unknown>>;
  "place-equipment-achievement": Partial<Record<string, unknown>>;
  "inventory-bonus-equipment": Partial<Record<string, unknown>>;
  "space-connection": Partial<Record<string, SpaceConnectionPrototype>>;
  surface: Partial<Record<string, SurfacePrototype>>;
};

export type Vector = { x: number; y: number } | [number, number];

export type Color =
  | {
      r?: number;
      g?: number;
      b?: number;
      a?: number;
    }
  | [number, number, number, number?];

export type LocalisedString = string | LocalisedString[];

export type PrototypeBase<TType extends string> = {
  type: TType;
  name: string;
  order?: string;
  localised_name?: LocalisedString;
  localised_description?: LocalisedString;
  factoriopedia_description?: LocalisedString;
  subgroup?: string;
  hidden?: boolean;
  hidden_in_factoriopedia?: boolean;
  parameter?: boolean;
  factoriopedia_simulation?: unknown;
};

export type Prototype<TType extends string> = PrototypeBase<TType> & {
  factoriopedia_alternative?: string;
  custom_tooltip_fields?: unknown;
};

export type TriggerEffect = TriggerEffectElement | TriggerEffectElement[];
export type TriggerEffectElement =
  | DamageEntityTriggerEffectItem
  | DamageTileTriggerEffectItem
  | CreateEntityTriggerEffectItem<"create-entity">
  | CreateExplosionTriggerEffectItem
  | CreateFireTriggerEffectItem
  | CreateSmokeTriggerEffectItem
  | CreateTrivialSmokeEffectItem
  | CreateAsteroidChunkEffectItem
  | CreateParticleTriggerEffectItem
  | CreateStickerTriggerEffectItem
  | CreateDecorativesTriggerEffectItem
  | NestedTriggerEffectItem
  | PlaySoundTriggerEffectItem
  | PushBackTriggerEffectItem
  | DestroyCliffsTriggerEffectItem
  | ShowExplosionOnChartTriggerEffectItem
  | InsertItemTriggerEffectItem
  | ScriptTriggerEffectItem
  | SetTileTriggerEffectItem
  | InvokeTileEffectTriggerEffectItem
  | DestroyDecorativesTriggerEffectItem
  | CameraEffectTriggerEffectItem
  | ActivateImpactTriggerEffectItem;

export type DamageParameters = {
  amount: number;
  type: string;
};
export type DamageEntityTriggerEffectItem = TriggerEffectItem & {
  type: "damage";
  damage: DamageParameters;
  apply_damage_to_trees?: boolean;
  vaporize?: boolean;
  use_subtitute?: boolean;
  lower_distance_threshold?: number;
  upper_distance_threshold?: number;
  lower_damage_modifier?: number;
  upper_damage_modifier?: number;
};
export type DamageTileTriggerEffectItem = TriggerEffectItem & {
  type: "damage-tile";
  damage: DamageParameters;
  radius?: number;
};
export type CreateEntityTriggerEffectItem<TType extends string> =
  TriggerEffectItem & {
    type: TType;
    entity_name: string;
    offset_deviation?: unknown;
    trigger_created_entity?: boolean;
    check_buildability?: boolean;
    only_when_visible?: boolean;
    tile_collision_mask?: unknown;
    offsets?: Vector[];
    as_enemy?: boolean;
    ignore_no_enemies_mode?: boolean;
    find_non_colliding_position?: boolean;
    abort_if_over_space?: boolean;
    non_colliding_search_radius?: number;
    non_colliding_search_precision?: number;
    non_colliding_fail_result?: Trigger;
    protected?: boolean;
  };
export type CreateExplosionTriggerEffectItem =
  CreateEntityTriggerEffectItem<"create-explosion"> & {
    max_movement_distance?: number;
    max_movement_distance_deviation?: number;
    inherit_movemement_distance_from_projectile?: boolean;
    cycle_while_moving?: boolean;
  };
export type CreateFireTriggerEffectItem =
  CreateEntityTriggerEffectItem<"create-fire"> & {
    initial_ground_flame_count?: number;
  };
export type CreateSmokeTriggerEffectItem =
  CreateEntityTriggerEffectItem<"create-smoke"> & {
    initial_height?: number;
    speed?: number;
    speed_multiplier?: number;
    speed_multiplier_deviation?: number;
    starting_frame?: number;
    starting_frame_deviation?: number;
    speed_from_center?: number;
    speed_from_center_deviation?: number;
  };
export type CreateTrivialSmokeEffectItem = TriggerEffectItem & {
  type: "create-trivial-smoke";
  smoke_name: string;
  offset_deviation?: unknown;
  offsets?: Vector[];
  initial_height?: number;
  max_radius?: number;
  speed?: Vector;
  speed_multiplier?: number;
  speed_multiplier_deviation?: number;
  starting_frame?: number;
  starting_frame_deviation?: number;
  speed_from_center?: number;
  speed_from_center_deviation?: number;
  only_when_visible?: boolean;
};
export type CreateAsteroidChunkEffectItem = TriggerEffectItem & {
  type: "create-asteroid-chunk";
  asteroid_name: string;
  offset_deviation?: unknown;
  offsets?: Vector[];
};
export type CreateParticleTriggerEffectItem = TriggerEffectItem & {
  type: "create-particle";
  particle_name: string;
  initial_height: number;
  offset_deviation?: undefined;
  tile_collision_mask?: unknown;
  offsets?: Vector[];
  initial_height_deviation?: number;
  initial_vertical_speed?: number;
  initial_vertical_speed_deviation?: number;
  speed_from_center?: number;
  speed_from_center_deviation?: number;
  frame_speed?: number;
  frame_speed_deviation?: number;
  movement_multiplier?: number;
  tail_length?: number;
  tail_length_deviation?: number;
  tail_width?: number;
  rotate_offsets?: boolean;
  only_when_visible?: boolean;
  apply_title_tint?: "primary" | "secondary";
  tint?: Color;
};
export type CreateStickerTriggerEffectItem = TriggerEffectItem & {
  type: "create-sticker";
  sticker: string;
  trigger_created_entity?: boolean;
};
export type CreateDecorativesTriggerEffectItem = TriggerEffectItem & {
  type: "create-decorative";
  decorative: string;
  spawn_max: number;
  spawn_min_radius: number;
  spawn_max_radius: number;
  spawn_min?: number;
  radius_curve?: number;
  apply_projection?: boolean;
  spread_evenly?: boolean;
};
export type NestedTriggerEffectItem = TriggerEffectItem & {
  type: "nested-result";
  action: Trigger;
};
export type PlaySoundTriggerEffectItem = TriggerEffectItem & {
  type: "play-sound";
  sound: Sound;
  min_distance?: number;
  max_distance?: number;
  play_on_target_position?: boolean;
};
export type PushBackTriggerEffectItem = TriggerEffectItem & {
  type: "push-back";
  distance: number;
};
export type DestroyCliffsTriggerEffectItem = TriggerEffectItem & {
  type: "destroy-cliffs";
  radius: number;
  explosion_at_trigger?: string;
  explosion_at_cliff?: string;
};
export type ShowExplosionOnChartTriggerEffectItem = TriggerEffectItem & {
  type: "show-explosion-on-chart";
  scale: number;
};
export type InsertItemTriggerEffectItem = TriggerEffectItem & {
  type: "insert-item";
  item: string;
  quality?: string;
  count?: number;
};
export type ScriptTriggerEffectItem = TriggerEffectItem & {
  type: "script";
  effect_id: string;
};
export type SetTileTriggerEffectItem = TriggerEffectItem & {
  type: "set-tile";
  tile_name: string;
  radius: number;
  apply_projection?: boolean;
  apply_on_space_platform?: boolean;
  tile_collision_mask?: unknown;
};
export type InvokeTileEffectTriggerEffectItem = TriggerEffectItem & {
  type: "invoke-tile-trigger";
  tile_collision_mask?: unknown;
};
export type RenderLayer = unknown;
export type DestroyDecorativesTriggerEffectItem = TriggerEffectItem & {
  type: "destroy-decoratives";
  radius: number;
  from_render_layer?: RenderLayer;
  to_render_layer?: RenderLayer;
  include_soft_decoratives?: boolean;
  include_decals?: boolean;
  invoke_decorative_trigger?: boolean;
  decoratives_with_trigger_only?: boolean;
};
export type CameraEffectTriggerEffectItem = TriggerEffectItem & {
  type: "camera-effect";
  duration: number;
  ease_in_duration?: number;
  ease_out_duration?: number;
  delay?: number;
  full_strength_max_distance?: number;
  max_distance?: number;
  strength?: number;
};
export type ActivateImpactTriggerEffectItem = TriggerEffectItem & {
  type: "activate-impact";
  deliver_category?: string;
};

export type DamageTypeFilters = DamageTypeFilterElement | string | string[];
export type DamageTypeFilterElement = {
  types: string | string[];
  whitelist?: boolean;
};

export type TriggerEffectItem = {
  repeat_count?: number;
  repeat_count_deviation?: number;
  probability?: number;
  affects_target?: boolean;
  show_in_tooltip?: boolean;
  damage_type_filters?: DamageTypeFilters;
};

export type TriggerDelivery = TriggerDeliveryElement | TriggerDeliveryElement[];
export type TriggerDeliveryElement =
  | InstantTriggerDelivery
  | ProjectileTriggerDelivery
  | BeamTriggerDelivery
  | StreamTriggerDelivery
  | ArtilleryTriggerDelivery
  | ChainTriggerDelivery
  | DelayedTriggerDelivery;

export type TriggerDeliveryItem = {
  source_effects?: TriggerEffect;
  target_effects?: TriggerEffect;
};
export type InstantTriggerDelivery = TriggerDeliveryItem & {
  type: "instant";
};
export type ProjectileTriggerDelivery = TriggerDeliveryItem & {
  type: "projectile";
  projectile: string;
  starting_speed: number;
  starting_speed_deviation?: number;
  direction_deviation?: number;
  range_deviation?: number;
  max_range?: number;
  min_range?: number;
};
export type BeamTriggerDelivery = TriggerDeliveryItem & {
  type: "beam";
  beam: string;
  add_to_shooter?: boolean;
  max_length?: number;
  duration?: number;
  source_offset?: Vector;
  destroy_with_source_or_target?: boolean;
};
export type StreamTriggerDelivery = TriggerDeliveryItem & {
  type: "stream";
  stream: string;
  source_offset?: Vector;
};
export type ArtilleryTriggerDelivery = TriggerDeliveryItem & {
  type: "artillery";
  projectile: string;
  starting_speed: number;
  starting_speed_deviation?: number;
  direction_deviation?: number;
  range_deviation?: number;
  trigger_fired_artillery?: boolean;
};
export type ChainTriggerDelivery = TriggerDeliveryItem & {
  type: "chain";
  chain: string;
};
export type DelayedTriggerDelivery = TriggerDeliveryItem & {
  type: "delayed";
  delayed_trigger: string;
};

export type Trigger = TriggerElement | TriggerElement[];
export type TriggerElement =
  | DirectTriggerItem
  | AreaTriggerItem
  | LineTriggerItem
  | ClusterTriggerItem;

export type TriggerItem = {
  entity_flags?: unknown;
  collision_mask?: unknown;
  ignore_collision_condition?: boolean;
  trigger_target_mask?: unknown;
  repeat_count?: number;
  probability?: number;
  action_delivery?: TriggerDelivery;
  force?: unknown;
};

export type DirectTriggerItem = TriggerItem & {
  type: "direct";
  fliterEnabled?: boolean;
};
export type AreaTriggerItem = TriggerItem & {
  type: "area";
  radius: number;
  trigger_from_target?: boolean;
  target_entities?: boolean;
  target_enemies?: boolean;
  show_in_tooltip?: boolean;
  collision_mode?: "distance-from-collision-box" | "distance_from_center";
};
export type LineTriggerItem = TriggerItem & {
  type: "line";
  range: number;
  width: number;
  range_effects?: TriggerEffect;
};
export type ClusterTriggerItem = TriggerItem & {
  type: "cluster";
  cluster_count: number;
  distance: number;
  distance_deviation?: number;
};

/** Width, Height order */
export type SpriteSize = [number, number] | number;

export type SpriteFlags =
  // The sprite won't be automatically cropped.
  | "no-crop"
  | "not-compressed"
  | "always-compressed"
  | "mipmap"
  | "linear-minification"
  | "linear-magnification"
  | "linear-mip-level"
  | "alpha-mask"
  | "no-scale"
  //This flag will internally set these flags: "group=none"
  | "mask"
  //This flag will internally set these flags: "no-crop", "no-scale", "mipmap", "linear-minification", "linear-magnification", "linear-mip-level", "not-compressed", "group=icon"
  | "icon"
  //This flag will internally set these flags: "no-crop", "no-scale", "mipmap", "linear-minification", "linear-magnification", "linear-mip-level", "not-compressed", "group=gui"
  | "gui"
  //This flag will internally set these flags: "no-crop", "no-scale", "mipmap", "linear-minification", "linear-magnification", "not-compressed", "group=icon"
  | "gui-icon"
  //This flag will internally set these flags: "mipmap", "linear-mip-level", "linear-minification", "linear-magnification", "group=none"
  | "light"
  //This flag will internally set these flags: "mipmap", "linear-mip-level", "linear-minification", "no-crop", "group=terrain"
  | "terrain"
  //This flag will internally set these flags: "mipmap", "linear-mip-level", "linear-minification", "no-crop", "terrain-effect-map" (internal group flag)
  | "terrain-effect-map"
  //This flag will internally set these flags: "mipmap", "linear-mip-level", "linear-minification", "terrain-effect-map" (internal group flag)
  | "reflection-effect-map"
  | "shadow"
  //This flag will internally set these flags: "mipmap", "linear-minification", "linear-magnification", "group=smoke"
  | "smoke"
  //This flag will internally set these flags: "group=decal"
  | "decal"
  | "low-object"
  | "corpse-decay"
  | "trilinear-filtering"
  | "group=none"
  | "group=terrain"
  | "group=shadow"
  | "group=smoke"
  | "group=decal"
  | "group=low-object"
  | "group=gui"
  | "group=icon"
  | "group=icon-background"
  | "group=effect-texture";

export type SpritePriority =
  | "extra-high-no-scale"
  | "extra-high"
  | "high"
  | "medium"
  | "low"
  | "very-low"
  | "no-atlas";

export type BlendMode =
  //The result color is determined with the following formula: Result = Active_RGB + Background_RGB * ( 1 - Active_Alpha ). Note that this is alpha blending with an assumption that Active_RGB is already pre-multiplied with Active_Alpha.
  | "normal"
  //The result color is determined with the following formula: Result = Active_RGB + Background_RGB
  | "additive"
  //The result color is determined with the following formula: Result = Active_RGB * ( 1 - Background_RGB ) + Background_RGB
  | "additive-soft"
  //The result color is determined with the following formula: Result = Active_RGB * Background_RGB
  | "multiplicative"
  //The result color is determined with the following formula: Result = Active_RGB * Background_RGB * Active_Alpha + Background_RGB * ( 1 - Active_Alpha )
  | "multiplicative-with-alpha"
  //The result color is determined with the following formula: Result = Active_RGBA or Background_RGBA
  | "overwrite";

export type SpriteUsageSurfaceHint =
  | "any"
  | "nauvis"
  | "vulcanus"
  | "gleba"
  | "fulgora"
  | "aquilo"
  | "space";

export type SpriteUsageHint =
  | "any"
  | "mining"
  | "tile-artifical"
  | "corpse-decay"
  | "enemy"
  | "player"
  | "train"
  | "vehicle"
  | "explosion"
  | "rail"
  | "elevated-rail"
  | "air"
  | "remnant"
  | "decorative";

export type SpritePrototype = PrototypeBase<"sprite"> &
  (
    | { layers: SpritePrototype[] }
    | {
        filename: string;
        dice?: number;
        dice_x?: number;
        dice_y?: number;
        priority?: SpritePriority;
        flags?: SpriteFlags[];
        // size
        /** precedence vs width, height is not specified */
        size?: SpriteSize; // [number, number] | number
        width?: number;
        height?: number;
        // source offset
        x?: number;
        y?: number;
        /** used when x, y are both null | 0 */
        position?: [number, number];
        shift?: Vector;
        rotate_shift?: boolean;
        apply_special_effect?: boolean;
        scale?: number;
        draw_as_shadow?: boolean;
        draw_as_glow?: boolean;
        draw_as_light?: boolean;
        mipmap_count?: number;
        apply_runtime_tint?: boolean;
        tint_as_overlay?: boolean;
        invert_colors?: boolean;
        tint?: Color;
        blend_mode?: BlendMode;
        load_in_minimal_mode?: boolean;
        premul_alpha?: boolean;
        allow_forced_downscale?: boolean;
        /** unused lol */
        generate_sdf?: boolean;
        surface?: SpriteUsageSurfaceHint;
        usage?: SpriteUsageHint;
      }
  );

export type IconData = {
  icon: string;
  icon_size?: number;
  tint?: Color;
  shift?: Vector;
  scale?: number;
  draw_background?: boolean;
  floating?: boolean;
};

export type PlaceAsTile = {
  result: string;
  condition: unknown;
  invert?: boolean;
  condition_size: number;
  tile_condition?: unknown[];
};

export type EnergyUnit = "W" | "J";
export type UnitScale =
  | "k"
  | "M"
  | "G"
  | "T"
  | "P"
  | "E"
  | "Z"
  | "Y"
  | "R"
  | "Q"
  | "";

export type Energy = `${number}${UnitScale}${EnergyUnit}`;

export type Sound = unknown;

export type ItemProductPrototype = {
  type: "item";
  name: string;
  probability?: number;
  ignored_by_stats?: number;
  ignored_by_productivity?: number;
  show_details_in_recipe_tooltip?: boolean;
  extra_count_fraction?: number;
  /** ratio, [0; 1) */
  percent_spoiled?: number;
} & ({ amount: number } | { amount_min: number; amount_max: number });

export type ItemPrototype<TType extends string> = Prototype<TType> & {
  stack_size: number;
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
  dark_background_icons?: [IconData, ...IconData[]];
  dark_background_icon?: string;
  dark_background_icon_size?: number;
  place_result?: string;
  place_as_equipment_result?: string;
  fuel_category?: string;
  burnt_result?: string;
  spoil_result?: string;
  plant_result?: string;
  place_as_tile?: PlaceAsTile;
  pictures?: unknown;
  flags?: unknown;
  spoil_ticks?: number;
  fuel_value?: Energy;
  fuel_acceleration_multiplier?: number;
  fuel_top_speed_multiplier?: number;
  fuel_emissions_multiplier?: number;
  fuel_acceleration_multiplier_quality_bonus?: number;
  fuel_top_speed_multiplier_quality_bonus?: number;
  weight?: number;
  ingredient_to_weight_coefficient?: number;
  fuel_glow_color?: Color;
  open_sound?: Sound;
  close_sound?: Sound;
  pick_sound?: Sound;
  drop_sound?: Sound;
  inventory_move_sound?: Sound;
  default_import_location?: string;
  color_hint?: unknown;
  has_random_tint?: boolean;
  spoil_to_trigger_result?: { trigger: Trigger; items_per_trigger: number };
  destroyed_by_dropping_trigger?: Trigger;
  rocket_launch_products?: ItemProductPrototype[];
  send_to_orbit_mode?: "not-sendable" | "manual" | "automated";
  moved_to_hub_when_building?: boolean;
  random_tint_color?: Color;
  /** Overrides spoil level priority (inserters - spoiled first/last option).
   * Default: 0, items with higher spoil_level value are prioritizes,
   * regardless of progress of spoiling */
  spoil_level?: number;
  auto_recycle?: boolean;
};

export type RecipeTints = Partial<
  Record<"primary" | "secondary" | "tertiary" | "quaternary", Color>
>;

export type IngredientPrototype =
  | ItemIngredientPrototype
  | FluidIngredientPrototype;

export type ItemIngredientPrototype = {
  type: "item";
  /** ItemID */
  name: string;
  amount: number;
  ignored_by_stats?: number;
};

export type FluidIngredientPrototype = {
  type: "fluid";
  /** FluidID */
  name: string;
  amount: number;
  temperature?: number;
  minimum_temperature?: number;
  maximum_temperature?: number;
  ignored_by_stats?: number;
  fluidbox_index?: number;
  fluidbox_multiplier?: number;
};

export type ProductPrototype = ItemProductPrototype | FluidProductPrototype;

export type FluidProductPrototype = {
  type: "fluid";
  /** FluidID */
  name: string;
  probability?: number;
  ignored_by_stats?: number;
  ignored_by_productivity?: number;
  temperature?: number;
  fluidbox_index?: number;
  show_details_in_recipe_tooltip?: boolean;
} & ({ amount: number } | { amount_min: number; amount_max: number });

export type SurfaceCondition = {
  property: string;
  min?: number;
  max?: number;
};

export type RecipePrototype = Prototype<"recipe"> & {
  category?: string;
  additionalCategories?: string;
  crafting_machine_tint?: RecipeTints;
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
  ingredients?: IngredientPrototype[];
  results?: ProductPrototype[];
  main_product?: string;
  energy_required?: number;
  emissions_multiplier?: number;
  maximum_productivity?: number;
  requester_paste_multiplier?: number;
  overload_multiplier?: number;
  allow_inserter_overload?: boolean;
  /** Available from game start */
  enabled?: boolean;
  hide_from_stats?: boolean;
  hide_from_player_crafting?: boolean;
  hide_from_bonus_gui?: boolean;
  allow_decomposition?: boolean;
  allow_as_intermediate?: boolean;
  allow_intermediates?: boolean;
  always_show_made_in?: boolean;
  show_amount_in_title?: boolean;
  always_show_products?: boolean;
  unlock_results?: boolean;
  preserve_products_in_machine_output?: boolean;
  result_is_always_fresh?: boolean;
  reset_freshness_on_craft?: boolean;
  allow_consumption_message?: LocalisedString;
  allow_speed_message?: LocalisedString;
  allow_productivity_message?: LocalisedString;
  allow_pollution_message?: LocalisedString;
  allow_quality_message?: LocalisedString;
  surface_conditions?: SurfaceCondition[];
  hide_from_signal_gui?: boolean;
  allow_consumption?: boolean;
  allow_speed?: boolean;
  allow_productivity?: boolean;
  allow_pollution?: boolean;
  allow_quality?: boolean;
  allowed_module_categories?: string[];
  alternative_unlock_methods?: string[];
  auto_recycle?: boolean;
};

export type QualityPrototype = Prototype<"quality"> & {
  draw_sprite_by_default?: boolean;
  color: Color;
  level: number;
  next?: string;
  next_probability?: number;
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
  beacon_power_usage_multiplier?: number;
  mining_drill_resource_drain_multiplier?: number;
  science_pack_drain_multiplier?: number;
  default_multiplier?: number;
  inserter_speed_multiplier?: number;
  fluid_wagon_capacity_multiplier?: number;
  inventory_size_multiplier?: number;
  lab_research_speed_multiplier?: number;
  crafting_machine_speed_multiplier?: number;
  crafting_machine_energy_multiplier?: number;
  logistic_cell_charging_energy_multiplier?: number;
  tool_durability_multiplier?: number;
  accumulator_capacity_multiplier?: number;
  flying_robot_max_energy_multiplier?: number;
  range_multiplier?: number;
  asteroid_collector_collection_radius_bonus?: number;
  equipment_grid_width_bonus?: number;
  equipment_grid_height_bonus?: number;
  electric_pole_wire_reach_bonus?: number;
  electric_pole_supply_area_distance_bonus?: number;
  beacon_supply_area_distance_bonus?: number;
  mining_drill_mining_radius_bonus?: number;
  logistic_cell_charging_station_count_bonus?: number;
  beacon_module_slots_bonus?: number;
  crafting_machine_module_slots_bonus?: number;
  mining_drill_module_slots_bonus?: number;
  lab_module_slots_bonus?: number;
};

export type FluidPrototype = Prototype<"fluid"> & {
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
  default_temperature: number;
  base_color: Color;
  flow_color: Color;
  visualization_color?: Color;
  max_temperature?: number;
  /** Energy per 1 deg. Celsius per unit */
  heat_capacity?: Energy;
  fuel_value?: Energy;
  emissions_multiplier?: number;
  gas_temperature?: number;
  auto_barrel?: boolean;
};

export type AsteroidSpawnPoint = {
  probability: number;
  speed: number;
  angle_when_stopped?: number;
};

export type SpaceLocationAsteroidSpawnDefinition = AsteroidSpawnPoint & {
  type?: "entity" | "asteroid-chunk";
  asteroid: string;
};

export type SpaceLocationPrototype<TType extends string> = Prototype<TType> & {
  gravity_pull?: number;
  distance: number;
  orientation: number;
  magnitude?: number;
  parked_platforms_orientation?: number;
  label_orientation?: number;
  draw_orbit?: boolean;
  solar_power_in_space?: number;
  asteroid_spawn_influence?: number;
  fly_condition?: boolean;
  auto_save_on_first_trip?: boolean;
  procession_graphic_catalogue?: unknown;
  procession_audio_catalogue?: unknown;
  platform_procession_set?: unknown;
  planet_procession_set?: unknown;
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
  starmap_icons?: [IconData, ...IconData[]];
  starmap_icon?: string;
  starmap_icon_size?: number;
  starmap_icon_orientation?: number;
  asteroid_spawn_definitions?: SpaceLocationAsteroidSpawnDefinition[];
};

export type MinableProperties = {
  mining_time: number;
  include_in_show_counts?: boolean;
  transfer_entity_health_to_products?: boolean;
  results?: ProductPrototype[];
  result?: string;
  fluid_amount?: number;
  mining_particle?: string;
  required_fluid?: string;
  count?: number;
  mining_trigger?: Trigger;
};

export type AsteroidChunkPrototype = Prototype<"asteroid-chunk"> & {
  minable?: MinableProperties;
  dying_trigger_effect?: TriggerEffect;
  graphics_set?: unknown;
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
  hide_from_signal_gui?: boolean;
};

export type RecipeCategory = Prototype<"recipe-category">;

export type SpriteSource = {
  filename: string;
  // size
  /** precedence vs width, height is not specified */
  size?: SpriteSize; // [number, number] | number
  width?: number;
  height?: number;
  // source offset
  x?: number;
  y?: number;
  /** used when x, y are both null | 0 */
  position?: [number, number];
  load_in_minimal_mode?: boolean;
  premul_alpha?: boolean;
  allow_forced_downscale?: boolean;
};

export type SpriteParameters = SpriteSource & {
  priority?: SpritePriority;
  flags?: SpriteFlags[];
  shift?: Vector;
  rotate_shift?: boolean;
  apply_special_effect?: boolean;
  scale?: number;
  draw_as_shadow?: boolean;
  draw_as_glow?: boolean;
  draw_as_light?: boolean;
  occludes_light?: boolean;
  mipmap_count?: number;
  apply_runtime_tint?: boolean;
  tint_as_overlay?: boolean;
  invert_colors?: boolean;
  tint?: Color;
  blend_mode?: BlendMode;
  generate_sdf?: boolean;
  surface?: SpriteUsageSurfaceHint;
  usage?: SpriteUsageHint;
};

export type Sprite = Omit<SpriteParameters, "filename"> & {
  dice?: number;
  dice_x?: number;
  dice_y?: number;
} & ({ filename: string } | { layers: Sprite[] });

export type BurnerUsagePrototype = Prototype<"burner-usage"> & {
  empty_slot_sprite: Sprite;
  empty_slot_caption: LocalisedString;
  empty_slot_description?: LocalisedString;
  icon: Sprite;
  no_fuel_status?: LocalisedString;
  accepted_fuel_key: string;
  burned_in_key: string;
};

export type DamageType = Prototype<"damage-type">;

export type ItemToPlace = {
  item: string;
  count: number;
};
export type EntityPrototype<TType extends string> = Prototype<TType> & {
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
  collision_box?: unknown;
  collision_mask?: unknown;
  map_generator_bounding_box?: unknown;
  selection_box?: unknown;
  drawing_box_vertical_extension?: number;
  sticker_box?: unknown;
  hit_visualization_box?: unknown;
  trigger_target_mask?: unknown;
  flags?: unknown;
  tile_buildability_rules?: unknown;
  minable?: MinableProperties;
  surface_conditions?: SurfaceCondition[];
  deconstruction_alternative?: string;
  selection_priority?: number;
  build_grid_size?: number;
  remove_decoratives?: "automatic" | boolean;
  /** [AirbornePollutantID]: number */
  emissions_per_second?: Partial<Record<string, number>>;
  shooting_cursor_size?: number;
  created_smoke?: CreateTrivialSmokeEffectItem;
  working_sound?: unknown;
  created_effect?: Trigger;
  build_sound?: Sound;
  mined_sound?: Sound;
  mining_sound?: Sound;
  rotated_sound?: Sound;
  impact_category?: string;
  open_sound?: Sound;
  close_sound?: Sound;
  placeable_position_visualization?: Sprite;
  radius_visualisation_specification?: unknown;
  stateless_visualisation?: unknown;
  draw_stateless_visualisations_in_ghost?: boolean;
  build_base_evolution_requirement?: number;
  alert_icon_shift?: Vector;
  alert_icon_scale?: number;
  fast_replaceable_group?: string;
  next_upgrade?: string;
  protected_from_tile_building?: boolean;
  heating_energy?: Energy;
  allow_copy_paste?: boolean;
  selectable_in_game?: boolean;
  placeable_by?: ItemToPlace | ItemToPlace[];
  remains_when_mined?: string | string[];
  additional_pastable_entities?: string[];
  tile_width?: number;
  tile_height?: number;
  diagonal_tile_grid_size?: unknown;
  autoplace?: unknown;
  map_color?: Color;
  friendly_map_color?: Color;
  enemy_map_color?: Color;
  water_reflection?: unknown;
  ambient_sounds_group?: string;
  ambient_sounds?: unknown;
  icon_draw_specification?: unknown;
  icons_positioning?: unknown;
};

export type LootItem = {
  item: string;
  probability?: number;
  count_min?: number;
  count_max?: number;
};

export type Resistance = {
  /** DamageTypeID */
  type: string;
  /** flat */
  decrease?: number;
  /** percent */
  percent?: number;
};

export type EntityWithHealthPrototype<TType extends string> =
  EntityPrototype<TType> & {
    max_health?: number;
    healing_per_tick?: number;
    repair_speed_modifier?: number;
    dying_explosion?: unknown;
    dying_trigger_effect?: TriggerEffect;
    damaged_trigger_effect?: TriggerEffect;
    loot?: LootItem[];
    resistances?: Resistance[];
    attack_reaction?: unknown;
    repair_sound?: Sound;
    alert_when_damaged?: boolean;
    hide_resistances?: boolean;
    create_ghost_on_death?: boolean;
    integration_patch_render_layer?: RenderLayer;
    /** EntityID | EntityID[] */
    corpse?: string | string[];
    integration_patch?: unknown;
    overkill_fraction?: number;
  };

export type EntityWithOwnerPrototype<TType extends string> =
  EntityWithHealthPrototype<TType> & {
    is_military_target?: boolean;
    allow_run_time_change_of_is_military_target?: boolean;
    quality_indicator_shift?: Vector;
    quality_indicator_scale?: number;
  };

export type InventoryWithCustomStackSizeSpecification = {
  stack_size_multiplier?: number;
  stack_size_min?: number;
  stack_size_max?: number;
  stack_size_override?: Partial<Record<string, number>>;
  with_bar?: boolean;
};

export type ContainerPrototype<TType extends string> =
  EntityWithOwnerPrototype<TType> & {
    inventory_size: number;
    quality_affects_inventory_size?: boolean;
    picture?: Sprite;
    inventory_type?:
      | "normal"
      | "with_bar"
      | "with_filters_and_bar"
      | "with_custom_stack_size"
      | "with_weight_limit";
    inventory_properties?: InventoryWithCustomStackSizeSpecification;
    inventory_weight_limit?: number;
    circuit_wire_max_distance?: number;
    draw_copper_wires?: boolean;
    draw_circuit_wires?: boolean;
    circuit_connector?: unknown;
    default_status?: unknown;
  };

export type EnergySoruce =
  | ElectricEnergySource
  | BurnerEnergySource
  | HeatEnergySource
  | FluidEnergySource
  | VoidEnergySource;

export type BaseEnergySource = {
  /** [AirbornePollutantID]: number */
  emissions_per_minute?: Partial<Record<string, number>>;
  render_no_power_icon?: boolean;
  render_no_network_icon?: boolean;
};

export type ElectricUsagePriority =
  | "primary-input"
  | "primary-output"
  | "secondary-input"
  | "secondary-output"
  | "tertiary"
  | "solar"
  | "lamp";
export type ElectricEnergySource = BaseEnergySource & {
  type: "electric";
  buffer_capacity?: Energy;
  usage_priority: ElectricUsagePriority;
  input_flow_limit?: Energy;
  output_flow_limit?: Energy;
  /** Idle draw. Always applied, even on top of active draw. */
  drain?: Energy;
};

export type BurnerEnergySource = BaseEnergySource & {
  type: "burner";
  fuel_inventory_size: number;
  burnt_inventory_size?: number;
  smoke?: unknown;
  light_flicker?: unknown;
  effectivity?: number;
  /** BurnerUsageID */
  burner_usage?: string;
  /** FuelCategoryID[] */
  fuel_categories?: string[];
  /** ItemID */
  initial_fuel?: string;
  initial_fuel_percent?: number;
};

export type HeatEnergySource = BaseEnergySource & {
  type: "heat";
  max_temperature: number;
  specific_heat: Energy;
  max_transfer: Energy;
  default_temperature?: number;
  min_temperature_gradient?: number;
  min_working_temperature?: number;
  minimum_glow_temperature?: number;
  pipe_covers?: unknown;
  heat_pipe_covers?: unknown;
  heat_picture?: unknown;
  heat_glow?: unknown;
  connections?: unknown;
};

export type FluidEnergySource = BaseEnergySource & {
  type: "fluid";
  fluid_box: unknown;
  smoke?: unknown;
  light_flicker?: unknown;
  effectivity?: number;
  burns_fluid?: boolean;
  scale_fluid_usage?: boolean;
  destroy_non_fuel_fluid?: boolean;
  fluid_usage_per_tick?: number;
  maximum_temperature?: number;
};

export type VoidEnergySource = BaseEnergySource & {
  type: "void";
};

export type Effect = {
  /** Active power draw multiplier. Does not affect idle draw. */
  consumption?: number;
  speed?: number;
  productivity?: number;
  pollution?: number;
  quality?: number;
};

export type EffectReciever = {
  base_effect?: Effect;
  uses_module_effects?: boolean;
  uses_beacon_effects?: boolean;
  uses_surface_effects?: boolean;
};

export type EffectTypeLimitation =
  | EffectTypeLimitationElement
  | EffectTypeLimitationElement[];
export type EffectTypeLimitationElement = keyof Effect;

export type ProductionHealthEffect = {
  producing?: number;
  not_producing?: number;
};

export type CraftingMachinePrototype<TType extends string> =
  EntityWithHealthPrototype<TType> & {
    quality_affects_energy_usage?: boolean;
    energy_usage: Energy;
    crafting_speed: number;
    /** RecipeCategoryID[] */
    crafting_categories: string[];
    energy_source: EnergySoruce;
    fluid_boxes?: unknown;
    effect_receiver?: EffectReciever;
    module_slots?: number;
    quality_affects_module_slots?: boolean;
    allowed_effects?: EffectTypeLimitation;
    /** ModuleCategoryID[] */
    allowed_module_categories?: string[];
    show_recipe_icon?: boolean;
    return_ingredients_on_change?: boolean;
    draw_entity_info_icon_background?: boolean;
    match_animation_speed_to_activity?: boolean;
    show_recipe_icon_on_map?: boolean;
    fast_transfer_modules_into_module_slots_only?: boolean;
    ignore_output_full?: boolean;
    graphics_set?: unknown;
    graphics_set_flipped?: unknown;
    perceived_performance?: unknown;
    production_health_effect?: ProductionHealthEffect;
    trash_inventory_size?: number;
    vector_to_place_result?: Vector;
    forced_symmetry?: unknown;
    /** [QualityID]: number */
    crafting_speed_quality_multiplier?: Partial<Record<string, number>>;
    /** [QualityID]: number */
    module_slots_quality_bonus?: Partial<Record<string, number>>;
    /** [QualityID]: number */
    energy_usage_quality_multiplier?: Partial<Record<string, number>>;
  };

export type FurnacePrototype = CraftingMachinePrototype<"furnace"> & {
  result_inventory_size: number;
  source_inventory_size: number;
  cant_insert_at_source_message_key?: string;
  custom_input_slot_tooltip_key?: string;
  circuit_connector?: unknown;
  circuit_connector_flipped?: unknown;
  circuit_wire_max_distance?: number;
  draw_copper_wires?: boolean;
  draw_circuit_wires?: boolean;
  default_recipe_finished_signal?: unknown;
  default_working_signal?: unknown;
};

export type BoilerPrototype = EntityWithOwnerPrototype<"boiler"> & {
  pictures?: unknown;
  energy_source: EnergySoruce;
  fluid_box: unknown;
  output_fluid_box: unknown;
  energy_consumption: Energy;
  burning_cooldown: number;
  target_temperature?: number;
  fire_glow_flicker_enabled?: boolean;
  fire_flicker_enabled?: boolean;
  mode?: "heat-fluid-inside" | "output-to-separate-pipe";
};

export type GeneratorPrototype = EntityWithOwnerPrototype<"generator"> & {
  energy_source: ElectricEnergySource;
  fluid_box: unknown;
  horizontal_animation?: unknown;
  vertical_animation?: unknown;
  horizontal_frozen_patch?: Sprite;
  vertical_frozen_patch?: Sprite;
  effectivity?: number;
  fluid_usage_per_tick: number;
  maximum_temperature: number;
  smoke?: unknown;
  burns_fluid?: boolean;
  scale_fluid_usage?: boolean;
  destroy_non_fuel_fluid?: boolean;
  perceived_performance?: unknown;
  max_power_output?: Energy;
};

export type OffshorePumpPrototype =
  EntityWithOwnerPrototype<"offshore-pump"> & {
    fluid_box: unknown;
    pumping_speed: number;
    fluid_source_offset: Vector;
    perceived_performance?: unknown;
    graphics_set?: unknown;
    energy_source: EnergySoruce;
    energy_usage: Energy;
    remove_on_tile_collision?: boolean;
    always_draw_fluid?: boolean;
    circuit_wire_max_distance?: number;
    draw_copper_wires?: boolean;
    draw_circuit_wires?: boolean;
    circuit_connector?: unknown;
  };

export type InserterPrototype = EntityWithOwnerPrototype<"inserter"> & {
  extension_speed: number;
  rotation_speed: number;
  starting_distance?: number;
  insert_position: Vector;
  pickup_position: Vector;
  platform_picture?: unknown;
  platform_frozen?: unknown;
  hand_base_picture?: Sprite;
  hand_open_picture?: Sprite;
  hand_closed_picture?: Sprite;
  hand_base_frozen?: Sprite;
  hand_open_frozen?: Sprite;
  hand_closed_frozen?: Sprite;
  hand_base_shadow?: Sprite;
  hand_open_shadow?: Sprite;
  hand_closed_shadow?: Sprite;
  energy_source: EnergySoruce;
  energy_per_movement?: Energy;
  energy_per_rotation?: Energy;
  bulk?: boolean;
  uses_inserter_stack_size_bonus?: boolean;
  allow_custom_vectors?: boolean;
  allow_burner_leech?: boolean;
  draw_held_item?: boolean;
  use_easter_egg?: boolean;
  grab_less_to_match_belt_stack?: boolean;
  wait_for_full_hand?: boolean;
  enter_drop_mode_if_held_stack_spoiled?: boolean;
  max_belt_stack_size?: number;
  filter_count?: number;
  hand_size?: number;
  circuit_wire_max_distance?: number;
  draw_copper_wires?: boolean;
  draw_circuit_wires?: boolean;
  default_stack_control_input_signal?: unknown;
  draw_inserter_arrow?: boolean;
  chases_belt_items?: boolean;
  stack_size_bonus?: number;
  circuit_connector?: unknown;
};

export type AssemblingMachinePrototype<TType extends string> =
  CraftingMachinePrototype<TType> & {
    /** RecipeID */
    fixed_recipe?: string;
    /** QualityID */
    fixed_quality?: string;
    gui_title_key?: string;
    circuit_wire_max_distance?: number;
    draw_copper_wires?: boolean;
    draw_circuit_wires?: boolean;
    default_recipe_finished_signal?: string;
    default_working_signal?: string;
    enable_logistic_control_behavior?: boolean;
    ingredient_count?: number;
    max_item_product_count?: number;
    circuit_connector?: unknown;
    circuit_connector_flipped?: unknown;
    fluid_boxes_off_when_no_fluid_recipe?: boolean;
    disabled_when_recipe_not_researched?: boolean;
  };

export type LabPrototype = EntityWithOwnerPrototype<"lab"> & {
  energy_usage: Energy;
  energy_source: EnergySoruce;
  on_animation?: unknown;
  off_animation?: unknown;
  frozen_patch?: Sprite;
  /** ItemID[] */
  inputs: string[];
  researching_speed?: number;
  effect_receiver?: EffectReciever;
  module_slots?: number;
  quality_affects_module_slots?: boolean;
  uses_quality_drain_modifier?: boolean;
  science_pack_drain_rate_percent?: number;
  allowed_effects?: EffectTypeLimitation;
  /** ModuleCategoryID[] */
  allowed_module_categories?: string[];
  light?: unknown;
  trash_inventory_size?: number;
};

export type SolarPanelPrototype = EntityWithOwnerPrototype<"solar-panel"> & {
  energy_source: ElectricEnergySource;
  picture?: unknown;
  production: Energy;
  overlay?: unknown;
  performance_at_day?: number;
  performance_at_night?: number;
  /** SurfacePropertyID */
  solar_coefficient_property?: string;
};

export type AccumulatorPrototype = EntityWithOwnerPrototype<"accumulator"> & {
  energy_source: ElectricEnergySource;
  chargable_graphics?: unknown;
  circuit_wire_max_distance?: number;
  draw_copper_wires?: boolean;
  draw_circuit_wires?: boolean;
  circuit_connector?: unknown;
  default_output_signal?: unknown;
};

export type LogisticMode =
  | "active-provider"
  | "passive-provider"
  | "requester"
  | "storage"
  | "buffer";

export type LogisticContainerPrototype =
  ContainerPrototype<"logistic-container"> & {
    logistic_mode: LogisticMode;
    max_logistic_slots?: number;
    trash_inventory_size?: number;
    render_not_in_network_item?: boolean;
    opened_duration?: number;
    animation?: unknown;
    landing_location_offset?: Vector;
    use_exact_mode?: boolean;
    animation_sound?: Sound;
  };

export type CargoStationParameters = {
  prefer_packed_cargo_units?: boolean;
  hatch_definitions?: unknown;
  giga_hatch_definitions?: unknown;
  is_input_station?: boolean;
  is_output_station?: boolean;
};

export type RocketSiloPrototype = AssemblingMachinePrototype<"rocket-silo"> & {
  active_energy_usage: Energy;
  lamp_energy_usage: Energy;
  /** EntityID */
  rocket_entity: string;
  arm_02_right_animation?: unknown;
  arm_01_back_animation?: unknown;
  arm_03_front_animation?: unknown;
  shadow_sprite?: Sprite;
  hole_sprite?: Sprite;
  hole_light_sprite?: Sprite;
  rocket_shadow_overlay_sprite?: Sprite;
  rocket_glow_overlay_sprite?: Sprite;
  door_back_sprite?: Sprite;
  door_front_sprite?: Sprite;
  base_day_sprite?: Sprite;
  base_front_sprite?: Sprite;
  red_lights_back_sprites?: Sprite;
  red_lights_front_sprites?: Sprite;
  base_frozen?: Sprite;
  base_front_frozen?: Sprite;
  hole_frozen?: Sprite;
  door_back_frozen?: Sprite;
  door_front_frozen?: Sprite;
  hole_clipping_box?: unknown;
  door_back_open_offset: Vector;
  door_front_open_offset: Vector;
  silo_fade_out_start_distance: number;
  silo_fade_out_end_distance: number;
  times_to_blink: number;
  light_blinking_speed: number;
  door_opening_speed: number;
  rocket_parts_required: number;
  rocket_quick_relaunch_start_offset: number;
  satellite_animation?: unknown;
  satellite_shadow_animation?: unknown;
  base_night_sprite?: Sprite;
  base_light?: unknown;
  base_engine_light?: unknown;
  rocket_rising_delay?: number;
  launch_wait_time?: number;
  render_not_in_network_icon?: boolean;
  rocket_parts_storage_cap?: number;
  alarm_trigger?: TriggerEffect;
  clamps_on_trigger?: TriggerEffect;
  clamps_off_trigger?: TriggerEffect;
  doors_trigger?: TriggerEffect;
  raise_rocket_trigger?: TriggerEffect;
  alarm_sound?: Sound;
  quick_alarm_sound?: Sound;
  clamps_on_sound?: Sound;
  clamps_off_sound?: Sound;
  doors_sound?: Sound;
  raise_rocket_sound?: Sound;
  to_be_inserted_to_rocket_inventory_size?: number;
  logistic_trash_inventory_size?: number;
  cargo_station_parameters: CargoStationParameters;
  launch_to_space_platforms?: boolean;
  can_launch_without_landing_pads?: boolean;
};

export type RocketSiloRocketPrototype =
  EntityPrototype<"rocket-silo-rocket"> & {
    shadow_slave_entity?: string;
    cargo_pod_entity: string;
    dying_explosion?: string;
    glow_light?: unknown;
    rocket_sprite?: unknown; // not a sprite, apparently
    rocket_shadow_sprite?: unknown;
    rocket_glare_overlay_sprite?: Sprite;
    rocket_smoke_bottom1_animation?: unknown;
    rocket_smoke_bottom2_animation?: unknown;
    rocket_smoke_top1_animation?: unknown;
    rocket_smoke_top2_animation?: unknown;
    rocket_smoke_top3_animation?: unknown;
    rocket_flame_animation?: unknown;
    rocket_flame_left_animation?: unknown;
    rocket_flame_right_animation?: unknown;
    rocket_initial_offset?: Vector;
    rocket_rise_offset: Vector;
    cargo_attachment_offset?: Vector;
    rocket_flame_left_rotation: number;
    rocket_flame_right_rotation: number;
    rocket_render_layer_switch_distance: number;
    full_render_layer_switch_distance: number;
    rocket_launch_offset: Vector;
    effects_fade_in_start_distance: number;
    effects_fade_in_end_distance: number;
    shadow_fade_out_start_ratio: number;
    shadow_fade_out_end_ratio: number;
    rocket_visible_distance_from_center: number;
    rocket_above_wires_slice_offset_from_center?: number;
    rocket_air_object_slice_offset_from_center: number;
    rocket_fog_mask?: unknown;
    rising_speed: number;
    engine_starting_speed: number;
    flying_speed: number;
    flying_acceleration: number;
    flying_trigger?: TriggerEffect;
    flying_sound?: Sound;
    inventory_size: number;
  };

export type StorageTankPrototype = EntityWithOwnerPrototype<"storage-tank"> & {
  fluid_box: unknown;
  window_bounding_box: unknown;
  pictures?: unknown;
  flow_length_in_ticks: number;
  two_direction_only?: boolean;
  show_fluid_icon?: boolean;
  circuit_wire_max_distance?: number;
  draw_copper_wires?: boolean;
  draw_circuit_wires?: boolean;
  circuit_connector?: unknown;
};

export type PumpPrototype = EntityWithOwnerPrototype<"pump"> & {
  fluid_box: unknown;
  energy_source: EnergySoruce;
  energy_usage: Energy;
  pumping_speed: number;
  animations?: unknown;
  fluid_wagon_connector_speed?: number;
  fluid_wagon_connector_alignment_tolerance?: number;
  fluid_wagon_connector_frame_count?: number;
  flow_scaling?: boolean;
  fluid_animation?: unknown;
  glass_pictures?: unknown;
  frozen_patch?: unknown;
  circuit_wire_max_distance?: number;
  draw_copper_wires?: boolean;
  draw_circuit_wires?: boolean;
  circuit_connector?: unknown;
  fluid_wagon_connector_graphics?: unknown;
};

export type BeaconProtptype = EntityWithOwnerPrototype<"beacon"> & {
  energy_usage: Energy;
  energy_source: ElectricEnergySource | VoidEnergySource;
  supply_area_distance: number;
  distribution_effectivity: number;
  distribution_effectivity_bonus_per_quality_level?: number;
  module_slots: number;
  quality_affects_supply_area_slots?: boolean;
  quality_affects_supply_area_distance?: boolean;
  graphics_set?: unknown;
  animation?: unknown;
  base_picture?: unknown;
  perceived_performance?: unknown;
  radius_visualisation_picture?: Sprite;
  allowed_effects?: EffectTypeLimitation;
  /** ModuleCategoryID */
  allowed_module_categories?: string[];
  /** Extra multiplier applied to the effects received
   * from beacon by the effect receiver
   * based on amount of beacons that are
   * in range of that effect receiver. */
  profile?: number[];
  /** The beacon counter used by effect receiver
   * when deciding which sample to take from profile. */
  beacon_counter?: "total" | "same_type";
};

export type HeatBuffer = {
  max_temperature: number;
  specific_heat: Energy;
  max_transfer: Energy;
  default_temperature?: number;
  min_temperature_gradient?: number;
  min_working_temperature?: number;
  minimum_glow_temperature?: number;
  pipe_covers?: unknown;
  heat_pipe_covers?: unknown;
  heat_picture?: unknown;
  heat_glow?: unknown;
  connections?: unknown;
};

export type ReactorPrototype = EntityWithOwnerPrototype<"reactor"> & {
  working_light_picture?: unknown;
  heat_buffer: HeatBuffer;
  heating_radius?: number;
  energy_source: EnergySoruce;
  consumption: Energy;
  connection_patches_connected?: unknown;
  connection_patches_disconnected?: unknown;
  heat_connection_patches_connected?: unknown;
  heat_connection_patches_disconnected?: unknown;
  lower_layer_picture?: Sprite;
  heat_lower_layer_picture?: Sprite;
  picture?: unknown;
  light?: unknown;
  meltdown_action?: Trigger;
  neighbour_bonus?: number;
  scale_energy_usage?: boolean;
  use_fuel_glow_color?: boolean;
  default_fuel_glow_color?: Color;
  circuit_wire_max_distance?: number;
  draw_copper_wires?: boolean;
  draw_circuit_wires?: boolean;
  circuit_connector?: unknown;
  default_temperature_signal?: unknown;
};

export type TransportBeltConnectablePrototype<TType extends string> =
  EntityWithOwnerPrototype<TType> & {
    belt_animation_set?: unknown;
    speed: number;
    animation_speed_coefficient?: number;
  };

export type TransportBeltPrototype =
  TransportBeltConnectablePrototype<"transport-belt"> & {
    connector_frame_sprites?: unknown;
    circuit_wire_max_distance?: number;
    draw_copper_wires?: boolean;
    draw_circuit_wires?: boolean;
    circuit_connector?: unknown;
    /** EntityID */
    related_underground_belt?: string;
  };

export type UndergroundBeltPrototype =
  TransportBeltConnectablePrototype<"underground-belt"> & {
    max_distance: number;
    structure?: unknown;
    underground_sprite?: Sprite;
    underground_remove_belts_sprite?: Sprite;
    max_distance_underground_remove_belts_sprite?: Sprite;
    underground_collision_mask?: unknown;
    max_distance_tint?: Color;
  };

export type SplitterPrototype =
  TransportBeltConnectablePrototype<"splitter"> & {
    structure?: unknown;
    structure_patch?: unknown;
    frozen_patch?: unknown;
    structure_animation_speed_coefficient?: number;
    structure_animation_movement_cooldown?: number;
    /** EntityID */
    related_transport_belt?: string;
    circuit_wire_max_distance?: number;
    draw_copper_wires?: boolean;
    draw_circuit_wires?: boolean;
    circuit_connector?: unknown;
    default_input_left_condition?: unknown;
    default_input_right_condition?: unknown;
    default_output_left_condition?: unknown;
    default_output_right_condition?: unknown;
  };

export type MiningDrillPrototype = EntityWithOwnerPrototype<"mining-drill"> & {
  vector_to_place_result: Vector;
  resource_searching_radius: number;
  resoruce_searching_offset?: Vector;
  energy_usage: Energy;
  mining_speed: number;
  energy_source: EnergySoruce;
  /** ResourceCategoryID[] */
  resource_categories: string[];
  output_fluid_box?: unknown;
  input_fluid_box?: unknown;
  graphics_set?: unknown;
  wet_mining_graphics_set?: unknown;
  perceived_performance?: unknown;
  base_picture?: unknown;
  effect_receiver?: EffectReciever;
  module_slots?: number;
  quality_affects_module_slots?: boolean;
  allowed_effects?: EffectTypeLimitation;
  /** ModuleCategoryID[] */
  allowed_module_categorues?: string[];
  radius_visualisation_picture?: Sprite;
  circuit_wire_max_distance?: number;
  draw_copper_wires?: boolean;
  draw_circuit_wires?: boolean;
  base_render_layer?: RenderLayer;
  resource_drain_rate_percent?: number;
  shuffle_resources_to_mine?: boolean;
  drops_full_belt_stacks?: boolean;
  uses_force_mining_productivity_bonus?: boolean;
  quality_affects_mining_radius?: boolean;
  moving_sound?: unknown;
  drilling_sound?: unknown;
  drilling_sound_animation_start_frame?: number;
  drilling_sound_animation_end_frame?: number;
  monitor_visualization_tint?: Color;
  circuit_connector?: unknown;
  filter_count?: number;
};

export type ResourceEntityPrototype = EntityPrototype<"resource"> & {
  stages?: unknown;
  stage_counts: number[];
  infinite?: boolean;
  highlight?: boolean;
  randomize_visual_position?: boolean;
  map_grid?: boolean;
  draw_stateless_visualisation_under_building?: boolean;
  minimum?: number;
  normal?: number;
  infinite_depletion_amount?: number;
  resource_patch_search_radius?: number;
  /** ResourceCategoryID */
  category?: string;
  walking_sound?: Sound;
  driving_sound?: Sound;
  stages_effect?: unknown;
  effect_animation_period?: number;
  effect_animation_period_deviation?: number;
  effect_darkness_multiplier?: number;
  min_effect_alpha?: number;
  max_effect_alpha?: number;
  tree_removal_probability?: number;
  cliff_removal_probability?: number;
  tree_removal_max_distance?: number;
  mining_visualisation_tint?: Color;
};

export type ToolPrototype<TType extends string> = ItemPrototype<TType> & {
  durability?: number;
  durability_description_key?: string;
  durability_description_value?: string;
  factoriopedia_durability_description_key?: string;
  infinite?: boolean;
};

export type ModulePrototype = ItemPrototype<"module"> & {
  /** ModuleCategoryID */
  category: string;
  tier: number;
  effect: Effect;
  requires_beacon_alt_mode?: boolean;
  art_style?: string;
  beacon_tint?: unknown;
};

export type AmmoType = {
  action?: Trigger;
  clamp_position?: boolean;
  energy_consumption?: Energy;
  range_modifier?: number;
  cooldown_modifier?: number;
  consumption_modifier?: number;
  target_type?: "entity" | "position" | "direction";
  source_type?: "default" | "player" | "turret" | "vehicle";
  /** EntityID[] */
  target_filter?: string[];
};

export type AmmoItemPrototype = ItemPrototype<"ammo"> & {
  ammo_type: AmmoType | AmmoType[];
  magazine_size?: number;
  reload_time?: number;
  /** AmmoCategoryID */
  ammo_category: string;
  shoot_protected?: boolean;
};

export type AttackParameters =
  | ProjectileAttackParameters
  | BeamAttackParameters
  | StreamAttackParameters;

export type BaseAttackParameters = {
  range: number;
  cooldown: number;
  min_range?: number;
  turn_range?: number;
  fire_penalty?: number;
  rotate_penalty?: number;
  health_penatly?: number;
  range_mode?:
    | "center-to-center"
    | "bounding-box-to-bounding-box"
    | "center-to-bounding-box";
  min_attack_distance?: number;
  damage_modifier?: number;
  ammo_consumption_modifier?: number;
  cooldown_deviation?: number;
  warmup?: number;
  lead_target_for_projective_speed?: number;
  lead_target_for_projectile_delay?: number;
  movement_slow_down_coolown?: number;
  movement_slow_down_factor?: number;
  ammo_type?: AmmoType;
  activation_type?: "shoot" | "throw" | "consume" | "activate";
  sound?: unknown;
  animation?: unknown;
  cyclic_sound?: unknown;
  use_shooter_direction?: boolean;
  true_collinear_ejection?: boolean;
} & (
  | {
      /** AmmoCategoryID[] */
      ammo_categories: string[];
    }
  | {
      /** AmmoCategoryID */
      ammo_category: string;
    }
);

export type ProjectileAttackParameters = BaseAttackParameters & {
  type: "projectile";
  apply_projection_to_projectile_creation_position?: boolean;
  projectile_center?: Vector;
  projectile_creation_distance?: number;
  shell_particle?: unknown;
  projectile_creation_parameters?: unknown;
  projectile_orientation_offset?: unknown;
  projectile_creation_offsets?: Vector[];
};

export type BeamAttackParameters = BaseAttackParameters & {
  type: "beam";
  source_direction_count?: number;
  source_offset?: Vector;
};

export type StreamAttackParameters = BaseAttackParameters & {
  type: "stream";
  fluid_consumption?: number;
  gun_barrel_length?: number;
  projectile_creation_parameters?: unknown;
  gun_center_shift?: unknown;
  fluids?: unknown;
};

export type GunPrototype = ItemPrototype<"gun"> & {
  attack_parameters: AttackParameters;
};

export type ArmorPrototype = ToolPrototype<"armor"> & {
  /** EquipmentGridID */
  equipment_grid?: string;
  resistances?: Resistance[];
  inventory_size_bonus?: number;
  provides_flight?: boolean;
  collision_box?: unknown;
  drawing_box?: unknown;
  takeoff_sound?: Sound;
  flight_sound?: unknown;
  landing_sound?: unknown;
  steps_sound?: Sound;
  moving_sound?: Sound;
};

export type ItemGroup = Prototype<"item-group"> & {
  icons?: IconData[];
  icon?: string;
  icon_size?: number;
  order_in_recipe?: string;
};

export type ItemSubGroup = Prototype<"item-subgroup"> & {
  /** ItemGroupID */
  group: string;
};

export type AmmoCategory = Prototype<"ammo-category"> & {
  bonus_gui_order?: string;
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
};

export type FuelCategory = Prototype<"fuel-category"> & {
  fuel_value_type?: LocalisedString;
};

export type ResourceCategory = Prototype<"resource-category">;

export type ModuleCategory = Prototype<"module-category">;

export type ResearchIngredient = [item: string, amount: number];

export type TechnologyUnit = {
  count?: number;
  count_formula?: string;
  time: number;
  ingredients: ResearchIngredient[];
};

export type Modifier =
  | InserterStackSizeBonusModifier
  | BulkInserterCapacityBonusModifier
  | LaboratorySpeedModifier
  | CharacterLogisticTrashSlotsModifier
  | MaximumFollowingRobotsCountModifier
  | WorkerRobotSpeedModifier
  | WorkerRobotStorageModifier
  | TurretAttackModifier
  | AmmoDamageModifier
  | GiveItemModifier
  | GunSpeedModifier
  | UnlockRecipeModifier
  | CharacterCraftingSpeedModifier
  | CharacterMiningSpeedModifier
  | CharacterRunningSpeedModifier
  | CharacterBuildDistanceModifier
  | CharacterItemDropDistanceModifier
  | CharacterReachDistanceModifier
  | CharacterResourceReachDistanceModifier
  | CharacterItemPickupDistanceModifier
  | CharacterLootPickupDistanceModifier
  | CharacterInventorySlotsBonusModifier
  | DeconstructionTimeToLiveModifier
  | MaxFailedAttemptsPerTickPerConstructionQueueModifier
  | MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier
  | CharacterHealthBonusModifier
  | MiningDrillProductivityBonusModifier
  | TrainBrakingForceBonusModifier
  | WorkerRobotBatteryModifier
  | LaboratoryProductivityModifier
  | FollowerRobotLifetimeModifier
  | ArtilleryRangeModifier
  | NothingModifier
  | CharacterLogisticRequestsModifier
  | VehicleLogisticsModifier
  | UnlockSpaceLocationModifier
  | UnlockQualityModifier
  | SpacePlatformsModifier
  | CircuitNetworkModifier
  | CargoLandingPadLimitModifier
  | ChangeRecipeProductivityModifier
  | CliffDeconstructionEnabledModifier
  | MiningWithFluidModifier
  | RailSupportOnDeepOilOceanModifier
  | RailPlannerAllowElevatedRailsModifier
  | BeaconDistributionModifier
  | CreateGhostOnEntityDeathModifier
  | BeltStackSizeBonusModifier;

export type BaseModifier = {
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
  hidden?: true;
};

export type SimpleModifier = BaseModifier & {
  modifier: number;
};
export type BoolModifier = BaseModifier & {
  modifier: boolean;
};

export type SimpleModifier2<TType extends string> = SimpleModifier & {
  type: TType;
  infer_icon?: boolean;
  use_icon_overlay_constant?: boolean;
};

export type InserterStackSizeBonusModifier =
  SimpleModifier2<"inserter-stack-size-bonus">;
export type BulkInserterCapacityBonusModifier =
  SimpleModifier2<"bulk-inserter-capacity-bonus">;
export type LaboratorySpeedModifier = SimpleModifier2<"laboratory-speed">;
export type CharacterLogisticTrashSlotsModifier = SimpleModifier & {
  type: "character-logistic-trash-slots";
  use_icon_overlay_constant?: boolean;
};
export type MaximumFollowingRobotsCountModifier =
  SimpleModifier2<"maximum-following-robots-count">;
export type WorkerRobotSpeedModifier = SimpleModifier2<"worker-robot-speed">;
export type WorkerRobotStorageModifier =
  SimpleModifier2<"worker-robot-storage">;
export type TurretAttackModifier = SimpleModifier2<"turret-attack"> & {
  /** EntityID */
  turret_id: string;
  modifier: number;
};
export type AmmoDamageModifier = SimpleModifier2<"ammo-damage"> & {
  /** AmmoCategoryID */
  ammo_category: string;
};
export type GiveItemModifier = SimpleModifier & {
  type: "give-item";
  use_icon_overlay_constant?: boolean;
  /** ItemID */
  item: string;
  /** QualityID */
  quality?: string;
  count: number;
};
export type GunSpeedModifier = SimpleModifier2<"gun-speed"> & {
  /** AmmoCategoryID */
  ammo_category: string;
};
export type UnlockRecipeModifier = BaseModifier & {
  type: "unlock-recipe";
  use_icon_overlay_constant?: boolean;
  /** RecipeID */
  recipe: string;
};
export type CharacterCraftingSpeedModifier = SimpleModifier & {
  type: "character-crafting-speed";
  use_icon_overlay_constant?: boolean;
};
export type CharacterMiningSpeedModifier = SimpleModifier & {
  type: "character-mining-speed";
  use_icon_overlay_constant?: boolean;
};
export type CharacterRunningSpeedModifier = SimpleModifier & {
  type: "character-running-speed";
  use_icon_overlay_constant?: boolean;
};
export type CharacterBuildDistanceModifier = SimpleModifier & {
  type: "character-build-distance";
  use_icon_overlay_constant?: boolean;
};
export type CharacterItemDropDistanceModifier = SimpleModifier & {
  type: "character-item-drop-distance";
  use_icon_overlay_constant?: boolean;
};
export type CharacterReachDistanceModifier = SimpleModifier & {
  type: "character-reach-distance";
  use_icon_overlay_constant?: boolean;
};
export type CharacterResourceReachDistanceModifier = SimpleModifier & {
  type: "character-resource-reach-distance";
  use_icon_overlay_constant?: boolean;
};
export type CharacterItemPickupDistanceModifier = SimpleModifier & {
  type: "character-item-pickup-distance";
  use_icon_overlay_constant?: boolean;
};
export type CharacterLootPickupDistanceModifier = SimpleModifier & {
  type: "character-loot-pickup-distance";
  use_icon_overlay_constant?: boolean;
};
export type CharacterInventorySlotsBonusModifier = SimpleModifier & {
  type: "character-inventory-slots-bonus";
  use_icon_overlay_constant?: boolean;
};
export type DeconstructionTimeToLiveModifier = SimpleModifier & {
  type: "deconstruction-time-to-live";
  use_icon_overlay_constant?: boolean;
};
export type MaxFailedAttemptsPerTickPerConstructionQueueModifier =
  SimpleModifier & {
    type: "max-failed-attempts-per-tick-per-construction-queue";
    use_icon_overlay_constant?: boolean;
  };
export type MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier =
  SimpleModifier & {
    type: "max-successful-attempts-per-tick-per-construction-queue";
    use_icon_overlay_constant?: boolean;
  };
export type CharacterHealthBonusModifier = SimpleModifier & {
  type: "character-health-bonus";
  use_icon_overlay_constant?: boolean;
};
export type MiningDrillProductivityBonusModifier =
  SimpleModifier2<"mining-drill-productivity-bonus">;
export type TrainBrakingForceBonusModifier =
  SimpleModifier2<"train-braking-force-bonus">;
export type WorkerRobotBatteryModifier =
  SimpleModifier2<"worker-robot-battery">;
export type LaboratoryProductivityModifier =
  SimpleModifier2<"laboratory-productivity">;
export type FollowerRobotLifetimeModifier =
  SimpleModifier2<"follower-robot-lifetime">;
export type ArtilleryRangeModifier = SimpleModifier2<"artillery-range">;
export type NothingModifier = {
  type: "nothing";
  use_icon_overlay_constant?: boolean;
  effect_dscription?: LocalisedString;
};
export type CharacterLogisticRequestsModifier = BoolModifier & {
  type: "character-logistic-requests";
  use_icon_overlay_constant?: boolean;
};
export type VehicleLogisticsModifier = BoolModifier & {
  type: "vehicle-logistics";
  use_icon_overlay_constant?: boolean;
};
export type UnlockSpaceLocationModifier = BaseModifier & {
  type: "unlock-space-location";
  use_icon_overlay_constant?: boolean;
  /** SpaceLocationID */
  space_location: string;
};
export type UnlockQualityModifier = BaseModifier & {
  type: "unlock-quality";
  use_icon_overlay_constant?: boolean;
  /** QualityID */
  quality: string;
};
export type SpacePlatformsModifier = BoolModifier & {
  type: "unlock-space-platforms";
  use_icon_overlay_constant?: boolean;
};
export type CircuitNetworkModifier = BoolModifier & {
  type: "unlock-circuit-network";
  use_icon_overlay_constant?: boolean;
};
export type CargoLandingPadLimitModifier = BoolModifier & {
  type: "cargo-landing-pad-count";
  use_icon_overlay_constant?: boolean;
};
export type ChangeRecipeProductivityModifier = BaseModifier & {
  type: "change-recipe-productivity";
  use_icon_overlay_constant?: boolean;
  /** RecipeID */
  recipe: string;
  change: number;
};
export type CliffDeconstructionEnabledModifier = BoolModifier & {
  type: "cliff-deconstruction-enabled";
  use_icon_overlay_constant?: boolean;
};
export type MiningWithFluidModifier = BoolModifier & {
  type: "mining-with-fluid";
  use_icon_overlay_constant?: boolean;
};
export type RailSupportOnDeepOilOceanModifier = BoolModifier & {
  type: "rail-support-on-deep-oil-ocean";
  use_icon_overlay_constant?: boolean;
};
export type RailPlannerAllowElevatedRailsModifier = BoolModifier & {
  type: "rail-planner-allow-elevated-rails";
  use_icon_overlay_constant?: boolean;
};
export type BeaconDistributionModifier = SimpleModifier2<"beacon-distribution">;
export type CreateGhostOnEntityDeathModifier = BoolModifier & {
  type: "create-ghost-on-entity-death";
  use_icon_overlay_constant?: boolean;
};
export type BeltStackSizeBonusModifier = SimpleModifier & {
  type: "belt-stack-size-bonus";
  use_icon_overlay_constant?: boolean;
};

export type TechnologyPrototype = Prototype<"technology"> & {
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
  upgrade?: boolean;
  enabled?: boolean;
  essential?: boolean;
  visible_when_disabled?: boolean;
  ignore_tech_cost_multiplier?: boolean;
  allows_productivity?: boolean;
  max_level?: number | "infinite";
  /** TechnologyID */
  prerequisites?: string[];
  show_levels_info?: boolean;
  effects?: Modifier[];
} & (
    | {
        research_trigger?: unknown;
      }
    | {
        unit?: TechnologyUnit;
      }
  );

export type AirbornePollutantPrototype = Prototype<"airborne-pollutant"> & {
  localisend_name_with_amount?: string;
  chart_color: Color;
  icon: Sprite;
  affects_evolution: boolean;
  affects_water_tint: boolean;
  damages_trees?: boolean;
};

export type PlanetPrototype = SpaceLocationPrototype<"planet"> & {
  map_seed_offset?: number;
  entities_require_heating?: boolean;
  /** AirbornePollutantID */
  pollutant_type?: string;
  persistent_ambient_sounds?: unknown;
  surface_render_parameters?: unknown;
  player_effects?: Trigger;
  ticks_between_player_effects?: number;
  map_gen_settings?: unknown;
  /** [SurfacePropertyID]: number */
  surface_properties?: Partial<Record<string, number>>;
  lightning_properties?: unknown;
};

export type SurfacePropertyPrototype = Prototype<"surface-property"> & {
  localised_init_key?: string;
  default_value: number;
  is_time?: boolean;
};

export type SpacePlatformHubPrototype =
  EntityWithOwnerPrototype<"space-platform-hub"> & {
    graphics_set?: unknown;
    inventory_size: number;
    /** EntityID of a ContainerPrototype */
    dump_container: string;
    persistent_ambient_sounds?: unknown;
    surface_render_parameters?: unknown;
    circuit_wire_max_distance?: number;
    draw_copper_wires?: boolean;
    draw_circuit_wires?: boolean;
    circuit_connector?: unknown;
    default_speed_signal?: unknown;
    default_damage_taken_signal?: unknown;
    platform_repair_speed_modifier?: number;
    weight?: number;
    cargo_station_parameters: CargoStationParameters;
  };

export type CargoBayPrototype = EntityWithOwnerPrototype<"cargo-bay"> & {
  graphics_set?: unknown;
  platform_graphics_set?: unknown;
  inventory_size_bonus: number;
  hatch_definitions?: unknown;
};

export type ThrusterPerformancePoint = {
  fluid_volume: number;
  fluid_usage: number;
  effectivity: number;
};

export type ThrusterPrototype = EntityWithOwnerPrototype<"thruster"> & {
  min_performance: ThrusterPerformancePoint;
  max_performance: ThrusterPerformancePoint;
  fuel_fluid_box: unknown;
  oxidizer_fluid_box: unknown;
  graphics_set?: unknown;
  plumes?: unknown;
};

export type FusionGeneratorPrototype =
  EntityWithOwnerPrototype<"fusion-generator"> & {
    energy_source: ElectricEnergySource;
    graphics_set?: unknown;
    input_fluid_box: unknown;
    output_fluid_box: unknown;
    max_fluid_usage: number;
    perceived_performance?: unknown;
    burns_fluid?: boolean;
    effectivity?: number;
  };

export type FusionReactorPrototype =
  EntityWithOwnerPrototype<"fusion-reactor"> & {
    energy_source: ElectricEnergySource;
    burner: BurnerEnergySource;
    graphics_set: unknown;
    input_fluid_box: unknown;
    output_fluid_box: unknown;
    neighbour_connectable?: unknown;
    two_direction_only?: boolean;
    neighbour_bonus?: number;
    power_input: Energy;
    max_fluid_usage: number;
    target_temperature?: number;
    perceived_performance?: unknown;
  };

export type TreePrototype<TType extends string> =
  EntityWithHealthPrototype<TType> & {
    variation_weights?: number[];
    darkness_of_burnt_tree?: number;
    stateless_visualisation_variations?: unknown;
  } & (
      | {
          pictures: unknown;
          colors: Color[];
        }
      | {
          variations: unknown;
        }
    );

export type PlantPrototype = TreePrototype<"plant"> & {
  growth_ticks: number;
  /** [AirbornePollutantID]: number */
  harvest_emissions?: Partial<Record<string, number>>;
  agricultural_tower_tint?: RecipeTints;
};

export type AsteroidPrototype = EntityWithOwnerPrototype<"asteroid"> & {
  mass?: number;
  graphics_set?: unknown;
};

export type SpacePlatformStarterPackPrototype =
  ItemPrototype<"space-platform-starter-pack"> & {
    trigger?: Trigger;
    /** SurfaceID */
    surface?: string;
    create_electric_network?: boolean;
    tiles?: unknown;
    initial_items?: unknown;
  };

export type SpaceConnectionAsteroidSpawnPoint = AsteroidSpawnPoint & {
  distance: number;
};

export type SpaceConnectionAsteroidSpawnDefinition =
  | [
      // EntityID
      asteroid: string,
      spawn_points: SpaceConnectionAsteroidSpawnPoint[],
    ]
  | {
      type?: "entity" | "asteroid-chunk";
      /** EntityID | AsteroidChunkID */
      asteroid: string;
      spawn_points: SpaceConnectionAsteroidSpawnPoint[];
    };

export type SpaceConnectionPrototype = Prototype<"space-connection"> & {
  /** SpaceLocationID */
  from: string;
  /** SpaceLocationID */
  to: string;
  length?: number;
  asteroid_spawn_definitions?: SpaceConnectionAsteroidSpawnDefinition[];
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
};

export type SurfacePrototype = Prototype<"surface"> & {
  /** [SurfacePropertyID]: number */
  surface_properties?: Partial<Record<string, number>>;
  icons?: [IconData, ...IconData[]];
  icon?: string;
  icon_size?: number;
};
