/**
 * ビルドの設定ファイル
 *
 * @author ICS-Kano
 */
/** ソースフォルダ */
const SRC_FOLDER = "./src";

/** TypeScriptフォルダ */
const TS_FOLDER = `${SRC_FOLDER}/ts`;
/** TypeScriptファイルのエントリーファイル */
const TS_ENTRY_FILES_NAME = {
  "script": "Main.ts"
};


/** 変換後のJS格納フォルダ */
const JS_FOLDER = `${SRC_FOLDER}/js`;

/** SCSSフォルダ */
const SCSS_FOLDER = `${SRC_FOLDER}/scss`;
/** 変換対象のSassファイル */
const SCSS_FILES = `${SCSS_FOLDER}/**.scss`;
/** 変換後のCSS格納フォルダ */
const CSS_FOLDER = `${SRC_FOLDER}/css`;

// TypeScrptのエントリーファイルの作成
let tsEntryFiles = {};
for (let tsKey in TS_ENTRY_FILES_NAME) {
  const key = tsKey;
  const tsFile = `${TS_FOLDER}/${TS_ENTRY_FILES_NAME[tsKey]}`;
  tsEntryFiles[key] = tsFile;
}

// moduleとしてexportする
module.exports = {
  srcFolder: SRC_FOLDER,
  scssFolder: SCSS_FOLDER,
  scssFile: SCSS_FILES,
  cssFolder: CSS_FOLDER,
  tsFolder: TS_FOLDER,
  tsEntryFiles: tsEntryFiles,
  jsFolder: JS_FOLDER,
};