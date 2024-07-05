import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database: process.env.DATABASE,
  bcrypt_round: process.env.BCRYPT_ROUND,
  default_password: process.env.DEFOULT_PASS,
}
