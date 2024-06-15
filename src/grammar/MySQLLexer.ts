// Generated from ./src/grammar/MySQLLexer.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";

  // import { MySQLBaseLexer } from './MySQLBaseLexer'
  import { SqlMode } from './common'

import MySQLBaseLexer from './MySQLBaseLexer';

export default class MySQLLexer extends MySQLBaseLexer {
	public static readonly ACCOUNT_SYMBOL = 1;
	public static readonly ASCII_SYMBOL = 2;
	public static readonly ALWAYS_SYMBOL = 3;
	public static readonly BACKUP_SYMBOL = 4;
	public static readonly BEGIN_SYMBOL = 5;
	public static readonly BYTE_SYMBOL = 6;
	public static readonly CACHE_SYMBOL = 7;
	public static readonly CHARSET_SYMBOL = 8;
	public static readonly CHECKSUM_SYMBOL = 9;
	public static readonly CLOSE_SYMBOL = 10;
	public static readonly COMMENT_SYMBOL = 11;
	public static readonly COMMIT_SYMBOL = 12;
	public static readonly CONTAINS_SYMBOL = 13;
	public static readonly DEALLOCATE_SYMBOL = 14;
	public static readonly DO_SYMBOL = 15;
	public static readonly END_SYMBOL = 16;
	public static readonly EXECUTE_SYMBOL = 17;
	public static readonly FLUSH_SYMBOL = 18;
	public static readonly FOLLOWS_SYMBOL = 19;
	public static readonly FORMAT_SYMBOL = 20;
	public static readonly GROUP_REPLICATION_SYMBOL = 21;
	public static readonly HANDLER_SYMBOL = 22;
	public static readonly HELP_SYMBOL = 23;
	public static readonly HOST_SYMBOL = 24;
	public static readonly INSTALL_SYMBOL = 25;
	public static readonly LANGUAGE_SYMBOL = 26;
	public static readonly NO_SYMBOL = 27;
	public static readonly OPEN_SYMBOL = 28;
	public static readonly OPTIONS_SYMBOL = 29;
	public static readonly OWNER_SYMBOL = 30;
	public static readonly PARSER_SYMBOL = 31;
	public static readonly PARTITION_SYMBOL = 32;
	public static readonly PORT_SYMBOL = 33;
	public static readonly PRECEDES_SYMBOL = 34;
	public static readonly PREPARE_SYMBOL = 35;
	public static readonly REMOVE_SYMBOL = 36;
	public static readonly REPAIR_SYMBOL = 37;
	public static readonly RESET_SYMBOL = 38;
	public static readonly RESTORE_SYMBOL = 39;
	public static readonly ROLLBACK_SYMBOL = 40;
	public static readonly SAVEPOINT_SYMBOL = 41;
	public static readonly SECURITY_SYMBOL = 42;
	public static readonly SERVER_SYMBOL = 43;
	public static readonly SIGNED_SYMBOL = 44;
	public static readonly SLAVE_SYMBOL = 45;
	public static readonly SOCKET_SYMBOL = 46;
	public static readonly SONAME_SYMBOL = 47;
	public static readonly START_SYMBOL = 48;
	public static readonly STOP_SYMBOL = 49;
	public static readonly TRUNCATE_SYMBOL = 50;
	public static readonly UNICODE_SYMBOL = 51;
	public static readonly UNINSTALL_SYMBOL = 52;
	public static readonly UPGRADE_SYMBOL = 53;
	public static readonly WRAPPER_SYMBOL = 54;
	public static readonly XA_SYMBOL = 55;
	public static readonly SHUTDOWN_SYMBOL = 56;
	public static readonly ACTION_SYMBOL = 57;
	public static readonly ADDDATE_SYMBOL = 58;
	public static readonly AFTER_SYMBOL = 59;
	public static readonly AGAINST_SYMBOL = 60;
	public static readonly AGGREGATE_SYMBOL = 61;
	public static readonly ALGORITHM_SYMBOL = 62;
	public static readonly ANALYZE_SYMBOL = 63;
	public static readonly ANY_SYMBOL = 64;
	public static readonly AT_SYMBOL = 65;
	public static readonly AUTHORS_SYMBOL = 66;
	public static readonly AUTO_INCREMENT_SYMBOL = 67;
	public static readonly AUTOEXTEND_SIZE_SYMBOL = 68;
	public static readonly AVG_ROW_LENGTH_SYMBOL = 69;
	public static readonly AVG_SYMBOL = 70;
	public static readonly BINLOG_SYMBOL = 71;
	public static readonly BIT_SYMBOL = 72;
	public static readonly BLOCK_SYMBOL = 73;
	public static readonly BOOL_SYMBOL = 74;
	public static readonly BOOLEAN_SYMBOL = 75;
	public static readonly BTREE_SYMBOL = 76;
	public static readonly CASCADED_SYMBOL = 77;
	public static readonly CATALOG_NAME_SYMBOL = 78;
	public static readonly CHAIN_SYMBOL = 79;
	public static readonly CHANGED_SYMBOL = 80;
	public static readonly CHANNEL_SYMBOL = 81;
	public static readonly CIPHER_SYMBOL = 82;
	public static readonly CLIENT_SYMBOL = 83;
	public static readonly CLASS_ORIGIN_SYMBOL = 84;
	public static readonly COALESCE_SYMBOL = 85;
	public static readonly CODE_SYMBOL = 86;
	public static readonly COLLATION_SYMBOL = 87;
	public static readonly COLUMN_NAME_SYMBOL = 88;
	public static readonly COLUMN_FORMAT_SYMBOL = 89;
	public static readonly COLUMNS_SYMBOL = 90;
	public static readonly COMMITTED_SYMBOL = 91;
	public static readonly COMPACT_SYMBOL = 92;
	public static readonly COMPLETION_SYMBOL = 93;
	public static readonly COMPRESSED_SYMBOL = 94;
	public static readonly COMPRESSION_SYMBOL = 95;
	public static readonly ENCRYPTION_SYMBOL = 96;
	public static readonly CONCURRENT_SYMBOL = 97;
	public static readonly CONNECTION_SYMBOL = 98;
	public static readonly CONSISTENT_SYMBOL = 99;
	public static readonly CONSTRAINT_CATALOG_SYMBOL = 100;
	public static readonly CONSTRAINT_SCHEMA_SYMBOL = 101;
	public static readonly CONSTRAINT_NAME_SYMBOL = 102;
	public static readonly CONTEXT_SYMBOL = 103;
	public static readonly CONTRIBUTORS_SYMBOL = 104;
	public static readonly CPU_SYMBOL = 105;
	public static readonly CUBE_SYMBOL = 106;
	public static readonly CURRENT_SYMBOL = 107;
	public static readonly CURSOR_NAME_SYMBOL = 108;
	public static readonly DATA_SYMBOL = 109;
	public static readonly DATAFILE_SYMBOL = 110;
	public static readonly DATETIME_SYMBOL = 111;
	public static readonly DATE_SYMBOL = 112;
	public static readonly DAY_SYMBOL = 113;
	public static readonly DEFAULT_AUTH_SYMBOL = 114;
	public static readonly DEFINER_SYMBOL = 115;
	public static readonly DELAY_KEY_WRITE_SYMBOL = 116;
	public static readonly DES_KEY_FILE_SYMBOL = 117;
	public static readonly DIAGNOSTICS_SYMBOL = 118;
	public static readonly DIRECTORY_SYMBOL = 119;
	public static readonly DISABLE_SYMBOL = 120;
	public static readonly DISCARD_SYMBOL = 121;
	public static readonly DISK_SYMBOL = 122;
	public static readonly DUMPFILE_SYMBOL = 123;
	public static readonly DUPLICATE_SYMBOL = 124;
	public static readonly DYNAMIC_SYMBOL = 125;
	public static readonly ENDS_SYMBOL = 126;
	public static readonly ENUM_SYMBOL = 127;
	public static readonly ENGINE_SYMBOL = 128;
	public static readonly ENGINES_SYMBOL = 129;
	public static readonly ERROR_SYMBOL = 130;
	public static readonly ERRORS_SYMBOL = 131;
	public static readonly ESCAPE_SYMBOL = 132;
	public static readonly EVENT_SYMBOL = 133;
	public static readonly EVENTS_SYMBOL = 134;
	public static readonly EVERY_SYMBOL = 135;
	public static readonly EXPANSION_SYMBOL = 136;
	public static readonly EXPORT_SYMBOL = 137;
	public static readonly EXTENDED_SYMBOL = 138;
	public static readonly EXTENT_SIZE_SYMBOL = 139;
	public static readonly FAULTS_SYMBOL = 140;
	public static readonly FAST_SYMBOL = 141;
	public static readonly FOUND_SYMBOL = 142;
	public static readonly ENABLE_SYMBOL = 143;
	public static readonly FULL_SYMBOL = 144;
	public static readonly FILE_SYMBOL = 145;
	public static readonly FILE_BLOCK_SIZE_SYMBOL = 146;
	public static readonly FILTER_SYMBOL = 147;
	public static readonly FIRST_SYMBOL = 148;
	public static readonly FIXED_SYMBOL = 149;
	public static readonly GENERAL_SYMBOL = 150;
	public static readonly GEOMETRY_SYMBOL = 151;
	public static readonly GEOMETRYCOLLECTION_SYMBOL = 152;
	public static readonly GET_FORMAT_SYMBOL = 153;
	public static readonly GRANTS_SYMBOL = 154;
	public static readonly GLOBAL_SYMBOL = 155;
	public static readonly HASH_SYMBOL = 156;
	public static readonly HOSTS_SYMBOL = 157;
	public static readonly HOUR_SYMBOL = 158;
	public static readonly IDENTIFIED_SYMBOL = 159;
	public static readonly IGNORE_SERVER_IDS_SYMBOL = 160;
	public static readonly INVOKER_SYMBOL = 161;
	public static readonly IMPORT_SYMBOL = 162;
	public static readonly INDEXES_SYMBOL = 163;
	public static readonly INITIAL_SIZE_SYMBOL = 164;
	public static readonly INSTANCE_SYMBOL = 165;
	public static readonly INNODB_SYMBOL = 166;
	public static readonly IO_SYMBOL = 167;
	public static readonly IPC_SYMBOL = 168;
	public static readonly ISOLATION_SYMBOL = 169;
	public static readonly ISSUER_SYMBOL = 170;
	public static readonly INSERT_METHOD_SYMBOL = 171;
	public static readonly JSON_SYMBOL = 172;
	public static readonly KEY_BLOCK_SIZE_SYMBOL = 173;
	public static readonly LAST_SYMBOL = 174;
	public static readonly LEAVES_SYMBOL = 175;
	public static readonly LESS_SYMBOL = 176;
	public static readonly LEVEL_SYMBOL = 177;
	public static readonly LINESTRING_SYMBOL = 178;
	public static readonly LIST_SYMBOL = 179;
	public static readonly LOCAL_SYMBOL = 180;
	public static readonly LOCKS_SYMBOL = 181;
	public static readonly LOGFILE_SYMBOL = 182;
	public static readonly LOGS_SYMBOL = 183;
	public static readonly MAX_ROWS_SYMBOL = 184;
	public static readonly MASTER_SYMBOL = 185;
	public static readonly MASTER_HEARTBEAT_PERIOD_SYMBOL = 186;
	public static readonly MASTER_HOST_SYMBOL = 187;
	public static readonly MASTER_PORT_SYMBOL = 188;
	public static readonly MASTER_LOG_FILE_SYMBOL = 189;
	public static readonly MASTER_LOG_POS_SYMBOL = 190;
	public static readonly MASTER_USER_SYMBOL = 191;
	public static readonly MASTER_PASSWORD_SYMBOL = 192;
	public static readonly MASTER_SERVER_ID_SYMBOL = 193;
	public static readonly MASTER_CONNECT_RETRY_SYMBOL = 194;
	public static readonly MASTER_RETRY_COUNT_SYMBOL = 195;
	public static readonly MASTER_DELAY_SYMBOL = 196;
	public static readonly MASTER_SSL_SYMBOL = 197;
	public static readonly MASTER_SSL_CA_SYMBOL = 198;
	public static readonly MASTER_SSL_CAPATH_SYMBOL = 199;
	public static readonly MASTER_TLS_VERSION_SYMBOL = 200;
	public static readonly MASTER_SSL_CERT_SYMBOL = 201;
	public static readonly MASTER_SSL_CIPHER_SYMBOL = 202;
	public static readonly MASTER_SSL_CRL_SYMBOL = 203;
	public static readonly MASTER_SSL_CRLPATH_SYMBOL = 204;
	public static readonly MASTER_SSL_KEY_SYMBOL = 205;
	public static readonly MASTER_AUTO_POSITION_SYMBOL = 206;
	public static readonly MAX_CONNECTIONS_PER_HOUR_SYMBOL = 207;
	public static readonly MAX_QUERIES_PER_HOUR_SYMBOL = 208;
	public static readonly MAX_STATEMENT_TIME_SYMBOL = 209;
	public static readonly MAX_SIZE_SYMBOL = 210;
	public static readonly MAX_UPDATES_PER_HOUR_SYMBOL = 211;
	public static readonly MAX_USER_CONNECTIONS_SYMBOL = 212;
	public static readonly MEDIUM_SYMBOL = 213;
	public static readonly MEMORY_SYMBOL = 214;
	public static readonly MERGE_SYMBOL = 215;
	public static readonly MESSAGE_TEXT_SYMBOL = 216;
	public static readonly MICROSECOND_SYMBOL = 217;
	public static readonly MIGRATE_SYMBOL = 218;
	public static readonly MINUTE_SYMBOL = 219;
	public static readonly MIN_ROWS_SYMBOL = 220;
	public static readonly MODIFY_SYMBOL = 221;
	public static readonly MODE_SYMBOL = 222;
	public static readonly MONTH_SYMBOL = 223;
	public static readonly MULTILINESTRING_SYMBOL = 224;
	public static readonly MULTIPOINT_SYMBOL = 225;
	public static readonly MULTIPOLYGON_SYMBOL = 226;
	public static readonly MUTEX_SYMBOL = 227;
	public static readonly MYSQL_ERRNO_SYMBOL = 228;
	public static readonly NAME_SYMBOL = 229;
	public static readonly NAMES_SYMBOL = 230;
	public static readonly NATIONAL_SYMBOL = 231;
	public static readonly NCHAR_SYMBOL = 232;
	public static readonly NDBCLUSTER_SYMBOL = 233;
	public static readonly NEVER_SYMBOL = 234;
	public static readonly NEXT_SYMBOL = 235;
	public static readonly NEW_SYMBOL = 236;
	public static readonly NO_WAIT_SYMBOL = 237;
	public static readonly NODEGROUP_SYMBOL = 238;
	public static readonly NONE_SYMBOL = 239;
	public static readonly NUMBER_SYMBOL = 240;
	public static readonly NVARCHAR_SYMBOL = 241;
	public static readonly OFFSET_SYMBOL = 242;
	public static readonly OLD_PASSWORD_SYMBOL = 243;
	public static readonly ONE_SHOT_SYMBOL = 244;
	public static readonly ONE_SYMBOL = 245;
	public static readonly PACK_KEYS_SYMBOL = 246;
	public static readonly PAGE_SYMBOL = 247;
	public static readonly PARTIAL_SYMBOL = 248;
	public static readonly PARTITIONING_SYMBOL = 249;
	public static readonly PARTITIONS_SYMBOL = 250;
	public static readonly PASSWORD_SYMBOL = 251;
	public static readonly PHASE_SYMBOL = 252;
	public static readonly PLUGIN_DIR_SYMBOL = 253;
	public static readonly PLUGIN_SYMBOL = 254;
	public static readonly PLUGINS_SYMBOL = 255;
	public static readonly POINT_SYMBOL = 256;
	public static readonly POLYGON_SYMBOL = 257;
	public static readonly PRESERVE_SYMBOL = 258;
	public static readonly PREV_SYMBOL = 259;
	public static readonly PRIVILEGES_SYMBOL = 260;
	public static readonly PROCESS_SYMBOL = 261;
	public static readonly PROCESSLIST_SYMBOL = 262;
	public static readonly PROFILE_SYMBOL = 263;
	public static readonly PROFILES_SYMBOL = 264;
	public static readonly PROXY_SYMBOL = 265;
	public static readonly QUARTER_SYMBOL = 266;
	public static readonly QUERY_SYMBOL = 267;
	public static readonly QUICK_SYMBOL = 268;
	public static readonly READ_ONLY_SYMBOL = 269;
	public static readonly REBUILD_SYMBOL = 270;
	public static readonly RECOVER_SYMBOL = 271;
	public static readonly REDO_BUFFER_SIZE_SYMBOL = 272;
	public static readonly REDOFILE_SYMBOL = 273;
	public static readonly REDUNDANT_SYMBOL = 274;
	public static readonly RELAY_SYMBOL = 275;
	public static readonly RELAYLOG_SYMBOL = 276;
	public static readonly RELAY_LOG_FILE_SYMBOL = 277;
	public static readonly RELAY_LOG_POS_SYMBOL = 278;
	public static readonly RELAY_THREAD_SYMBOL = 279;
	public static readonly RELOAD_SYMBOL = 280;
	public static readonly REORGANIZE_SYMBOL = 281;
	public static readonly REPEATABLE_SYMBOL = 282;
	public static readonly REPLICATION_SYMBOL = 283;
	public static readonly REPLICATE_DO_DB_SYMBOL = 284;
	public static readonly REPLICATE_IGNORE_DB_SYMBOL = 285;
	public static readonly REPLICATE_DO_TABLE_SYMBOL = 286;
	public static readonly REPLICATE_IGNORE_TABLE_SYMBOL = 287;
	public static readonly REPLICATE_WILD_DO_TABLE_SYMBOL = 288;
	public static readonly REPLICATE_WILD_IGNORE_TABLE_SYMBOL = 289;
	public static readonly REPLICATE_REWRITE_DB_SYMBOL = 290;
	public static readonly RESUME_SYMBOL = 291;
	public static readonly RETURNED_SQLSTATE_SYMBOL = 292;
	public static readonly RETURNS_SYMBOL = 293;
	public static readonly REVERSE_SYMBOL = 294;
	public static readonly ROLLUP_SYMBOL = 295;
	public static readonly ROTATE_SYMBOL = 296;
	public static readonly ROUTINE_SYMBOL = 297;
	public static readonly ROWS_SYMBOL = 298;
	public static readonly ROW_COUNT_SYMBOL = 299;
	public static readonly ROW_FORMAT_SYMBOL = 300;
	public static readonly ROW_SYMBOL = 301;
	public static readonly RTREE_SYMBOL = 302;
	public static readonly SCHEDULE_SYMBOL = 303;
	public static readonly SCHEMA_NAME_SYMBOL = 304;
	public static readonly SECOND_SYMBOL = 305;
	public static readonly SERIAL_SYMBOL = 306;
	public static readonly SERIALIZABLE_SYMBOL = 307;
	public static readonly SESSION_SYMBOL = 308;
	public static readonly SIMPLE_SYMBOL = 309;
	public static readonly SHARE_SYMBOL = 310;
	public static readonly SLOW_SYMBOL = 311;
	public static readonly SNAPSHOT_SYMBOL = 312;
	public static readonly SOUNDS_SYMBOL = 313;
	public static readonly SOURCE_SYMBOL = 314;
	public static readonly SQL_AFTER_GTIDS_SYMBOL = 315;
	public static readonly SQL_AFTER_MTS_GAPS_SYMBOL = 316;
	public static readonly SQL_BEFORE_GTIDS_SYMBOL = 317;
	public static readonly SQL_CACHE_SYMBOL = 318;
	public static readonly SQL_BUFFER_RESULT_SYMBOL = 319;
	public static readonly SQL_NO_CACHE_SYMBOL = 320;
	public static readonly SQL_THREAD_SYMBOL = 321;
	public static readonly STACKED_SYMBOL = 322;
	public static readonly STARTS_SYMBOL = 323;
	public static readonly STATS_AUTO_RECALC_SYMBOL = 324;
	public static readonly STATS_PERSISTENT_SYMBOL = 325;
	public static readonly STATS_SAMPLE_PAGES_SYMBOL = 326;
	public static readonly STATUS_SYMBOL = 327;
	public static readonly STORAGE_SYMBOL = 328;
	public static readonly STRING_SYMBOL = 329;
	public static readonly SUBCLASS_ORIGIN_SYMBOL = 330;
	public static readonly SUBDATE_SYMBOL = 331;
	public static readonly SUBJECT_SYMBOL = 332;
	public static readonly SUBPARTITION_SYMBOL = 333;
	public static readonly SUBPARTITIONS_SYMBOL = 334;
	public static readonly SUPER_SYMBOL = 335;
	public static readonly SUSPEND_SYMBOL = 336;
	public static readonly SWAPS_SYMBOL = 337;
	public static readonly SWITCHES_SYMBOL = 338;
	public static readonly TABLE_NAME_SYMBOL = 339;
	public static readonly TABLES_SYMBOL = 340;
	public static readonly TABLE_CHECKSUM_SYMBOL = 341;
	public static readonly TABLESPACE_SYMBOL = 342;
	public static readonly TEMPORARY_SYMBOL = 343;
	public static readonly TEMPTABLE_SYMBOL = 344;
	public static readonly TEXT_SYMBOL = 345;
	public static readonly THAN_SYMBOL = 346;
	public static readonly TRANSACTION_SYMBOL = 347;
	public static readonly TRIGGERS_SYMBOL = 348;
	public static readonly TIMESTAMP_SYMBOL = 349;
	public static readonly TIMESTAMP_ADD_SYMBOL = 350;
	public static readonly TIMESTAMP_DIFF_SYMBOL = 351;
	public static readonly TIME_SYMBOL = 352;
	public static readonly TYPES_SYMBOL = 353;
	public static readonly TYPE_SYMBOL = 354;
	public static readonly UDF_RETURNS_SYMBOL = 355;
	public static readonly FUNCTION_SYMBOL = 356;
	public static readonly UNCOMMITTED_SYMBOL = 357;
	public static readonly UNDEFINED_SYMBOL = 358;
	public static readonly UNDO_BUFFER_SIZE_SYMBOL = 359;
	public static readonly UNDOFILE_SYMBOL = 360;
	public static readonly UNKNOWN_SYMBOL = 361;
	public static readonly UNTIL_SYMBOL = 362;
	public static readonly USER_RESOURCES_SYMBOL = 363;
	public static readonly USER_SYMBOL = 364;
	public static readonly USE_FRM_SYMBOL = 365;
	public static readonly VARIABLES_SYMBOL = 366;
	public static readonly VIEW_SYMBOL = 367;
	public static readonly VALUE_SYMBOL = 368;
	public static readonly WARNINGS_SYMBOL = 369;
	public static readonly WAIT_SYMBOL = 370;
	public static readonly WEEK_SYMBOL = 371;
	public static readonly WORK_SYMBOL = 372;
	public static readonly WEIGHT_STRING_SYMBOL = 373;
	public static readonly X509_SYMBOL = 374;
	public static readonly XID_SYMBOL = 375;
	public static readonly XML_SYMBOL = 376;
	public static readonly YEAR_SYMBOL = 377;
	public static readonly NOT2_SYMBOL = 378;
	public static readonly CONCAT_PIPES_SYMBOL = 379;
	public static readonly INT_NUMBER = 380;
	public static readonly LONG_NUMBER = 381;
	public static readonly ULONGLONG_NUMBER = 382;
	public static readonly EQUAL_OPERATOR = 383;
	public static readonly ASSIGN_OPERATOR = 384;
	public static readonly NULL_SAFE_EQUAL_OPERATOR = 385;
	public static readonly GREATER_OR_EQUAL_OPERATOR = 386;
	public static readonly GREATER_THAN_OPERATOR = 387;
	public static readonly LESS_OR_EQUAL_OPERATOR = 388;
	public static readonly LESS_THAN_OPERATOR = 389;
	public static readonly NOT_EQUAL_OPERATOR = 390;
	public static readonly PLUS_OPERATOR = 391;
	public static readonly MINUS_OPERATOR = 392;
	public static readonly MULT_OPERATOR = 393;
	public static readonly DIV_OPERATOR = 394;
	public static readonly MOD_OPERATOR = 395;
	public static readonly LOGICAL_NOT_OPERATOR = 396;
	public static readonly BITWISE_NOT_OPERATOR = 397;
	public static readonly SHIFT_LEFT_OPERATOR = 398;
	public static readonly SHIFT_RIGHT_OPERATOR = 399;
	public static readonly LOGICAL_AND_OPERATOR = 400;
	public static readonly BITWISE_AND_OPERATOR = 401;
	public static readonly BITWISE_XOR_OPERATOR = 402;
	public static readonly LOGICAL_OR_OPERATOR = 403;
	public static readonly BITWISE_OR_OPERATOR = 404;
	public static readonly DOT_SYMBOL = 405;
	public static readonly COMMA_SYMBOL = 406;
	public static readonly SEMICOLON_SYMBOL = 407;
	public static readonly COLON_SYMBOL = 408;
	public static readonly OPEN_PAR_SYMBOL = 409;
	public static readonly CLOSE_PAR_SYMBOL = 410;
	public static readonly OPEN_CURLY_SYMBOL = 411;
	public static readonly CLOSE_CURLY_SYMBOL = 412;
	public static readonly UNDERLINE_SYMBOL = 413;
	public static readonly JSON_SEPARATOR_SYMBOL = 414;
	public static readonly JSON_UNQUOTED_SEPARATOR_SYMBOL = 415;
	public static readonly AT_SIGN_SYMBOL = 416;
	public static readonly AT_TEXT_SUFFIX = 417;
	public static readonly AT_AT_SIGN_SYMBOL = 418;
	public static readonly NULL2_SYMBOL = 419;
	public static readonly PARAM_MARKER = 420;
	public static readonly HEX_NUMBER = 421;
	public static readonly BIN_NUMBER = 422;
	public static readonly DECIMAL_NUMBER = 423;
	public static readonly FLOAT_NUMBER = 424;
	public static readonly ACCESSIBLE_SYMBOL = 425;
	public static readonly ADD_SYMBOL = 426;
	public static readonly ALL_SYMBOL = 427;
	public static readonly ALTER_SYMBOL = 428;
	public static readonly ANALYSE_SYMBOL = 429;
	public static readonly AND_SYMBOL = 430;
	public static readonly AS_SYMBOL = 431;
	public static readonly ASC_SYMBOL = 432;
	public static readonly ASENSITIVE_SYMBOL = 433;
	public static readonly BEFORE_SYMBOL = 434;
	public static readonly BETWEEN_SYMBOL = 435;
	public static readonly BIGINT_SYMBOL = 436;
	public static readonly BINARY_SYMBOL = 437;
	public static readonly BIN_NUM_SYMBOL = 438;
	public static readonly BIT_AND_SYMBOL = 439;
	public static readonly BIT_OR_SYMBOL = 440;
	public static readonly BIT_XOR_SYMBOL = 441;
	public static readonly BLOB_SYMBOL = 442;
	public static readonly BOTH_SYMBOL = 443;
	public static readonly BY_SYMBOL = 444;
	public static readonly CALL_SYMBOL = 445;
	public static readonly CASCADE_SYMBOL = 446;
	public static readonly CASE_SYMBOL = 447;
	public static readonly CAST_SYMBOL = 448;
	public static readonly CHANGE_SYMBOL = 449;
	public static readonly CHAR_SYMBOL = 450;
	public static readonly CHECK_SYMBOL = 451;
	public static readonly COLLATE_SYMBOL = 452;
	public static readonly COLUMN_SYMBOL = 453;
	public static readonly CONDITION_SYMBOL = 454;
	public static readonly CONSTRAINT_SYMBOL = 455;
	public static readonly CONTINUE_SYMBOL = 456;
	public static readonly CONVERT_SYMBOL = 457;
	public static readonly COUNT_SYMBOL = 458;
	public static readonly CREATE_SYMBOL = 459;
	public static readonly CROSS_SYMBOL = 460;
	public static readonly CURDATE_SYMBOL = 461;
	public static readonly CURRENT_DATE_SYMBOL = 462;
	public static readonly CURRENT_TIME_SYMBOL = 463;
	public static readonly CURRENT_USER_SYMBOL = 464;
	public static readonly CURSOR_SYMBOL = 465;
	public static readonly CURTIME_SYMBOL = 466;
	public static readonly DATABASE_SYMBOL = 467;
	public static readonly DATABASES_SYMBOL = 468;
	public static readonly DATE_ADD_SYMBOL = 469;
	public static readonly DATE_SUB_SYMBOL = 470;
	public static readonly DAY_HOUR_SYMBOL = 471;
	public static readonly DAY_MICROSECOND_SYMBOL = 472;
	public static readonly DAY_MINUTE_SYMBOL = 473;
	public static readonly DAY_SECOND_SYMBOL = 474;
	public static readonly DECIMAL_NUM_SYMBOL = 475;
	public static readonly DECIMAL_SYMBOL = 476;
	public static readonly DECLARE_SYMBOL = 477;
	public static readonly DEFAULT_SYMBOL = 478;
	public static readonly DELAYED_SYMBOL = 479;
	public static readonly DELETE_SYMBOL = 480;
	public static readonly DESC_SYMBOL = 481;
	public static readonly DESCRIBE_SYMBOL = 482;
	public static readonly DETERMINISTIC_SYMBOL = 483;
	public static readonly DISTINCT_SYMBOL = 484;
	public static readonly DIV_SYMBOL = 485;
	public static readonly DOUBLE_SYMBOL = 486;
	public static readonly DROP_SYMBOL = 487;
	public static readonly DUAL_SYMBOL = 488;
	public static readonly EACH_SYMBOL = 489;
	public static readonly ELSE_SYMBOL = 490;
	public static readonly ELSEIF_SYMBOL = 491;
	public static readonly ENCLOSED_SYMBOL = 492;
	public static readonly END_OF_INPUT_SYMBOL = 493;
	public static readonly ESCAPED_SYMBOL = 494;
	public static readonly EXCHANGE_SYMBOL = 495;
	public static readonly EXISTS_SYMBOL = 496;
	public static readonly EXIT_SYMBOL = 497;
	public static readonly EXPIRE_SYMBOL = 498;
	public static readonly EXPLAIN_SYMBOL = 499;
	public static readonly EXTRACT_SYMBOL = 500;
	public static readonly FALSE_SYMBOL = 501;
	public static readonly FETCH_SYMBOL = 502;
	public static readonly FLOAT_SYMBOL = 503;
	public static readonly FORCE_SYMBOL = 504;
	public static readonly FOREIGN_SYMBOL = 505;
	public static readonly FOR_SYMBOL = 506;
	public static readonly FROM_SYMBOL = 507;
	public static readonly FULLTEXT_SYMBOL = 508;
	public static readonly GET_SYMBOL = 509;
	public static readonly GENERATED_SYMBOL = 510;
	public static readonly GRANT_SYMBOL = 511;
	public static readonly GROUP_SYMBOL = 512;
	public static readonly GROUP_CONCAT_SYMBOL = 513;
	public static readonly HAVING_SYMBOL = 514;
	public static readonly HIGH_PRIORITY_SYMBOL = 515;
	public static readonly HOUR_MICROSECOND_SYMBOL = 516;
	public static readonly HOUR_MINUTE_SYMBOL = 517;
	public static readonly HOUR_SECOND_SYMBOL = 518;
	public static readonly IF_SYMBOL = 519;
	public static readonly IGNORE_SYMBOL = 520;
	public static readonly INDEX_SYMBOL = 521;
	public static readonly INFILE_SYMBOL = 522;
	public static readonly INNER_SYMBOL = 523;
	public static readonly INOUT_SYMBOL = 524;
	public static readonly INSENSITIVE_SYMBOL = 525;
	public static readonly INSERT_SYMBOL = 526;
	public static readonly INTERVAL_SYMBOL = 527;
	public static readonly INTO_SYMBOL = 528;
	public static readonly INT_SYMBOL = 529;
	public static readonly IN_SYMBOL = 530;
	public static readonly IO_AFTER_GTIDS_SYMBOL = 531;
	public static readonly IO_BEFORE_GTIDS_SYMBOL = 532;
	public static readonly IS_SYMBOL = 533;
	public static readonly ITERATE_SYMBOL = 534;
	public static readonly JOIN_SYMBOL = 535;
	public static readonly KEYS_SYMBOL = 536;
	public static readonly KEY_SYMBOL = 537;
	public static readonly KILL_SYMBOL = 538;
	public static readonly LEADING_SYMBOL = 539;
	public static readonly LEAVE_SYMBOL = 540;
	public static readonly LEFT_SYMBOL = 541;
	public static readonly LIKE_SYMBOL = 542;
	public static readonly LIMIT_SYMBOL = 543;
	public static readonly LINEAR_SYMBOL = 544;
	public static readonly LINES_SYMBOL = 545;
	public static readonly LOAD_SYMBOL = 546;
	public static readonly LOCATOR_SYMBOL = 547;
	public static readonly LOCK_SYMBOL = 548;
	public static readonly LONGBLOB_SYMBOL = 549;
	public static readonly LONGTEXT_SYMBOL = 550;
	public static readonly LONG_NUM_SYMBOL = 551;
	public static readonly LONG_SYMBOL = 552;
	public static readonly LOOP_SYMBOL = 553;
	public static readonly LOW_PRIORITY_SYMBOL = 554;
	public static readonly MASTER_BIND_SYMBOL = 555;
	public static readonly MASTER_SSL_VERIFY_SERVER_CERT_SYMBOL = 556;
	public static readonly MATCH_SYMBOL = 557;
	public static readonly MAX_SYMBOL = 558;
	public static readonly MAXVALUE_SYMBOL = 559;
	public static readonly MEDIUMBLOB_SYMBOL = 560;
	public static readonly MEDIUMINT_SYMBOL = 561;
	public static readonly MEDIUMTEXT_SYMBOL = 562;
	public static readonly MID_SYMBOL = 563;
	public static readonly MINUTE_MICROSECOND_SYMBOL = 564;
	public static readonly MINUTE_SECOND_SYMBOL = 565;
	public static readonly MIN_SYMBOL = 566;
	public static readonly MODIFIES_SYMBOL = 567;
	public static readonly MOD_SYMBOL = 568;
	public static readonly NATURAL_SYMBOL = 569;
	public static readonly NCHAR_STRING_SYMBOL = 570;
	public static readonly NEG_SYMBOL = 571;
	public static readonly NONBLOCKING_SYMBOL = 572;
	public static readonly NOT_SYMBOL = 573;
	public static readonly NOW_SYMBOL = 574;
	public static readonly NO_WRITE_TO_BINLOG_SYMBOL = 575;
	public static readonly NULL_SYMBOL = 576;
	public static readonly NUMERIC_SYMBOL = 577;
	public static readonly OFFLINE_SYMBOL = 578;
	public static readonly ON_SYMBOL = 579;
	public static readonly ONLINE_SYMBOL = 580;
	public static readonly ONLY_SYMBOL = 581;
	public static readonly OPTIMIZE_SYMBOL = 582;
	public static readonly OPTIMIZER_COSTS_SYMBOL = 583;
	public static readonly OPTION_SYMBOL = 584;
	public static readonly OPTIONALLY_SYMBOL = 585;
	public static readonly ORDER_SYMBOL = 586;
	public static readonly OR_SYMBOL = 587;
	public static readonly OUTER_SYMBOL = 588;
	public static readonly OUTFILE_SYMBOL = 589;
	public static readonly OUT_SYMBOL = 590;
	public static readonly POSITION_SYMBOL = 591;
	public static readonly PRECISION_SYMBOL = 592;
	public static readonly PRIMARY_SYMBOL = 593;
	public static readonly PROCEDURE_SYMBOL = 594;
	public static readonly PURGE_SYMBOL = 595;
	public static readonly RANGE_SYMBOL = 596;
	public static readonly READS_SYMBOL = 597;
	public static readonly READ_SYMBOL = 598;
	public static readonly READ_WRITE_SYMBOL = 599;
	public static readonly REAL_SYMBOL = 600;
	public static readonly REFERENCES_SYMBOL = 601;
	public static readonly REGEXP_SYMBOL = 602;
	public static readonly RELEASE_SYMBOL = 603;
	public static readonly RENAME_SYMBOL = 604;
	public static readonly REPEAT_SYMBOL = 605;
	public static readonly REPLACE_SYMBOL = 606;
	public static readonly REQUIRE_SYMBOL = 607;
	public static readonly RESIGNAL_SYMBOL = 608;
	public static readonly RESTRICT_SYMBOL = 609;
	public static readonly RETURN_SYMBOL = 610;
	public static readonly REVOKE_SYMBOL = 611;
	public static readonly RIGHT_SYMBOL = 612;
	public static readonly SECOND_MICROSECOND_SYMBOL = 613;
	public static readonly SELECT_SYMBOL = 614;
	public static readonly SENSITIVE_SYMBOL = 615;
	public static readonly SEPARATOR_SYMBOL = 616;
	public static readonly SERVER_OPTIONS_SYMBOL = 617;
	public static readonly SESSION_USER_SYMBOL = 618;
	public static readonly SET_SYMBOL = 619;
	public static readonly SET_VAR_SYMBOL = 620;
	public static readonly SHOW_SYMBOL = 621;
	public static readonly SIGNAL_SYMBOL = 622;
	public static readonly SMALLINT_SYMBOL = 623;
	public static readonly SPATIAL_SYMBOL = 624;
	public static readonly SPECIFIC_SYMBOL = 625;
	public static readonly SQLEXCEPTION_SYMBOL = 626;
	public static readonly SQLSTATE_SYMBOL = 627;
	public static readonly SQLWARNING_SYMBOL = 628;
	public static readonly SQL_BIG_RESULT_SYMBOL = 629;
	public static readonly SQL_CALC_FOUND_ROWS_SYMBOL = 630;
	public static readonly SQL_SMALL_RESULT_SYMBOL = 631;
	public static readonly SQL_SYMBOL = 632;
	public static readonly SSL_SYMBOL = 633;
	public static readonly STARTING_SYMBOL = 634;
	public static readonly STDDEV_SAMP_SYMBOL = 635;
	public static readonly STDDEV_SYMBOL = 636;
	public static readonly STDDEV_POP_SYMBOL = 637;
	public static readonly STD_SYMBOL = 638;
	public static readonly STORED_SYMBOL = 639;
	public static readonly STRAIGHT_JOIN_SYMBOL = 640;
	public static readonly SUBSTR_SYMBOL = 641;
	public static readonly SUBSTRING_SYMBOL = 642;
	public static readonly SUM_SYMBOL = 643;
	public static readonly SYSDATE_SYMBOL = 644;
	public static readonly SYSTEM_USER_SYMBOL = 645;
	public static readonly TABLE_REF_PRIORITY_SYMBOL = 646;
	public static readonly TABLE_SYMBOL = 647;
	public static readonly TERMINATED_SYMBOL = 648;
	public static readonly THEN_SYMBOL = 649;
	public static readonly TINYBLOB_SYMBOL = 650;
	public static readonly TINYINT_SYMBOL = 651;
	public static readonly TINYTEXT_SYMBOL = 652;
	public static readonly TO_SYMBOL = 653;
	public static readonly TRAILING_SYMBOL = 654;
	public static readonly TRIGGER_SYMBOL = 655;
	public static readonly TRIM_SYMBOL = 656;
	public static readonly TRUE_SYMBOL = 657;
	public static readonly UNDO_SYMBOL = 658;
	public static readonly UNION_SYMBOL = 659;
	public static readonly UNIQUE_SYMBOL = 660;
	public static readonly UNLOCK_SYMBOL = 661;
	public static readonly UNSIGNED_SYMBOL = 662;
	public static readonly UPDATE_SYMBOL = 663;
	public static readonly USAGE_SYMBOL = 664;
	public static readonly USE_SYMBOL = 665;
	public static readonly USING_SYMBOL = 666;
	public static readonly UTC_DATE_SYMBOL = 667;
	public static readonly UTC_TIMESTAMP_SYMBOL = 668;
	public static readonly UTC_TIME_SYMBOL = 669;
	public static readonly VALIDATION_SYMBOL = 670;
	public static readonly VALUES_SYMBOL = 671;
	public static readonly VARBINARY_SYMBOL = 672;
	public static readonly VARCHAR_SYMBOL = 673;
	public static readonly VARIANCE_SYMBOL = 674;
	public static readonly VARYING_SYMBOL = 675;
	public static readonly VAR_POP_SYMBOL = 676;
	public static readonly VAR_SAMP_SYMBOL = 677;
	public static readonly VIRTUAL_SYMBOL = 678;
	public static readonly WHEN_SYMBOL = 679;
	public static readonly WHERE_SYMBOL = 680;
	public static readonly WHILE_SYMBOL = 681;
	public static readonly WITH_SYMBOL = 682;
	public static readonly WITHOUT_SYMBOL = 683;
	public static readonly WRITE_SYMBOL = 684;
	public static readonly XOR_SYMBOL = 685;
	public static readonly YEAR_MONTH_SYMBOL = 686;
	public static readonly ZEROFILL_SYMBOL = 687;
	public static readonly PERSIST_SYMBOL = 688;
	public static readonly ROLE_SYMBOL = 689;
	public static readonly ADMIN_SYMBOL = 690;
	public static readonly INVISIBLE_SYMBOL = 691;
	public static readonly VISIBLE_SYMBOL = 692;
	public static readonly EXCEPT_SYMBOL = 693;
	public static readonly COMPONENT_SYMBOL = 694;
	public static readonly RECURSIVE_SYMBOL = 695;
	public static readonly JSON_OBJECTAGG_SYMBOL = 696;
	public static readonly JSON_ARRAYAGG_SYMBOL = 697;
	public static readonly OF_SYMBOL = 698;
	public static readonly SKIP_SYMBOL = 699;
	public static readonly LOCKED_SYMBOL = 700;
	public static readonly NOWAIT_SYMBOL = 701;
	public static readonly GROUPING_SYMBOL = 702;
	public static readonly PERSIST_ONLY_SYMBOL = 703;
	public static readonly HISTOGRAM_SYMBOL = 704;
	public static readonly BUCKETS_SYMBOL = 705;
	public static readonly REMOTE_SYMBOL = 706;
	public static readonly CLONE_SYMBOL = 707;
	public static readonly CUME_DIST_SYMBOL = 708;
	public static readonly DENSE_RANK_SYMBOL = 709;
	public static readonly EXCLUDE_SYMBOL = 710;
	public static readonly FIRST_VALUE_SYMBOL = 711;
	public static readonly FOLLOWING_SYMBOL = 712;
	public static readonly GROUPS_SYMBOL = 713;
	public static readonly LAG_SYMBOL = 714;
	public static readonly LAST_VALUE_SYMBOL = 715;
	public static readonly LEAD_SYMBOL = 716;
	public static readonly NTH_VALUE_SYMBOL = 717;
	public static readonly NTILE_SYMBOL = 718;
	public static readonly NULLS_SYMBOL = 719;
	public static readonly OTHERS_SYMBOL = 720;
	public static readonly OVER_SYMBOL = 721;
	public static readonly PERCENT_RANK_SYMBOL = 722;
	public static readonly PRECEDING_SYMBOL = 723;
	public static readonly RANK_SYMBOL = 724;
	public static readonly RESPECT_SYMBOL = 725;
	public static readonly ROW_NUMBER_SYMBOL = 726;
	public static readonly TIES_SYMBOL = 727;
	public static readonly UNBOUNDED_SYMBOL = 728;
	public static readonly WINDOW_SYMBOL = 729;
	public static readonly EMPTY_SYMBOL = 730;
	public static readonly JSON_TABLE_SYMBOL = 731;
	public static readonly NESTED_SYMBOL = 732;
	public static readonly ORDINALITY_SYMBOL = 733;
	public static readonly PATH_SYMBOL = 734;
	public static readonly HISTORY_SYMBOL = 735;
	public static readonly REUSE_SYMBOL = 736;
	public static readonly SRID_SYMBOL = 737;
	public static readonly THREAD_PRIORITY_SYMBOL = 738;
	public static readonly RESOURCE_SYMBOL = 739;
	public static readonly SYSTEM_SYMBOL = 740;
	public static readonly VCPU_SYMBOL = 741;
	public static readonly MASTER_PUBLIC_KEY_PATH_SYMBOL = 742;
	public static readonly GET_MASTER_PUBLIC_KEY_SYMBOL = 743;
	public static readonly RESTART_SYMBOL = 744;
	public static readonly DEFINITION_SYMBOL = 745;
	public static readonly DESCRIPTION_SYMBOL = 746;
	public static readonly ORGANIZATION_SYMBOL = 747;
	public static readonly REFERENCE_SYMBOL = 748;
	public static readonly OPTIONAL_SYMBOL = 749;
	public static readonly SECONDARY_SYMBOL = 750;
	public static readonly SECONDARY_ENGINE_SYMBOL = 751;
	public static readonly SECONDARY_LOAD_SYMBOL = 752;
	public static readonly SECONDARY_UNLOAD_SYMBOL = 753;
	public static readonly ACTIVE_SYMBOL = 754;
	public static readonly INACTIVE_SYMBOL = 755;
	public static readonly LATERAL_SYMBOL = 756;
	public static readonly RETAIN_SYMBOL = 757;
	public static readonly OLD_SYMBOL = 758;
	public static readonly NETWORK_NAMESPACE_SYMBOL = 759;
	public static readonly ENFORCED_SYMBOL = 760;
	public static readonly ARRAY_SYMBOL = 761;
	public static readonly OJ_SYMBOL = 762;
	public static readonly MEMBER_SYMBOL = 763;
	public static readonly RANDOM_SYMBOL = 764;
	public static readonly MASTER_COMPRESSION_ALGORITHM_SYMBOL = 765;
	public static readonly MASTER_ZSTD_COMPRESSION_LEVEL_SYMBOL = 766;
	public static readonly PRIVILEGE_CHECKS_USER_SYMBOL = 767;
	public static readonly MASTER_TLS_CIPHERSUITES_SYMBOL = 768;
	public static readonly WHITESPACE = 769;
	public static readonly INVALID_INPUT = 770;
	public static readonly UNDERSCORE_CHARSET = 771;
	public static readonly IDENTIFIER = 772;
	public static readonly NCHAR_TEXT = 773;
	public static readonly BACK_TICK_QUOTED_ID = 774;
	public static readonly DOUBLE_QUOTED_TEXT = 775;
	public static readonly SINGLE_QUOTED_TEXT = 776;
	public static readonly VERSION_COMMENT_START = 777;
	public static readonly MYSQL_COMMENT_START = 778;
	public static readonly VERSION_COMMENT_END = 779;
	public static readonly BLOCK_COMMENT = 780;
	public static readonly POUND_COMMENT = 781;
	public static readonly DASHDASH_COMMENT = 782;
	public static readonly NOT_EQUAL2_OPERATOR = 783;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'='", 
                                                            "':='", "'<=>'", 
                                                            "'>='", "'>'", 
                                                            "'<='", "'<'", 
                                                            "'!='", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'!'", "'~'", 
                                                            "'<<'", "'>>'", 
                                                            "'&&'", "'&'", 
                                                            "'^'", "'||'", 
                                                            "'|'", "'.'", 
                                                            "','", "';'", 
                                                            "':'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'_'", 
                                                            "'->'", "'->>'", 
                                                            "'@'", null, 
                                                            "'@@'", "'\\N'", 
                                                            "'?'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'<>'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ACCOUNT_SYMBOL", 
                                                             "ASCII_SYMBOL", 
                                                             "ALWAYS_SYMBOL", 
                                                             "BACKUP_SYMBOL", 
                                                             "BEGIN_SYMBOL", 
                                                             "BYTE_SYMBOL", 
                                                             "CACHE_SYMBOL", 
                                                             "CHARSET_SYMBOL", 
                                                             "CHECKSUM_SYMBOL", 
                                                             "CLOSE_SYMBOL", 
                                                             "COMMENT_SYMBOL", 
                                                             "COMMIT_SYMBOL", 
                                                             "CONTAINS_SYMBOL", 
                                                             "DEALLOCATE_SYMBOL", 
                                                             "DO_SYMBOL", 
                                                             "END_SYMBOL", 
                                                             "EXECUTE_SYMBOL", 
                                                             "FLUSH_SYMBOL", 
                                                             "FOLLOWS_SYMBOL", 
                                                             "FORMAT_SYMBOL", 
                                                             "GROUP_REPLICATION_SYMBOL", 
                                                             "HANDLER_SYMBOL", 
                                                             "HELP_SYMBOL", 
                                                             "HOST_SYMBOL", 
                                                             "INSTALL_SYMBOL", 
                                                             "LANGUAGE_SYMBOL", 
                                                             "NO_SYMBOL", 
                                                             "OPEN_SYMBOL", 
                                                             "OPTIONS_SYMBOL", 
                                                             "OWNER_SYMBOL", 
                                                             "PARSER_SYMBOL", 
                                                             "PARTITION_SYMBOL", 
                                                             "PORT_SYMBOL", 
                                                             "PRECEDES_SYMBOL", 
                                                             "PREPARE_SYMBOL", 
                                                             "REMOVE_SYMBOL", 
                                                             "REPAIR_SYMBOL", 
                                                             "RESET_SYMBOL", 
                                                             "RESTORE_SYMBOL", 
                                                             "ROLLBACK_SYMBOL", 
                                                             "SAVEPOINT_SYMBOL", 
                                                             "SECURITY_SYMBOL", 
                                                             "SERVER_SYMBOL", 
                                                             "SIGNED_SYMBOL", 
                                                             "SLAVE_SYMBOL", 
                                                             "SOCKET_SYMBOL", 
                                                             "SONAME_SYMBOL", 
                                                             "START_SYMBOL", 
                                                             "STOP_SYMBOL", 
                                                             "TRUNCATE_SYMBOL", 
                                                             "UNICODE_SYMBOL", 
                                                             "UNINSTALL_SYMBOL", 
                                                             "UPGRADE_SYMBOL", 
                                                             "WRAPPER_SYMBOL", 
                                                             "XA_SYMBOL", 
                                                             "SHUTDOWN_SYMBOL", 
                                                             "ACTION_SYMBOL", 
                                                             "ADDDATE_SYMBOL", 
                                                             "AFTER_SYMBOL", 
                                                             "AGAINST_SYMBOL", 
                                                             "AGGREGATE_SYMBOL", 
                                                             "ALGORITHM_SYMBOL", 
                                                             "ANALYZE_SYMBOL", 
                                                             "ANY_SYMBOL", 
                                                             "AT_SYMBOL", 
                                                             "AUTHORS_SYMBOL", 
                                                             "AUTO_INCREMENT_SYMBOL", 
                                                             "AUTOEXTEND_SIZE_SYMBOL", 
                                                             "AVG_ROW_LENGTH_SYMBOL", 
                                                             "AVG_SYMBOL", 
                                                             "BINLOG_SYMBOL", 
                                                             "BIT_SYMBOL", 
                                                             "BLOCK_SYMBOL", 
                                                             "BOOL_SYMBOL", 
                                                             "BOOLEAN_SYMBOL", 
                                                             "BTREE_SYMBOL", 
                                                             "CASCADED_SYMBOL", 
                                                             "CATALOG_NAME_SYMBOL", 
                                                             "CHAIN_SYMBOL", 
                                                             "CHANGED_SYMBOL", 
                                                             "CHANNEL_SYMBOL", 
                                                             "CIPHER_SYMBOL", 
                                                             "CLIENT_SYMBOL", 
                                                             "CLASS_ORIGIN_SYMBOL", 
                                                             "COALESCE_SYMBOL", 
                                                             "CODE_SYMBOL", 
                                                             "COLLATION_SYMBOL", 
                                                             "COLUMN_NAME_SYMBOL", 
                                                             "COLUMN_FORMAT_SYMBOL", 
                                                             "COLUMNS_SYMBOL", 
                                                             "COMMITTED_SYMBOL", 
                                                             "COMPACT_SYMBOL", 
                                                             "COMPLETION_SYMBOL", 
                                                             "COMPRESSED_SYMBOL", 
                                                             "COMPRESSION_SYMBOL", 
                                                             "ENCRYPTION_SYMBOL", 
                                                             "CONCURRENT_SYMBOL", 
                                                             "CONNECTION_SYMBOL", 
                                                             "CONSISTENT_SYMBOL", 
                                                             "CONSTRAINT_CATALOG_SYMBOL", 
                                                             "CONSTRAINT_SCHEMA_SYMBOL", 
                                                             "CONSTRAINT_NAME_SYMBOL", 
                                                             "CONTEXT_SYMBOL", 
                                                             "CONTRIBUTORS_SYMBOL", 
                                                             "CPU_SYMBOL", 
                                                             "CUBE_SYMBOL", 
                                                             "CURRENT_SYMBOL", 
                                                             "CURSOR_NAME_SYMBOL", 
                                                             "DATA_SYMBOL", 
                                                             "DATAFILE_SYMBOL", 
                                                             "DATETIME_SYMBOL", 
                                                             "DATE_SYMBOL", 
                                                             "DAY_SYMBOL", 
                                                             "DEFAULT_AUTH_SYMBOL", 
                                                             "DEFINER_SYMBOL", 
                                                             "DELAY_KEY_WRITE_SYMBOL", 
                                                             "DES_KEY_FILE_SYMBOL", 
                                                             "DIAGNOSTICS_SYMBOL", 
                                                             "DIRECTORY_SYMBOL", 
                                                             "DISABLE_SYMBOL", 
                                                             "DISCARD_SYMBOL", 
                                                             "DISK_SYMBOL", 
                                                             "DUMPFILE_SYMBOL", 
                                                             "DUPLICATE_SYMBOL", 
                                                             "DYNAMIC_SYMBOL", 
                                                             "ENDS_SYMBOL", 
                                                             "ENUM_SYMBOL", 
                                                             "ENGINE_SYMBOL", 
                                                             "ENGINES_SYMBOL", 
                                                             "ERROR_SYMBOL", 
                                                             "ERRORS_SYMBOL", 
                                                             "ESCAPE_SYMBOL", 
                                                             "EVENT_SYMBOL", 
                                                             "EVENTS_SYMBOL", 
                                                             "EVERY_SYMBOL", 
                                                             "EXPANSION_SYMBOL", 
                                                             "EXPORT_SYMBOL", 
                                                             "EXTENDED_SYMBOL", 
                                                             "EXTENT_SIZE_SYMBOL", 
                                                             "FAULTS_SYMBOL", 
                                                             "FAST_SYMBOL", 
                                                             "FOUND_SYMBOL", 
                                                             "ENABLE_SYMBOL", 
                                                             "FULL_SYMBOL", 
                                                             "FILE_SYMBOL", 
                                                             "FILE_BLOCK_SIZE_SYMBOL", 
                                                             "FILTER_SYMBOL", 
                                                             "FIRST_SYMBOL", 
                                                             "FIXED_SYMBOL", 
                                                             "GENERAL_SYMBOL", 
                                                             "GEOMETRY_SYMBOL", 
                                                             "GEOMETRYCOLLECTION_SYMBOL", 
                                                             "GET_FORMAT_SYMBOL", 
                                                             "GRANTS_SYMBOL", 
                                                             "GLOBAL_SYMBOL", 
                                                             "HASH_SYMBOL", 
                                                             "HOSTS_SYMBOL", 
                                                             "HOUR_SYMBOL", 
                                                             "IDENTIFIED_SYMBOL", 
                                                             "IGNORE_SERVER_IDS_SYMBOL", 
                                                             "INVOKER_SYMBOL", 
                                                             "IMPORT_SYMBOL", 
                                                             "INDEXES_SYMBOL", 
                                                             "INITIAL_SIZE_SYMBOL", 
                                                             "INSTANCE_SYMBOL", 
                                                             "INNODB_SYMBOL", 
                                                             "IO_SYMBOL", 
                                                             "IPC_SYMBOL", 
                                                             "ISOLATION_SYMBOL", 
                                                             "ISSUER_SYMBOL", 
                                                             "INSERT_METHOD_SYMBOL", 
                                                             "JSON_SYMBOL", 
                                                             "KEY_BLOCK_SIZE_SYMBOL", 
                                                             "LAST_SYMBOL", 
                                                             "LEAVES_SYMBOL", 
                                                             "LESS_SYMBOL", 
                                                             "LEVEL_SYMBOL", 
                                                             "LINESTRING_SYMBOL", 
                                                             "LIST_SYMBOL", 
                                                             "LOCAL_SYMBOL", 
                                                             "LOCKS_SYMBOL", 
                                                             "LOGFILE_SYMBOL", 
                                                             "LOGS_SYMBOL", 
                                                             "MAX_ROWS_SYMBOL", 
                                                             "MASTER_SYMBOL", 
                                                             "MASTER_HEARTBEAT_PERIOD_SYMBOL", 
                                                             "MASTER_HOST_SYMBOL", 
                                                             "MASTER_PORT_SYMBOL", 
                                                             "MASTER_LOG_FILE_SYMBOL", 
                                                             "MASTER_LOG_POS_SYMBOL", 
                                                             "MASTER_USER_SYMBOL", 
                                                             "MASTER_PASSWORD_SYMBOL", 
                                                             "MASTER_SERVER_ID_SYMBOL", 
                                                             "MASTER_CONNECT_RETRY_SYMBOL", 
                                                             "MASTER_RETRY_COUNT_SYMBOL", 
                                                             "MASTER_DELAY_SYMBOL", 
                                                             "MASTER_SSL_SYMBOL", 
                                                             "MASTER_SSL_CA_SYMBOL", 
                                                             "MASTER_SSL_CAPATH_SYMBOL", 
                                                             "MASTER_TLS_VERSION_SYMBOL", 
                                                             "MASTER_SSL_CERT_SYMBOL", 
                                                             "MASTER_SSL_CIPHER_SYMBOL", 
                                                             "MASTER_SSL_CRL_SYMBOL", 
                                                             "MASTER_SSL_CRLPATH_SYMBOL", 
                                                             "MASTER_SSL_KEY_SYMBOL", 
                                                             "MASTER_AUTO_POSITION_SYMBOL", 
                                                             "MAX_CONNECTIONS_PER_HOUR_SYMBOL", 
                                                             "MAX_QUERIES_PER_HOUR_SYMBOL", 
                                                             "MAX_STATEMENT_TIME_SYMBOL", 
                                                             "MAX_SIZE_SYMBOL", 
                                                             "MAX_UPDATES_PER_HOUR_SYMBOL", 
                                                             "MAX_USER_CONNECTIONS_SYMBOL", 
                                                             "MEDIUM_SYMBOL", 
                                                             "MEMORY_SYMBOL", 
                                                             "MERGE_SYMBOL", 
                                                             "MESSAGE_TEXT_SYMBOL", 
                                                             "MICROSECOND_SYMBOL", 
                                                             "MIGRATE_SYMBOL", 
                                                             "MINUTE_SYMBOL", 
                                                             "MIN_ROWS_SYMBOL", 
                                                             "MODIFY_SYMBOL", 
                                                             "MODE_SYMBOL", 
                                                             "MONTH_SYMBOL", 
                                                             "MULTILINESTRING_SYMBOL", 
                                                             "MULTIPOINT_SYMBOL", 
                                                             "MULTIPOLYGON_SYMBOL", 
                                                             "MUTEX_SYMBOL", 
                                                             "MYSQL_ERRNO_SYMBOL", 
                                                             "NAME_SYMBOL", 
                                                             "NAMES_SYMBOL", 
                                                             "NATIONAL_SYMBOL", 
                                                             "NCHAR_SYMBOL", 
                                                             "NDBCLUSTER_SYMBOL", 
                                                             "NEVER_SYMBOL", 
                                                             "NEXT_SYMBOL", 
                                                             "NEW_SYMBOL", 
                                                             "NO_WAIT_SYMBOL", 
                                                             "NODEGROUP_SYMBOL", 
                                                             "NONE_SYMBOL", 
                                                             "NUMBER_SYMBOL", 
                                                             "NVARCHAR_SYMBOL", 
                                                             "OFFSET_SYMBOL", 
                                                             "OLD_PASSWORD_SYMBOL", 
                                                             "ONE_SHOT_SYMBOL", 
                                                             "ONE_SYMBOL", 
                                                             "PACK_KEYS_SYMBOL", 
                                                             "PAGE_SYMBOL", 
                                                             "PARTIAL_SYMBOL", 
                                                             "PARTITIONING_SYMBOL", 
                                                             "PARTITIONS_SYMBOL", 
                                                             "PASSWORD_SYMBOL", 
                                                             "PHASE_SYMBOL", 
                                                             "PLUGIN_DIR_SYMBOL", 
                                                             "PLUGIN_SYMBOL", 
                                                             "PLUGINS_SYMBOL", 
                                                             "POINT_SYMBOL", 
                                                             "POLYGON_SYMBOL", 
                                                             "PRESERVE_SYMBOL", 
                                                             "PREV_SYMBOL", 
                                                             "PRIVILEGES_SYMBOL", 
                                                             "PROCESS_SYMBOL", 
                                                             "PROCESSLIST_SYMBOL", 
                                                             "PROFILE_SYMBOL", 
                                                             "PROFILES_SYMBOL", 
                                                             "PROXY_SYMBOL", 
                                                             "QUARTER_SYMBOL", 
                                                             "QUERY_SYMBOL", 
                                                             "QUICK_SYMBOL", 
                                                             "READ_ONLY_SYMBOL", 
                                                             "REBUILD_SYMBOL", 
                                                             "RECOVER_SYMBOL", 
                                                             "REDO_BUFFER_SIZE_SYMBOL", 
                                                             "REDOFILE_SYMBOL", 
                                                             "REDUNDANT_SYMBOL", 
                                                             "RELAY_SYMBOL", 
                                                             "RELAYLOG_SYMBOL", 
                                                             "RELAY_LOG_FILE_SYMBOL", 
                                                             "RELAY_LOG_POS_SYMBOL", 
                                                             "RELAY_THREAD_SYMBOL", 
                                                             "RELOAD_SYMBOL", 
                                                             "REORGANIZE_SYMBOL", 
                                                             "REPEATABLE_SYMBOL", 
                                                             "REPLICATION_SYMBOL", 
                                                             "REPLICATE_DO_DB_SYMBOL", 
                                                             "REPLICATE_IGNORE_DB_SYMBOL", 
                                                             "REPLICATE_DO_TABLE_SYMBOL", 
                                                             "REPLICATE_IGNORE_TABLE_SYMBOL", 
                                                             "REPLICATE_WILD_DO_TABLE_SYMBOL", 
                                                             "REPLICATE_WILD_IGNORE_TABLE_SYMBOL", 
                                                             "REPLICATE_REWRITE_DB_SYMBOL", 
                                                             "RESUME_SYMBOL", 
                                                             "RETURNED_SQLSTATE_SYMBOL", 
                                                             "RETURNS_SYMBOL", 
                                                             "REVERSE_SYMBOL", 
                                                             "ROLLUP_SYMBOL", 
                                                             "ROTATE_SYMBOL", 
                                                             "ROUTINE_SYMBOL", 
                                                             "ROWS_SYMBOL", 
                                                             "ROW_COUNT_SYMBOL", 
                                                             "ROW_FORMAT_SYMBOL", 
                                                             "ROW_SYMBOL", 
                                                             "RTREE_SYMBOL", 
                                                             "SCHEDULE_SYMBOL", 
                                                             "SCHEMA_NAME_SYMBOL", 
                                                             "SECOND_SYMBOL", 
                                                             "SERIAL_SYMBOL", 
                                                             "SERIALIZABLE_SYMBOL", 
                                                             "SESSION_SYMBOL", 
                                                             "SIMPLE_SYMBOL", 
                                                             "SHARE_SYMBOL", 
                                                             "SLOW_SYMBOL", 
                                                             "SNAPSHOT_SYMBOL", 
                                                             "SOUNDS_SYMBOL", 
                                                             "SOURCE_SYMBOL", 
                                                             "SQL_AFTER_GTIDS_SYMBOL", 
                                                             "SQL_AFTER_MTS_GAPS_SYMBOL", 
                                                             "SQL_BEFORE_GTIDS_SYMBOL", 
                                                             "SQL_CACHE_SYMBOL", 
                                                             "SQL_BUFFER_RESULT_SYMBOL", 
                                                             "SQL_NO_CACHE_SYMBOL", 
                                                             "SQL_THREAD_SYMBOL", 
                                                             "STACKED_SYMBOL", 
                                                             "STARTS_SYMBOL", 
                                                             "STATS_AUTO_RECALC_SYMBOL", 
                                                             "STATS_PERSISTENT_SYMBOL", 
                                                             "STATS_SAMPLE_PAGES_SYMBOL", 
                                                             "STATUS_SYMBOL", 
                                                             "STORAGE_SYMBOL", 
                                                             "STRING_SYMBOL", 
                                                             "SUBCLASS_ORIGIN_SYMBOL", 
                                                             "SUBDATE_SYMBOL", 
                                                             "SUBJECT_SYMBOL", 
                                                             "SUBPARTITION_SYMBOL", 
                                                             "SUBPARTITIONS_SYMBOL", 
                                                             "SUPER_SYMBOL", 
                                                             "SUSPEND_SYMBOL", 
                                                             "SWAPS_SYMBOL", 
                                                             "SWITCHES_SYMBOL", 
                                                             "TABLE_NAME_SYMBOL", 
                                                             "TABLES_SYMBOL", 
                                                             "TABLE_CHECKSUM_SYMBOL", 
                                                             "TABLESPACE_SYMBOL", 
                                                             "TEMPORARY_SYMBOL", 
                                                             "TEMPTABLE_SYMBOL", 
                                                             "TEXT_SYMBOL", 
                                                             "THAN_SYMBOL", 
                                                             "TRANSACTION_SYMBOL", 
                                                             "TRIGGERS_SYMBOL", 
                                                             "TIMESTAMP_SYMBOL", 
                                                             "TIMESTAMP_ADD_SYMBOL", 
                                                             "TIMESTAMP_DIFF_SYMBOL", 
                                                             "TIME_SYMBOL", 
                                                             "TYPES_SYMBOL", 
                                                             "TYPE_SYMBOL", 
                                                             "UDF_RETURNS_SYMBOL", 
                                                             "FUNCTION_SYMBOL", 
                                                             "UNCOMMITTED_SYMBOL", 
                                                             "UNDEFINED_SYMBOL", 
                                                             "UNDO_BUFFER_SIZE_SYMBOL", 
                                                             "UNDOFILE_SYMBOL", 
                                                             "UNKNOWN_SYMBOL", 
                                                             "UNTIL_SYMBOL", 
                                                             "USER_RESOURCES_SYMBOL", 
                                                             "USER_SYMBOL", 
                                                             "USE_FRM_SYMBOL", 
                                                             "VARIABLES_SYMBOL", 
                                                             "VIEW_SYMBOL", 
                                                             "VALUE_SYMBOL", 
                                                             "WARNINGS_SYMBOL", 
                                                             "WAIT_SYMBOL", 
                                                             "WEEK_SYMBOL", 
                                                             "WORK_SYMBOL", 
                                                             "WEIGHT_STRING_SYMBOL", 
                                                             "X509_SYMBOL", 
                                                             "XID_SYMBOL", 
                                                             "XML_SYMBOL", 
                                                             "YEAR_SYMBOL", 
                                                             "NOT2_SYMBOL", 
                                                             "CONCAT_PIPES_SYMBOL", 
                                                             "INT_NUMBER", 
                                                             "LONG_NUMBER", 
                                                             "ULONGLONG_NUMBER", 
                                                             "EQUAL_OPERATOR", 
                                                             "ASSIGN_OPERATOR", 
                                                             "NULL_SAFE_EQUAL_OPERATOR", 
                                                             "GREATER_OR_EQUAL_OPERATOR", 
                                                             "GREATER_THAN_OPERATOR", 
                                                             "LESS_OR_EQUAL_OPERATOR", 
                                                             "LESS_THAN_OPERATOR", 
                                                             "NOT_EQUAL_OPERATOR", 
                                                             "PLUS_OPERATOR", 
                                                             "MINUS_OPERATOR", 
                                                             "MULT_OPERATOR", 
                                                             "DIV_OPERATOR", 
                                                             "MOD_OPERATOR", 
                                                             "LOGICAL_NOT_OPERATOR", 
                                                             "BITWISE_NOT_OPERATOR", 
                                                             "SHIFT_LEFT_OPERATOR", 
                                                             "SHIFT_RIGHT_OPERATOR", 
                                                             "LOGICAL_AND_OPERATOR", 
                                                             "BITWISE_AND_OPERATOR", 
                                                             "BITWISE_XOR_OPERATOR", 
                                                             "LOGICAL_OR_OPERATOR", 
                                                             "BITWISE_OR_OPERATOR", 
                                                             "DOT_SYMBOL", 
                                                             "COMMA_SYMBOL", 
                                                             "SEMICOLON_SYMBOL", 
                                                             "COLON_SYMBOL", 
                                                             "OPEN_PAR_SYMBOL", 
                                                             "CLOSE_PAR_SYMBOL", 
                                                             "OPEN_CURLY_SYMBOL", 
                                                             "CLOSE_CURLY_SYMBOL", 
                                                             "UNDERLINE_SYMBOL", 
                                                             "JSON_SEPARATOR_SYMBOL", 
                                                             "JSON_UNQUOTED_SEPARATOR_SYMBOL", 
                                                             "AT_SIGN_SYMBOL", 
                                                             "AT_TEXT_SUFFIX", 
                                                             "AT_AT_SIGN_SYMBOL", 
                                                             "NULL2_SYMBOL", 
                                                             "PARAM_MARKER", 
                                                             "HEX_NUMBER", 
                                                             "BIN_NUMBER", 
                                                             "DECIMAL_NUMBER", 
                                                             "FLOAT_NUMBER", 
                                                             "ACCESSIBLE_SYMBOL", 
                                                             "ADD_SYMBOL", 
                                                             "ALL_SYMBOL", 
                                                             "ALTER_SYMBOL", 
                                                             "ANALYSE_SYMBOL", 
                                                             "AND_SYMBOL", 
                                                             "AS_SYMBOL", 
                                                             "ASC_SYMBOL", 
                                                             "ASENSITIVE_SYMBOL", 
                                                             "BEFORE_SYMBOL", 
                                                             "BETWEEN_SYMBOL", 
                                                             "BIGINT_SYMBOL", 
                                                             "BINARY_SYMBOL", 
                                                             "BIN_NUM_SYMBOL", 
                                                             "BIT_AND_SYMBOL", 
                                                             "BIT_OR_SYMBOL", 
                                                             "BIT_XOR_SYMBOL", 
                                                             "BLOB_SYMBOL", 
                                                             "BOTH_SYMBOL", 
                                                             "BY_SYMBOL", 
                                                             "CALL_SYMBOL", 
                                                             "CASCADE_SYMBOL", 
                                                             "CASE_SYMBOL", 
                                                             "CAST_SYMBOL", 
                                                             "CHANGE_SYMBOL", 
                                                             "CHAR_SYMBOL", 
                                                             "CHECK_SYMBOL", 
                                                             "COLLATE_SYMBOL", 
                                                             "COLUMN_SYMBOL", 
                                                             "CONDITION_SYMBOL", 
                                                             "CONSTRAINT_SYMBOL", 
                                                             "CONTINUE_SYMBOL", 
                                                             "CONVERT_SYMBOL", 
                                                             "COUNT_SYMBOL", 
                                                             "CREATE_SYMBOL", 
                                                             "CROSS_SYMBOL", 
                                                             "CURDATE_SYMBOL", 
                                                             "CURRENT_DATE_SYMBOL", 
                                                             "CURRENT_TIME_SYMBOL", 
                                                             "CURRENT_USER_SYMBOL", 
                                                             "CURSOR_SYMBOL", 
                                                             "CURTIME_SYMBOL", 
                                                             "DATABASE_SYMBOL", 
                                                             "DATABASES_SYMBOL", 
                                                             "DATE_ADD_SYMBOL", 
                                                             "DATE_SUB_SYMBOL", 
                                                             "DAY_HOUR_SYMBOL", 
                                                             "DAY_MICROSECOND_SYMBOL", 
                                                             "DAY_MINUTE_SYMBOL", 
                                                             "DAY_SECOND_SYMBOL", 
                                                             "DECIMAL_NUM_SYMBOL", 
                                                             "DECIMAL_SYMBOL", 
                                                             "DECLARE_SYMBOL", 
                                                             "DEFAULT_SYMBOL", 
                                                             "DELAYED_SYMBOL", 
                                                             "DELETE_SYMBOL", 
                                                             "DESC_SYMBOL", 
                                                             "DESCRIBE_SYMBOL", 
                                                             "DETERMINISTIC_SYMBOL", 
                                                             "DISTINCT_SYMBOL", 
                                                             "DIV_SYMBOL", 
                                                             "DOUBLE_SYMBOL", 
                                                             "DROP_SYMBOL", 
                                                             "DUAL_SYMBOL", 
                                                             "EACH_SYMBOL", 
                                                             "ELSE_SYMBOL", 
                                                             "ELSEIF_SYMBOL", 
                                                             "ENCLOSED_SYMBOL", 
                                                             "END_OF_INPUT_SYMBOL", 
                                                             "ESCAPED_SYMBOL", 
                                                             "EXCHANGE_SYMBOL", 
                                                             "EXISTS_SYMBOL", 
                                                             "EXIT_SYMBOL", 
                                                             "EXPIRE_SYMBOL", 
                                                             "EXPLAIN_SYMBOL", 
                                                             "EXTRACT_SYMBOL", 
                                                             "FALSE_SYMBOL", 
                                                             "FETCH_SYMBOL", 
                                                             "FLOAT_SYMBOL", 
                                                             "FORCE_SYMBOL", 
                                                             "FOREIGN_SYMBOL", 
                                                             "FOR_SYMBOL", 
                                                             "FROM_SYMBOL", 
                                                             "FULLTEXT_SYMBOL", 
                                                             "GET_SYMBOL", 
                                                             "GENERATED_SYMBOL", 
                                                             "GRANT_SYMBOL", 
                                                             "GROUP_SYMBOL", 
                                                             "GROUP_CONCAT_SYMBOL", 
                                                             "HAVING_SYMBOL", 
                                                             "HIGH_PRIORITY_SYMBOL", 
                                                             "HOUR_MICROSECOND_SYMBOL", 
                                                             "HOUR_MINUTE_SYMBOL", 
                                                             "HOUR_SECOND_SYMBOL", 
                                                             "IF_SYMBOL", 
                                                             "IGNORE_SYMBOL", 
                                                             "INDEX_SYMBOL", 
                                                             "INFILE_SYMBOL", 
                                                             "INNER_SYMBOL", 
                                                             "INOUT_SYMBOL", 
                                                             "INSENSITIVE_SYMBOL", 
                                                             "INSERT_SYMBOL", 
                                                             "INTERVAL_SYMBOL", 
                                                             "INTO_SYMBOL", 
                                                             "INT_SYMBOL", 
                                                             "IN_SYMBOL", 
                                                             "IO_AFTER_GTIDS_SYMBOL", 
                                                             "IO_BEFORE_GTIDS_SYMBOL", 
                                                             "IS_SYMBOL", 
                                                             "ITERATE_SYMBOL", 
                                                             "JOIN_SYMBOL", 
                                                             "KEYS_SYMBOL", 
                                                             "KEY_SYMBOL", 
                                                             "KILL_SYMBOL", 
                                                             "LEADING_SYMBOL", 
                                                             "LEAVE_SYMBOL", 
                                                             "LEFT_SYMBOL", 
                                                             "LIKE_SYMBOL", 
                                                             "LIMIT_SYMBOL", 
                                                             "LINEAR_SYMBOL", 
                                                             "LINES_SYMBOL", 
                                                             "LOAD_SYMBOL", 
                                                             "LOCATOR_SYMBOL", 
                                                             "LOCK_SYMBOL", 
                                                             "LONGBLOB_SYMBOL", 
                                                             "LONGTEXT_SYMBOL", 
                                                             "LONG_NUM_SYMBOL", 
                                                             "LONG_SYMBOL", 
                                                             "LOOP_SYMBOL", 
                                                             "LOW_PRIORITY_SYMBOL", 
                                                             "MASTER_BIND_SYMBOL", 
                                                             "MASTER_SSL_VERIFY_SERVER_CERT_SYMBOL", 
                                                             "MATCH_SYMBOL", 
                                                             "MAX_SYMBOL", 
                                                             "MAXVALUE_SYMBOL", 
                                                             "MEDIUMBLOB_SYMBOL", 
                                                             "MEDIUMINT_SYMBOL", 
                                                             "MEDIUMTEXT_SYMBOL", 
                                                             "MID_SYMBOL", 
                                                             "MINUTE_MICROSECOND_SYMBOL", 
                                                             "MINUTE_SECOND_SYMBOL", 
                                                             "MIN_SYMBOL", 
                                                             "MODIFIES_SYMBOL", 
                                                             "MOD_SYMBOL", 
                                                             "NATURAL_SYMBOL", 
                                                             "NCHAR_STRING_SYMBOL", 
                                                             "NEG_SYMBOL", 
                                                             "NONBLOCKING_SYMBOL", 
                                                             "NOT_SYMBOL", 
                                                             "NOW_SYMBOL", 
                                                             "NO_WRITE_TO_BINLOG_SYMBOL", 
                                                             "NULL_SYMBOL", 
                                                             "NUMERIC_SYMBOL", 
                                                             "OFFLINE_SYMBOL", 
                                                             "ON_SYMBOL", 
                                                             "ONLINE_SYMBOL", 
                                                             "ONLY_SYMBOL", 
                                                             "OPTIMIZE_SYMBOL", 
                                                             "OPTIMIZER_COSTS_SYMBOL", 
                                                             "OPTION_SYMBOL", 
                                                             "OPTIONALLY_SYMBOL", 
                                                             "ORDER_SYMBOL", 
                                                             "OR_SYMBOL", 
                                                             "OUTER_SYMBOL", 
                                                             "OUTFILE_SYMBOL", 
                                                             "OUT_SYMBOL", 
                                                             "POSITION_SYMBOL", 
                                                             "PRECISION_SYMBOL", 
                                                             "PRIMARY_SYMBOL", 
                                                             "PROCEDURE_SYMBOL", 
                                                             "PURGE_SYMBOL", 
                                                             "RANGE_SYMBOL", 
                                                             "READS_SYMBOL", 
                                                             "READ_SYMBOL", 
                                                             "READ_WRITE_SYMBOL", 
                                                             "REAL_SYMBOL", 
                                                             "REFERENCES_SYMBOL", 
                                                             "REGEXP_SYMBOL", 
                                                             "RELEASE_SYMBOL", 
                                                             "RENAME_SYMBOL", 
                                                             "REPEAT_SYMBOL", 
                                                             "REPLACE_SYMBOL", 
                                                             "REQUIRE_SYMBOL", 
                                                             "RESIGNAL_SYMBOL", 
                                                             "RESTRICT_SYMBOL", 
                                                             "RETURN_SYMBOL", 
                                                             "REVOKE_SYMBOL", 
                                                             "RIGHT_SYMBOL", 
                                                             "SECOND_MICROSECOND_SYMBOL", 
                                                             "SELECT_SYMBOL", 
                                                             "SENSITIVE_SYMBOL", 
                                                             "SEPARATOR_SYMBOL", 
                                                             "SERVER_OPTIONS_SYMBOL", 
                                                             "SESSION_USER_SYMBOL", 
                                                             "SET_SYMBOL", 
                                                             "SET_VAR_SYMBOL", 
                                                             "SHOW_SYMBOL", 
                                                             "SIGNAL_SYMBOL", 
                                                             "SMALLINT_SYMBOL", 
                                                             "SPATIAL_SYMBOL", 
                                                             "SPECIFIC_SYMBOL", 
                                                             "SQLEXCEPTION_SYMBOL", 
                                                             "SQLSTATE_SYMBOL", 
                                                             "SQLWARNING_SYMBOL", 
                                                             "SQL_BIG_RESULT_SYMBOL", 
                                                             "SQL_CALC_FOUND_ROWS_SYMBOL", 
                                                             "SQL_SMALL_RESULT_SYMBOL", 
                                                             "SQL_SYMBOL", 
                                                             "SSL_SYMBOL", 
                                                             "STARTING_SYMBOL", 
                                                             "STDDEV_SAMP_SYMBOL", 
                                                             "STDDEV_SYMBOL", 
                                                             "STDDEV_POP_SYMBOL", 
                                                             "STD_SYMBOL", 
                                                             "STORED_SYMBOL", 
                                                             "STRAIGHT_JOIN_SYMBOL", 
                                                             "SUBSTR_SYMBOL", 
                                                             "SUBSTRING_SYMBOL", 
                                                             "SUM_SYMBOL", 
                                                             "SYSDATE_SYMBOL", 
                                                             "SYSTEM_USER_SYMBOL", 
                                                             "TABLE_REF_PRIORITY_SYMBOL", 
                                                             "TABLE_SYMBOL", 
                                                             "TERMINATED_SYMBOL", 
                                                             "THEN_SYMBOL", 
                                                             "TINYBLOB_SYMBOL", 
                                                             "TINYINT_SYMBOL", 
                                                             "TINYTEXT_SYMBOL", 
                                                             "TO_SYMBOL", 
                                                             "TRAILING_SYMBOL", 
                                                             "TRIGGER_SYMBOL", 
                                                             "TRIM_SYMBOL", 
                                                             "TRUE_SYMBOL", 
                                                             "UNDO_SYMBOL", 
                                                             "UNION_SYMBOL", 
                                                             "UNIQUE_SYMBOL", 
                                                             "UNLOCK_SYMBOL", 
                                                             "UNSIGNED_SYMBOL", 
                                                             "UPDATE_SYMBOL", 
                                                             "USAGE_SYMBOL", 
                                                             "USE_SYMBOL", 
                                                             "USING_SYMBOL", 
                                                             "UTC_DATE_SYMBOL", 
                                                             "UTC_TIMESTAMP_SYMBOL", 
                                                             "UTC_TIME_SYMBOL", 
                                                             "VALIDATION_SYMBOL", 
                                                             "VALUES_SYMBOL", 
                                                             "VARBINARY_SYMBOL", 
                                                             "VARCHAR_SYMBOL", 
                                                             "VARIANCE_SYMBOL", 
                                                             "VARYING_SYMBOL", 
                                                             "VAR_POP_SYMBOL", 
                                                             "VAR_SAMP_SYMBOL", 
                                                             "VIRTUAL_SYMBOL", 
                                                             "WHEN_SYMBOL", 
                                                             "WHERE_SYMBOL", 
                                                             "WHILE_SYMBOL", 
                                                             "WITH_SYMBOL", 
                                                             "WITHOUT_SYMBOL", 
                                                             "WRITE_SYMBOL", 
                                                             "XOR_SYMBOL", 
                                                             "YEAR_MONTH_SYMBOL", 
                                                             "ZEROFILL_SYMBOL", 
                                                             "PERSIST_SYMBOL", 
                                                             "ROLE_SYMBOL", 
                                                             "ADMIN_SYMBOL", 
                                                             "INVISIBLE_SYMBOL", 
                                                             "VISIBLE_SYMBOL", 
                                                             "EXCEPT_SYMBOL", 
                                                             "COMPONENT_SYMBOL", 
                                                             "RECURSIVE_SYMBOL", 
                                                             "JSON_OBJECTAGG_SYMBOL", 
                                                             "JSON_ARRAYAGG_SYMBOL", 
                                                             "OF_SYMBOL", 
                                                             "SKIP_SYMBOL", 
                                                             "LOCKED_SYMBOL", 
                                                             "NOWAIT_SYMBOL", 
                                                             "GROUPING_SYMBOL", 
                                                             "PERSIST_ONLY_SYMBOL", 
                                                             "HISTOGRAM_SYMBOL", 
                                                             "BUCKETS_SYMBOL", 
                                                             "REMOTE_SYMBOL", 
                                                             "CLONE_SYMBOL", 
                                                             "CUME_DIST_SYMBOL", 
                                                             "DENSE_RANK_SYMBOL", 
                                                             "EXCLUDE_SYMBOL", 
                                                             "FIRST_VALUE_SYMBOL", 
                                                             "FOLLOWING_SYMBOL", 
                                                             "GROUPS_SYMBOL", 
                                                             "LAG_SYMBOL", 
                                                             "LAST_VALUE_SYMBOL", 
                                                             "LEAD_SYMBOL", 
                                                             "NTH_VALUE_SYMBOL", 
                                                             "NTILE_SYMBOL", 
                                                             "NULLS_SYMBOL", 
                                                             "OTHERS_SYMBOL", 
                                                             "OVER_SYMBOL", 
                                                             "PERCENT_RANK_SYMBOL", 
                                                             "PRECEDING_SYMBOL", 
                                                             "RANK_SYMBOL", 
                                                             "RESPECT_SYMBOL", 
                                                             "ROW_NUMBER_SYMBOL", 
                                                             "TIES_SYMBOL", 
                                                             "UNBOUNDED_SYMBOL", 
                                                             "WINDOW_SYMBOL", 
                                                             "EMPTY_SYMBOL", 
                                                             "JSON_TABLE_SYMBOL", 
                                                             "NESTED_SYMBOL", 
                                                             "ORDINALITY_SYMBOL", 
                                                             "PATH_SYMBOL", 
                                                             "HISTORY_SYMBOL", 
                                                             "REUSE_SYMBOL", 
                                                             "SRID_SYMBOL", 
                                                             "THREAD_PRIORITY_SYMBOL", 
                                                             "RESOURCE_SYMBOL", 
                                                             "SYSTEM_SYMBOL", 
                                                             "VCPU_SYMBOL", 
                                                             "MASTER_PUBLIC_KEY_PATH_SYMBOL", 
                                                             "GET_MASTER_PUBLIC_KEY_SYMBOL", 
                                                             "RESTART_SYMBOL", 
                                                             "DEFINITION_SYMBOL", 
                                                             "DESCRIPTION_SYMBOL", 
                                                             "ORGANIZATION_SYMBOL", 
                                                             "REFERENCE_SYMBOL", 
                                                             "OPTIONAL_SYMBOL", 
                                                             "SECONDARY_SYMBOL", 
                                                             "SECONDARY_ENGINE_SYMBOL", 
                                                             "SECONDARY_LOAD_SYMBOL", 
                                                             "SECONDARY_UNLOAD_SYMBOL", 
                                                             "ACTIVE_SYMBOL", 
                                                             "INACTIVE_SYMBOL", 
                                                             "LATERAL_SYMBOL", 
                                                             "RETAIN_SYMBOL", 
                                                             "OLD_SYMBOL", 
                                                             "NETWORK_NAMESPACE_SYMBOL", 
                                                             "ENFORCED_SYMBOL", 
                                                             "ARRAY_SYMBOL", 
                                                             "OJ_SYMBOL", 
                                                             "MEMBER_SYMBOL", 
                                                             "RANDOM_SYMBOL", 
                                                             "MASTER_COMPRESSION_ALGORITHM_SYMBOL", 
                                                             "MASTER_ZSTD_COMPRESSION_LEVEL_SYMBOL", 
                                                             "PRIVILEGE_CHECKS_USER_SYMBOL", 
                                                             "MASTER_TLS_CIPHERSUITES_SYMBOL", 
                                                             "WHITESPACE", 
                                                             "INVALID_INPUT", 
                                                             "UNDERSCORE_CHARSET", 
                                                             "IDENTIFIER", 
                                                             "NCHAR_TEXT", 
                                                             "BACK_TICK_QUOTED_ID", 
                                                             "DOUBLE_QUOTED_TEXT", 
                                                             "SINGLE_QUOTED_TEXT", 
                                                             "VERSION_COMMENT_START", 
                                                             "MYSQL_COMMENT_START", 
                                                             "VERSION_COMMENT_END", 
                                                             "BLOCK_COMMENT", 
                                                             "POUND_COMMENT", 
                                                             "DASHDASH_COMMENT", 
                                                             "NOT_EQUAL2_OPERATOR" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"EQUAL_OPERATOR", "ASSIGN_OPERATOR", "NULL_SAFE_EQUAL_OPERATOR", "GREATER_OR_EQUAL_OPERATOR", 
		"GREATER_THAN_OPERATOR", "LESS_OR_EQUAL_OPERATOR", "LESS_THAN_OPERATOR", 
		"NOT_EQUAL_OPERATOR", "NOT_EQUAL2_OPERATOR", "PLUS_OPERATOR", "MINUS_OPERATOR", 
		"MULT_OPERATOR", "DIV_OPERATOR", "MOD_OPERATOR", "LOGICAL_NOT_OPERATOR", 
		"BITWISE_NOT_OPERATOR", "SHIFT_LEFT_OPERATOR", "SHIFT_RIGHT_OPERATOR", 
		"LOGICAL_AND_OPERATOR", "BITWISE_AND_OPERATOR", "BITWISE_XOR_OPERATOR", 
		"LOGICAL_OR_OPERATOR", "BITWISE_OR_OPERATOR", "DOT_SYMBOL", "COMMA_SYMBOL", 
		"SEMICOLON_SYMBOL", "COLON_SYMBOL", "OPEN_PAR_SYMBOL", "CLOSE_PAR_SYMBOL", 
		"OPEN_CURLY_SYMBOL", "CLOSE_CURLY_SYMBOL", "UNDERLINE_SYMBOL", "JSON_SEPARATOR_SYMBOL", 
		"JSON_UNQUOTED_SEPARATOR_SYMBOL", "AT_SIGN_SYMBOL", "AT_TEXT_SUFFIX", 
		"AT_AT_SIGN_SYMBOL", "NULL2_SYMBOL", "PARAM_MARKER", "A", "B", "C", "D", 
		"E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
		"S", "T", "U", "V", "W", "X", "Y", "Z", "DIGIT", "DIGITS", "HEXDIGIT", 
		"HEX_NUMBER", "BIN_NUMBER", "INT_NUMBER", "DECIMAL_NUMBER", "FLOAT_NUMBER", 
		"DOT_IDENTIFIER", "ACCESSIBLE_SYMBOL", "ACCOUNT_SYMBOL", "ACTION_SYMBOL", 
		"ADD_SYMBOL", "ADDDATE_SYMBOL", "AFTER_SYMBOL", "AGAINST_SYMBOL", "AGGREGATE_SYMBOL", 
		"ALGORITHM_SYMBOL", "ALL_SYMBOL", "ALTER_SYMBOL", "ALWAYS_SYMBOL", "ANALYSE_SYMBOL", 
		"ANALYZE_SYMBOL", "AND_SYMBOL", "ANY_SYMBOL", "AS_SYMBOL", "ASC_SYMBOL", 
		"ASCII_SYMBOL", "ASENSITIVE_SYMBOL", "AT_SYMBOL", "AUTHORS_SYMBOL", "AUTOEXTEND_SIZE_SYMBOL", 
		"AUTO_INCREMENT_SYMBOL", "AVG_ROW_LENGTH_SYMBOL", "AVG_SYMBOL", "BACKUP_SYMBOL", 
		"BEFORE_SYMBOL", "BEGIN_SYMBOL", "BETWEEN_SYMBOL", "BIGINT_SYMBOL", "BINARY_SYMBOL", 
		"BINLOG_SYMBOL", "BIN_NUM_SYMBOL", "BIT_AND_SYMBOL", "BIT_OR_SYMBOL", 
		"BIT_SYMBOL", "BIT_XOR_SYMBOL", "BLOB_SYMBOL", "BLOCK_SYMBOL", "BOOLEAN_SYMBOL", 
		"BOOL_SYMBOL", "BOTH_SYMBOL", "BTREE_SYMBOL", "BY_SYMBOL", "BYTE_SYMBOL", 
		"CACHE_SYMBOL", "CALL_SYMBOL", "CASCADE_SYMBOL", "CASCADED_SYMBOL", "CASE_SYMBOL", 
		"CAST_SYMBOL", "CATALOG_NAME_SYMBOL", "CHAIN_SYMBOL", "CHANGE_SYMBOL", 
		"CHANGED_SYMBOL", "CHANNEL_SYMBOL", "CHARSET_SYMBOL", "CHARACTER_SYMBOL", 
		"CHAR_SYMBOL", "CHECKSUM_SYMBOL", "CHECK_SYMBOL", "CIPHER_SYMBOL", "CLASS_ORIGIN_SYMBOL", 
		"CLIENT_SYMBOL", "CLOSE_SYMBOL", "COALESCE_SYMBOL", "CODE_SYMBOL", "COLLATE_SYMBOL", 
		"COLLATION_SYMBOL", "COLUMNS_SYMBOL", "COLUMN_SYMBOL", "COLUMN_NAME_SYMBOL", 
		"COLUMN_FORMAT_SYMBOL", "COMMENT_SYMBOL", "COMMITTED_SYMBOL", "COMMIT_SYMBOL", 
		"COMPACT_SYMBOL", "COMPLETION_SYMBOL", "COMPRESSED_SYMBOL", "COMPRESSION_SYMBOL", 
		"CONCURRENT_SYMBOL", "CONDITION_SYMBOL", "CONNECTION_SYMBOL", "CONSISTENT_SYMBOL", 
		"CONSTRAINT_SYMBOL", "CONSTRAINT_CATALOG_SYMBOL", "CONSTRAINT_NAME_SYMBOL", 
		"CONSTRAINT_SCHEMA_SYMBOL", "CONTAINS_SYMBOL", "CONTEXT_SYMBOL", "CONTINUE_SYMBOL", 
		"CONTRIBUTORS_SYMBOL", "CONVERT_SYMBOL", "COUNT_SYMBOL", "CPU_SYMBOL", 
		"CREATE_SYMBOL", "CROSS_SYMBOL", "CUBE_SYMBOL", "CURDATE_SYMBOL", "CURRENT_SYMBOL", 
		"CURRENT_DATE_SYMBOL", "CURRENT_TIME_SYMBOL", "CURRENT_TIMESTAMP_SYMBOL", 
		"CURRENT_USER_SYMBOL", "CURSOR_SYMBOL", "CURSOR_NAME_SYMBOL", "CURTIME_SYMBOL", 
		"DATABASE_SYMBOL", "DATABASES_SYMBOL", "DATAFILE_SYMBOL", "DATA_SYMBOL", 
		"DATETIME_SYMBOL", "DATE_ADD_SYMBOL", "DATE_SUB_SYMBOL", "DATE_SYMBOL", 
		"DAYOFMONTH_SYMBOL", "DAY_HOUR_SYMBOL", "DAY_MICROSECOND_SYMBOL", "DAY_MINUTE_SYMBOL", 
		"DAY_SECOND_SYMBOL", "DAY_SYMBOL", "DEALLOCATE_SYMBOL", "DEC_SYMBOL", 
		"DECIMAL_NUM_SYMBOL", "DECIMAL_SYMBOL", "DECLARE_SYMBOL", "DEFAULT_SYMBOL", 
		"DEFAULT_AUTH_SYMBOL", "DEFINER_SYMBOL", "DELAYED_SYMBOL", "DELAY_KEY_WRITE_SYMBOL", 
		"DELETE_SYMBOL", "DESC_SYMBOL", "DESCRIBE_SYMBOL", "DES_KEY_FILE_SYMBOL", 
		"DETERMINISTIC_SYMBOL", "DIAGNOSTICS_SYMBOL", "DIRECTORY_SYMBOL", "DISABLE_SYMBOL", 
		"DISCARD_SYMBOL", "DISK_SYMBOL", "DISTINCT_SYMBOL", "DISTINCTROW_SYMBOL", 
		"DIV_SYMBOL", "DOUBLE_SYMBOL", "DO_SYMBOL", "DROP_SYMBOL", "DUAL_SYMBOL", 
		"DUMPFILE_SYMBOL", "DUPLICATE_SYMBOL", "DYNAMIC_SYMBOL", "EACH_SYMBOL", 
		"ELSE_SYMBOL", "ELSEIF_SYMBOL", "ENABLE_SYMBOL", "ENCLOSED_SYMBOL", "ENCRYPTION_SYMBOL", 
		"END_SYMBOL", "ENDS_SYMBOL", "END_OF_INPUT_SYMBOL", "ENGINES_SYMBOL", 
		"ENGINE_SYMBOL", "ENUM_SYMBOL", "ERROR_SYMBOL", "ERRORS_SYMBOL", "ESCAPED_SYMBOL", 
		"ESCAPE_SYMBOL", "EVENTS_SYMBOL", "EVENT_SYMBOL", "EVERY_SYMBOL", "EXCHANGE_SYMBOL", 
		"EXECUTE_SYMBOL", "EXISTS_SYMBOL", "EXIT_SYMBOL", "EXPANSION_SYMBOL", 
		"EXPIRE_SYMBOL", "EXPLAIN_SYMBOL", "EXPORT_SYMBOL", "EXTENDED_SYMBOL", 
		"EXTENT_SIZE_SYMBOL", "EXTRACT_SYMBOL", "FALSE_SYMBOL", "FAST_SYMBOL", 
		"FAULTS_SYMBOL", "FETCH_SYMBOL", "FIELDS_SYMBOL", "FILE_SYMBOL", "FILE_BLOCK_SIZE_SYMBOL", 
		"FILTER_SYMBOL", "FIRST_SYMBOL", "FIXED_SYMBOL", "FLOAT4_SYMBOL", "FLOAT8_SYMBOL", 
		"FLOAT_SYMBOL", "FLUSH_SYMBOL", "FOLLOWS_SYMBOL", "FORCE_SYMBOL", "FOREIGN_SYMBOL", 
		"FOR_SYMBOL", "FORMAT_SYMBOL", "FOUND_SYMBOL", "FROM_SYMBOL", "FULL_SYMBOL", 
		"FULLTEXT_SYMBOL", "FUNCTION_SYMBOL", "GET_SYMBOL", "GENERAL_SYMBOL", 
		"GENERATED_SYMBOL", "GROUP_REPLICATION_SYMBOL", "GEOMETRYCOLLECTION_SYMBOL", 
		"GEOMETRY_SYMBOL", "GET_FORMAT_SYMBOL", "GLOBAL_SYMBOL", "GRANT_SYMBOL", 
		"GRANTS_SYMBOL", "GROUP_SYMBOL", "GROUP_CONCAT_SYMBOL", "HANDLER_SYMBOL", 
		"HASH_SYMBOL", "HAVING_SYMBOL", "HELP_SYMBOL", "HIGH_PRIORITY_SYMBOL", 
		"HOST_SYMBOL", "HOSTS_SYMBOL", "HOUR_MICROSECOND_SYMBOL", "HOUR_MINUTE_SYMBOL", 
		"HOUR_SECOND_SYMBOL", "HOUR_SYMBOL", "IDENTIFIED_SYMBOL", "IF_SYMBOL", 
		"IGNORE_SYMBOL", "IGNORE_SERVER_IDS_SYMBOL", "IMPORT_SYMBOL", "INDEXES_SYMBOL", 
		"INDEX_SYMBOL", "INFILE_SYMBOL", "INITIAL_SIZE_SYMBOL", "INNER_SYMBOL", 
		"INOUT_SYMBOL", "INSENSITIVE_SYMBOL", "INSERT_SYMBOL", "INSERT_METHOD_SYMBOL", 
		"INSTANCE_SYMBOL", "INSTALL_SYMBOL", "INTEGER_SYMBOL", "INTERVAL_SYMBOL", 
		"INTO_SYMBOL", "INT_SYMBOL", "INVOKER_SYMBOL", "IN_SYMBOL", "IO_AFTER_GTIDS_SYMBOL", 
		"IO_BEFORE_GTIDS_SYMBOL", "IO_THREAD_SYMBOL", "IO_SYMBOL", "IPC_SYMBOL", 
		"IS_SYMBOL", "ISOLATION_SYMBOL", "ISSUER_SYMBOL", "ITERATE_SYMBOL", "JOIN_SYMBOL", 
		"JSON_SYMBOL", "KEYS_SYMBOL", "KEY_BLOCK_SIZE_SYMBOL", "KEY_SYMBOL", "KILL_SYMBOL", 
		"LANGUAGE_SYMBOL", "LAST_SYMBOL", "LEADING_SYMBOL", "LEAVES_SYMBOL", "LEAVE_SYMBOL", 
		"LEFT_SYMBOL", "LESS_SYMBOL", "LEVEL_SYMBOL", "LIKE_SYMBOL", "LIMIT_SYMBOL", 
		"LINEAR_SYMBOL", "LINES_SYMBOL", "LINESTRING_SYMBOL", "LIST_SYMBOL", "LOAD_SYMBOL", 
		"LOCALTIME_SYMBOL", "LOCALTIMESTAMP_SYMBOL", "LOCAL_SYMBOL", "LOCATOR_SYMBOL", 
		"LOCKS_SYMBOL", "LOCK_SYMBOL", "LOGFILE_SYMBOL", "LOGS_SYMBOL", "LONGBLOB_SYMBOL", 
		"LONGTEXT_SYMBOL", "LONG_NUM_SYMBOL", "LONG_SYMBOL", "LOOP_SYMBOL", "LOW_PRIORITY_SYMBOL", 
		"MASTER_AUTO_POSITION_SYMBOL", "MASTER_BIND_SYMBOL", "MASTER_CONNECT_RETRY_SYMBOL", 
		"MASTER_DELAY_SYMBOL", "MASTER_HOST_SYMBOL", "MASTER_LOG_FILE_SYMBOL", 
		"MASTER_LOG_POS_SYMBOL", "MASTER_PASSWORD_SYMBOL", "MASTER_PORT_SYMBOL", 
		"MASTER_RETRY_COUNT_SYMBOL", "MASTER_SERVER_ID_SYMBOL", "MASTER_SSL_CAPATH_SYMBOL", 
		"MASTER_SSL_CA_SYMBOL", "MASTER_SSL_CERT_SYMBOL", "MASTER_SSL_CIPHER_SYMBOL", 
		"MASTER_SSL_CRL_SYMBOL", "MASTER_SSL_CRLPATH_SYMBOL", "MASTER_SSL_KEY_SYMBOL", 
		"MASTER_SSL_SYMBOL", "MASTER_SSL_VERIFY_SERVER_CERT_SYMBOL", "MASTER_SYMBOL", 
		"MASTER_TLS_VERSION_SYMBOL", "MASTER_USER_SYMBOL", "MASTER_HEARTBEAT_PERIOD_SYMBOL", 
		"MATCH_SYMBOL", "MAX_CONNECTIONS_PER_HOUR_SYMBOL", "MAX_QUERIES_PER_HOUR_SYMBOL", 
		"MAX_ROWS_SYMBOL", "MAX_SIZE_SYMBOL", "MAX_STATEMENT_TIME_SYMBOL", "MAX_SYMBOL", 
		"MAX_UPDATES_PER_HOUR_SYMBOL", "MAX_USER_CONNECTIONS_SYMBOL", "MAXVALUE_SYMBOL", 
		"MEDIUMBLOB_SYMBOL", "MEDIUMINT_SYMBOL", "MEDIUMTEXT_SYMBOL", "MEDIUM_SYMBOL", 
		"MEMORY_SYMBOL", "MERGE_SYMBOL", "MESSAGE_TEXT_SYMBOL", "MICROSECOND_SYMBOL", 
		"MID_SYMBOL", "MIDDLEINT_SYMBOL", "MIGRATE_SYMBOL", "MINUTE_MICROSECOND_SYMBOL", 
		"MINUTE_SECOND_SYMBOL", "MINUTE_SYMBOL", "MIN_ROWS_SYMBOL", "MIN_SYMBOL", 
		"MODE_SYMBOL", "MODIFIES_SYMBOL", "MODIFY_SYMBOL", "MOD_SYMBOL", "MONTH_SYMBOL", 
		"MULTILINESTRING_SYMBOL", "MULTIPOINT_SYMBOL", "MULTIPOLYGON_SYMBOL", 
		"MUTEX_SYMBOL", "MYSQL_ERRNO_SYMBOL", "NAMES_SYMBOL", "NAME_SYMBOL", "NATIONAL_SYMBOL", 
		"NATURAL_SYMBOL", "NCHAR_STRING_SYMBOL", "NCHAR_SYMBOL", "NDB_SYMBOL", 
		"NDBCLUSTER_SYMBOL", "NEG_SYMBOL", "NEVER_SYMBOL", "NEW_SYMBOL", "NEXT_SYMBOL", 
		"NODEGROUP_SYMBOL", "NONE_SYMBOL", "NONBLOCKING_SYMBOL", "NOT_SYMBOL", 
		"NOW_SYMBOL", "NO_SYMBOL", "NO_WAIT_SYMBOL", "NO_WRITE_TO_BINLOG_SYMBOL", 
		"NULL_SYMBOL", "NUMBER_SYMBOL", "NUMERIC_SYMBOL", "NVARCHAR_SYMBOL", "OFFLINE_SYMBOL", 
		"OFFSET_SYMBOL", "OLD_PASSWORD_SYMBOL", "ON_SYMBOL", "ONE_SYMBOL", "ONLINE_SYMBOL", 
		"ONLY_SYMBOL", "OPEN_SYMBOL", "OPTIMIZE_SYMBOL", "OPTIMIZER_COSTS_SYMBOL", 
		"OPTIONS_SYMBOL", "OPTION_SYMBOL", "OPTIONALLY_SYMBOL", "ORDER_SYMBOL", 
		"OR_SYMBOL", "OUTER_SYMBOL", "OUTFILE_SYMBOL", "OUT_SYMBOL", "OWNER_SYMBOL", 
		"PACK_KEYS_SYMBOL", "PAGE_SYMBOL", "PARSER_SYMBOL", "PARTIAL_SYMBOL", 
		"PARTITIONING_SYMBOL", "PARTITIONS_SYMBOL", "PARTITION_SYMBOL", "PASSWORD_SYMBOL", 
		"PHASE_SYMBOL", "PLUGINS_SYMBOL", "PLUGIN_DIR_SYMBOL", "PLUGIN_SYMBOL", 
		"POINT_SYMBOL", "POLYGON_SYMBOL", "PORT_SYMBOL", "POSITION_SYMBOL", "PRECEDES_SYMBOL", 
		"PRECISION_SYMBOL", "PREPARE_SYMBOL", "PRESERVE_SYMBOL", "PREV_SYMBOL", 
		"PRIMARY_SYMBOL", "PRIVILEGES_SYMBOL", "PROCEDURE_SYMBOL", "PROCESS_SYMBOL", 
		"PROCESSLIST_SYMBOL", "PROFILE_SYMBOL", "PROFILES_SYMBOL", "PROXY_SYMBOL", 
		"PURGE_SYMBOL", "QUARTER_SYMBOL", "QUERY_SYMBOL", "QUICK_SYMBOL", "RANGE_SYMBOL", 
		"READS_SYMBOL", "READ_ONLY_SYMBOL", "READ_SYMBOL", "READ_WRITE_SYMBOL", 
		"REAL_SYMBOL", "REBUILD_SYMBOL", "RECOVER_SYMBOL", "REDOFILE_SYMBOL", 
		"REDO_BUFFER_SIZE_SYMBOL", "REDUNDANT_SYMBOL", "REFERENCES_SYMBOL", "REGEXP_SYMBOL", 
		"RELAY_SYMBOL", "RELAYLOG_SYMBOL", "RELAY_LOG_FILE_SYMBOL", "RELAY_LOG_POS_SYMBOL", 
		"RELAY_THREAD_SYMBOL", "RELEASE_SYMBOL", "RELOAD_SYMBOL", "REMOVE_SYMBOL", 
		"RENAME_SYMBOL", "REORGANIZE_SYMBOL", "REPAIR_SYMBOL", "REPEATABLE_SYMBOL", 
		"REPEAT_SYMBOL", "REPLACE_SYMBOL", "REPLICATION_SYMBOL", "REPLICATE_DO_DB_SYMBOL", 
		"REPLICATE_IGNORE_DB_SYMBOL", "REPLICATE_DO_TABLE_SYMBOL", "REPLICATE_IGNORE_TABLE_SYMBOL", 
		"REPLICATE_WILD_DO_TABLE_SYMBOL", "REPLICATE_WILD_IGNORE_TABLE_SYMBOL", 
		"REPLICATE_REWRITE_DB_SYMBOL", "REQUIRE_SYMBOL", "RESET_SYMBOL", "RESIGNAL_SYMBOL", 
		"RESTORE_SYMBOL", "RESTRICT_SYMBOL", "RESUME_SYMBOL", "RETURNED_SQLSTATE_SYMBOL", 
		"RETURNS_SYMBOL", "RETURN_SYMBOL", "REVERSE_SYMBOL", "REVOKE_SYMBOL", 
		"RIGHT_SYMBOL", "RLIKE_SYMBOL", "ROLLBACK_SYMBOL", "ROLLUP_SYMBOL", "ROTATE_SYMBOL", 
		"ROUTINE_SYMBOL", "ROWS_SYMBOL", "ROW_COUNT_SYMBOL", "ROW_FORMAT_SYMBOL", 
		"ROW_SYMBOL", "RTREE_SYMBOL", "SAVEPOINT_SYMBOL", "SCHEDULE_SYMBOL", "SCHEMA_SYMBOL", 
		"SCHEMA_NAME_SYMBOL", "SCHEMAS_SYMBOL", "SECOND_MICROSECOND_SYMBOL", "SECOND_SYMBOL", 
		"SECURITY_SYMBOL", "SELECT_SYMBOL", "SENSITIVE_SYMBOL", "SEPARATOR_SYMBOL", 
		"SERIALIZABLE_SYMBOL", "SERIAL_SYMBOL", "SESSION_SYMBOL", "SERVER_SYMBOL", 
		"SERVER_OPTIONS_SYMBOL", "SESSION_USER_SYMBOL", "SET_SYMBOL", "SET_VAR_SYMBOL", 
		"SHARE_SYMBOL", "SHOW_SYMBOL", "SHUTDOWN_SYMBOL", "SIGNAL_SYMBOL", "SIGNED_SYMBOL", 
		"SIMPLE_SYMBOL", "SLAVE_SYMBOL", "SLOW_SYMBOL", "SMALLINT_SYMBOL", "SNAPSHOT_SYMBOL", 
		"SOME_SYMBOL", "SOCKET_SYMBOL", "SONAME_SYMBOL", "SOUNDS_SYMBOL", "SOURCE_SYMBOL", 
		"SPATIAL_SYMBOL", "SPECIFIC_SYMBOL", "SQLEXCEPTION_SYMBOL", "SQLSTATE_SYMBOL", 
		"SQLWARNING_SYMBOL", "SQL_AFTER_GTIDS_SYMBOL", "SQL_AFTER_MTS_GAPS_SYMBOL", 
		"SQL_BEFORE_GTIDS_SYMBOL", "SQL_BIG_RESULT_SYMBOL", "SQL_BUFFER_RESULT_SYMBOL", 
		"SQL_CACHE_SYMBOL", "SQL_CALC_FOUND_ROWS_SYMBOL", "SQL_NO_CACHE_SYMBOL", 
		"SQL_SMALL_RESULT_SYMBOL", "SQL_SYMBOL", "SQL_THREAD_SYMBOL", "SSL_SYMBOL", 
		"STACKED_SYMBOL", "STARTING_SYMBOL", "STARTS_SYMBOL", "START_SYMBOL", 
		"STATS_AUTO_RECALC_SYMBOL", "STATS_PERSISTENT_SYMBOL", "STATS_SAMPLE_PAGES_SYMBOL", 
		"STATUS_SYMBOL", "STDDEV_SAMP_SYMBOL", "STDDEV_SYMBOL", "STDDEV_POP_SYMBOL", 
		"STD_SYMBOL", "STOP_SYMBOL", "STORAGE_SYMBOL", "STORED_SYMBOL", "STRAIGHT_JOIN_SYMBOL", 
		"STRING_SYMBOL", "SUBCLASS_ORIGIN_SYMBOL", "SUBDATE_SYMBOL", "SUBJECT_SYMBOL", 
		"SUBPARTITIONS_SYMBOL", "SUBPARTITION_SYMBOL", "SUBSTR_SYMBOL", "SUBSTRING_SYMBOL", 
		"SUM_SYMBOL", "SUPER_SYMBOL", "SUSPEND_SYMBOL", "SWAPS_SYMBOL", "SWITCHES_SYMBOL", 
		"SYSDATE_SYMBOL", "SYSTEM_USER_SYMBOL", "TABLES_SYMBOL", "TABLESPACE_SYMBOL", 
		"TABLE_REF_PRIORITY_SYMBOL", "TABLE_SYMBOL", "TABLE_CHECKSUM_SYMBOL", 
		"TABLE_NAME_SYMBOL", "TEMPORARY_SYMBOL", "TEMPTABLE_SYMBOL", "TERMINATED_SYMBOL", 
		"TEXT_SYMBOL", "THAN_SYMBOL", "THEN_SYMBOL", "TIMESTAMP_SYMBOL", "TIMESTAMP_ADD_SYMBOL", 
		"TIMESTAMP_DIFF_SYMBOL", "TIME_SYMBOL", "TINYBLOB_SYMBOL", "TINYINT_SYMBOL", 
		"TINYTEXT_SYMBOL", "TO_SYMBOL", "TRAILING_SYMBOL", "TRANSACTION_SYMBOL", 
		"TRIGGERS_SYMBOL", "TRIGGER_SYMBOL", "TRIM_SYMBOL", "TRUE_SYMBOL", "TRUNCATE_SYMBOL", 
		"TYPES_SYMBOL", "TYPE_SYMBOL", "UDF_RETURNS_SYMBOL", "UNCOMMITTED_SYMBOL", 
		"UNDEFINED_SYMBOL", "UNDOFILE_SYMBOL", "UNDO_BUFFER_SIZE_SYMBOL", "UNDO_SYMBOL", 
		"UNICODE_SYMBOL", "UNINSTALL_SYMBOL", "UNION_SYMBOL", "UNIQUE_SYMBOL", 
		"UNKNOWN_SYMBOL", "UNLOCK_SYMBOL", "UNSIGNED_SYMBOL", "UNTIL_SYMBOL", 
		"UPDATE_SYMBOL", "UPGRADE_SYMBOL", "USAGE_SYMBOL", "USER_RESOURCES_SYMBOL", 
		"USER_SYMBOL", "USE_FRM_SYMBOL", "USE_SYMBOL", "USING_SYMBOL", "UTC_DATE_SYMBOL", 
		"UTC_TIMESTAMP_SYMBOL", "UTC_TIME_SYMBOL", "VALIDATION_SYMBOL", "VALUES_SYMBOL", 
		"VALUE_SYMBOL", "VARBINARY_SYMBOL", "VARCHAR_SYMBOL", "VARCHARACTER_SYMBOL", 
		"VARIABLES_SYMBOL", "VARIANCE_SYMBOL", "VARYING_SYMBOL", "VAR_POP_SYMBOL", 
		"VAR_SAMP_SYMBOL", "VIEW_SYMBOL", "VIRTUAL_SYMBOL", "WAIT_SYMBOL", "WARNINGS_SYMBOL", 
		"WEEK_SYMBOL", "WEIGHT_STRING_SYMBOL", "WHEN_SYMBOL", "WHERE_SYMBOL", 
		"WHILE_SYMBOL", "WITH_SYMBOL", "WITHOUT_SYMBOL", "WORK_SYMBOL", "WRAPPER_SYMBOL", 
		"WRITE_SYMBOL", "X509_SYMBOL", "XA_SYMBOL", "XID_SYMBOL", "XML_SYMBOL", 
		"XOR_SYMBOL", "YEAR_MONTH_SYMBOL", "YEAR_SYMBOL", "ZEROFILL_SYMBOL", "PERSIST_SYMBOL", 
		"ROLE_SYMBOL", "ADMIN_SYMBOL", "INVISIBLE_SYMBOL", "VISIBLE_SYMBOL", "EXCEPT_SYMBOL", 
		"COMPONENT_SYMBOL", "RECURSIVE_SYMBOL", "JSON_OBJECTAGG_SYMBOL", "JSON_ARRAYAGG_SYMBOL", 
		"OF_SYMBOL", "SKIP_SYMBOL", "LOCKED_SYMBOL", "NOWAIT_SYMBOL", "GROUPING_SYMBOL", 
		"PERSIST_ONLY_SYMBOL", "HISTOGRAM_SYMBOL", "BUCKETS_SYMBOL", "REMOTE_SYMBOL", 
		"CLONE_SYMBOL", "CUME_DIST_SYMBOL", "DENSE_RANK_SYMBOL", "EXCLUDE_SYMBOL", 
		"FIRST_VALUE_SYMBOL", "FOLLOWING_SYMBOL", "GROUPS_SYMBOL", "LAG_SYMBOL", 
		"LAST_VALUE_SYMBOL", "LEAD_SYMBOL", "NTH_VALUE_SYMBOL", "NTILE_SYMBOL", 
		"NULLS_SYMBOL", "OTHERS_SYMBOL", "OVER_SYMBOL", "PERCENT_RANK_SYMBOL", 
		"PRECEDING_SYMBOL", "RANK_SYMBOL", "RESPECT_SYMBOL", "ROW_NUMBER_SYMBOL", 
		"TIES_SYMBOL", "UNBOUNDED_SYMBOL", "WINDOW_SYMBOL", "EMPTY_SYMBOL", "JSON_TABLE_SYMBOL", 
		"NESTED_SYMBOL", "ORDINALITY_SYMBOL", "PATH_SYMBOL", "HISTORY_SYMBOL", 
		"REUSE_SYMBOL", "SRID_SYMBOL", "THREAD_PRIORITY_SYMBOL", "RESOURCE_SYMBOL", 
		"SYSTEM_SYMBOL", "VCPU_SYMBOL", "MASTER_PUBLIC_KEY_PATH_SYMBOL", "GET_MASTER_PUBLIC_KEY_SYMBOL", 
		"RESTART_SYMBOL", "DEFINITION_SYMBOL", "DESCRIPTION_SYMBOL", "ORGANIZATION_SYMBOL", 
		"REFERENCE_SYMBOL", "OPTIONAL_SYMBOL", "SECONDARY_SYMBOL", "SECONDARY_ENGINE_SYMBOL", 
		"SECONDARY_LOAD_SYMBOL", "SECONDARY_UNLOAD_SYMBOL", "ACTIVE_SYMBOL", "INACTIVE_SYMBOL", 
		"LATERAL_SYMBOL", "RETAIN_SYMBOL", "OLD_SYMBOL", "NETWORK_NAMESPACE_SYMBOL", 
		"ENFORCED_SYMBOL", "ARRAY_SYMBOL", "OJ_SYMBOL", "MEMBER_SYMBOL", "RANDOM_SYMBOL", 
		"MASTER_COMPRESSION_ALGORITHM_SYMBOL", "MASTER_ZSTD_COMPRESSION_LEVEL_SYMBOL", 
		"PRIVILEGE_CHECKS_USER_SYMBOL", "MASTER_TLS_CIPHERSUITES_SYMBOL", "INT1_SYMBOL", 
		"INT2_SYMBOL", "INT3_SYMBOL", "INT4_SYMBOL", "INT8_SYMBOL", "SQL_TSI_SECOND_SYMBOL", 
		"SQL_TSI_MINUTE_SYMBOL", "SQL_TSI_HOUR_SYMBOL", "SQL_TSI_DAY_SYMBOL", 
		"SQL_TSI_WEEK_SYMBOL", "SQL_TSI_MONTH_SYMBOL", "SQL_TSI_QUARTER_SYMBOL", 
		"SQL_TSI_YEAR_SYMBOL", "WHITESPACE", "INVALID_INPUT", "UNDERSCORE_CHARSET", 
		"IDENTIFIER", "NCHAR_TEXT", "BACK_TICK", "SINGLE_QUOTE", "DOUBLE_QUOTE", 
		"BACK_TICK_QUOTED_ID", "DOUBLE_QUOTED_TEXT", "SINGLE_QUOTED_TEXT", "VERSION_COMMENT_START", 
		"MYSQL_COMMENT_START", "VERSION_COMMENT_END", "BLOCK_COMMENT", "POUND_COMMENT", 
		"DASHDASH_COMMENT", "DOUBLE_DASH", "LINEBREAK", "SIMPLE_IDENTIFIER", "ML_COMMENT_HEAD", 
		"ML_COMMENT_END", "LETTER_WHEN_UNQUOTED", "LETTER_WHEN_UNQUOTED_NO_DIGIT", 
		"LETTER_WITHOUT_FLOAT_PART",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MySQLLexer._ATN, MySQLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "MySQLLexer.g4"; }

	public get literalNames(): (string | null)[] { return MySQLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MySQLLexer.symbolicNames; }
	public get ruleNames(): string[] { return MySQLLexer.ruleNames; }

	public get serializedATN(): number[] { return MySQLLexer._serializedATN; }

	public get channelNames(): string[] { return MySQLLexer.channelNames; }

	public get modeNames(): string[] { return MySQLLexer.modeNames; }

	// @Override
	public action(localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 73:
			this.DOT_IDENTIFIER_action(localctx, actionIndex);
			break;
		case 78:
			this.ADDDATE_SYMBOL_action(localctx, actionIndex);
			break;
		case 108:
			this.BIT_AND_SYMBOL_action(localctx, actionIndex);
			break;
		case 109:
			this.BIT_OR_SYMBOL_action(localctx, actionIndex);
			break;
		case 111:
			this.BIT_XOR_SYMBOL_action(localctx, actionIndex);
			break;
		case 125:
			this.CAST_SYMBOL_action(localctx, actionIndex);
			break;
		case 168:
			this.COUNT_SYMBOL_action(localctx, actionIndex);
			break;
		case 173:
			this.CURDATE_SYMBOL_action(localctx, actionIndex);
			break;
		case 175:
			this.CURRENT_DATE_SYMBOL_action(localctx, actionIndex);
			break;
		case 176:
			this.CURRENT_TIME_SYMBOL_action(localctx, actionIndex);
			break;
		case 181:
			this.CURTIME_SYMBOL_action(localctx, actionIndex);
			break;
		case 187:
			this.DATE_ADD_SYMBOL_action(localctx, actionIndex);
			break;
		case 188:
			this.DATE_SUB_SYMBOL_action(localctx, actionIndex);
			break;
		case 255:
			this.EXTRACT_SYMBOL_action(localctx, actionIndex);
			break;
		case 291:
			this.GROUP_CONCAT_SYMBOL_action(localctx, actionIndex);
			break;
		case 399:
			this.MAX_SYMBOL_action(localctx, actionIndex);
			break;
		case 411:
			this.MID_SYMBOL_action(localctx, actionIndex);
			break;
		case 418:
			this.MIN_SYMBOL_action(localctx, actionIndex);
			break;
		case 444:
			this.NOT_SYMBOL_action(localctx, actionIndex);
			break;
		case 445:
			this.NOW_SYMBOL_action(localctx, actionIndex);
			break;
		case 487:
			this.POSITION_SYMBOL_action(localctx, actionIndex);
			break;
		case 578:
			this.SESSION_USER_SYMBOL_action(localctx, actionIndex);
			break;
		case 621:
			this.STDDEV_SAMP_SYMBOL_action(localctx, actionIndex);
			break;
		case 622:
			this.STDDEV_SYMBOL_action(localctx, actionIndex);
			break;
		case 623:
			this.STDDEV_POP_SYMBOL_action(localctx, actionIndex);
			break;
		case 624:
			this.STD_SYMBOL_action(localctx, actionIndex);
			break;
		case 631:
			this.SUBDATE_SYMBOL_action(localctx, actionIndex);
			break;
		case 635:
			this.SUBSTR_SYMBOL_action(localctx, actionIndex);
			break;
		case 636:
			this.SUBSTRING_SYMBOL_action(localctx, actionIndex);
			break;
		case 637:
			this.SUM_SYMBOL_action(localctx, actionIndex);
			break;
		case 642:
			this.SYSDATE_SYMBOL_action(localctx, actionIndex);
			break;
		case 643:
			this.SYSTEM_USER_SYMBOL_action(localctx, actionIndex);
			break;
		case 668:
			this.TRIM_SYMBOL_action(localctx, actionIndex);
			break;
		case 705:
			this.VARIANCE_SYMBOL_action(localctx, actionIndex);
			break;
		case 707:
			this.VAR_POP_SYMBOL_action(localctx, actionIndex);
			break;
		case 708:
			this.VAR_SAMP_SYMBOL_action(localctx, actionIndex);
			break;
		case 827:
			this.UNDERSCORE_CHARSET_action(localctx, actionIndex);
			break;
		case 837:
			this.MYSQL_COMMENT_START_action(localctx, actionIndex);
			break;
		case 838:
			this.VERSION_COMMENT_END_action(localctx, actionIndex);
			break;
		}
	}
	private DOT_IDENTIFIER_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			 super.emitDot() 
			break;
		}
	}
	private ADDDATE_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.type = this.determineFunction(MySQLLexer.ADDDATE_SYMBOL)
			break;
		}
	}
	private BIT_AND_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.type = this.determineFunction(MySQLLexer.BIT_AND_SYMBOL)
			break;
		}
	}
	private BIT_OR_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			this.type = this.determineFunction(MySQLLexer.BIT_OR_SYMBOL)
			break;
		}
	}
	private BIT_XOR_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.type = this.determineFunction(MySQLLexer.BIT_XOR_SYMBOL)
			break;
		}
	}
	private CAST_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.type = this.determineFunction(MySQLLexer.CAST_SYMBOL)
			break;
		}
	}
	private COUNT_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			this.type = this.determineFunction(MySQLLexer.COUNT_SYMBOL)
			break;
		}
	}
	private CURDATE_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 7:
			this.type = this.determineFunction(MySQLLexer.CURDATE_SYMBOL)
			break;
		}
	}
	private CURRENT_DATE_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 8:
			this.type = this.determineFunction(MySQLLexer.CURDATE_SYMBOL)
			break;
		}
	}
	private CURRENT_TIME_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 9:
			this.type = this.determineFunction(MySQLLexer.CURTIME_SYMBOL)
			break;
		}
	}
	private CURTIME_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 10:
			this.type = this.determineFunction(MySQLLexer.CURTIME_SYMBOL)
			break;
		}
	}
	private DATE_ADD_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 11:
			this.type = this.determineFunction(MySQLLexer.DATE_ADD_SYMBOL)
			break;
		}
	}
	private DATE_SUB_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 12:
			this.type = this.determineFunction(MySQLLexer.DATE_SUB_SYMBOL)
			break;
		}
	}
	private EXTRACT_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 13:
			this.type = this.determineFunction(MySQLLexer.EXTRACT_SYMBOL)
			break;
		}
	}
	private GROUP_CONCAT_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 14:
			this.type = this.determineFunction(MySQLLexer.GROUP_CONCAT_SYMBOL)
			break;
		}
	}
	private MAX_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 15:
			this.type = this.determineFunction(MySQLLexer.MAX_SYMBOL)
			break;
		}
	}
	private MID_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 16:
			this.type = this.determineFunction(MySQLLexer.SUBSTRING_SYMBOL)
			break;
		}
	}
	private MIN_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 17:
			this.type = this.determineFunction(MySQLLexer.MIN_SYMBOL)
			break;
		}
	}
	private NOT_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 18:
			this.type = this.isSqlModeActive(SqlMode.HighNotPrecedence) ? MySQLLexer.NOT2_SYMBOL: MySQLLexer.NOT_SYMBOL
			break;
		}
	}
	private NOW_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 19:
			this.type = this.determineFunction(MySQLLexer.NOW_SYMBOL)
			break;
		}
	}
	private POSITION_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 20:
			this.type = this.determineFunction(MySQLLexer.POSITION_SYMBOL)
			break;
		}
	}
	private SESSION_USER_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 21:
			this.type = this.determineFunction(MySQLLexer.USER_SYMBOL)
			break;
		}
	}
	private STDDEV_SAMP_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 22:
			this.type = this.determineFunction(MySQLLexer.STDDEV_SAMP_SYMBOL)
			break;
		}
	}
	private STDDEV_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 23:
			this.type = this.determineFunction(MySQLLexer.STD_SYMBOL)
			break;
		}
	}
	private STDDEV_POP_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 24:
			this.type = this.determineFunction(MySQLLexer.STD_SYMBOL)
			break;
		}
	}
	private STD_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 25:
			this.type = this.determineFunction(MySQLLexer.STD_SYMBOL)
			break;
		}
	}
	private SUBDATE_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 26:
			this.type = this.determineFunction(MySQLLexer.SUBDATE_SYMBOL)
			break;
		}
	}
	private SUBSTR_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 27:
			this.type = this.determineFunction(MySQLLexer.SUBSTRING_SYMBOL)
			break;
		}
	}
	private SUBSTRING_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 28:
			this.type = this.determineFunction(MySQLLexer.SUBSTRING_SYMBOL)
			break;
		}
	}
	private SUM_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 29:
			this.type = this.determineFunction(MySQLLexer.SUM_SYMBOL)
			break;
		}
	}
	private SYSDATE_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 30:
			this.type = this.determineFunction(MySQLLexer.SYSDATE_SYMBOL)
			break;
		}
	}
	private SYSTEM_USER_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 31:
			this.type = this.determineFunction(MySQLLexer.USER_SYMBOL)
			break;
		}
	}
	private TRIM_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 32:
			this.type = this.determineFunction(MySQLLexer.TRIM_SYMBOL)
			break;
		}
	}
	private VARIANCE_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 33:
			this.type = this.determineFunction(MySQLLexer.VARIANCE_SYMBOL)
			break;
		}
	}
	private VAR_POP_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 34:
			this.type = this.determineFunction(MySQLLexer.VARIANCE_SYMBOL)
			break;
		}
	}
	private VAR_SAMP_SYMBOL_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 35:
			this.type = this.determineFunction(MySQLLexer.VAR_SAMP_SYMBOL)
			break;
		}
	}
	private UNDERSCORE_CHARSET_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 36:
			this.type = this.checkCharset(this.text)
			break;
		}
	}
	private MYSQL_COMMENT_START_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 37:
			this.inVersionComment = true
			break;
		}
	}
	private VERSION_COMMENT_END_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 38:
			this.inVersionComment = false
			break;
		}
	}
	// @Override
	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 32:
			return this.JSON_SEPARATOR_SYMBOL_sempred(localctx, predIndex);
		case 33:
			return this.JSON_UNQUOTED_SEPARATOR_SYMBOL_sempred(localctx, predIndex);
		case 75:
			return this.ACCOUNT_SYMBOL_sempred(localctx, predIndex);
		case 85:
			return this.ALWAYS_SYMBOL_sempred(localctx, predIndex);
		case 86:
			return this.ANALYSE_SYMBOL_sempred(localctx, predIndex);
		case 95:
			return this.AUTHORS_SYMBOL_sempred(localctx, predIndex);
		case 130:
			return this.CHANNEL_SYMBOL_sempred(localctx, predIndex);
		case 154:
			return this.COMPRESSION_SYMBOL_sempred(localctx, predIndex);
		case 166:
			return this.CONTRIBUTORS_SYMBOL_sempred(localctx, predIndex);
		case 174:
			return this.CURRENT_SYMBOL_sempred(localctx, predIndex);
		case 202:
			return this.DEFAULT_AUTH_SYMBOL_sempred(localctx, predIndex);
		case 209:
			return this.DES_KEY_FILE_SYMBOL_sempred(localctx, predIndex);
		case 231:
			return this.ENCRYPTION_SYMBOL_sempred(localctx, predIndex);
		case 250:
			return this.EXPIRE_SYMBOL_sempred(localctx, predIndex);
		case 252:
			return this.EXPORT_SYMBOL_sempred(localctx, predIndex);
		case 262:
			return this.FILE_BLOCK_SIZE_SYMBOL_sempred(localctx, predIndex);
		case 263:
			return this.FILTER_SYMBOL_sempred(localctx, predIndex);
		case 270:
			return this.FOLLOWS_SYMBOL_sempred(localctx, predIndex);
		case 280:
			return this.GET_SYMBOL_sempred(localctx, predIndex);
		case 282:
			return this.GENERATED_SYMBOL_sempred(localctx, predIndex);
		case 283:
			return this.GROUP_REPLICATION_SYMBOL_sempred(localctx, predIndex);
		case 317:
			return this.INSTANCE_SYMBOL_sempred(localctx, predIndex);
		case 335:
			return this.JSON_SYMBOL_sempred(localctx, predIndex);
		case 369:
			return this.MASTER_AUTO_POSITION_SYMBOL_sempred(localctx, predIndex);
		case 370:
			return this.MASTER_BIND_SYMBOL_sempred(localctx, predIndex);
		case 378:
			return this.MASTER_RETRY_COUNT_SYMBOL_sempred(localctx, predIndex);
		case 384:
			return this.MASTER_SSL_CRL_SYMBOL_sempred(localctx, predIndex);
		case 385:
			return this.MASTER_SSL_CRLPATH_SYMBOL_sempred(localctx, predIndex);
		case 390:
			return this.MASTER_TLS_VERSION_SYMBOL_sempred(localctx, predIndex);
		case 398:
			return this.MAX_STATEMENT_TIME_SYMBOL_sempred(localctx, predIndex);
		case 438:
			return this.NEVER_SYMBOL_sempred(localctx, predIndex);
		case 443:
			return this.NONBLOCKING_SYMBOL_sempred(localctx, predIndex);
		case 450:
			return this.NUMBER_SYMBOL_sempred(localctx, predIndex);
		case 455:
			return this.OLD_PASSWORD_SYMBOL_sempred(localctx, predIndex);
		case 459:
			return this.ONLY_SYMBOL_sempred(localctx, predIndex);
		case 462:
			return this.OPTIMIZER_COSTS_SYMBOL_sempred(localctx, predIndex);
		case 482:
			return this.PLUGIN_DIR_SYMBOL_sempred(localctx, predIndex);
		case 488:
			return this.PRECEDES_SYMBOL_sempred(localctx, predIndex);
		case 513:
			return this.REDOFILE_SYMBOL_sempred(localctx, predIndex);
		case 533:
			return this.REPLICATE_DO_DB_SYMBOL_sempred(localctx, predIndex);
		case 534:
			return this.REPLICATE_IGNORE_DB_SYMBOL_sempred(localctx, predIndex);
		case 535:
			return this.REPLICATE_DO_TABLE_SYMBOL_sempred(localctx, predIndex);
		case 536:
			return this.REPLICATE_IGNORE_TABLE_SYMBOL_sempred(localctx, predIndex);
		case 537:
			return this.REPLICATE_WILD_DO_TABLE_SYMBOL_sempred(localctx, predIndex);
		case 538:
			return this.REPLICATE_WILD_IGNORE_TABLE_SYMBOL_sempred(localctx, predIndex);
		case 539:
			return this.REPLICATE_REWRITE_DB_SYMBOL_sempred(localctx, predIndex);
		case 555:
			return this.ROTATE_SYMBOL_sempred(localctx, predIndex);
		case 602:
			return this.SQL_AFTER_MTS_GAPS_SYMBOL_sempred(localctx, predIndex);
		case 606:
			return this.SQL_CACHE_SYMBOL_sempred(localctx, predIndex);
		case 613:
			return this.STACKED_SYMBOL_sempred(localctx, predIndex);
		case 627:
			return this.STORED_SYMBOL_sempred(localctx, predIndex);
		case 646:
			return this.TABLE_REF_PRIORITY_SYMBOL_sempred(localctx, predIndex);
		case 698:
			return this.VALIDATION_SYMBOL_sempred(localctx, predIndex);
		case 710:
			return this.VIRTUAL_SYMBOL_sempred(localctx, predIndex);
		case 725:
			return this.XID_SYMBOL_sempred(localctx, predIndex);
		case 731:
			return this.PERSIST_SYMBOL_sempred(localctx, predIndex);
		case 732:
			return this.ROLE_SYMBOL_sempred(localctx, predIndex);
		case 733:
			return this.ADMIN_SYMBOL_sempred(localctx, predIndex);
		case 734:
			return this.INVISIBLE_SYMBOL_sempred(localctx, predIndex);
		case 735:
			return this.VISIBLE_SYMBOL_sempred(localctx, predIndex);
		case 736:
			return this.EXCEPT_SYMBOL_sempred(localctx, predIndex);
		case 737:
			return this.COMPONENT_SYMBOL_sempred(localctx, predIndex);
		case 738:
			return this.RECURSIVE_SYMBOL_sempred(localctx, predIndex);
		case 739:
			return this.JSON_OBJECTAGG_SYMBOL_sempred(localctx, predIndex);
		case 740:
			return this.JSON_ARRAYAGG_SYMBOL_sempred(localctx, predIndex);
		case 741:
			return this.OF_SYMBOL_sempred(localctx, predIndex);
		case 742:
			return this.SKIP_SYMBOL_sempred(localctx, predIndex);
		case 743:
			return this.LOCKED_SYMBOL_sempred(localctx, predIndex);
		case 744:
			return this.NOWAIT_SYMBOL_sempred(localctx, predIndex);
		case 745:
			return this.GROUPING_SYMBOL_sempred(localctx, predIndex);
		case 746:
			return this.PERSIST_ONLY_SYMBOL_sempred(localctx, predIndex);
		case 747:
			return this.HISTOGRAM_SYMBOL_sempred(localctx, predIndex);
		case 748:
			return this.BUCKETS_SYMBOL_sempred(localctx, predIndex);
		case 749:
			return this.REMOTE_SYMBOL_sempred(localctx, predIndex);
		case 750:
			return this.CLONE_SYMBOL_sempred(localctx, predIndex);
		case 751:
			return this.CUME_DIST_SYMBOL_sempred(localctx, predIndex);
		case 752:
			return this.DENSE_RANK_SYMBOL_sempred(localctx, predIndex);
		case 753:
			return this.EXCLUDE_SYMBOL_sempred(localctx, predIndex);
		case 754:
			return this.FIRST_VALUE_SYMBOL_sempred(localctx, predIndex);
		case 755:
			return this.FOLLOWING_SYMBOL_sempred(localctx, predIndex);
		case 756:
			return this.GROUPS_SYMBOL_sempred(localctx, predIndex);
		case 757:
			return this.LAG_SYMBOL_sempred(localctx, predIndex);
		case 758:
			return this.LAST_VALUE_SYMBOL_sempred(localctx, predIndex);
		case 759:
			return this.LEAD_SYMBOL_sempred(localctx, predIndex);
		case 760:
			return this.NTH_VALUE_SYMBOL_sempred(localctx, predIndex);
		case 761:
			return this.NTILE_SYMBOL_sempred(localctx, predIndex);
		case 762:
			return this.NULLS_SYMBOL_sempred(localctx, predIndex);
		case 763:
			return this.OTHERS_SYMBOL_sempred(localctx, predIndex);
		case 764:
			return this.OVER_SYMBOL_sempred(localctx, predIndex);
		case 765:
			return this.PERCENT_RANK_SYMBOL_sempred(localctx, predIndex);
		case 766:
			return this.PRECEDING_SYMBOL_sempred(localctx, predIndex);
		case 767:
			return this.RANK_SYMBOL_sempred(localctx, predIndex);
		case 768:
			return this.RESPECT_SYMBOL_sempred(localctx, predIndex);
		case 769:
			return this.ROW_NUMBER_SYMBOL_sempred(localctx, predIndex);
		case 770:
			return this.TIES_SYMBOL_sempred(localctx, predIndex);
		case 771:
			return this.UNBOUNDED_SYMBOL_sempred(localctx, predIndex);
		case 772:
			return this.WINDOW_SYMBOL_sempred(localctx, predIndex);
		case 773:
			return this.EMPTY_SYMBOL_sempred(localctx, predIndex);
		case 774:
			return this.JSON_TABLE_SYMBOL_sempred(localctx, predIndex);
		case 775:
			return this.NESTED_SYMBOL_sempred(localctx, predIndex);
		case 776:
			return this.ORDINALITY_SYMBOL_sempred(localctx, predIndex);
		case 777:
			return this.PATH_SYMBOL_sempred(localctx, predIndex);
		case 778:
			return this.HISTORY_SYMBOL_sempred(localctx, predIndex);
		case 779:
			return this.REUSE_SYMBOL_sempred(localctx, predIndex);
		case 780:
			return this.SRID_SYMBOL_sempred(localctx, predIndex);
		case 781:
			return this.THREAD_PRIORITY_SYMBOL_sempred(localctx, predIndex);
		case 782:
			return this.RESOURCE_SYMBOL_sempred(localctx, predIndex);
		case 783:
			return this.SYSTEM_SYMBOL_sempred(localctx, predIndex);
		case 784:
			return this.VCPU_SYMBOL_sempred(localctx, predIndex);
		case 785:
			return this.MASTER_PUBLIC_KEY_PATH_SYMBOL_sempred(localctx, predIndex);
		case 786:
			return this.GET_MASTER_PUBLIC_KEY_SYMBOL_sempred(localctx, predIndex);
		case 787:
			return this.RESTART_SYMBOL_sempred(localctx, predIndex);
		case 788:
			return this.DEFINITION_SYMBOL_sempred(localctx, predIndex);
		case 789:
			return this.DESCRIPTION_SYMBOL_sempred(localctx, predIndex);
		case 790:
			return this.ORGANIZATION_SYMBOL_sempred(localctx, predIndex);
		case 791:
			return this.REFERENCE_SYMBOL_sempred(localctx, predIndex);
		case 792:
			return this.OPTIONAL_SYMBOL_sempred(localctx, predIndex);
		case 793:
			return this.SECONDARY_SYMBOL_sempred(localctx, predIndex);
		case 794:
			return this.SECONDARY_ENGINE_SYMBOL_sempred(localctx, predIndex);
		case 795:
			return this.SECONDARY_LOAD_SYMBOL_sempred(localctx, predIndex);
		case 796:
			return this.SECONDARY_UNLOAD_SYMBOL_sempred(localctx, predIndex);
		case 797:
			return this.ACTIVE_SYMBOL_sempred(localctx, predIndex);
		case 798:
			return this.INACTIVE_SYMBOL_sempred(localctx, predIndex);
		case 799:
			return this.LATERAL_SYMBOL_sempred(localctx, predIndex);
		case 800:
			return this.RETAIN_SYMBOL_sempred(localctx, predIndex);
		case 801:
			return this.OLD_SYMBOL_sempred(localctx, predIndex);
		case 802:
			return this.NETWORK_NAMESPACE_SYMBOL_sempred(localctx, predIndex);
		case 803:
			return this.ENFORCED_SYMBOL_sempred(localctx, predIndex);
		case 804:
			return this.ARRAY_SYMBOL_sempred(localctx, predIndex);
		case 805:
			return this.OJ_SYMBOL_sempred(localctx, predIndex);
		case 806:
			return this.MEMBER_SYMBOL_sempred(localctx, predIndex);
		case 807:
			return this.RANDOM_SYMBOL_sempred(localctx, predIndex);
		case 808:
			return this.MASTER_COMPRESSION_ALGORITHM_SYMBOL_sempred(localctx, predIndex);
		case 809:
			return this.MASTER_ZSTD_COMPRESSION_LEVEL_SYMBOL_sempred(localctx, predIndex);
		case 810:
			return this.PRIVILEGE_CHECKS_USER_SYMBOL_sempred(localctx, predIndex);
		case 811:
			return this.MASTER_TLS_CIPHERSUITES_SYMBOL_sempred(localctx, predIndex);
		case 833:
			return this.BACK_TICK_QUOTED_ID_sempred(localctx, predIndex);
		case 834:
			return this.DOUBLE_QUOTED_TEXT_sempred(localctx, predIndex);
		case 835:
			return this.SINGLE_QUOTED_TEXT_sempred(localctx, predIndex);
		case 836:
			return this.VERSION_COMMENT_START_sempred(localctx, predIndex);
		case 838:
			return this.VERSION_COMMENT_END_sempred(localctx, predIndex);
		}
		return true;
	}
	private JSON_SEPARATOR_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.serverVersion >= 50708;
		}
		return true;
	}
	private JSON_UNQUOTED_SEPARATOR_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.serverVersion >= 50713;
		}
		return true;
	}
	private ACCOUNT_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.serverVersion >= 50707;
		}
		return true;
	}
	private ALWAYS_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.serverVersion >= 50707;
		}
		return true;
	}
	private ANALYSE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.serverVersion < 80000;
		}
		return true;
	}
	private AUTHORS_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.serverVersion < 50700;
		}
		return true;
	}
	private CHANNEL_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.serverVersion >= 50706;
		}
		return true;
	}
	private COMPRESSION_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.serverVersion >= 50707;
		}
		return true;
	}
	private CONTRIBUTORS_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.serverVersion < 50700;
		}
		return true;
	}
	private CURRENT_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.serverVersion >= 50604;
		}
		return true;
	}
	private DEFAULT_AUTH_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.serverVersion >= 50604;
		}
		return true;
	}
	private DES_KEY_FILE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.serverVersion < 80000;
		}
		return true;
	}
	private ENCRYPTION_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.serverVersion >= 50711;
		}
		return true;
	}
	private EXPIRE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.serverVersion >= 50606;
		}
		return true;
	}
	private EXPORT_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.serverVersion >= 50606;
		}
		return true;
	}
	private FILE_BLOCK_SIZE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.serverVersion >= 50707;
		}
		return true;
	}
	private FILTER_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private FOLLOWS_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private GET_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.serverVersion >= 50604;
		}
		return true;
	}
	private GENERATED_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.serverVersion >= 50707;
		}
		return true;
	}
	private GROUP_REPLICATION_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.serverVersion >= 50707;
		}
		return true;
	}
	private INSTANCE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.serverVersion >= 50713;
		}
		return true;
	}
	private JSON_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.serverVersion >= 50708;
		}
		return true;
	}
	private MASTER_AUTO_POSITION_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return this.serverVersion >= 50605;
		}
		return true;
	}
	private MASTER_BIND_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.serverVersion >= 50602;
		}
		return true;
	}
	private MASTER_RETRY_COUNT_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.serverVersion >= 50601;
		}
		return true;
	}
	private MASTER_SSL_CRL_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return this.serverVersion >= 50603;
		}
		return true;
	}
	private MASTER_SSL_CRLPATH_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return this.serverVersion >= 50603;
		}
		return true;
	}
	private MASTER_TLS_VERSION_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return this.serverVersion >= 50713;
		}
		return true;
	}
	private MAX_STATEMENT_TIME_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return 50704 < this.serverVersion && this.serverVersion < 50708;
		}
		return true;
	}
	private NEVER_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.serverVersion >= 50704;
		}
		return true;
	}
	private NONBLOCKING_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return 50700 < this.serverVersion && this.serverVersion < 50706;
		}
		return true;
	}
	private NUMBER_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return this.serverVersion >= 50606;
		}
		return true;
	}
	private OLD_PASSWORD_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 33:
			return this.serverVersion < 50706;
		}
		return true;
	}
	private ONLY_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 34:
			return this.serverVersion >= 50605;
		}
		return true;
	}
	private OPTIMIZER_COSTS_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.serverVersion >= 50706;
		}
		return true;
	}
	private PLUGIN_DIR_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return this.serverVersion >= 50604;
		}
		return true;
	}
	private PRECEDES_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 37:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private REDOFILE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 38:
			return this.serverVersion < 80000;
		}
		return true;
	}
	private REPLICATE_DO_DB_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 39:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private REPLICATE_IGNORE_DB_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 40:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private REPLICATE_DO_TABLE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 41:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private REPLICATE_IGNORE_TABLE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 42:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private REPLICATE_WILD_DO_TABLE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 43:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private REPLICATE_WILD_IGNORE_TABLE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 44:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private REPLICATE_REWRITE_DB_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 45:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private ROTATE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.serverVersion >= 50713;
		}
		return true;
	}
	private SQL_AFTER_MTS_GAPS_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 47:
			return this.serverVersion >= 50606;
		}
		return true;
	}
	private SQL_CACHE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 48:
			return this.serverVersion < 80000;
		}
		return true;
	}
	private STACKED_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 49:
			return this.serverVersion >= 50700;
		}
		return true;
	}
	private STORED_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 50:
			return this.serverVersion >= 50707;
		}
		return true;
	}
	private TABLE_REF_PRIORITY_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 51:
			return this.serverVersion < 80000;
		}
		return true;
	}
	private VALIDATION_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 52:
			return this.serverVersion >= 50706;
		}
		return true;
	}
	private VIRTUAL_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 53:
			return this.serverVersion >= 50707;
		}
		return true;
	}
	private XID_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 54:
			return this.serverVersion >= 50704;
		}
		return true;
	}
	private PERSIST_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 55:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private ROLE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 56:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private ADMIN_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 57:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private INVISIBLE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 58:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private VISIBLE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 59:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private EXCEPT_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 60:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private COMPONENT_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 61:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private RECURSIVE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 62:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private JSON_OBJECTAGG_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 63:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private JSON_ARRAYAGG_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 64:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private OF_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 65:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private SKIP_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 66:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private LOCKED_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 67:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private NOWAIT_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 68:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private GROUPING_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 69:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private PERSIST_ONLY_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 70:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private HISTOGRAM_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 71:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private BUCKETS_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 72:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private REMOTE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 73:
			return this.serverVersion >= 80003 && this.serverVersion < 80014;
		}
		return true;
	}
	private CLONE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 74:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private CUME_DIST_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 75:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private DENSE_RANK_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 76:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private EXCLUDE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 77:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private FIRST_VALUE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 78:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private FOLLOWING_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 79:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private GROUPS_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 80:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private LAG_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 81:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private LAST_VALUE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 82:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private LEAD_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 83:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private NTH_VALUE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 84:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private NTILE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 85:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private NULLS_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 86:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private OTHERS_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 87:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private OVER_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 88:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private PERCENT_RANK_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 89:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private PRECEDING_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 90:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private RANK_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 91:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private RESPECT_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 92:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private ROW_NUMBER_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 93:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private TIES_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 94:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private UNBOUNDED_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 95:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private WINDOW_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 96:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private EMPTY_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 97:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private JSON_TABLE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 98:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private NESTED_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 99:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private ORDINALITY_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 100:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private PATH_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 101:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private HISTORY_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 102:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private REUSE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 103:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private SRID_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 104:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private THREAD_PRIORITY_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 105:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private RESOURCE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 106:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private SYSTEM_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 107:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private VCPU_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 108:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private MASTER_PUBLIC_KEY_PATH_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 109:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private GET_MASTER_PUBLIC_KEY_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 110:
			return this.serverVersion >= 80000;
		}
		return true;
	}
	private RESTART_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 111:
			return this.serverVersion >= 80011;
		}
		return true;
	}
	private DEFINITION_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 112:
			return this.serverVersion >= 80011;
		}
		return true;
	}
	private DESCRIPTION_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 113:
			return this.serverVersion >= 80011;
		}
		return true;
	}
	private ORGANIZATION_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 114:
			return this.serverVersion >= 80011;
		}
		return true;
	}
	private REFERENCE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 115:
			return this.serverVersion >= 80011;
		}
		return true;
	}
	private OPTIONAL_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 116:
			return this.serverVersion >= 80013;
		}
		return true;
	}
	private SECONDARY_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 117:
			return this.serverVersion >= 80013;
		}
		return true;
	}
	private SECONDARY_ENGINE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 118:
			return this.serverVersion >= 80013;
		}
		return true;
	}
	private SECONDARY_LOAD_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 119:
			return this.serverVersion >= 80013;
		}
		return true;
	}
	private SECONDARY_UNLOAD_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 120:
			return this.serverVersion >= 80013;
		}
		return true;
	}
	private ACTIVE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 121:
			return this.serverVersion >= 80014;
		}
		return true;
	}
	private INACTIVE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 122:
			return this.serverVersion >= 80014;
		}
		return true;
	}
	private LATERAL_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 123:
			return this.serverVersion >= 80014;
		}
		return true;
	}
	private RETAIN_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 124:
			return this.serverVersion >= 80014;
		}
		return true;
	}
	private OLD_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 125:
			return this.serverVersion >= 80014;
		}
		return true;
	}
	private NETWORK_NAMESPACE_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 126:
			return this.serverVersion >= 80017;
		}
		return true;
	}
	private ENFORCED_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 127:
			return this.serverVersion >= 80017;
		}
		return true;
	}
	private ARRAY_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 128:
			return this.serverVersion >= 80017;
		}
		return true;
	}
	private OJ_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 129:
			return this.serverVersion >= 80017;
		}
		return true;
	}
	private MEMBER_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 130:
			return this.serverVersion >= 80017;
		}
		return true;
	}
	private RANDOM_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 131:
			return this.serverVersion >= 80018;
		}
		return true;
	}
	private MASTER_COMPRESSION_ALGORITHM_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 132:
			return this.serverVersion >= 80018;
		}
		return true;
	}
	private MASTER_ZSTD_COMPRESSION_LEVEL_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 133:
			return this.serverVersion >= 80018;
		}
		return true;
	}
	private PRIVILEGE_CHECKS_USER_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 134:
			return this.serverVersion >= 80018;
		}
		return true;
	}
	private MASTER_TLS_CIPHERSUITES_SYMBOL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 135:
			return this.serverVersion >= 80018;
		}
		return true;
	}
	private BACK_TICK_QUOTED_ID_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 136:
			return !this.isSqlModeActive(SqlMode.NoBackslashEscapes);
		}
		return true;
	}
	private DOUBLE_QUOTED_TEXT_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 137:
			return !this.isSqlModeActive(SqlMode.NoBackslashEscapes);
		}
		return true;
	}
	private SINGLE_QUOTED_TEXT_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 138:
			return !this.isSqlModeActive(SqlMode.NoBackslashEscapes);
		}
		return true;
	}
	private VERSION_COMMENT_START_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 139:
			return this.checkVersion(this.text);
		}
		return true;
	}
	private VERSION_COMMENT_END_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 140:
			return this.inVersionComment;
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,0,783,9161,6,-1,2,
	0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,
	9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,
	23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,
	2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
	38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
	7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
	52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,
	2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,
	67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,
	7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,
	81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,
	2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,
	96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,
	2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
	2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
	2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,
	2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,
	2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,
	2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,
	2,139,7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,
	2,145,7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,
	2,151,7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,
	2,157,7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,
	2,163,7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,
	2,169,7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
	2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
	2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,
	2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,
	2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,
	2,199,7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,
	2,205,7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,
	2,211,7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,
	2,217,7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,
	2,223,7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,
	2,229,7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,
	2,235,7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
	2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,7,246,
	2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,2,252,7,252,
	2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,7,257,2,258,7,258,
	2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,2,263,7,263,2,264,7,264,
	2,265,7,265,2,266,7,266,2,267,7,267,2,268,7,268,2,269,7,269,2,270,7,270,
	2,271,7,271,2,272,7,272,2,273,7,273,2,274,7,274,2,275,7,275,2,276,7,276,
	2,277,7,277,2,278,7,278,2,279,7,279,2,280,7,280,2,281,7,281,2,282,7,282,
	2,283,7,283,2,284,7,284,2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,
	2,289,7,289,2,290,7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,
	2,295,7,295,2,296,7,296,2,297,7,297,2,298,7,298,2,299,7,299,2,300,7,300,
	2,301,7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,305,7,305,2,306,7,306,
	2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,311,7,311,2,312,7,312,
	2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,317,7,317,2,318,7,318,
	2,319,7,319,2,320,7,320,2,321,7,321,2,322,7,322,2,323,7,323,2,324,7,324,
	2,325,7,325,2,326,7,326,2,327,7,327,2,328,7,328,2,329,7,329,2,330,7,330,
	2,331,7,331,2,332,7,332,2,333,7,333,2,334,7,334,2,335,7,335,2,336,7,336,
	2,337,7,337,2,338,7,338,2,339,7,339,2,340,7,340,2,341,7,341,2,342,7,342,
	2,343,7,343,2,344,7,344,2,345,7,345,2,346,7,346,2,347,7,347,2,348,7,348,
	2,349,7,349,2,350,7,350,2,351,7,351,2,352,7,352,2,353,7,353,2,354,7,354,
	2,355,7,355,2,356,7,356,2,357,7,357,2,358,7,358,2,359,7,359,2,360,7,360,
	2,361,7,361,2,362,7,362,2,363,7,363,2,364,7,364,2,365,7,365,2,366,7,366,
	2,367,7,367,2,368,7,368,2,369,7,369,2,370,7,370,2,371,7,371,2,372,7,372,
	2,373,7,373,2,374,7,374,2,375,7,375,2,376,7,376,2,377,7,377,2,378,7,378,
	2,379,7,379,2,380,7,380,2,381,7,381,2,382,7,382,2,383,7,383,2,384,7,384,
	2,385,7,385,2,386,7,386,2,387,7,387,2,388,7,388,2,389,7,389,2,390,7,390,
	2,391,7,391,2,392,7,392,2,393,7,393,2,394,7,394,2,395,7,395,2,396,7,396,
	2,397,7,397,2,398,7,398,2,399,7,399,2,400,7,400,2,401,7,401,2,402,7,402,
	2,403,7,403,2,404,7,404,2,405,7,405,2,406,7,406,2,407,7,407,2,408,7,408,
	2,409,7,409,2,410,7,410,2,411,7,411,2,412,7,412,2,413,7,413,2,414,7,414,
	2,415,7,415,2,416,7,416,2,417,7,417,2,418,7,418,2,419,7,419,2,420,7,420,
	2,421,7,421,2,422,7,422,2,423,7,423,2,424,7,424,2,425,7,425,2,426,7,426,
	2,427,7,427,2,428,7,428,2,429,7,429,2,430,7,430,2,431,7,431,2,432,7,432,
	2,433,7,433,2,434,7,434,2,435,7,435,2,436,7,436,2,437,7,437,2,438,7,438,
	2,439,7,439,2,440,7,440,2,441,7,441,2,442,7,442,2,443,7,443,2,444,7,444,
	2,445,7,445,2,446,7,446,2,447,7,447,2,448,7,448,2,449,7,449,2,450,7,450,
	2,451,7,451,2,452,7,452,2,453,7,453,2,454,7,454,2,455,7,455,2,456,7,456,
	2,457,7,457,2,458,7,458,2,459,7,459,2,460,7,460,2,461,7,461,2,462,7,462,
	2,463,7,463,2,464,7,464,2,465,7,465,2,466,7,466,2,467,7,467,2,468,7,468,
	2,469,7,469,2,470,7,470,2,471,7,471,2,472,7,472,2,473,7,473,2,474,7,474,
	2,475,7,475,2,476,7,476,2,477,7,477,2,478,7,478,2,479,7,479,2,480,7,480,
	2,481,7,481,2,482,7,482,2,483,7,483,2,484,7,484,2,485,7,485,2,486,7,486,
	2,487,7,487,2,488,7,488,2,489,7,489,2,490,7,490,2,491,7,491,2,492,7,492,
	2,493,7,493,2,494,7,494,2,495,7,495,2,496,7,496,2,497,7,497,2,498,7,498,
	2,499,7,499,2,500,7,500,2,501,7,501,2,502,7,502,2,503,7,503,2,504,7,504,
	2,505,7,505,2,506,7,506,2,507,7,507,2,508,7,508,2,509,7,509,2,510,7,510,
	2,511,7,511,2,512,7,512,2,513,7,513,2,514,7,514,2,515,7,515,2,516,7,516,
	2,517,7,517,2,518,7,518,2,519,7,519,2,520,7,520,2,521,7,521,2,522,7,522,
	2,523,7,523,2,524,7,524,2,525,7,525,2,526,7,526,2,527,7,527,2,528,7,528,
	2,529,7,529,2,530,7,530,2,531,7,531,2,532,7,532,2,533,7,533,2,534,7,534,
	2,535,7,535,2,536,7,536,2,537,7,537,2,538,7,538,2,539,7,539,2,540,7,540,
	2,541,7,541,2,542,7,542,2,543,7,543,2,544,7,544,2,545,7,545,2,546,7,546,
	2,547,7,547,2,548,7,548,2,549,7,549,2,550,7,550,2,551,7,551,2,552,7,552,
	2,553,7,553,2,554,7,554,2,555,7,555,2,556,7,556,2,557,7,557,2,558,7,558,
	2,559,7,559,2,560,7,560,2,561,7,561,2,562,7,562,2,563,7,563,2,564,7,564,
	2,565,7,565,2,566,7,566,2,567,7,567,2,568,7,568,2,569,7,569,2,570,7,570,
	2,571,7,571,2,572,7,572,2,573,7,573,2,574,7,574,2,575,7,575,2,576,7,576,
	2,577,7,577,2,578,7,578,2,579,7,579,2,580,7,580,2,581,7,581,2,582,7,582,
	2,583,7,583,2,584,7,584,2,585,7,585,2,586,7,586,2,587,7,587,2,588,7,588,
	2,589,7,589,2,590,7,590,2,591,7,591,2,592,7,592,2,593,7,593,2,594,7,594,
	2,595,7,595,2,596,7,596,2,597,7,597,2,598,7,598,2,599,7,599,2,600,7,600,
	2,601,7,601,2,602,7,602,2,603,7,603,2,604,7,604,2,605,7,605,2,606,7,606,
	2,607,7,607,2,608,7,608,2,609,7,609,2,610,7,610,2,611,7,611,2,612,7,612,
	2,613,7,613,2,614,7,614,2,615,7,615,2,616,7,616,2,617,7,617,2,618,7,618,
	2,619,7,619,2,620,7,620,2,621,7,621,2,622,7,622,2,623,7,623,2,624,7,624,
	2,625,7,625,2,626,7,626,2,627,7,627,2,628,7,628,2,629,7,629,2,630,7,630,
	2,631,7,631,2,632,7,632,2,633,7,633,2,634,7,634,2,635,7,635,2,636,7,636,
	2,637,7,637,2,638,7,638,2,639,7,639,2,640,7,640,2,641,7,641,2,642,7,642,
	2,643,7,643,2,644,7,644,2,645,7,645,2,646,7,646,2,647,7,647,2,648,7,648,
	2,649,7,649,2,650,7,650,2,651,7,651,2,652,7,652,2,653,7,653,2,654,7,654,
	2,655,7,655,2,656,7,656,2,657,7,657,2,658,7,658,2,659,7,659,2,660,7,660,
	2,661,7,661,2,662,7,662,2,663,7,663,2,664,7,664,2,665,7,665,2,666,7,666,
	2,667,7,667,2,668,7,668,2,669,7,669,2,670,7,670,2,671,7,671,2,672,7,672,
	2,673,7,673,2,674,7,674,2,675,7,675,2,676,7,676,2,677,7,677,2,678,7,678,
	2,679,7,679,2,680,7,680,2,681,7,681,2,682,7,682,2,683,7,683,2,684,7,684,
	2,685,7,685,2,686,7,686,2,687,7,687,2,688,7,688,2,689,7,689,2,690,7,690,
	2,691,7,691,2,692,7,692,2,693,7,693,2,694,7,694,2,695,7,695,2,696,7,696,
	2,697,7,697,2,698,7,698,2,699,7,699,2,700,7,700,2,701,7,701,2,702,7,702,
	2,703,7,703,2,704,7,704,2,705,7,705,2,706,7,706,2,707,7,707,2,708,7,708,
	2,709,7,709,2,710,7,710,2,711,7,711,2,712,7,712,2,713,7,713,2,714,7,714,
	2,715,7,715,2,716,7,716,2,717,7,717,2,718,7,718,2,719,7,719,2,720,7,720,
	2,721,7,721,2,722,7,722,2,723,7,723,2,724,7,724,2,725,7,725,2,726,7,726,
	2,727,7,727,2,728,7,728,2,729,7,729,2,730,7,730,2,731,7,731,2,732,7,732,
	2,733,7,733,2,734,7,734,2,735,7,735,2,736,7,736,2,737,7,737,2,738,7,738,
	2,739,7,739,2,740,7,740,2,741,7,741,2,742,7,742,2,743,7,743,2,744,7,744,
	2,745,7,745,2,746,7,746,2,747,7,747,2,748,7,748,2,749,7,749,2,750,7,750,
	2,751,7,751,2,752,7,752,2,753,7,753,2,754,7,754,2,755,7,755,2,756,7,756,
	2,757,7,757,2,758,7,758,2,759,7,759,2,760,7,760,2,761,7,761,2,762,7,762,
	2,763,7,763,2,764,7,764,2,765,7,765,2,766,7,766,2,767,7,767,2,768,7,768,
	2,769,7,769,2,770,7,770,2,771,7,771,2,772,7,772,2,773,7,773,2,774,7,774,
	2,775,7,775,2,776,7,776,2,777,7,777,2,778,7,778,2,779,7,779,2,780,7,780,
	2,781,7,781,2,782,7,782,2,783,7,783,2,784,7,784,2,785,7,785,2,786,7,786,
	2,787,7,787,2,788,7,788,2,789,7,789,2,790,7,790,2,791,7,791,2,792,7,792,
	2,793,7,793,2,794,7,794,2,795,7,795,2,796,7,796,2,797,7,797,2,798,7,798,
	2,799,7,799,2,800,7,800,2,801,7,801,2,802,7,802,2,803,7,803,2,804,7,804,
	2,805,7,805,2,806,7,806,2,807,7,807,2,808,7,808,2,809,7,809,2,810,7,810,
	2,811,7,811,2,812,7,812,2,813,7,813,2,814,7,814,2,815,7,815,2,816,7,816,
	2,817,7,817,2,818,7,818,2,819,7,819,2,820,7,820,2,821,7,821,2,822,7,822,
	2,823,7,823,2,824,7,824,2,825,7,825,2,826,7,826,2,827,7,827,2,828,7,828,
	2,829,7,829,2,830,7,830,2,831,7,831,2,832,7,832,2,833,7,833,2,834,7,834,
	2,835,7,835,2,836,7,836,2,837,7,837,2,838,7,838,2,839,7,839,2,840,7,840,
	2,841,7,841,2,842,7,842,2,843,7,843,2,844,7,844,2,845,7,845,2,846,7,846,
	2,847,7,847,2,848,7,848,2,849,7,849,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,
	1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,
	1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,
	1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,
	21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,
	1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,
	33,1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,37,1,38,
	1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,
	45,1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,
	1,53,1,53,1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,
	60,1,60,1,61,1,61,1,62,1,62,1,63,1,63,1,64,1,64,1,65,1,65,1,66,4,66,1858,
	8,66,11,66,12,66,1859,1,67,1,67,1,68,1,68,1,68,1,68,4,68,1868,8,68,11,68,
	12,68,1869,1,68,1,68,1,68,1,68,4,68,1876,8,68,11,68,12,68,1877,1,68,1,68,
	3,68,1882,8,68,1,69,1,69,1,69,1,69,4,69,1888,8,69,11,69,12,69,1889,1,69,
	1,69,1,69,1,69,4,69,1896,8,69,11,69,12,69,1897,1,69,3,69,1901,8,69,1,70,
	1,70,1,71,3,71,1906,8,71,1,71,1,71,1,71,1,72,3,72,1912,8,72,1,72,3,72,1915,
	8,72,1,72,1,72,1,72,1,72,3,72,1921,8,72,1,72,1,72,1,73,1,73,1,73,5,73,1928,
	8,73,10,73,12,73,1931,9,73,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,
	1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,
	75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,78,1,78,1,78,
	1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,
	80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,
	1,81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,
	83,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,
	1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,
	87,1,87,1,87,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,91,
	1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,
	93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,
	1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,
	96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,
	1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,
	98,1,98,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,
	1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,102,1,102,
	1,102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,103,
	1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,105,
	1,105,1,105,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,
	1,107,1,107,1,107,1,107,1,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
	1,108,1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,110,1,110,
	1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,112,
	1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,113,1,114,1,114,
	1,114,1,114,1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,116,
	1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,1,118,1,118,
	1,118,1,119,1,119,1,119,1,119,1,119,1,120,1,120,1,120,1,120,1,120,1,120,
	1,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
	1,122,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,124,1,124,
	1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,125,1,125,1,126,1,126,1,126,
	1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,127,1,127,
	1,127,1,127,1,127,1,127,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,129,
	1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,
	1,130,1,130,1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
	1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,
	1,133,1,133,1,133,1,133,1,133,1,134,1,134,1,134,1,134,1,134,1,134,1,134,
	1,134,1,134,1,135,1,135,1,135,1,135,1,135,1,135,1,136,1,136,1,136,1,136,
	1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
	1,137,1,137,1,137,1,137,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,139,
	1,139,1,139,1,139,1,139,1,139,1,140,1,140,1,140,1,140,1,140,1,140,1,140,
	1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,142,1,142,1,142,1,142,1,142,
	1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,
	1,143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,145,1,145,1,145,
	1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,
	1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,
	1,147,1,147,1,147,1,147,1,147,1,147,1,148,1,148,1,148,1,148,1,148,1,148,
	1,148,1,148,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,
	1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,151,1,151,1,151,1,151,1,151,
	1,151,1,151,1,151,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
	1,152,1,152,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
	1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,
	1,154,1,154,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,
	1,155,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,157,
	1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,158,1,158,
	1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,159,1,159,1,159,
	1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,160,1,160,1,160,1,160,
	1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,
	1,160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
	1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,162,1,162,1,162,1,162,1,162,
	1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,
	1,162,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,164,1,164,
	1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,
	1,165,1,165,1,165,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,
	1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,1,167,
	1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,169,1,169,1,169,1,169,
	1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,
	1,171,1,172,1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,1,173,1,173,
	1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,
	1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,
	1,175,1,175,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,
	1,176,1,176,1,176,1,176,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,
	1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,
	1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
	1,178,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,180,1,180,1,180,1,180,
	1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,181,1,181,1,181,1,181,
	1,181,1,181,1,181,1,181,1,181,1,182,1,182,1,182,1,182,1,182,1,182,1,182,
	1,182,1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,
	1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,185,1,185,1,185,
	1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,187,
	1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,188,1,188,1,188,
	1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,189,1,189,1,189,1,189,1,189,
	1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,
	1,190,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,192,1,192,
	1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,
	1,192,1,192,1,193,1,193,1,193,1,193,1,193,1,193,1,193,1,193,1,193,1,193,
	1,193,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,
	1,195,1,195,1,195,1,195,1,196,1,196,1,196,1,196,1,196,1,196,1,196,1,196,
	1,196,1,196,1,196,1,197,1,197,1,197,1,197,1,197,1,197,1,198,1,198,1,198,
	1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,199,1,199,1,199,
	1,199,1,199,1,199,1,199,1,199,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
	1,200,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,202,1,202,1,202,
	1,202,1,202,1,202,1,202,1,202,1,202,1,202,1,202,1,202,1,202,1,202,1,203,
	1,203,1,203,1,203,1,203,1,203,1,203,1,203,1,204,1,204,1,204,1,204,1,204,
	1,204,1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,
	1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,206,1,206,1,206,1,206,1,206,
	1,206,1,206,1,207,1,207,1,207,1,207,1,207,1,208,1,208,1,208,1,208,1,208,
	1,208,1,208,1,208,1,208,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,
	1,209,1,209,1,209,1,209,1,209,1,209,1,210,1,210,1,210,1,210,1,210,1,210,
	1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,211,1,211,1,211,1,211,
	1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,212,1,212,1,212,1,212,
	1,212,1,212,1,212,1,212,1,212,1,212,1,213,1,213,1,213,1,213,1,213,1,213,
	1,213,1,213,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,215,1,215,
	1,215,1,215,1,215,1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,216,
	1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,
	1,217,1,217,1,218,1,218,1,218,1,218,1,219,1,219,1,219,1,219,1,219,1,219,
	1,219,1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,221,1,222,1,222,1,222,
	1,222,1,222,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,224,
	1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,225,1,225,1,225,
	1,225,1,225,1,225,1,225,1,225,1,226,1,226,1,226,1,226,1,226,1,227,1,227,
	1,227,1,227,1,227,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,229,1,229,
	1,229,1,229,1,229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,1,230,1,230,
	1,230,1,230,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,231,
	1,231,1,231,1,232,1,232,1,232,1,232,1,233,1,233,1,233,1,233,1,233,1,234,
	1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,
	1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,236,1,236,1,236,1,236,
	1,236,1,236,1,236,1,237,1,237,1,237,1,237,1,237,1,238,1,238,1,238,1,238,
	1,238,1,238,1,239,1,239,1,239,1,239,1,239,1,239,1,239,1,240,1,240,1,240,
	1,240,1,240,1,240,1,240,1,240,1,241,1,241,1,241,1,241,1,241,1,241,1,241,
	1,242,1,242,1,242,1,242,1,242,1,242,1,242,1,243,1,243,1,243,1,243,1,243,
	1,243,1,244,1,244,1,244,1,244,1,244,1,244,1,245,1,245,1,245,1,245,1,245,
	1,245,1,245,1,245,1,245,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,
	1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,248,1,248,1,248,1,248,1,248,
	1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,250,1,250,
	1,250,1,250,1,250,1,250,1,250,1,250,1,251,1,251,1,251,1,251,1,251,1,251,
	1,251,1,251,1,252,1,252,1,252,1,252,1,252,1,252,1,252,1,252,1,253,1,253,
	1,253,1,253,1,253,1,253,1,253,1,253,1,253,1,254,1,254,1,254,1,254,1,254,
	1,254,1,254,1,254,1,254,1,254,1,254,1,254,1,255,1,255,1,255,1,255,1,255,
	1,255,1,255,1,255,1,255,1,256,1,256,1,256,1,256,1,256,1,256,1,257,1,257,
	1,257,1,257,1,257,1,258,1,258,1,258,1,258,1,258,1,258,1,258,1,259,1,259,
	1,259,1,259,1,259,1,259,1,260,1,260,1,260,1,260,1,260,1,260,1,260,1,260,
	1,260,1,261,1,261,1,261,1,261,1,261,1,262,1,262,1,262,1,262,1,262,1,262,
	1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,263,
	1,263,1,263,1,263,1,263,1,263,1,263,1,263,1,264,1,264,1,264,1,264,1,264,
	1,264,1,265,1,265,1,265,1,265,1,265,1,265,1,266,1,266,1,266,1,266,1,266,
	1,266,1,266,1,266,1,266,1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,267,
	1,267,1,268,1,268,1,268,1,268,1,268,1,268,1,269,1,269,1,269,1,269,1,269,
	1,269,1,270,1,270,1,270,1,270,1,270,1,270,1,270,1,270,1,270,1,271,1,271,
	1,271,1,271,1,271,1,271,1,272,1,272,1,272,1,272,1,272,1,272,1,272,1,272,
	1,273,1,273,1,273,1,273,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,275,
	1,275,1,275,1,275,1,275,1,275,1,276,1,276,1,276,1,276,1,276,1,277,1,277,
	1,277,1,277,1,277,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,
	1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,280,1,280,1,280,
	1,280,1,280,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,282,1,282,
	1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,283,1,283,1,283,
	1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,
	1,283,1,283,1,283,1,283,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,
	1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,285,
	1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,286,1,286,1,286,1,286,
	1,286,1,286,1,286,1,286,1,286,1,286,1,286,1,287,1,287,1,287,1,287,1,287,
	1,287,1,287,1,288,1,288,1,288,1,288,1,288,1,288,1,289,1,289,1,289,1,289,
	1,289,1,289,1,289,1,290,1,290,1,290,1,290,1,290,1,290,1,291,1,291,1,291,
	1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,291,1,292,
	1,292,1,292,1,292,1,292,1,292,1,292,1,292,1,293,1,293,1,293,1,293,1,293,
	1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,295,1,295,1,295,1,295,1,295,
	1,296,1,296,1,296,1,296,1,296,1,296,1,296,1,296,1,296,1,296,1,296,1,296,
	1,296,1,296,1,297,1,297,1,297,1,297,1,297,1,298,1,298,1,298,1,298,1,298,
	1,298,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,
	1,299,1,299,1,299,1,299,1,299,1,299,1,300,1,300,1,300,1,300,1,300,1,300,
	1,300,1,300,1,300,1,300,1,300,1,300,1,301,1,301,1,301,1,301,1,301,1,301,
	1,301,1,301,1,301,1,301,1,301,1,301,1,302,1,302,1,302,1,302,1,302,1,303,
	1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,304,1,304,
	1,304,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,306,1,306,1,306,1,306,
	1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,
	1,306,1,306,1,307,1,307,1,307,1,307,1,307,1,307,1,307,1,308,1,308,1,308,
	1,308,1,308,1,308,1,308,1,308,1,309,1,309,1,309,1,309,1,309,1,309,1,310,
	1,310,1,310,1,310,1,310,1,310,1,310,1,311,1,311,1,311,1,311,1,311,1,311,
	1,311,1,311,1,311,1,311,1,311,1,311,1,311,1,312,1,312,1,312,1,312,1,312,
	1,312,1,313,1,313,1,313,1,313,1,313,1,313,1,314,1,314,1,314,1,314,1,314,
	1,314,1,314,1,314,1,314,1,314,1,314,1,314,1,315,1,315,1,315,1,315,1,315,
	1,315,1,315,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,316,
	1,316,1,316,1,316,1,316,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,
	1,317,1,317,1,318,1,318,1,318,1,318,1,318,1,318,1,318,1,318,1,319,1,319,
	1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,320,1,320,1,320,1,320,
	1,320,1,320,1,320,1,320,1,320,1,321,1,321,1,321,1,321,1,321,1,322,1,322,
	1,322,1,322,1,323,1,323,1,323,1,323,1,323,1,323,1,323,1,323,1,324,1,324,
	1,324,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,
	1,325,1,325,1,325,1,325,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,
	1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,327,1,327,1,327,1,327,
	1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,328,1,328,1,328,1,329,
	1,329,1,329,1,329,1,330,1,330,1,330,1,331,1,331,1,331,1,331,1,331,1,331,
	1,331,1,331,1,331,1,331,1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,333,
	1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,334,1,334,1,334,1,334,1,334,
	1,335,1,335,1,335,1,335,1,335,1,335,1,336,1,336,1,336,1,336,1,336,1,337,
	1,337,1,337,1,337,1,337,1,337,1,337,1,337,1,337,1,337,1,337,1,337,1,337,
	1,337,1,337,1,338,1,338,1,338,1,338,1,339,1,339,1,339,1,339,1,339,1,340,
	1,340,1,340,1,340,1,340,1,340,1,340,1,340,1,340,1,341,1,341,1,341,1,341,
	1,341,1,342,1,342,1,342,1,342,1,342,1,342,1,342,1,342,1,343,1,343,1,343,
	1,343,1,343,1,343,1,343,1,344,1,344,1,344,1,344,1,344,1,344,1,345,1,345,
	1,345,1,345,1,345,1,346,1,346,1,346,1,346,1,346,1,347,1,347,1,347,1,347,
	1,347,1,347,1,348,1,348,1,348,1,348,1,348,1,349,1,349,1,349,1,349,1,349,
	1,349,1,350,1,350,1,350,1,350,1,350,1,350,1,350,1,351,1,351,1,351,1,351,
	1,351,1,351,1,352,1,352,1,352,1,352,1,352,1,352,1,352,1,352,1,352,1,352,
	1,352,1,353,1,353,1,353,1,353,1,353,1,354,1,354,1,354,1,354,1,354,1,355,
	1,355,1,355,1,355,1,355,1,355,1,355,1,355,1,355,1,355,1,355,1,355,1,356,
	1,356,1,356,1,356,1,356,1,356,1,356,1,356,1,356,1,356,1,356,1,356,1,356,
	1,356,1,356,1,356,1,356,1,357,1,357,1,357,1,357,1,357,1,357,1,358,1,358,
	1,358,1,358,1,358,1,358,1,358,1,358,1,359,1,359,1,359,1,359,1,359,1,359,
	1,360,1,360,1,360,1,360,1,360,1,361,1,361,1,361,1,361,1,361,1,361,1,361,
	1,361,1,362,1,362,1,362,1,362,1,362,1,363,1,363,1,363,1,363,1,363,1,363,
	1,363,1,363,1,363,1,364,1,364,1,364,1,364,1,364,1,364,1,364,1,364,1,364,
	1,365,1,365,1,365,1,365,1,365,1,365,1,365,1,365,1,365,1,366,1,366,1,366,
	1,366,1,366,1,367,1,367,1,367,1,367,1,367,1,368,1,368,1,368,1,368,1,368,
	1,368,1,368,1,368,1,368,1,368,1,368,1,368,1,368,1,369,1,369,1,369,1,369,
	1,369,1,369,1,369,1,369,1,369,1,369,1,369,1,369,1,369,1,369,1,369,1,369,
	1,369,1,369,1,369,1,369,1,369,1,369,1,370,1,370,1,370,1,370,1,370,1,370,
	1,370,1,370,1,370,1,370,1,370,1,370,1,370,1,371,1,371,1,371,1,371,1,371,
	1,371,1,371,1,371,1,371,1,371,1,371,1,371,1,371,1,371,1,371,1,371,1,371,
	1,371,1,371,1,371,1,371,1,372,1,372,1,372,1,372,1,372,1,372,1,372,1,372,
	1,372,1,372,1,372,1,372,1,372,1,373,1,373,1,373,1,373,1,373,1,373,1,373,
	1,373,1,373,1,373,1,373,1,373,1,374,1,374,1,374,1,374,1,374,1,374,1,374,
	1,374,1,374,1,374,1,374,1,374,1,374,1,374,1,374,1,374,1,375,1,375,1,375,
	1,375,1,375,1,375,1,375,1,375,1,375,1,375,1,375,1,375,1,375,1,375,1,375,
	1,376,1,376,1,376,1,376,1,376,1,376,1,376,1,376,1,376,1,376,1,376,1,376,
	1,376,1,376,1,376,1,376,1,377,1,377,1,377,1,377,1,377,1,377,1,377,1,377,
	1,377,1,377,1,377,1,377,1,378,1,378,1,378,1,378,1,378,1,378,1,378,1,378,
	1,378,1,378,1,378,1,378,1,378,1,378,1,378,1,378,1,378,1,378,1,378,1,378,
	1,379,1,379,1,379,1,379,1,379,1,379,1,379,1,379,1,379,1,379,1,379,1,379,
	1,379,1,379,1,379,1,379,1,379,1,380,1,380,1,380,1,380,1,380,1,380,1,380,
	1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,381,
	1,381,1,381,1,381,1,381,1,381,1,381,1,381,1,381,1,381,1,381,1,381,1,381,
	1,381,1,382,1,382,1,382,1,382,1,382,1,382,1,382,1,382,1,382,1,382,1,382,
	1,382,1,382,1,382,1,382,1,382,1,383,1,383,1,383,1,383,1,383,1,383,1,383,
	1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,384,
	1,384,1,384,1,384,1,384,1,384,1,384,1,384,1,384,1,384,1,384,1,384,1,384,
	1,384,1,384,1,384,1,385,1,385,1,385,1,385,1,385,1,385,1,385,1,385,1,385,
	1,385,1,385,1,385,1,385,1,385,1,385,1,385,1,385,1,385,1,385,1,385,1,386,
	1,386,1,386,1,386,1,386,1,386,1,386,1,386,1,386,1,386,1,386,1,386,1,386,
	1,386,1,386,1,387,1,387,1,387,1,387,1,387,1,387,1,387,1,387,1,387,1,387,
	1,387,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,
	1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,
	1,388,1,388,1,388,1,388,1,388,1,388,3,388,4718,8,388,1,389,1,389,1,389,
	1,389,1,389,1,389,1,389,1,390,1,390,1,390,1,390,1,390,1,390,1,390,1,390,
	1,390,1,390,1,390,1,390,1,390,1,390,1,390,1,390,1,390,1,390,1,390,1,390,
	1,391,1,391,1,391,1,391,1,391,1,391,1,391,1,391,1,391,1,391,1,391,1,391,
	1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,
	1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,3,392,
	4782,8,392,1,393,1,393,1,393,1,393,1,393,1,393,1,394,1,394,1,394,1,394,
	1,394,1,394,1,394,1,394,1,394,1,394,1,394,1,394,1,394,1,394,1,394,1,394,
	1,394,1,394,1,394,1,394,1,394,1,394,1,394,1,394,1,394,1,395,1,395,1,395,
	1,395,1,395,1,395,1,395,1,395,1,395,1,395,1,395,1,395,1,395,1,395,1,395,
	1,395,1,395,1,395,1,395,1,395,1,395,1,396,1,396,1,396,1,396,1,396,1,396,
	1,396,1,396,1,396,1,397,1,397,1,397,1,397,1,397,1,397,1,397,1,397,1,397,
	1,398,1,398,1,398,1,398,1,398,1,398,1,398,1,398,1,398,1,398,1,398,1,398,
	1,398,1,398,1,398,1,398,1,398,1,398,1,398,1,398,1,399,1,399,1,399,1,399,
	1,399,1,400,1,400,1,400,1,400,1,400,1,400,1,400,1,400,1,400,1,400,1,400,
	1,400,1,400,1,400,1,400,1,400,1,400,1,400,1,400,1,400,1,400,1,401,1,401,
	1,401,1,401,1,401,1,401,1,401,1,401,1,401,1,401,1,401,1,401,1,401,1,401,
	1,401,1,401,1,401,1,401,1,401,1,401,1,401,1,402,1,402,1,402,1,402,1,402,
	1,402,1,402,1,402,1,402,1,403,1,403,1,403,1,403,1,403,1,403,1,403,1,403,
	1,403,1,403,1,403,1,404,1,404,1,404,1,404,1,404,1,404,1,404,1,404,1,404,
	1,404,1,405,1,405,1,405,1,405,1,405,1,405,1,405,1,405,1,405,1,405,1,405,
	1,406,1,406,1,406,1,406,1,406,1,406,1,406,1,407,1,407,1,407,1,407,1,407,
	1,407,1,407,1,408,1,408,1,408,1,408,1,408,1,408,1,409,1,409,1,409,1,409,
	1,409,1,409,1,409,1,409,1,409,1,409,1,409,1,409,1,409,1,410,1,410,1,410,
	1,410,1,410,1,410,1,410,1,410,1,410,1,410,1,410,1,410,1,411,1,411,1,411,
	1,411,1,411,1,412,1,412,1,412,1,412,1,412,1,412,1,412,1,412,1,412,1,412,
	1,412,1,412,1,413,1,413,1,413,1,413,1,413,1,413,1,413,1,413,1,414,1,414,
	1,414,1,414,1,414,1,414,1,414,1,414,1,414,1,414,1,414,1,414,1,414,1,414,
	1,414,1,414,1,414,1,414,1,414,1,415,1,415,1,415,1,415,1,415,1,415,1,415,
	1,415,1,415,1,415,1,415,1,415,1,415,1,415,1,416,1,416,1,416,1,416,1,416,
	1,416,1,416,1,417,1,417,1,417,1,417,1,417,1,417,1,417,1,417,1,417,1,418,
	1,418,1,418,1,418,1,418,1,419,1,419,1,419,1,419,1,419,1,420,1,420,1,420,
	1,420,1,420,1,420,1,420,1,420,1,420,1,421,1,421,1,421,1,421,1,421,1,421,
	1,421,1,422,1,422,1,422,1,422,1,423,1,423,1,423,1,423,1,423,1,423,1,424,
	1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,1,424,
	1,424,1,424,1,424,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,1,425,
	1,425,1,425,1,426,1,426,1,426,1,426,1,426,1,426,1,426,1,426,1,426,1,426,
	1,426,1,426,1,426,1,427,1,427,1,427,1,427,1,427,1,427,1,428,1,428,1,428,
	1,428,1,428,1,428,1,428,1,428,1,428,1,428,1,428,1,428,1,429,1,429,1,429,
	1,429,1,429,1,429,1,430,1,430,1,430,1,430,1,430,1,431,1,431,1,431,1,431,
	1,431,1,431,1,431,1,431,1,431,1,432,1,432,1,432,1,432,1,432,1,432,1,432,
	1,432,1,433,1,433,1,433,1,433,1,433,1,433,1,433,1,433,1,433,1,433,1,433,
	1,433,1,433,1,434,1,434,1,434,1,434,1,434,1,434,1,435,1,435,1,435,1,435,
	1,435,1,435,1,436,1,436,1,436,1,436,1,436,1,436,1,436,1,436,1,436,1,436,
	1,436,1,437,1,437,1,437,1,437,1,438,1,438,1,438,1,438,1,438,1,438,1,438,
	1,439,1,439,1,439,1,439,1,440,1,440,1,440,1,440,1,440,1,441,1,441,1,441,
	1,441,1,441,1,441,1,441,1,441,1,441,1,441,1,442,1,442,1,442,1,442,1,442,
	1,443,1,443,1,443,1,443,1,443,1,443,1,443,1,443,1,443,1,443,1,443,1,443,
	1,443,1,444,1,444,1,444,1,444,1,444,1,445,1,445,1,445,1,445,1,445,1,446,
	1,446,1,446,1,447,1,447,1,447,1,447,1,447,1,447,1,447,1,447,1,448,1,448,
	1,448,1,448,1,448,1,448,1,448,1,448,1,448,1,448,1,448,1,448,1,448,1,448,
	1,448,1,448,1,448,1,448,1,448,1,449,1,449,1,449,1,449,1,449,1,450,1,450,
	1,450,1,450,1,450,1,450,1,450,1,450,1,451,1,451,1,451,1,451,1,451,1,451,
	1,451,1,451,1,452,1,452,1,452,1,452,1,452,1,452,1,452,1,452,1,452,1,453,
	1,453,1,453,1,453,1,453,1,453,1,453,1,453,1,454,1,454,1,454,1,454,1,454,
	1,454,1,454,1,455,1,455,1,455,1,455,1,455,1,455,1,455,1,455,1,455,1,455,
	1,455,1,455,1,455,1,455,1,456,1,456,1,456,1,457,1,457,1,457,1,457,1,458,
	1,458,1,458,1,458,1,458,1,458,1,458,1,459,1,459,1,459,1,459,1,459,1,459,
	1,460,1,460,1,460,1,460,1,460,1,461,1,461,1,461,1,461,1,461,1,461,1,461,
	1,461,1,461,1,462,1,462,1,462,1,462,1,462,1,462,1,462,1,462,1,462,1,462,
	1,462,1,462,1,462,1,462,1,462,1,462,1,462,1,463,1,463,1,463,1,463,1,463,
	1,463,1,463,1,463,1,464,1,464,1,464,1,464,1,464,1,464,1,464,1,465,1,465,
	1,465,1,465,1,465,1,465,1,465,1,465,1,465,1,465,1,465,1,466,1,466,1,466,
	1,466,1,466,1,466,1,467,1,467,1,467,1,468,1,468,1,468,1,468,1,468,1,468,
	1,469,1,469,1,469,1,469,1,469,1,469,1,469,1,469,1,470,1,470,1,470,1,470,
	1,471,1,471,1,471,1,471,1,471,1,471,1,472,1,472,1,472,1,472,1,472,1,472,
	1,472,1,472,1,472,1,472,1,473,1,473,1,473,1,473,1,473,1,474,1,474,1,474,
	1,474,1,474,1,474,1,474,1,475,1,475,1,475,1,475,1,475,1,475,1,475,1,475,
	1,476,1,476,1,476,1,476,1,476,1,476,1,476,1,476,1,476,1,476,1,476,1,476,
	1,476,1,477,1,477,1,477,1,477,1,477,1,477,1,477,1,477,1,477,1,477,1,477,
	1,478,1,478,1,478,1,478,1,478,1,478,1,478,1,478,1,478,1,478,1,479,1,479,
	1,479,1,479,1,479,1,479,1,479,1,479,1,479,1,480,1,480,1,480,1,480,1,480,
	1,480,1,481,1,481,1,481,1,481,1,481,1,481,1,481,1,481,1,482,1,482,1,482,
	1,482,1,482,1,482,1,482,1,482,1,482,1,482,1,482,1,482,1,483,1,483,1,483,
	1,483,1,483,1,483,1,483,1,484,1,484,1,484,1,484,1,484,1,484,1,485,1,485,
	1,485,1,485,1,485,1,485,1,485,1,485,1,486,1,486,1,486,1,486,1,486,1,487,
	1,487,1,487,1,487,1,487,1,487,1,487,1,487,1,487,1,487,1,488,1,488,1,488,
	1,488,1,488,1,488,1,488,1,488,1,488,1,488,1,489,1,489,1,489,1,489,1,489,
	1,489,1,489,1,489,1,489,1,489,1,490,1,490,1,490,1,490,1,490,1,490,1,490,
	1,490,1,491,1,491,1,491,1,491,1,491,1,491,1,491,1,491,1,491,1,492,1,492,
	1,492,1,492,1,492,1,493,1,493,1,493,1,493,1,493,1,493,1,493,1,493,1,494,
	1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,495,1,495,
	1,495,1,495,1,495,1,495,1,495,1,495,1,495,1,495,1,496,1,496,1,496,1,496,
	1,496,1,496,1,496,1,496,1,497,1,497,1,497,1,497,1,497,1,497,1,497,1,497,
	1,497,1,497,1,497,1,497,1,498,1,498,1,498,1,498,1,498,1,498,1,498,1,498,
	1,499,1,499,1,499,1,499,1,499,1,499,1,499,1,499,1,499,1,500,1,500,1,500,
	1,500,1,500,1,500,1,501,1,501,1,501,1,501,1,501,1,501,1,502,1,502,1,502,
	1,502,1,502,1,502,1,502,1,502,1,503,1,503,1,503,1,503,1,503,1,503,1,504,
	1,504,1,504,1,504,1,504,1,504,1,505,1,505,1,505,1,505,1,505,1,505,1,506,
	1,506,1,506,1,506,1,506,1,506,1,507,1,507,1,507,1,507,1,507,1,507,1,507,
	1,507,1,507,1,507,1,508,1,508,1,508,1,508,1,508,1,509,1,509,1,509,1,509,
	1,509,1,509,1,509,1,509,1,509,1,509,1,509,1,510,1,510,1,510,1,510,1,510,
	1,511,1,511,1,511,1,511,1,511,1,511,1,511,1,511,1,512,1,512,1,512,1,512,
	1,512,1,512,1,512,1,512,1,513,1,513,1,513,1,513,1,513,1,513,1,513,1,513,
	1,513,1,513,1,514,1,514,1,514,1,514,1,514,1,514,1,514,1,514,1,514,1,514,
	1,514,1,514,1,514,1,514,1,514,1,514,1,514,1,515,1,515,1,515,1,515,1,515,
	1,515,1,515,1,515,1,515,1,515,1,516,1,516,1,516,1,516,1,516,1,516,1,516,
	1,516,1,516,1,516,1,516,1,517,1,517,1,517,1,517,1,517,1,517,1,517,1,518,
	1,518,1,518,1,518,1,518,1,518,1,519,1,519,1,519,1,519,1,519,1,519,1,519,
	1,519,1,519,1,520,1,520,1,520,1,520,1,520,1,520,1,520,1,520,1,520,1,520,
	1,520,1,520,1,520,1,520,1,520,1,521,1,521,1,521,1,521,1,521,1,521,1,521,
	1,521,1,521,1,521,1,521,1,521,1,521,1,521,1,522,1,522,1,522,1,522,1,522,
	1,522,1,522,1,522,1,522,1,522,1,522,1,522,1,522,1,523,1,523,1,523,1,523,
	1,523,1,523,1,523,1,523,1,524,1,524,1,524,1,524,1,524,1,524,1,524,1,525,
	1,525,1,525,1,525,1,525,1,525,1,525,1,526,1,526,1,526,1,526,1,526,1,526,
	1,526,1,527,1,527,1,527,1,527,1,527,1,527,1,527,1,527,1,527,1,527,1,527,
	1,528,1,528,1,528,1,528,1,528,1,528,1,528,1,529,1,529,1,529,1,529,1,529,
	1,529,1,529,1,529,1,529,1,529,1,529,1,530,1,530,1,530,1,530,1,530,1,530,
	1,530,1,531,1,531,1,531,1,531,1,531,1,531,1,531,1,531,1,532,1,532,1,532,
	1,532,1,532,1,532,1,532,1,532,1,532,1,532,1,532,1,532,1,533,1,533,1,533,
	1,533,1,533,1,533,1,533,1,533,1,533,1,533,1,533,1,533,1,533,1,533,1,533,
	1,533,1,533,1,534,1,534,1,534,1,534,1,534,1,534,1,534,1,534,1,534,1,534,
	1,534,1,534,1,534,1,534,1,534,1,534,1,534,1,534,1,534,1,534,1,534,1,535,
	1,535,1,535,1,535,1,535,1,535,1,535,1,535,1,535,1,535,1,535,1,535,1,535,
	1,535,1,535,1,535,1,535,1,535,1,535,1,535,1,536,1,536,1,536,1,536,1,536,
	1,536,1,536,1,536,1,536,1,536,1,536,1,536,1,536,1,536,1,536,1,536,1,536,
	1,536,1,536,1,536,1,536,1,536,1,536,1,536,1,537,1,537,1,537,1,537,1,537,
	1,537,1,537,1,537,1,537,1,537,1,537,1,537,1,537,1,537,1,537,1,537,1,537,
	1,537,1,537,1,537,1,537,1,537,1,537,1,537,1,537,1,538,1,538,1,538,1,538,
	1,538,1,538,1,538,1,538,1,538,1,538,1,538,1,538,1,538,1,538,1,538,1,538,
	1,538,1,538,1,538,1,538,1,538,1,538,1,538,1,538,1,538,1,538,1,538,1,538,
	1,538,1,539,1,539,1,539,1,539,1,539,1,539,1,539,1,539,1,539,1,539,1,539,
	1,539,1,539,1,539,1,539,1,539,1,539,1,539,1,539,1,539,1,539,1,539,1,540,
	1,540,1,540,1,540,1,540,1,540,1,540,1,540,1,541,1,541,1,541,1,541,1,541,
	1,541,1,542,1,542,1,542,1,542,1,542,1,542,1,542,1,542,1,542,1,543,1,543,
	1,543,1,543,1,543,1,543,1,543,1,543,1,544,1,544,1,544,1,544,1,544,1,544,
	1,544,1,544,1,544,1,545,1,545,1,545,1,545,1,545,1,545,1,545,1,546,1,546,
	1,546,1,546,1,546,1,546,1,546,1,546,1,546,1,546,1,546,1,546,1,546,1,546,
	1,546,1,546,1,546,1,546,1,547,1,547,1,547,1,547,1,547,1,547,1,547,1,547,
	1,548,1,548,1,548,1,548,1,548,1,548,3,548,6264,8,548,1,549,1,549,1,549,
	1,549,1,549,1,549,1,549,1,549,1,550,1,550,1,550,1,550,1,550,1,550,1,550,
	1,551,1,551,1,551,1,551,1,551,1,551,1,552,1,552,1,552,1,552,1,552,1,552,
	1,552,1,552,1,553,1,553,1,553,1,553,1,553,1,553,1,553,1,553,1,553,1,554,
	1,554,1,554,1,554,1,554,1,554,1,554,1,555,1,555,1,555,1,555,1,555,1,555,
	1,555,1,555,1,556,1,556,1,556,1,556,1,556,1,556,1,556,1,556,1,557,1,557,
	1,557,1,557,1,557,1,558,1,558,1,558,1,558,1,558,1,558,1,558,1,558,1,558,
	1,558,1,559,1,559,1,559,1,559,1,559,1,559,1,559,1,559,1,559,1,559,1,559,
	1,560,1,560,1,560,1,560,1,561,1,561,1,561,1,561,1,561,1,561,1,562,1,562,
	1,562,1,562,1,562,1,562,1,562,1,562,1,562,1,562,1,563,1,563,1,563,1,563,
	1,563,1,563,1,563,1,563,1,563,1,564,1,564,1,564,1,564,1,564,1,564,1,564,
	1,564,1,564,1,565,1,565,1,565,1,565,1,565,1,565,1,565,1,565,1,565,1,565,
	1,565,1,565,1,566,1,566,1,566,1,566,1,566,1,566,1,566,1,566,1,566,1,566,
	1,567,1,567,1,567,1,567,1,567,1,567,1,567,1,567,1,567,1,567,1,567,1,567,
	1,567,1,567,1,567,1,567,1,567,1,567,1,567,1,568,1,568,1,568,1,568,1,568,
	1,568,1,568,1,569,1,569,1,569,1,569,1,569,1,569,1,569,1,569,1,569,1,570,
	1,570,1,570,1,570,1,570,1,570,1,570,1,571,1,571,1,571,1,571,1,571,1,571,
	1,571,1,571,1,571,1,571,1,572,1,572,1,572,1,572,1,572,1,572,1,572,1,572,
	1,572,1,572,1,573,1,573,1,573,1,573,1,573,1,573,1,573,1,573,1,573,1,573,
	1,573,1,573,1,573,1,574,1,574,1,574,1,574,1,574,1,574,1,574,1,575,1,575,
	1,575,1,575,1,575,1,575,1,575,1,575,1,576,1,576,1,576,1,576,1,576,1,576,
	1,576,1,577,1,577,1,577,1,577,1,577,1,577,1,577,1,577,1,577,1,577,1,577,
	1,577,1,577,1,577,1,577,1,578,1,578,1,578,1,578,1,578,1,578,1,578,1,578,
	1,578,1,578,1,578,1,578,1,578,1,578,1,579,1,579,1,579,1,579,1,580,1,580,
	1,580,1,580,1,580,1,580,1,580,1,580,1,581,1,581,1,581,1,581,1,581,1,581,
	1,582,1,582,1,582,1,582,1,582,1,583,1,583,1,583,1,583,1,583,1,583,1,583,
	1,583,1,583,1,584,1,584,1,584,1,584,1,584,1,584,1,584,1,585,1,585,1,585,
	1,585,1,585,1,585,1,585,1,586,1,586,1,586,1,586,1,586,1,586,1,586,1,587,
	1,587,1,587,1,587,1,587,1,587,1,588,1,588,1,588,1,588,1,588,1,589,1,589,
	1,589,1,589,1,589,1,589,1,589,1,589,1,589,1,590,1,590,1,590,1,590,1,590,
	1,590,1,590,1,590,1,590,1,591,1,591,1,591,1,591,1,591,1,591,1,591,1,592,
	1,592,1,592,1,592,1,592,1,592,1,592,1,593,1,593,1,593,1,593,1,593,1,593,
	1,593,1,594,1,594,1,594,1,594,1,594,1,594,1,594,1,595,1,595,1,595,1,595,
	1,595,1,595,1,595,1,596,1,596,1,596,1,596,1,596,1,596,1,596,1,596,1,597,
	1,597,1,597,1,597,1,597,1,597,1,597,1,597,1,597,1,598,1,598,1,598,1,598,
	1,598,1,598,1,598,1,598,1,598,1,598,1,598,1,598,1,598,1,599,1,599,1,599,
	1,599,1,599,1,599,1,599,1,599,1,599,1,600,1,600,1,600,1,600,1,600,1,600,
	1,600,1,600,1,600,1,600,1,600,1,601,1,601,1,601,1,601,1,601,1,601,1,601,
	1,601,1,601,1,601,1,601,1,601,1,601,1,601,1,601,1,601,1,602,1,602,1,602,
	1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,1,602,
	1,602,1,602,1,602,1,602,1,602,1,603,1,603,1,603,1,603,1,603,1,603,1,603,
	1,603,1,603,1,603,1,603,1,603,1,603,1,603,1,603,1,603,1,603,1,604,1,604,
	1,604,1,604,1,604,1,604,1,604,1,604,1,604,1,604,1,604,1,604,1,604,1,604,
	1,604,1,605,1,605,1,605,1,605,1,605,1,605,1,605,1,605,1,605,1,605,1,605,
	1,605,1,605,1,605,1,605,1,605,1,605,1,605,1,606,1,606,1,606,1,606,1,606,
	1,606,1,606,1,606,1,606,1,606,1,606,1,607,1,607,1,607,1,607,1,607,1,607,
	1,607,1,607,1,607,1,607,1,607,1,607,1,607,1,607,1,607,1,607,1,607,1,607,
	1,607,1,607,1,608,1,608,1,608,1,608,1,608,1,608,1,608,1,608,1,608,1,608,
	1,608,1,608,1,608,1,609,1,609,1,609,1,609,1,609,1,609,1,609,1,609,1,609,
	1,609,1,609,1,609,1,609,1,609,1,609,1,609,1,609,1,610,1,610,1,610,1,610,
	1,611,1,611,1,611,1,611,1,611,1,611,1,611,1,611,1,611,1,611,1,611,1,612,
	1,612,1,612,1,612,1,613,1,613,1,613,1,613,1,613,1,613,1,613,1,613,1,613,
	1,614,1,614,1,614,1,614,1,614,1,614,1,614,1,614,1,614,1,615,1,615,1,615,
	1,615,1,615,1,615,1,615,1,616,1,616,1,616,1,616,1,616,1,616,1,617,1,617,
	1,617,1,617,1,617,1,617,1,617,1,617,1,617,1,617,1,617,1,617,1,617,1,617,
	1,617,1,617,1,617,1,617,1,618,1,618,1,618,1,618,1,618,1,618,1,618,1,618,
	1,618,1,618,1,618,1,618,1,618,1,618,1,618,1,618,1,618,1,619,1,619,1,619,
	1,619,1,619,1,619,1,619,1,619,1,619,1,619,1,619,1,619,1,619,1,619,1,619,
	1,619,1,619,1,619,1,619,1,620,1,620,1,620,1,620,1,620,1,620,1,620,1,621,
	1,621,1,621,1,621,1,621,1,621,1,621,1,621,1,621,1,621,1,621,1,621,1,621,
	1,622,1,622,1,622,1,622,1,622,1,622,1,622,1,622,1,623,1,623,1,623,1,623,
	1,623,1,623,1,623,1,623,1,623,1,623,1,623,1,623,1,624,1,624,1,624,1,624,
	1,624,1,625,1,625,1,625,1,625,1,625,1,626,1,626,1,626,1,626,1,626,1,626,
	1,626,1,626,1,627,1,627,1,627,1,627,1,627,1,627,1,627,1,627,1,628,1,628,
	1,628,1,628,1,628,1,628,1,628,1,628,1,628,1,628,1,628,1,628,1,628,1,628,
	1,629,1,629,1,629,1,629,1,629,1,629,1,629,1,630,1,630,1,630,1,630,1,630,
	1,630,1,630,1,630,1,630,1,630,1,630,1,630,1,630,1,630,1,630,1,630,1,631,
	1,631,1,631,1,631,1,631,1,631,1,631,1,631,1,631,1,632,1,632,1,632,1,632,
	1,632,1,632,1,632,1,632,1,633,1,633,1,633,1,633,1,633,1,633,1,633,1,633,
	1,633,1,633,1,633,1,633,1,633,1,633,1,634,1,634,1,634,1,634,1,634,1,634,
	1,634,1,634,1,634,1,634,1,634,1,634,1,634,1,635,1,635,1,635,1,635,1,635,
	1,635,1,635,1,635,1,636,1,636,1,636,1,636,1,636,1,636,1,636,1,636,1,636,
	1,636,1,636,1,637,1,637,1,637,1,637,1,637,1,638,1,638,1,638,1,638,1,638,
	1,638,1,639,1,639,1,639,1,639,1,639,1,639,1,639,1,639,1,640,1,640,1,640,
	1,640,1,640,1,640,1,641,1,641,1,641,1,641,1,641,1,641,1,641,1,641,1,641,
	1,642,1,642,1,642,1,642,1,642,1,642,1,642,1,642,1,642,1,643,1,643,1,643,
	1,643,1,643,1,643,1,643,1,643,1,643,1,643,1,643,1,643,1,643,1,644,1,644,
	1,644,1,644,1,644,1,644,1,644,1,645,1,645,1,645,1,645,1,645,1,645,1,645,
	1,645,1,645,1,645,1,645,1,646,1,646,1,646,1,646,1,646,1,646,1,646,1,646,
	1,646,1,646,1,646,1,646,1,646,1,646,1,646,1,646,1,646,1,646,1,646,1,646,
	1,647,1,647,1,647,1,647,1,647,1,647,1,648,1,648,1,648,1,648,1,648,1,648,
	1,648,1,648,1,648,1,648,1,648,1,648,1,648,1,648,1,648,1,649,1,649,1,649,
	1,649,1,649,1,649,1,649,1,649,1,649,1,649,1,649,1,650,1,650,1,650,1,650,
	1,650,1,650,1,650,1,650,1,650,1,650,1,651,1,651,1,651,1,651,1,651,1,651,
	1,651,1,651,1,651,1,651,1,652,1,652,1,652,1,652,1,652,1,652,1,652,1,652,
	1,652,1,652,1,652,1,653,1,653,1,653,1,653,1,653,1,654,1,654,1,654,1,654,
	1,654,1,655,1,655,1,655,1,655,1,655,1,656,1,656,1,656,1,656,1,656,1,656,
	1,656,1,656,1,656,1,656,1,657,1,657,1,657,1,657,1,657,1,657,1,657,1,657,
	1,657,1,657,1,657,1,657,1,657,1,657,1,658,1,658,1,658,1,658,1,658,1,658,
	1,658,1,658,1,658,1,658,1,658,1,658,1,658,1,658,1,658,1,659,1,659,1,659,
	1,659,1,659,1,660,1,660,1,660,1,660,1,660,1,660,1,660,1,660,1,660,1,661,
	1,661,1,661,1,661,1,661,1,661,1,661,1,661,1,662,1,662,1,662,1,662,1,662,
	1,662,1,662,1,662,1,662,1,663,1,663,1,663,1,664,1,664,1,664,1,664,1,664,
	1,664,1,664,1,664,1,664,1,665,1,665,1,665,1,665,1,665,1,665,1,665,1,665,
	1,665,1,665,1,665,1,665,1,666,1,666,1,666,1,666,1,666,1,666,1,666,1,666,
	1,666,1,667,1,667,1,667,1,667,1,667,1,667,1,667,1,667,1,668,1,668,1,668,
	1,668,1,668,1,668,1,669,1,669,1,669,1,669,1,669,1,670,1,670,1,670,1,670,
	1,670,1,670,1,670,1,670,1,670,1,671,1,671,1,671,1,671,1,671,1,671,1,672,
	1,672,1,672,1,672,1,672,1,673,1,673,1,673,1,673,1,673,1,673,1,673,1,673,
	1,673,1,673,1,673,1,673,1,674,1,674,1,674,1,674,1,674,1,674,1,674,1,674,
	1,674,1,674,1,674,1,674,1,675,1,675,1,675,1,675,1,675,1,675,1,675,1,675,
	1,675,1,675,1,676,1,676,1,676,1,676,1,676,1,676,1,676,1,676,1,676,1,677,
	1,677,1,677,1,677,1,677,1,677,1,677,1,677,1,677,1,677,1,677,1,677,1,677,
	1,677,1,677,1,677,1,677,1,678,1,678,1,678,1,678,1,678,1,679,1,679,1,679,
	1,679,1,679,1,679,1,679,1,679,1,680,1,680,1,680,1,680,1,680,1,680,1,680,
	1,680,1,680,1,680,1,681,1,681,1,681,1,681,1,681,1,681,1,682,1,682,1,682,
	1,682,1,682,1,682,1,682,1,683,1,683,1,683,1,683,1,683,1,683,1,683,1,683,
	1,684,1,684,1,684,1,684,1,684,1,684,1,684,1,685,1,685,1,685,1,685,1,685,
	1,685,1,685,1,685,1,685,1,686,1,686,1,686,1,686,1,686,1,686,1,687,1,687,
	1,687,1,687,1,687,1,687,1,687,1,688,1,688,1,688,1,688,1,688,1,688,1,688,
	1,688,1,689,1,689,1,689,1,689,1,689,1,689,1,690,1,690,1,690,1,690,1,690,
	1,690,1,690,1,690,1,690,1,690,1,690,1,690,1,690,1,690,1,690,1,691,1,691,
	1,691,1,691,1,691,1,692,1,692,1,692,1,692,1,692,1,692,1,692,1,692,1,693,
	1,693,1,693,1,693,1,694,1,694,1,694,1,694,1,694,1,694,1,695,1,695,1,695,
	1,695,1,695,1,695,1,695,1,695,1,695,1,696,1,696,1,696,1,696,1,696,1,696,
	1,696,1,696,1,696,1,696,1,696,1,696,1,696,1,696,1,697,1,697,1,697,1,697,
	1,697,1,697,1,697,1,697,1,697,1,698,1,698,1,698,1,698,1,698,1,698,1,698,
	1,698,1,698,1,698,1,698,1,698,1,699,1,699,1,699,1,699,1,699,1,699,1,699,
	1,700,1,700,1,700,1,700,1,700,1,700,1,701,1,701,1,701,1,701,1,701,1,701,
	1,701,1,701,1,701,1,701,1,702,1,702,1,702,1,702,1,702,1,702,1,702,1,702,
	1,703,1,703,1,703,1,703,1,703,1,703,1,703,1,703,1,703,1,703,1,703,1,703,
	1,703,1,703,1,703,1,704,1,704,1,704,1,704,1,704,1,704,1,704,1,704,1,704,
	1,704,1,705,1,705,1,705,1,705,1,705,1,705,1,705,1,705,1,705,1,705,1,706,
	1,706,1,706,1,706,1,706,1,706,1,706,1,706,1,707,1,707,1,707,1,707,1,707,
	1,707,1,707,1,707,1,707,1,708,1,708,1,708,1,708,1,708,1,708,1,708,1,708,
	1,708,1,708,1,709,1,709,1,709,1,709,1,709,1,710,1,710,1,710,1,710,1,710,
	1,710,1,710,1,710,1,710,1,711,1,711,1,711,1,711,1,711,1,712,1,712,1,712,
	1,712,1,712,1,712,1,712,1,712,1,712,1,713,1,713,1,713,1,713,1,713,1,714,
	1,714,1,714,1,714,1,714,1,714,1,714,1,714,1,714,1,714,1,714,1,714,1,714,
	1,714,1,715,1,715,1,715,1,715,1,715,1,716,1,716,1,716,1,716,1,716,1,716,
	1,717,1,717,1,717,1,717,1,717,1,717,1,718,1,718,1,718,1,718,1,718,1,719,
	1,719,1,719,1,719,1,719,1,719,1,719,1,719,1,720,1,720,1,720,1,720,1,720,
	1,721,1,721,1,721,1,721,1,721,1,721,1,721,1,721,1,722,1,722,1,722,1,722,
	1,722,1,722,1,723,1,723,1,723,1,723,1,723,1,724,1,724,1,724,1,725,1,725,
	1,725,1,725,1,725,1,726,1,726,1,726,1,726,1,727,1,727,1,727,1,727,1,728,
	1,728,1,728,1,728,1,728,1,728,1,728,1,728,1,728,1,728,1,728,1,729,1,729,
	1,729,1,729,1,729,1,730,1,730,1,730,1,730,1,730,1,730,1,730,1,730,1,730,
	1,731,1,731,1,731,1,731,1,731,1,731,1,731,1,731,1,731,1,732,1,732,1,732,
	1,732,1,732,1,732,1,733,1,733,1,733,1,733,1,733,1,733,1,733,1,734,1,734,
	1,734,1,734,1,734,1,734,1,734,1,734,1,734,1,734,1,734,1,735,1,735,1,735,
	1,735,1,735,1,735,1,735,1,735,1,735,1,736,1,736,1,736,1,736,1,736,1,736,
	1,736,1,736,1,737,1,737,1,737,1,737,1,737,1,737,1,737,1,737,1,737,1,737,
	1,737,1,738,1,738,1,738,1,738,1,738,1,738,1,738,1,738,1,738,1,738,1,738,
	1,739,1,739,1,739,1,739,1,739,1,739,1,739,1,739,1,739,1,739,1,739,1,739,
	1,739,1,739,1,739,1,739,1,740,1,740,1,740,1,740,1,740,1,740,1,740,1,740,
	1,740,1,740,1,740,1,740,1,740,1,740,1,740,1,741,1,741,1,741,1,741,1,742,
	1,742,1,742,1,742,1,742,1,742,1,743,1,743,1,743,1,743,1,743,1,743,1,743,
	1,743,1,744,1,744,1,744,1,744,1,744,1,744,1,744,1,744,1,745,1,745,1,745,
	1,745,1,745,1,745,1,745,1,745,1,745,1,745,1,746,1,746,1,746,1,746,1,746,
	1,746,1,746,1,746,1,746,1,746,1,746,1,746,1,746,1,746,1,747,1,747,1,747,
	1,747,1,747,1,747,1,747,1,747,1,747,1,747,1,747,1,748,1,748,1,748,1,748,
	1,748,1,748,1,748,1,748,1,748,1,749,1,749,1,749,1,749,1,749,1,749,1,749,
	1,749,1,750,1,750,1,750,1,750,1,750,1,750,1,750,1,751,1,751,1,751,1,751,
	1,751,1,751,1,751,1,751,1,751,1,751,1,751,1,752,1,752,1,752,1,752,1,752,
	1,752,1,752,1,752,1,752,1,752,1,752,1,752,1,753,1,753,1,753,1,753,1,753,
	1,753,1,753,1,753,1,753,1,754,1,754,1,754,1,754,1,754,1,754,1,754,1,754,
	1,754,1,754,1,754,1,754,1,754,1,755,1,755,1,755,1,755,1,755,1,755,1,755,
	1,755,1,755,1,755,1,755,1,756,1,756,1,756,1,756,1,756,1,756,1,756,1,756,
	1,757,1,757,1,757,1,757,1,757,1,758,1,758,1,758,1,758,1,758,1,758,1,758,
	1,758,1,758,1,758,1,758,1,758,1,759,1,759,1,759,1,759,1,759,1,759,1,760,
	1,760,1,760,1,760,1,760,1,760,1,760,1,760,1,760,1,760,1,760,1,761,1,761,
	1,761,1,761,1,761,1,761,1,761,1,762,1,762,1,762,1,762,1,762,1,762,1,762,
	1,763,1,763,1,763,1,763,1,763,1,763,1,763,1,763,1,764,1,764,1,764,1,764,
	1,764,1,764,1,765,1,765,1,765,1,765,1,765,1,765,1,765,1,765,1,765,1,765,
	1,765,1,765,1,765,1,765,1,766,1,766,1,766,1,766,1,766,1,766,1,766,1,766,
	1,766,1,766,1,766,1,767,1,767,1,767,1,767,1,767,1,767,1,768,1,768,1,768,
	1,768,1,768,1,768,1,768,1,768,1,768,1,769,1,769,1,769,1,769,1,769,1,769,
	1,769,1,769,1,769,1,769,1,769,1,769,1,770,1,770,1,770,1,770,1,770,1,770,
	1,771,1,771,1,771,1,771,1,771,1,771,1,771,1,771,1,771,1,771,1,771,1,772,
	1,772,1,772,1,772,1,772,1,772,1,772,1,772,1,773,1,773,1,773,1,773,1,773,
	1,773,1,773,1,774,1,774,1,774,1,774,1,774,1,774,1,774,1,774,1,774,1,774,
	1,774,1,774,1,775,1,775,1,775,1,775,1,775,1,775,1,775,1,775,1,776,1,776,
	1,776,1,776,1,776,1,776,1,776,1,776,1,776,1,776,1,776,1,776,1,777,1,777,
	1,777,1,777,1,777,1,777,1,778,1,778,1,778,1,778,1,778,1,778,1,778,1,778,
	1,778,1,779,1,779,1,779,1,779,1,779,1,779,1,779,1,780,1,780,1,780,1,780,
	1,780,1,780,1,781,1,781,1,781,1,781,1,781,1,781,1,781,1,781,1,781,1,781,
	1,781,1,781,1,781,1,781,1,781,1,781,1,781,1,782,1,782,1,782,1,782,1,782,
	1,782,1,782,1,782,1,782,1,782,1,783,1,783,1,783,1,783,1,783,1,783,1,783,
	1,783,1,784,1,784,1,784,1,784,1,784,1,784,1,785,1,785,1,785,1,785,1,785,
	1,785,1,785,1,785,1,785,1,785,1,785,1,785,1,785,1,785,1,785,1,785,1,785,
	1,785,1,785,1,785,1,785,1,785,1,785,1,785,1,786,1,786,1,786,1,786,1,786,
	1,786,1,786,1,786,1,786,1,786,1,786,1,786,1,786,1,786,1,786,1,786,1,786,
	1,786,1,786,1,786,1,786,1,786,1,786,1,786,1,786,1,786,1,786,1,787,1,787,
	1,787,1,787,1,787,1,787,1,787,1,787,1,787,1,788,1,788,1,788,1,788,1,788,
	1,788,1,788,1,788,1,788,1,788,1,788,1,788,1,789,1,789,1,789,1,789,1,789,
	1,789,1,789,1,789,1,789,1,789,1,789,1,789,1,789,1,790,1,790,1,790,1,790,
	1,790,1,790,1,790,1,790,1,790,1,790,1,790,1,790,1,790,1,790,1,791,1,791,
	1,791,1,791,1,791,1,791,1,791,1,791,1,791,1,791,1,791,1,792,1,792,1,792,
	1,792,1,792,1,792,1,792,1,792,1,792,1,792,1,793,1,793,1,793,1,793,1,793,
	1,793,1,793,1,793,1,793,1,793,1,793,1,794,1,794,1,794,1,794,1,794,1,794,
	1,794,1,794,1,794,1,794,1,794,1,794,1,794,1,794,1,794,1,794,1,794,1,794,
	1,795,1,795,1,795,1,795,1,795,1,795,1,795,1,795,1,795,1,795,1,795,1,795,
	1,795,1,795,1,795,1,795,1,796,1,796,1,796,1,796,1,796,1,796,1,796,1,796,
	1,796,1,796,1,796,1,796,1,796,1,796,1,796,1,796,1,796,1,796,1,797,1,797,
	1,797,1,797,1,797,1,797,1,797,1,797,1,798,1,798,1,798,1,798,1,798,1,798,
	1,798,1,798,1,798,1,798,1,799,1,799,1,799,1,799,1,799,1,799,1,799,1,799,
	1,799,1,800,1,800,1,800,1,800,1,800,1,800,1,800,1,800,1,801,1,801,1,801,
	1,801,1,801,1,802,1,802,1,802,1,802,1,802,1,802,1,802,1,802,1,802,1,802,
	1,802,1,802,1,802,1,802,1,802,1,802,1,802,1,802,1,802,1,803,1,803,1,803,
	1,803,1,803,1,803,1,803,1,803,1,803,1,803,1,804,1,804,1,804,1,804,1,804,
	1,804,1,804,1,805,1,805,1,805,1,805,1,806,1,806,1,806,1,806,1,806,1,806,
	1,806,1,806,1,807,1,807,1,807,1,807,1,807,1,807,1,807,1,807,1,808,1,808,
	1,808,1,808,1,808,1,808,1,808,1,808,1,808,1,808,1,808,1,808,1,808,1,808,
	1,808,1,808,1,808,1,808,1,808,1,808,1,808,1,808,1,808,1,808,1,808,1,808,
	1,808,1,808,1,808,1,808,1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,809,
	1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,809,
	1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,809,1,810,
	1,810,1,810,1,810,1,810,1,810,1,810,1,810,1,810,1,810,1,810,1,810,1,810,
	1,810,1,810,1,810,1,810,1,810,1,810,1,810,1,810,1,810,1,810,1,811,1,811,
	1,811,1,811,1,811,1,811,1,811,1,811,1,811,1,811,1,811,1,811,1,811,1,811,
	1,811,1,811,1,811,1,811,1,811,1,811,1,811,1,811,1,811,1,811,1,811,1,812,
	1,812,1,812,1,812,1,812,1,812,1,812,1,813,1,813,1,813,1,813,1,813,1,813,
	1,813,1,814,1,814,1,814,1,814,1,814,1,814,1,814,1,815,1,815,1,815,1,815,
	1,815,1,815,1,815,1,816,1,816,1,816,1,816,1,816,1,816,1,816,1,817,1,817,
	1,817,1,817,1,817,1,817,1,817,1,817,1,817,1,817,1,817,1,817,1,817,1,817,
	1,817,1,817,1,817,1,818,1,818,1,818,1,818,1,818,1,818,1,818,1,818,1,818,
	1,818,1,818,1,818,1,818,1,818,1,818,1,818,1,818,1,819,1,819,1,819,1,819,
	1,819,1,819,1,819,1,819,1,819,1,819,1,819,1,819,1,819,1,819,1,819,1,820,
	1,820,1,820,1,820,1,820,1,820,1,820,1,820,1,820,1,820,1,820,1,820,1,820,
	1,820,1,821,1,821,1,821,1,821,1,821,1,821,1,821,1,821,1,821,1,821,1,821,
	1,821,1,821,1,821,1,821,1,822,1,822,1,822,1,822,1,822,1,822,1,822,1,822,
	1,822,1,822,1,822,1,822,1,822,1,822,1,822,1,822,1,823,1,823,1,823,1,823,
	1,823,1,823,1,823,1,823,1,823,1,823,1,823,1,823,1,823,1,823,1,823,1,823,
	1,823,1,823,1,824,1,824,1,824,1,824,1,824,1,824,1,824,1,824,1,824,1,824,
	1,824,1,824,1,824,1,824,1,824,1,825,1,825,1,825,1,825,1,826,3,826,8955,
	8,826,1,827,1,827,4,827,8959,8,827,11,827,12,827,8960,1,827,1,827,1,828,
	4,828,8966,8,828,11,828,12,828,8967,1,828,1,828,1,828,5,828,8973,8,828,
	10,828,12,828,8976,9,828,3,828,8978,8,828,1,828,4,828,8981,8,828,11,828,
	12,828,8982,1,828,1,828,5,828,8987,8,828,10,828,12,828,8990,9,828,1,828,
	1,828,5,828,8994,8,828,10,828,12,828,8997,9,828,3,828,8999,8,828,1,829,
	1,829,1,829,1,830,1,830,1,831,1,831,1,832,1,832,1,833,1,833,1,833,3,833,
	9013,8,833,1,833,5,833,9016,8,833,10,833,12,833,9019,9,833,1,833,1,833,
	1,834,1,834,1,834,1,834,3,834,9027,8,834,1,834,5,834,9030,8,834,10,834,
	12,834,9033,9,834,1,834,1,834,4,834,9037,8,834,11,834,12,834,9038,1,835,
	1,835,1,835,3,835,9044,8,835,1,835,5,835,9047,8,835,10,835,12,835,9050,
	9,835,1,835,1,835,4,835,9054,8,835,11,835,12,835,9055,1,836,1,836,1,836,
	1,836,1,836,1,836,1,836,1,836,5,836,9066,8,836,10,836,12,836,9069,9,836,
	1,836,1,836,3,836,9073,8,836,1,836,1,836,1,837,1,837,1,837,1,837,1,837,
	1,837,1,837,1,837,1,838,1,838,1,838,1,838,1,838,1,838,1,838,1,838,1,839,
	1,839,1,839,1,839,1,839,1,839,1,839,1,839,1,839,5,839,9102,8,839,10,839,
	12,839,9105,9,839,1,839,1,839,3,839,9109,8,839,1,839,1,839,1,840,1,840,
	5,840,9115,8,840,10,840,12,840,9118,9,840,1,840,1,840,1,841,1,841,1,841,
	5,841,9125,8,841,10,841,12,841,9128,9,841,1,841,1,841,3,841,9132,8,841,
	1,841,1,841,1,842,1,842,1,842,1,843,1,843,1,844,1,844,1,844,4,844,9144,
	8,844,11,844,12,844,9145,1,845,1,845,1,845,1,846,1,846,1,846,1,847,1,847,
	3,847,9156,8,847,1,848,1,848,1,849,1,849,5,9017,9031,9048,9067,9103,0,850,
	1,383,3,384,5,385,7,386,9,387,11,388,13,389,15,390,17,783,19,391,21,392,
	23,393,25,394,27,395,29,396,31,397,33,398,35,399,37,400,39,401,41,402,43,
	403,45,404,47,405,49,406,51,407,53,408,55,409,57,410,59,411,61,412,63,413,
	65,414,67,415,69,416,71,417,73,418,75,419,77,420,79,0,81,0,83,0,85,0,87,
	0,89,0,91,0,93,0,95,0,97,0,99,0,101,0,103,0,105,0,107,0,109,0,111,0,113,
	0,115,0,117,0,119,0,121,0,123,0,125,0,127,0,129,0,131,0,133,0,135,0,137,
	421,139,422,141,380,143,423,145,424,147,0,149,425,151,1,153,57,155,426,
	157,58,159,59,161,60,163,61,165,62,167,427,169,428,171,3,173,429,175,63,
	177,430,179,64,181,431,183,432,185,2,187,433,189,65,191,66,193,68,195,67,
	197,69,199,70,201,4,203,434,205,5,207,435,209,436,211,437,213,71,215,438,
	217,439,219,440,221,72,223,441,225,442,227,73,229,75,231,74,233,443,235,
	76,237,444,239,6,241,7,243,445,245,446,247,77,249,447,251,448,253,78,255,
	79,257,449,259,80,261,81,263,8,265,0,267,450,269,9,271,451,273,82,275,84,
	277,83,279,10,281,85,283,86,285,452,287,87,289,90,291,453,293,88,295,89,
	297,11,299,91,301,12,303,92,305,93,307,94,309,95,311,97,313,454,315,98,
	317,99,319,455,321,100,323,102,325,101,327,13,329,103,331,456,333,104,335,
	457,337,458,339,105,341,459,343,460,345,106,347,461,349,107,351,462,353,
	463,355,0,357,464,359,465,361,108,363,466,365,467,367,468,369,110,371,109,
	373,111,375,469,377,470,379,112,381,0,383,471,385,472,387,473,389,474,391,
	113,393,14,395,0,397,475,399,476,401,477,403,478,405,114,407,115,409,479,
	411,116,413,480,415,481,417,482,419,117,421,483,423,118,425,119,427,120,
	429,121,431,122,433,484,435,0,437,485,439,486,441,15,443,487,445,488,447,
	123,449,124,451,125,453,489,455,490,457,491,459,143,461,492,463,96,465,
	16,467,126,469,493,471,129,473,128,475,127,477,130,479,131,481,494,483,
	132,485,134,487,133,489,135,491,495,493,17,495,496,497,497,499,136,501,
	498,503,499,505,137,507,138,509,139,511,500,513,501,515,141,517,140,519,
	502,521,0,523,145,525,146,527,147,529,148,531,149,533,0,535,0,537,503,539,
	18,541,19,543,504,545,505,547,506,549,20,551,142,553,507,555,144,557,508,
	559,356,561,509,563,150,565,510,567,21,569,152,571,151,573,153,575,155,
	577,511,579,154,581,512,583,513,585,22,587,156,589,514,591,23,593,515,595,
	24,597,157,599,516,601,517,603,518,605,158,607,159,609,519,611,520,613,
	160,615,162,617,163,619,521,621,522,623,164,625,523,627,524,629,525,631,
	526,633,171,635,165,637,25,639,0,641,527,643,528,645,529,647,161,649,530,
	651,531,653,532,655,0,657,167,659,168,661,533,663,169,665,170,667,534,669,
	535,671,172,673,536,675,173,677,537,679,538,681,26,683,174,685,539,687,
	175,689,540,691,541,693,176,695,177,697,542,699,543,701,544,703,545,705,
	178,707,179,709,546,711,0,713,0,715,180,717,547,719,181,721,548,723,182,
	725,183,727,549,729,550,731,551,733,552,735,553,737,554,739,206,741,555,
	743,194,745,196,747,187,749,189,751,190,753,192,755,188,757,195,759,193,
	761,199,763,198,765,201,767,202,769,203,771,204,773,205,775,197,777,556,
	779,185,781,200,783,191,785,186,787,557,789,207,791,208,793,184,795,210,
	797,209,799,558,801,211,803,212,805,559,807,560,809,561,811,562,813,213,
	815,214,817,215,819,216,821,217,823,563,825,0,827,218,829,564,831,565,833,
	219,835,220,837,566,839,222,841,567,843,221,845,568,847,223,849,224,851,
	225,853,226,855,227,857,228,859,230,861,229,863,231,865,569,867,570,869,
	232,871,0,873,233,875,571,877,234,879,236,881,235,883,238,885,239,887,572,
	889,573,891,574,893,27,895,237,897,575,899,576,901,240,903,577,905,241,
	907,578,909,242,911,243,913,579,915,245,917,580,919,581,921,28,923,582,
	925,583,927,29,929,584,931,585,933,586,935,587,937,588,939,589,941,590,
	943,30,945,246,947,247,949,31,951,248,953,249,955,250,957,32,959,251,961,
	252,963,255,965,253,967,254,969,256,971,257,973,33,975,591,977,34,979,592,
	981,35,983,258,985,259,987,593,989,260,991,594,993,261,995,262,997,263,
	999,264,1001,265,1003,595,1005,266,1007,267,1009,268,1011,596,1013,597,
	1015,269,1017,598,1019,599,1021,600,1023,270,1025,271,1027,273,1029,272,
	1031,274,1033,601,1035,602,1037,275,1039,276,1041,277,1043,278,1045,279,
	1047,603,1049,280,1051,36,1053,604,1055,281,1057,37,1059,282,1061,605,1063,
	606,1065,283,1067,284,1069,285,1071,286,1073,287,1075,288,1077,289,1079,
	290,1081,607,1083,38,1085,608,1087,39,1089,609,1091,291,1093,292,1095,293,
	1097,610,1099,294,1101,611,1103,612,1105,0,1107,40,1109,295,1111,296,1113,
	297,1115,298,1117,299,1119,300,1121,301,1123,302,1125,41,1127,303,1129,
	0,1131,304,1133,0,1135,613,1137,305,1139,42,1141,614,1143,615,1145,616,
	1147,307,1149,306,1151,308,1153,43,1155,617,1157,618,1159,619,1161,620,
	1163,310,1165,621,1167,56,1169,622,1171,44,1173,309,1175,45,1177,311,1179,
	623,1181,312,1183,0,1185,46,1187,47,1189,313,1191,314,1193,624,1195,625,
	1197,626,1199,627,1201,628,1203,315,1205,316,1207,317,1209,629,1211,319,
	1213,318,1215,630,1217,320,1219,631,1221,632,1223,321,1225,633,1227,322,
	1229,634,1231,323,1233,48,1235,324,1237,325,1239,326,1241,327,1243,635,
	1245,636,1247,637,1249,638,1251,49,1253,328,1255,639,1257,640,1259,329,
	1261,330,1263,331,1265,332,1267,334,1269,333,1271,641,1273,642,1275,643,
	1277,335,1279,336,1281,337,1283,338,1285,644,1287,645,1289,340,1291,342,
	1293,646,1295,647,1297,341,1299,339,1301,343,1303,344,1305,648,1307,345,
	1309,346,1311,649,1313,349,1315,350,1317,351,1319,352,1321,650,1323,651,
	1325,652,1327,653,1329,654,1331,347,1333,348,1335,655,1337,656,1339,657,
	1341,50,1343,353,1345,354,1347,355,1349,357,1351,358,1353,360,1355,359,
	1357,658,1359,51,1361,52,1363,659,1365,660,1367,361,1369,661,1371,662,1373,
	362,1375,663,1377,53,1379,664,1381,363,1383,364,1385,365,1387,665,1389,
	666,1391,667,1393,668,1395,669,1397,670,1399,671,1401,368,1403,672,1405,
	673,1407,0,1409,366,1411,674,1413,675,1415,676,1417,677,1419,367,1421,678,
	1423,370,1425,369,1427,371,1429,373,1431,679,1433,680,1435,681,1437,682,
	1439,683,1441,372,1443,54,1445,684,1447,374,1449,55,1451,375,1453,376,1455,
	685,1457,686,1459,377,1461,687,1463,688,1465,689,1467,690,1469,691,1471,
	692,1473,693,1475,694,1477,695,1479,696,1481,697,1483,698,1485,699,1487,
	700,1489,701,1491,702,1493,703,1495,704,1497,705,1499,706,1501,707,1503,
	708,1505,709,1507,710,1509,711,1511,712,1513,713,1515,714,1517,715,1519,
	716,1521,717,1523,718,1525,719,1527,720,1529,721,1531,722,1533,723,1535,
	724,1537,725,1539,726,1541,727,1543,728,1545,729,1547,730,1549,731,1551,
	732,1553,733,1555,734,1557,735,1559,736,1561,737,1563,738,1565,739,1567,
	740,1569,741,1571,742,1573,743,1575,744,1577,745,1579,746,1581,747,1583,
	748,1585,749,1587,750,1589,751,1591,752,1593,753,1595,754,1597,755,1599,
	756,1601,757,1603,758,1605,759,1607,760,1609,761,1611,762,1613,763,1615,
	764,1617,765,1619,766,1621,767,1623,768,1625,0,1627,0,1629,0,1631,0,1633,
	0,1635,0,1637,0,1639,0,1641,0,1643,0,1645,0,1647,0,1649,0,1651,769,1653,
	770,1655,771,1657,772,1659,773,1661,0,1663,0,1665,0,1667,774,1669,775,1671,
	776,1673,777,1675,778,1677,779,1679,780,1681,781,1683,782,1685,0,1687,0,
	1689,0,1691,0,1693,0,1695,0,1697,0,1699,0,1,0,38,2,0,65,65,97,97,2,0,66,
	66,98,98,2,0,67,67,99,99,2,0,68,68,100,100,2,0,69,69,101,101,2,0,70,70,
	102,102,2,0,71,71,103,103,2,0,72,72,104,104,2,0,73,73,105,105,2,0,74,74,
	106,106,2,0,75,75,107,107,2,0,76,76,108,108,2,0,77,77,109,109,2,0,78,78,
	110,110,2,0,79,79,111,111,2,0,80,80,112,112,2,0,81,81,113,113,2,0,82,82,
	114,114,2,0,83,83,115,115,2,0,84,84,116,116,2,0,85,85,117,117,2,0,86,86,
	118,118,2,0,87,87,119,119,2,0,88,88,120,120,2,0,89,89,121,121,2,0,90,90,
	122,122,1,0,48,57,3,0,48,57,65,70,97,102,1,0,48,49,3,0,9,10,12,13,32,32,
	5,0,1,8,11,12,14,31,91,91,93,93,2,0,48,57,97,122,1,0,33,33,2,0,10,10,13,
	13,2,0,9,9,32,32,4,0,36,36,65,90,95,95,97,122,5,0,36,36,65,90,95,95,97,
	122,128,65535,7,0,36,36,65,68,70,90,95,95,97,100,102,122,128,65535,9165,
	0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,
	0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
	1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,
	0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,
	1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,
	0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,
	1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,
	0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,
	0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,
	157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,
	1,0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,
	0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,
	0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,
	0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,
	0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,
	219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,
	1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,
	0,0,0,0,241,1,0,0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,
	0,0,0,251,1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,
	0,0,261,1,0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,
	0,271,1,0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,
	281,1,0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,291,
	1,0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,
	0,0,0,0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,
	0,0,0,313,1,0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,
	0,0,323,1,0,0,0,0,325,1,0,0,0,0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,
	0,333,1,0,0,0,0,335,1,0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,
	343,1,0,0,0,0,345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,
	1,0,0,0,0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,
	0,0,0,0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,0,
	0,0,0,375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,
	0,0,385,1,0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,
	0,395,1,0,0,0,0,397,1,0,0,0,0,399,1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,
	405,1,0,0,0,0,407,1,0,0,0,0,409,1,0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,
	1,0,0,0,0,417,1,0,0,0,0,419,1,0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,
	0,0,0,0,427,1,0,0,0,0,429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,
	0,0,0,437,1,0,0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,
	0,0,447,1,0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,
	0,457,1,0,0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,
	467,1,0,0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,
	1,0,0,0,0,479,1,0,0,0,0,481,1,0,0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,
	0,0,0,0,489,1,0,0,0,0,491,1,0,0,0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,
	0,0,0,499,1,0,0,0,0,501,1,0,0,0,0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,
	0,0,509,1,0,0,0,0,511,1,0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,
	0,519,1,0,0,0,0,521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,
	529,1,0,0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,
	1,0,0,0,0,541,1,0,0,0,0,543,1,0,0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,1,
	0,0,0,0,551,1,0,0,0,0,553,1,0,0,0,0,555,1,0,0,0,0,557,1,0,0,0,0,559,1,0,
	0,0,0,561,1,0,0,0,0,563,1,0,0,0,0,565,1,0,0,0,0,567,1,0,0,0,0,569,1,0,0,
	0,0,571,1,0,0,0,0,573,1,0,0,0,0,575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,
	0,581,1,0,0,0,0,583,1,0,0,0,0,585,1,0,0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,
	591,1,0,0,0,0,593,1,0,0,0,0,595,1,0,0,0,0,597,1,0,0,0,0,599,1,0,0,0,0,601,
	1,0,0,0,0,603,1,0,0,0,0,605,1,0,0,0,0,607,1,0,0,0,0,609,1,0,0,0,0,611,1,
	0,0,0,0,613,1,0,0,0,0,615,1,0,0,0,0,617,1,0,0,0,0,619,1,0,0,0,0,621,1,0,
	0,0,0,623,1,0,0,0,0,625,1,0,0,0,0,627,1,0,0,0,0,629,1,0,0,0,0,631,1,0,0,
	0,0,633,1,0,0,0,0,635,1,0,0,0,0,637,1,0,0,0,0,639,1,0,0,0,0,641,1,0,0,0,
	0,643,1,0,0,0,0,645,1,0,0,0,0,647,1,0,0,0,0,649,1,0,0,0,0,651,1,0,0,0,0,
	653,1,0,0,0,0,655,1,0,0,0,0,657,1,0,0,0,0,659,1,0,0,0,0,661,1,0,0,0,0,663,
	1,0,0,0,0,665,1,0,0,0,0,667,1,0,0,0,0,669,1,0,0,0,0,671,1,0,0,0,0,673,1,
	0,0,0,0,675,1,0,0,0,0,677,1,0,0,0,0,679,1,0,0,0,0,681,1,0,0,0,0,683,1,0,
	0,0,0,685,1,0,0,0,0,687,1,0,0,0,0,689,1,0,0,0,0,691,1,0,0,0,0,693,1,0,0,
	0,0,695,1,0,0,0,0,697,1,0,0,0,0,699,1,0,0,0,0,701,1,0,0,0,0,703,1,0,0,0,
	0,705,1,0,0,0,0,707,1,0,0,0,0,709,1,0,0,0,0,711,1,0,0,0,0,713,1,0,0,0,0,
	715,1,0,0,0,0,717,1,0,0,0,0,719,1,0,0,0,0,721,1,0,0,0,0,723,1,0,0,0,0,725,
	1,0,0,0,0,727,1,0,0,0,0,729,1,0,0,0,0,731,1,0,0,0,0,733,1,0,0,0,0,735,1,
	0,0,0,0,737,1,0,0,0,0,739,1,0,0,0,0,741,1,0,0,0,0,743,1,0,0,0,0,745,1,0,
	0,0,0,747,1,0,0,0,0,749,1,0,0,0,0,751,1,0,0,0,0,753,1,0,0,0,0,755,1,0,0,
	0,0,757,1,0,0,0,0,759,1,0,0,0,0,761,1,0,0,0,0,763,1,0,0,0,0,765,1,0,0,0,
	0,767,1,0,0,0,0,769,1,0,0,0,0,771,1,0,0,0,0,773,1,0,0,0,0,775,1,0,0,0,0,
	777,1,0,0,0,0,779,1,0,0,0,0,781,1,0,0,0,0,783,1,0,0,0,0,785,1,0,0,0,0,787,
	1,0,0,0,0,789,1,0,0,0,0,791,1,0,0,0,0,793,1,0,0,0,0,795,1,0,0,0,0,797,1,
	0,0,0,0,799,1,0,0,0,0,801,1,0,0,0,0,803,1,0,0,0,0,805,1,0,0,0,0,807,1,0,
	0,0,0,809,1,0,0,0,0,811,1,0,0,0,0,813,1,0,0,0,0,815,1,0,0,0,0,817,1,0,0,
	0,0,819,1,0,0,0,0,821,1,0,0,0,0,823,1,0,0,0,0,825,1,0,0,0,0,827,1,0,0,0,
	0,829,1,0,0,0,0,831,1,0,0,0,0,833,1,0,0,0,0,835,1,0,0,0,0,837,1,0,0,0,0,
	839,1,0,0,0,0,841,1,0,0,0,0,843,1,0,0,0,0,845,1,0,0,0,0,847,1,0,0,0,0,849,
	1,0,0,0,0,851,1,0,0,0,0,853,1,0,0,0,0,855,1,0,0,0,0,857,1,0,0,0,0,859,1,
	0,0,0,0,861,1,0,0,0,0,863,1,0,0,0,0,865,1,0,0,0,0,867,1,0,0,0,0,869,1,0,
	0,0,0,871,1,0,0,0,0,873,1,0,0,0,0,875,1,0,0,0,0,877,1,0,0,0,0,879,1,0,0,
	0,0,881,1,0,0,0,0,883,1,0,0,0,0,885,1,0,0,0,0,887,1,0,0,0,0,889,1,0,0,0,
	0,891,1,0,0,0,0,893,1,0,0,0,0,895,1,0,0,0,0,897,1,0,0,0,0,899,1,0,0,0,0,
	901,1,0,0,0,0,903,1,0,0,0,0,905,1,0,0,0,0,907,1,0,0,0,0,909,1,0,0,0,0,911,
	1,0,0,0,0,913,1,0,0,0,0,915,1,0,0,0,0,917,1,0,0,0,0,919,1,0,0,0,0,921,1,
	0,0,0,0,923,1,0,0,0,0,925,1,0,0,0,0,927,1,0,0,0,0,929,1,0,0,0,0,931,1,0,
	0,0,0,933,1,0,0,0,0,935,1,0,0,0,0,937,1,0,0,0,0,939,1,0,0,0,0,941,1,0,0,
	0,0,943,1,0,0,0,0,945,1,0,0,0,0,947,1,0,0,0,0,949,1,0,0,0,0,951,1,0,0,0,
	0,953,1,0,0,0,0,955,1,0,0,0,0,957,1,0,0,0,0,959,1,0,0,0,0,961,1,0,0,0,0,
	963,1,0,0,0,0,965,1,0,0,0,0,967,1,0,0,0,0,969,1,0,0,0,0,971,1,0,0,0,0,973,
	1,0,0,0,0,975,1,0,0,0,0,977,1,0,0,0,0,979,1,0,0,0,0,981,1,0,0,0,0,983,1,
	0,0,0,0,985,1,0,0,0,0,987,1,0,0,0,0,989,1,0,0,0,0,991,1,0,0,0,0,993,1,0,
	0,0,0,995,1,0,0,0,0,997,1,0,0,0,0,999,1,0,0,0,0,1001,1,0,0,0,0,1003,1,0,
	0,0,0,1005,1,0,0,0,0,1007,1,0,0,0,0,1009,1,0,0,0,0,1011,1,0,0,0,0,1013,
	1,0,0,0,0,1015,1,0,0,0,0,1017,1,0,0,0,0,1019,1,0,0,0,0,1021,1,0,0,0,0,1023,
	1,0,0,0,0,1025,1,0,0,0,0,1027,1,0,0,0,0,1029,1,0,0,0,0,1031,1,0,0,0,0,1033,
	1,0,0,0,0,1035,1,0,0,0,0,1037,1,0,0,0,0,1039,1,0,0,0,0,1041,1,0,0,0,0,1043,
	1,0,0,0,0,1045,1,0,0,0,0,1047,1,0,0,0,0,1049,1,0,0,0,0,1051,1,0,0,0,0,1053,
	1,0,0,0,0,1055,1,0,0,0,0,1057,1,0,0,0,0,1059,1,0,0,0,0,1061,1,0,0,0,0,1063,
	1,0,0,0,0,1065,1,0,0,0,0,1067,1,0,0,0,0,1069,1,0,0,0,0,1071,1,0,0,0,0,1073,
	1,0,0,0,0,1075,1,0,0,0,0,1077,1,0,0,0,0,1079,1,0,0,0,0,1081,1,0,0,0,0,1083,
	1,0,0,0,0,1085,1,0,0,0,0,1087,1,0,0,0,0,1089,1,0,0,0,0,1091,1,0,0,0,0,1093,
	1,0,0,0,0,1095,1,0,0,0,0,1097,1,0,0,0,0,1099,1,0,0,0,0,1101,1,0,0,0,0,1103,
	1,0,0,0,0,1105,1,0,0,0,0,1107,1,0,0,0,0,1109,1,0,0,0,0,1111,1,0,0,0,0,1113,
	1,0,0,0,0,1115,1,0,0,0,0,1117,1,0,0,0,0,1119,1,0,0,0,0,1121,1,0,0,0,0,1123,
	1,0,0,0,0,1125,1,0,0,0,0,1127,1,0,0,0,0,1129,1,0,0,0,0,1131,1,0,0,0,0,1133,
	1,0,0,0,0,1135,1,0,0,0,0,1137,1,0,0,0,0,1139,1,0,0,0,0,1141,1,0,0,0,0,1143,
	1,0,0,0,0,1145,1,0,0,0,0,1147,1,0,0,0,0,1149,1,0,0,0,0,1151,1,0,0,0,0,1153,
	1,0,0,0,0,1155,1,0,0,0,0,1157,1,0,0,0,0,1159,1,0,0,0,0,1161,1,0,0,0,0,1163,
	1,0,0,0,0,1165,1,0,0,0,0,1167,1,0,0,0,0,1169,1,0,0,0,0,1171,1,0,0,0,0,1173,
	1,0,0,0,0,1175,1,0,0,0,0,1177,1,0,0,0,0,1179,1,0,0,0,0,1181,1,0,0,0,0,1183,
	1,0,0,0,0,1185,1,0,0,0,0,1187,1,0,0,0,0,1189,1,0,0,0,0,1191,1,0,0,0,0,1193,
	1,0,0,0,0,1195,1,0,0,0,0,1197,1,0,0,0,0,1199,1,0,0,0,0,1201,1,0,0,0,0,1203,
	1,0,0,0,0,1205,1,0,0,0,0,1207,1,0,0,0,0,1209,1,0,0,0,0,1211,1,0,0,0,0,1213,
	1,0,0,0,0,1215,1,0,0,0,0,1217,1,0,0,0,0,1219,1,0,0,0,0,1221,1,0,0,0,0,1223,
	1,0,0,0,0,1225,1,0,0,0,0,1227,1,0,0,0,0,1229,1,0,0,0,0,1231,1,0,0,0,0,1233,
	1,0,0,0,0,1235,1,0,0,0,0,1237,1,0,0,0,0,1239,1,0,0,0,0,1241,1,0,0,0,0,1243,
	1,0,0,0,0,1245,1,0,0,0,0,1247,1,0,0,0,0,1249,1,0,0,0,0,1251,1,0,0,0,0,1253,
	1,0,0,0,0,1255,1,0,0,0,0,1257,1,0,0,0,0,1259,1,0,0,0,0,1261,1,0,0,0,0,1263,
	1,0,0,0,0,1265,1,0,0,0,0,1267,1,0,0,0,0,1269,1,0,0,0,0,1271,1,0,0,0,0,1273,
	1,0,0,0,0,1275,1,0,0,0,0,1277,1,0,0,0,0,1279,1,0,0,0,0,1281,1,0,0,0,0,1283,
	1,0,0,0,0,1285,1,0,0,0,0,1287,1,0,0,0,0,1289,1,0,0,0,0,1291,1,0,0,0,0,1293,
	1,0,0,0,0,1295,1,0,0,0,0,1297,1,0,0,0,0,1299,1,0,0,0,0,1301,1,0,0,0,0,1303,
	1,0,0,0,0,1305,1,0,0,0,0,1307,1,0,0,0,0,1309,1,0,0,0,0,1311,1,0,0,0,0,1313,
	1,0,0,0,0,1315,1,0,0,0,0,1317,1,0,0,0,0,1319,1,0,0,0,0,1321,1,0,0,0,0,1323,
	1,0,0,0,0,1325,1,0,0,0,0,1327,1,0,0,0,0,1329,1,0,0,0,0,1331,1,0,0,0,0,1333,
	1,0,0,0,0,1335,1,0,0,0,0,1337,1,0,0,0,0,1339,1,0,0,0,0,1341,1,0,0,0,0,1343,
	1,0,0,0,0,1345,1,0,0,0,0,1347,1,0,0,0,0,1349,1,0,0,0,0,1351,1,0,0,0,0,1353,
	1,0,0,0,0,1355,1,0,0,0,0,1357,1,0,0,0,0,1359,1,0,0,0,0,1361,1,0,0,0,0,1363,
	1,0,0,0,0,1365,1,0,0,0,0,1367,1,0,0,0,0,1369,1,0,0,0,0,1371,1,0,0,0,0,1373,
	1,0,0,0,0,1375,1,0,0,0,0,1377,1,0,0,0,0,1379,1,0,0,0,0,1381,1,0,0,0,0,1383,
	1,0,0,0,0,1385,1,0,0,0,0,1387,1,0,0,0,0,1389,1,0,0,0,0,1391,1,0,0,0,0,1393,
	1,0,0,0,0,1395,1,0,0,0,0,1397,1,0,0,0,0,1399,1,0,0,0,0,1401,1,0,0,0,0,1403,
	1,0,0,0,0,1405,1,0,0,0,0,1407,1,0,0,0,0,1409,1,0,0,0,0,1411,1,0,0,0,0,1413,
	1,0,0,0,0,1415,1,0,0,0,0,1417,1,0,0,0,0,1419,1,0,0,0,0,1421,1,0,0,0,0,1423,
	1,0,0,0,0,1425,1,0,0,0,0,1427,1,0,0,0,0,1429,1,0,0,0,0,1431,1,0,0,0,0,1433,
	1,0,0,0,0,1435,1,0,0,0,0,1437,1,0,0,0,0,1439,1,0,0,0,0,1441,1,0,0,0,0,1443,
	1,0,0,0,0,1445,1,0,0,0,0,1447,1,0,0,0,0,1449,1,0,0,0,0,1451,1,0,0,0,0,1453,
	1,0,0,0,0,1455,1,0,0,0,0,1457,1,0,0,0,0,1459,1,0,0,0,0,1461,1,0,0,0,0,1463,
	1,0,0,0,0,1465,1,0,0,0,0,1467,1,0,0,0,0,1469,1,0,0,0,0,1471,1,0,0,0,0,1473,
	1,0,0,0,0,1475,1,0,0,0,0,1477,1,0,0,0,0,1479,1,0,0,0,0,1481,1,0,0,0,0,1483,
	1,0,0,0,0,1485,1,0,0,0,0,1487,1,0,0,0,0,1489,1,0,0,0,0,1491,1,0,0,0,0,1493,
	1,0,0,0,0,1495,1,0,0,0,0,1497,1,0,0,0,0,1499,1,0,0,0,0,1501,1,0,0,0,0,1503,
	1,0,0,0,0,1505,1,0,0,0,0,1507,1,0,0,0,0,1509,1,0,0,0,0,1511,1,0,0,0,0,1513,
	1,0,0,0,0,1515,1,0,0,0,0,1517,1,0,0,0,0,1519,1,0,0,0,0,1521,1,0,0,0,0,1523,
	1,0,0,0,0,1525,1,0,0,0,0,1527,1,0,0,0,0,1529,1,0,0,0,0,1531,1,0,0,0,0,1533,
	1,0,0,0,0,1535,1,0,0,0,0,1537,1,0,0,0,0,1539,1,0,0,0,0,1541,1,0,0,0,0,1543,
	1,0,0,0,0,1545,1,0,0,0,0,1547,1,0,0,0,0,1549,1,0,0,0,0,1551,1,0,0,0,0,1553,
	1,0,0,0,0,1555,1,0,0,0,0,1557,1,0,0,0,0,1559,1,0,0,0,0,1561,1,0,0,0,0,1563,
	1,0,0,0,0,1565,1,0,0,0,0,1567,1,0,0,0,0,1569,1,0,0,0,0,1571,1,0,0,0,0,1573,
	1,0,0,0,0,1575,1,0,0,0,0,1577,1,0,0,0,0,1579,1,0,0,0,0,1581,1,0,0,0,0,1583,
	1,0,0,0,0,1585,1,0,0,0,0,1587,1,0,0,0,0,1589,1,0,0,0,0,1591,1,0,0,0,0,1593,
	1,0,0,0,0,1595,1,0,0,0,0,1597,1,0,0,0,0,1599,1,0,0,0,0,1601,1,0,0,0,0,1603,
	1,0,0,0,0,1605,1,0,0,0,0,1607,1,0,0,0,0,1609,1,0,0,0,0,1611,1,0,0,0,0,1613,
	1,0,0,0,0,1615,1,0,0,0,0,1617,1,0,0,0,0,1619,1,0,0,0,0,1621,1,0,0,0,0,1623,
	1,0,0,0,0,1625,1,0,0,0,0,1627,1,0,0,0,0,1629,1,0,0,0,0,1631,1,0,0,0,0,1633,
	1,0,0,0,0,1635,1,0,0,0,0,1637,1,0,0,0,0,1639,1,0,0,0,0,1641,1,0,0,0,0,1643,
	1,0,0,0,0,1645,1,0,0,0,0,1647,1,0,0,0,0,1649,1,0,0,0,0,1651,1,0,0,0,0,1653,
	1,0,0,0,0,1655,1,0,0,0,0,1657,1,0,0,0,0,1659,1,0,0,0,0,1667,1,0,0,0,0,1669,
	1,0,0,0,0,1671,1,0,0,0,0,1673,1,0,0,0,0,1675,1,0,0,0,0,1677,1,0,0,0,0,1679,
	1,0,0,0,0,1681,1,0,0,0,0,1683,1,0,0,0,1,1701,1,0,0,0,3,1703,1,0,0,0,5,1706,
	1,0,0,0,7,1710,1,0,0,0,9,1713,1,0,0,0,11,1715,1,0,0,0,13,1718,1,0,0,0,15,
	1720,1,0,0,0,17,1723,1,0,0,0,19,1728,1,0,0,0,21,1730,1,0,0,0,23,1732,1,
	0,0,0,25,1734,1,0,0,0,27,1736,1,0,0,0,29,1738,1,0,0,0,31,1740,1,0,0,0,33,
	1742,1,0,0,0,35,1745,1,0,0,0,37,1748,1,0,0,0,39,1751,1,0,0,0,41,1753,1,
	0,0,0,43,1755,1,0,0,0,45,1758,1,0,0,0,47,1760,1,0,0,0,49,1762,1,0,0,0,51,
	1764,1,0,0,0,53,1766,1,0,0,0,55,1768,1,0,0,0,57,1770,1,0,0,0,59,1772,1,
	0,0,0,61,1774,1,0,0,0,63,1776,1,0,0,0,65,1778,1,0,0,0,67,1783,1,0,0,0,69,
	1789,1,0,0,0,71,1791,1,0,0,0,73,1794,1,0,0,0,75,1797,1,0,0,0,77,1800,1,
	0,0,0,79,1802,1,0,0,0,81,1804,1,0,0,0,83,1806,1,0,0,0,85,1808,1,0,0,0,87,
	1810,1,0,0,0,89,1812,1,0,0,0,91,1814,1,0,0,0,93,1816,1,0,0,0,95,1818,1,
	0,0,0,97,1820,1,0,0,0,99,1822,1,0,0,0,101,1824,1,0,0,0,103,1826,1,0,0,0,
	105,1828,1,0,0,0,107,1830,1,0,0,0,109,1832,1,0,0,0,111,1834,1,0,0,0,113,
	1836,1,0,0,0,115,1838,1,0,0,0,117,1840,1,0,0,0,119,1842,1,0,0,0,121,1844,
	1,0,0,0,123,1846,1,0,0,0,125,1848,1,0,0,0,127,1850,1,0,0,0,129,1852,1,0,
	0,0,131,1854,1,0,0,0,133,1857,1,0,0,0,135,1861,1,0,0,0,137,1881,1,0,0,0,
	139,1900,1,0,0,0,141,1902,1,0,0,0,143,1905,1,0,0,0,145,1914,1,0,0,0,147,
	1924,1,0,0,0,149,1936,1,0,0,0,151,1947,1,0,0,0,153,1956,1,0,0,0,155,1963,
	1,0,0,0,157,1967,1,0,0,0,159,1976,1,0,0,0,161,1982,1,0,0,0,163,1990,1,0,
	0,0,165,2000,1,0,0,0,167,2010,1,0,0,0,169,2014,1,0,0,0,171,2020,1,0,0,0,
	173,2028,1,0,0,0,175,2037,1,0,0,0,177,2045,1,0,0,0,179,2049,1,0,0,0,181,
	2053,1,0,0,0,183,2056,1,0,0,0,185,2060,1,0,0,0,187,2066,1,0,0,0,189,2077,
	1,0,0,0,191,2080,1,0,0,0,193,2089,1,0,0,0,195,2105,1,0,0,0,197,2120,1,0,
	0,0,199,2135,1,0,0,0,201,2139,1,0,0,0,203,2146,1,0,0,0,205,2153,1,0,0,0,
	207,2159,1,0,0,0,209,2167,1,0,0,0,211,2174,1,0,0,0,213,2181,1,0,0,0,215,
	2188,1,0,0,0,217,2196,1,0,0,0,219,2205,1,0,0,0,221,2213,1,0,0,0,223,2217,
	1,0,0,0,225,2226,1,0,0,0,227,2231,1,0,0,0,229,2237,1,0,0,0,231,2245,1,0,
	0,0,233,2250,1,0,0,0,235,2255,1,0,0,0,237,2261,1,0,0,0,239,2264,1,0,0,0,
	241,2269,1,0,0,0,243,2275,1,0,0,0,245,2280,1,0,0,0,247,2288,1,0,0,0,249,
	2297,1,0,0,0,251,2302,1,0,0,0,253,2308,1,0,0,0,255,2321,1,0,0,0,257,2327,
	1,0,0,0,259,2334,1,0,0,0,261,2342,1,0,0,0,263,2351,1,0,0,0,265,2359,1,0,
	0,0,267,2371,1,0,0,0,269,2376,1,0,0,0,271,2385,1,0,0,0,273,2391,1,0,0,0,
	275,2398,1,0,0,0,277,2411,1,0,0,0,279,2418,1,0,0,0,281,2424,1,0,0,0,283,
	2433,1,0,0,0,285,2438,1,0,0,0,287,2446,1,0,0,0,289,2456,1,0,0,0,291,2464,
	1,0,0,0,293,2471,1,0,0,0,295,2483,1,0,0,0,297,2497,1,0,0,0,299,2505,1,0,
	0,0,301,2515,1,0,0,0,303,2522,1,0,0,0,305,2530,1,0,0,0,307,2541,1,0,0,0,
	309,2552,1,0,0,0,311,2565,1,0,0,0,313,2576,1,0,0,0,315,2586,1,0,0,0,317,
	2597,1,0,0,0,319,2608,1,0,0,0,321,2619,1,0,0,0,323,2638,1,0,0,0,325,2654,
	1,0,0,0,327,2672,1,0,0,0,329,2681,1,0,0,0,331,2689,1,0,0,0,333,2698,1,0,
	0,0,335,2712,1,0,0,0,337,2720,1,0,0,0,339,2727,1,0,0,0,341,2731,1,0,0,0,
	343,2738,1,0,0,0,345,2744,1,0,0,0,347,2749,1,0,0,0,349,2758,1,0,0,0,351,
	2767,1,0,0,0,353,2781,1,0,0,0,355,2795,1,0,0,0,357,2815,1,0,0,0,359,2828,
	1,0,0,0,361,2835,1,0,0,0,363,2847,1,0,0,0,365,2856,1,0,0,0,367,2865,1,0,
	0,0,369,2875,1,0,0,0,371,2884,1,0,0,0,373,2889,1,0,0,0,375,2898,1,0,0,0,
	377,2908,1,0,0,0,379,2918,1,0,0,0,381,2923,1,0,0,0,383,2936,1,0,0,0,385,
	2945,1,0,0,0,387,2961,1,0,0,0,389,2972,1,0,0,0,391,2983,1,0,0,0,393,2987,
	1,0,0,0,395,2998,1,0,0,0,397,3004,1,0,0,0,399,3016,1,0,0,0,401,3024,1,0,
	0,0,403,3032,1,0,0,0,405,3040,1,0,0,0,407,3054,1,0,0,0,409,3062,1,0,0,0,
	411,3070,1,0,0,0,413,3086,1,0,0,0,415,3093,1,0,0,0,417,3098,1,0,0,0,419,
	3107,1,0,0,0,421,3121,1,0,0,0,423,3135,1,0,0,0,425,3147,1,0,0,0,427,3157,
	1,0,0,0,429,3165,1,0,0,0,431,3173,1,0,0,0,433,3178,1,0,0,0,435,3187,1,0,
	0,0,437,3201,1,0,0,0,439,3205,1,0,0,0,441,3212,1,0,0,0,443,3215,1,0,0,0,
	445,3220,1,0,0,0,447,3225,1,0,0,0,449,3234,1,0,0,0,451,3244,1,0,0,0,453,
	3252,1,0,0,0,455,3257,1,0,0,0,457,3262,1,0,0,0,459,3269,1,0,0,0,461,3276,
	1,0,0,0,463,3285,1,0,0,0,465,3297,1,0,0,0,467,3301,1,0,0,0,469,3306,1,0,
	0,0,471,3319,1,0,0,0,473,3327,1,0,0,0,475,3334,1,0,0,0,477,3339,1,0,0,0,
	479,3345,1,0,0,0,481,3352,1,0,0,0,483,3360,1,0,0,0,485,3367,1,0,0,0,487,
	3374,1,0,0,0,489,3380,1,0,0,0,491,3386,1,0,0,0,493,3395,1,0,0,0,495,3403,
	1,0,0,0,497,3410,1,0,0,0,499,3415,1,0,0,0,501,3425,1,0,0,0,503,3433,1,0,
	0,0,505,3441,1,0,0,0,507,3449,1,0,0,0,509,3458,1,0,0,0,511,3470,1,0,0,0,
	513,3479,1,0,0,0,515,3485,1,0,0,0,517,3490,1,0,0,0,519,3497,1,0,0,0,521,
	3503,1,0,0,0,523,3512,1,0,0,0,525,3517,1,0,0,0,527,3534,1,0,0,0,529,3542,
	1,0,0,0,531,3548,1,0,0,0,533,3554,1,0,0,0,535,3563,1,0,0,0,537,3572,1,0,
	0,0,539,3578,1,0,0,0,541,3584,1,0,0,0,543,3593,1,0,0,0,545,3599,1,0,0,0,
	547,3607,1,0,0,0,549,3611,1,0,0,0,551,3618,1,0,0,0,553,3624,1,0,0,0,555,
	3629,1,0,0,0,557,3634,1,0,0,0,559,3643,1,0,0,0,561,3652,1,0,0,0,563,3657,
	1,0,0,0,565,3665,1,0,0,0,567,3676,1,0,0,0,569,3695,1,0,0,0,571,3714,1,0,
	0,0,573,3723,1,0,0,0,575,3734,1,0,0,0,577,3741,1,0,0,0,579,3747,1,0,0,0,
	581,3754,1,0,0,0,583,3760,1,0,0,0,585,3774,1,0,0,0,587,3782,1,0,0,0,589,
	3787,1,0,0,0,591,3794,1,0,0,0,593,3799,1,0,0,0,595,3813,1,0,0,0,597,3818,
	1,0,0,0,599,3824,1,0,0,0,601,3841,1,0,0,0,603,3853,1,0,0,0,605,3865,1,0,
	0,0,607,3870,1,0,0,0,609,3881,1,0,0,0,611,3884,1,0,0,0,613,3891,1,0,0,0,
	615,3909,1,0,0,0,617,3916,1,0,0,0,619,3924,1,0,0,0,621,3930,1,0,0,0,623,
	3937,1,0,0,0,625,3950,1,0,0,0,627,3956,1,0,0,0,629,3962,1,0,0,0,631,3974,
	1,0,0,0,633,3981,1,0,0,0,635,3995,1,0,0,0,637,4005,1,0,0,0,639,4013,1,0,
	0,0,641,4023,1,0,0,0,643,4032,1,0,0,0,645,4037,1,0,0,0,647,4041,1,0,0,0,
	649,4049,1,0,0,0,651,4052,1,0,0,0,653,4067,1,0,0,0,655,4083,1,0,0,0,657,
	4095,1,0,0,0,659,4098,1,0,0,0,661,4102,1,0,0,0,663,4105,1,0,0,0,665,4115,
	1,0,0,0,667,4122,1,0,0,0,669,4130,1,0,0,0,671,4135,1,0,0,0,673,4141,1,0,
	0,0,675,4146,1,0,0,0,677,4161,1,0,0,0,679,4165,1,0,0,0,681,4170,1,0,0,0,
	683,4179,1,0,0,0,685,4184,1,0,0,0,687,4192,1,0,0,0,689,4199,1,0,0,0,691,
	4205,1,0,0,0,693,4210,1,0,0,0,695,4215,1,0,0,0,697,4221,1,0,0,0,699,4226,
	1,0,0,0,701,4232,1,0,0,0,703,4239,1,0,0,0,705,4245,1,0,0,0,707,4256,1,0,
	0,0,709,4261,1,0,0,0,711,4266,1,0,0,0,713,4278,1,0,0,0,715,4295,1,0,0,0,
	717,4301,1,0,0,0,719,4309,1,0,0,0,721,4315,1,0,0,0,723,4320,1,0,0,0,725,
	4328,1,0,0,0,727,4333,1,0,0,0,729,4342,1,0,0,0,731,4351,1,0,0,0,733,4360,
	1,0,0,0,735,4365,1,0,0,0,737,4370,1,0,0,0,739,4383,1,0,0,0,741,4405,1,0,
	0,0,743,4418,1,0,0,0,745,4439,1,0,0,0,747,4452,1,0,0,0,749,4464,1,0,0,0,
	751,4480,1,0,0,0,753,4495,1,0,0,0,755,4511,1,0,0,0,757,4523,1,0,0,0,759,
	4543,1,0,0,0,761,4560,1,0,0,0,763,4578,1,0,0,0,765,4592,1,0,0,0,767,4608,
	1,0,0,0,769,4626,1,0,0,0,771,4642,1,0,0,0,773,4662,1,0,0,0,775,4677,1,0,
	0,0,777,4688,1,0,0,0,779,4719,1,0,0,0,781,4726,1,0,0,0,783,4746,1,0,0,0,
	785,4758,1,0,0,0,787,4783,1,0,0,0,789,4789,1,0,0,0,791,4814,1,0,0,0,793,
	4835,1,0,0,0,795,4844,1,0,0,0,797,4853,1,0,0,0,799,4873,1,0,0,0,801,4878,
	1,0,0,0,803,4899,1,0,0,0,805,4920,1,0,0,0,807,4929,1,0,0,0,809,4940,1,0,
	0,0,811,4950,1,0,0,0,813,4961,1,0,0,0,815,4968,1,0,0,0,817,4975,1,0,0,0,
	819,4981,1,0,0,0,821,4994,1,0,0,0,823,5006,1,0,0,0,825,5011,1,0,0,0,827,
	5023,1,0,0,0,829,5031,1,0,0,0,831,5050,1,0,0,0,833,5064,1,0,0,0,835,5071,
	1,0,0,0,837,5080,1,0,0,0,839,5085,1,0,0,0,841,5090,1,0,0,0,843,5099,1,0,
	0,0,845,5106,1,0,0,0,847,5110,1,0,0,0,849,5116,1,0,0,0,851,5132,1,0,0,0,
	853,5143,1,0,0,0,855,5156,1,0,0,0,857,5162,1,0,0,0,859,5174,1,0,0,0,861,
	5180,1,0,0,0,863,5185,1,0,0,0,865,5194,1,0,0,0,867,5202,1,0,0,0,869,5215,
	1,0,0,0,871,5221,1,0,0,0,873,5227,1,0,0,0,875,5238,1,0,0,0,877,5242,1,0,
	0,0,879,5249,1,0,0,0,881,5253,1,0,0,0,883,5258,1,0,0,0,885,5268,1,0,0,0,
	887,5273,1,0,0,0,889,5286,1,0,0,0,891,5291,1,0,0,0,893,5296,1,0,0,0,895,
	5299,1,0,0,0,897,5307,1,0,0,0,899,5326,1,0,0,0,901,5331,1,0,0,0,903,5339,
	1,0,0,0,905,5347,1,0,0,0,907,5356,1,0,0,0,909,5364,1,0,0,0,911,5371,1,0,
	0,0,913,5385,1,0,0,0,915,5388,1,0,0,0,917,5392,1,0,0,0,919,5399,1,0,0,0,
	921,5405,1,0,0,0,923,5410,1,0,0,0,925,5419,1,0,0,0,927,5436,1,0,0,0,929,
	5444,1,0,0,0,931,5451,1,0,0,0,933,5462,1,0,0,0,935,5468,1,0,0,0,937,5471,
	1,0,0,0,939,5477,1,0,0,0,941,5485,1,0,0,0,943,5489,1,0,0,0,945,5495,1,0,
	0,0,947,5505,1,0,0,0,949,5510,1,0,0,0,951,5517,1,0,0,0,953,5525,1,0,0,0,
	955,5538,1,0,0,0,957,5549,1,0,0,0,959,5559,1,0,0,0,961,5568,1,0,0,0,963,
	5574,1,0,0,0,965,5582,1,0,0,0,967,5594,1,0,0,0,969,5601,1,0,0,0,971,5607,
	1,0,0,0,973,5615,1,0,0,0,975,5620,1,0,0,0,977,5630,1,0,0,0,979,5640,1,0,
	0,0,981,5650,1,0,0,0,983,5658,1,0,0,0,985,5667,1,0,0,0,987,5672,1,0,0,0,
	989,5680,1,0,0,0,991,5691,1,0,0,0,993,5701,1,0,0,0,995,5709,1,0,0,0,997,
	5721,1,0,0,0,999,5729,1,0,0,0,1001,5738,1,0,0,0,1003,5744,1,0,0,0,1005,
	5750,1,0,0,0,1007,5758,1,0,0,0,1009,5764,1,0,0,0,1011,5770,1,0,0,0,1013,
	5776,1,0,0,0,1015,5782,1,0,0,0,1017,5792,1,0,0,0,1019,5797,1,0,0,0,1021,
	5808,1,0,0,0,1023,5813,1,0,0,0,1025,5821,1,0,0,0,1027,5829,1,0,0,0,1029,
	5839,1,0,0,0,1031,5856,1,0,0,0,1033,5866,1,0,0,0,1035,5877,1,0,0,0,1037,
	5884,1,0,0,0,1039,5890,1,0,0,0,1041,5899,1,0,0,0,1043,5914,1,0,0,0,1045,
	5928,1,0,0,0,1047,5941,1,0,0,0,1049,5949,1,0,0,0,1051,5956,1,0,0,0,1053,
	5963,1,0,0,0,1055,5970,1,0,0,0,1057,5981,1,0,0,0,1059,5988,1,0,0,0,1061,
	5999,1,0,0,0,1063,6006,1,0,0,0,1065,6014,1,0,0,0,1067,6026,1,0,0,0,1069,
	6043,1,0,0,0,1071,6064,1,0,0,0,1073,6084,1,0,0,0,1075,6108,1,0,0,0,1077,
	6133,1,0,0,0,1079,6162,1,0,0,0,1081,6184,1,0,0,0,1083,6192,1,0,0,0,1085,
	6198,1,0,0,0,1087,6207,1,0,0,0,1089,6215,1,0,0,0,1091,6224,1,0,0,0,1093,
	6231,1,0,0,0,1095,6249,1,0,0,0,1097,6257,1,0,0,0,1099,6265,1,0,0,0,1101,
	6273,1,0,0,0,1103,6280,1,0,0,0,1105,6286,1,0,0,0,1107,6294,1,0,0,0,1109,
	6303,1,0,0,0,1111,6310,1,0,0,0,1113,6318,1,0,0,0,1115,6326,1,0,0,0,1117,
	6331,1,0,0,0,1119,6341,1,0,0,0,1121,6352,1,0,0,0,1123,6356,1,0,0,0,1125,
	6362,1,0,0,0,1127,6372,1,0,0,0,1129,6381,1,0,0,0,1131,6390,1,0,0,0,1133,
	6402,1,0,0,0,1135,6412,1,0,0,0,1137,6431,1,0,0,0,1139,6438,1,0,0,0,1141,
	6447,1,0,0,0,1143,6454,1,0,0,0,1145,6464,1,0,0,0,1147,6474,1,0,0,0,1149,
	6487,1,0,0,0,1151,6494,1,0,0,0,1153,6502,1,0,0,0,1155,6509,1,0,0,0,1157,
	6524,1,0,0,0,1159,6538,1,0,0,0,1161,6542,1,0,0,0,1163,6550,1,0,0,0,1165,
	6556,1,0,0,0,1167,6561,1,0,0,0,1169,6570,1,0,0,0,1171,6577,1,0,0,0,1173,
	6584,1,0,0,0,1175,6591,1,0,0,0,1177,6597,1,0,0,0,1179,6602,1,0,0,0,1181,
	6611,1,0,0,0,1183,6620,1,0,0,0,1185,6627,1,0,0,0,1187,6634,1,0,0,0,1189,
	6641,1,0,0,0,1191,6648,1,0,0,0,1193,6655,1,0,0,0,1195,6663,1,0,0,0,1197,
	6672,1,0,0,0,1199,6685,1,0,0,0,1201,6694,1,0,0,0,1203,6705,1,0,0,0,1205,
	6721,1,0,0,0,1207,6741,1,0,0,0,1209,6758,1,0,0,0,1211,6773,1,0,0,0,1213,
	6791,1,0,0,0,1215,6802,1,0,0,0,1217,6822,1,0,0,0,1219,6835,1,0,0,0,1221,
	6852,1,0,0,0,1223,6856,1,0,0,0,1225,6867,1,0,0,0,1227,6871,1,0,0,0,1229,
	6880,1,0,0,0,1231,6889,1,0,0,0,1233,6896,1,0,0,0,1235,6902,1,0,0,0,1237,
	6920,1,0,0,0,1239,6937,1,0,0,0,1241,6956,1,0,0,0,1243,6963,1,0,0,0,1245,
	6976,1,0,0,0,1247,6984,1,0,0,0,1249,6996,1,0,0,0,1251,7001,1,0,0,0,1253,
	7006,1,0,0,0,1255,7014,1,0,0,0,1257,7022,1,0,0,0,1259,7036,1,0,0,0,1261,
	7043,1,0,0,0,1263,7059,1,0,0,0,1265,7068,1,0,0,0,1267,7076,1,0,0,0,1269,
	7090,1,0,0,0,1271,7103,1,0,0,0,1273,7111,1,0,0,0,1275,7122,1,0,0,0,1277,
	7127,1,0,0,0,1279,7133,1,0,0,0,1281,7141,1,0,0,0,1283,7147,1,0,0,0,1285,
	7156,1,0,0,0,1287,7165,1,0,0,0,1289,7178,1,0,0,0,1291,7185,1,0,0,0,1293,
	7196,1,0,0,0,1295,7216,1,0,0,0,1297,7222,1,0,0,0,1299,7237,1,0,0,0,1301,
	7248,1,0,0,0,1303,7258,1,0,0,0,1305,7268,1,0,0,0,1307,7279,1,0,0,0,1309,
	7284,1,0,0,0,1311,7289,1,0,0,0,1313,7294,1,0,0,0,1315,7304,1,0,0,0,1317,
	7318,1,0,0,0,1319,7333,1,0,0,0,1321,7338,1,0,0,0,1323,7347,1,0,0,0,1325,
	7355,1,0,0,0,1327,7364,1,0,0,0,1329,7367,1,0,0,0,1331,7376,1,0,0,0,1333,
	7388,1,0,0,0,1335,7397,1,0,0,0,1337,7405,1,0,0,0,1339,7411,1,0,0,0,1341,
	7416,1,0,0,0,1343,7425,1,0,0,0,1345,7431,1,0,0,0,1347,7436,1,0,0,0,1349,
	7448,1,0,0,0,1351,7460,1,0,0,0,1353,7470,1,0,0,0,1355,7479,1,0,0,0,1357,
	7496,1,0,0,0,1359,7501,1,0,0,0,1361,7509,1,0,0,0,1363,7519,1,0,0,0,1365,
	7525,1,0,0,0,1367,7532,1,0,0,0,1369,7540,1,0,0,0,1371,7547,1,0,0,0,1373,
	7556,1,0,0,0,1375,7562,1,0,0,0,1377,7569,1,0,0,0,1379,7577,1,0,0,0,1381,
	7583,1,0,0,0,1383,7598,1,0,0,0,1385,7603,1,0,0,0,1387,7611,1,0,0,0,1389,
	7615,1,0,0,0,1391,7621,1,0,0,0,1393,7630,1,0,0,0,1395,7644,1,0,0,0,1397,
	7653,1,0,0,0,1399,7665,1,0,0,0,1401,7672,1,0,0,0,1403,7678,1,0,0,0,1405,
	7688,1,0,0,0,1407,7696,1,0,0,0,1409,7711,1,0,0,0,1411,7721,1,0,0,0,1413,
	7731,1,0,0,0,1415,7739,1,0,0,0,1417,7748,1,0,0,0,1419,7758,1,0,0,0,1421,
	7763,1,0,0,0,1423,7772,1,0,0,0,1425,7777,1,0,0,0,1427,7786,1,0,0,0,1429,
	7791,1,0,0,0,1431,7805,1,0,0,0,1433,7810,1,0,0,0,1435,7816,1,0,0,0,1437,
	7822,1,0,0,0,1439,7827,1,0,0,0,1441,7835,1,0,0,0,1443,7840,1,0,0,0,1445,
	7848,1,0,0,0,1447,7854,1,0,0,0,1449,7859,1,0,0,0,1451,7862,1,0,0,0,1453,
	7867,1,0,0,0,1455,7871,1,0,0,0,1457,7875,1,0,0,0,1459,7886,1,0,0,0,1461,
	7891,1,0,0,0,1463,7900,1,0,0,0,1465,7909,1,0,0,0,1467,7915,1,0,0,0,1469,
	7922,1,0,0,0,1471,7933,1,0,0,0,1473,7942,1,0,0,0,1475,7950,1,0,0,0,1477,
	7961,1,0,0,0,1479,7972,1,0,0,0,1481,7988,1,0,0,0,1483,8003,1,0,0,0,1485,
	8007,1,0,0,0,1487,8013,1,0,0,0,1489,8021,1,0,0,0,1491,8029,1,0,0,0,1493,
	8039,1,0,0,0,1495,8053,1,0,0,0,1497,8064,1,0,0,0,1499,8073,1,0,0,0,1501,
	8081,1,0,0,0,1503,8088,1,0,0,0,1505,8099,1,0,0,0,1507,8111,1,0,0,0,1509,
	8120,1,0,0,0,1511,8133,1,0,0,0,1513,8144,1,0,0,0,1515,8152,1,0,0,0,1517,
	8157,1,0,0,0,1519,8169,1,0,0,0,1521,8175,1,0,0,0,1523,8186,1,0,0,0,1525,
	8193,1,0,0,0,1527,8200,1,0,0,0,1529,8208,1,0,0,0,1531,8214,1,0,0,0,1533,
	8228,1,0,0,0,1535,8239,1,0,0,0,1537,8245,1,0,0,0,1539,8254,1,0,0,0,1541,
	8266,1,0,0,0,1543,8272,1,0,0,0,1545,8283,1,0,0,0,1547,8291,1,0,0,0,1549,
	8298,1,0,0,0,1551,8310,1,0,0,0,1553,8318,1,0,0,0,1555,8330,1,0,0,0,1557,
	8336,1,0,0,0,1559,8345,1,0,0,0,1561,8352,1,0,0,0,1563,8358,1,0,0,0,1565,
	8375,1,0,0,0,1567,8385,1,0,0,0,1569,8393,1,0,0,0,1571,8399,1,0,0,0,1573,
	8423,1,0,0,0,1575,8450,1,0,0,0,1577,8459,1,0,0,0,1579,8471,1,0,0,0,1581,
	8484,1,0,0,0,1583,8498,1,0,0,0,1585,8509,1,0,0,0,1587,8519,1,0,0,0,1589,
	8530,1,0,0,0,1591,8548,1,0,0,0,1593,8564,1,0,0,0,1595,8582,1,0,0,0,1597,
	8590,1,0,0,0,1599,8600,1,0,0,0,1601,8609,1,0,0,0,1603,8617,1,0,0,0,1605,
	8622,1,0,0,0,1607,8641,1,0,0,0,1609,8651,1,0,0,0,1611,8658,1,0,0,0,1613,
	8662,1,0,0,0,1615,8670,1,0,0,0,1617,8678,1,0,0,0,1619,8708,1,0,0,0,1621,
	8739,1,0,0,0,1623,8762,1,0,0,0,1625,8787,1,0,0,0,1627,8794,1,0,0,0,1629,
	8801,1,0,0,0,1631,8808,1,0,0,0,1633,8815,1,0,0,0,1635,8822,1,0,0,0,1637,
	8839,1,0,0,0,1639,8856,1,0,0,0,1641,8871,1,0,0,0,1643,8885,1,0,0,0,1645,
	8900,1,0,0,0,1647,8916,1,0,0,0,1649,8934,1,0,0,0,1651,8949,1,0,0,0,1653,
	8954,1,0,0,0,1655,8956,1,0,0,0,1657,8998,1,0,0,0,1659,9000,1,0,0,0,1661,
	9003,1,0,0,0,1663,9005,1,0,0,0,1665,9007,1,0,0,0,1667,9009,1,0,0,0,1669,
	9036,1,0,0,0,1671,9053,1,0,0,0,1673,9057,1,0,0,0,1675,9076,1,0,0,0,1677,
	9084,1,0,0,0,1679,9108,1,0,0,0,1681,9112,1,0,0,0,1683,9121,1,0,0,0,1685,
	9135,1,0,0,0,1687,9138,1,0,0,0,1689,9143,1,0,0,0,1691,9147,1,0,0,0,1693,
	9150,1,0,0,0,1695,9155,1,0,0,0,1697,9157,1,0,0,0,1699,9159,1,0,0,0,1701,
	1702,5,61,0,0,1702,2,1,0,0,0,1703,1704,5,58,0,0,1704,1705,5,61,0,0,1705,
	4,1,0,0,0,1706,1707,5,60,0,0,1707,1708,5,61,0,0,1708,1709,5,62,0,0,1709,
	6,1,0,0,0,1710,1711,5,62,0,0,1711,1712,5,61,0,0,1712,8,1,0,0,0,1713,1714,
	5,62,0,0,1714,10,1,0,0,0,1715,1716,5,60,0,0,1716,1717,5,61,0,0,1717,12,
	1,0,0,0,1718,1719,5,60,0,0,1719,14,1,0,0,0,1720,1721,5,33,0,0,1721,1722,
	5,61,0,0,1722,16,1,0,0,0,1723,1724,5,60,0,0,1724,1725,5,62,0,0,1725,1726,
	1,0,0,0,1726,1727,6,8,0,0,1727,18,1,0,0,0,1728,1729,5,43,0,0,1729,20,1,
	0,0,0,1730,1731,5,45,0,0,1731,22,1,0,0,0,1732,1733,5,42,0,0,1733,24,1,0,
	0,0,1734,1735,5,47,0,0,1735,26,1,0,0,0,1736,1737,5,37,0,0,1737,28,1,0,0,
	0,1738,1739,5,33,0,0,1739,30,1,0,0,0,1740,1741,5,126,0,0,1741,32,1,0,0,
	0,1742,1743,5,60,0,0,1743,1744,5,60,0,0,1744,34,1,0,0,0,1745,1746,5,62,
	0,0,1746,1747,5,62,0,0,1747,36,1,0,0,0,1748,1749,5,38,0,0,1749,1750,5,38,
	0,0,1750,38,1,0,0,0,1751,1752,5,38,0,0,1752,40,1,0,0,0,1753,1754,5,94,0,
	0,1754,42,1,0,0,0,1755,1756,5,124,0,0,1756,1757,5,124,0,0,1757,44,1,0,0,
	0,1758,1759,5,124,0,0,1759,46,1,0,0,0,1760,1761,5,46,0,0,1761,48,1,0,0,
	0,1762,1763,5,44,0,0,1763,50,1,0,0,0,1764,1765,5,59,0,0,1765,52,1,0,0,0,
	1766,1767,5,58,0,0,1767,54,1,0,0,0,1768,1769,5,40,0,0,1769,56,1,0,0,0,1770,
	1771,5,41,0,0,1771,58,1,0,0,0,1772,1773,5,123,0,0,1773,60,1,0,0,0,1774,
	1775,5,125,0,0,1775,62,1,0,0,0,1776,1777,5,95,0,0,1777,64,1,0,0,0,1778,
	1779,5,45,0,0,1779,1780,5,62,0,0,1780,1781,1,0,0,0,1781,1782,4,32,0,0,1782,
	66,1,0,0,0,1783,1784,5,45,0,0,1784,1785,5,62,0,0,1785,1786,5,62,0,0,1786,
	1787,1,0,0,0,1787,1788,4,33,1,0,1788,68,1,0,0,0,1789,1790,5,64,0,0,1790,
	70,1,0,0,0,1791,1792,5,64,0,0,1792,1793,3,1689,844,0,1793,72,1,0,0,0,1794,
	1795,5,64,0,0,1795,1796,5,64,0,0,1796,74,1,0,0,0,1797,1798,5,92,0,0,1798,
	1799,5,78,0,0,1799,76,1,0,0,0,1800,1801,5,63,0,0,1801,78,1,0,0,0,1802,1803,
	7,0,0,0,1803,80,1,0,0,0,1804,1805,7,1,0,0,1805,82,1,0,0,0,1806,1807,7,2,
	0,0,1807,84,1,0,0,0,1808,1809,7,3,0,0,1809,86,1,0,0,0,1810,1811,7,4,0,0,
	1811,88,1,0,0,0,1812,1813,7,5,0,0,1813,90,1,0,0,0,1814,1815,7,6,0,0,1815,
	92,1,0,0,0,1816,1817,7,7,0,0,1817,94,1,0,0,0,1818,1819,7,8,0,0,1819,96,
	1,0,0,0,1820,1821,7,9,0,0,1821,98,1,0,0,0,1822,1823,7,10,0,0,1823,100,1,
	0,0,0,1824,1825,7,11,0,0,1825,102,1,0,0,0,1826,1827,7,12,0,0,1827,104,1,
	0,0,0,1828,1829,7,13,0,0,1829,106,1,0,0,0,1830,1831,7,14,0,0,1831,108,1,
	0,0,0,1832,1833,7,15,0,0,1833,110,1,0,0,0,1834,1835,7,16,0,0,1835,112,1,
	0,0,0,1836,1837,7,17,0,0,1837,114,1,0,0,0,1838,1839,7,18,0,0,1839,116,1,
	0,0,0,1840,1841,7,19,0,0,1841,118,1,0,0,0,1842,1843,7,20,0,0,1843,120,1,
	0,0,0,1844,1845,7,21,0,0,1845,122,1,0,0,0,1846,1847,7,22,0,0,1847,124,1,
	0,0,0,1848,1849,7,23,0,0,1849,126,1,0,0,0,1850,1851,7,24,0,0,1851,128,1,
	0,0,0,1852,1853,7,25,0,0,1853,130,1,0,0,0,1854,1855,7,26,0,0,1855,132,1,
	0,0,0,1856,1858,3,131,65,0,1857,1856,1,0,0,0,1858,1859,1,0,0,0,1859,1857,
	1,0,0,0,1859,1860,1,0,0,0,1860,134,1,0,0,0,1861,1862,7,27,0,0,1862,136,
	1,0,0,0,1863,1864,5,48,0,0,1864,1865,5,120,0,0,1865,1867,1,0,0,0,1866,1868,
	3,135,67,0,1867,1866,1,0,0,0,1868,1869,1,0,0,0,1869,1867,1,0,0,0,1869,1870,
	1,0,0,0,1870,1882,1,0,0,0,1871,1872,5,120,0,0,1872,1873,5,39,0,0,1873,1875,
	1,0,0,0,1874,1876,3,135,67,0,1875,1874,1,0,0,0,1876,1877,1,0,0,0,1877,1875,
	1,0,0,0,1877,1878,1,0,0,0,1878,1879,1,0,0,0,1879,1880,5,39,0,0,1880,1882,
	1,0,0,0,1881,1863,1,0,0,0,1881,1871,1,0,0,0,1882,138,1,0,0,0,1883,1884,
	5,48,0,0,1884,1885,5,98,0,0,1885,1887,1,0,0,0,1886,1888,7,28,0,0,1887,1886,
	1,0,0,0,1888,1889,1,0,0,0,1889,1887,1,0,0,0,1889,1890,1,0,0,0,1890,1901,
	1,0,0,0,1891,1892,5,98,0,0,1892,1893,5,39,0,0,1893,1895,1,0,0,0,1894,1896,
	7,28,0,0,1895,1894,1,0,0,0,1896,1897,1,0,0,0,1897,1895,1,0,0,0,1897,1898,
	1,0,0,0,1898,1899,1,0,0,0,1899,1901,5,39,0,0,1900,1883,1,0,0,0,1900,1891,
	1,0,0,0,1901,140,1,0,0,0,1902,1903,3,133,66,0,1903,142,1,0,0,0,1904,1906,
	3,133,66,0,1905,1904,1,0,0,0,1905,1906,1,0,0,0,1906,1907,1,0,0,0,1907,1908,
	3,47,23,0,1908,1909,3,133,66,0,1909,144,1,0,0,0,1910,1912,3,133,66,0,1911,
	1910,1,0,0,0,1911,1912,1,0,0,0,1912,1913,1,0,0,0,1913,1915,3,47,23,0,1914,
	1911,1,0,0,0,1914,1915,1,0,0,0,1915,1916,1,0,0,0,1916,1917,3,133,66,0,1917,
	1920,7,4,0,0,1918,1921,3,21,10,0,1919,1921,3,19,9,0,1920,1918,1,0,0,0,1920,
	1919,1,0,0,0,1920,1921,1,0,0,0,1921,1922,1,0,0,0,1922,1923,3,133,66,0,1923,
	146,1,0,0,0,1924,1925,3,47,23,0,1925,1929,3,1697,848,0,1926,1928,3,1695,
	847,0,1927,1926,1,0,0,0,1928,1931,1,0,0,0,1929,1927,1,0,0,0,1929,1930,1,
	0,0,0,1930,1932,1,0,0,0,1931,1929,1,0,0,0,1932,1933,6,73,1,0,1933,1934,
	1,0,0,0,1934,1935,6,73,2,0,1935,148,1,0,0,0,1936,1937,3,79,39,0,1937,1938,
	3,83,41,0,1938,1939,3,83,41,0,1939,1940,3,87,43,0,1940,1941,3,115,57,0,
	1941,1942,3,115,57,0,1942,1943,3,95,47,0,1943,1944,3,81,40,0,1944,1945,
	3,101,50,0,1945,1946,3,87,43,0,1946,150,1,0,0,0,1947,1948,3,79,39,0,1948,
	1949,3,83,41,0,1949,1950,3,83,41,0,1950,1951,3,107,53,0,1951,1952,3,119,
	59,0,1952,1953,3,105,52,0,1953,1954,3,117,58,0,1954,1955,4,75,2,0,1955,
	152,1,0,0,0,1956,1957,3,79,39,0,1957,1958,3,83,41,0,1958,1959,3,117,58,
	0,1959,1960,3,95,47,0,1960,1961,3,107,53,0,1961,1962,3,105,52,0,1962,154,
	1,0,0,0,1963,1964,3,79,39,0,1964,1965,3,85,42,0,1965,1966,3,85,42,0,1966,
	156,1,0,0,0,1967,1968,3,79,39,0,1968,1969,3,85,42,0,1969,1970,3,85,42,0,
	1970,1971,3,85,42,0,1971,1972,3,79,39,0,1972,1973,3,117,58,0,1973,1974,
	3,87,43,0,1974,1975,6,78,3,0,1975,158,1,0,0,0,1976,1977,3,79,39,0,1977,
	1978,3,89,44,0,1978,1979,3,117,58,0,1979,1980,3,87,43,0,1980,1981,3,113,
	56,0,1981,160,1,0,0,0,1982,1983,3,79,39,0,1983,1984,3,91,45,0,1984,1985,
	3,79,39,0,1985,1986,3,95,47,0,1986,1987,3,105,52,0,1987,1988,3,115,57,0,
	1988,1989,3,117,58,0,1989,162,1,0,0,0,1990,1991,3,79,39,0,1991,1992,3,91,
	45,0,1992,1993,3,91,45,0,1993,1994,3,113,56,0,1994,1995,3,87,43,0,1995,
	1996,3,91,45,0,1996,1997,3,79,39,0,1997,1998,3,117,58,0,1998,1999,3,87,
	43,0,1999,164,1,0,0,0,2000,2001,3,79,39,0,2001,2002,3,101,50,0,2002,2003,
	3,91,45,0,2003,2004,3,107,53,0,2004,2005,3,113,56,0,2005,2006,3,95,47,0,
	2006,2007,3,117,58,0,2007,2008,3,93,46,0,2008,2009,3,103,51,0,2009,166,
	1,0,0,0,2010,2011,3,79,39,0,2011,2012,3,101,50,0,2012,2013,3,101,50,0,2013,
	168,1,0,0,0,2014,2015,3,79,39,0,2015,2016,3,101,50,0,2016,2017,3,117,58,
	0,2017,2018,3,87,43,0,2018,2019,3,113,56,0,2019,170,1,0,0,0,2020,2021,3,
	79,39,0,2021,2022,3,101,50,0,2022,2023,3,123,61,0,2023,2024,3,79,39,0,2024,
	2025,3,127,63,0,2025,2026,3,115,57,0,2026,2027,4,85,3,0,2027,172,1,0,0,
	0,2028,2029,3,79,39,0,2029,2030,3,105,52,0,2030,2031,3,79,39,0,2031,2032,
	3,101,50,0,2032,2033,3,127,63,0,2033,2034,3,115,57,0,2034,2035,3,87,43,
	0,2035,2036,4,86,4,0,2036,174,1,0,0,0,2037,2038,3,79,39,0,2038,2039,3,105,
	52,0,2039,2040,3,79,39,0,2040,2041,3,101,50,0,2041,2042,3,127,63,0,2042,
	2043,3,129,64,0,2043,2044,3,87,43,0,2044,176,1,0,0,0,2045,2046,3,79,39,
	0,2046,2047,3,105,52,0,2047,2048,3,85,42,0,2048,178,1,0,0,0,2049,2050,3,
	79,39,0,2050,2051,3,105,52,0,2051,2052,3,127,63,0,2052,180,1,0,0,0,2053,
	2054,3,79,39,0,2054,2055,3,115,57,0,2055,182,1,0,0,0,2056,2057,3,79,39,
	0,2057,2058,3,115,57,0,2058,2059,3,83,41,0,2059,184,1,0,0,0,2060,2061,3,
	79,39,0,2061,2062,3,115,57,0,2062,2063,3,83,41,0,2063,2064,3,95,47,0,2064,
	2065,3,95,47,0,2065,186,1,0,0,0,2066,2067,3,79,39,0,2067,2068,3,115,57,
	0,2068,2069,3,87,43,0,2069,2070,3,105,52,0,2070,2071,3,115,57,0,2071,2072,
	3,95,47,0,2072,2073,3,117,58,0,2073,2074,3,95,47,0,2074,2075,3,121,60,0,
	2075,2076,3,87,43,0,2076,188,1,0,0,0,2077,2078,3,79,39,0,2078,2079,3,117,
	58,0,2079,190,1,0,0,0,2080,2081,3,79,39,0,2081,2082,3,119,59,0,2082,2083,
	3,117,58,0,2083,2084,3,93,46,0,2084,2085,3,107,53,0,2085,2086,3,113,56,
	0,2086,2087,3,115,57,0,2087,2088,4,95,5,0,2088,192,1,0,0,0,2089,2090,3,
	79,39,0,2090,2091,3,119,59,0,2091,2092,3,117,58,0,2092,2093,3,107,53,0,
	2093,2094,3,87,43,0,2094,2095,3,125,62,0,2095,2096,3,117,58,0,2096,2097,
	3,87,43,0,2097,2098,3,105,52,0,2098,2099,3,85,42,0,2099,2100,5,95,0,0,2100,
	2101,3,115,57,0,2101,2102,3,95,47,0,2102,2103,3,129,64,0,2103,2104,3,87,
	43,0,2104,194,1,0,0,0,2105,2106,3,79,39,0,2106,2107,3,119,59,0,2107,2108,
	3,117,58,0,2108,2109,3,107,53,0,2109,2110,5,95,0,0,2110,2111,3,95,47,0,
	2111,2112,3,105,52,0,2112,2113,3,83,41,0,2113,2114,3,113,56,0,2114,2115,
	3,87,43,0,2115,2116,3,103,51,0,2116,2117,3,87,43,0,2117,2118,3,105,52,0,
	2118,2119,3,117,58,0,2119,196,1,0,0,0,2120,2121,3,79,39,0,2121,2122,3,121,
	60,0,2122,2123,3,91,45,0,2123,2124,5,95,0,0,2124,2125,3,113,56,0,2125,2126,
	3,107,53,0,2126,2127,3,123,61,0,2127,2128,5,95,0,0,2128,2129,3,101,50,0,
	2129,2130,3,87,43,0,2130,2131,3,105,52,0,2131,2132,3,91,45,0,2132,2133,
	3,117,58,0,2133,2134,3,93,46,0,2134,198,1,0,0,0,2135,2136,3,79,39,0,2136,
	2137,3,121,60,0,2137,2138,3,91,45,0,2138,200,1,0,0,0,2139,2140,3,81,40,
	0,2140,2141,3,79,39,0,2141,2142,3,83,41,0,2142,2143,3,99,49,0,2143,2144,
	3,119,59,0,2144,2145,3,109,54,0,2145,202,1,0,0,0,2146,2147,3,81,40,0,2147,
	2148,3,87,43,0,2148,2149,3,89,44,0,2149,2150,3,107,53,0,2150,2151,3,113,
	56,0,2151,2152,3,87,43,0,2152,204,1,0,0,0,2153,2154,3,81,40,0,2154,2155,
	3,87,43,0,2155,2156,3,91,45,0,2156,2157,3,95,47,0,2157,2158,3,105,52,0,
	2158,206,1,0,0,0,2159,2160,3,81,40,0,2160,2161,3,87,43,0,2161,2162,3,117,
	58,0,2162,2163,3,123,61,0,2163,2164,3,87,43,0,2164,2165,3,87,43,0,2165,
	2166,3,105,52,0,2166,208,1,0,0,0,2167,2168,3,81,40,0,2168,2169,3,95,47,
	0,2169,2170,3,91,45,0,2170,2171,3,95,47,0,2171,2172,3,105,52,0,2172,2173,
	3,117,58,0,2173,210,1,0,0,0,2174,2175,3,81,40,0,2175,2176,3,95,47,0,2176,
	2177,3,105,52,0,2177,2178,3,79,39,0,2178,2179,3,113,56,0,2179,2180,3,127,
	63,0,2180,212,1,0,0,0,2181,2182,3,81,40,0,2182,2183,3,95,47,0,2183,2184,
	3,105,52,0,2184,2185,3,101,50,0,2185,2186,3,107,53,0,2186,2187,3,91,45,
	0,2187,214,1,0,0,0,2188,2189,3,81,40,0,2189,2190,3,95,47,0,2190,2191,3,
	105,52,0,2191,2192,5,95,0,0,2192,2193,3,105,52,0,2193,2194,3,119,59,0,2194,
	2195,3,103,51,0,2195,216,1,0,0,0,2196,2197,3,81,40,0,2197,2198,3,95,47,
	0,2198,2199,3,117,58,0,2199,2200,5,95,0,0,2200,2201,3,79,39,0,2201,2202,
	3,105,52,0,2202,2203,3,85,42,0,2203,2204,6,108,4,0,2204,218,1,0,0,0,2205,
	2206,3,81,40,0,2206,2207,3,95,47,0,2207,2208,3,117,58,0,2208,2209,5,95,
	0,0,2209,2210,3,107,53,0,2210,2211,3,113,56,0,2211,2212,6,109,5,0,2212,
	220,1,0,0,0,2213,2214,3,81,40,0,2214,2215,3,95,47,0,2215,2216,3,117,58,
	0,2216,222,1,0,0,0,2217,2218,3,81,40,0,2218,2219,3,95,47,0,2219,2220,3,
	117,58,0,2220,2221,5,95,0,0,2221,2222,3,125,62,0,2222,2223,3,107,53,0,2223,
	2224,3,113,56,0,2224,2225,6,111,6,0,2225,224,1,0,0,0,2226,2227,3,81,40,
	0,2227,2228,3,101,50,0,2228,2229,3,107,53,0,2229,2230,3,81,40,0,2230,226,
	1,0,0,0,2231,2232,3,81,40,0,2232,2233,3,101,50,0,2233,2234,3,107,53,0,2234,
	2235,3,83,41,0,2235,2236,3,99,49,0,2236,228,1,0,0,0,2237,2238,3,81,40,0,
	2238,2239,3,107,53,0,2239,2240,3,107,53,0,2240,2241,3,101,50,0,2241,2242,
	3,87,43,0,2242,2243,3,79,39,0,2243,2244,3,105,52,0,2244,230,1,0,0,0,2245,
	2246,3,81,40,0,2246,2247,3,107,53,0,2247,2248,3,107,53,0,2248,2249,3,101,
	50,0,2249,232,1,0,0,0,2250,2251,3,81,40,0,2251,2252,3,107,53,0,2252,2253,
	3,117,58,0,2253,2254,3,93,46,0,2254,234,1,0,0,0,2255,2256,3,81,40,0,2256,
	2257,3,117,58,0,2257,2258,3,113,56,0,2258,2259,3,87,43,0,2259,2260,3,87,
	43,0,2260,236,1,0,0,0,2261,2262,3,81,40,0,2262,2263,3,127,63,0,2263,238,
	1,0,0,0,2264,2265,3,81,40,0,2265,2266,3,127,63,0,2266,2267,3,117,58,0,2267,
	2268,3,87,43,0,2268,240,1,0,0,0,2269,2270,3,83,41,0,2270,2271,3,79,39,0,
	2271,2272,3,83,41,0,2272,2273,3,93,46,0,2273,2274,3,87,43,0,2274,242,1,
	0,0,0,2275,2276,3,83,41,0,2276,2277,3,79,39,0,2277,2278,3,101,50,0,2278,
	2279,3,101,50,0,2279,244,1,0,0,0,2280,2281,3,83,41,0,2281,2282,3,79,39,
	0,2282,2283,3,115,57,0,2283,2284,3,83,41,0,2284,2285,3,79,39,0,2285,2286,
	3,85,42,0,2286,2287,3,87,43,0,2287,246,1,0,0,0,2288,2289,3,83,41,0,2289,
	2290,3,79,39,0,2290,2291,3,115,57,0,2291,2292,3,83,41,0,2292,2293,3,79,
	39,0,2293,2294,3,85,42,0,2294,2295,3,87,43,0,2295,2296,3,85,42,0,2296,248,
	1,0,0,0,2297,2298,3,83,41,0,2298,2299,3,79,39,0,2299,2300,3,115,57,0,2300,
	2301,3,87,43,0,2301,250,1,0,0,0,2302,2303,3,83,41,0,2303,2304,3,79,39,0,
	2304,2305,3,115,57,0,2305,2306,3,117,58,0,2306,2307,6,125,7,0,2307,252,
	1,0,0,0,2308,2309,3,83,41,0,2309,2310,3,79,39,0,2310,2311,3,117,58,0,2311,
	2312,3,79,39,0,2312,2313,3,101,50,0,2313,2314,3,107,53,0,2314,2315,3,91,
	45,0,2315,2316,5,95,0,0,2316,2317,3,105,52,0,2317,2318,3,79,39,0,2318,2319,
	3,103,51,0,2319,2320,3,87,43,0,2320,254,1,0,0,0,2321,2322,3,83,41,0,2322,
	2323,3,93,46,0,2323,2324,3,79,39,0,2324,2325,3,95,47,0,2325,2326,3,105,
	52,0,2326,256,1,0,0,0,2327,2328,3,83,41,0,2328,2329,3,93,46,0,2329,2330,
	3,79,39,0,2330,2331,3,105,52,0,2331,2332,3,91,45,0,2332,2333,3,87,43,0,
	2333,258,1,0,0,0,2334,2335,3,83,41,0,2335,2336,3,93,46,0,2336,2337,3,79,
	39,0,2337,2338,3,105,52,0,2338,2339,3,91,45,0,2339,2340,3,87,43,0,2340,
	2341,3,85,42,0,2341,260,1,0,0,0,2342,2343,3,83,41,0,2343,2344,3,93,46,0,
	2344,2345,3,79,39,0,2345,2346,3,105,52,0,2346,2347,3,105,52,0,2347,2348,
	3,87,43,0,2348,2349,3,101,50,0,2349,2350,4,130,6,0,2350,262,1,0,0,0,2351,
	2352,3,83,41,0,2352,2353,3,93,46,0,2353,2354,3,79,39,0,2354,2355,3,113,
	56,0,2355,2356,3,115,57,0,2356,2357,3,87,43,0,2357,2358,3,117,58,0,2358,
	264,1,0,0,0,2359,2360,3,83,41,0,2360,2361,3,93,46,0,2361,2362,3,79,39,0,
	2362,2363,3,113,56,0,2363,2364,3,79,39,0,2364,2365,3,83,41,0,2365,2366,
	3,117,58,0,2366,2367,3,87,43,0,2367,2368,3,113,56,0,2368,2369,1,0,0,0,2369,
	2370,6,132,8,0,2370,266,1,0,0,0,2371,2372,3,83,41,0,2372,2373,3,93,46,0,
	2373,2374,3,79,39,0,2374,2375,3,113,56,0,2375,268,1,0,0,0,2376,2377,3,83,
	41,0,2377,2378,3,93,46,0,2378,2379,3,87,43,0,2379,2380,3,83,41,0,2380,2381,
	3,99,49,0,2381,2382,3,115,57,0,2382,2383,3,119,59,0,2383,2384,3,103,51,
	0,2384,270,1,0,0,0,2385,2386,3,83,41,0,2386,2387,3,93,46,0,2387,2388,3,
	87,43,0,2388,2389,3,83,41,0,2389,2390,3,99,49,0,2390,272,1,0,0,0,2391,2392,
	3,83,41,0,2392,2393,3,95,47,0,2393,2394,3,109,54,0,2394,2395,3,93,46,0,
	2395,2396,3,87,43,0,2396,2397,3,113,56,0,2397,274,1,0,0,0,2398,2399,3,83,
	41,0,2399,2400,3,101,50,0,2400,2401,3,79,39,0,2401,2402,3,115,57,0,2402,
	2403,3,115,57,0,2403,2404,5,95,0,0,2404,2405,3,107,53,0,2405,2406,3,113,
	56,0,2406,2407,3,95,47,0,2407,2408,3,91,45,0,2408,2409,3,95,47,0,2409,2410,
	3,105,52,0,2410,276,1,0,0,0,2411,2412,3,83,41,0,2412,2413,3,101,50,0,2413,
	2414,3,95,47,0,2414,2415,3,87,43,0,2415,2416,3,105,52,0,2416,2417,3,117,
	58,0,2417,278,1,0,0,0,2418,2419,3,83,41,0,2419,2420,3,101,50,0,2420,2421,
	3,107,53,0,2421,2422,3,115,57,0,2422,2423,3,87,43,0,2423,280,1,0,0,0,2424,
	2425,3,83,41,0,2425,2426,3,107,53,0,2426,2427,3,79,39,0,2427,2428,3,101,
	50,0,2428,2429,3,87,43,0,2429,2430,3,115,57,0,2430,2431,3,83,41,0,2431,
	2432,3,87,43,0,2432,282,1,0,0,0,2433,2434,3,83,41,0,2434,2435,3,107,53,
	0,2435,2436,3,85,42,0,2436,2437,3,87,43,0,2437,284,1,0,0,0,2438,2439,3,
	83,41,0,2439,2440,3,107,53,0,2440,2441,3,101,50,0,2441,2442,3,101,50,0,
	2442,2443,3,79,39,0,2443,2444,3,117,58,0,2444,2445,3,87,43,0,2445,286,1,
	0,0,0,2446,2447,3,83,41,0,2447,2448,3,107,53,0,2448,2449,3,101,50,0,2449,
	2450,3,101,50,0,2450,2451,3,79,39,0,2451,2452,3,117,58,0,2452,2453,3,95,
	47,0,2453,2454,3,107,53,0,2454,2455,3,105,52,0,2455,288,1,0,0,0,2456,2457,
	3,83,41,0,2457,2458,3,107,53,0,2458,2459,3,101,50,0,2459,2460,3,119,59,
	0,2460,2461,3,103,51,0,2461,2462,3,105,52,0,2462,2463,3,115,57,0,2463,290,
	1,0,0,0,2464,2465,3,83,41,0,2465,2466,3,107,53,0,2466,2467,3,101,50,0,2467,
	2468,3,119,59,0,2468,2469,3,103,51,0,2469,2470,3,105,52,0,2470,292,1,0,
	0,0,2471,2472,3,83,41,0,2472,2473,3,107,53,0,2473,2474,3,101,50,0,2474,
	2475,3,119,59,0,2475,2476,3,103,51,0,2476,2477,3,105,52,0,2477,2478,5,95,
	0,0,2478,2479,3,105,52,0,2479,2480,3,79,39,0,2480,2481,3,103,51,0,2481,
	2482,3,87,43,0,2482,294,1,0,0,0,2483,2484,3,83,41,0,2484,2485,3,107,53,
	0,2485,2486,3,101,50,0,2486,2487,3,119,59,0,2487,2488,3,103,51,0,2488,2489,
	3,105,52,0,2489,2490,5,95,0,0,2490,2491,3,89,44,0,2491,2492,3,107,53,0,
	2492,2493,3,113,56,0,2493,2494,3,103,51,0,2494,2495,3,79,39,0,2495,2496,
	3,117,58,0,2496,296,1,0,0,0,2497,2498,3,83,41,0,2498,2499,3,107,53,0,2499,
	2500,3,103,51,0,2500,2501,3,103,51,0,2501,2502,3,87,43,0,2502,2503,3,105,
	52,0,2503,2504,3,117,58,0,2504,298,1,0,0,0,2505,2506,3,83,41,0,2506,2507,
	3,107,53,0,2507,2508,3,103,51,0,2508,2509,3,103,51,0,2509,2510,3,95,47,
	0,2510,2511,3,117,58,0,2511,2512,3,117,58,0,2512,2513,3,87,43,0,2513,2514,
	3,85,42,0,2514,300,1,0,0,0,2515,2516,3,83,41,0,2516,2517,3,107,53,0,2517,
	2518,3,103,51,0,2518,2519,3,103,51,0,2519,2520,3,95,47,0,2520,2521,3,117,
	58,0,2521,302,1,0,0,0,2522,2523,3,83,41,0,2523,2524,3,107,53,0,2524,2525,
	3,103,51,0,2525,2526,3,109,54,0,2526,2527,3,79,39,0,2527,2528,3,83,41,0,
	2528,2529,3,117,58,0,2529,304,1,0,0,0,2530,2531,3,83,41,0,2531,2532,3,107,
	53,0,2532,2533,3,103,51,0,2533,2534,3,109,54,0,2534,2535,3,101,50,0,2535,
	2536,3,87,43,0,2536,2537,3,117,58,0,2537,2538,3,95,47,0,2538,2539,3,107,
	53,0,2539,2540,3,105,52,0,2540,306,1,0,0,0,2541,2542,3,83,41,0,2542,2543,
	3,107,53,0,2543,2544,3,103,51,0,2544,2545,3,109,54,0,2545,2546,3,113,56,
	0,2546,2547,3,87,43,0,2547,2548,3,115,57,0,2548,2549,3,115,57,0,2549,2550,
	3,87,43,0,2550,2551,3,85,42,0,2551,308,1,0,0,0,2552,2553,3,83,41,0,2553,
	2554,3,107,53,0,2554,2555,3,103,51,0,2555,2556,3,109,54,0,2556,2557,3,113,
	56,0,2557,2558,3,87,43,0,2558,2559,3,115,57,0,2559,2560,3,115,57,0,2560,
	2561,3,95,47,0,2561,2562,3,107,53,0,2562,2563,3,105,52,0,2563,2564,4,154,
	7,0,2564,310,1,0,0,0,2565,2566,3,83,41,0,2566,2567,3,107,53,0,2567,2568,
	3,105,52,0,2568,2569,3,83,41,0,2569,2570,3,119,59,0,2570,2571,3,113,56,
	0,2571,2572,3,113,56,0,2572,2573,3,87,43,0,2573,2574,3,105,52,0,2574,2575,
	3,117,58,0,2575,312,1,0,0,0,2576,2577,3,83,41,0,2577,2578,3,107,53,0,2578,
	2579,3,105,52,0,2579,2580,3,85,42,0,2580,2581,3,95,47,0,2581,2582,3,117,
	58,0,2582,2583,3,95,47,0,2583,2584,3,107,53,0,2584,2585,3,105,52,0,2585,
	314,1,0,0,0,2586,2587,3,83,41,0,2587,2588,3,107,53,0,2588,2589,3,105,52,
	0,2589,2590,3,105,52,0,2590,2591,3,87,43,0,2591,2592,3,83,41,0,2592,2593,
	3,117,58,0,2593,2594,3,95,47,0,2594,2595,3,107,53,0,2595,2596,3,105,52,
	0,2596,316,1,0,0,0,2597,2598,3,83,41,0,2598,2599,3,107,53,0,2599,2600,3,
	105,52,0,2600,2601,3,115,57,0,2601,2602,3,95,47,0,2602,2603,3,115,57,0,
	2603,2604,3,117,58,0,2604,2605,3,87,43,0,2605,2606,3,105,52,0,2606,2607,
	3,117,58,0,2607,318,1,0,0,0,2608,2609,3,83,41,0,2609,2610,3,107,53,0,2610,
	2611,3,105,52,0,2611,2612,3,115,57,0,2612,2613,3,117,58,0,2613,2614,3,113,
	56,0,2614,2615,3,79,39,0,2615,2616,3,95,47,0,2616,2617,3,105,52,0,2617,
	2618,3,117,58,0,2618,320,1,0,0,0,2619,2620,3,83,41,0,2620,2621,3,107,53,
	0,2621,2622,3,105,52,0,2622,2623,3,115,57,0,2623,2624,3,117,58,0,2624,2625,
	3,113,56,0,2625,2626,3,79,39,0,2626,2627,3,95,47,0,2627,2628,3,105,52,0,
	2628,2629,3,117,58,0,2629,2630,5,95,0,0,2630,2631,3,83,41,0,2631,2632,3,
	79,39,0,2632,2633,3,117,58,0,2633,2634,3,79,39,0,2634,2635,3,101,50,0,2635,
	2636,3,107,53,0,2636,2637,3,91,45,0,2637,322,1,0,0,0,2638,2639,3,83,41,
	0,2639,2640,3,107,53,0,2640,2641,3,105,52,0,2641,2642,3,115,57,0,2642,2643,
	3,117,58,0,2643,2644,3,113,56,0,2644,2645,3,79,39,0,2645,2646,3,95,47,0,
	2646,2647,3,105,52,0,2647,2648,3,117,58,0,2648,2649,5,95,0,0,2649,2650,
	3,105,52,0,2650,2651,3,79,39,0,2651,2652,3,103,51,0,2652,2653,3,87,43,0,
	2653,324,1,0,0,0,2654,2655,3,83,41,0,2655,2656,3,107,53,0,2656,2657,3,105,
	52,0,2657,2658,3,115,57,0,2658,2659,3,117,58,0,2659,2660,3,113,56,0,2660,
	2661,3,79,39,0,2661,2662,3,95,47,0,2662,2663,3,105,52,0,2663,2664,3,117,
	58,0,2664,2665,5,95,0,0,2665,2666,3,115,57,0,2666,2667,3,83,41,0,2667,2668,
	3,93,46,0,2668,2669,3,87,43,0,2669,2670,3,103,51,0,2670,2671,3,79,39,0,
	2671,326,1,0,0,0,2672,2673,3,83,41,0,2673,2674,3,107,53,0,2674,2675,3,105,
	52,0,2675,2676,3,117,58,0,2676,2677,3,79,39,0,2677,2678,3,95,47,0,2678,
	2679,3,105,52,0,2679,2680,3,115,57,0,2680,328,1,0,0,0,2681,2682,3,83,41,
	0,2682,2683,3,107,53,0,2683,2684,3,105,52,0,2684,2685,3,117,58,0,2685,2686,
	3,87,43,0,2686,2687,3,125,62,0,2687,2688,3,117,58,0,2688,330,1,0,0,0,2689,
	2690,3,83,41,0,2690,2691,3,107,53,0,2691,2692,3,105,52,0,2692,2693,3,117,
	58,0,2693,2694,3,95,47,0,2694,2695,3,105,52,0,2695,2696,3,119,59,0,2696,
	2697,3,87,43,0,2697,332,1,0,0,0,2698,2699,3,83,41,0,2699,2700,3,107,53,
	0,2700,2701,3,105,52,0,2701,2702,3,117,58,0,2702,2703,3,113,56,0,2703,2704,
	3,95,47,0,2704,2705,3,81,40,0,2705,2706,3,119,59,0,2706,2707,3,117,58,0,
	2707,2708,3,107,53,0,2708,2709,3,113,56,0,2709,2710,3,115,57,0,2710,2711,
	4,166,8,0,2711,334,1,0,0,0,2712,2713,3,83,41,0,2713,2714,3,107,53,0,2714,
	2715,3,105,52,0,2715,2716,3,121,60,0,2716,2717,3,87,43,0,2717,2718,3,113,
	56,0,2718,2719,3,117,58,0,2719,336,1,0,0,0,2720,2721,3,83,41,0,2721,2722,
	3,107,53,0,2722,2723,3,119,59,0,2723,2724,3,105,52,0,2724,2725,3,117,58,
	0,2725,2726,6,168,9,0,2726,338,1,0,0,0,2727,2728,3,83,41,0,2728,2729,3,
	109,54,0,2729,2730,3,119,59,0,2730,340,1,0,0,0,2731,2732,3,83,41,0,2732,
	2733,3,113,56,0,2733,2734,3,87,43,0,2734,2735,3,79,39,0,2735,2736,3,117,
	58,0,2736,2737,3,87,43,0,2737,342,1,0,0,0,2738,2739,3,83,41,0,2739,2740,
	3,113,56,0,2740,2741,3,107,53,0,2741,2742,3,115,57,0,2742,2743,3,115,57,
	0,2743,344,1,0,0,0,2744,2745,3,83,41,0,2745,2746,3,119,59,0,2746,2747,3,
	81,40,0,2747,2748,3,87,43,0,2748,346,1,0,0,0,2749,2750,3,83,41,0,2750,2751,
	3,119,59,0,2751,2752,3,113,56,0,2752,2753,3,85,42,0,2753,2754,3,79,39,0,
	2754,2755,3,117,58,0,2755,2756,3,87,43,0,2756,2757,6,173,10,0,2757,348,
	1,0,0,0,2758,2759,3,83,41,0,2759,2760,3,119,59,0,2760,2761,3,113,56,0,2761,
	2762,3,113,56,0,2762,2763,3,87,43,0,2763,2764,3,105,52,0,2764,2765,3,117,
	58,0,2765,2766,4,174,9,0,2766,350,1,0,0,0,2767,2768,3,83,41,0,2768,2769,
	3,119,59,0,2769,2770,3,113,56,0,2770,2771,3,113,56,0,2771,2772,3,87,43,
	0,2772,2773,3,105,52,0,2773,2774,3,117,58,0,2774,2775,5,95,0,0,2775,2776,
	3,85,42,0,2776,2777,3,79,39,0,2777,2778,3,117,58,0,2778,2779,3,87,43,0,
	2779,2780,6,175,11,0,2780,352,1,0,0,0,2781,2782,3,83,41,0,2782,2783,3,119,
	59,0,2783,2784,3,113,56,0,2784,2785,3,113,56,0,2785,2786,3,87,43,0,2786,
	2787,3,105,52,0,2787,2788,3,117,58,0,2788,2789,5,95,0,0,2789,2790,3,117,
	58,0,2790,2791,3,95,47,0,2791,2792,3,103,51,0,2792,2793,3,87,43,0,2793,
	2794,6,176,12,0,2794,354,1,0,0,0,2795,2796,3,83,41,0,2796,2797,3,119,59,
	0,2797,2798,3,113,56,0,2798,2799,3,113,56,0,2799,2800,3,87,43,0,2800,2801,
	3,105,52,0,2801,2802,3,117,58,0,2802,2803,5,95,0,0,2803,2804,3,117,58,0,
	2804,2805,3,95,47,0,2805,2806,3,103,51,0,2806,2807,3,87,43,0,2807,2808,
	3,115,57,0,2808,2809,3,117,58,0,2809,2810,3,79,39,0,2810,2811,3,103,51,
	0,2811,2812,3,109,54,0,2812,2813,1,0,0,0,2813,2814,6,177,13,0,2814,356,
	1,0,0,0,2815,2816,3,83,41,0,2816,2817,3,119,59,0,2817,2818,3,113,56,0,2818,
	2819,3,113,56,0,2819,2820,3,87,43,0,2820,2821,3,105,52,0,2821,2822,3,117,
	58,0,2822,2823,5,95,0,0,2823,2824,3,119,59,0,2824,2825,3,115,57,0,2825,
	2826,3,87,43,0,2826,2827,3,113,56,0,2827,358,1,0,0,0,2828,2829,3,83,41,
	0,2829,2830,3,119,59,0,2830,2831,3,113,56,0,2831,2832,3,115,57,0,2832,2833,
	3,107,53,0,2833,2834,3,113,56,0,2834,360,1,0,0,0,2835,2836,3,83,41,0,2836,
	2837,3,119,59,0,2837,2838,3,113,56,0,2838,2839,3,115,57,0,2839,2840,3,107,
	53,0,2840,2841,3,113,56,0,2841,2842,5,95,0,0,2842,2843,3,105,52,0,2843,
	2844,3,79,39,0,2844,2845,3,103,51,0,2845,2846,3,87,43,0,2846,362,1,0,0,
	0,2847,2848,3,83,41,0,2848,2849,3,119,59,0,2849,2850,3,113,56,0,2850,2851,
	3,117,58,0,2851,2852,3,95,47,0,2852,2853,3,103,51,0,2853,2854,3,87,43,0,
	2854,2855,6,181,14,0,2855,364,1,0,0,0,2856,2857,3,85,42,0,2857,2858,3,79,
	39,0,2858,2859,3,117,58,0,2859,2860,3,79,39,0,2860,2861,3,81,40,0,2861,
	2862,3,79,39,0,2862,2863,3,115,57,0,2863,2864,3,87,43,0,2864,366,1,0,0,
	0,2865,2866,3,85,42,0,2866,2867,3,79,39,0,2867,2868,3,117,58,0,2868,2869,
	3,79,39,0,2869,2870,3,81,40,0,2870,2871,3,79,39,0,2871,2872,3,115,57,0,
	2872,2873,3,87,43,0,2873,2874,3,115,57,0,2874,368,1,0,0,0,2875,2876,3,85,
	42,0,2876,2877,3,79,39,0,2877,2878,3,117,58,0,2878,2879,3,79,39,0,2879,
	2880,3,89,44,0,2880,2881,3,95,47,0,2881,2882,3,101,50,0,2882,2883,3,87,
	43,0,2883,370,1,0,0,0,2884,2885,3,85,42,0,2885,2886,3,79,39,0,2886,2887,
	3,117,58,0,2887,2888,3,79,39,0,2888,372,1,0,0,0,2889,2890,3,85,42,0,2890,
	2891,3,79,39,0,2891,2892,3,117,58,0,2892,2893,3,87,43,0,2893,2894,3,117,
	58,0,2894,2895,3,95,47,0,2895,2896,3,103,51,0,2896,2897,3,87,43,0,2897,
	374,1,0,0,0,2898,2899,3,85,42,0,2899,2900,3,79,39,0,2900,2901,3,117,58,
	0,2901,2902,3,87,43,0,2902,2903,5,95,0,0,2903,2904,3,79,39,0,2904,2905,
	3,85,42,0,2905,2906,3,85,42,0,2906,2907,6,187,15,0,2907,376,1,0,0,0,2908,
	2909,3,85,42,0,2909,2910,3,79,39,0,2910,2911,3,117,58,0,2911,2912,3,87,
	43,0,2912,2913,5,95,0,0,2913,2914,3,115,57,0,2914,2915,3,119,59,0,2915,
	2916,3,81,40,0,2916,2917,6,188,16,0,2917,378,1,0,0,0,2918,2919,3,85,42,
	0,2919,2920,3,79,39,0,2920,2921,3,117,58,0,2921,2922,3,87,43,0,2922,380,
	1,0,0,0,2923,2924,3,85,42,0,2924,2925,3,79,39,0,2925,2926,3,127,63,0,2926,
	2927,3,107,53,0,2927,2928,3,89,44,0,2928,2929,3,103,51,0,2929,2930,3,107,
	53,0,2930,2931,3,105,52,0,2931,2932,3,117,58,0,2932,2933,3,93,46,0,2933,
	2934,1,0,0,0,2934,2935,6,190,17,0,2935,382,1,0,0,0,2936,2937,3,85,42,0,
	2937,2938,3,79,39,0,2938,2939,3,127,63,0,2939,2940,5,95,0,0,2940,2941,3,
	93,46,0,2941,2942,3,107,53,0,2942,2943,3,119,59,0,2943,2944,3,113,56,0,
	2944,384,1,0,0,0,2945,2946,3,85,42,0,2946,2947,3,79,39,0,2947,2948,3,127,
	63,0,2948,2949,5,95,0,0,2949,2950,3,103,51,0,2950,2951,3,95,47,0,2951,2952,
	3,83,41,0,2952,2953,3,113,56,0,2953,2954,3,107,53,0,2954,2955,3,115,57,
	0,2955,2956,3,87,43,0,2956,2957,3,83,41,0,2957,2958,3,107,53,0,2958,2959,
	3,105,52,0,2959,2960,3,85,42,0,2960,386,1,0,0,0,2961,2962,3,85,42,0,2962,
	2963,3,79,39,0,2963,2964,3,127,63,0,2964,2965,5,95,0,0,2965,2966,3,103,
	51,0,2966,2967,3,95,47,0,2967,2968,3,105,52,0,2968,2969,3,119,59,0,2969,
	2970,3,117,58,0,2970,2971,3,87,43,0,2971,388,1,0,0,0,2972,2973,3,85,42,
	0,2973,2974,3,79,39,0,2974,2975,3,127,63,0,2975,2976,5,95,0,0,2976,2977,
	3,115,57,0,2977,2978,3,87,43,0,2978,2979,3,83,41,0,2979,2980,3,107,53,0,
	2980,2981,3,105,52,0,2981,2982,3,85,42,0,2982,390,1,0,0,0,2983,2984,3,85,
	42,0,2984,2985,3,79,39,0,2985,2986,3,127,63,0,2986,392,1,0,0,0,2987,2988,
	3,85,42,0,2988,2989,3,87,43,0,2989,2990,3,79,39,0,2990,2991,3,101,50,0,
	2991,2992,3,101,50,0,2992,2993,3,107,53,0,2993,2994,3,83,41,0,2994,2995,
	3,79,39,0,2995,2996,3,117,58,0,2996,2997,3,87,43,0,2997,394,1,0,0,0,2998,
	2999,3,85,42,0,2999,3000,3,87,43,0,3000,3001,3,83,41,0,3001,3002,1,0,0,
	0,3002,3003,6,197,18,0,3003,396,1,0,0,0,3004,3005,3,85,42,0,3005,3006,3,
	87,43,0,3006,3007,3,83,41,0,3007,3008,3,95,47,0,3008,3009,3,103,51,0,3009,
	3010,3,79,39,0,3010,3011,3,101,50,0,3011,3012,5,95,0,0,3012,3013,3,105,
	52,0,3013,3014,3,119,59,0,3014,3015,3,103,51,0,3015,398,1,0,0,0,3016,3017,
	3,85,42,0,3017,3018,3,87,43,0,3018,3019,3,83,41,0,3019,3020,3,95,47,0,3020,
	3021,3,103,51,0,3021,3022,3,79,39,0,3022,3023,3,101,50,0,3023,400,1,0,0,
	0,3024,3025,3,85,42,0,3025,3026,3,87,43,0,3026,3027,3,83,41,0,3027,3028,
	3,101,50,0,3028,3029,3,79,39,0,3029,3030,3,113,56,0,3030,3031,3,87,43,0,
	3031,402,1,0,0,0,3032,3033,3,85,42,0,3033,3034,3,87,43,0,3034,3035,3,89,
	44,0,3035,3036,3,79,39,0,3036,3037,3,119,59,0,3037,3038,3,101,50,0,3038,
	3039,3,117,58,0,3039,404,1,0,0,0,3040,3041,3,85,42,0,3041,3042,3,87,43,
	0,3042,3043,3,89,44,0,3043,3044,3,79,39,0,3044,3045,3,119,59,0,3045,3046,
	3,101,50,0,3046,3047,3,117,58,0,3047,3048,5,95,0,0,3048,3049,3,79,39,0,
	3049,3050,3,119,59,0,3050,3051,3,117,58,0,3051,3052,3,93,46,0,3052,3053,
	4,202,10,0,3053,406,1,0,0,0,3054,3055,3,85,42,0,3055,3056,3,87,43,0,3056,
	3057,3,89,44,0,3057,3058,3,95,47,0,3058,3059,3,105,52,0,3059,3060,3,87,
	43,0,3060,3061,3,113,56,0,3061,408,1,0,0,0,3062,3063,3,85,42,0,3063,3064,
	3,87,43,0,3064,3065,3,101,50,0,3065,3066,3,79,39,0,3066,3067,3,127,63,0,
	3067,3068,3,87,43,0,3068,3069,3,85,42,0,3069,410,1,0,0,0,3070,3071,3,85,
	42,0,3071,3072,3,87,43,0,3072,3073,3,101,50,0,3073,3074,3,79,39,0,3074,
	3075,3,127,63,0,3075,3076,5,95,0,0,3076,3077,3,99,49,0,3077,3078,3,87,43,
	0,3078,3079,3,127,63,0,3079,3080,5,95,0,0,3080,3081,3,123,61,0,3081,3082,
	3,113,56,0,3082,3083,3,95,47,0,3083,3084,3,117,58,0,3084,3085,3,87,43,0,
	3085,412,1,0,0,0,3086,3087,3,85,42,0,3087,3088,3,87,43,0,3088,3089,3,101,
	50,0,3089,3090,3,87,43,0,3090,3091,3,117,58,0,3091,3092,3,87,43,0,3092,
	414,1,0,0,0,3093,3094,3,85,42,0,3094,3095,3,87,43,0,3095,3096,3,115,57,
	0,3096,3097,3,83,41,0,3097,416,1,0,0,0,3098,3099,3,85,42,0,3099,3100,3,
	87,43,0,3100,3101,3,115,57,0,3101,3102,3,83,41,0,3102,3103,3,113,56,0,3103,
	3104,3,95,47,0,3104,3105,3,81,40,0,3105,3106,3,87,43,0,3106,418,1,0,0,0,
	3107,3108,3,85,42,0,3108,3109,3,87,43,0,3109,3110,3,115,57,0,3110,3111,
	5,95,0,0,3111,3112,3,99,49,0,3112,3113,3,87,43,0,3113,3114,3,127,63,0,3114,
	3115,5,95,0,0,3115,3116,3,89,44,0,3116,3117,3,95,47,0,3117,3118,3,101,50,
	0,3118,3119,3,87,43,0,3119,3120,4,209,11,0,3120,420,1,0,0,0,3121,3122,3,
	85,42,0,3122,3123,3,87,43,0,3123,3124,3,117,58,0,3124,3125,3,87,43,0,3125,
	3126,3,113,56,0,3126,3127,3,103,51,0,3127,3128,3,95,47,0,3128,3129,3,105,
	52,0,3129,3130,3,95,47,0,3130,3131,3,115,57,0,3131,3132,3,117,58,0,3132,
	3133,3,95,47,0,3133,3134,3,83,41,0,3134,422,1,0,0,0,3135,3136,3,85,42,0,
	3136,3137,3,95,47,0,3137,3138,3,79,39,0,3138,3139,3,91,45,0,3139,3140,3,
	105,52,0,3140,3141,3,107,53,0,3141,3142,3,115,57,0,3142,3143,3,117,58,0,
	3143,3144,3,95,47,0,3144,3145,3,83,41,0,3145,3146,3,115,57,0,3146,424,1,
	0,0,0,3147,3148,3,85,42,0,3148,3149,3,95,47,0,3149,3150,3,113,56,0,3150,
	3151,3,87,43,0,3151,3152,3,83,41,0,3152,3153,3,117,58,0,3153,3154,3,107,
	53,0,3154,3155,3,113,56,0,3155,3156,3,127,63,0,3156,426,1,0,0,0,3157,3158,
	3,85,42,0,3158,3159,3,95,47,0,3159,3160,3,115,57,0,3160,3161,3,79,39,0,
	3161,3162,3,81,40,0,3162,3163,3,101,50,0,3163,3164,3,87,43,0,3164,428,1,
	0,0,0,3165,3166,3,85,42,0,3166,3167,3,95,47,0,3167,3168,3,115,57,0,3168,
	3169,3,83,41,0,3169,3170,3,79,39,0,3170,3171,3,113,56,0,3171,3172,3,85,
	42,0,3172,430,1,0,0,0,3173,3174,3,85,42,0,3174,3175,3,95,47,0,3175,3176,
	3,115,57,0,3176,3177,3,99,49,0,3177,432,1,0,0,0,3178,3179,3,85,42,0,3179,
	3180,3,95,47,0,3180,3181,3,115,57,0,3181,3182,3,117,58,0,3182,3183,3,95,
	47,0,3183,3184,3,105,52,0,3184,3185,3,83,41,0,3185,3186,3,117,58,0,3186,
	434,1,0,0,0,3187,3188,3,85,42,0,3188,3189,3,95,47,0,3189,3190,3,115,57,
	0,3190,3191,3,117,58,0,3191,3192,3,95,47,0,3192,3193,3,105,52,0,3193,3194,
	3,83,41,0,3194,3195,3,117,58,0,3195,3196,3,113,56,0,3196,3197,3,107,53,
	0,3197,3198,3,123,61,0,3198,3199,1,0,0,0,3199,3200,6,217,19,0,3200,436,
	1,0,0,0,3201,3202,3,85,42,0,3202,3203,3,95,47,0,3203,3204,3,121,60,0,3204,
	438,1,0,0,0,3205,3206,3,85,42,0,3206,3207,3,107,53,0,3207,3208,3,119,59,
	0,3208,3209,3,81,40,0,3209,3210,3,101,50,0,3210,3211,3,87,43,0,3211,440,
	1,0,0,0,3212,3213,3,85,42,0,3213,3214,3,107,53,0,3214,442,1,0,0,0,3215,
	3216,3,85,42,0,3216,3217,3,113,56,0,3217,3218,3,107,53,0,3218,3219,3,109,
	54,0,3219,444,1,0,0,0,3220,3221,3,85,42,0,3221,3222,3,119,59,0,3222,3223,
	3,79,39,0,3223,3224,3,101,50,0,3224,446,1,0,0,0,3225,3226,3,85,42,0,3226,
	3227,3,119,59,0,3227,3228,3,103,51,0,3228,3229,3,109,54,0,3229,3230,3,89,
	44,0,3230,3231,3,95,47,0,3231,3232,3,101,50,0,3232,3233,3,87,43,0,3233,
	448,1,0,0,0,3234,3235,3,85,42,0,3235,3236,3,119,59,0,3236,3237,3,109,54,
	0,3237,3238,3,101,50,0,3238,3239,3,95,47,0,3239,3240,3,83,41,0,3240,3241,
	3,79,39,0,3241,3242,3,117,58,0,3242,3243,3,87,43,0,3243,450,1,0,0,0,3244,
	3245,3,85,42,0,3245,3246,3,127,63,0,3246,3247,3,105,52,0,3247,3248,3,79,
	39,0,3248,3249,3,103,51,0,3249,3250,3,95,47,0,3250,3251,3,83,41,0,3251,
	452,1,0,0,0,3252,3253,3,87,43,0,3253,3254,3,79,39,0,3254,3255,3,83,41,0,
	3255,3256,3,93,46,0,3256,454,1,0,0,0,3257,3258,3,87,43,0,3258,3259,3,101,
	50,0,3259,3260,3,115,57,0,3260,3261,3,87,43,0,3261,456,1,0,0,0,3262,3263,
	3,87,43,0,3263,3264,3,101,50,0,3264,3265,3,115,57,0,3265,3266,3,87,43,0,
	3266,3267,3,95,47,0,3267,3268,3,89,44,0,3268,458,1,0,0,0,3269,3270,3,87,
	43,0,3270,3271,3,105,52,0,3271,3272,3,79,39,0,3272,3273,3,81,40,0,3273,
	3274,3,101,50,0,3274,3275,3,87,43,0,3275,460,1,0,0,0,3276,3277,3,87,43,
	0,3277,3278,3,105,52,0,3278,3279,3,83,41,0,3279,3280,3,101,50,0,3280,3281,
	3,107,53,0,3281,3282,3,115,57,0,3282,3283,3,87,43,0,3283,3284,3,85,42,0,
	3284,462,1,0,0,0,3285,3286,3,87,43,0,3286,3287,3,105,52,0,3287,3288,3,83,
	41,0,3288,3289,3,113,56,0,3289,3290,3,127,63,0,3290,3291,3,109,54,0,3291,
	3292,3,117,58,0,3292,3293,3,95,47,0,3293,3294,3,107,53,0,3294,3295,3,105,
	52,0,3295,3296,4,231,12,0,3296,464,1,0,0,0,3297,3298,3,87,43,0,3298,3299,
	3,105,52,0,3299,3300,3,85,42,0,3300,466,1,0,0,0,3301,3302,3,87,43,0,3302,
	3303,3,105,52,0,3303,3304,3,85,42,0,3304,3305,3,115,57,0,3305,468,1,0,0,
	0,3306,3307,3,87,43,0,3307,3308,3,105,52,0,3308,3309,3,85,42,0,3309,3310,
	5,95,0,0,3310,3311,3,107,53,0,3311,3312,3,89,44,0,3312,3313,5,95,0,0,3313,
	3314,3,95,47,0,3314,3315,3,105,52,0,3315,3316,3,109,54,0,3316,3317,3,119,
	59,0,3317,3318,3,117,58,0,3318,470,1,0,0,0,3319,3320,3,87,43,0,3320,3321,
	3,105,52,0,3321,3322,3,91,45,0,3322,3323,3,95,47,0,3323,3324,3,105,52,0,
	3324,3325,3,87,43,0,3325,3326,3,115,57,0,3326,472,1,0,0,0,3327,3328,3,87,
	43,0,3328,3329,3,105,52,0,3329,3330,3,91,45,0,3330,3331,3,95,47,0,3331,
	3332,3,105,52,0,3332,3333,3,87,43,0,3333,474,1,0,0,0,3334,3335,3,87,43,
	0,3335,3336,3,105,52,0,3336,3337,3,119,59,0,3337,3338,3,103,51,0,3338,476,
	1,0,0,0,3339,3340,3,87,43,0,3340,3341,3,113,56,0,3341,3342,3,113,56,0,3342,
	3343,3,107,53,0,3343,3344,3,113,56,0,3344,478,1,0,0,0,3345,3346,3,87,43,
	0,3346,3347,3,113,56,0,3347,3348,3,113,56,0,3348,3349,3,107,53,0,3349,3350,
	3,113,56,0,3350,3351,3,115,57,0,3351,480,1,0,0,0,3352,3353,3,87,43,0,3353,
	3354,3,115,57,0,3354,3355,3,83,41,0,3355,3356,3,79,39,0,3356,3357,3,109,
	54,0,3357,3358,3,87,43,0,3358,3359,3,85,42,0,3359,482,1,0,0,0,3360,3361,
	3,87,43,0,3361,3362,3,115,57,0,3362,3363,3,83,41,0,3363,3364,3,79,39,0,
	3364,3365,3,109,54,0,3365,3366,3,87,43,0,3366,484,1,0,0,0,3367,3368,3,87,
	43,0,3368,3369,3,121,60,0,3369,3370,3,87,43,0,3370,3371,3,105,52,0,3371,
	3372,3,117,58,0,3372,3373,3,115,57,0,3373,486,1,0,0,0,3374,3375,3,87,43,
	0,3375,3376,3,121,60,0,3376,3377,3,87,43,0,3377,3378,3,105,52,0,3378,3379,
	3,117,58,0,3379,488,1,0,0,0,3380,3381,3,87,43,0,3381,3382,3,121,60,0,3382,
	3383,3,87,43,0,3383,3384,3,113,56,0,3384,3385,3,127,63,0,3385,490,1,0,0,
	0,3386,3387,3,87,43,0,3387,3388,3,125,62,0,3388,3389,3,83,41,0,3389,3390,
	3,93,46,0,3390,3391,3,79,39,0,3391,3392,3,105,52,0,3392,3393,3,91,45,0,
	3393,3394,3,87,43,0,3394,492,1,0,0,0,3395,3396,3,87,43,0,3396,3397,3,125,
	62,0,3397,3398,3,87,43,0,3398,3399,3,83,41,0,3399,3400,3,119,59,0,3400,
	3401,3,117,58,0,3401,3402,3,87,43,0,3402,494,1,0,0,0,3403,3404,3,87,43,
	0,3404,3405,3,125,62,0,3405,3406,3,95,47,0,3406,3407,3,115,57,0,3407,3408,
	3,117,58,0,3408,3409,3,115,57,0,3409,496,1,0,0,0,3410,3411,3,87,43,0,3411,
	3412,3,125,62,0,3412,3413,3,95,47,0,3413,3414,3,117,58,0,3414,498,1,0,0,
	0,3415,3416,3,87,43,0,3416,3417,3,125,62,0,3417,3418,3,109,54,0,3418,3419,
	3,79,39,0,3419,3420,3,105,52,0,3420,3421,3,115,57,0,3421,3422,3,95,47,0,
	3422,3423,3,107,53,0,3423,3424,3,105,52,0,3424,500,1,0,0,0,3425,3426,3,
	87,43,0,3426,3427,3,125,62,0,3427,3428,3,109,54,0,3428,3429,3,95,47,0,3429,
	3430,3,113,56,0,3430,3431,3,87,43,0,3431,3432,4,250,13,0,3432,502,1,0,0,
	0,3433,3434,3,87,43,0,3434,3435,3,125,62,0,3435,3436,3,109,54,0,3436,3437,
	3,101,50,0,3437,3438,3,79,39,0,3438,3439,3,95,47,0,3439,3440,3,105,52,0,
	3440,504,1,0,0,0,3441,3442,3,87,43,0,3442,3443,3,125,62,0,3443,3444,3,109,
	54,0,3444,3445,3,107,53,0,3445,3446,3,113,56,0,3446,3447,3,117,58,0,3447,
	3448,4,252,14,0,3448,506,1,0,0,0,3449,3450,3,87,43,0,3450,3451,3,125,62,
	0,3451,3452,3,117,58,0,3452,3453,3,87,43,0,3453,3454,3,105,52,0,3454,3455,
	3,85,42,0,3455,3456,3,87,43,0,3456,3457,3,85,42,0,3457,508,1,0,0,0,3458,
	3459,3,87,43,0,3459,3460,3,125,62,0,3460,3461,3,117,58,0,3461,3462,3,87,
	43,0,3462,3463,3,105,52,0,3463,3464,3,117,58,0,3464,3465,5,95,0,0,3465,
	3466,3,115,57,0,3466,3467,3,95,47,0,3467,3468,3,129,64,0,3468,3469,3,87,
	43,0,3469,510,1,0,0,0,3470,3471,3,87,43,0,3471,3472,3,125,62,0,3472,3473,
	3,117,58,0,3473,3474,3,113,56,0,3474,3475,3,79,39,0,3475,3476,3,83,41,0,
	3476,3477,3,117,58,0,3477,3478,6,255,20,0,3478,512,1,0,0,0,3479,3480,3,
	89,44,0,3480,3481,3,79,39,0,3481,3482,3,101,50,0,3482,3483,3,115,57,0,3483,
	3484,3,87,43,0,3484,514,1,0,0,0,3485,3486,3,89,44,0,3486,3487,3,79,39,0,
	3487,3488,3,115,57,0,3488,3489,3,117,58,0,3489,516,1,0,0,0,3490,3491,3,
	89,44,0,3491,3492,3,79,39,0,3492,3493,3,119,59,0,3493,3494,3,101,50,0,3494,
	3495,3,117,58,0,3495,3496,3,115,57,0,3496,518,1,0,0,0,3497,3498,3,89,44,
	0,3498,3499,3,87,43,0,3499,3500,3,117,58,0,3500,3501,3,83,41,0,3501,3502,
	3,93,46,0,3502,520,1,0,0,0,3503,3504,3,89,44,0,3504,3505,3,95,47,0,3505,
	3506,3,87,43,0,3506,3507,3,101,50,0,3507,3508,3,85,42,0,3508,3509,3,115,
	57,0,3509,3510,1,0,0,0,3510,3511,6,260,21,0,3511,522,1,0,0,0,3512,3513,
	3,89,44,0,3513,3514,3,95,47,0,3514,3515,3,101,50,0,3515,3516,3,87,43,0,
	3516,524,1,0,0,0,3517,3518,3,89,44,0,3518,3519,3,95,47,0,3519,3520,3,101,
	50,0,3520,3521,3,87,43,0,3521,3522,5,95,0,0,3522,3523,3,81,40,0,3523,3524,
	3,101,50,0,3524,3525,3,107,53,0,3525,3526,3,83,41,0,3526,3527,3,99,49,0,
	3527,3528,5,95,0,0,3528,3529,3,115,57,0,3529,3530,3,95,47,0,3530,3531,3,
	129,64,0,3531,3532,3,87,43,0,3532,3533,4,262,15,0,3533,526,1,0,0,0,3534,
	3535,3,89,44,0,3535,3536,3,95,47,0,3536,3537,3,101,50,0,3537,3538,3,117,
	58,0,3538,3539,3,87,43,0,3539,3540,3,113,56,0,3540,3541,4,263,16,0,3541,
	528,1,0,0,0,3542,3543,3,89,44,0,3543,3544,3,95,47,0,3544,3545,3,113,56,
	0,3545,3546,3,115,57,0,3546,3547,3,117,58,0,3547,530,1,0,0,0,3548,3549,
	3,89,44,0,3549,3550,3,95,47,0,3550,3551,3,125,62,0,3551,3552,3,87,43,0,
	3552,3553,3,85,42,0,3553,532,1,0,0,0,3554,3555,3,89,44,0,3555,3556,3,101,
	50,0,3556,3557,3,107,53,0,3557,3558,3,79,39,0,3558,3559,3,117,58,0,3559,
	3560,5,52,0,0,3560,3561,1,0,0,0,3561,3562,6,266,22,0,3562,534,1,0,0,0,3563,
	3564,3,89,44,0,3564,3565,3,101,50,0,3565,3566,3,107,53,0,3566,3567,3,79,
	39,0,3567,3568,3,117,58,0,3568,3569,5,56,0,0,3569,3570,1,0,0,0,3570,3571,
	6,267,23,0,3571,536,1,0,0,0,3572,3573,3,89,44,0,3573,3574,3,101,50,0,3574,
	3575,3,107,53,0,3575,3576,3,79,39,0,3576,3577,3,117,58,0,3577,538,1,0,0,
	0,3578,3579,3,89,44,0,3579,3580,3,101,50,0,3580,3581,3,119,59,0,3581,3582,
	3,115,57,0,3582,3583,3,93,46,0,3583,540,1,0,0,0,3584,3585,3,89,44,0,3585,
	3586,3,107,53,0,3586,3587,3,101,50,0,3587,3588,3,101,50,0,3588,3589,3,107,
	53,0,3589,3590,3,123,61,0,3590,3591,3,115,57,0,3591,3592,4,270,17,0,3592,
	542,1,0,0,0,3593,3594,3,89,44,0,3594,3595,3,107,53,0,3595,3596,3,113,56,
	0,3596,3597,3,83,41,0,3597,3598,3,87,43,0,3598,544,1,0,0,0,3599,3600,3,
	89,44,0,3600,3601,3,107,53,0,3601,3602,3,113,56,0,3602,3603,3,87,43,0,3603,
	3604,3,95,47,0,3604,3605,3,91,45,0,3605,3606,3,105,52,0,3606,546,1,0,0,
	0,3607,3608,3,89,44,0,3608,3609,3,107,53,0,3609,3610,3,113,56,0,3610,548,
	1,0,0,0,3611,3612,3,89,44,0,3612,3613,3,107,53,0,3613,3614,3,113,56,0,3614,
	3615,3,103,51,0,3615,3616,3,79,39,0,3616,3617,3,117,58,0,3617,550,1,0,0,
	0,3618,3619,3,89,44,0,3619,3620,3,107,53,0,3620,3621,3,119,59,0,3621,3622,
	3,105,52,0,3622,3623,3,85,42,0,3623,552,1,0,0,0,3624,3625,3,89,44,0,3625,
	3626,3,113,56,0,3626,3627,3,107,53,0,3627,3628,3,103,51,0,3628,554,1,0,
	0,0,3629,3630,3,89,44,0,3630,3631,3,119,59,0,3631,3632,3,101,50,0,3632,
	3633,3,101,50,0,3633,556,1,0,0,0,3634,3635,3,89,44,0,3635,3636,3,119,59,
	0,3636,3637,3,101,50,0,3637,3638,3,101,50,0,3638,3639,3,117,58,0,3639,3640,
	3,87,43,0,3640,3641,3,125,62,0,3641,3642,3,117,58,0,3642,558,1,0,0,0,3643,
	3644,3,89,44,0,3644,3645,3,119,59,0,3645,3646,3,105,52,0,3646,3647,3,83,
	41,0,3647,3648,3,117,58,0,3648,3649,3,95,47,0,3649,3650,3,107,53,0,3650,
	3651,3,105,52,0,3651,560,1,0,0,0,3652,3653,3,91,45,0,3653,3654,3,87,43,
	0,3654,3655,3,117,58,0,3655,3656,4,280,18,0,3656,562,1,0,0,0,3657,3658,
	3,91,45,0,3658,3659,3,87,43,0,3659,3660,3,105,52,0,3660,3661,3,87,43,0,
	3661,3662,3,113,56,0,3662,3663,3,79,39,0,3663,3664,3,101,50,0,3664,564,
	1,0,0,0,3665,3666,3,91,45,0,3666,3667,3,87,43,0,3667,3668,3,105,52,0,3668,
	3669,3,87,43,0,3669,3670,3,113,56,0,3670,3671,3,79,39,0,3671,3672,3,117,
	58,0,3672,3673,3,87,43,0,3673,3674,3,85,42,0,3674,3675,4,282,19,0,3675,
	566,1,0,0,0,3676,3677,3,91,45,0,3677,3678,3,113,56,0,3678,3679,3,107,53,
	0,3679,3680,3,119,59,0,3680,3681,3,109,54,0,3681,3682,5,95,0,0,3682,3683,
	3,113,56,0,3683,3684,3,87,43,0,3684,3685,3,109,54,0,3685,3686,3,101,50,
	0,3686,3687,3,95,47,0,3687,3688,3,83,41,0,3688,3689,3,79,39,0,3689,3690,
	3,117,58,0,3690,3691,3,95,47,0,3691,3692,3,107,53,0,3692,3693,3,105,52,
	0,3693,3694,4,283,20,0,3694,568,1,0,0,0,3695,3696,3,91,45,0,3696,3697,3,
	87,43,0,3697,3698,3,107,53,0,3698,3699,3,103,51,0,3699,3700,3,87,43,0,3700,
	3701,3,117,58,0,3701,3702,3,113,56,0,3702,3703,3,127,63,0,3703,3704,3,83,
	41,0,3704,3705,3,107,53,0,3705,3706,3,101,50,0,3706,3707,3,101,50,0,3707,
	3708,3,87,43,0,3708,3709,3,83,41,0,3709,3710,3,117,58,0,3710,3711,3,95,
	47,0,3711,3712,3,107,53,0,3712,3713,3,105,52,0,3713,570,1,0,0,0,3714,3715,
	3,91,45,0,3715,3716,3,87,43,0,3716,3717,3,107,53,0,3717,3718,3,103,51,0,
	3718,3719,3,87,43,0,3719,3720,3,117,58,0,3720,3721,3,113,56,0,3721,3722,
	3,127,63,0,3722,572,1,0,0,0,3723,3724,3,91,45,0,3724,3725,3,87,43,0,3725,
	3726,3,117,58,0,3726,3727,5,95,0,0,3727,3728,3,89,44,0,3728,3729,3,107,
	53,0,3729,3730,3,113,56,0,3730,3731,3,103,51,0,3731,3732,3,79,39,0,3732,
	3733,3,117,58,0,3733,574,1,0,0,0,3734,3735,3,91,45,0,3735,3736,3,101,50,
	0,3736,3737,3,107,53,0,3737,3738,3,81,40,0,3738,3739,3,79,39,0,3739,3740,
	3,101,50,0,3740,576,1,0,0,0,3741,3742,3,91,45,0,3742,3743,3,113,56,0,3743,
	3744,3,79,39,0,3744,3745,3,105,52,0,3745,3746,3,117,58,0,3746,578,1,0,0,
	0,3747,3748,3,91,45,0,3748,3749,3,113,56,0,3749,3750,3,79,39,0,3750,3751,
	3,105,52,0,3751,3752,3,117,58,0,3752,3753,3,115,57,0,3753,580,1,0,0,0,3754,
	3755,3,91,45,0,3755,3756,3,113,56,0,3756,3757,3,107,53,0,3757,3758,3,119,
	59,0,3758,3759,3,109,54,0,3759,582,1,0,0,0,3760,3761,3,91,45,0,3761,3762,
	3,113,56,0,3762,3763,3,107,53,0,3763,3764,3,119,59,0,3764,3765,3,109,54,
	0,3765,3766,5,95,0,0,3766,3767,3,83,41,0,3767,3768,3,107,53,0,3768,3769,
	3,105,52,0,3769,3770,3,83,41,0,3770,3771,3,79,39,0,3771,3772,3,117,58,0,
	3772,3773,6,291,24,0,3773,584,1,0,0,0,3774,3775,3,93,46,0,3775,3776,3,79,
	39,0,3776,3777,3,105,52,0,3777,3778,3,85,42,0,3778,3779,3,101,50,0,3779,
	3780,3,87,43,0,3780,3781,3,113,56,0,3781,586,1,0,0,0,3782,3783,3,93,46,
	0,3783,3784,3,79,39,0,3784,3785,3,115,57,0,3785,3786,3,93,46,0,3786,588,
	1,0,0,0,3787,3788,3,93,46,0,3788,3789,3,79,39,0,3789,3790,3,121,60,0,3790,
	3791,3,95,47,0,3791,3792,3,105,52,0,3792,3793,3,91,45,0,3793,590,1,0,0,
	0,3794,3795,3,93,46,0,3795,3796,3,87,43,0,3796,3797,3,101,50,0,3797,3798,
	3,109,54,0,3798,592,1,0,0,0,3799,3800,3,93,46,0,3800,3801,3,95,47,0,3801,
	3802,3,91,45,0,3802,3803,3,93,46,0,3803,3804,5,95,0,0,3804,3805,3,109,54,
	0,3805,3806,3,113,56,0,3806,3807,3,95,47,0,3807,3808,3,107,53,0,3808,3809,
	3,113,56,0,3809,3810,3,95,47,0,3810,3811,3,117,58,0,3811,3812,3,127,63,
	0,3812,594,1,0,0,0,3813,3814,3,93,46,0,3814,3815,3,107,53,0,3815,3816,3,
	115,57,0,3816,3817,3,117,58,0,3817,596,1,0,0,0,3818,3819,3,93,46,0,3819,
	3820,3,107,53,0,3820,3821,3,115,57,0,3821,3822,3,117,58,0,3822,3823,3,115,
	57,0,3823,598,1,0,0,0,3824,3825,3,93,46,0,3825,3826,3,107,53,0,3826,3827,
	3,119,59,0,3827,3828,3,113,56,0,3828,3829,5,95,0,0,3829,3830,3,103,51,0,
	3830,3831,3,95,47,0,3831,3832,3,83,41,0,3832,3833,3,113,56,0,3833,3834,
	3,107,53,0,3834,3835,3,115,57,0,3835,3836,3,87,43,0,3836,3837,3,83,41,0,
	3837,3838,3,107,53,0,3838,3839,3,105,52,0,3839,3840,3,85,42,0,3840,600,
	1,0,0,0,3841,3842,3,93,46,0,3842,3843,3,107,53,0,3843,3844,3,119,59,0,3844,
	3845,3,113,56,0,3845,3846,5,95,0,0,3846,3847,3,103,51,0,3847,3848,3,95,
	47,0,3848,3849,3,105,52,0,3849,3850,3,119,59,0,3850,3851,3,117,58,0,3851,
	3852,3,87,43,0,3852,602,1,0,0,0,3853,3854,3,93,46,0,3854,3855,3,107,53,
	0,3855,3856,3,119,59,0,3856,3857,3,113,56,0,3857,3858,5,95,0,0,3858,3859,
	3,115,57,0,3859,3860,3,87,43,0,3860,3861,3,83,41,0,3861,3862,3,107,53,0,
	3862,3863,3,105,52,0,3863,3864,3,85,42,0,3864,604,1,0,0,0,3865,3866,3,93,
	46,0,3866,3867,3,107,53,0,3867,3868,3,119,59,0,3868,3869,3,113,56,0,3869,
	606,1,0,0,0,3870,3871,3,95,47,0,3871,3872,3,85,42,0,3872,3873,3,87,43,0,
	3873,3874,3,105,52,0,3874,3875,3,117,58,0,3875,3876,3,95,47,0,3876,3877,
	3,89,44,0,3877,3878,3,95,47,0,3878,3879,3,87,43,0,3879,3880,3,85,42,0,3880,
	608,1,0,0,0,3881,3882,3,95,47,0,3882,3883,3,89,44,0,3883,610,1,0,0,0,3884,
	3885,3,95,47,0,3885,3886,3,91,45,0,3886,3887,3,105,52,0,3887,3888,3,107,
	53,0,3888,3889,3,113,56,0,3889,3890,3,87,43,0,3890,612,1,0,0,0,3891,3892,
	3,95,47,0,3892,3893,3,91,45,0,3893,3894,3,105,52,0,3894,3895,3,107,53,0,
	3895,3896,3,113,56,0,3896,3897,3,87,43,0,3897,3898,5,95,0,0,3898,3899,3,
	115,57,0,3899,3900,3,87,43,0,3900,3901,3,113,56,0,3901,3902,3,121,60,0,
	3902,3903,3,87,43,0,3903,3904,3,113,56,0,3904,3905,5,95,0,0,3905,3906,3,
	95,47,0,3906,3907,3,85,42,0,3907,3908,3,115,57,0,3908,614,1,0,0,0,3909,
	3910,3,95,47,0,3910,3911,3,103,51,0,3911,3912,3,109,54,0,3912,3913,3,107,
	53,0,3913,3914,3,113,56,0,3914,3915,3,117,58,0,3915,616,1,0,0,0,3916,3917,
	3,95,47,0,3917,3918,3,105,52,0,3918,3919,3,85,42,0,3919,3920,3,87,43,0,
	3920,3921,3,125,62,0,3921,3922,3,87,43,0,3922,3923,3,115,57,0,3923,618,
	1,0,0,0,3924,3925,3,95,47,0,3925,3926,3,105,52,0,3926,3927,3,85,42,0,3927,
	3928,3,87,43,0,3928,3929,3,125,62,0,3929,620,1,0,0,0,3930,3931,3,95,47,
	0,3931,3932,3,105,52,0,3932,3933,3,89,44,0,3933,3934,3,95,47,0,3934,3935,
	3,101,50,0,3935,3936,3,87,43,0,3936,622,1,0,0,0,3937,3938,3,95,47,0,3938,
	3939,3,105,52,0,3939,3940,3,95,47,0,3940,3941,3,117,58,0,3941,3942,3,95,
	47,0,3942,3943,3,79,39,0,3943,3944,3,101,50,0,3944,3945,5,95,0,0,3945,3946,
	3,115,57,0,3946,3947,3,95,47,0,3947,3948,3,129,64,0,3948,3949,3,87,43,0,
	3949,624,1,0,0,0,3950,3951,3,95,47,0,3951,3952,3,105,52,0,3952,3953,3,105,
	52,0,3953,3954,3,87,43,0,3954,3955,3,113,56,0,3955,626,1,0,0,0,3956,3957,
	3,95,47,0,3957,3958,3,105,52,0,3958,3959,3,107,53,0,3959,3960,3,119,59,
	0,3960,3961,3,117,58,0,3961,628,1,0,0,0,3962,3963,3,95,47,0,3963,3964,3,
	105,52,0,3964,3965,3,115,57,0,3965,3966,3,87,43,0,3966,3967,3,105,52,0,
	3967,3968,3,115,57,0,3968,3969,3,95,47,0,3969,3970,3,117,58,0,3970,3971,
	3,95,47,0,3971,3972,3,121,60,0,3972,3973,3,87,43,0,3973,630,1,0,0,0,3974,
	3975,3,95,47,0,3975,3976,3,105,52,0,3976,3977,3,115,57,0,3977,3978,3,87,
	43,0,3978,3979,3,113,56,0,3979,3980,3,117,58,0,3980,632,1,0,0,0,3981,3982,
	3,95,47,0,3982,3983,3,105,52,0,3983,3984,3,115,57,0,3984,3985,3,87,43,0,
	3985,3986,3,113,56,0,3986,3987,3,117,58,0,3987,3988,5,95,0,0,3988,3989,
	3,103,51,0,3989,3990,3,87,43,0,3990,3991,3,117,58,0,3991,3992,3,93,46,0,
	3992,3993,3,107,53,0,3993,3994,3,85,42,0,3994,634,1,0,0,0,3995,3996,3,95,
	47,0,3996,3997,3,105,52,0,3997,3998,3,115,57,0,3998,3999,3,117,58,0,3999,
	4000,3,79,39,0,4000,4001,3,105,52,0,4001,4002,3,83,41,0,4002,4003,3,87,
	43,0,4003,4004,4,317,21,0,4004,636,1,0,0,0,4005,4006,3,95,47,0,4006,4007,
	3,105,52,0,4007,4008,3,115,57,0,4008,4009,3,117,58,0,4009,4010,3,79,39,
	0,4010,4011,3,101,50,0,4011,4012,3,101,50,0,4012,638,1,0,0,0,4013,4014,
	3,95,47,0,4014,4015,3,105,52,0,4015,4016,3,117,58,0,4016,4017,3,87,43,0,
	4017,4018,3,91,45,0,4018,4019,3,87,43,0,4019,4020,3,113,56,0,4020,4021,
	1,0,0,0,4021,4022,6,319,25,0,4022,640,1,0,0,0,4023,4024,3,95,47,0,4024,
	4025,3,105,52,0,4025,4026,3,117,58,0,4026,4027,3,87,43,0,4027,4028,3,113,
	56,0,4028,4029,3,121,60,0,4029,4030,3,79,39,0,4030,4031,3,101,50,0,4031,
	642,1,0,0,0,4032,4033,3,95,47,0,4033,4034,3,105,52,0,4034,4035,3,117,58,
	0,4035,4036,3,107,53,0,4036,644,1,0,0,0,4037,4038,3,95,47,0,4038,4039,3,
	105,52,0,4039,4040,3,117,58,0,4040,646,1,0,0,0,4041,4042,3,95,47,0,4042,
	4043,3,105,52,0,4043,4044,3,121,60,0,4044,4045,3,107,53,0,4045,4046,3,99,
	49,0,4046,4047,3,87,43,0,4047,4048,3,113,56,0,4048,648,1,0,0,0,4049,4050,
	3,95,47,0,4050,4051,3,105,52,0,4051,650,1,0,0,0,4052,4053,3,95,47,0,4053,
	4054,3,107,53,0,4054,4055,5,95,0,0,4055,4056,3,79,39,0,4056,4057,3,89,44,
	0,4057,4058,3,117,58,0,4058,4059,3,87,43,0,4059,4060,3,113,56,0,4060,4061,
	5,95,0,0,4061,4062,3,91,45,0,4062,4063,3,117,58,0,4063,4064,3,95,47,0,4064,
	4065,3,85,42,0,4065,4066,3,115,57,0,4066,652,1,0,0,0,4067,4068,3,95,47,
	0,4068,4069,3,107,53,0,4069,4070,5,95,0,0,4070,4071,3,81,40,0,4071,4072,
	3,87,43,0,4072,4073,3,89,44,0,4073,4074,3,107,53,0,4074,4075,3,113,56,0,
	4075,4076,3,87,43,0,4076,4077,5,95,0,0,4077,4078,3,91,45,0,4078,4079,3,
	117,58,0,4079,4080,3,95,47,0,4080,4081,3,85,42,0,4081,4082,3,115,57,0,4082,
	654,1,0,0,0,4083,4084,3,95,47,0,4084,4085,3,107,53,0,4085,4086,5,95,0,0,
	4086,4087,3,117,58,0,4087,4088,3,93,46,0,4088,4089,3,113,56,0,4089,4090,
	3,87,43,0,4090,4091,3,79,39,0,4091,4092,3,85,42,0,4092,4093,1,0,0,0,4093,
	4094,6,327,26,0,4094,656,1,0,0,0,4095,4096,3,95,47,0,4096,4097,3,107,53,
	0,4097,658,1,0,0,0,4098,4099,3,95,47,0,4099,4100,3,109,54,0,4100,4101,3,
	83,41,0,4101,660,1,0,0,0,4102,4103,3,95,47,0,4103,4104,3,115,57,0,4104,
	662,1,0,0,0,4105,4106,3,95,47,0,4106,4107,3,115,57,0,4107,4108,3,107,53,
	0,4108,4109,3,101,50,0,4109,4110,3,79,39,0,4110,4111,3,117,58,0,4111,4112,
	3,95,47,0,4112,4113,3,107,53,0,4113,4114,3,105,52,0,4114,664,1,0,0,0,4115,
	4116,3,95,47,0,4116,4117,3,115,57,0,4117,4118,3,115,57,0,4118,4119,3,119,
	59,0,4119,4120,3,87,43,0,4120,4121,3,113,56,0,4121,666,1,0,0,0,4122,4123,
	3,95,47,0,4123,4124,3,117,58,0,4124,4125,3,87,43,0,4125,4126,3,113,56,0,
	4126,4127,3,79,39,0,4127,4128,3,117,58,0,4128,4129,3,87,43,0,4129,668,1,
	0,0,0,4130,4131,3,97,48,0,4131,4132,3,107,53,0,4132,4133,3,95,47,0,4133,
	4134,3,105,52,0,4134,670,1,0,0,0,4135,4136,3,97,48,0,4136,4137,3,115,57,
	0,4137,4138,3,107,53,0,4138,4139,3,105,52,0,4139,4140,4,335,22,0,4140,672,
	1,0,0,0,4141,4142,3,99,49,0,4142,4143,3,87,43,0,4143,4144,3,127,63,0,4144,
	4145,3,115,57,0,4145,674,1,0,0,0,4146,4147,3,99,49,0,4147,4148,3,87,43,
	0,4148,4149,3,127,63,0,4149,4150,5,95,0,0,4150,4151,3,81,40,0,4151,4152,
	3,101,50,0,4152,4153,3,107,53,0,4153,4154,3,83,41,0,4154,4155,3,99,49,0,
	4155,4156,5,95,0,0,4156,4157,3,115,57,0,4157,4158,3,95,47,0,4158,4159,3,
	129,64,0,4159,4160,3,87,43,0,4160,676,1,0,0,0,4161,4162,3,99,49,0,4162,
	4163,3,87,43,0,4163,4164,3,127,63,0,4164,678,1,0,0,0,4165,4166,3,99,49,
	0,4166,4167,3,95,47,0,4167,4168,3,101,50,0,4168,4169,3,101,50,0,4169,680,
	1,0,0,0,4170,4171,3,101,50,0,4171,4172,3,79,39,0,4172,4173,3,105,52,0,4173,
	4174,3,91,45,0,4174,4175,3,119,59,0,4175,4176,3,79,39,0,4176,4177,3,91,
	45,0,4177,4178,3,87,43,0,4178,682,1,0,0,0,4179,4180,3,101,50,0,4180,4181,
	3,79,39,0,4181,4182,3,115,57,0,4182,4183,3,117,58,0,4183,684,1,0,0,0,4184,
	4185,3,101,50,0,4185,4186,3,87,43,0,4186,4187,3,79,39,0,4187,4188,3,85,
	42,0,4188,4189,3,95,47,0,4189,4190,3,105,52,0,4190,4191,3,91,45,0,4191,
	686,1,0,0,0,4192,4193,3,101,50,0,4193,4194,3,87,43,0,4194,4195,3,79,39,
	0,4195,4196,3,121,60,0,4196,4197,3,87,43,0,4197,4198,3,115,57,0,4198,688,
	1,0,0,0,4199,4200,3,101,50,0,4200,4201,3,87,43,0,4201,4202,3,79,39,0,4202,
	4203,3,121,60,0,4203,4204,3,87,43,0,4204,690,1,0,0,0,4205,4206,3,101,50,
	0,4206,4207,3,87,43,0,4207,4208,3,89,44,0,4208,4209,3,117,58,0,4209,692,
	1,0,0,0,4210,4211,3,101,50,0,4211,4212,3,87,43,0,4212,4213,3,115,57,0,4213,
	4214,3,115,57,0,4214,694,1,0,0,0,4215,4216,3,101,50,0,4216,4217,3,87,43,
	0,4217,4218,3,121,60,0,4218,4219,3,87,43,0,4219,4220,3,101,50,0,4220,696,
	1,0,0,0,4221,4222,3,101,50,0,4222,4223,3,95,47,0,4223,4224,3,99,49,0,4224,
	4225,3,87,43,0,4225,698,1,0,0,0,4226,4227,3,101,50,0,4227,4228,3,95,47,
	0,4228,4229,3,103,51,0,4229,4230,3,95,47,0,4230,4231,3,117,58,0,4231,700,
	1,0,0,0,4232,4233,3,101,50,0,4233,4234,3,95,47,0,4234,4235,3,105,52,0,4235,
	4236,3,87,43,0,4236,4237,3,79,39,0,4237,4238,3,113,56,0,4238,702,1,0,0,
	0,4239,4240,3,101,50,0,4240,4241,3,95,47,0,4241,4242,3,105,52,0,4242,4243,
	3,87,43,0,4243,4244,3,115,57,0,4244,704,1,0,0,0,4245,4246,3,101,50,0,4246,
	4247,3,95,47,0,4247,4248,3,105,52,0,4248,4249,3,87,43,0,4249,4250,3,115,
	57,0,4250,4251,3,117,58,0,4251,4252,3,113,56,0,4252,4253,3,95,47,0,4253,
	4254,3,105,52,0,4254,4255,3,91,45,0,4255,706,1,0,0,0,4256,4257,3,101,50,
	0,4257,4258,3,95,47,0,4258,4259,3,115,57,0,4259,4260,3,117,58,0,4260,708,
	1,0,0,0,4261,4262,3,101,50,0,4262,4263,3,107,53,0,4263,4264,3,79,39,0,4264,
	4265,3,85,42,0,4265,710,1,0,0,0,4266,4267,3,101,50,0,4267,4268,3,107,53,
	0,4268,4269,3,83,41,0,4269,4270,3,79,39,0,4270,4271,3,101,50,0,4271,4272,
	3,117,58,0,4272,4273,3,95,47,0,4273,4274,3,103,51,0,4274,4275,3,87,43,0,
	4275,4276,1,0,0,0,4276,4277,6,355,13,0,4277,712,1,0,0,0,4278,4279,3,101,
	50,0,4279,4280,3,107,53,0,4280,4281,3,83,41,0,4281,4282,3,79,39,0,4282,
	4283,3,101,50,0,4283,4284,3,117,58,0,4284,4285,3,95,47,0,4285,4286,3,103,
	51,0,4286,4287,3,87,43,0,4287,4288,3,115,57,0,4288,4289,3,117,58,0,4289,
	4290,3,79,39,0,4290,4291,3,103,51,0,4291,4292,3,109,54,0,4292,4293,1,0,
	0,0,4293,4294,6,356,13,0,4294,714,1,0,0,0,4295,4296,3,101,50,0,4296,4297,
	3,107,53,0,4297,4298,3,83,41,0,4298,4299,3,79,39,0,4299,4300,3,101,50,0,
	4300,716,1,0,0,0,4301,4302,3,101,50,0,4302,4303,3,107,53,0,4303,4304,3,
	83,41,0,4304,4305,3,79,39,0,4305,4306,3,117,58,0,4306,4307,3,107,53,0,4307,
	4308,3,113,56,0,4308,718,1,0,0,0,4309,4310,3,101,50,0,4310,4311,3,107,53,
	0,4311,4312,3,83,41,0,4312,4313,3,99,49,0,4313,4314,3,115,57,0,4314,720,
	1,0,0,0,4315,4316,3,101,50,0,4316,4317,3,107,53,0,4317,4318,3,83,41,0,4318,
	4319,3,99,49,0,4319,722,1,0,0,0,4320,4321,3,101,50,0,4321,4322,3,107,53,
	0,4322,4323,3,91,45,0,4323,4324,3,89,44,0,4324,4325,3,95,47,0,4325,4326,
	3,101,50,0,4326,4327,3,87,43,0,4327,724,1,0,0,0,4328,4329,3,101,50,0,4329,
	4330,3,107,53,0,4330,4331,3,91,45,0,4331,4332,3,115,57,0,4332,726,1,0,0,
	0,4333,4334,3,101,50,0,4334,4335,3,107,53,0,4335,4336,3,105,52,0,4336,4337,
	3,91,45,0,4337,4338,3,81,40,0,4338,4339,3,101,50,0,4339,4340,3,107,53,0,
	4340,4341,3,81,40,0,4341,728,1,0,0,0,4342,4343,3,101,50,0,4343,4344,3,107,
	53,0,4344,4345,3,105,52,0,4345,4346,3,91,45,0,4346,4347,3,117,58,0,4347,
	4348,3,87,43,0,4348,4349,3,125,62,0,4349,4350,3,117,58,0,4350,730,1,0,0,
	0,4351,4352,3,101,50,0,4352,4353,3,107,53,0,4353,4354,3,105,52,0,4354,4355,
	3,91,45,0,4355,4356,5,95,0,0,4356,4357,3,105,52,0,4357,4358,3,119,59,0,
	4358,4359,3,103,51,0,4359,732,1,0,0,0,4360,4361,3,101,50,0,4361,4362,3,
	107,53,0,4362,4363,3,105,52,0,4363,4364,3,91,45,0,4364,734,1,0,0,0,4365,
	4366,3,101,50,0,4366,4367,3,107,53,0,4367,4368,3,107,53,0,4368,4369,3,109,
	54,0,4369,736,1,0,0,0,4370,4371,3,101,50,0,4371,4372,3,107,53,0,4372,4373,
	3,123,61,0,4373,4374,5,95,0,0,4374,4375,3,109,54,0,4375,4376,3,113,56,0,
	4376,4377,3,95,47,0,4377,4378,3,107,53,0,4378,4379,3,113,56,0,4379,4380,
	3,95,47,0,4380,4381,3,117,58,0,4381,4382,3,127,63,0,4382,738,1,0,0,0,4383,
	4384,3,103,51,0,4384,4385,3,79,39,0,4385,4386,3,115,57,0,4386,4387,3,117,
	58,0,4387,4388,3,87,43,0,4388,4389,3,113,56,0,4389,4390,5,95,0,0,4390,4391,
	3,79,39,0,4391,4392,3,119,59,0,4392,4393,3,117,58,0,4393,4394,3,107,53,
	0,4394,4395,5,95,0,0,4395,4396,3,109,54,0,4396,4397,3,107,53,0,4397,4398,
	3,115,57,0,4398,4399,3,95,47,0,4399,4400,3,117,58,0,4400,4401,3,95,47,0,
	4401,4402,3,107,53,0,4402,4403,3,105,52,0,4403,4404,4,369,23,0,4404,740,
	1,0,0,0,4405,4406,3,103,51,0,4406,4407,3,79,39,0,4407,4408,3,115,57,0,4408,
	4409,3,117,58,0,4409,4410,3,87,43,0,4410,4411,3,113,56,0,4411,4412,5,95,
	0,0,4412,4413,3,81,40,0,4413,4414,3,95,47,0,4414,4415,3,105,52,0,4415,4416,
	3,85,42,0,4416,4417,4,370,24,0,4417,742,1,0,0,0,4418,4419,3,103,51,0,4419,
	4420,3,79,39,0,4420,4421,3,115,57,0,4421,4422,3,117,58,0,4422,4423,3,87,
	43,0,4423,4424,3,113,56,0,4424,4425,5,95,0,0,4425,4426,3,83,41,0,4426,4427,
	3,107,53,0,4427,4428,3,105,52,0,4428,4429,3,105,52,0,4429,4430,3,87,43,
	0,4430,4431,3,83,41,0,4431,4432,3,117,58,0,4432,4433,5,95,0,0,4433,4434,
	3,113,56,0,4434,4435,3,87,43,0,4435,4436,3,117,58,0,4436,4437,3,113,56,
	0,4437,4438,3,127,63,0,4438,744,1,0,0,0,4439,4440,3,103,51,0,4440,4441,
	3,79,39,0,4441,4442,3,115,57,0,4442,4443,3,117,58,0,4443,4444,3,87,43,0,
	4444,4445,3,113,56,0,4445,4446,5,95,0,0,4446,4447,3,85,42,0,4447,4448,3,
	87,43,0,4448,4449,3,101,50,0,4449,4450,3,79,39,0,4450,4451,3,127,63,0,4451,
	746,1,0,0,0,4452,4453,3,103,51,0,4453,4454,3,79,39,0,4454,4455,3,115,57,
	0,4455,4456,3,117,58,0,4456,4457,3,87,43,0,4457,4458,3,113,56,0,4458,4459,
	5,95,0,0,4459,4460,3,93,46,0,4460,4461,3,107,53,0,4461,4462,3,115,57,0,
	4462,4463,3,117,58,0,4463,748,1,0,0,0,4464,4465,3,103,51,0,4465,4466,3,
	79,39,0,4466,4467,3,115,57,0,4467,4468,3,117,58,0,4468,4469,3,87,43,0,4469,
	4470,3,113,56,0,4470,4471,5,95,0,0,4471,4472,3,101,50,0,4472,4473,3,107,
	53,0,4473,4474,3,91,45,0,4474,4475,5,95,0,0,4475,4476,3,89,44,0,4476,4477,
	3,95,47,0,4477,4478,3,101,50,0,4478,4479,3,87,43,0,4479,750,1,0,0,0,4480,
	4481,3,103,51,0,4481,4482,3,79,39,0,4482,4483,3,115,57,0,4483,4484,3,117,
	58,0,4484,4485,3,87,43,0,4485,4486,3,113,56,0,4486,4487,5,95,0,0,4487,4488,
	3,101,50,0,4488,4489,3,107,53,0,4489,4490,3,91,45,0,4490,4491,5,95,0,0,
	4491,4492,3,109,54,0,4492,4493,3,107,53,0,4493,4494,3,115,57,0,4494,752,
	1,0,0,0,4495,4496,3,103,51,0,4496,4497,3,79,39,0,4497,4498,3,115,57,0,4498,
	4499,3,117,58,0,4499,4500,3,87,43,0,4500,4501,3,113,56,0,4501,4502,5,95,
	0,0,4502,4503,3,109,54,0,4503,4504,3,79,39,0,4504,4505,3,115,57,0,4505,
	4506,3,115,57,0,4506,4507,3,123,61,0,4507,4508,3,107,53,0,4508,4509,3,113,
	56,0,4509,4510,3,85,42,0,4510,754,1,0,0,0,4511,4512,3,103,51,0,4512,4513,
	3,79,39,0,4513,4514,3,115,57,0,4514,4515,3,117,58,0,4515,4516,3,87,43,0,
	4516,4517,3,113,56,0,4517,4518,5,95,0,0,4518,4519,3,109,54,0,4519,4520,
	3,107,53,0,4520,4521,3,113,56,0,4521,4522,3,117,58,0,4522,756,1,0,0,0,4523,
	4524,3,103,51,0,4524,4525,3,79,39,0,4525,4526,3,115,57,0,4526,4527,3,117,
	58,0,4527,4528,3,87,43,0,4528,4529,3,113,56,0,4529,4530,5,95,0,0,4530,4531,
	3,113,56,0,4531,4532,3,87,43,0,4532,4533,3,117,58,0,4533,4534,3,113,56,
	0,4534,4535,3,127,63,0,4535,4536,5,95,0,0,4536,4537,3,83,41,0,4537,4538,
	3,107,53,0,4538,4539,3,119,59,0,4539,4540,3,105,52,0,4540,4541,3,117,58,
	0,4541,4542,4,378,25,0,4542,758,1,0,0,0,4543,4544,3,103,51,0,4544,4545,
	3,79,39,0,4545,4546,3,115,57,0,4546,4547,3,117,58,0,4547,4548,3,87,43,0,
	4548,4549,3,113,56,0,4549,4550,5,95,0,0,4550,4551,3,115,57,0,4551,4552,
	3,87,43,0,4552,4553,3,113,56,0,4553,4554,3,121,60,0,4554,4555,3,87,43,0,
	4555,4556,3,113,56,0,4556,4557,5,95,0,0,4557,4558,3,95,47,0,4558,4559,3,
	85,42,0,4559,760,1,0,0,0,4560,4561,3,103,51,0,4561,4562,3,79,39,0,4562,
	4563,3,115,57,0,4563,4564,3,117,58,0,4564,4565,3,87,43,0,4565,4566,3,113,
	56,0,4566,4567,5,95,0,0,4567,4568,3,115,57,0,4568,4569,3,115,57,0,4569,
	4570,3,101,50,0,4570,4571,5,95,0,0,4571,4572,3,83,41,0,4572,4573,3,79,39,
	0,4573,4574,3,109,54,0,4574,4575,3,79,39,0,4575,4576,3,117,58,0,4576,4577,
	3,93,46,0,4577,762,1,0,0,0,4578,4579,3,103,51,0,4579,4580,3,79,39,0,4580,
	4581,3,115,57,0,4581,4582,3,117,58,0,4582,4583,3,87,43,0,4583,4584,3,113,
	56,0,4584,4585,5,95,0,0,4585,4586,3,115,57,0,4586,4587,3,115,57,0,4587,
	4588,3,101,50,0,4588,4589,5,95,0,0,4589,4590,3,83,41,0,4590,4591,3,79,39,
	0,4591,764,1,0,0,0,4592,4593,3,103,51,0,4593,4594,3,79,39,0,4594,4595,3,
	115,57,0,4595,4596,3,117,58,0,4596,4597,3,87,43,0,4597,4598,3,113,56,0,
	4598,4599,5,95,0,0,4599,4600,3,115,57,0,4600,4601,3,115,57,0,4601,4602,
	3,101,50,0,4602,4603,5,95,0,0,4603,4604,3,83,41,0,4604,4605,3,87,43,0,4605,
	4606,3,113,56,0,4606,4607,3,117,58,0,4607,766,1,0,0,0,4608,4609,3,103,51,
	0,4609,4610,3,79,39,0,4610,4611,3,115,57,0,4611,4612,3,117,58,0,4612,4613,
	3,87,43,0,4613,4614,3,113,56,0,4614,4615,5,95,0,0,4615,4616,3,115,57,0,
	4616,4617,3,115,57,0,4617,4618,3,101,50,0,4618,4619,5,95,0,0,4619,4620,
	3,83,41,0,4620,4621,3,95,47,0,4621,4622,3,109,54,0,4622,4623,3,93,46,0,
	4623,4624,3,87,43,0,4624,4625,3,113,56,0,4625,768,1,0,0,0,4626,4627,3,103,
	51,0,4627,4628,3,79,39,0,4628,4629,3,115,57,0,4629,4630,3,117,58,0,4630,
	4631,3,87,43,0,4631,4632,3,113,56,0,4632,4633,5,95,0,0,4633,4634,3,115,
	57,0,4634,4635,3,115,57,0,4635,4636,3,101,50,0,4636,4637,5,95,0,0,4637,
	4638,3,83,41,0,4638,4639,3,113,56,0,4639,4640,3,101,50,0,4640,4641,4,384,
	26,0,4641,770,1,0,0,0,4642,4643,3,103,51,0,4643,4644,3,79,39,0,4644,4645,
	3,115,57,0,4645,4646,3,117,58,0,4646,4647,3,87,43,0,4647,4648,3,113,56,
	0,4648,4649,5,95,0,0,4649,4650,3,115,57,0,4650,4651,3,115,57,0,4651,4652,
	3,101,50,0,4652,4653,5,95,0,0,4653,4654,3,83,41,0,4654,4655,3,113,56,0,
	4655,4656,3,101,50,0,4656,4657,3,109,54,0,4657,4658,3,79,39,0,4658,4659,
	3,117,58,0,4659,4660,3,93,46,0,4660,4661,4,385,27,0,4661,772,1,0,0,0,4662,
	4663,3,103,51,0,4663,4664,3,79,39,0,4664,4665,3,115,57,0,4665,4666,3,117,
	58,0,4666,4667,3,87,43,0,4667,4668,3,113,56,0,4668,4669,5,95,0,0,4669,4670,
	3,115,57,0,4670,4671,3,115,57,0,4671,4672,3,101,50,0,4672,4673,5,95,0,0,
	4673,4674,3,99,49,0,4674,4675,3,87,43,0,4675,4676,3,127,63,0,4676,774,1,
	0,0,0,4677,4678,3,103,51,0,4678,4679,3,79,39,0,4679,4680,3,115,57,0,4680,
	4681,3,117,58,0,4681,4682,3,87,43,0,4682,4683,3,113,56,0,4683,4684,5,95,
	0,0,4684,4685,3,115,57,0,4685,4686,3,115,57,0,4686,4687,3,101,50,0,4687,
	776,1,0,0,0,4688,4689,3,103,51,0,4689,4690,3,79,39,0,4690,4691,3,115,57,
	0,4691,4692,3,117,58,0,4692,4693,3,87,43,0,4693,4694,3,113,56,0,4694,4695,
	5,95,0,0,4695,4696,3,115,57,0,4696,4697,3,115,57,0,4697,4698,3,101,50,0,
	4698,4699,5,95,0,0,4699,4700,3,121,60,0,4700,4701,3,87,43,0,4701,4702,3,
	113,56,0,4702,4703,3,95,47,0,4703,4704,3,89,44,0,4704,4705,3,127,63,0,4705,
	4706,5,95,0,0,4706,4707,3,115,57,0,4707,4708,3,87,43,0,4708,4709,3,113,
	56,0,4709,4710,3,121,60,0,4710,4711,3,87,43,0,4711,4712,3,113,56,0,4712,
	4713,5,95,0,0,4713,4714,3,83,41,0,4714,4715,3,87,43,0,4715,4717,3,113,56,
	0,4716,4718,3,117,58,0,4717,4716,1,0,0,0,4717,4718,1,0,0,0,4718,778,1,0,
	0,0,4719,4720,3,103,51,0,4720,4721,3,79,39,0,4721,4722,3,115,57,0,4722,
	4723,3,117,58,0,4723,4724,3,87,43,0,4724,4725,3,113,56,0,4725,780,1,0,0,
	0,4726,4727,3,103,51,0,4727,4728,3,79,39,0,4728,4729,3,115,57,0,4729,4730,
	3,117,58,0,4730,4731,3,87,43,0,4731,4732,3,113,56,0,4732,4733,5,95,0,0,
	4733,4734,3,117,58,0,4734,4735,3,101,50,0,4735,4736,3,115,57,0,4736,4737,
	5,95,0,0,4737,4738,3,121,60,0,4738,4739,3,87,43,0,4739,4740,3,113,56,0,
	4740,4741,3,115,57,0,4741,4742,3,95,47,0,4742,4743,3,107,53,0,4743,4744,
	3,105,52,0,4744,4745,4,390,28,0,4745,782,1,0,0,0,4746,4747,3,103,51,0,4747,
	4748,3,79,39,0,4748,4749,3,115,57,0,4749,4750,3,117,58,0,4750,4751,3,87,
	43,0,4751,4752,3,113,56,0,4752,4753,5,95,0,0,4753,4754,3,119,59,0,4754,
	4755,3,115,57,0,4755,4756,3,87,43,0,4756,4757,3,113,56,0,4757,784,1,0,0,
	0,4758,4759,3,103,51,0,4759,4760,3,79,39,0,4760,4761,3,115,57,0,4761,4762,
	3,117,58,0,4762,4763,3,87,43,0,4763,4764,3,113,56,0,4764,4765,5,95,0,0,
	4765,4766,3,93,46,0,4766,4767,3,87,43,0,4767,4768,3,79,39,0,4768,4769,3,
	113,56,0,4769,4770,3,117,58,0,4770,4771,3,81,40,0,4771,4772,3,87,43,0,4772,
	4773,3,79,39,0,4773,4774,3,117,58,0,4774,4775,5,95,0,0,4775,4776,3,109,
	54,0,4776,4777,3,87,43,0,4777,4778,3,113,56,0,4778,4779,3,95,47,0,4779,
	4781,3,107,53,0,4780,4782,3,85,42,0,4781,4780,1,0,0,0,4781,4782,1,0,0,0,
	4782,786,1,0,0,0,4783,4784,3,103,51,0,4784,4785,3,79,39,0,4785,4786,3,117,
	58,0,4786,4787,3,83,41,0,4787,4788,3,93,46,0,4788,788,1,0,0,0,4789,4790,
	3,103,51,0,4790,4791,3,79,39,0,4791,4792,3,125,62,0,4792,4793,5,95,0,0,
	4793,4794,3,83,41,0,4794,4795,3,107,53,0,4795,4796,3,105,52,0,4796,4797,
	3,105,52,0,4797,4798,3,87,43,0,4798,4799,3,83,41,0,4799,4800,3,117,58,0,
	4800,4801,3,95,47,0,4801,4802,3,107,53,0,4802,4803,3,105,52,0,4803,4804,
	3,115,57,0,4804,4805,5,95,0,0,4805,4806,3,109,54,0,4806,4807,3,87,43,0,
	4807,4808,3,113,56,0,4808,4809,5,95,0,0,4809,4810,3,93,46,0,4810,4811,3,
	107,53,0,4811,4812,3,119,59,0,4812,4813,3,113,56,0,4813,790,1,0,0,0,4814,
	4815,3,103,51,0,4815,4816,3,79,39,0,4816,4817,3,125,62,0,4817,4818,5,95,
	0,0,4818,4819,3,111,55,0,4819,4820,3,119,59,0,4820,4821,3,87,43,0,4821,
	4822,3,113,56,0,4822,4823,3,95,47,0,4823,4824,3,87,43,0,4824,4825,3,115,
	57,0,4825,4826,5,95,0,0,4826,4827,3,109,54,0,4827,4828,3,87,43,0,4828,4829,
	3,113,56,0,4829,4830,5,95,0,0,4830,4831,3,93,46,0,4831,4832,3,107,53,0,
	4832,4833,3,119,59,0,4833,4834,3,113,56,0,4834,792,1,0,0,0,4835,4836,3,
	103,51,0,4836,4837,3,79,39,0,4837,4838,3,125,62,0,4838,4839,5,95,0,0,4839,
	4840,3,113,56,0,4840,4841,3,107,53,0,4841,4842,3,123,61,0,4842,4843,3,115,
	57,0,4843,794,1,0,0,0,4844,4845,3,103,51,0,4845,4846,3,79,39,0,4846,4847,
	3,125,62,0,4847,4848,5,95,0,0,4848,4849,3,115,57,0,4849,4850,3,95,47,0,
	4850,4851,3,129,64,0,4851,4852,3,87,43,0,4852,796,1,0,0,0,4853,4854,3,103,
	51,0,4854,4855,3,79,39,0,4855,4856,3,125,62,0,4856,4857,5,95,0,0,4857,4858,
	3,115,57,0,4858,4859,3,117,58,0,4859,4860,3,79,39,0,4860,4861,3,117,58,
	0,4861,4862,3,87,43,0,4862,4863,3,103,51,0,4863,4864,3,87,43,0,4864,4865,
	3,105,52,0,4865,4866,3,117,58,0,4866,4867,5,95,0,0,4867,4868,3,117,58,0,
	4868,4869,3,95,47,0,4869,4870,3,103,51,0,4870,4871,3,87,43,0,4871,4872,
	4,398,29,0,4872,798,1,0,0,0,4873,4874,3,103,51,0,4874,4875,3,79,39,0,4875,
	4876,3,125,62,0,4876,4877,6,399,27,0,4877,800,1,0,0,0,4878,4879,3,103,51,
	0,4879,4880,3,79,39,0,4880,4881,3,125,62,0,4881,4882,5,95,0,0,4882,4883,
	3,119,59,0,4883,4884,3,109,54,0,4884,4885,3,85,42,0,4885,4886,3,79,39,0,
	4886,4887,3,117,58,0,4887,4888,3,87,43,0,4888,4889,3,115,57,0,4889,4890,
	5,95,0,0,4890,4891,3,109,54,0,4891,4892,3,87,43,0,4892,4893,3,113,56,0,
	4893,4894,5,95,0,0,4894,4895,3,93,46,0,4895,4896,3,107,53,0,4896,4897,3,
	119,59,0,4897,4898,3,113,56,0,4898,802,1,0,0,0,4899,4900,3,103,51,0,4900,
	4901,3,79,39,0,4901,4902,3,125,62,0,4902,4903,5,95,0,0,4903,4904,3,119,
	59,0,4904,4905,3,115,57,0,4905,4906,3,87,43,0,4906,4907,3,113,56,0,4907,
	4908,5,95,0,0,4908,4909,3,83,41,0,4909,4910,3,107,53,0,4910,4911,3,105,
	52,0,4911,4912,3,105,52,0,4912,4913,3,87,43,0,4913,4914,3,83,41,0,4914,
	4915,3,117,58,0,4915,4916,3,95,47,0,4916,4917,3,107,53,0,4917,4918,3,105,
	52,0,4918,4919,3,115,57,0,4919,804,1,0,0,0,4920,4921,3,103,51,0,4921,4922,
	3,79,39,0,4922,4923,3,125,62,0,4923,4924,3,121,60,0,4924,4925,3,79,39,0,
	4925,4926,3,101,50,0,4926,4927,3,119,59,0,4927,4928,3,87,43,0,4928,806,
	1,0,0,0,4929,4930,3,103,51,0,4930,4931,3,87,43,0,4931,4932,3,85,42,0,4932,
	4933,3,95,47,0,4933,4934,3,119,59,0,4934,4935,3,103,51,0,4935,4936,3,81,
	40,0,4936,4937,3,101,50,0,4937,4938,3,107,53,0,4938,4939,3,81,40,0,4939,
	808,1,0,0,0,4940,4941,3,103,51,0,4941,4942,3,87,43,0,4942,4943,3,85,42,
	0,4943,4944,3,95,47,0,4944,4945,3,119,59,0,4945,4946,3,103,51,0,4946,4947,
	3,95,47,0,4947,4948,3,105,52,0,4948,4949,3,117,58,0,4949,810,1,0,0,0,4950,
	4951,3,103,51,0,4951,4952,3,87,43,0,4952,4953,3,85,42,0,4953,4954,3,95,
	47,0,4954,4955,3,119,59,0,4955,4956,3,103,51,0,4956,4957,3,117,58,0,4957,
	4958,3,87,43,0,4958,4959,3,125,62,0,4959,4960,3,117,58,0,4960,812,1,0,0,
	0,4961,4962,3,103,51,0,4962,4963,3,87,43,0,4963,4964,3,85,42,0,4964,4965,
	3,95,47,0,4965,4966,3,119,59,0,4966,4967,3,103,51,0,4967,814,1,0,0,0,4968,
	4969,3,103,51,0,4969,4970,3,87,43,0,4970,4971,3,103,51,0,4971,4972,3,107,
	53,0,4972,4973,3,113,56,0,4973,4974,3,127,63,0,4974,816,1,0,0,0,4975,4976,
	3,103,51,0,4976,4977,3,87,43,0,4977,4978,3,113,56,0,4978,4979,3,91,45,0,
	4979,4980,3,87,43,0,4980,818,1,0,0,0,4981,4982,3,103,51,0,4982,4983,3,87,
	43,0,4983,4984,3,115,57,0,4984,4985,3,115,57,0,4985,4986,3,79,39,0,4986,
	4987,3,91,45,0,4987,4988,3,87,43,0,4988,4989,5,95,0,0,4989,4990,3,117,58,
	0,4990,4991,3,87,43,0,4991,4992,3,125,62,0,4992,4993,3,117,58,0,4993,820,
	1,0,0,0,4994,4995,3,103,51,0,4995,4996,3,95,47,0,4996,4997,3,83,41,0,4997,
	4998,3,113,56,0,4998,4999,3,107,53,0,4999,5000,3,115,57,0,5000,5001,3,87,
	43,0,5001,5002,3,83,41,0,5002,5003,3,107,53,0,5003,5004,3,105,52,0,5004,
	5005,3,85,42,0,5005,822,1,0,0,0,5006,5007,3,103,51,0,5007,5008,3,95,47,
	0,5008,5009,3,85,42,0,5009,5010,6,411,28,0,5010,824,1,0,0,0,5011,5012,3,
	103,51,0,5012,5013,3,95,47,0,5013,5014,3,85,42,0,5014,5015,3,85,42,0,5015,
	5016,3,101,50,0,5016,5017,3,87,43,0,5017,5018,3,95,47,0,5018,5019,3,105,
	52,0,5019,5020,3,117,58,0,5020,5021,1,0,0,0,5021,5022,6,412,29,0,5022,826,
	1,0,0,0,5023,5024,3,103,51,0,5024,5025,3,95,47,0,5025,5026,3,91,45,0,5026,
	5027,3,113,56,0,5027,5028,3,79,39,0,5028,5029,3,117,58,0,5029,5030,3,87,
	43,0,5030,828,1,0,0,0,5031,5032,3,103,51,0,5032,5033,3,95,47,0,5033,5034,
	3,105,52,0,5034,5035,3,119,59,0,5035,5036,3,117,58,0,5036,5037,3,87,43,
	0,5037,5038,5,95,0,0,5038,5039,3,103,51,0,5039,5040,3,95,47,0,5040,5041,
	3,83,41,0,5041,5042,3,113,56,0,5042,5043,3,107,53,0,5043,5044,3,115,57,
	0,5044,5045,3,87,43,0,5045,5046,3,83,41,0,5046,5047,3,107,53,0,5047,5048,
	3,105,52,0,5048,5049,3,85,42,0,5049,830,1,0,0,0,5050,5051,3,103,51,0,5051,
	5052,3,95,47,0,5052,5053,3,105,52,0,5053,5054,3,119,59,0,5054,5055,3,117,
	58,0,5055,5056,3,87,43,0,5056,5057,5,95,0,0,5057,5058,3,115,57,0,5058,5059,
	3,87,43,0,5059,5060,3,83,41,0,5060,5061,3,107,53,0,5061,5062,3,105,52,0,
	5062,5063,3,85,42,0,5063,832,1,0,0,0,5064,5065,3,103,51,0,5065,5066,3,95,
	47,0,5066,5067,3,105,52,0,5067,5068,3,119,59,0,5068,5069,3,117,58,0,5069,
	5070,3,87,43,0,5070,834,1,0,0,0,5071,5072,3,103,51,0,5072,5073,3,95,47,
	0,5073,5074,3,105,52,0,5074,5075,5,95,0,0,5075,5076,3,113,56,0,5076,5077,
	3,107,53,0,5077,5078,3,123,61,0,5078,5079,3,115,57,0,5079,836,1,0,0,0,5080,
	5081,3,103,51,0,5081,5082,3,95,47,0,5082,5083,3,105,52,0,5083,5084,6,418,
	30,0,5084,838,1,0,0,0,5085,5086,3,103,51,0,5086,5087,3,107,53,0,5087,5088,
	3,85,42,0,5088,5089,3,87,43,0,5089,840,1,0,0,0,5090,5091,3,103,51,0,5091,
	5092,3,107,53,0,5092,5093,3,85,42,0,5093,5094,3,95,47,0,5094,5095,3,89,
	44,0,5095,5096,3,95,47,0,5096,5097,3,87,43,0,5097,5098,3,115,57,0,5098,
	842,1,0,0,0,5099,5100,3,103,51,0,5100,5101,3,107,53,0,5101,5102,3,85,42,
	0,5102,5103,3,95,47,0,5103,5104,3,89,44,0,5104,5105,3,127,63,0,5105,844,
	1,0,0,0,5106,5107,3,103,51,0,5107,5108,3,107,53,0,5108,5109,3,85,42,0,5109,
	846,1,0,0,0,5110,5111,3,103,51,0,5111,5112,3,107,53,0,5112,5113,3,105,52,
	0,5113,5114,3,117,58,0,5114,5115,3,93,46,0,5115,848,1,0,0,0,5116,5117,3,
	103,51,0,5117,5118,3,119,59,0,5118,5119,3,101,50,0,5119,5120,3,117,58,0,
	5120,5121,3,95,47,0,5121,5122,3,101,50,0,5122,5123,3,95,47,0,5123,5124,
	3,105,52,0,5124,5125,3,87,43,0,5125,5126,3,115,57,0,5126,5127,3,117,58,
	0,5127,5128,3,113,56,0,5128,5129,3,95,47,0,5129,5130,3,105,52,0,5130,5131,
	3,91,45,0,5131,850,1,0,0,0,5132,5133,3,103,51,0,5133,5134,3,119,59,0,5134,
	5135,3,101,50,0,5135,5136,3,117,58,0,5136,5137,3,95,47,0,5137,5138,3,109,
	54,0,5138,5139,3,107,53,0,5139,5140,3,95,47,0,5140,5141,3,105,52,0,5141,
	5142,3,117,58,0,5142,852,1,0,0,0,5143,5144,3,103,51,0,5144,5145,3,119,59,
	0,5145,5146,3,101,50,0,5146,5147,3,117,58,0,5147,5148,3,95,47,0,5148,5149,
	3,109,54,0,5149,5150,3,107,53,0,5150,5151,3,101,50,0,5151,5152,3,127,63,
	0,5152,5153,3,91,45,0,5153,5154,3,107,53,0,5154,5155,3,105,52,0,5155,854,
	1,0,0,0,5156,5157,3,103,51,0,5157,5158,3,119,59,0,5158,5159,3,117,58,0,
	5159,5160,3,87,43,0,5160,5161,3,125,62,0,5161,856,1,0,0,0,5162,5163,3,103,
	51,0,5163,5164,3,127,63,0,5164,5165,3,115,57,0,5165,5166,3,111,55,0,5166,
	5167,3,101,50,0,5167,5168,5,95,0,0,5168,5169,3,87,43,0,5169,5170,3,113,
	56,0,5170,5171,3,113,56,0,5171,5172,3,105,52,0,5172,5173,3,107,53,0,5173,
	858,1,0,0,0,5174,5175,3,105,52,0,5175,5176,3,79,39,0,5176,5177,3,103,51,
	0,5177,5178,3,87,43,0,5178,5179,3,115,57,0,5179,860,1,0,0,0,5180,5181,3,
	105,52,0,5181,5182,3,79,39,0,5182,5183,3,103,51,0,5183,5184,3,87,43,0,5184,
	862,1,0,0,0,5185,5186,3,105,52,0,5186,5187,3,79,39,0,5187,5188,3,117,58,
	0,5188,5189,3,95,47,0,5189,5190,3,107,53,0,5190,5191,3,105,52,0,5191,5192,
	3,79,39,0,5192,5193,3,101,50,0,5193,864,1,0,0,0,5194,5195,3,105,52,0,5195,
	5196,3,79,39,0,5196,5197,3,117,58,0,5197,5198,3,119,59,0,5198,5199,3,113,
	56,0,5199,5200,3,79,39,0,5200,5201,3,101,50,0,5201,866,1,0,0,0,5202,5203,
	3,105,52,0,5203,5204,3,83,41,0,5204,5205,3,93,46,0,5205,5206,3,79,39,0,
	5206,5207,3,113,56,0,5207,5208,5,95,0,0,5208,5209,3,115,57,0,5209,5210,
	3,117,58,0,5210,5211,3,113,56,0,5211,5212,3,95,47,0,5212,5213,3,105,52,
	0,5213,5214,3,91,45,0,5214,868,1,0,0,0,5215,5216,3,105,52,0,5216,5217,3,
	83,41,0,5217,5218,3,93,46,0,5218,5219,3,79,39,0,5219,5220,3,113,56,0,5220,
	870,1,0,0,0,5221,5222,3,105,52,0,5222,5223,3,85,42,0,5223,5224,3,81,40,
	0,5224,5225,1,0,0,0,5225,5226,6,435,31,0,5226,872,1,0,0,0,5227,5228,3,105,
	52,0,5228,5229,3,85,42,0,5229,5230,3,81,40,0,5230,5231,3,83,41,0,5231,5232,
	3,101,50,0,5232,5233,3,119,59,0,5233,5234,3,115,57,0,5234,5235,3,117,58,
	0,5235,5236,3,87,43,0,5236,5237,3,113,56,0,5237,874,1,0,0,0,5238,5239,3,
	105,52,0,5239,5240,3,87,43,0,5240,5241,3,91,45,0,5241,876,1,0,0,0,5242,
	5243,3,105,52,0,5243,5244,3,87,43,0,5244,5245,3,121,60,0,5245,5246,3,87,
	43,0,5246,5247,3,113,56,0,5247,5248,4,438,30,0,5248,878,1,0,0,0,5249,5250,
	3,105,52,0,5250,5251,3,87,43,0,5251,5252,3,123,61,0,5252,880,1,0,0,0,5253,
	5254,3,105,52,0,5254,5255,3,87,43,0,5255,5256,3,125,62,0,5256,5257,3,117,
	58,0,5257,882,1,0,0,0,5258,5259,3,105,52,0,5259,5260,3,107,53,0,5260,5261,
	3,85,42,0,5261,5262,3,87,43,0,5262,5263,3,91,45,0,5263,5264,3,113,56,0,
	5264,5265,3,107,53,0,5265,5266,3,119,59,0,5266,5267,3,109,54,0,5267,884,
	1,0,0,0,5268,5269,3,105,52,0,5269,5270,3,107,53,0,5270,5271,3,105,52,0,
	5271,5272,3,87,43,0,5272,886,1,0,0,0,5273,5274,3,105,52,0,5274,5275,3,107,
	53,0,5275,5276,3,105,52,0,5276,5277,3,81,40,0,5277,5278,3,101,50,0,5278,
	5279,3,107,53,0,5279,5280,3,83,41,0,5280,5281,3,99,49,0,5281,5282,3,95,
	47,0,5282,5283,3,105,52,0,5283,5284,3,91,45,0,5284,5285,4,443,31,0,5285,
	888,1,0,0,0,5286,5287,3,105,52,0,5287,5288,3,107,53,0,5288,5289,3,117,58,
	0,5289,5290,6,444,32,0,5290,890,1,0,0,0,5291,5292,3,105,52,0,5292,5293,
	3,107,53,0,5293,5294,3,123,61,0,5294,5295,6,445,33,0,5295,892,1,0,0,0,5296,
	5297,3,105,52,0,5297,5298,3,107,53,0,5298,894,1,0,0,0,5299,5300,3,105,52,
	0,5300,5301,3,107,53,0,5301,5302,5,95,0,0,5302,5303,3,123,61,0,5303,5304,
	3,79,39,0,5304,5305,3,95,47,0,5305,5306,3,117,58,0,5306,896,1,0,0,0,5307,
	5308,3,105,52,0,5308,5309,3,107,53,0,5309,5310,5,95,0,0,5310,5311,3,123,
	61,0,5311,5312,3,113,56,0,5312,5313,3,95,47,0,5313,5314,3,117,58,0,5314,
	5315,3,87,43,0,5315,5316,5,95,0,0,5316,5317,3,117,58,0,5317,5318,3,107,
	53,0,5318,5319,5,95,0,0,5319,5320,3,81,40,0,5320,5321,3,95,47,0,5321,5322,
	3,105,52,0,5322,5323,3,101,50,0,5323,5324,3,107,53,0,5324,5325,3,91,45,
	0,5325,898,1,0,0,0,5326,5327,3,105,52,0,5327,5328,3,119,59,0,5328,5329,
	3,101,50,0,5329,5330,3,101,50,0,5330,900,1,0,0,0,5331,5332,3,105,52,0,5332,
	5333,3,119,59,0,5333,5334,3,103,51,0,5334,5335,3,81,40,0,5335,5336,3,87,
	43,0,5336,5337,3,113,56,0,5337,5338,4,450,32,0,5338,902,1,0,0,0,5339,5340,
	3,105,52,0,5340,5341,3,119,59,0,5341,5342,3,103,51,0,5342,5343,3,87,43,
	0,5343,5344,3,113,56,0,5344,5345,3,95,47,0,5345,5346,3,83,41,0,5346,904,
	1,0,0,0,5347,5348,3,105,52,0,5348,5349,3,121,60,0,5349,5350,3,79,39,0,5350,
	5351,3,113,56,0,5351,5352,3,83,41,0,5352,5353,3,93,46,0,5353,5354,3,79,
	39,0,5354,5355,3,113,56,0,5355,906,1,0,0,0,5356,5357,3,107,53,0,5357,5358,
	3,89,44,0,5358,5359,3,89,44,0,5359,5360,3,101,50,0,5360,5361,3,95,47,0,
	5361,5362,3,105,52,0,5362,5363,3,87,43,0,5363,908,1,0,0,0,5364,5365,3,107,
	53,0,5365,5366,3,89,44,0,5366,5367,3,89,44,0,5367,5368,3,115,57,0,5368,
	5369,3,87,43,0,5369,5370,3,117,58,0,5370,910,1,0,0,0,5371,5372,3,107,53,
	0,5372,5373,3,101,50,0,5373,5374,3,85,42,0,5374,5375,5,95,0,0,5375,5376,
	3,109,54,0,5376,5377,3,79,39,0,5377,5378,3,115,57,0,5378,5379,3,115,57,
	0,5379,5380,3,123,61,0,5380,5381,3,107,53,0,5381,5382,3,113,56,0,5382,5383,
	3,85,42,0,5383,5384,4,455,33,0,5384,912,1,0,0,0,5385,5386,3,107,53,0,5386,
	5387,3,105,52,0,5387,914,1,0,0,0,5388,5389,3,107,53,0,5389,5390,3,105,52,
	0,5390,5391,3,87,43,0,5391,916,1,0,0,0,5392,5393,3,107,53,0,5393,5394,3,
	105,52,0,5394,5395,3,101,50,0,5395,5396,3,95,47,0,5396,5397,3,105,52,0,
	5397,5398,3,87,43,0,5398,918,1,0,0,0,5399,5400,3,107,53,0,5400,5401,3,105,
	52,0,5401,5402,3,101,50,0,5402,5403,3,127,63,0,5403,5404,4,459,34,0,5404,
	920,1,0,0,0,5405,5406,3,107,53,0,5406,5407,3,109,54,0,5407,5408,3,87,43,
	0,5408,5409,3,105,52,0,5409,922,1,0,0,0,5410,5411,3,107,53,0,5411,5412,
	3,109,54,0,5412,5413,3,117,58,0,5413,5414,3,95,47,0,5414,5415,3,103,51,
	0,5415,5416,3,95,47,0,5416,5417,3,129,64,0,5417,5418,3,87,43,0,5418,924,
	1,0,0,0,5419,5420,3,107,53,0,5420,5421,3,109,54,0,5421,5422,3,117,58,0,
	5422,5423,3,95,47,0,5423,5424,3,103,51,0,5424,5425,3,95,47,0,5425,5426,
	3,129,64,0,5426,5427,3,87,43,0,5427,5428,3,113,56,0,5428,5429,5,95,0,0,
	5429,5430,3,83,41,0,5430,5431,3,107,53,0,5431,5432,3,115,57,0,5432,5433,
	3,117,58,0,5433,5434,3,115,57,0,5434,5435,4,462,35,0,5435,926,1,0,0,0,5436,
	5437,3,107,53,0,5437,5438,3,109,54,0,5438,5439,3,117,58,0,5439,5440,3,95,
	47,0,5440,5441,3,107,53,0,5441,5442,3,105,52,0,5442,5443,3,115,57,0,5443,
	928,1,0,0,0,5444,5445,3,107,53,0,5445,5446,3,109,54,0,5446,5447,3,117,58,
	0,5447,5448,3,95,47,0,5448,5449,3,107,53,0,5449,5450,3,105,52,0,5450,930,
	1,0,0,0,5451,5452,3,107,53,0,5452,5453,3,109,54,0,5453,5454,3,117,58,0,
	5454,5455,3,95,47,0,5455,5456,3,107,53,0,5456,5457,3,105,52,0,5457,5458,
	3,79,39,0,5458,5459,3,101,50,0,5459,5460,3,101,50,0,5460,5461,3,127,63,
	0,5461,932,1,0,0,0,5462,5463,3,107,53,0,5463,5464,3,113,56,0,5464,5465,
	3,85,42,0,5465,5466,3,87,43,0,5466,5467,3,113,56,0,5467,934,1,0,0,0,5468,
	5469,3,107,53,0,5469,5470,3,113,56,0,5470,936,1,0,0,0,5471,5472,3,107,53,
	0,5472,5473,3,119,59,0,5473,5474,3,117,58,0,5474,5475,3,87,43,0,5475,5476,
	3,113,56,0,5476,938,1,0,0,0,5477,5478,3,107,53,0,5478,5479,3,119,59,0,5479,
	5480,3,117,58,0,5480,5481,3,89,44,0,5481,5482,3,95,47,0,5482,5483,3,101,
	50,0,5483,5484,3,87,43,0,5484,940,1,0,0,0,5485,5486,3,107,53,0,5486,5487,
	3,119,59,0,5487,5488,3,117,58,0,5488,942,1,0,0,0,5489,5490,3,107,53,0,5490,
	5491,3,123,61,0,5491,5492,3,105,52,0,5492,5493,3,87,43,0,5493,5494,3,113,
	56,0,5494,944,1,0,0,0,5495,5496,3,109,54,0,5496,5497,3,79,39,0,5497,5498,
	3,83,41,0,5498,5499,3,99,49,0,5499,5500,5,95,0,0,5500,5501,3,99,49,0,5501,
	5502,3,87,43,0,5502,5503,3,127,63,0,5503,5504,3,115,57,0,5504,946,1,0,0,
	0,5505,5506,3,109,54,0,5506,5507,3,79,39,0,5507,5508,3,91,45,0,5508,5509,
	3,87,43,0,5509,948,1,0,0,0,5510,5511,3,109,54,0,5511,5512,3,79,39,0,5512,
	5513,3,113,56,0,5513,5514,3,115,57,0,5514,5515,3,87,43,0,5515,5516,3,113,
	56,0,5516,950,1,0,0,0,5517,5518,3,109,54,0,5518,5519,3,79,39,0,5519,5520,
	3,113,56,0,5520,5521,3,117,58,0,5521,5522,3,95,47,0,5522,5523,3,79,39,0,
	5523,5524,3,101,50,0,5524,952,1,0,0,0,5525,5526,3,109,54,0,5526,5527,3,
	79,39,0,5527,5528,3,113,56,0,5528,5529,3,117,58,0,5529,5530,3,95,47,0,5530,
	5531,3,117,58,0,5531,5532,3,95,47,0,5532,5533,3,107,53,0,5533,5534,3,105,
	52,0,5534,5535,3,95,47,0,5535,5536,3,105,52,0,5536,5537,3,91,45,0,5537,
	954,1,0,0,0,5538,5539,3,109,54,0,5539,5540,3,79,39,0,5540,5541,3,113,56,
	0,5541,5542,3,117,58,0,5542,5543,3,95,47,0,5543,5544,3,117,58,0,5544,5545,
	3,95,47,0,5545,5546,3,107,53,0,5546,5547,3,105,52,0,5547,5548,3,115,57,
	0,5548,956,1,0,0,0,5549,5550,3,109,54,0,5550,5551,3,79,39,0,5551,5552,3,
	113,56,0,5552,5553,3,117,58,0,5553,5554,3,95,47,0,5554,5555,3,117,58,0,
	5555,5556,3,95,47,0,5556,5557,3,107,53,0,5557,5558,3,105,52,0,5558,958,
	1,0,0,0,5559,5560,3,109,54,0,5560,5561,3,79,39,0,5561,5562,3,115,57,0,5562,
	5563,3,115,57,0,5563,5564,3,123,61,0,5564,5565,3,107,53,0,5565,5566,3,113,
	56,0,5566,5567,3,85,42,0,5567,960,1,0,0,0,5568,5569,3,109,54,0,5569,5570,
	3,93,46,0,5570,5571,3,79,39,0,5571,5572,3,115,57,0,5572,5573,3,87,43,0,
	5573,962,1,0,0,0,5574,5575,3,109,54,0,5575,5576,3,101,50,0,5576,5577,3,
	119,59,0,5577,5578,3,91,45,0,5578,5579,3,95,47,0,5579,5580,3,105,52,0,5580,
	5581,3,115,57,0,5581,964,1,0,0,0,5582,5583,3,109,54,0,5583,5584,3,101,50,
	0,5584,5585,3,119,59,0,5585,5586,3,91,45,0,5586,5587,3,95,47,0,5587,5588,
	3,105,52,0,5588,5589,5,95,0,0,5589,5590,3,85,42,0,5590,5591,3,95,47,0,5591,
	5592,3,113,56,0,5592,5593,4,482,36,0,5593,966,1,0,0,0,5594,5595,3,109,54,
	0,5595,5596,3,101,50,0,5596,5597,3,119,59,0,5597,5598,3,91,45,0,5598,5599,
	3,95,47,0,5599,5600,3,105,52,0,5600,968,1,0,0,0,5601,5602,3,109,54,0,5602,
	5603,3,107,53,0,5603,5604,3,95,47,0,5604,5605,3,105,52,0,5605,5606,3,117,
	58,0,5606,970,1,0,0,0,5607,5608,3,109,54,0,5608,5609,3,107,53,0,5609,5610,
	3,101,50,0,5610,5611,3,127,63,0,5611,5612,3,91,45,0,5612,5613,3,107,53,
	0,5613,5614,3,105,52,0,5614,972,1,0,0,0,5615,5616,3,109,54,0,5616,5617,
	3,107,53,0,5617,5618,3,113,56,0,5618,5619,3,117,58,0,5619,974,1,0,0,0,5620,
	5621,3,109,54,0,5621,5622,3,107,53,0,5622,5623,3,115,57,0,5623,5624,3,95,
	47,0,5624,5625,3,117,58,0,5625,5626,3,95,47,0,5626,5627,3,107,53,0,5627,
	5628,3,105,52,0,5628,5629,6,487,34,0,5629,976,1,0,0,0,5630,5631,3,109,54,
	0,5631,5632,3,113,56,0,5632,5633,3,87,43,0,5633,5634,3,83,41,0,5634,5635,
	3,87,43,0,5635,5636,3,85,42,0,5636,5637,3,87,43,0,5637,5638,3,115,57,0,
	5638,5639,4,488,37,0,5639,978,1,0,0,0,5640,5641,3,109,54,0,5641,5642,3,
	113,56,0,5642,5643,3,87,43,0,5643,5644,3,83,41,0,5644,5645,3,95,47,0,5645,
	5646,3,115,57,0,5646,5647,3,95,47,0,5647,5648,3,107,53,0,5648,5649,3,105,
	52,0,5649,980,1,0,0,0,5650,5651,3,109,54,0,5651,5652,3,113,56,0,5652,5653,
	3,87,43,0,5653,5654,3,109,54,0,5654,5655,3,79,39,0,5655,5656,3,113,56,0,
	5656,5657,3,87,43,0,5657,982,1,0,0,0,5658,5659,3,109,54,0,5659,5660,3,113,
	56,0,5660,5661,3,87,43,0,5661,5662,3,115,57,0,5662,5663,3,87,43,0,5663,
	5664,3,113,56,0,5664,5665,3,121,60,0,5665,5666,3,87,43,0,5666,984,1,0,0,
	0,5667,5668,3,109,54,0,5668,5669,3,113,56,0,5669,5670,3,87,43,0,5670,5671,
	3,121,60,0,5671,986,1,0,0,0,5672,5673,3,109,54,0,5673,5674,3,113,56,0,5674,
	5675,3,95,47,0,5675,5676,3,103,51,0,5676,5677,3,79,39,0,5677,5678,3,113,
	56,0,5678,5679,3,127,63,0,5679,988,1,0,0,0,5680,5681,3,109,54,0,5681,5682,
	3,113,56,0,5682,5683,3,95,47,0,5683,5684,3,121,60,0,5684,5685,3,95,47,0,
	5685,5686,3,101,50,0,5686,5687,3,87,43,0,5687,5688,3,91,45,0,5688,5689,
	3,87,43,0,5689,5690,3,115,57,0,5690,990,1,0,0,0,5691,5692,3,109,54,0,5692,
	5693,3,113,56,0,5693,5694,3,107,53,0,5694,5695,3,83,41,0,5695,5696,3,87,
	43,0,5696,5697,3,85,42,0,5697,5698,3,119,59,0,5698,5699,3,113,56,0,5699,
	5700,3,87,43,0,5700,992,1,0,0,0,5701,5702,3,109,54,0,5702,5703,3,113,56,
	0,5703,5704,3,107,53,0,5704,5705,3,83,41,0,5705,5706,3,87,43,0,5706,5707,
	3,115,57,0,5707,5708,3,115,57,0,5708,994,1,0,0,0,5709,5710,3,109,54,0,5710,
	5711,3,113,56,0,5711,5712,3,107,53,0,5712,5713,3,83,41,0,5713,5714,3,87,
	43,0,5714,5715,3,115,57,0,5715,5716,3,115,57,0,5716,5717,3,101,50,0,5717,
	5718,3,95,47,0,5718,5719,3,115,57,0,5719,5720,3,117,58,0,5720,996,1,0,0,
	0,5721,5722,3,109,54,0,5722,5723,3,113,56,0,5723,5724,3,107,53,0,5724,5725,
	3,89,44,0,5725,5726,3,95,47,0,5726,5727,3,101,50,0,5727,5728,3,87,43,0,
	5728,998,1,0,0,0,5729,5730,3,109,54,0,5730,5731,3,113,56,0,5731,5732,3,
	107,53,0,5732,5733,3,89,44,0,5733,5734,3,95,47,0,5734,5735,3,101,50,0,5735,
	5736,3,87,43,0,5736,5737,3,115,57,0,5737,1000,1,0,0,0,5738,5739,3,109,54,
	0,5739,5740,3,113,56,0,5740,5741,3,107,53,0,5741,5742,3,125,62,0,5742,5743,
	3,127,63,0,5743,1002,1,0,0,0,5744,5745,3,109,54,0,5745,5746,3,119,59,0,
	5746,5747,3,113,56,0,5747,5748,3,91,45,0,5748,5749,3,87,43,0,5749,1004,
	1,0,0,0,5750,5751,3,111,55,0,5751,5752,3,119,59,0,5752,5753,3,79,39,0,5753,
	5754,3,113,56,0,5754,5755,3,117,58,0,5755,5756,3,87,43,0,5756,5757,3,113,
	56,0,5757,1006,1,0,0,0,5758,5759,3,111,55,0,5759,5760,3,119,59,0,5760,5761,
	3,87,43,0,5761,5762,3,113,56,0,5762,5763,3,127,63,0,5763,1008,1,0,0,0,5764,
	5765,3,111,55,0,5765,5766,3,119,59,0,5766,5767,3,95,47,0,5767,5768,3,83,
	41,0,5768,5769,3,99,49,0,5769,1010,1,0,0,0,5770,5771,3,113,56,0,5771,5772,
	3,79,39,0,5772,5773,3,105,52,0,5773,5774,3,91,45,0,5774,5775,3,87,43,0,
	5775,1012,1,0,0,0,5776,5777,3,113,56,0,5777,5778,3,87,43,0,5778,5779,3,
	79,39,0,5779,5780,3,85,42,0,5780,5781,3,115,57,0,5781,1014,1,0,0,0,5782,
	5783,3,113,56,0,5783,5784,3,87,43,0,5784,5785,3,79,39,0,5785,5786,3,85,
	42,0,5786,5787,5,95,0,0,5787,5788,3,107,53,0,5788,5789,3,105,52,0,5789,
	5790,3,101,50,0,5790,5791,3,127,63,0,5791,1016,1,0,0,0,5792,5793,3,113,
	56,0,5793,5794,3,87,43,0,5794,5795,3,79,39,0,5795,5796,3,85,42,0,5796,1018,
	1,0,0,0,5797,5798,3,113,56,0,5798,5799,3,87,43,0,5799,5800,3,79,39,0,5800,
	5801,3,85,42,0,5801,5802,5,95,0,0,5802,5803,3,123,61,0,5803,5804,3,113,
	56,0,5804,5805,3,95,47,0,5805,5806,3,117,58,0,5806,5807,3,87,43,0,5807,
	1020,1,0,0,0,5808,5809,3,113,56,0,5809,5810,3,87,43,0,5810,5811,3,79,39,
	0,5811,5812,3,101,50,0,5812,1022,1,0,0,0,5813,5814,3,113,56,0,5814,5815,
	3,87,43,0,5815,5816,3,81,40,0,5816,5817,3,119,59,0,5817,5818,3,95,47,0,
	5818,5819,3,101,50,0,5819,5820,3,85,42,0,5820,1024,1,0,0,0,5821,5822,3,
	113,56,0,5822,5823,3,87,43,0,5823,5824,3,83,41,0,5824,5825,3,107,53,0,5825,
	5826,3,121,60,0,5826,5827,3,87,43,0,5827,5828,3,113,56,0,5828,1026,1,0,
	0,0,5829,5830,3,113,56,0,5830,5831,3,87,43,0,5831,5832,3,85,42,0,5832,5833,
	3,107,53,0,5833,5834,3,89,44,0,5834,5835,3,95,47,0,5835,5836,3,101,50,0,
	5836,5837,3,87,43,0,5837,5838,4,513,38,0,5838,1028,1,0,0,0,5839,5840,3,
	113,56,0,5840,5841,3,87,43,0,5841,5842,3,85,42,0,5842,5843,3,107,53,0,5843,
	5844,5,95,0,0,5844,5845,3,81,40,0,5845,5846,3,119,59,0,5846,5847,3,89,44,
	0,5847,5848,3,89,44,0,5848,5849,3,87,43,0,5849,5850,3,113,56,0,5850,5851,
	5,95,0,0,5851,5852,3,115,57,0,5852,5853,3,95,47,0,5853,5854,3,129,64,0,
	5854,5855,3,87,43,0,5855,1030,1,0,0,0,5856,5857,3,113,56,0,5857,5858,3,
	87,43,0,5858,5859,3,85,42,0,5859,5860,3,119,59,0,5860,5861,3,105,52,0,5861,
	5862,3,85,42,0,5862,5863,3,79,39,0,5863,5864,3,105,52,0,5864,5865,3,117,
	58,0,5865,1032,1,0,0,0,5866,5867,3,113,56,0,5867,5868,3,87,43,0,5868,5869,
	3,89,44,0,5869,5870,3,87,43,0,5870,5871,3,113,56,0,5871,5872,3,87,43,0,
	5872,5873,3,105,52,0,5873,5874,3,83,41,0,5874,5875,3,87,43,0,5875,5876,
	3,115,57,0,5876,1034,1,0,0,0,5877,5878,3,113,56,0,5878,5879,3,87,43,0,5879,
	5880,3,91,45,0,5880,5881,3,87,43,0,5881,5882,3,125,62,0,5882,5883,3,109,
	54,0,5883,1036,1,0,0,0,5884,5885,3,113,56,0,5885,5886,3,87,43,0,5886,5887,
	3,101,50,0,5887,5888,3,79,39,0,5888,5889,3,127,63,0,5889,1038,1,0,0,0,5890,
	5891,3,113,56,0,5891,5892,3,87,43,0,5892,5893,3,101,50,0,5893,5894,3,79,
	39,0,5894,5895,3,127,63,0,5895,5896,3,101,50,0,5896,5897,3,107,53,0,5897,
	5898,3,91,45,0,5898,1040,1,0,0,0,5899,5900,3,113,56,0,5900,5901,3,87,43,
	0,5901,5902,3,101,50,0,5902,5903,3,79,39,0,5903,5904,3,127,63,0,5904,5905,
	5,95,0,0,5905,5906,3,101,50,0,5906,5907,3,107,53,0,5907,5908,3,91,45,0,
	5908,5909,5,95,0,0,5909,5910,3,89,44,0,5910,5911,3,95,47,0,5911,5912,3,
	101,50,0,5912,5913,3,87,43,0,5913,1042,1,0,0,0,5914,5915,3,113,56,0,5915,
	5916,3,87,43,0,5916,5917,3,101,50,0,5917,5918,3,79,39,0,5918,5919,3,127,
	63,0,5919,5920,5,95,0,0,5920,5921,3,101,50,0,5921,5922,3,107,53,0,5922,
	5923,3,91,45,0,5923,5924,5,95,0,0,5924,5925,3,109,54,0,5925,5926,3,107,
	53,0,5926,5927,3,115,57,0,5927,1044,1,0,0,0,5928,5929,3,113,56,0,5929,5930,
	3,87,43,0,5930,5931,3,101,50,0,5931,5932,3,79,39,0,5932,5933,3,127,63,0,
	5933,5934,5,95,0,0,5934,5935,3,117,58,0,5935,5936,3,93,46,0,5936,5937,3,
	113,56,0,5937,5938,3,87,43,0,5938,5939,3,79,39,0,5939,5940,3,85,42,0,5940,
	1046,1,0,0,0,5941,5942,3,113,56,0,5942,5943,3,87,43,0,5943,5944,3,101,50,
	0,5944,5945,3,87,43,0,5945,5946,3,79,39,0,5946,5947,3,115,57,0,5947,5948,
	3,87,43,0,5948,1048,1,0,0,0,5949,5950,3,113,56,0,5950,5951,3,87,43,0,5951,
	5952,3,101,50,0,5952,5953,3,107,53,0,5953,5954,3,79,39,0,5954,5955,3,85,
	42,0,5955,1050,1,0,0,0,5956,5957,3,113,56,0,5957,5958,3,87,43,0,5958,5959,
	3,103,51,0,5959,5960,3,107,53,0,5960,5961,3,121,60,0,5961,5962,3,87,43,
	0,5962,1052,1,0,0,0,5963,5964,3,113,56,0,5964,5965,3,87,43,0,5965,5966,
	3,105,52,0,5966,5967,3,79,39,0,5967,5968,3,103,51,0,5968,5969,3,87,43,0,
	5969,1054,1,0,0,0,5970,5971,3,113,56,0,5971,5972,3,87,43,0,5972,5973,3,
	107,53,0,5973,5974,3,113,56,0,5974,5975,3,91,45,0,5975,5976,3,79,39,0,5976,
	5977,3,105,52,0,5977,5978,3,95,47,0,5978,5979,3,129,64,0,5979,5980,3,87,
	43,0,5980,1056,1,0,0,0,5981,5982,3,113,56,0,5982,5983,3,87,43,0,5983,5984,
	3,109,54,0,5984,5985,3,79,39,0,5985,5986,3,95,47,0,5986,5987,3,113,56,0,
	5987,1058,1,0,0,0,5988,5989,3,113,56,0,5989,5990,3,87,43,0,5990,5991,3,
	109,54,0,5991,5992,3,87,43,0,5992,5993,3,79,39,0,5993,5994,3,117,58,0,5994,
	5995,3,79,39,0,5995,5996,3,81,40,0,5996,5997,3,101,50,0,5997,5998,3,87,
	43,0,5998,1060,1,0,0,0,5999,6000,3,113,56,0,6000,6001,3,87,43,0,6001,6002,
	3,109,54,0,6002,6003,3,87,43,0,6003,6004,3,79,39,0,6004,6005,3,117,58,0,
	6005,1062,1,0,0,0,6006,6007,3,113,56,0,6007,6008,3,87,43,0,6008,6009,3,
	109,54,0,6009,6010,3,101,50,0,6010,6011,3,79,39,0,6011,6012,3,83,41,0,6012,
	6013,3,87,43,0,6013,1064,1,0,0,0,6014,6015,3,113,56,0,6015,6016,3,87,43,
	0,6016,6017,3,109,54,0,6017,6018,3,101,50,0,6018,6019,3,95,47,0,6019,6020,
	3,83,41,0,6020,6021,3,79,39,0,6021,6022,3,117,58,0,6022,6023,3,95,47,0,
	6023,6024,3,107,53,0,6024,6025,3,105,52,0,6025,1066,1,0,0,0,6026,6027,3,
	113,56,0,6027,6028,3,87,43,0,6028,6029,3,109,54,0,6029,6030,3,101,50,0,
	6030,6031,3,95,47,0,6031,6032,3,83,41,0,6032,6033,3,79,39,0,6033,6034,3,
	117,58,0,6034,6035,3,87,43,0,6035,6036,5,95,0,0,6036,6037,3,85,42,0,6037,
	6038,3,107,53,0,6038,6039,5,95,0,0,6039,6040,3,85,42,0,6040,6041,3,81,40,
	0,6041,6042,4,533,39,0,6042,1068,1,0,0,0,6043,6044,3,113,56,0,6044,6045,
	3,87,43,0,6045,6046,3,109,54,0,6046,6047,3,101,50,0,6047,6048,3,95,47,0,
	6048,6049,3,83,41,0,6049,6050,3,79,39,0,6050,6051,3,117,58,0,6051,6052,
	3,87,43,0,6052,6053,5,95,0,0,6053,6054,3,95,47,0,6054,6055,3,91,45,0,6055,
	6056,3,105,52,0,6056,6057,3,107,53,0,6057,6058,3,113,56,0,6058,6059,3,87,
	43,0,6059,6060,5,95,0,0,6060,6061,3,85,42,0,6061,6062,3,81,40,0,6062,6063,
	4,534,40,0,6063,1070,1,0,0,0,6064,6065,3,113,56,0,6065,6066,3,87,43,0,6066,
	6067,3,109,54,0,6067,6068,3,101,50,0,6068,6069,3,95,47,0,6069,6070,3,83,
	41,0,6070,6071,3,79,39,0,6071,6072,3,117,58,0,6072,6073,3,87,43,0,6073,
	6074,5,95,0,0,6074,6075,3,85,42,0,6075,6076,3,107,53,0,6076,6077,5,95,0,
	0,6077,6078,3,117,58,0,6078,6079,3,79,39,0,6079,6080,3,81,40,0,6080,6081,
	3,101,50,0,6081,6082,3,87,43,0,6082,6083,4,535,41,0,6083,1072,1,0,0,0,6084,
	6085,3,113,56,0,6085,6086,3,87,43,0,6086,6087,3,109,54,0,6087,6088,3,101,
	50,0,6088,6089,3,95,47,0,6089,6090,3,83,41,0,6090,6091,3,79,39,0,6091,6092,
	3,117,58,0,6092,6093,3,87,43,0,6093,6094,5,95,0,0,6094,6095,3,95,47,0,6095,
	6096,3,91,45,0,6096,6097,3,105,52,0,6097,6098,3,107,53,0,6098,6099,3,113,
	56,0,6099,6100,3,87,43,0,6100,6101,5,95,0,0,6101,6102,3,117,58,0,6102,6103,
	3,79,39,0,6103,6104,3,81,40,0,6104,6105,3,101,50,0,6105,6106,3,87,43,0,
	6106,6107,4,536,42,0,6107,1074,1,0,0,0,6108,6109,3,113,56,0,6109,6110,3,
	87,43,0,6110,6111,3,109,54,0,6111,6112,3,101,50,0,6112,6113,3,95,47,0,6113,
	6114,3,83,41,0,6114,6115,3,79,39,0,6115,6116,3,117,58,0,6116,6117,3,87,
	43,0,6117,6118,5,95,0,0,6118,6119,3,123,61,0,6119,6120,3,95,47,0,6120,6121,
	3,101,50,0,6121,6122,3,85,42,0,6122,6123,5,95,0,0,6123,6124,3,85,42,0,6124,
	6125,3,107,53,0,6125,6126,5,95,0,0,6126,6127,3,117,58,0,6127,6128,3,79,
	39,0,6128,6129,3,81,40,0,6129,6130,3,101,50,0,6130,6131,3,87,43,0,6131,
	6132,4,537,43,0,6132,1076,1,0,0,0,6133,6134,3,113,56,0,6134,6135,3,87,43,
	0,6135,6136,3,109,54,0,6136,6137,3,101,50,0,6137,6138,3,95,47,0,6138,6139,
	3,83,41,0,6139,6140,3,79,39,0,6140,6141,3,117,58,0,6141,6142,3,87,43,0,
	6142,6143,5,95,0,0,6143,6144,3,123,61,0,6144,6145,3,95,47,0,6145,6146,3,
	101,50,0,6146,6147,3,85,42,0,6147,6148,5,95,0,0,6148,6149,3,95,47,0,6149,
	6150,3,91,45,0,6150,6151,3,105,52,0,6151,6152,3,107,53,0,6152,6153,3,113,
	56,0,6153,6154,3,87,43,0,6154,6155,5,95,0,0,6155,6156,3,117,58,0,6156,6157,
	3,79,39,0,6157,6158,3,81,40,0,6158,6159,3,101,50,0,6159,6160,3,87,43,0,
	6160,6161,4,538,44,0,6161,1078,1,0,0,0,6162,6163,3,113,56,0,6163,6164,3,
	87,43,0,6164,6165,3,109,54,0,6165,6166,3,101,50,0,6166,6167,3,95,47,0,6167,
	6168,3,83,41,0,6168,6169,3,79,39,0,6169,6170,3,117,58,0,6170,6171,3,87,
	43,0,6171,6172,5,95,0,0,6172,6173,3,113,56,0,6173,6174,3,87,43,0,6174,6175,
	3,123,61,0,6175,6176,3,113,56,0,6176,6177,3,95,47,0,6177,6178,3,117,58,
	0,6178,6179,3,87,43,0,6179,6180,5,95,0,0,6180,6181,3,85,42,0,6181,6182,
	3,81,40,0,6182,6183,4,539,45,0,6183,1080,1,0,0,0,6184,6185,3,113,56,0,6185,
	6186,3,87,43,0,6186,6187,3,111,55,0,6187,6188,3,119,59,0,6188,6189,3,95,
	47,0,6189,6190,3,113,56,0,6190,6191,3,87,43,0,6191,1082,1,0,0,0,6192,6193,
	3,113,56,0,6193,6194,3,87,43,0,6194,6195,3,115,57,0,6195,6196,3,87,43,0,
	6196,6197,3,117,58,0,6197,1084,1,0,0,0,6198,6199,3,113,56,0,6199,6200,3,
	87,43,0,6200,6201,3,115,57,0,6201,6202,3,95,47,0,6202,6203,3,91,45,0,6203,
	6204,3,105,52,0,6204,6205,3,79,39,0,6205,6206,3,101,50,0,6206,1086,1,0,
	0,0,6207,6208,3,113,56,0,6208,6209,3,87,43,0,6209,6210,3,115,57,0,6210,
	6211,3,117,58,0,6211,6212,3,107,53,0,6212,6213,3,113,56,0,6213,6214,3,87,
	43,0,6214,1088,1,0,0,0,6215,6216,3,113,56,0,6216,6217,3,87,43,0,6217,6218,
	3,115,57,0,6218,6219,3,117,58,0,6219,6220,3,113,56,0,6220,6221,3,95,47,
	0,6221,6222,3,83,41,0,6222,6223,3,117,58,0,6223,1090,1,0,0,0,6224,6225,
	3,113,56,0,6225,6226,3,87,43,0,6226,6227,3,115,57,0,6227,6228,3,119,59,
	0,6228,6229,3,103,51,0,6229,6230,3,87,43,0,6230,1092,1,0,0,0,6231,6232,
	3,113,56,0,6232,6233,3,87,43,0,6233,6234,3,117,58,0,6234,6235,3,119,59,
	0,6235,6236,3,113,56,0,6236,6237,3,105,52,0,6237,6238,3,87,43,0,6238,6239,
	3,85,42,0,6239,6240,5,95,0,0,6240,6241,3,115,57,0,6241,6242,3,111,55,0,
	6242,6243,3,101,50,0,6243,6244,3,115,57,0,6244,6245,3,117,58,0,6245,6246,
	3,79,39,0,6246,6247,3,117,58,0,6247,6248,3,87,43,0,6248,1094,1,0,0,0,6249,
	6250,3,113,56,0,6250,6251,3,87,43,0,6251,6252,3,117,58,0,6252,6253,3,119,
	59,0,6253,6254,3,113,56,0,6254,6255,3,105,52,0,6255,6256,3,115,57,0,6256,
	1096,1,0,0,0,6257,6258,3,113,56,0,6258,6259,3,87,43,0,6259,6260,3,117,58,
	0,6260,6261,3,119,59,0,6261,6263,3,113,56,0,6262,6264,3,105,52,0,6263,6262,
	1,0,0,0,6263,6264,1,0,0,0,6264,1098,1,0,0,0,6265,6266,3,113,56,0,6266,6267,
	3,87,43,0,6267,6268,3,121,60,0,6268,6269,3,87,43,0,6269,6270,3,113,56,0,
	6270,6271,3,115,57,0,6271,6272,3,87,43,0,6272,1100,1,0,0,0,6273,6274,3,
	113,56,0,6274,6275,3,87,43,0,6275,6276,3,121,60,0,6276,6277,3,107,53,0,
	6277,6278,3,99,49,0,6278,6279,3,87,43,0,6279,1102,1,0,0,0,6280,6281,3,113,
	56,0,6281,6282,3,95,47,0,6282,6283,3,91,45,0,6283,6284,3,93,46,0,6284,6285,
	3,117,58,0,6285,1104,1,0,0,0,6286,6287,3,113,56,0,6287,6288,3,101,50,0,
	6288,6289,3,95,47,0,6289,6290,3,99,49,0,6290,6291,3,87,43,0,6291,6292,1,
	0,0,0,6292,6293,6,552,35,0,6293,1106,1,0,0,0,6294,6295,3,113,56,0,6295,
	6296,3,107,53,0,6296,6297,3,101,50,0,6297,6298,3,101,50,0,6298,6299,3,81,
	40,0,6299,6300,3,79,39,0,6300,6301,3,83,41,0,6301,6302,3,99,49,0,6302,1108,
	1,0,0,0,6303,6304,3,113,56,0,6304,6305,3,107,53,0,6305,6306,3,101,50,0,
	6306,6307,3,101,50,0,6307,6308,3,119,59,0,6308,6309,3,109,54,0,6309,1110,
	1,0,0,0,6310,6311,3,113,56,0,6311,6312,3,107,53,0,6312,6313,3,117,58,0,
	6313,6314,3,79,39,0,6314,6315,3,117,58,0,6315,6316,3,87,43,0,6316,6317,
	4,555,46,0,6317,1112,1,0,0,0,6318,6319,3,113,56,0,6319,6320,3,107,53,0,
	6320,6321,3,119,59,0,6321,6322,3,117,58,0,6322,6323,3,95,47,0,6323,6324,
	3,105,52,0,6324,6325,3,87,43,0,6325,1114,1,0,0,0,6326,6327,3,113,56,0,6327,
	6328,3,107,53,0,6328,6329,3,123,61,0,6329,6330,3,115,57,0,6330,1116,1,0,
	0,0,6331,6332,3,113,56,0,6332,6333,3,107,53,0,6333,6334,3,123,61,0,6334,
	6335,5,95,0,0,6335,6336,3,83,41,0,6336,6337,3,107,53,0,6337,6338,3,119,
	59,0,6338,6339,3,105,52,0,6339,6340,3,117,58,0,6340,1118,1,0,0,0,6341,6342,
	3,113,56,0,6342,6343,3,107,53,0,6343,6344,3,123,61,0,6344,6345,5,95,0,0,
	6345,6346,3,89,44,0,6346,6347,3,107,53,0,6347,6348,3,113,56,0,6348,6349,
	3,103,51,0,6349,6350,3,79,39,0,6350,6351,3,117,58,0,6351,1120,1,0,0,0,6352,
	6353,3,113,56,0,6353,6354,3,107,53,0,6354,6355,3,123,61,0,6355,1122,1,0,
	0,0,6356,6357,3,113,56,0,6357,6358,3,117,58,0,6358,6359,3,113,56,0,6359,
	6360,3,87,43,0,6360,6361,3,87,43,0,6361,1124,1,0,0,0,6362,6363,3,115,57,
	0,6363,6364,3,79,39,0,6364,6365,3,121,60,0,6365,6366,3,87,43,0,6366,6367,
	3,109,54,0,6367,6368,3,107,53,0,6368,6369,3,95,47,0,6369,6370,3,105,52,
	0,6370,6371,3,117,58,0,6371,1126,1,0,0,0,6372,6373,3,115,57,0,6373,6374,
	3,83,41,0,6374,6375,3,93,46,0,6375,6376,3,87,43,0,6376,6377,3,85,42,0,6377,
	6378,3,119,59,0,6378,6379,3,101,50,0,6379,6380,3,87,43,0,6380,1128,1,0,
	0,0,6381,6382,3,115,57,0,6382,6383,3,83,41,0,6383,6384,3,93,46,0,6384,6385,
	3,87,43,0,6385,6386,3,103,51,0,6386,6387,3,79,39,0,6387,6388,1,0,0,0,6388,
	6389,6,564,36,0,6389,1130,1,0,0,0,6390,6391,3,115,57,0,6391,6392,3,83,41,
	0,6392,6393,3,93,46,0,6393,6394,3,87,43,0,6394,6395,3,103,51,0,6395,6396,
	3,79,39,0,6396,6397,5,95,0,0,6397,6398,3,105,52,0,6398,6399,3,79,39,0,6399,
	6400,3,103,51,0,6400,6401,3,87,43,0,6401,1132,1,0,0,0,6402,6403,3,115,57,
	0,6403,6404,3,83,41,0,6404,6405,3,93,46,0,6405,6406,3,87,43,0,6406,6407,
	3,103,51,0,6407,6408,3,79,39,0,6408,6409,3,115,57,0,6409,6410,1,0,0,0,6410,
	6411,6,566,37,0,6411,1134,1,0,0,0,6412,6413,3,115,57,0,6413,6414,3,87,43,
	0,6414,6415,3,83,41,0,6415,6416,3,107,53,0,6416,6417,3,105,52,0,6417,6418,
	3,85,42,0,6418,6419,5,95,0,0,6419,6420,3,103,51,0,6420,6421,3,95,47,0,6421,
	6422,3,83,41,0,6422,6423,3,113,56,0,6423,6424,3,107,53,0,6424,6425,3,115,
	57,0,6425,6426,3,87,43,0,6426,6427,3,83,41,0,6427,6428,3,107,53,0,6428,
	6429,3,105,52,0,6429,6430,3,85,42,0,6430,1136,1,0,0,0,6431,6432,3,115,57,
	0,6432,6433,3,87,43,0,6433,6434,3,83,41,0,6434,6435,3,107,53,0,6435,6436,
	3,105,52,0,6436,6437,3,85,42,0,6437,1138,1,0,0,0,6438,6439,3,115,57,0,6439,
	6440,3,87,43,0,6440,6441,3,83,41,0,6441,6442,3,119,59,0,6442,6443,3,113,
	56,0,6443,6444,3,95,47,0,6444,6445,3,117,58,0,6445,6446,3,127,63,0,6446,
	1140,1,0,0,0,6447,6448,3,115,57,0,6448,6449,3,87,43,0,6449,6450,3,101,50,
	0,6450,6451,3,87,43,0,6451,6452,3,83,41,0,6452,6453,3,117,58,0,6453,1142,
	1,0,0,0,6454,6455,3,115,57,0,6455,6456,3,87,43,0,6456,6457,3,105,52,0,6457,
	6458,3,115,57,0,6458,6459,3,95,47,0,6459,6460,3,117,58,0,6460,6461,3,95,
	47,0,6461,6462,3,121,60,0,6462,6463,3,87,43,0,6463,1144,1,0,0,0,6464,6465,
	3,115,57,0,6465,6466,3,87,43,0,6466,6467,3,109,54,0,6467,6468,3,79,39,0,
	6468,6469,3,113,56,0,6469,6470,3,79,39,0,6470,6471,3,117,58,0,6471,6472,
	3,107,53,0,6472,6473,3,113,56,0,6473,1146,1,0,0,0,6474,6475,3,115,57,0,
	6475,6476,3,87,43,0,6476,6477,3,113,56,0,6477,6478,3,95,47,0,6478,6479,
	3,79,39,0,6479,6480,3,101,50,0,6480,6481,3,95,47,0,6481,6482,3,129,64,0,
	6482,6483,3,79,39,0,6483,6484,3,81,40,0,6484,6485,3,101,50,0,6485,6486,
	3,87,43,0,6486,1148,1,0,0,0,6487,6488,3,115,57,0,6488,6489,3,87,43,0,6489,
	6490,3,113,56,0,6490,6491,3,95,47,0,6491,6492,3,79,39,0,6492,6493,3,101,
	50,0,6493,1150,1,0,0,0,6494,6495,3,115,57,0,6495,6496,3,87,43,0,6496,6497,
	3,115,57,0,6497,6498,3,115,57,0,6498,6499,3,95,47,0,6499,6500,3,107,53,
	0,6500,6501,3,105,52,0,6501,1152,1,0,0,0,6502,6503,3,115,57,0,6503,6504,
	3,87,43,0,6504,6505,3,113,56,0,6505,6506,3,121,60,0,6506,6507,3,87,43,0,
	6507,6508,3,113,56,0,6508,1154,1,0,0,0,6509,6510,3,115,57,0,6510,6511,3,
	87,43,0,6511,6512,3,113,56,0,6512,6513,3,121,60,0,6513,6514,3,87,43,0,6514,
	6515,3,113,56,0,6515,6516,5,95,0,0,6516,6517,3,107,53,0,6517,6518,3,109,
	54,0,6518,6519,3,117,58,0,6519,6520,3,95,47,0,6520,6521,3,107,53,0,6521,
	6522,3,105,52,0,6522,6523,3,115,57,0,6523,1156,1,0,0,0,6524,6525,3,115,
	57,0,6525,6526,3,87,43,0,6526,6527,3,115,57,0,6527,6528,3,115,57,0,6528,
	6529,3,95,47,0,6529,6530,3,107,53,0,6530,6531,3,105,52,0,6531,6532,5,95,
	0,0,6532,6533,3,119,59,0,6533,6534,3,115,57,0,6534,6535,3,87,43,0,6535,
	6536,3,113,56,0,6536,6537,6,578,38,0,6537,1158,1,0,0,0,6538,6539,3,115,
	57,0,6539,6540,3,87,43,0,6540,6541,3,117,58,0,6541,1160,1,0,0,0,6542,6543,
	3,115,57,0,6543,6544,3,87,43,0,6544,6545,3,117,58,0,6545,6546,5,95,0,0,
	6546,6547,3,121,60,0,6547,6548,3,79,39,0,6548,6549,3,113,56,0,6549,1162,
	1,0,0,0,6550,6551,3,115,57,0,6551,6552,3,93,46,0,6552,6553,3,79,39,0,6553,
	6554,3,113,56,0,6554,6555,3,87,43,0,6555,1164,1,0,0,0,6556,6557,3,115,57,
	0,6557,6558,3,93,46,0,6558,6559,3,107,53,0,6559,6560,3,123,61,0,6560,1166,
	1,0,0,0,6561,6562,3,115,57,0,6562,6563,3,93,46,0,6563,6564,3,119,59,0,6564,
	6565,3,117,58,0,6565,6566,3,85,42,0,6566,6567,3,107,53,0,6567,6568,3,123,
	61,0,6568,6569,3,105,52,0,6569,1168,1,0,0,0,6570,6571,3,115,57,0,6571,6572,
	3,95,47,0,6572,6573,3,91,45,0,6573,6574,3,105,52,0,6574,6575,3,79,39,0,
	6575,6576,3,101,50,0,6576,1170,1,0,0,0,6577,6578,3,115,57,0,6578,6579,3,
	95,47,0,6579,6580,3,91,45,0,6580,6581,3,105,52,0,6581,6582,3,87,43,0,6582,
	6583,3,85,42,0,6583,1172,1,0,0,0,6584,6585,3,115,57,0,6585,6586,3,95,47,
	0,6586,6587,3,103,51,0,6587,6588,3,109,54,0,6588,6589,3,101,50,0,6589,6590,
	3,87,43,0,6590,1174,1,0,0,0,6591,6592,3,115,57,0,6592,6593,3,101,50,0,6593,
	6594,3,79,39,0,6594,6595,3,121,60,0,6595,6596,3,87,43,0,6596,1176,1,0,0,
	0,6597,6598,3,115,57,0,6598,6599,3,101,50,0,6599,6600,3,107,53,0,6600,6601,
	3,123,61,0,6601,1178,1,0,0,0,6602,6603,3,115,57,0,6603,6604,3,103,51,0,
	6604,6605,3,79,39,0,6605,6606,3,101,50,0,6606,6607,3,101,50,0,6607,6608,
	3,95,47,0,6608,6609,3,105,52,0,6609,6610,3,117,58,0,6610,1180,1,0,0,0,6611,
	6612,3,115,57,0,6612,6613,3,105,52,0,6613,6614,3,79,39,0,6614,6615,3,109,
	54,0,6615,6616,3,115,57,0,6616,6617,3,93,46,0,6617,6618,3,107,53,0,6618,
	6619,3,117,58,0,6619,1182,1,0,0,0,6620,6621,3,115,57,0,6621,6622,3,107,
	53,0,6622,6623,3,103,51,0,6623,6624,3,87,43,0,6624,6625,1,0,0,0,6625,6626,
	6,591,39,0,6626,1184,1,0,0,0,6627,6628,3,115,57,0,6628,6629,3,107,53,0,
	6629,6630,3,83,41,0,6630,6631,3,99,49,0,6631,6632,3,87,43,0,6632,6633,3,
	117,58,0,6633,1186,1,0,0,0,6634,6635,3,115,57,0,6635,6636,3,107,53,0,6636,
	6637,3,105,52,0,6637,6638,3,79,39,0,6638,6639,3,103,51,0,6639,6640,3,87,
	43,0,6640,1188,1,0,0,0,6641,6642,3,115,57,0,6642,6643,3,107,53,0,6643,6644,
	3,119,59,0,6644,6645,3,105,52,0,6645,6646,3,85,42,0,6646,6647,3,115,57,
	0,6647,1190,1,0,0,0,6648,6649,3,115,57,0,6649,6650,3,107,53,0,6650,6651,
	3,119,59,0,6651,6652,3,113,56,0,6652,6653,3,83,41,0,6653,6654,3,87,43,0,
	6654,1192,1,0,0,0,6655,6656,3,115,57,0,6656,6657,3,109,54,0,6657,6658,3,
	79,39,0,6658,6659,3,117,58,0,6659,6660,3,95,47,0,6660,6661,3,79,39,0,6661,
	6662,3,101,50,0,6662,1194,1,0,0,0,6663,6664,3,115,57,0,6664,6665,3,109,
	54,0,6665,6666,3,87,43,0,6666,6667,3,83,41,0,6667,6668,3,95,47,0,6668,6669,
	3,89,44,0,6669,6670,3,95,47,0,6670,6671,3,83,41,0,6671,1196,1,0,0,0,6672,
	6673,3,115,57,0,6673,6674,3,111,55,0,6674,6675,3,101,50,0,6675,6676,3,87,
	43,0,6676,6677,3,125,62,0,6677,6678,3,83,41,0,6678,6679,3,87,43,0,6679,
	6680,3,109,54,0,6680,6681,3,117,58,0,6681,6682,3,95,47,0,6682,6683,3,107,
	53,0,6683,6684,3,105,52,0,6684,1198,1,0,0,0,6685,6686,3,115,57,0,6686,6687,
	3,111,55,0,6687,6688,3,101,50,0,6688,6689,3,115,57,0,6689,6690,3,117,58,
	0,6690,6691,3,79,39,0,6691,6692,3,117,58,0,6692,6693,3,87,43,0,6693,1200,
	1,0,0,0,6694,6695,3,115,57,0,6695,6696,3,111,55,0,6696,6697,3,101,50,0,
	6697,6698,3,123,61,0,6698,6699,3,79,39,0,6699,6700,3,113,56,0,6700,6701,
	3,105,52,0,6701,6702,3,95,47,0,6702,6703,3,105,52,0,6703,6704,3,91,45,0,
	6704,1202,1,0,0,0,6705,6706,3,115,57,0,6706,6707,3,111,55,0,6707,6708,3,
	101,50,0,6708,6709,5,95,0,0,6709,6710,3,79,39,0,6710,6711,3,89,44,0,6711,
	6712,3,117,58,0,6712,6713,3,87,43,0,6713,6714,3,113,56,0,6714,6715,5,95,
	0,0,6715,6716,3,91,45,0,6716,6717,3,117,58,0,6717,6718,3,95,47,0,6718,6719,
	3,85,42,0,6719,6720,3,115,57,0,6720,1204,1,0,0,0,6721,6722,3,115,57,0,6722,
	6723,3,111,55,0,6723,6724,3,101,50,0,6724,6725,5,95,0,0,6725,6726,3,79,
	39,0,6726,6727,3,89,44,0,6727,6728,3,117,58,0,6728,6729,3,87,43,0,6729,
	6730,3,113,56,0,6730,6731,5,95,0,0,6731,6732,3,103,51,0,6732,6733,3,117,
	58,0,6733,6734,3,115,57,0,6734,6735,5,95,0,0,6735,6736,3,91,45,0,6736,6737,
	3,79,39,0,6737,6738,3,109,54,0,6738,6739,3,115,57,0,6739,6740,4,602,47,
	0,6740,1206,1,0,0,0,6741,6742,3,115,57,0,6742,6743,3,111,55,0,6743,6744,
	3,101,50,0,6744,6745,5,95,0,0,6745,6746,3,81,40,0,6746,6747,3,87,43,0,6747,
	6748,3,89,44,0,6748,6749,3,107,53,0,6749,6750,3,113,56,0,6750,6751,3,87,
	43,0,6751,6752,5,95,0,0,6752,6753,3,91,45,0,6753,6754,3,117,58,0,6754,6755,
	3,95,47,0,6755,6756,3,85,42,0,6756,6757,3,115,57,0,6757,1208,1,0,0,0,6758,
	6759,3,115,57,0,6759,6760,3,111,55,0,6760,6761,3,101,50,0,6761,6762,5,95,
	0,0,6762,6763,3,81,40,0,6763,6764,3,95,47,0,6764,6765,3,91,45,0,6765,6766,
	5,95,0,0,6766,6767,3,113,56,0,6767,6768,3,87,43,0,6768,6769,3,115,57,0,
	6769,6770,3,119,59,0,6770,6771,3,101,50,0,6771,6772,3,117,58,0,6772,1210,
	1,0,0,0,6773,6774,3,115,57,0,6774,6775,3,111,55,0,6775,6776,3,101,50,0,
	6776,6777,5,95,0,0,6777,6778,3,81,40,0,6778,6779,3,119,59,0,6779,6780,3,
	89,44,0,6780,6781,3,89,44,0,6781,6782,3,87,43,0,6782,6783,3,113,56,0,6783,
	6784,5,95,0,0,6784,6785,3,113,56,0,6785,6786,3,87,43,0,6786,6787,3,115,
	57,0,6787,6788,3,119,59,0,6788,6789,3,101,50,0,6789,6790,3,117,58,0,6790,
	1212,1,0,0,0,6791,6792,3,115,57,0,6792,6793,3,111,55,0,6793,6794,3,101,
	50,0,6794,6795,5,95,0,0,6795,6796,3,83,41,0,6796,6797,3,79,39,0,6797,6798,
	3,83,41,0,6798,6799,3,93,46,0,6799,6800,3,87,43,0,6800,6801,4,606,48,0,
	6801,1214,1,0,0,0,6802,6803,3,115,57,0,6803,6804,3,111,55,0,6804,6805,3,
	101,50,0,6805,6806,5,95,0,0,6806,6807,3,83,41,0,6807,6808,3,79,39,0,6808,
	6809,3,101,50,0,6809,6810,3,83,41,0,6810,6811,5,95,0,0,6811,6812,3,89,44,
	0,6812,6813,3,107,53,0,6813,6814,3,119,59,0,6814,6815,3,105,52,0,6815,6816,
	3,85,42,0,6816,6817,5,95,0,0,6817,6818,3,113,56,0,6818,6819,3,107,53,0,
	6819,6820,3,123,61,0,6820,6821,3,115,57,0,6821,1216,1,0,0,0,6822,6823,3,
	115,57,0,6823,6824,3,111,55,0,6824,6825,3,101,50,0,6825,6826,5,95,0,0,6826,
	6827,3,105,52,0,6827,6828,3,107,53,0,6828,6829,5,95,0,0,6829,6830,3,83,
	41,0,6830,6831,3,79,39,0,6831,6832,3,83,41,0,6832,6833,3,93,46,0,6833,6834,
	3,87,43,0,6834,1218,1,0,0,0,6835,6836,3,115,57,0,6836,6837,3,111,55,0,6837,
	6838,3,101,50,0,6838,6839,5,95,0,0,6839,6840,3,115,57,0,6840,6841,3,103,
	51,0,6841,6842,3,79,39,0,6842,6843,3,101,50,0,6843,6844,3,101,50,0,6844,
	6845,5,95,0,0,6845,6846,3,113,56,0,6846,6847,3,87,43,0,6847,6848,3,115,
	57,0,6848,6849,3,119,59,0,6849,6850,3,101,50,0,6850,6851,3,117,58,0,6851,
	1220,1,0,0,0,6852,6853,3,115,57,0,6853,6854,3,111,55,0,6854,6855,3,101,
	50,0,6855,1222,1,0,0,0,6856,6857,3,115,57,0,6857,6858,3,111,55,0,6858,6859,
	3,101,50,0,6859,6860,5,95,0,0,6860,6861,3,117,58,0,6861,6862,3,93,46,0,
	6862,6863,3,113,56,0,6863,6864,3,87,43,0,6864,6865,3,79,39,0,6865,6866,
	3,85,42,0,6866,1224,1,0,0,0,6867,6868,3,115,57,0,6868,6869,3,115,57,0,6869,
	6870,3,101,50,0,6870,1226,1,0,0,0,6871,6872,3,115,57,0,6872,6873,3,117,
	58,0,6873,6874,3,79,39,0,6874,6875,3,83,41,0,6875,6876,3,99,49,0,6876,6877,
	3,87,43,0,6877,6878,3,85,42,0,6878,6879,4,613,49,0,6879,1228,1,0,0,0,6880,
	6881,3,115,57,0,6881,6882,3,117,58,0,6882,6883,3,79,39,0,6883,6884,3,113,
	56,0,6884,6885,3,117,58,0,6885,6886,3,95,47,0,6886,6887,3,105,52,0,6887,
	6888,3,91,45,0,6888,1230,1,0,0,0,6889,6890,3,115,57,0,6890,6891,3,117,58,
	0,6891,6892,3,79,39,0,6892,6893,3,113,56,0,6893,6894,3,117,58,0,6894,6895,
	3,115,57,0,6895,1232,1,0,0,0,6896,6897,3,115,57,0,6897,6898,3,117,58,0,
	6898,6899,3,79,39,0,6899,6900,3,113,56,0,6900,6901,3,117,58,0,6901,1234,
	1,0,0,0,6902,6903,3,115,57,0,6903,6904,3,117,58,0,6904,6905,3,79,39,0,6905,
	6906,3,117,58,0,6906,6907,3,115,57,0,6907,6908,5,95,0,0,6908,6909,3,79,
	39,0,6909,6910,3,119,59,0,6910,6911,3,117,58,0,6911,6912,3,107,53,0,6912,
	6913,5,95,0,0,6913,6914,3,113,56,0,6914,6915,3,87,43,0,6915,6916,3,83,41,
	0,6916,6917,3,79,39,0,6917,6918,3,101,50,0,6918,6919,3,83,41,0,6919,1236,
	1,0,0,0,6920,6921,3,115,57,0,6921,6922,3,117,58,0,6922,6923,3,79,39,0,6923,
	6924,3,117,58,0,6924,6925,3,115,57,0,6925,6926,5,95,0,0,6926,6927,3,109,
	54,0,6927,6928,3,87,43,0,6928,6929,3,113,56,0,6929,6930,3,115,57,0,6930,
	6931,3,95,47,0,6931,6932,3,115,57,0,6932,6933,3,117,58,0,6933,6934,3,87,
	43,0,6934,6935,3,105,52,0,6935,6936,3,117,58,0,6936,1238,1,0,0,0,6937,6938,
	3,115,57,0,6938,6939,3,117,58,0,6939,6940,3,79,39,0,6940,6941,3,117,58,
	0,6941,6942,3,115,57,0,6942,6943,5,95,0,0,6943,6944,3,115,57,0,6944,6945,
	3,79,39,0,6945,6946,3,103,51,0,6946,6947,3,109,54,0,6947,6948,3,101,50,
	0,6948,6949,3,87,43,0,6949,6950,5,95,0,0,6950,6951,3,109,54,0,6951,6952,
	3,79,39,0,6952,6953,3,91,45,0,6953,6954,3,87,43,0,6954,6955,3,115,57,0,
	6955,1240,1,0,0,0,6956,6957,3,115,57,0,6957,6958,3,117,58,0,6958,6959,3,
	79,39,0,6959,6960,3,117,58,0,6960,6961,3,119,59,0,6961,6962,3,115,57,0,
	6962,1242,1,0,0,0,6963,6964,3,115,57,0,6964,6965,3,117,58,0,6965,6966,3,
	85,42,0,6966,6967,3,85,42,0,6967,6968,3,87,43,0,6968,6969,3,121,60,0,6969,
	6970,5,95,0,0,6970,6971,3,115,57,0,6971,6972,3,79,39,0,6972,6973,3,103,
	51,0,6973,6974,3,109,54,0,6974,6975,6,621,40,0,6975,1244,1,0,0,0,6976,6977,
	3,115,57,0,6977,6978,3,117,58,0,6978,6979,3,85,42,0,6979,6980,3,85,42,0,
	6980,6981,3,87,43,0,6981,6982,3,121,60,0,6982,6983,6,622,41,0,6983,1246,
	1,0,0,0,6984,6985,3,115,57,0,6985,6986,3,117,58,0,6986,6987,3,85,42,0,6987,
	6988,3,85,42,0,6988,6989,3,87,43,0,6989,6990,3,121,60,0,6990,6991,5,95,
	0,0,6991,6992,3,109,54,0,6992,6993,3,107,53,0,6993,6994,3,109,54,0,6994,
	6995,6,623,42,0,6995,1248,1,0,0,0,6996,6997,3,115,57,0,6997,6998,3,117,
	58,0,6998,6999,3,85,42,0,6999,7000,6,624,43,0,7000,1250,1,0,0,0,7001,7002,
	3,115,57,0,7002,7003,3,117,58,0,7003,7004,3,107,53,0,7004,7005,3,109,54,
	0,7005,1252,1,0,0,0,7006,7007,3,115,57,0,7007,7008,3,117,58,0,7008,7009,
	3,107,53,0,7009,7010,3,113,56,0,7010,7011,3,79,39,0,7011,7012,3,91,45,0,
	7012,7013,3,87,43,0,7013,1254,1,0,0,0,7014,7015,3,115,57,0,7015,7016,3,
	117,58,0,7016,7017,3,107,53,0,7017,7018,3,113,56,0,7018,7019,3,87,43,0,
	7019,7020,3,85,42,0,7020,7021,4,627,50,0,7021,1256,1,0,0,0,7022,7023,3,
	115,57,0,7023,7024,3,117,58,0,7024,7025,3,113,56,0,7025,7026,3,79,39,0,
	7026,7027,3,95,47,0,7027,7028,3,91,45,0,7028,7029,3,93,46,0,7029,7030,3,
	117,58,0,7030,7031,5,95,0,0,7031,7032,3,97,48,0,7032,7033,3,107,53,0,7033,
	7034,3,95,47,0,7034,7035,3,105,52,0,7035,1258,1,0,0,0,7036,7037,3,115,57,
	0,7037,7038,3,117,58,0,7038,7039,3,113,56,0,7039,7040,3,95,47,0,7040,7041,
	3,105,52,0,7041,7042,3,91,45,0,7042,1260,1,0,0,0,7043,7044,3,115,57,0,7044,
	7045,3,119,59,0,7045,7046,3,81,40,0,7046,7047,3,83,41,0,7047,7048,3,101,
	50,0,7048,7049,3,79,39,0,7049,7050,3,115,57,0,7050,7051,3,115,57,0,7051,
	7052,5,95,0,0,7052,7053,3,107,53,0,7053,7054,3,113,56,0,7054,7055,3,95,
	47,0,7055,7056,3,91,45,0,7056,7057,3,95,47,0,7057,7058,3,105,52,0,7058,
	1262,1,0,0,0,7059,7060,3,115,57,0,7060,7061,3,119,59,0,7061,7062,3,81,40,
	0,7062,7063,3,85,42,0,7063,7064,3,79,39,0,7064,7065,3,117,58,0,7065,7066,
	3,87,43,0,7066,7067,6,631,44,0,7067,1264,1,0,0,0,7068,7069,3,115,57,0,7069,
	7070,3,119,59,0,7070,7071,3,81,40,0,7071,7072,3,97,48,0,7072,7073,3,87,
	43,0,7073,7074,3,83,41,0,7074,7075,3,117,58,0,7075,1266,1,0,0,0,7076,7077,
	3,115,57,0,7077,7078,3,119,59,0,7078,7079,3,81,40,0,7079,7080,3,109,54,
	0,7080,7081,3,79,39,0,7081,7082,3,113,56,0,7082,7083,3,117,58,0,7083,7084,
	3,95,47,0,7084,7085,3,117,58,0,7085,7086,3,95,47,0,7086,7087,3,107,53,0,
	7087,7088,3,105,52,0,7088,7089,3,115,57,0,7089,1268,1,0,0,0,7090,7091,3,
	115,57,0,7091,7092,3,119,59,0,7092,7093,3,81,40,0,7093,7094,3,109,54,0,
	7094,7095,3,79,39,0,7095,7096,3,113,56,0,7096,7097,3,117,58,0,7097,7098,
	3,95,47,0,7098,7099,3,117,58,0,7099,7100,3,95,47,0,7100,7101,3,107,53,0,
	7101,7102,3,105,52,0,7102,1270,1,0,0,0,7103,7104,3,115,57,0,7104,7105,3,
	119,59,0,7105,7106,3,81,40,0,7106,7107,3,115,57,0,7107,7108,3,117,58,0,
	7108,7109,3,113,56,0,7109,7110,6,635,45,0,7110,1272,1,0,0,0,7111,7112,3,
	115,57,0,7112,7113,3,119,59,0,7113,7114,3,81,40,0,7114,7115,3,115,57,0,
	7115,7116,3,117,58,0,7116,7117,3,113,56,0,7117,7118,3,95,47,0,7118,7119,
	3,105,52,0,7119,7120,3,91,45,0,7120,7121,6,636,46,0,7121,1274,1,0,0,0,7122,
	7123,3,115,57,0,7123,7124,3,119,59,0,7124,7125,3,103,51,0,7125,7126,6,637,
	47,0,7126,1276,1,0,0,0,7127,7128,3,115,57,0,7128,7129,3,119,59,0,7129,7130,
	3,109,54,0,7130,7131,3,87,43,0,7131,7132,3,113,56,0,7132,1278,1,0,0,0,7133,
	7134,3,115,57,0,7134,7135,3,119,59,0,7135,7136,3,115,57,0,7136,7137,3,109,
	54,0,7137,7138,3,87,43,0,7138,7139,3,105,52,0,7139,7140,3,85,42,0,7140,
	1280,1,0,0,0,7141,7142,3,115,57,0,7142,7143,3,123,61,0,7143,7144,3,79,39,
	0,7144,7145,3,109,54,0,7145,7146,3,115,57,0,7146,1282,1,0,0,0,7147,7148,
	3,115,57,0,7148,7149,3,123,61,0,7149,7150,3,95,47,0,7150,7151,3,117,58,
	0,7151,7152,3,83,41,0,7152,7153,3,93,46,0,7153,7154,3,87,43,0,7154,7155,
	3,115,57,0,7155,1284,1,0,0,0,7156,7157,3,115,57,0,7157,7158,3,127,63,0,
	7158,7159,3,115,57,0,7159,7160,3,85,42,0,7160,7161,3,79,39,0,7161,7162,
	3,117,58,0,7162,7163,3,87,43,0,7163,7164,6,642,48,0,7164,1286,1,0,0,0,7165,
	7166,3,115,57,0,7166,7167,3,127,63,0,7167,7168,3,115,57,0,7168,7169,3,117,
	58,0,7169,7170,3,87,43,0,7170,7171,3,103,51,0,7171,7172,5,95,0,0,7172,7173,
	3,119,59,0,7173,7174,3,115,57,0,7174,7175,3,87,43,0,7175,7176,3,113,56,
	0,7176,7177,6,643,49,0,7177,1288,1,0,0,0,7178,7179,3,117,58,0,7179,7180,
	3,79,39,0,7180,7181,3,81,40,0,7181,7182,3,101,50,0,7182,7183,3,87,43,0,
	7183,7184,3,115,57,0,7184,1290,1,0,0,0,7185,7186,3,117,58,0,7186,7187,3,
	79,39,0,7187,7188,3,81,40,0,7188,7189,3,101,50,0,7189,7190,3,87,43,0,7190,
	7191,3,115,57,0,7191,7192,3,109,54,0,7192,7193,3,79,39,0,7193,7194,3,83,
	41,0,7194,7195,3,87,43,0,7195,1292,1,0,0,0,7196,7197,3,117,58,0,7197,7198,
	3,79,39,0,7198,7199,3,81,40,0,7199,7200,3,101,50,0,7200,7201,3,87,43,0,
	7201,7202,5,95,0,0,7202,7203,3,113,56,0,7203,7204,3,87,43,0,7204,7205,3,
	89,44,0,7205,7206,5,95,0,0,7206,7207,3,109,54,0,7207,7208,3,113,56,0,7208,
	7209,3,95,47,0,7209,7210,3,107,53,0,7210,7211,3,113,56,0,7211,7212,3,95,
	47,0,7212,7213,3,117,58,0,7213,7214,3,127,63,0,7214,7215,4,646,51,0,7215,
	1294,1,0,0,0,7216,7217,3,117,58,0,7217,7218,3,79,39,0,7218,7219,3,81,40,
	0,7219,7220,3,101,50,0,7220,7221,3,87,43,0,7221,1296,1,0,0,0,7222,7223,
	3,117,58,0,7223,7224,3,79,39,0,7224,7225,3,81,40,0,7225,7226,3,101,50,0,
	7226,7227,3,87,43,0,7227,7228,5,95,0,0,7228,7229,3,83,41,0,7229,7230,3,
	93,46,0,7230,7231,3,87,43,0,7231,7232,3,83,41,0,7232,7233,3,99,49,0,7233,
	7234,3,115,57,0,7234,7235,3,119,59,0,7235,7236,3,103,51,0,7236,1298,1,0,
	0,0,7237,7238,3,117,58,0,7238,7239,3,79,39,0,7239,7240,3,81,40,0,7240,7241,
	3,101,50,0,7241,7242,3,87,43,0,7242,7243,5,95,0,0,7243,7244,3,105,52,0,
	7244,7245,3,79,39,0,7245,7246,3,103,51,0,7246,7247,3,87,43,0,7247,1300,
	1,0,0,0,7248,7249,3,117,58,0,7249,7250,3,87,43,0,7250,7251,3,103,51,0,7251,
	7252,3,109,54,0,7252,7253,3,107,53,0,7253,7254,3,113,56,0,7254,7255,3,79,
	39,0,7255,7256,3,113,56,0,7256,7257,3,127,63,0,7257,1302,1,0,0,0,7258,7259,
	3,117,58,0,7259,7260,3,87,43,0,7260,7261,3,103,51,0,7261,7262,3,109,54,
	0,7262,7263,3,117,58,0,7263,7264,3,79,39,0,7264,7265,3,81,40,0,7265,7266,
	3,101,50,0,7266,7267,3,87,43,0,7267,1304,1,0,0,0,7268,7269,3,117,58,0,7269,
	7270,3,87,43,0,7270,7271,3,113,56,0,7271,7272,3,103,51,0,7272,7273,3,95,
	47,0,7273,7274,3,105,52,0,7274,7275,3,79,39,0,7275,7276,3,117,58,0,7276,
	7277,3,87,43,0,7277,7278,3,85,42,0,7278,1306,1,0,0,0,7279,7280,3,117,58,
	0,7280,7281,3,87,43,0,7281,7282,3,125,62,0,7282,7283,3,117,58,0,7283,1308,
	1,0,0,0,7284,7285,3,117,58,0,7285,7286,3,93,46,0,7286,7287,3,79,39,0,7287,
	7288,3,105,52,0,7288,1310,1,0,0,0,7289,7290,3,117,58,0,7290,7291,3,93,46,
	0,7291,7292,3,87,43,0,7292,7293,3,105,52,0,7293,1312,1,0,0,0,7294,7295,
	3,117,58,0,7295,7296,3,95,47,0,7296,7297,3,103,51,0,7297,7298,3,87,43,0,
	7298,7299,3,115,57,0,7299,7300,3,117,58,0,7300,7301,3,79,39,0,7301,7302,
	3,103,51,0,7302,7303,3,109,54,0,7303,1314,1,0,0,0,7304,7305,3,117,58,0,
	7305,7306,3,95,47,0,7306,7307,3,103,51,0,7307,7308,3,87,43,0,7308,7309,
	3,115,57,0,7309,7310,3,117,58,0,7310,7311,3,79,39,0,7311,7312,3,103,51,
	0,7312,7313,3,109,54,0,7313,7314,5,95,0,0,7314,7315,3,79,39,0,7315,7316,
	3,85,42,0,7316,7317,3,85,42,0,7317,1316,1,0,0,0,7318,7319,3,117,58,0,7319,
	7320,3,95,47,0,7320,7321,3,103,51,0,7321,7322,3,87,43,0,7322,7323,3,115,
	57,0,7323,7324,3,117,58,0,7324,7325,3,79,39,0,7325,7326,3,103,51,0,7326,
	7327,3,109,54,0,7327,7328,5,95,0,0,7328,7329,3,85,42,0,7329,7330,3,95,47,
	0,7330,7331,3,89,44,0,7331,7332,3,89,44,0,7332,1318,1,0,0,0,7333,7334,3,
	117,58,0,7334,7335,3,95,47,0,7335,7336,3,103,51,0,7336,7337,3,87,43,0,7337,
	1320,1,0,0,0,7338,7339,3,117,58,0,7339,7340,3,95,47,0,7340,7341,3,105,52,
	0,7341,7342,3,127,63,0,7342,7343,3,81,40,0,7343,7344,3,101,50,0,7344,7345,
	3,107,53,0,7345,7346,3,81,40,0,7346,1322,1,0,0,0,7347,7348,3,117,58,0,7348,
	7349,3,95,47,0,7349,7350,3,105,52,0,7350,7351,3,127,63,0,7351,7352,3,95,
	47,0,7352,7353,3,105,52,0,7353,7354,3,117,58,0,7354,1324,1,0,0,0,7355,7356,
	3,117,58,0,7356,7357,3,95,47,0,7357,7358,3,105,52,0,7358,7359,3,127,63,
	0,7359,7360,3,117,58,0,7360,7361,3,87,43,0,7361,7362,3,125,62,0,7362,7363,
	3,117,58,0,7363,1326,1,0,0,0,7364,7365,3,117,58,0,7365,7366,3,107,53,0,
	7366,1328,1,0,0,0,7367,7368,3,117,58,0,7368,7369,3,113,56,0,7369,7370,3,
	79,39,0,7370,7371,3,95,47,0,7371,7372,3,101,50,0,7372,7373,3,95,47,0,7373,
	7374,3,105,52,0,7374,7375,3,91,45,0,7375,1330,1,0,0,0,7376,7377,3,117,58,
	0,7377,7378,3,113,56,0,7378,7379,3,79,39,0,7379,7380,3,105,52,0,7380,7381,
	3,115,57,0,7381,7382,3,79,39,0,7382,7383,3,83,41,0,7383,7384,3,117,58,0,
	7384,7385,3,95,47,0,7385,7386,3,107,53,0,7386,7387,3,105,52,0,7387,1332,
	1,0,0,0,7388,7389,3,117,58,0,7389,7390,3,113,56,0,7390,7391,3,95,47,0,7391,
	7392,3,91,45,0,7392,7393,3,91,45,0,7393,7394,3,87,43,0,7394,7395,3,113,
	56,0,7395,7396,3,115,57,0,7396,1334,1,0,0,0,7397,7398,3,117,58,0,7398,7399,
	3,113,56,0,7399,7400,3,95,47,0,7400,7401,3,91,45,0,7401,7402,3,91,45,0,
	7402,7403,3,87,43,0,7403,7404,3,113,56,0,7404,1336,1,0,0,0,7405,7406,3,
	117,58,0,7406,7407,3,113,56,0,7407,7408,3,95,47,0,7408,7409,3,103,51,0,
	7409,7410,6,668,50,0,7410,1338,1,0,0,0,7411,7412,3,117,58,0,7412,7413,3,
	113,56,0,7413,7414,3,119,59,0,7414,7415,3,87,43,0,7415,1340,1,0,0,0,7416,
	7417,3,117,58,0,7417,7418,3,113,56,0,7418,7419,3,119,59,0,7419,7420,3,105,
	52,0,7420,7421,3,83,41,0,7421,7422,3,79,39,0,7422,7423,3,117,58,0,7423,
	7424,3,87,43,0,7424,1342,1,0,0,0,7425,7426,3,117,58,0,7426,7427,3,127,63,
	0,7427,7428,3,109,54,0,7428,7429,3,87,43,0,7429,7430,3,115,57,0,7430,1344,
	1,0,0,0,7431,7432,3,117,58,0,7432,7433,3,127,63,0,7433,7434,3,109,54,0,
	7434,7435,3,87,43,0,7435,1346,1,0,0,0,7436,7437,3,119,59,0,7437,7438,3,
	85,42,0,7438,7439,3,89,44,0,7439,7440,5,95,0,0,7440,7441,3,113,56,0,7441,
	7442,3,87,43,0,7442,7443,3,117,58,0,7443,7444,3,119,59,0,7444,7445,3,113,
	56,0,7445,7446,3,105,52,0,7446,7447,3,115,57,0,7447,1348,1,0,0,0,7448,7449,
	3,119,59,0,7449,7450,3,105,52,0,7450,7451,3,83,41,0,7451,7452,3,107,53,
	0,7452,7453,3,103,51,0,7453,7454,3,103,51,0,7454,7455,3,95,47,0,7455,7456,
	3,117,58,0,7456,7457,3,117,58,0,7457,7458,3,87,43,0,7458,7459,3,85,42,0,
	7459,1350,1,0,0,0,7460,7461,3,119,59,0,7461,7462,3,105,52,0,7462,7463,3,
	85,42,0,7463,7464,3,87,43,0,7464,7465,3,89,44,0,7465,7466,3,95,47,0,7466,
	7467,3,105,52,0,7467,7468,3,87,43,0,7468,7469,3,85,42,0,7469,1352,1,0,0,
	0,7470,7471,3,119,59,0,7471,7472,3,105,52,0,7472,7473,3,85,42,0,7473,7474,
	3,107,53,0,7474,7475,3,89,44,0,7475,7476,3,95,47,0,7476,7477,3,101,50,0,
	7477,7478,3,87,43,0,7478,1354,1,0,0,0,7479,7480,3,119,59,0,7480,7481,3,
	105,52,0,7481,7482,3,85,42,0,7482,7483,3,107,53,0,7483,7484,5,95,0,0,7484,
	7485,3,81,40,0,7485,7486,3,119,59,0,7486,7487,3,89,44,0,7487,7488,3,89,
	44,0,7488,7489,3,87,43,0,7489,7490,3,113,56,0,7490,7491,5,95,0,0,7491,7492,
	3,115,57,0,7492,7493,3,95,47,0,7493,7494,3,129,64,0,7494,7495,3,87,43,0,
	7495,1356,1,0,0,0,7496,7497,3,119,59,0,7497,7498,3,105,52,0,7498,7499,3,
	85,42,0,7499,7500,3,107,53,0,7500,1358,1,0,0,0,7501,7502,3,119,59,0,7502,
	7503,3,105,52,0,7503,7504,3,95,47,0,7504,7505,3,83,41,0,7505,7506,3,107,
	53,0,7506,7507,3,85,42,0,7507,7508,3,87,43,0,7508,1360,1,0,0,0,7509,7510,
	3,119,59,0,7510,7511,3,105,52,0,7511,7512,3,95,47,0,7512,7513,3,105,52,
	0,7513,7514,3,115,57,0,7514,7515,3,117,58,0,7515,7516,3,79,39,0,7516,7517,
	3,101,50,0,7517,7518,3,101,50,0,7518,1362,1,0,0,0,7519,7520,3,119,59,0,
	7520,7521,3,105,52,0,7521,7522,3,95,47,0,7522,7523,3,107,53,0,7523,7524,
	3,105,52,0,7524,1364,1,0,0,0,7525,7526,3,119,59,0,7526,7527,3,105,52,0,
	7527,7528,3,95,47,0,7528,7529,3,111,55,0,7529,7530,3,119,59,0,7530,7531,
	3,87,43,0,7531,1366,1,0,0,0,7532,7533,3,119,59,0,7533,7534,3,105,52,0,7534,
	7535,3,99,49,0,7535,7536,3,105,52,0,7536,7537,3,107,53,0,7537,7538,3,123,
	61,0,7538,7539,3,105,52,0,7539,1368,1,0,0,0,7540,7541,3,119,59,0,7541,7542,
	3,105,52,0,7542,7543,3,101,50,0,7543,7544,3,107,53,0,7544,7545,3,83,41,
	0,7545,7546,3,99,49,0,7546,1370,1,0,0,0,7547,7548,3,119,59,0,7548,7549,
	3,105,52,0,7549,7550,3,115,57,0,7550,7551,3,95,47,0,7551,7552,3,91,45,0,
	7552,7553,3,105,52,0,7553,7554,3,87,43,0,7554,7555,3,85,42,0,7555,1372,
	1,0,0,0,7556,7557,3,119,59,0,7557,7558,3,105,52,0,7558,7559,3,117,58,0,
	7559,7560,3,95,47,0,7560,7561,3,101,50,0,7561,1374,1,0,0,0,7562,7563,3,
	119,59,0,7563,7564,3,109,54,0,7564,7565,3,85,42,0,7565,7566,3,79,39,0,7566,
	7567,3,117,58,0,7567,7568,3,87,43,0,7568,1376,1,0,0,0,7569,7570,3,119,59,
	0,7570,7571,3,109,54,0,7571,7572,3,91,45,0,7572,7573,3,113,56,0,7573,7574,
	3,79,39,0,7574,7575,3,85,42,0,7575,7576,3,87,43,0,7576,1378,1,0,0,0,7577,
	7578,3,119,59,0,7578,7579,3,115,57,0,7579,7580,3,79,39,0,7580,7581,3,91,
	45,0,7581,7582,3,87,43,0,7582,1380,1,0,0,0,7583,7584,3,119,59,0,7584,7585,
	3,115,57,0,7585,7586,3,87,43,0,7586,7587,3,113,56,0,7587,7588,5,95,0,0,
	7588,7589,3,113,56,0,7589,7590,3,87,43,0,7590,7591,3,115,57,0,7591,7592,
	3,107,53,0,7592,7593,3,119,59,0,7593,7594,3,113,56,0,7594,7595,3,83,41,
	0,7595,7596,3,87,43,0,7596,7597,3,115,57,0,7597,1382,1,0,0,0,7598,7599,
	3,119,59,0,7599,7600,3,115,57,0,7600,7601,3,87,43,0,7601,7602,3,113,56,
	0,7602,1384,1,0,0,0,7603,7604,3,119,59,0,7604,7605,3,115,57,0,7605,7606,
	3,87,43,0,7606,7607,5,95,0,0,7607,7608,3,89,44,0,7608,7609,3,113,56,0,7609,
	7610,3,103,51,0,7610,1386,1,0,0,0,7611,7612,3,119,59,0,7612,7613,3,115,
	57,0,7613,7614,3,87,43,0,7614,1388,1,0,0,0,7615,7616,3,119,59,0,7616,7617,
	3,115,57,0,7617,7618,3,95,47,0,7618,7619,3,105,52,0,7619,7620,3,91,45,0,
	7620,1390,1,0,0,0,7621,7622,3,119,59,0,7622,7623,3,117,58,0,7623,7624,3,
	83,41,0,7624,7625,5,95,0,0,7625,7626,3,85,42,0,7626,7627,3,79,39,0,7627,
	7628,3,117,58,0,7628,7629,3,87,43,0,7629,1392,1,0,0,0,7630,7631,3,119,59,
	0,7631,7632,3,117,58,0,7632,7633,3,83,41,0,7633,7634,5,95,0,0,7634,7635,
	3,117,58,0,7635,7636,3,95,47,0,7636,7637,3,103,51,0,7637,7638,3,87,43,0,
	7638,7639,3,115,57,0,7639,7640,3,117,58,0,7640,7641,3,79,39,0,7641,7642,
	3,103,51,0,7642,7643,3,109,54,0,7643,1394,1,0,0,0,7644,7645,3,119,59,0,
	7645,7646,3,117,58,0,7646,7647,3,83,41,0,7647,7648,5,95,0,0,7648,7649,3,
	117,58,0,7649,7650,3,95,47,0,7650,7651,3,103,51,0,7651,7652,3,87,43,0,7652,
	1396,1,0,0,0,7653,7654,3,121,60,0,7654,7655,3,79,39,0,7655,7656,3,101,50,
	0,7656,7657,3,95,47,0,7657,7658,3,85,42,0,7658,7659,3,79,39,0,7659,7660,
	3,117,58,0,7660,7661,3,95,47,0,7661,7662,3,107,53,0,7662,7663,3,105,52,
	0,7663,7664,4,698,52,0,7664,1398,1,0,0,0,7665,7666,3,121,60,0,7666,7667,
	3,79,39,0,7667,7668,3,101,50,0,7668,7669,3,119,59,0,7669,7670,3,87,43,0,
	7670,7671,3,115,57,0,7671,1400,1,0,0,0,7672,7673,3,121,60,0,7673,7674,3,
	79,39,0,7674,7675,3,101,50,0,7675,7676,3,119,59,0,7676,7677,3,87,43,0,7677,
	1402,1,0,0,0,7678,7679,3,121,60,0,7679,7680,3,79,39,0,7680,7681,3,113,56,
	0,7681,7682,3,81,40,0,7682,7683,3,95,47,0,7683,7684,3,105,52,0,7684,7685,
	3,79,39,0,7685,7686,3,113,56,0,7686,7687,3,127,63,0,7687,1404,1,0,0,0,7688,
	7689,3,121,60,0,7689,7690,3,79,39,0,7690,7691,3,113,56,0,7691,7692,3,83,
	41,0,7692,7693,3,93,46,0,7693,7694,3,79,39,0,7694,7695,3,113,56,0,7695,
	1406,1,0,0,0,7696,7697,3,121,60,0,7697,7698,3,79,39,0,7698,7699,3,113,56,
	0,7699,7700,3,83,41,0,7700,7701,3,93,46,0,7701,7702,3,79,39,0,7702,7703,
	3,113,56,0,7703,7704,3,79,39,0,7704,7705,3,83,41,0,7705,7706,3,117,58,0,
	7706,7707,3,87,43,0,7707,7708,3,113,56,0,7708,7709,1,0,0,0,7709,7710,6,
	703,51,0,7710,1408,1,0,0,0,7711,7712,3,121,60,0,7712,7713,3,79,39,0,7713,
	7714,3,113,56,0,7714,7715,3,95,47,0,7715,7716,3,79,39,0,7716,7717,3,81,
	40,0,7717,7718,3,101,50,0,7718,7719,3,87,43,0,7719,7720,3,115,57,0,7720,
	1410,1,0,0,0,7721,7722,3,121,60,0,7722,7723,3,79,39,0,7723,7724,3,113,56,
	0,7724,7725,3,95,47,0,7725,7726,3,79,39,0,7726,7727,3,105,52,0,7727,7728,
	3,83,41,0,7728,7729,3,87,43,0,7729,7730,6,705,52,0,7730,1412,1,0,0,0,7731,
	7732,3,121,60,0,7732,7733,3,79,39,0,7733,7734,3,113,56,0,7734,7735,3,127,
	63,0,7735,7736,3,95,47,0,7736,7737,3,105,52,0,7737,7738,3,91,45,0,7738,
	1414,1,0,0,0,7739,7740,3,121,60,0,7740,7741,3,79,39,0,7741,7742,3,113,56,
	0,7742,7743,5,95,0,0,7743,7744,3,109,54,0,7744,7745,3,107,53,0,7745,7746,
	3,109,54,0,7746,7747,6,707,53,0,7747,1416,1,0,0,0,7748,7749,3,121,60,0,
	7749,7750,3,79,39,0,7750,7751,3,113,56,0,7751,7752,5,95,0,0,7752,7753,3,
	115,57,0,7753,7754,3,79,39,0,7754,7755,3,103,51,0,7755,7756,3,109,54,0,
	7756,7757,6,708,54,0,7757,1418,1,0,0,0,7758,7759,3,121,60,0,7759,7760,3,
	95,47,0,7760,7761,3,87,43,0,7761,7762,3,123,61,0,7762,1420,1,0,0,0,7763,
	7764,3,121,60,0,7764,7765,3,95,47,0,7765,7766,3,113,56,0,7766,7767,3,117,
	58,0,7767,7768,3,119,59,0,7768,7769,3,79,39,0,7769,7770,3,101,50,0,7770,
	7771,4,710,53,0,7771,1422,1,0,0,0,7772,7773,3,123,61,0,7773,7774,3,79,39,
	0,7774,7775,3,95,47,0,7775,7776,3,117,58,0,7776,1424,1,0,0,0,7777,7778,
	3,123,61,0,7778,7779,3,79,39,0,7779,7780,3,113,56,0,7780,7781,3,105,52,
	0,7781,7782,3,95,47,0,7782,7783,3,105,52,0,7783,7784,3,91,45,0,7784,7785,
	3,115,57,0,7785,1426,1,0,0,0,7786,7787,3,123,61,0,7787,7788,3,87,43,0,7788,
	7789,3,87,43,0,7789,7790,3,99,49,0,7790,1428,1,0,0,0,7791,7792,3,123,61,
	0,7792,7793,3,87,43,0,7793,7794,3,95,47,0,7794,7795,3,91,45,0,7795,7796,
	3,93,46,0,7796,7797,3,117,58,0,7797,7798,5,95,0,0,7798,7799,3,115,57,0,
	7799,7800,3,117,58,0,7800,7801,3,113,56,0,7801,7802,3,95,47,0,7802,7803,
	3,105,52,0,7803,7804,3,91,45,0,7804,1430,1,0,0,0,7805,7806,3,123,61,0,7806,
	7807,3,93,46,0,7807,7808,3,87,43,0,7808,7809,3,105,52,0,7809,1432,1,0,0,
	0,7810,7811,3,123,61,0,7811,7812,3,93,46,0,7812,7813,3,87,43,0,7813,7814,
	3,113,56,0,7814,7815,3,87,43,0,7815,1434,1,0,0,0,7816,7817,3,123,61,0,7817,
	7818,3,93,46,0,7818,7819,3,95,47,0,7819,7820,3,101,50,0,7820,7821,3,87,
	43,0,7821,1436,1,0,0,0,7822,7823,3,123,61,0,7823,7824,3,95,47,0,7824,7825,
	3,117,58,0,7825,7826,3,93,46,0,7826,1438,1,0,0,0,7827,7828,3,123,61,0,7828,
	7829,3,95,47,0,7829,7830,3,117,58,0,7830,7831,3,93,46,0,7831,7832,3,107,
	53,0,7832,7833,3,119,59,0,7833,7834,3,117,58,0,7834,1440,1,0,0,0,7835,7836,
	3,123,61,0,7836,7837,3,107,53,0,7837,7838,3,113,56,0,7838,7839,3,99,49,
	0,7839,1442,1,0,0,0,7840,7841,3,123,61,0,7841,7842,3,113,56,0,7842,7843,
	3,79,39,0,7843,7844,3,109,54,0,7844,7845,3,109,54,0,7845,7846,3,87,43,0,
	7846,7847,3,113,56,0,7847,1444,1,0,0,0,7848,7849,3,123,61,0,7849,7850,3,
	113,56,0,7850,7851,3,95,47,0,7851,7852,3,117,58,0,7852,7853,3,87,43,0,7853,
	1446,1,0,0,0,7854,7855,3,125,62,0,7855,7856,5,53,0,0,7856,7857,5,48,0,0,
	7857,7858,5,57,0,0,7858,1448,1,0,0,0,7859,7860,3,125,62,0,7860,7861,3,79,
	39,0,7861,1450,1,0,0,0,7862,7863,3,125,62,0,7863,7864,3,95,47,0,7864,7865,
	3,85,42,0,7865,7866,4,725,54,0,7866,1452,1,0,0,0,7867,7868,3,125,62,0,7868,
	7869,3,103,51,0,7869,7870,3,101,50,0,7870,1454,1,0,0,0,7871,7872,3,125,
	62,0,7872,7873,3,107,53,0,7873,7874,3,113,56,0,7874,1456,1,0,0,0,7875,7876,
	3,127,63,0,7876,7877,3,87,43,0,7877,7878,3,79,39,0,7878,7879,3,113,56,0,
	7879,7880,5,95,0,0,7880,7881,3,103,51,0,7881,7882,3,107,53,0,7882,7883,
	3,105,52,0,7883,7884,3,117,58,0,7884,7885,3,93,46,0,7885,1458,1,0,0,0,7886,
	7887,3,127,63,0,7887,7888,3,87,43,0,7888,7889,3,79,39,0,7889,7890,3,113,
	56,0,7890,1460,1,0,0,0,7891,7892,3,129,64,0,7892,7893,3,87,43,0,7893,7894,
	3,113,56,0,7894,7895,3,107,53,0,7895,7896,3,89,44,0,7896,7897,3,95,47,0,
	7897,7898,3,101,50,0,7898,7899,3,101,50,0,7899,1462,1,0,0,0,7900,7901,3,
	109,54,0,7901,7902,3,87,43,0,7902,7903,3,113,56,0,7903,7904,3,115,57,0,
	7904,7905,3,95,47,0,7905,7906,3,115,57,0,7906,7907,3,117,58,0,7907,7908,
	4,731,55,0,7908,1464,1,0,0,0,7909,7910,3,113,56,0,7910,7911,3,107,53,0,
	7911,7912,3,101,50,0,7912,7913,3,87,43,0,7913,7914,4,732,56,0,7914,1466,
	1,0,0,0,7915,7916,3,79,39,0,7916,7917,3,85,42,0,7917,7918,3,103,51,0,7918,
	7919,3,95,47,0,7919,7920,3,105,52,0,7920,7921,4,733,57,0,7921,1468,1,0,
	0,0,7922,7923,3,95,47,0,7923,7924,3,105,52,0,7924,7925,3,121,60,0,7925,
	7926,3,95,47,0,7926,7927,3,115,57,0,7927,7928,3,95,47,0,7928,7929,3,81,
	40,0,7929,7930,3,101,50,0,7930,7931,3,87,43,0,7931,7932,4,734,58,0,7932,
	1470,1,0,0,0,7933,7934,3,121,60,0,7934,7935,3,95,47,0,7935,7936,3,115,57,
	0,7936,7937,3,95,47,0,7937,7938,3,81,40,0,7938,7939,3,101,50,0,7939,7940,
	3,87,43,0,7940,7941,4,735,59,0,7941,1472,1,0,0,0,7942,7943,3,87,43,0,7943,
	7944,3,125,62,0,7944,7945,3,83,41,0,7945,7946,3,87,43,0,7946,7947,3,109,
	54,0,7947,7948,3,117,58,0,7948,7949,4,736,60,0,7949,1474,1,0,0,0,7950,7951,
	3,83,41,0,7951,7952,3,107,53,0,7952,7953,3,103,51,0,7953,7954,3,109,54,
	0,7954,7955,3,107,53,0,7955,7956,3,105,52,0,7956,7957,3,87,43,0,7957,7958,
	3,105,52,0,7958,7959,3,117,58,0,7959,7960,4,737,61,0,7960,1476,1,0,0,0,
	7961,7962,3,113,56,0,7962,7963,3,87,43,0,7963,7964,3,83,41,0,7964,7965,
	3,119,59,0,7965,7966,3,113,56,0,7966,7967,3,115,57,0,7967,7968,3,95,47,
	0,7968,7969,3,121,60,0,7969,7970,3,87,43,0,7970,7971,4,738,62,0,7971,1478,
	1,0,0,0,7972,7973,3,97,48,0,7973,7974,3,115,57,0,7974,7975,3,107,53,0,7975,
	7976,3,105,52,0,7976,7977,5,95,0,0,7977,7978,3,107,53,0,7978,7979,3,81,
	40,0,7979,7980,3,97,48,0,7980,7981,3,87,43,0,7981,7982,3,83,41,0,7982,7983,
	3,117,58,0,7983,7984,3,79,39,0,7984,7985,3,91,45,0,7985,7986,3,91,45,0,
	7986,7987,4,739,63,0,7987,1480,1,0,0,0,7988,7989,3,97,48,0,7989,7990,3,
	115,57,0,7990,7991,3,107,53,0,7991,7992,3,105,52,0,7992,7993,5,95,0,0,7993,
	7994,3,79,39,0,7994,7995,3,113,56,0,7995,7996,3,113,56,0,7996,7997,3,79,
	39,0,7997,7998,3,127,63,0,7998,7999,3,79,39,0,7999,8000,3,91,45,0,8000,
	8001,3,91,45,0,8001,8002,4,740,64,0,8002,1482,1,0,0,0,8003,8004,3,107,53,
	0,8004,8005,3,89,44,0,8005,8006,4,741,65,0,8006,1484,1,0,0,0,8007,8008,
	3,115,57,0,8008,8009,3,99,49,0,8009,8010,3,95,47,0,8010,8011,3,109,54,0,
	8011,8012,4,742,66,0,8012,1486,1,0,0,0,8013,8014,3,101,50,0,8014,8015,3,
	107,53,0,8015,8016,3,83,41,0,8016,8017,3,99,49,0,8017,8018,3,87,43,0,8018,
	8019,3,85,42,0,8019,8020,4,743,67,0,8020,1488,1,0,0,0,8021,8022,3,105,52,
	0,8022,8023,3,107,53,0,8023,8024,3,123,61,0,8024,8025,3,79,39,0,8025,8026,
	3,95,47,0,8026,8027,3,117,58,0,8027,8028,4,744,68,0,8028,1490,1,0,0,0,8029,
	8030,3,91,45,0,8030,8031,3,113,56,0,8031,8032,3,107,53,0,8032,8033,3,119,
	59,0,8033,8034,3,109,54,0,8034,8035,3,95,47,0,8035,8036,3,105,52,0,8036,
	8037,3,91,45,0,8037,8038,4,745,69,0,8038,1492,1,0,0,0,8039,8040,3,109,54,
	0,8040,8041,3,87,43,0,8041,8042,3,113,56,0,8042,8043,3,115,57,0,8043,8044,
	3,95,47,0,8044,8045,3,115,57,0,8045,8046,3,117,58,0,8046,8047,5,95,0,0,
	8047,8048,3,107,53,0,8048,8049,3,105,52,0,8049,8050,3,101,50,0,8050,8051,
	3,127,63,0,8051,8052,4,746,70,0,8052,1494,1,0,0,0,8053,8054,3,93,46,0,8054,
	8055,3,95,47,0,8055,8056,3,115,57,0,8056,8057,3,117,58,0,8057,8058,3,107,
	53,0,8058,8059,3,91,45,0,8059,8060,3,113,56,0,8060,8061,3,79,39,0,8061,
	8062,3,103,51,0,8062,8063,4,747,71,0,8063,1496,1,0,0,0,8064,8065,3,81,40,
	0,8065,8066,3,119,59,0,8066,8067,3,83,41,0,8067,8068,3,99,49,0,8068,8069,
	3,87,43,0,8069,8070,3,117,58,0,8070,8071,3,115,57,0,8071,8072,4,748,72,
	0,8072,1498,1,0,0,0,8073,8074,3,113,56,0,8074,8075,3,87,43,0,8075,8076,
	3,103,51,0,8076,8077,3,107,53,0,8077,8078,3,117,58,0,8078,8079,3,87,43,
	0,8079,8080,4,749,73,0,8080,1500,1,0,0,0,8081,8082,3,83,41,0,8082,8083,
	3,101,50,0,8083,8084,3,107,53,0,8084,8085,3,105,52,0,8085,8086,3,87,43,
	0,8086,8087,4,750,74,0,8087,1502,1,0,0,0,8088,8089,3,83,41,0,8089,8090,
	3,119,59,0,8090,8091,3,103,51,0,8091,8092,3,87,43,0,8092,8093,5,95,0,0,
	8093,8094,3,85,42,0,8094,8095,3,95,47,0,8095,8096,3,115,57,0,8096,8097,
	3,117,58,0,8097,8098,4,751,75,0,8098,1504,1,0,0,0,8099,8100,3,85,42,0,8100,
	8101,3,87,43,0,8101,8102,3,105,52,0,8102,8103,3,115,57,0,8103,8104,3,87,
	43,0,8104,8105,5,95,0,0,8105,8106,3,113,56,0,8106,8107,3,79,39,0,8107,8108,
	3,105,52,0,8108,8109,3,99,49,0,8109,8110,4,752,76,0,8110,1506,1,0,0,0,8111,
	8112,3,87,43,0,8112,8113,3,125,62,0,8113,8114,3,83,41,0,8114,8115,3,101,
	50,0,8115,8116,3,119,59,0,8116,8117,3,85,42,0,8117,8118,3,87,43,0,8118,
	8119,4,753,77,0,8119,1508,1,0,0,0,8120,8121,3,89,44,0,8121,8122,3,95,47,
	0,8122,8123,3,113,56,0,8123,8124,3,115,57,0,8124,8125,3,117,58,0,8125,8126,
	5,95,0,0,8126,8127,3,121,60,0,8127,8128,3,79,39,0,8128,8129,3,101,50,0,
	8129,8130,3,119,59,0,8130,8131,3,87,43,0,8131,8132,4,754,78,0,8132,1510,
	1,0,0,0,8133,8134,3,89,44,0,8134,8135,3,107,53,0,8135,8136,3,101,50,0,8136,
	8137,3,101,50,0,8137,8138,3,107,53,0,8138,8139,3,123,61,0,8139,8140,3,95,
	47,0,8140,8141,3,105,52,0,8141,8142,3,91,45,0,8142,8143,4,755,79,0,8143,
	1512,1,0,0,0,8144,8145,3,91,45,0,8145,8146,3,113,56,0,8146,8147,3,107,53,
	0,8147,8148,3,119,59,0,8148,8149,3,109,54,0,8149,8150,3,115,57,0,8150,8151,
	4,756,80,0,8151,1514,1,0,0,0,8152,8153,3,101,50,0,8153,8154,3,79,39,0,8154,
	8155,3,91,45,0,8155,8156,4,757,81,0,8156,1516,1,0,0,0,8157,8158,3,101,50,
	0,8158,8159,3,79,39,0,8159,8160,3,115,57,0,8160,8161,3,117,58,0,8161,8162,
	5,95,0,0,8162,8163,3,121,60,0,8163,8164,3,79,39,0,8164,8165,3,101,50,0,
	8165,8166,3,119,59,0,8166,8167,3,87,43,0,8167,8168,4,758,82,0,8168,1518,
	1,0,0,0,8169,8170,3,101,50,0,8170,8171,3,87,43,0,8171,8172,3,79,39,0,8172,
	8173,3,85,42,0,8173,8174,4,759,83,0,8174,1520,1,0,0,0,8175,8176,3,105,52,
	0,8176,8177,3,117,58,0,8177,8178,3,93,46,0,8178,8179,5,95,0,0,8179,8180,
	3,121,60,0,8180,8181,3,79,39,0,8181,8182,3,101,50,0,8182,8183,3,119,59,
	0,8183,8184,3,87,43,0,8184,8185,4,760,84,0,8185,1522,1,0,0,0,8186,8187,
	3,105,52,0,8187,8188,3,117,58,0,8188,8189,3,95,47,0,8189,8190,3,101,50,
	0,8190,8191,3,87,43,0,8191,8192,4,761,85,0,8192,1524,1,0,0,0,8193,8194,
	3,105,52,0,8194,8195,3,119,59,0,8195,8196,3,101,50,0,8196,8197,3,101,50,
	0,8197,8198,3,115,57,0,8198,8199,4,762,86,0,8199,1526,1,0,0,0,8200,8201,
	3,107,53,0,8201,8202,3,117,58,0,8202,8203,3,93,46,0,8203,8204,3,87,43,0,
	8204,8205,3,113,56,0,8205,8206,3,115,57,0,8206,8207,4,763,87,0,8207,1528,
	1,0,0,0,8208,8209,3,107,53,0,8209,8210,3,121,60,0,8210,8211,3,87,43,0,8211,
	8212,3,113,56,0,8212,8213,4,764,88,0,8213,1530,1,0,0,0,8214,8215,3,109,
	54,0,8215,8216,3,87,43,0,8216,8217,3,113,56,0,8217,8218,3,83,41,0,8218,
	8219,3,87,43,0,8219,8220,3,105,52,0,8220,8221,3,117,58,0,8221,8222,5,95,
	0,0,8222,8223,3,113,56,0,8223,8224,3,79,39,0,8224,8225,3,105,52,0,8225,
	8226,3,99,49,0,8226,8227,4,765,89,0,8227,1532,1,0,0,0,8228,8229,3,109,54,
	0,8229,8230,3,113,56,0,8230,8231,3,87,43,0,8231,8232,3,83,41,0,8232,8233,
	3,87,43,0,8233,8234,3,85,42,0,8234,8235,3,95,47,0,8235,8236,3,105,52,0,
	8236,8237,3,91,45,0,8237,8238,4,766,90,0,8238,1534,1,0,0,0,8239,8240,3,
	113,56,0,8240,8241,3,79,39,0,8241,8242,3,105,52,0,8242,8243,3,99,49,0,8243,
	8244,4,767,91,0,8244,1536,1,0,0,0,8245,8246,3,113,56,0,8246,8247,3,87,43,
	0,8247,8248,3,115,57,0,8248,8249,3,109,54,0,8249,8250,3,87,43,0,8250,8251,
	3,83,41,0,8251,8252,3,117,58,0,8252,8253,4,768,92,0,8253,1538,1,0,0,0,8254,
	8255,3,113,56,0,8255,8256,3,107,53,0,8256,8257,3,123,61,0,8257,8258,5,95,
	0,0,8258,8259,3,105,52,0,8259,8260,3,119,59,0,8260,8261,3,103,51,0,8261,
	8262,3,81,40,0,8262,8263,3,87,43,0,8263,8264,3,113,56,0,8264,8265,4,769,
	93,0,8265,1540,1,0,0,0,8266,8267,3,117,58,0,8267,8268,3,95,47,0,8268,8269,
	3,87,43,0,8269,8270,3,115,57,0,8270,8271,4,770,94,0,8271,1542,1,0,0,0,8272,
	8273,3,119,59,0,8273,8274,3,105,52,0,8274,8275,3,81,40,0,8275,8276,3,107,
	53,0,8276,8277,3,119,59,0,8277,8278,3,105,52,0,8278,8279,3,85,42,0,8279,
	8280,3,87,43,0,8280,8281,3,85,42,0,8281,8282,4,771,95,0,8282,1544,1,0,0,
	0,8283,8284,3,123,61,0,8284,8285,3,95,47,0,8285,8286,3,105,52,0,8286,8287,
	3,85,42,0,8287,8288,3,107,53,0,8288,8289,3,123,61,0,8289,8290,4,772,96,
	0,8290,1546,1,0,0,0,8291,8292,3,87,43,0,8292,8293,3,103,51,0,8293,8294,
	3,109,54,0,8294,8295,3,117,58,0,8295,8296,3,127,63,0,8296,8297,4,773,97,
	0,8297,1548,1,0,0,0,8298,8299,3,97,48,0,8299,8300,3,115,57,0,8300,8301,
	3,107,53,0,8301,8302,3,105,52,0,8302,8303,5,95,0,0,8303,8304,3,117,58,0,
	8304,8305,3,79,39,0,8305,8306,3,81,40,0,8306,8307,3,101,50,0,8307,8308,
	3,87,43,0,8308,8309,4,774,98,0,8309,1550,1,0,0,0,8310,8311,3,105,52,0,8311,
	8312,3,87,43,0,8312,8313,3,115,57,0,8313,8314,3,117,58,0,8314,8315,3,87,
	43,0,8315,8316,3,85,42,0,8316,8317,4,775,99,0,8317,1552,1,0,0,0,8318,8319,
	3,107,53,0,8319,8320,3,113,56,0,8320,8321,3,85,42,0,8321,8322,3,95,47,0,
	8322,8323,3,105,52,0,8323,8324,3,79,39,0,8324,8325,3,101,50,0,8325,8326,
	3,95,47,0,8326,8327,3,117,58,0,8327,8328,3,127,63,0,8328,8329,4,776,100,
	0,8329,1554,1,0,0,0,8330,8331,3,109,54,0,8331,8332,3,79,39,0,8332,8333,
	3,117,58,0,8333,8334,3,93,46,0,8334,8335,4,777,101,0,8335,1556,1,0,0,0,
	8336,8337,3,93,46,0,8337,8338,3,95,47,0,8338,8339,3,115,57,0,8339,8340,
	3,117,58,0,8340,8341,3,107,53,0,8341,8342,3,113,56,0,8342,8343,3,127,63,
	0,8343,8344,4,778,102,0,8344,1558,1,0,0,0,8345,8346,3,113,56,0,8346,8347,
	3,87,43,0,8347,8348,3,119,59,0,8348,8349,3,115,57,0,8349,8350,3,87,43,0,
	8350,8351,4,779,103,0,8351,1560,1,0,0,0,8352,8353,3,115,57,0,8353,8354,
	3,113,56,0,8354,8355,3,95,47,0,8355,8356,3,85,42,0,8356,8357,4,780,104,
	0,8357,1562,1,0,0,0,8358,8359,3,117,58,0,8359,8360,3,93,46,0,8360,8361,
	3,113,56,0,8361,8362,3,87,43,0,8362,8363,3,79,39,0,8363,8364,3,85,42,0,
	8364,8365,5,95,0,0,8365,8366,3,109,54,0,8366,8367,3,113,56,0,8367,8368,
	3,95,47,0,8368,8369,3,107,53,0,8369,8370,3,113,56,0,8370,8371,3,95,47,0,
	8371,8372,3,117,58,0,8372,8373,3,127,63,0,8373,8374,4,781,105,0,8374,1564,
	1,0,0,0,8375,8376,3,113,56,0,8376,8377,3,87,43,0,8377,8378,3,115,57,0,8378,
	8379,3,107,53,0,8379,8380,3,119,59,0,8380,8381,3,113,56,0,8381,8382,3,83,
	41,0,8382,8383,3,87,43,0,8383,8384,4,782,106,0,8384,1566,1,0,0,0,8385,8386,
	3,115,57,0,8386,8387,3,127,63,0,8387,8388,3,115,57,0,8388,8389,3,117,58,
	0,8389,8390,3,87,43,0,8390,8391,3,103,51,0,8391,8392,4,783,107,0,8392,1568,
	1,0,0,0,8393,8394,3,121,60,0,8394,8395,3,83,41,0,8395,8396,3,109,54,0,8396,
	8397,3,119,59,0,8397,8398,4,784,108,0,8398,1570,1,0,0,0,8399,8400,3,103,
	51,0,8400,8401,3,79,39,0,8401,8402,3,115,57,0,8402,8403,3,117,58,0,8403,
	8404,3,87,43,0,8404,8405,3,113,56,0,8405,8406,5,95,0,0,8406,8407,3,109,
	54,0,8407,8408,3,119,59,0,8408,8409,3,81,40,0,8409,8410,3,101,50,0,8410,
	8411,3,95,47,0,8411,8412,3,83,41,0,8412,8413,5,95,0,0,8413,8414,3,99,49,
	0,8414,8415,3,87,43,0,8415,8416,3,127,63,0,8416,8417,5,95,0,0,8417,8418,
	3,109,54,0,8418,8419,3,79,39,0,8419,8420,3,117,58,0,8420,8421,3,93,46,0,
	8421,8422,4,785,109,0,8422,1572,1,0,0,0,8423,8424,3,91,45,0,8424,8425,3,
	87,43,0,8425,8426,3,117,58,0,8426,8427,5,95,0,0,8427,8428,3,103,51,0,8428,
	8429,3,79,39,0,8429,8430,3,115,57,0,8430,8431,3,117,58,0,8431,8432,3,87,
	43,0,8432,8433,3,113,56,0,8433,8434,5,95,0,0,8434,8435,3,109,54,0,8435,
	8436,3,119,59,0,8436,8437,3,81,40,0,8437,8438,3,101,50,0,8438,8439,3,95,
	47,0,8439,8440,3,83,41,0,8440,8441,5,95,0,0,8441,8442,3,99,49,0,8442,8443,
	3,87,43,0,8443,8444,3,127,63,0,8444,8445,5,95,0,0,8445,8446,3,115,57,0,
	8446,8447,3,127,63,0,8447,8448,3,103,51,0,8448,8449,4,786,110,0,8449,1574,
	1,0,0,0,8450,8451,3,113,56,0,8451,8452,3,87,43,0,8452,8453,3,115,57,0,8453,
	8454,3,117,58,0,8454,8455,3,79,39,0,8455,8456,3,113,56,0,8456,8457,3,117,
	58,0,8457,8458,4,787,111,0,8458,1576,1,0,0,0,8459,8460,3,85,42,0,8460,8461,
	3,87,43,0,8461,8462,3,89,44,0,8462,8463,3,95,47,0,8463,8464,3,105,52,0,
	8464,8465,3,95,47,0,8465,8466,3,117,58,0,8466,8467,3,95,47,0,8467,8468,
	3,107,53,0,8468,8469,3,105,52,0,8469,8470,4,788,112,0,8470,1578,1,0,0,0,
	8471,8472,3,85,42,0,8472,8473,3,87,43,0,8473,8474,3,115,57,0,8474,8475,
	3,83,41,0,8475,8476,3,113,56,0,8476,8477,3,95,47,0,8477,8478,3,109,54,0,
	8478,8479,3,117,58,0,8479,8480,3,95,47,0,8480,8481,3,107,53,0,8481,8482,
	3,105,52,0,8482,8483,4,789,113,0,8483,1580,1,0,0,0,8484,8485,3,107,53,0,
	8485,8486,3,113,56,0,8486,8487,3,91,45,0,8487,8488,3,79,39,0,8488,8489,
	3,105,52,0,8489,8490,3,95,47,0,8490,8491,3,129,64,0,8491,8492,3,79,39,0,
	8492,8493,3,117,58,0,8493,8494,3,95,47,0,8494,8495,3,107,53,0,8495,8496,
	3,105,52,0,8496,8497,4,790,114,0,8497,1582,1,0,0,0,8498,8499,3,113,56,0,
	8499,8500,3,87,43,0,8500,8501,3,89,44,0,8501,8502,3,87,43,0,8502,8503,3,
	113,56,0,8503,8504,3,87,43,0,8504,8505,3,105,52,0,8505,8506,3,83,41,0,8506,
	8507,3,87,43,0,8507,8508,4,791,115,0,8508,1584,1,0,0,0,8509,8510,3,107,
	53,0,8510,8511,3,109,54,0,8511,8512,3,117,58,0,8512,8513,3,95,47,0,8513,
	8514,3,107,53,0,8514,8515,3,105,52,0,8515,8516,3,79,39,0,8516,8517,3,101,
	50,0,8517,8518,4,792,116,0,8518,1586,1,0,0,0,8519,8520,3,115,57,0,8520,
	8521,3,87,43,0,8521,8522,3,83,41,0,8522,8523,3,107,53,0,8523,8524,3,105,
	52,0,8524,8525,3,85,42,0,8525,8526,3,79,39,0,8526,8527,3,113,56,0,8527,
	8528,3,127,63,0,8528,8529,4,793,117,0,8529,1588,1,0,0,0,8530,8531,3,115,
	57,0,8531,8532,3,87,43,0,8532,8533,3,83,41,0,8533,8534,3,107,53,0,8534,
	8535,3,105,52,0,8535,8536,3,85,42,0,8536,8537,3,79,39,0,8537,8538,3,113,
	56,0,8538,8539,3,127,63,0,8539,8540,5,95,0,0,8540,8541,3,87,43,0,8541,8542,
	3,105,52,0,8542,8543,3,91,45,0,8543,8544,3,95,47,0,8544,8545,3,105,52,0,
	8545,8546,3,87,43,0,8546,8547,4,794,118,0,8547,1590,1,0,0,0,8548,8549,3,
	115,57,0,8549,8550,3,87,43,0,8550,8551,3,83,41,0,8551,8552,3,107,53,0,8552,
	8553,3,105,52,0,8553,8554,3,85,42,0,8554,8555,3,79,39,0,8555,8556,3,113,
	56,0,8556,8557,3,127,63,0,8557,8558,5,95,0,0,8558,8559,3,101,50,0,8559,
	8560,3,107,53,0,8560,8561,3,79,39,0,8561,8562,3,85,42,0,8562,8563,4,795,
	119,0,8563,1592,1,0,0,0,8564,8565,3,115,57,0,8565,8566,3,87,43,0,8566,8567,
	3,83,41,0,8567,8568,3,107,53,0,8568,8569,3,105,52,0,8569,8570,3,85,42,0,
	8570,8571,3,79,39,0,8571,8572,3,113,56,0,8572,8573,3,127,63,0,8573,8574,
	5,95,0,0,8574,8575,3,119,59,0,8575,8576,3,105,52,0,8576,8577,3,101,50,0,
	8577,8578,3,107,53,0,8578,8579,3,79,39,0,8579,8580,3,85,42,0,8580,8581,
	4,796,120,0,8581,1594,1,0,0,0,8582,8583,3,79,39,0,8583,8584,3,83,41,0,8584,
	8585,3,117,58,0,8585,8586,3,95,47,0,8586,8587,3,121,60,0,8587,8588,3,87,
	43,0,8588,8589,4,797,121,0,8589,1596,1,0,0,0,8590,8591,3,95,47,0,8591,8592,
	3,105,52,0,8592,8593,3,79,39,0,8593,8594,3,83,41,0,8594,8595,3,117,58,0,
	8595,8596,3,95,47,0,8596,8597,3,121,60,0,8597,8598,3,87,43,0,8598,8599,
	4,798,122,0,8599,1598,1,0,0,0,8600,8601,3,101,50,0,8601,8602,3,79,39,0,
	8602,8603,3,117,58,0,8603,8604,3,87,43,0,8604,8605,3,113,56,0,8605,8606,
	3,79,39,0,8606,8607,3,101,50,0,8607,8608,4,799,123,0,8608,1600,1,0,0,0,
	8609,8610,3,113,56,0,8610,8611,3,87,43,0,8611,8612,3,117,58,0,8612,8613,
	3,79,39,0,8613,8614,3,95,47,0,8614,8615,3,105,52,0,8615,8616,4,800,124,
	0,8616,1602,1,0,0,0,8617,8618,3,107,53,0,8618,8619,3,101,50,0,8619,8620,
	3,85,42,0,8620,8621,4,801,125,0,8621,1604,1,0,0,0,8622,8623,3,105,52,0,
	8623,8624,3,87,43,0,8624,8625,3,117,58,0,8625,8626,3,123,61,0,8626,8627,
	3,107,53,0,8627,8628,3,113,56,0,8628,8629,3,99,49,0,8629,8630,5,95,0,0,
	8630,8631,3,105,52,0,8631,8632,3,79,39,0,8632,8633,3,103,51,0,8633,8634,
	3,87,43,0,8634,8635,3,115,57,0,8635,8636,3,109,54,0,8636,8637,3,79,39,0,
	8637,8638,3,83,41,0,8638,8639,3,87,43,0,8639,8640,4,802,126,0,8640,1606,
	1,0,0,0,8641,8642,3,87,43,0,8642,8643,3,105,52,0,8643,8644,3,89,44,0,8644,
	8645,3,107,53,0,8645,8646,3,113,56,0,8646,8647,3,83,41,0,8647,8648,3,87,
	43,0,8648,8649,3,85,42,0,8649,8650,4,803,127,0,8650,1608,1,0,0,0,8651,8652,
	3,79,39,0,8652,8653,3,113,56,0,8653,8654,3,113,56,0,8654,8655,3,79,39,0,
	8655,8656,3,127,63,0,8656,8657,4,804,128,0,8657,1610,1,0,0,0,8658,8659,
	3,107,53,0,8659,8660,3,97,48,0,8660,8661,4,805,129,0,8661,1612,1,0,0,0,
	8662,8663,3,103,51,0,8663,8664,3,87,43,0,8664,8665,3,103,51,0,8665,8666,
	3,81,40,0,8666,8667,3,87,43,0,8667,8668,3,113,56,0,8668,8669,4,806,130,
	0,8669,1614,1,0,0,0,8670,8671,3,113,56,0,8671,8672,3,79,39,0,8672,8673,
	3,105,52,0,8673,8674,3,85,42,0,8674,8675,3,107,53,0,8675,8676,3,103,51,
	0,8676,8677,4,807,131,0,8677,1616,1,0,0,0,8678,8679,3,103,51,0,8679,8680,
	3,79,39,0,8680,8681,3,115,57,0,8681,8682,3,117,58,0,8682,8683,3,87,43,0,
	8683,8684,3,113,56,0,8684,8685,5,95,0,0,8685,8686,3,83,41,0,8686,8687,3,
	107,53,0,8687,8688,3,103,51,0,8688,8689,3,109,54,0,8689,8690,3,113,56,0,
	8690,8691,3,87,43,0,8691,8692,3,115,57,0,8692,8693,3,115,57,0,8693,8694,
	3,95,47,0,8694,8695,3,107,53,0,8695,8696,3,105,52,0,8696,8697,5,95,0,0,
	8697,8698,3,79,39,0,8698,8699,3,101,50,0,8699,8700,3,91,45,0,8700,8701,
	3,107,53,0,8701,8702,3,113,56,0,8702,8703,3,95,47,0,8703,8704,3,117,58,
	0,8704,8705,3,93,46,0,8705,8706,3,103,51,0,8706,8707,4,808,132,0,8707,1618,
	1,0,0,0,8708,8709,3,103,51,0,8709,8710,3,79,39,0,8710,8711,3,115,57,0,8711,
	8712,3,117,58,0,8712,8713,3,87,43,0,8713,8714,3,113,56,0,8714,8715,5,95,
	0,0,8715,8716,3,129,64,0,8716,8717,3,115,57,0,8717,8718,3,117,58,0,8718,
	8719,3,85,42,0,8719,8720,5,95,0,0,8720,8721,3,83,41,0,8721,8722,3,107,53,
	0,8722,8723,3,103,51,0,8723,8724,3,109,54,0,8724,8725,3,113,56,0,8725,8726,
	3,87,43,0,8726,8727,3,115,57,0,8727,8728,3,115,57,0,8728,8729,3,95,47,0,
	8729,8730,3,107,53,0,8730,8731,3,105,52,0,8731,8732,5,95,0,0,8732,8733,
	3,101,50,0,8733,8734,3,87,43,0,8734,8735,3,121,60,0,8735,8736,3,87,43,0,
	8736,8737,3,101,50,0,8737,8738,4,809,133,0,8738,1620,1,0,0,0,8739,8740,
	3,109,54,0,8740,8741,3,113,56,0,8741,8742,3,95,47,0,8742,8743,3,121,60,
	0,8743,8744,3,95,47,0,8744,8745,3,101,50,0,8745,8746,3,87,43,0,8746,8747,
	3,91,45,0,8747,8748,3,87,43,0,8748,8749,5,95,0,0,8749,8750,3,83,41,0,8750,
	8751,3,93,46,0,8751,8752,3,87,43,0,8752,8753,3,83,41,0,8753,8754,3,99,49,
	0,8754,8755,3,115,57,0,8755,8756,5,95,0,0,8756,8757,3,119,59,0,8757,8758,
	3,115,57,0,8758,8759,3,87,43,0,8759,8760,3,113,56,0,8760,8761,4,810,134,
	0,8761,1622,1,0,0,0,8762,8763,3,103,51,0,8763,8764,3,79,39,0,8764,8765,
	3,115,57,0,8765,8766,3,117,58,0,8766,8767,3,87,43,0,8767,8768,3,113,56,
	0,8768,8769,5,95,0,0,8769,8770,3,117,58,0,8770,8771,3,101,50,0,8771,8772,
	3,115,57,0,8772,8773,5,95,0,0,8773,8774,3,83,41,0,8774,8775,3,95,47,0,8775,
	8776,3,109,54,0,8776,8777,3,93,46,0,8777,8778,3,87,43,0,8778,8779,3,113,
	56,0,8779,8780,3,115,57,0,8780,8781,3,119,59,0,8781,8782,3,95,47,0,8782,
	8783,3,117,58,0,8783,8784,3,87,43,0,8784,8785,3,115,57,0,8785,8786,4,811,
	135,0,8786,1624,1,0,0,0,8787,8788,3,95,47,0,8788,8789,3,105,52,0,8789,8790,
	3,117,58,0,8790,8791,5,49,0,0,8791,8792,1,0,0,0,8792,8793,6,812,55,0,8793,
	1626,1,0,0,0,8794,8795,3,95,47,0,8795,8796,3,105,52,0,8796,8797,3,117,58,
	0,8797,8798,5,50,0,0,8798,8799,1,0,0,0,8799,8800,6,813,56,0,8800,1628,1,
	0,0,0,8801,8802,3,95,47,0,8802,8803,3,105,52,0,8803,8804,3,117,58,0,8804,
	8805,5,51,0,0,8805,8806,1,0,0,0,8806,8807,6,814,29,0,8807,1630,1,0,0,0,
	8808,8809,3,95,47,0,8809,8810,3,105,52,0,8810,8811,3,117,58,0,8811,8812,
	5,52,0,0,8812,8813,1,0,0,0,8813,8814,6,815,25,0,8814,1632,1,0,0,0,8815,
	8816,3,95,47,0,8816,8817,3,105,52,0,8817,8818,3,117,58,0,8818,8819,5,56,
	0,0,8819,8820,1,0,0,0,8820,8821,6,816,57,0,8821,1634,1,0,0,0,8822,8823,
	3,115,57,0,8823,8824,3,111,55,0,8824,8825,3,101,50,0,8825,8826,5,95,0,0,
	8826,8827,3,117,58,0,8827,8828,3,115,57,0,8828,8829,3,95,47,0,8829,8830,
	5,95,0,0,8830,8831,3,115,57,0,8831,8832,3,87,43,0,8832,8833,3,83,41,0,8833,
	8834,3,107,53,0,8834,8835,3,105,52,0,8835,8836,3,85,42,0,8836,8837,1,0,
	0,0,8837,8838,6,817,58,0,8838,1636,1,0,0,0,8839,8840,3,115,57,0,8840,8841,
	3,111,55,0,8841,8842,3,101,50,0,8842,8843,5,95,0,0,8843,8844,3,117,58,0,
	8844,8845,3,115,57,0,8845,8846,3,95,47,0,8846,8847,5,95,0,0,8847,8848,3,
	103,51,0,8848,8849,3,95,47,0,8849,8850,3,105,52,0,8850,8851,3,119,59,0,
	8851,8852,3,117,58,0,8852,8853,3,87,43,0,8853,8854,1,0,0,0,8854,8855,6,
	818,59,0,8855,1638,1,0,0,0,8856,8857,3,115,57,0,8857,8858,3,111,55,0,8858,
	8859,3,101,50,0,8859,8860,5,95,0,0,8860,8861,3,117,58,0,8861,8862,3,115,
	57,0,8862,8863,3,95,47,0,8863,8864,5,95,0,0,8864,8865,3,93,46,0,8865,8866,
	3,107,53,0,8866,8867,3,119,59,0,8867,8868,3,113,56,0,8868,8869,1,0,0,0,
	8869,8870,6,819,60,0,8870,1640,1,0,0,0,8871,8872,3,115,57,0,8872,8873,3,
	111,55,0,8873,8874,3,101,50,0,8874,8875,5,95,0,0,8875,8876,3,117,58,0,8876,
	8877,3,115,57,0,8877,8878,3,95,47,0,8878,8879,5,95,0,0,8879,8880,3,85,42,
	0,8880,8881,3,79,39,0,8881,8882,3,127,63,0,8882,8883,1,0,0,0,8883,8884,
	6,820,17,0,8884,1642,1,0,0,0,8885,8886,3,115,57,0,8886,8887,3,111,55,0,
	8887,8888,3,101,50,0,8888,8889,5,95,0,0,8889,8890,3,117,58,0,8890,8891,
	3,115,57,0,8891,8892,3,95,47,0,8892,8893,5,95,0,0,8893,8894,3,123,61,0,
	8894,8895,3,87,43,0,8895,8896,3,87,43,0,8896,8897,3,99,49,0,8897,8898,1,
	0,0,0,8898,8899,6,821,61,0,8899,1644,1,0,0,0,8900,8901,3,115,57,0,8901,
	8902,3,111,55,0,8902,8903,3,101,50,0,8903,8904,5,95,0,0,8904,8905,3,117,
	58,0,8905,8906,3,115,57,0,8906,8907,3,95,47,0,8907,8908,5,95,0,0,8908,8909,
	3,103,51,0,8909,8910,3,107,53,0,8910,8911,3,105,52,0,8911,8912,3,117,58,
	0,8912,8913,3,93,46,0,8913,8914,1,0,0,0,8914,8915,6,822,62,0,8915,1646,
	1,0,0,0,8916,8917,3,115,57,0,8917,8918,3,111,55,0,8918,8919,3,101,50,0,
	8919,8920,5,95,0,0,8920,8921,3,117,58,0,8921,8922,3,115,57,0,8922,8923,
	3,95,47,0,8923,8924,5,95,0,0,8924,8925,3,111,55,0,8925,8926,3,119,59,0,
	8926,8927,3,79,39,0,8927,8928,3,113,56,0,8928,8929,3,117,58,0,8929,8930,
	3,87,43,0,8930,8931,3,113,56,0,8931,8932,1,0,0,0,8932,8933,6,823,63,0,8933,
	1648,1,0,0,0,8934,8935,3,115,57,0,8935,8936,3,111,55,0,8936,8937,3,101,
	50,0,8937,8938,5,95,0,0,8938,8939,3,117,58,0,8939,8940,3,115,57,0,8940,
	8941,3,95,47,0,8941,8942,5,95,0,0,8942,8943,3,127,63,0,8943,8944,3,87,43,
	0,8944,8945,3,79,39,0,8945,8946,3,113,56,0,8946,8947,1,0,0,0,8947,8948,
	6,824,64,0,8948,1650,1,0,0,0,8949,8950,7,29,0,0,8950,8951,1,0,0,0,8951,
	8952,6,825,65,0,8952,1652,1,0,0,0,8953,8955,7,30,0,0,8954,8953,1,0,0,0,
	8955,1654,1,0,0,0,8956,8958,3,63,31,0,8957,8959,7,31,0,0,8958,8957,1,0,
	0,0,8959,8960,1,0,0,0,8960,8958,1,0,0,0,8960,8961,1,0,0,0,8961,8962,1,0,
	0,0,8962,8963,6,827,66,0,8963,1656,1,0,0,0,8964,8966,3,133,66,0,8965,8964,
	1,0,0,0,8966,8967,1,0,0,0,8967,8965,1,0,0,0,8967,8968,1,0,0,0,8968,8969,
	1,0,0,0,8969,8977,7,4,0,0,8970,8974,3,1697,848,0,8971,8973,3,1695,847,0,
	8972,8971,1,0,0,0,8973,8976,1,0,0,0,8974,8972,1,0,0,0,8974,8975,1,0,0,0,
	8975,8978,1,0,0,0,8976,8974,1,0,0,0,8977,8970,1,0,0,0,8977,8978,1,0,0,0,
	8978,8999,1,0,0,0,8979,8981,3,133,66,0,8980,8979,1,0,0,0,8981,8982,1,0,
	0,0,8982,8980,1,0,0,0,8982,8983,1,0,0,0,8983,8984,1,0,0,0,8984,8988,3,1699,
	849,0,8985,8987,3,1695,847,0,8986,8985,1,0,0,0,8987,8990,1,0,0,0,8988,8986,
	1,0,0,0,8988,8989,1,0,0,0,8989,8999,1,0,0,0,8990,8988,1,0,0,0,8991,8995,
	3,1697,848,0,8992,8994,3,1695,847,0,8993,8992,1,0,0,0,8994,8997,1,0,0,0,
	8995,8993,1,0,0,0,8995,8996,1,0,0,0,8996,8999,1,0,0,0,8997,8995,1,0,0,0,
	8998,8965,1,0,0,0,8998,8980,1,0,0,0,8998,8991,1,0,0,0,8999,1658,1,0,0,0,
	9000,9001,7,13,0,0,9001,9002,3,1671,835,0,9002,1660,1,0,0,0,9003,9004,5,
	96,0,0,9004,1662,1,0,0,0,9005,9006,5,39,0,0,9006,1664,1,0,0,0,9007,9008,
	5,34,0,0,9008,1666,1,0,0,0,9009,9017,3,1661,830,0,9010,9011,4,833,136,0,
	9011,9013,5,92,0,0,9012,9010,1,0,0,0,9012,9013,1,0,0,0,9013,9014,1,0,0,
	0,9014,9016,9,0,0,0,9015,9012,1,0,0,0,9016,9019,1,0,0,0,9017,9018,1,0,0,
	0,9017,9015,1,0,0,0,9018,9020,1,0,0,0,9019,9017,1,0,0,0,9020,9021,3,1661,
	830,0,9021,1668,1,0,0,0,9022,9031,3,1665,832,0,9023,9024,4,834,137,0,9024,
	9025,5,92,0,0,9025,9027,9,0,0,0,9026,9023,1,0,0,0,9026,9027,1,0,0,0,9027,
	9028,1,0,0,0,9028,9030,9,0,0,0,9029,9026,1,0,0,0,9030,9033,1,0,0,0,9031,
	9032,1,0,0,0,9031,9029,1,0,0,0,9032,9034,1,0,0,0,9033,9031,1,0,0,0,9034,
	9035,3,1665,832,0,9035,9037,1,0,0,0,9036,9022,1,0,0,0,9037,9038,1,0,0,0,
	9038,9036,1,0,0,0,9038,9039,1,0,0,0,9039,1670,1,0,0,0,9040,9048,3,1663,
	831,0,9041,9042,4,835,138,0,9042,9044,5,92,0,0,9043,9041,1,0,0,0,9043,9044,
	1,0,0,0,9044,9045,1,0,0,0,9045,9047,9,0,0,0,9046,9043,1,0,0,0,9047,9050,
	1,0,0,0,9048,9049,1,0,0,0,9048,9046,1,0,0,0,9049,9051,1,0,0,0,9050,9048,
	1,0,0,0,9051,9052,3,1663,831,0,9052,9054,1,0,0,0,9053,9040,1,0,0,0,9054,
	9055,1,0,0,0,9055,9053,1,0,0,0,9055,9056,1,0,0,0,9056,1672,1,0,0,0,9057,
	9058,5,47,0,0,9058,9059,5,42,0,0,9059,9060,5,33,0,0,9060,9061,1,0,0,0,9061,
	9062,3,133,66,0,9062,9072,1,0,0,0,9063,9073,4,836,139,0,9064,9066,9,0,0,
	0,9065,9064,1,0,0,0,9066,9069,1,0,0,0,9067,9068,1,0,0,0,9067,9065,1,0,0,
	0,9068,9070,1,0,0,0,9069,9067,1,0,0,0,9070,9071,5,42,0,0,9071,9073,5,47,
	0,0,9072,9063,1,0,0,0,9072,9067,1,0,0,0,9073,9074,1,0,0,0,9074,9075,6,836,
	65,0,9075,1674,1,0,0,0,9076,9077,5,47,0,0,9077,9078,5,42,0,0,9078,9079,
	5,33,0,0,9079,9080,1,0,0,0,9080,9081,6,837,67,0,9081,9082,1,0,0,0,9082,
	9083,6,837,65,0,9083,1676,1,0,0,0,9084,9085,5,42,0,0,9085,9086,5,47,0,0,
	9086,9087,1,0,0,0,9087,9088,4,838,140,0,9088,9089,6,838,68,0,9089,9090,
	1,0,0,0,9090,9091,6,838,65,0,9091,1678,1,0,0,0,9092,9093,5,47,0,0,9093,
	9094,5,42,0,0,9094,9095,5,42,0,0,9095,9109,5,47,0,0,9096,9097,5,47,0,0,
	9097,9098,5,42,0,0,9098,9099,1,0,0,0,9099,9103,8,32,0,0,9100,9102,9,0,0,
	0,9101,9100,1,0,0,0,9102,9105,1,0,0,0,9103,9104,1,0,0,0,9103,9101,1,0,0,
	0,9104,9106,1,0,0,0,9105,9103,1,0,0,0,9106,9107,5,42,0,0,9107,9109,5,47,
	0,0,9108,9092,1,0,0,0,9108,9096,1,0,0,0,9109,9110,1,0,0,0,9110,9111,6,839,
	65,0,9111,1680,1,0,0,0,9112,9116,5,35,0,0,9113,9115,8,33,0,0,9114,9113,
	1,0,0,0,9115,9118,1,0,0,0,9116,9114,1,0,0,0,9116,9117,1,0,0,0,9117,9119,
	1,0,0,0,9118,9116,1,0,0,0,9119,9120,6,840,65,0,9120,1682,1,0,0,0,9121,9131,
	3,1685,842,0,9122,9126,7,34,0,0,9123,9125,8,33,0,0,9124,9123,1,0,0,0,9125,
	9128,1,0,0,0,9126,9124,1,0,0,0,9126,9127,1,0,0,0,9127,9132,1,0,0,0,9128,
	9126,1,0,0,0,9129,9132,3,1687,843,0,9130,9132,5,0,0,1,9131,9122,1,0,0,0,
	9131,9129,1,0,0,0,9131,9130,1,0,0,0,9132,9133,1,0,0,0,9133,9134,6,841,65,
	0,9134,1684,1,0,0,0,9135,9136,5,45,0,0,9136,9137,5,45,0,0,9137,1686,1,0,
	0,0,9138,9139,7,33,0,0,9139,1688,1,0,0,0,9140,9144,3,131,65,0,9141,9144,
	7,35,0,0,9142,9144,3,47,23,0,9143,9140,1,0,0,0,9143,9141,1,0,0,0,9143,9142,
	1,0,0,0,9144,9145,1,0,0,0,9145,9143,1,0,0,0,9145,9146,1,0,0,0,9146,1690,
	1,0,0,0,9147,9148,5,47,0,0,9148,9149,5,42,0,0,9149,1692,1,0,0,0,9150,9151,
	5,42,0,0,9151,9152,5,47,0,0,9152,1694,1,0,0,0,9153,9156,3,131,65,0,9154,
	9156,3,1697,848,0,9155,9153,1,0,0,0,9155,9154,1,0,0,0,9156,1696,1,0,0,0,
	9157,9158,7,36,0,0,9158,1698,1,0,0,0,9159,9160,7,37,0,0,9160,1700,1,0,0,
	0,43,0,1859,1869,1877,1881,1889,1897,1900,1905,1911,1914,1920,1929,4717,
	4781,6263,8954,8960,8967,8974,8977,8982,8988,8995,8998,9012,9017,9026,9031,
	9038,9043,9048,9055,9067,9072,9103,9108,9116,9126,9131,9143,9145,9155,69,
	7,390,0,1,73,0,7,772,0,1,78,1,1,108,2,1,109,3,1,111,4,1,125,5,7,450,0,1,
	168,6,1,173,7,1,175,8,1,176,9,7,574,0,1,181,10,1,187,11,1,188,12,7,113,
	0,7,476,0,7,484,0,1,255,13,7,90,0,7,503,0,7,486,0,1,291,14,7,529,0,7,279,
	0,1,399,15,1,411,16,7,561,0,1,418,17,7,233,0,1,444,18,1,445,19,1,487,20,
	7,602,0,7,467,0,7,468,0,1,578,21,7,64,0,1,621,22,1,622,23,1,623,24,1,624,
	25,1,631,26,1,635,27,1,636,28,1,637,29,1,642,30,1,643,31,1,668,32,7,673,
	0,1,705,33,1,707,34,1,708,35,7,651,0,7,623,0,7,436,0,7,305,0,7,219,0,7,
	158,0,7,371,0,7,223,0,7,266,0,7,377,0,0,1,0,1,827,36,1,837,37,1,838,38];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MySQLLexer.__ATN) {
			MySQLLexer.__ATN = new ATNDeserializer().deserialize(MySQLLexer._serializedATN);
		}

		return MySQLLexer.__ATN;
	}


	static DecisionsToDFA = MySQLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}