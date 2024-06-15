import MySQLParser, { MySQLParserListener } from '../src'
import { RuleContext } from 'antlr4'

class ParserListener implements MySQLParserListener {
  exitEveryRule(ctx: RuleContext): void {
    console.log(ctx)
  }
}

const parserListener = new ParserListener()

const parser = new MySQLParser({
  parserListener
})

parser.parse(`SELECT id FROM users`)
