import { CharStreams, CommonTokenStream } from 'antlr4'
import SQLiteLexer from './SQLiteLexer'
import SQLiteParser from './SQLiteParser'

export function parseSql(sql: string): SQLiteParser {
  const input = CharStreams.fromString(sql)
  const lexer = new SQLiteLexer(input)
  const parser = new SQLiteParser(new CommonTokenStream(lexer))
  return parser
}
